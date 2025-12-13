import { RedisManager } from "../RedisManager.js";
import { ORDER_UPDATE, TRADE_ADDED } from "../types/index.js";
import { CANCEL_ORDER, CREATE_ORDER, GET_DEPTH, GET_OPEN_ORDERS,MessageFromApi,ON_RAMP } from "../types/fromApi.js";
import type { Orderbook } from "./OrderBook.js";

export const BASE_CURRENCY = 'INR'

interface UserBalance {
    [key:string]:{
        available:number,
        locked:number
    }
}


export class Engine {
    orderbook:Orderbook[] = []
    private balance:Map<string,string> = new Map()



    process({message,clientId}:{message:MessageFromApi,clientId:string}){
        switch(message.type){
            case CREATE_ORDER:
                try {
                    const { executedQty, fills, orderId } = this.createOrder(message.data.market,message.data.price,message.data.quantity,message.data.side,message.data.userId)

                } catch (error) {
                    
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

    }
    checkAndLockFunds(baseAsset:string,quoteAsset:string,side:"buy"|"side",userId:string,price:string,quantity:string){
       if(side === 'buy'){
        if((this.balance.get(userId).[quoteAsset].available || 0) < Number(quantity) * Number(price))
            throw new Error("insufficient funds")
       }
       this.balance.get(userId).[quoteAsset].available = this.balance.get(userId)?.[quoteAsset].available - (Number(quantity) * Number(price))
       
       this.balances.get(userId)[quoteAsset].locked = this.balances.get(userId)?.[quoteAsset].locked + (Number(quantity) * Number(price));
       
    }
}


