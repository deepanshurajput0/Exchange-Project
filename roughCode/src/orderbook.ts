interface Order {
    price:number,
    quantity:number,
    orderId:string
}

interface Bids extends Order{
    side:'buy'
}

interface Asks extends Order{
    side:'sell'
}



interface OrderBook {
    bids:Bids[],
    asks:Asks[]
}

export const orderbook:OrderBook = {
   bids:[

   ],
   asks:[

   ]    
}



export const bookWithQuantity:{asks:{[price:number]:number},bids:{[price:number]:number}} ={
    bids:{},
    asks:{}
}

