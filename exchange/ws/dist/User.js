import { WebSocket } from "ws";
import { SubscriptionManager } from "./SubscriptionManager.js";
import { SUBSCRIBE, UNSUBSCRIBE } from "./types/in.js";
export class User {
    id;
    ws;
    constructor(id, ws) {
        this.id = id;
        this.ws = ws;
        this.addListeners();
    }
    subscriptions = [];
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    unsubscribe(subscription) {
        this.subscriptions = this.subscriptions.filter(s => s !== subscription);
    }
    emit(message) {
        this.ws.send(JSON.stringify(message));
    }
    addListeners() {
        this.ws.on("message", (message) => {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.method === SUBSCRIBE) {
                parsedMessage.params.forEach(s => SubscriptionManager.getInstance().subscribe(this.id, s));
            }
            if (parsedMessage.method === UNSUBSCRIBE) {
                parsedMessage.params.forEach(s => SubscriptionManager.getInstance().
                    // @ts-ignore
                    unsubscribe(this.id, parsedMessage.params[0]));
            }
        });
    }
}
//# sourceMappingURL=User.js.map