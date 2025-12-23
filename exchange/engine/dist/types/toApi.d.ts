import { Order } from "../trade/Orderbook";
export declare const CREATE_ORDER = "CREATE_ORDER";
export declare const CANCEL_ORDER = "CANCEL_ORDER";
export declare const ON_RAMP = "ON_RAMP";
export declare const GET_DEPTH = "GET_DEPTH";
export type MessageToApi = {
    type: "DEPTH";
    payload: {
        bids: [string, string][];
        asks: [string, string][];
    };
} | {
    type: "ORDER_PLACED";
    payload: {
        orderId: string;
        executedQty: number;
        fills: {
            price: string;
            qty: number;
            tradeId: number;
        }[];
    };
} | {
    type: "ORDER_CANCELLED";
    payload: {
        orderId: string;
        executedQty: number;
        remainingQty: number;
    };
} | {
    type: "OPEN_ORDERS";
    payload: Order[];
};
//# sourceMappingURL=toApi.d.ts.map