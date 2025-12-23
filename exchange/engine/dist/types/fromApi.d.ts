export declare const CREATE_ORDER = "CREATE_ORDER";
export declare const CANCEL_ORDER = "CANCEL_ORDER";
export declare const ON_RAMP = "ON_RAMP";
export declare const GET_DEPTH = "GET_DEPTH";
export declare const GET_OPEN_ORDERS = "GET_OPEN_ORDERS";
export type MessageFromApi = {
    type: typeof CREATE_ORDER;
    data: {
        market: string;
        price: string;
        quantity: string;
        side: "buy" | "sell";
        userId: string;
    };
} | {
    type: typeof CANCEL_ORDER;
    data: {
        orderId: string;
        market: string;
    };
} | {
    type: typeof ON_RAMP;
    data: {
        amount: string;
        userId: string;
        txnId: string;
    };
} | {
    type: typeof GET_DEPTH;
    data: {
        market: string;
    };
} | {
    type: typeof GET_OPEN_ORDERS;
    data: {
        userId: string;
        market: string;
    };
};
//# sourceMappingURL=fromApi.d.ts.map