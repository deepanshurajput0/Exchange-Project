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
       for(let i=0; i<=this.asks.length; i++){
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
    }

}