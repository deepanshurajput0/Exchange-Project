import { Router } from 'express';
import { RedisManager } from '../redisManager.js';
export const depthRouter = Router();
depthRouter.get('/', async (req, res) => {
    const { symbol } = req.query;
    const response = await RedisManager.getInstance().sendAndAwait({
        type: 'GET_DEPTH',
        data: {
            market: symbol
        }
    });
    res.json(response.payload);
});
//# sourceMappingURL=depth.js.map