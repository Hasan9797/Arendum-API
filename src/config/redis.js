import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('error', (err) => console.error('Redis Error:', err));

(async () => {
    await redisClient.connect(); // Redis serverga ulanish
    console.log('Connected to Redis');
})();

export default redisClient;
