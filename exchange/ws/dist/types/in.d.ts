export declare const SUBSCRIBE = "SUBSCRIBE";
export declare const UNSUBSCRIBE = "UNSUBSCRIBE";
export type SubscribeMessage = {
    method: typeof SUBSCRIBE;
    params: string[];
};
export type UnsubscribeMessage = {
    method: typeof UNSUBSCRIBE;
    params: string[];
};
export type IncomingMessage = SubscribeMessage | UnsubscribeMessage;
//# sourceMappingURL=in.d.ts.map