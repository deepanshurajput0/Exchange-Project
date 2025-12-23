import { ORDER_UPDATE, TRADE_ADDED } from "./types/index.js";
import type { WsMessage } from "./types/toWs.js";
import type { MessageToApi } from "./types/toApi.js";
type DbMessage = {
    type: typeof TRADE_ADDED;
    data: {
        id: string;
        isBuyerMaker: boolean;
        price: string;
        quantity: string;
        quoteQuantity: string;
        timestamp: number;
        market: string;
    };
} | {
    type: typeof ORDER_UPDATE;
    data: {
        orderId: string;
        executedQty: number;
        market?: string;
        price?: string;
        quantity?: string;
        side?: "buy" | "sell";
    };
};
export declare class RedisManager {
    private client;
    private static instance;
    constructor();
    static getInstance(): RedisManager;
    pushMessage(message: DbMessage): void;
    publishMessage(channel: string, message: WsMessage): void;
    sendToApi(clientId: string, message: MessageToApi): void;
}
export {};
//# sourceMappingURL=RedisManager.d.ts.map