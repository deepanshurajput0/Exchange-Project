import { DEPTH_UPDATE, TICKER_UPDATE } from "./trade/events.js";
import { createClient } from "redis";
import { ORDER_UPDATE, TRADE_ADDED } from "./types/index.js";
export class RedisManager {
    client;
    static instance;
    constructor() {
        this.client = createClient();
        this.client.connect();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new RedisManager();
        }
        return this.instance;
    }
    pushMessage(message) {
        this.client.lPush("db_processor", JSON.stringify(message));
    }
    publishMessage(channel, message) {
        this.client.publish(channel, JSON.stringify(message));
    }
    sendToApi(clientId, message) {
        this.client.publish(clientId, JSON.stringify(message));
    }
}
//# sourceMappingURL=RedisManager.js.map