import { z } from 'zod';
export declare const OrderInputSchema: z.ZodObject<{
    baseAsset: z.ZodString;
    quoteAsset: z.ZodString;
    price: z.ZodNumber;
    quantity: z.ZodNumber;
    side: z.ZodEnum<{
        buy: "buy";
        sell: "sell";
    }>;
    type: z.ZodEnum<{
        limit: "limit";
        market: "market";
    }>;
    kind: z.ZodOptional<z.ZodEnum<{
        ioc: "ioc";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=types.d.ts.map