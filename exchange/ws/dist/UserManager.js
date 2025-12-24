import { WebSocket } from 'ws';
import { User } from './User.js';
import { SubscriptionManager } from './SubscriptionManager.js';
export class UserManager {
    static instance;
    users = new Map();
    constructor() {
    }
    static getInstance() {
        if (this.instance) {
            this.instance = new UserManager();
        }
        return this.instance;
    }
    addUser(ws) {
        const id = this.getRandomId();
        const user = new User(id, ws);
        this.users.set(id, user);
        this.registerOnClose(ws, id);
        return user;
    }
    registerOnClose(ws, id) {
        ws.on("close", () => {
            this.users.delete(id);
            //@ts-ignore
            SubscriptionManager.getInstance().userLeft(id);
        });
    }
    getUser(id) {
        return this.users.get(id);
    }
    getRandomId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
//# sourceMappingURL=UserManager.js.map