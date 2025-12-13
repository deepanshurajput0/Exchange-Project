import { RedisManager } from "../RedisManager.js";
import { ORDER_UPDATE, TRADE_ADDED } from "../types/index.js";
import { CANCEL_ORDER, CREATE_ORDER, GET_DEPTH, GET_OPEN_ORDERS,MessageFromApi,ON_RAMP } from "../types/fromApi.js";
import type { Order, Orderbook } from "./OrderBook.js";

export const BASE_CURRENCY = 'INR'

interface UserBalance {
    [key:string]:{
        available:number,
        locked:number
    }
}


export class Engine {
    orderbook:Orderbook[] = []
    private balances:Map<string,string> = new Map()



    process({message,clientId}:{message:MessageFromApi,clientId:string}){
        switch(message.type){
            case CREATE_ORDER:
                try {
                    const { executedQty, fills, orderId } = this.createOrder(message.data.market,message.data.price,message.data.quantity,message.data.side,message.data.userId)
                    RedisManager.getInstance().sendToApi(clientId,{
                        type:'ORDER_PLACED',
                        payload:{
                            orderId,
                            executedQty,
                            fills
                        }
                    })
                } catch (error) {
                    console.log(error)
                    RedisManager.getInstance().sendToApi(clientId,{
                        type:"ORDER_CANCELLED",
                        payload:{
                            orderId:"",
                            executedQty:0,
                            remainingQty:0
                        }
                    })
                }
                break;
                case CANCEL_ORDER:
                try {
                    const orderId = message.data.orderId;
                    const cancelMarket = message.data.market;
                    const cancelOrderbook = this.orderbook.find(o=>o.ticker()===cancelMarket)
                    const quoteAsset = cancelMarket.split("_")[1];
                    if (!cancelOrderbook) {
                        throw new Error("No orderbook found");
                    }

                    const order = cancelOrderbook.asks.find(o=>o.orderId === orderId) || cancelOrderbook.bids.find(o=>o.orderId === orderId)
                    if(order?.side === 'buy' ){
                         const price = cancelOrderbook.cancelBid(order)
                         const leftQuantity = (order.quantity - order.filled) * order.price
                         //@ts-ignore
                         this.balances.get(order.userId)[BASE_CURRENCY].available +=leftQuantity;
                         //@ts-ignore
                        this.balances.get(order.userId)[BASE_CURRENCY].locked -= leftQuantity;
                        if(price){
                          this.sendUpdatedDepthAt(price.toString(),cancelMarket)
                        }

                    }else{
                        const price = cancelOrderbook.cancelAsk(order)
                        const leftQuantity = order.quantity - order.filled;
                        //@ts-ignore
                        this.balances.get(order.userId)[quoteAsset].available += leftQuantity;
                        //@ts-ignore
                        this.balances.get(order.userId)[quoteAsset].locked -= leftQuantity;
                        if (price) {
                            this.sendUpdatedDepthAt(price.toString(), cancelMarket);
                        }
                    } 
                        RedisManager.getInstance().sendToApi(clientId, {
                        type: "ORDER_CANCELLED",
                        payload: {
                            orderId,
                            executedQty: 0,
                            remainingQty: 0
                        }
                    });

                } catch (error) {
                     console.log("Error hwile cancelling order", );
                    console.log(error)
                }
        }
    }


    createOrder(market:string,price:string,quantity:string,side:"buy"|"sell",userId:string){
       const orderbook = this.orderbook.find(o=>o.ticker()==market)
       const baseAsset = market.split('_')[0]
       const quoteAsset = market.split('_')[1]

       if(!orderbook){
          throw new Error('No orderbook found')
       }
     this.checkAndLockFunds(baseAsset,quoteAsset,side,userId,price,quantity)

         const order: Order = {
            price: Number(price),
            quantity: Number(quantity),
            orderId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            filled: 0,
            side,
            userId
        }
        
        const { fills, executedQty } = orderbook.addOrder(order);
        this.updateBalance(userId, baseAsset, quoteAsset, side, fills, executedQty);
        this.createDbTrades(fills, market, userId);
        this.updateDbOrders(order, executedQty, fills, market);
        this.publisWsDepthUpdates(fills, price, side, market);
        this.publishWsTrades(fills, userId, market);
        return { executedQty, fills, orderId: order.orderId };

    }
    checkAndLockFunds(baseAsset:string,quoteAsset:string,side:"buy"|"side",userId:string,price:string,quantity:string){
       if(side === 'buy'){
        if((this.balances.get(userId).[quoteAsset].available || 0) < Number(quantity) * Number(price)){
            throw new Error("insufficient funds")
        }
        this.balances.get(userId).[quoteAsset].available = this.balances.get(userId)?.[quoteAsset].available - (Number(quantity) * Number(price))
       
       this.balances.get(userId)[quoteAsset].locked = this.balances.get(userId)?.[quoteAsset].locked + (Number(quantity) * Number(price));
       }else{
        if((this.balances.get(userId)[quoteAsset].available) || 0 < Number(quantity)){
            throw new Error("Insufficient funds")
        }
        this.balances.get(userId)[baseAsset]  =  this.balances.get(userId)?.[baseAsset].available - (Number(quantity));
        this.balances.get(userId)[quoteAsset] = this.balances.get(userId)?.[quoteAsset].locked =  this.balances.get(userId)?.[baseAsset].locked +(Number(quantity));
       }
    }
    onRamp(userId:string,amount:number){
      const userBalance = this.balances.get(userId)
      if(!userBalance){
        this.balances.set(userId,{
            [BASE_CURRENCY]:{
                available:amount,
                locked:0
            }
        });
      }else{
        userBalance[BASE_CURRENCY].available+=amount
      }
    }

    setBaseBalances(){
        this.balances.set("1",{
            [BASE_CURRENCY]:{
                available:10000000,
                locked:0,
            },
            "TATA":{
                available:10000000,
                locked:0
            }
        })

             this.balances.set("2", {
            [BASE_CURRENCY]: {
                available: 10000000,
                locked: 0
            },
            "TATA": {
                available: 10000000,
                locked: 0
            }
        });

        this.balances.set("5", {
            [BASE_CURRENCY]: {
                available: 10000000,
                locked: 0
            },
            "TATA": {
                available: 10000000,
                locked: 0
            }
        });
    }
}


