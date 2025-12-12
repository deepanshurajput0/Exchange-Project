export interface Order {
    price:number,
    quantity:number,
    orderId:string,
    side: 'buy' | 'sell'
    filled:number
    userId:string,
}


export interface Fill {
    price:string,
    qty:number,
    tradeId:number,
    otherUserId:string,
    marketOrderId:string

}

export class Orderbook {
    bids:Order[];
    asks:Order[];
    baseAsset: string;
    quoteAsset: string;
    lastTradeId: number;
    currentPrice: number;

    constructor(baseAsset:string,bids: Order[], asks:Order[],lastTradeId:number,currentPrice:number){
      this.bids = bids
      this.asks = asks
      this.baseAsset = baseAsset
      this.quoteAsset = quoteAsset
      lastTradeId = lastTradeId
      currentPrice = currentPrice

    }
    ticker(){
        return `${this.baseAsset}_${this.quoteAsset}`
    }
     getSnapshot() {
        return {
            baseAsset: this.baseAsset,
            bids: this.bids,
            asks: this.asks,
            lastTradeId: this.lastTradeId,
            currentPrice: this.currentPrice
        }
    }
    addOrder(order:Order):{ fills:Fill[],executedQty:number}{
       const fills:Fill[] = []
       let executedQty = 0;
       for(let i=0; i<this.asks.length; i++){
          if(this.asks[i]?.price<=order.price && executedQty<order.quantity){ 
            const filledQty = Math.min((order.quantity-executedQty),this.asks[i]?.quantity)
            executedQty = executedQty + filledQty;
            this.asks[i]?.filled += filledQty;
            fills.push({
                price:this.asks[i]?.price.toString(),
                qty:filledQty,
                tradeId:this.lastTradeId++,
                otherUserId:this.asks[i]?.userId,
                marketOrderId:this.asks[i]?.orderId,
            })
            
          } 
          
       }
        for (let i = 0; i < this.asks.length; i++) {
            if (this?.asks[i].filled === this?.asks[i].quantity) {
                this.asks.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQty
        };
    }

    matchAsk(order:Order):{fills:Fill[],executedQty:number}{
         let fills:Fill[] =[]
         let executedQty = 0;
         for(let i=0; i<this.bids.length; i++){
           if(this.bids[i]?.price>=order.price && executedQty < order.quantity){
               const amountRemaining = Math.min(order.quantity - executedQty,this.bids[i]?.quantity)
               executedQty+=amountRemaining
               this.bids[i]?.filled+=amountRemaining;

            fills.push({
            price:this.bids[i]?.price.toString(),
            qty:amountRemaining,
            tradeId:this.lastTradeId++,
            otherUserId:this.bids[i]?.userId,
            marketOrderId:this.bids[i]?.orderId
           })
           }
          
         }
         for (let i = 0; i < this.bids.length; i++) {
            if (this.bids[i].filled === this.bids[i].quantity) {
                this.bids.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQty
        };
    }
    

}



