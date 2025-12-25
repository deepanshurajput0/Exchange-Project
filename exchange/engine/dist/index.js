import { createClient, } from "redis";
import { Engine } from "./trade/Engine.js";
async function main() {
    const engine = new Engine();
    const redisClient = createClient();
    await redisClient.connect();
    console.log("connected to redis");
    while (true) {
        const response = await redisClient.rPop("messages");
        if (!response) {
            await new Promise(r => setTimeout(r, 10));
            continue;
        }
        try {
            engine.process(JSON.parse(response));
        }
        catch (err) {
            console.error("Engine error:", err);
        }
    }
}
main();
//# sourceMappingURL=index.js.map