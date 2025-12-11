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
    addOrder(order:Order):{executedQty:number, fills:Fill[]}{
       
    }

}