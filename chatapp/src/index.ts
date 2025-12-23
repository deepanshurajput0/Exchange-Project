import { WebSocketServer, WebSocket } from 'ws'
import { createClient } from 'redis'
const wss = new WebSocketServer({port:8080})

const publishClient = createClient()
publishClient.connect()

const subscriberClient = createClient()
subscriberClient.connect()

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
           if(oneUserSubscribedTo(parseMsg.room)){
               console.log("subscribing on the pub sub to room " + parseMsg.room);
               subscriberClient.subscribe(parseMsg.room,(message)=>{
                  const parsedMessage = JSON.parse(message)
                   Object.values(subscriptions).forEach(({ws, rooms}) => {
        if (rooms.includes(parsedMessage.roomId)) {
            ws.send(parsedMessage.message)
        }
    })
               })
           }

      } 

      //    if (parseMsg.type === "UNSUBSCRIBE") {
            
      //       subscriptions[id]?.rooms = subscriptions[id]?.rooms.filter(x => x !== parseMsg.room)
      //       if (lastPersonLeftRoom(parseMsg.room)) {
      //           console.log("unsubscribing from pub sub on room" + parseMsg.room);
      //           subscriberClient.unsubscribe(parseMsg.room);
      //       }
      //   }
      if(parseMsg.type === "sendMessage"){
         const message = parseMsg.message
         const roomId = parseMsg.roomId 
         publishClient.publish(roomId,JSON.stringify({
            type:'sendMessage',
            roomId:roomId,
            message
         }))
      }
     })
})

// atleast first person is subscribed to room1 then you don't need to re subscribe it 
function oneUserSubscribedTo(roomId:string){
   let totalInterestedPeople = 0;
   Object.keys(subscriptions).map(userId=>{
      if(subscriptions[userId]?.rooms.includes(roomId))
         totalInterestedPeople++
   })
   if(totalInterestedPeople === 1){
      return true;
   }
   return false
}

function lastPersonLeftRoom(roomId: string) {
    let totalInterestedPeople = 0;
    Object.keys(subscriptions).map(userId => {
        if (subscriptions[userId]?.rooms.includes(roomId)) {
            totalInterestedPeople++;
        }
    })
    if (totalInterestedPeople === 0) {
        return true;
    }
    return false;
}

function randomId(){
   return Math.random()
}
