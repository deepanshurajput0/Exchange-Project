import { BASE_CURRENCY } from "./Engine.js";
export class Orderbook {
    bids;
    asks;
    baseAsset;
    quoteAsset = BASE_CURRENCY;
    lastTradeId;
    currentPrice;
    constructor(baseAsset, bids, asks, lastTradeId, currentPrice) {
        this.bids = bids;
        this.asks = asks;
        this.baseAsset = baseAsset;
        this.lastTradeId = lastTradeId || 0;
        this.currentPrice = currentPrice || 0;
    }
    ticker() {
        return `${this.baseAsset}_${this.quoteAsset}`;
    }
    getSnapshot() {
        return {
            baseAsset: this.baseAsset,
            bids: this.bids,
            asks: this.asks,
            lastTradeId: this.lastTradeId,
            currentPrice: this.currentPrice
        };
    }
    //TODO: Add self trade prevention
    addOrder(order) {
        if (order.side === "buy") {
            const { executedQty, fills } = this.matchBid(order);
            order.filled = executedQty;
            if (executedQty === order.quantity) {
                return {
                    executedQty,
                    fills
                };
            }
            this.bids.push(order);
            return {
                executedQty,
                fills
            };
        }
        else {
            const { executedQty, fills } = this.matchAsk(order);
            order.filled = executedQty;
            if (executedQty === order.quantity) {
                return {
                    executedQty,
                    fills
                };
            }
            this.asks.push(order);
            return {
                executedQty,
                fills
            };
        }
    }
    matchBid(order) {
        const fills = [];
        let executedQty = 0;
        for (let i = 0; i < this.asks.length; i++) {
            // @ts-ignore
            if (this.asks[i].price <= order.price && executedQty < order.quantity) {
                // @ts-ignore
                const filledQty = Math.min((order.quantity - executedQty), this.asks[i].quantity);
                executedQty += filledQty;
                // @ts-ignore
                this.asks[i].filled += filledQty;
                fills.push({
                    // @ts-ignore
                    price: this.asks[i].price.toString(),
                    qty: filledQty,
                    tradeId: this.lastTradeId++,
                    // @ts-ignore
                    otherUserId: this.asks[i].userId,
                    // @ts-ignore
                    markerOrderId: this.asks[i].orderId
                });
            }
        }
        for (let i = 0; i < this.asks.length; i++) {
            // @ts-ignore
            if (this.asks[i].filled === this.asks[i].quantity) {
                this.asks.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQty
        };
    }
    matchAsk(order) {
        const fills = [];
        let executedQty = 0;
        for (let i = 0; i < this.bids.length; i++) {
            // @ts-ignore
            if (this.bids[i].price >= order.price && executedQty < order.quantity) {
                // @ts-ignore
                const amountRemaining = Math.min(order.quantity - executedQty, this.bids[i].quantity);
                executedQty += amountRemaining;
                // @ts-ignore
                this.bids[i].filled += amountRemaining;
                fills.push({
                    // @ts-ignore
                    price: this.bids[i].price.toString(),
                    qty: amountRemaining,
                    tradeId: this.lastTradeId++,
                    // @ts-ignore
                    otherUserId: this.bids[i].userId,
                    // @ts-ignore
                    markerOrderId: this.bids[i].orderId
                });
            }
        }
        for (let i = 0; i < this.bids.length; i++) {
            // @ts-ignore
            if (this.bids[i].filled === this.bids[i].quantity) {
                this.bids.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQty
        };
    }
    //TODO: Can you make this faster? Can you compute this during order matches?
    getDepth() {
        const bids = [];
        const asks = [];
        const bidsObj = {};
        const asksObj = {};
        for (let i = 0; i < this.bids.length; i++) {
            const order = this.bids[i];
            // @ts-ignore
            if (!bidsObj[order.price]) {
                // @ts-ignore
                bidsObj[order.price] = 0;
            }
            // @ts-ignore
            bidsObj[order.price] += order.quantity;
        }
        for (let i = 0; i < this.asks.length; i++) {
            const order = this.asks[i];
            // @ts-ignore
            if (!asksObj[order.price]) {
                // @ts-ignore
                asksObj[order.price] = 0;
            }
            // @ts-ignore
            asksObj[order.price] += order.quantity;
        }
        for (const price in bidsObj) {
            // @ts-ignore
            bids.push([price, bidsObj[price].toString()]);
        }
        for (const price in asksObj) {
            // @ts-ignore
            asks.push([price, asksObj[price].toString()]);
        }
        return {
            bids,
            asks
        };
    }
    getOpenOrders(userId) {
        const asks = this.asks.filter(x => x.userId === userId);
        const bids = this.bids.filter(x => x.userId === userId);
        return [...asks, ...bids];
    }
    cancelBid(order) {
        const index = this.bids.findIndex(x => x.orderId === order.orderId);
        if (index !== -1) {
            // @ts-ignore
            const price = this.bids[index].price;
            this.bids.splice(index, 1);
            return price;
        }
    }
    cancelAsk(order) {
        const index = this.asks.findIndex(x => x.orderId === order.orderId);
        if (index !== -1) {
            // @ts-ignore
            const price = this.asks[index].price;
            this.asks.splice(index, 1);
            return price;
        }
    }
}
//# sourceMappingURL=OrderBook.js.map