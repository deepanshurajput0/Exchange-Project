# Full Stack Realtime Crypto Exchange


## Realtime Klines Data Fetching 
<img width="1920" height="1080" alt="Screenshot (366)" src="https://github.com/user-attachments/assets/f8fc4ad9-82d2-45a0-be30-cfe3a0299e0d" />

## Realtime Orderbook with Websockets and redis pub subs
<img width="1920" height="1080" alt="Screenshot (391)" src="https://github.com/user-attachments/assets/a4ceee7d-20de-4d75-b443-39cf7b151294" />

<img width="1920" height="1080" alt="Screenshot (388)" src="https://github.com/user-attachments/assets/46d91886-e877-45a8-9ef1-0af4c0ae0c78" />




## Guide to build Exchange Platform 

## This Guide Divided into 2 parts (Jargons, System Designs)

## Introduction

### What is Exchange ?
An exchange is a platform where buyers and sellers meet to trade assets like cryptocurrencies, stocks, or currencies. It acts as a marketplace that matches buy and sell orders. For example, on a crypto exchange, you can swap USD for BTC. Examples of exchanges include Binance and WazirX

### Types of Order
There are two types of Order
1. Market Order 
2. Limit Order

Here is breakdown in detail 

### Market Order 
1. Defination- Buy or sell stocks immediately at current market price  
2. Use case - When you want instant execution  
3. Example: Bitcoin is $30,000. You place a market buy order → it executes at $30,000 (or the nearest available price). 
4. Pros: Fast execution. 

### Limit Order
1. Definition: Buy or sell at a specific price you set. The order only executes if the market reaches your price. 
2. Use case: When you want a better price than the current market. 
Example: BTC is $30,000. You place a limit buy order at $29,500 → it executes only if BTC drops to $29,500. 
3. Pros: Can get a better price. 
4. Cons: Might not execute if the price never reaches your limit. 


## Jargons 

## Types of assets 

### Base Asset

1. Definition: The asset you are buying or selling.
2. Example: In the pair BTC/USD, BTC is the base asset.
3. Meaning: You’re buying or selling Bitcoin.

### Quote Asset

1. Definition: The asset in which the price of the base asset is quoted.
2. Example: In the pair BTC/USD, USD is the quote asset.
3. Meaning: The price of 1 BTC is measured in USD.

Quick Tip

Base asset: “What you want.”

Quote asset: “What you pay with.”


### OrderBook

An order book is a real-time list of all buy and sell orders  for a particular asset on an exchange. It shows who wants to buy, who wants to sell, and at what prices**.

---

### Key Components of an Order Book 

1. Bids (Buy Orders)

   * Orders from people who want to **buy** the asset.
   * Listed with **price and quantity**.
   * Sorted from **highest price to lowest** — the highest bid is the most someone is willing to pay.

2. Asks (Sell Orders)

   * Orders from people who want to **sell** the asset.
   * Listed with **price and quantity**.
   * Sorted from **lowest price to highest** — the lowest ask is the cheapest someone is willing to sell for.




## Analogy 

You buy a coin at $70. Now you own it.

You set a limit sell order at $90. This means you’re telling the exchange:
“I want to sell my coin, but only at $90 or higher.”

Your sell order goes into the order book, under the asks (sell orders). It sits there waiting for a buyer.

When someone places a buy order at $90 (or higher), the exchange matches it automatically with your sell order.

Once matched, your coin is sold at $90, and the exchange completes the transaction.

✅ Key points:

The matching happens automatically by the exchange engine; you don’t have to do anything.

If no buyer places an order at $90, your order just remains in the order book.

Orders are matched based on price priority first, then time priority (first-come, first-served).

So yes — this is exactly how limit orders work under the hood.

If you want, I can explain why the price doesn’t always match instantly even if the limit exists — that’s where the order book depth and liquidity come into play.

Do you want me to explain that?



## Trade in Exchange platform by Market Order

<img width="1391" height="781" alt="Screenshot 2025-09-14 211134" src="https://github.com/user-attachments/assets/68c57dcd-2ec8-498b-b0bc-b5ce38d68fa8" />
 

