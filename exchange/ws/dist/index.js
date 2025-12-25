import { WebSocketServer } from 'ws';
import { UserManager } from './UserManager.js';
const wss = new WebSocketServer({ port: 3001 });
wss.on('connection', (ws) => {
    UserManager.getInstance().addUser(ws);
});
//# sourceMappingURL=index.js.map