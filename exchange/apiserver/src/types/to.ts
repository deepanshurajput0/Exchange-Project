import { CANCEL_ORDER,CREATE_ORDER,ON_RAMP, GET_OPEN_ORDERS,GET_DEPTH} from "./index.js";

export type MessageToEngine = {
    type:typeof CREATE_ORDER,
    data:{
        market:string,
        price:number,
        quantity:number,
        side: 'buy' | 'sell',
        userId:string
    } 
}
| 
{
    type: typeof CANCEL_ORDER,
    data:{
        orderId:string,
        marketId:string
    }
}

| {
    type: typeof ON_RAMP,
    data: {
        amount: string,
        userId: string,
        txnId: string
    }
} | {
    type: typeof GET_DEPTH,
    data: {
        market: string,
    }
} | {
    type: typeof GET_OPEN_ORDERS,
    data: {
        userId: string,
        market: string,
    }
}