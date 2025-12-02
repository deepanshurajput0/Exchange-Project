import { createClient } from 'redis';
const client = createClient();
client.connect();
export default client;
//# sourceMappingURL=redisClient.js.map