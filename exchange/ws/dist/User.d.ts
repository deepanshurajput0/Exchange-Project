import { WebSocket } from "ws";
import type { OutgoingMessage } from "./types/out.js";
export declare class User {
    private id;
    private ws;
    constructor(id: string, ws: WebSocket);
    private subscriptions;
    subscribe(subscription: string): void;
    unsubscribe(subscription: string): void;
    emit(message: OutgoingMessage): void;
    private addListeners;
}
//# sourceMappingURL=User.d.ts.map