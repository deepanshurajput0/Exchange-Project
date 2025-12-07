import { WebSocketServer, WebSocket } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
const subscriptions = {};
// "userId":"{
// ws:"",
// rooms:[ 
//   roomId1,
//   roomId1,        
// ]
// }"
console.log(subscriptions);
wss.on('connection', function connection(userSocket) {
    const id = randomId();
    subscriptions[id] = {
        ws: userSocket,
        rooms: [],
    };
    userSocket.on('message', function message(data) {
        const parseMsg = JSON.parse(data);
        if (parseMsg.type === "SUBSCRIBE") {
            subscriptions[id]?.rooms.push(parseMsg.room);
        }
        if (parseMsg.type === "sendMessage") {
            const message = parseMsg.message;
            const roomId = parseMsg.roomId;
            Object.keys(subscriptions).forEach((userId) => {
                const sub = subscriptions[userId];
                if (!sub)
                    return;
                const { ws, rooms } = sub;
                if (rooms.includes(roomId)) {
                    ws.send(message);
                }
            });
        }
    });
});
function randomId() {
    return Math.random();
}
//# sourceMappingURL=index.js.map