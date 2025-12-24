export declare class SubscriptionManager {
    private static instance;
    private subscriptions;
    private reverseSubscriptions;
    private redisClient;
    private constructor();
    static getInstance(): SubscriptionManager;
    subscribe(userId: string, subscription: string): void;
    private redisCallbackHandler;
    unsubscribe(userId: string, subscription: string): void;
    userLeft(userId: string): void;
    getSubscriptions(userId: string): string[];
}
//# sourceMappingURL=SubscriptionManager.d.ts.map