import { Router } from 'express';
export const tradesRouter = Router();
tradesRouter.get('/', (req, res) => {
    const { market } = req.query;
    res.json({});
});
//# sourceMappingURL=trade.js.map