import { type MessageFromApi } from "../types/fromApi.js";
import { Orderbook } from "./OrderBook.js";
import type { Fill, Order } from './OrderBook.js';
export declare const BASE_CURRENCY = "INR";
export declare class Engine {
    private orderbooks;
    private balances;
    constructor();
    saveSnapshot(): void;
    process({ message, clientId }: {
        message: MessageFromApi;
        clientId: string;
    }): void;
    addOrderbook(orderbook: Orderbook): void;
    createOrder(market: string, price: string, quantity: string, side: "buy" | "sell", userId: string): {
        executedQty: number;
        fills: Fill[];
        orderId: string;
    };
    updateDbOrders(order: Order, executedQty: number, fills: Fill[], market: string): void;
    createDbTrades(fills: Fill[], market: string, userId: string): void;
    publishWsTrades(fills: Fill[], userId: string, market: string): void;
    sendUpdatedDepthAt(price: string, market: string): void;
    publisWsDepthUpdates(fills: Fill[], price: string, side: "buy" | "sell", market: string): void;
    updateBalance(userId: string, baseAsset: string, quoteAsset: string, side: "buy" | "sell", fills: Fill[], executedQty: number): void;
    checkAndLockFunds(baseAsset: string, quoteAsset: string, side: "buy" | "sell", userId: string, asset: string, price: string, quantity: string): void;
    onRamp(userId: string, amount: number): void;
    setBaseBalances(): void;
}
//# sourceMappingURL=Engine.d.ts.map