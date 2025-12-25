import { Client } from 'pg';
import { createClient } from 'redis';
const pgClient = new Client({
    user: 'your_user',
    host: 'localhost',
    database: 'my_database',
    password: 'your_password',
    port: 5433,
});
pgClient.connect();
async function main() {
    const redisClient = createClient();
    await redisClient.connect();
    console.log('Connected to redis');
    while (true) {
        const response = await redisClient.rPop('db_processor');
        if (!response) {
        }
        else {
            const data = JSON.parse("db_processor");
            if (data.type === 'TRADE_ADDED') {
                console.log('adding data');
                const price = data.data.price;
                const timestamp = new Date(data.data.timestamp);
                const query = 'INSERT INTO tata_prices (time, price) VALUES ($1, $2)';
                const values = [timestamp, price];
                await pgClient.query(query, values);
            }
        }
    }
}
main();
//# sourceMappingURL=index.js.map