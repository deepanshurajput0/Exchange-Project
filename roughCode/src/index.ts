import express from "express";
import { orderBook, bookWithQuantity } from "./orderbook.js";
import { OrderInputSchema } from "./types.js";
const app = express();

const PORT = 8000;

const BASE_ASSET = "BTC";
const QUOTE_ASSET = "USD";

app.post("/api/v1/order", (req, res) => {
  const order = OrderInputSchema.safeParse(req.body);
  if (order.error) {
    res.status(400).send(order.error.message);
  }
  const { baseAsset, quoteAsset, price, quantity, side, kind } = order.data;
  const orderId = getOrderId();

  if (baseAsset !== "BTC" || quoteAsset !== "USD") {
    res.status(400).json({ message: "Invalid base and quote assets" });
  }

  const {} = fillOrder(orderId, price, quantity, side, kind);
});

function getOrderId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

interface Fill {
  price: number;
  qty: number;
  tradeId: number;
}

function fillOrder(
  orderId: string,
  price: number,
  quantity: number,
  side: "buy" | "sell",
  type?: "ioc"
) {
  const fill: Fill[] = [];
}

function getFillAmount(
  price: number,
  quantity: number,
  side: "buy" | "sell"
): number {
  let filled = 0;
  let remaining = quantity;
  if (side == "buy") {
    for (const o of orderBook.asks) {
      if (o.price > remaining) break;
      if (remaining <= 0) break;

      const fill = Math.min(remaining, o.price);
      filled = filled + fill;
      remaining = remaining - fill;
    }
  } else {
    for (const o of orderBook.bids) {
      if (o.price < price) break;
      if (remaining <= 0) break;
      const fill = Math.min(remaining, o.quantity);
      filled += fill;
      remaining -= fill;
    }
  }
  return filled
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
