import { WebSocketServer, WebSocket } from 'ws'

const wss = new WebSocketServer({port:8080})


const subscriptions:{[key:string]:{
   ws:WebSocket
   rooms:string[] 
}} = {
    
}

// "userId":"{
      // ws:"",
      // rooms:[ 
      //   roomId1,
      //   roomId1,        
   // ]
// }"


console.log(subscriptions)


wss.on('connection',function connection(userSocket){
    const id =  randomId()
     subscriptions[id] = {
      ws:userSocket,
      rooms:[],
     }
     userSocket.on('message',function message(data){
      const parseMsg = JSON.parse(data as unknown as string)
      if(parseMsg.type === "SUBSCRIBE"){
           subscriptions[id]?.rooms.push(parseMsg.room)  
      } 
      if(parseMsg.type === "sendMessage"){
         const message = parseMsg.message
         const roomId = parseMsg.roomId
         Object.keys(subscriptions).forEach((userId)=>{
            const sub = subscriptions[userId]
            if(!sub) return ;
            const { ws, rooms } = sub;
            if(rooms.includes(roomId)){
               ws.send(message)
            }
         })
      }
     })
})


function randomId(){
   return Math.random()
}