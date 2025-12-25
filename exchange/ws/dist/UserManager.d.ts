import { WebSocket } from "ws";
import { User } from "./User.js";
export declare class UserManager {
    private static instance;
    private users;
    private constructor();
    static getInstance(): UserManager;
    addUser(ws: WebSocket): User;
    private registerOnClose;
    getUser(id: string): User | undefined;
    private getRandomId;
}
//# sourceMappingURL=UserManager.d.ts.map