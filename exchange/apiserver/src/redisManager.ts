import {  createClient } from 'redis'
import type { RedisClientType } from 'redis'
export class RedisManager {
  private client:RedisClientType;
  private publisher:RedisClientType;
  private static instance : RedisManager

  constructor(){
    this.client = createClient()
    this.client.connect()
    this.publisher = createClient()
    this.publisher.connect()
  }
  
  public static getInstance (){
    if(!this.instance){
       this.instance = new RedisManager()
    }
    return this.instance;
  }
      public getRandomClientId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

}