import { createClient } from 'redis'

async function main(){
    const engine = ''
    const redisClient = createClient()
    await redisClient.connect()
    console.log('connected to redis')
       while (true) {
        const response = await redisClient.rPop("messages" as string)
        if (!response) {

        }  else {
            engine.process(JSON.parse(response));
        }        
    }
}