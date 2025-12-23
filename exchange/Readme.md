Client connects  
↓
UserManager creates User  
↓
User sends SUBSCRIBE via WebSocket  
↓
SubscriptionManager subscribes user  
↓
Redis subscribes to channel (only once)  
↓
Redis publishes message  
↓
SubscriptionManager receives message  
↓
UserManager finds users  
↓
WebSocket sends message to clients  
