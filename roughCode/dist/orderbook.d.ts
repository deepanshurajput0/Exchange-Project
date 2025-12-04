interface Order {
    price: number;
    quantity: number;
    orderId: string;
}
interface Bids extends Order {
    side: 'bid';
}
interface Asks extends Order {
    side: 'ask';
}
interface OrderBook {
    bids: Bids[];
    asks: Asks[];
}
export declare const orderbook: OrderBook;
export declare const bookWithQuantity: {
    asks: {
        [price: number]: number;
    };
    bids: {
        [price: number]: number;
    };
};
export {};
//# sourceMappingURL=orderbook.d.ts.map