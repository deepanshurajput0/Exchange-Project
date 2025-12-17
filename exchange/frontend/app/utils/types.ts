
export interface KLine {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    quoteVolume: string;
    start: string;
    trades: string;
    volume: string;
}

// start: 10:00:00

// end: 10:00:59

// open: first trade at 10:00:00

// close: last trade before 10:00:59

export interface Trade {
    "id": number,
    "isBuyerMaker": boolean,
    "price": string,
    "quantity": string,
    "quoteQuantity": string,
    "timestamp": number
}

// 1. JavaScript numbers are floating-point (IEEE-754)

// JS number cannot represent many decimal values exactly.

// precision 

export interface Depth {
    bids: [string, string][],
    asks: [string, string][],
    lastUpdateId: string
}

// A ticker is a symbol that uniquely identifies a traded asset or market pair on an exchange.

// SOL → asset ticker (Solana)

// BTC → asset ticker (Bitcoin)

export interface Ticker {
    "firstPrice": string,
    "high": string,
    "lastPrice": string,
    "low": string,
    "priceChange": string,
    "priceChangePercent": string,
    "quoteVolume": string,
    "symbol": string,
    "trades": string,
    "volume": string
}