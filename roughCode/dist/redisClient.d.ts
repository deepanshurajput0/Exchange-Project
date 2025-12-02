declare const client: import("@redis/client").RedisClientType<{
    json: {
        ARRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        arrAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        ARRINDEX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/ARRINDEX.js").JsonArrIndexOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        arrIndex: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/ARRINDEX.js").JsonArrIndexOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        ARRINSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, index: number, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        arrInsert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, index: number, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        ARRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRLEN.js").JsonArrLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        arrLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRLEN.js").JsonArrLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        ARRPOP: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRPOP.js").RedisArrPopOptions | undefined) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => string | number | boolean | Date | import("@redis/client/dist/lib/RESP/types.js").NullReply | {
                [key: string]: import("redis").RedisJSON;
                [key: number]: import("redis").RedisJSON;
            } | (import("redis").RedisJSON | import("@redis/client/dist/lib/RESP/types.js").NullReply)[] | null;
        };
        arrPop: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRPOP.js").RedisArrPopOptions | undefined) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => string | number | boolean | Date | import("@redis/client/dist/lib/RESP/types.js").NullReply | (import("redis").RedisJSON | import("@redis/client/dist/lib/RESP/types.js").NullReply)[] | {
                [key: string]: import("redis").RedisJSON;
                [key: number]: import("redis").RedisJSON;
            } | null;
        };
        ARRTRIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        arrTrim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        CLEAR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/CLEAR.js").JsonClearOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        clear: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/CLEAR.js").JsonClearOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        DEBUG_MEMORY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEBUG_MEMORY.js").JsonDebugMemoryOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        debugMemory: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEBUG_MEMORY.js").JsonDebugMemoryOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEL.js").JsonDelOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEL.js").JsonDelOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        FORGET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/FORGET.js").JsonForgetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        forget: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/FORGET.js").JsonForgetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        GET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/GET.js").JsonGetOptions | undefined) => void;
            readonly transformReply: typeof import("@redis/client/dist/lib/commands/generic-transformers.js").transformRedisJsonNullReply;
        };
        get: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/GET.js").JsonGetOptions | undefined) => void;
            readonly transformReply: typeof import("@redis/client/dist/lib/commands/generic-transformers.js").transformRedisJsonNullReply;
        };
        MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, value: import("redis").RedisJSON) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, value: import("redis").RedisJSON) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        MGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, keys: import("redis").RedisArgument[], path: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, reply: (import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>)[]) => (import("redis").RedisJSON | import("@redis/client/dist/lib/RESP/types.js").NullReply)[];
        };
        mGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, keys: import("redis").RedisArgument[], path: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, reply: (import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>)[]) => (import("redis").RedisJSON | import("@redis/client/dist/lib/RESP/types.js").NullReply)[];
        };
        MSET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, items: import("@redis/json/dist/lib/commands/MSET.js").JsonMSetItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        mSet: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, items: import("@redis/json/dist/lib/commands/MSET.js").JsonMSetItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        NUMINCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        numIncrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        NUMMULTBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        numMultBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        OBJKEYS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJKEYS.js").JsonObjKeysOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
        };
        objKeys: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJKEYS.js").JsonObjKeysOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
        };
        OBJLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJLEN.js").JsonObjLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        objLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJLEN.js").JsonObjLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        SET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/SET.js").JsonSetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        set: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/SET.js").JsonSetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        STRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, append: string, options?: import("@redis/json/dist/lib/commands/STRAPPEND.js").JsonStrAppendOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        strAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, append: string, options?: import("@redis/json/dist/lib/commands/STRAPPEND.js").JsonStrAppendOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        STRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/STRLEN.js").JsonStrLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        strLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/STRLEN.js").JsonStrLenOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        TOGGLE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        toggle: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        TYPE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/TYPE.js").JsonTypeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>)[]) => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        type: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/TYPE.js").JsonTypeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>)[]) => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
    };
    ft: {
        _LIST: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        _list: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        ALTER: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        alter: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        AGGREGATE_WITHCURSOR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").FtAggregateWithCursorOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregateWithCursor: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").FtAggregateWithCursorOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        AGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE.js").FtAggregateOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/search/dist/lib/commands/AGGREGATE.js").AggregateReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE.js").FtAggregateOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/search/dist/lib/commands/AGGREGATE.js").AggregateReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        ALIASADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        aliasAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        ALIASDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        aliasDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        ALIASUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        aliasUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        CONFIG_GET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").TuplesReply<[import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]) => Record<string, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        configGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").TuplesReply<[import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]) => Record<string, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        CONFIG_SET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, property: Buffer | (string & {}) | "a" | "b", value: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        configSet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, property: Buffer | (string & {}) | "a" | "b", value: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        CREATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema, options?: import("@redis/search/dist/lib/commands/CREATE.js").CreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        create: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema, options?: import("@redis/search/dist/lib/commands/CREATE.js").CreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        CURSOR_DEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursorId: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        cursorDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursorId: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        CURSOR_READ: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursor: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, options?: import("@redis/search/dist/lib/commands/CURSOR_READ.js").FtCursorReadOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        cursorRead: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursor: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, options?: import("@redis/search/dist/lib/commands/CURSOR_READ.js").FtCursorReadOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR.js").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        DICTADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        dictAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        DICTDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        dictDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        DICTDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        dictDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        DROPINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/DROPINDEX.js").FtDropIndexOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
            };
        };
        dropIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/DROPINDEX.js").FtDropIndexOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
            };
        };
        EXPLAIN: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAIN.js").FtExplainOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>;
        };
        explain: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAIN.js").FtExplainOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>;
        };
        EXPLAINCLI: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAINCLI.js").FtExplainCLIOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        explainCli: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAINCLI.js").FtExplainCLIOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        HYBRID: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/HYBRID.js").FtHybridOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: any) => any;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        hybrid: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/HYBRID.js").FtHybridOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: any) => any;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        INFO: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/search/dist/lib/commands/INFO.js").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        info: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/search/dist/lib/commands/INFO.js").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILESEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: (import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileOptions & import("redis").FtSearchOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").ReplyUnion) => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileSearch: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: (import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileOptions & import("redis").FtSearchOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").ReplyUnion) => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILEAGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: string, query: string, options?: (import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileOptions & import("@redis/search/dist/lib/commands/AGGREGATE.js").FtAggregateOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").ReplyUnion) => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileAggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: string, query: string, options?: (import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileOptions & import("@redis/search/dist/lib/commands/AGGREGATE.js").FtAggregateOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>[]], import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH.js").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").ReplyUnion) => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH_NOCONTENT: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply) => import("@redis/search/dist/lib/commands/SEARCH_NOCONTENT.js").SearchNoContentReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        searchNoContent: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply) => import("@redis/search/dist/lib/commands/SEARCH_NOCONTENT.js").SearchNoContentReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply) => import("redis").SearchReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        search: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH.js").SearchRawReply) => import("redis").SearchReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SPELLCHECK: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SPELLCHECK.js").FtSpellCheckOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        spellCheck: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SPELLCHECK.js").FtSpellCheckOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SUGADD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument, score: number, options?: import("@redis/search/dist/lib/commands/SUGADD.js").FtSugAddOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        sugAdd: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument, score: number, options?: import("@redis/search/dist/lib/commands/SUGADD.js").FtSugAddOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        SUGDEL: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>;
        };
        sugDel: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>;
        };
        SUGGET_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[]) => {
                suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            }[] | null;
        };
        sugGetWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[]) => {
                suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            }[] | null;
        };
        SUGGET_WITHSCORES_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                }[] | null;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                }[] | null;
            };
        };
        sugGetWithScoresWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                }[] | null;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                }[] | null;
            };
        };
        SUGGET_WITHSCORES: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[] | null;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[] | null;
            };
        };
        sugGetWithScores: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[] | null;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[] | null;
            };
        };
        SUGGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        sugGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET.js").FtSugGetOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        SUGLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        sugLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        SYNDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>)[]) => Record<string, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
            };
        };
        synDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>)[]) => Record<string, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>>;
            };
        };
        SYNUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, groupId: import("redis").RedisArgument, terms: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/search/dist/lib/commands/SYNUPDATE.js").FtSynUpdateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        synUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, groupId: import("redis").RedisArgument, terms: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/search/dist/lib/commands/SYNUPDATE.js").FtSynUpdateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        TAGVALS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, fieldName: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        tagVals: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, fieldName: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
    };
    ts: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, timestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, value: number, options?: import("@redis/time-series/dist/lib/commands/ADD.js").TsAddOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, timestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, value: number, options?: import("@redis/time-series/dist/lib/commands/ADD.js").TsAddOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly ALTER: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/ALTER.js").TsAlterOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly alter: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/ALTER.js").TsAlterOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/CREATE.js").TsCreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/CREATE.js").TsCreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly CREATERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument, aggregationType: import("redis").TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly createRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument, aggregationType: import("redis").TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly DECRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY.js").TsIncrByOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly decrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY.js").TsIncrByOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly DELETERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly deleteRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly GET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/GET.js").TsGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").RespType<42, [], never, []> | import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                } | null;
                readonly 3: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/time-series/dist/lib/commands/GET.js").TsGetReply>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                } | null;
            };
        };
        readonly get: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/GET.js").TsGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/client/dist/lib/RESP/types.js").RespType<42, [], never, []> | import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                } | null;
                readonly 3: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").UnwrapReply<import("@redis/time-series/dist/lib/commands/GET.js").TsGetReply>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                } | null;
            };
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY.js").TsIncrByOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY.js").TsIncrByOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly INFO_DEBUG: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [...import("@redis/time-series/dist/lib/commands/INFO.js").InfoRawReplyTypes[], "keySelfName", import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, "Chunks", ["startTimestamp", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "endTimestamp", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "samples", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "size", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "bytesPerSample", import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>][]], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/time-series/dist/lib/commands/INFO_DEBUG.js").InfoDebugReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly infoDebug: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [...import("@redis/time-series/dist/lib/commands/INFO.js").InfoRawReplyTypes[], "keySelfName", import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, "Chunks", ["startTimestamp", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "endTimestamp", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "samples", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "size", import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, "bytesPerSample", import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>][]], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/time-series/dist/lib/commands/INFO_DEBUG.js").InfoDebugReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/INFO.js").InfoRawReply, _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/time-series/dist/lib/commands/INFO.js").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/INFO.js").InfoRawReply, _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/time-series/dist/lib/commands/INFO.js").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, toAdd: import("@redis/time-series/dist/lib/commands/MADD.js").TsMAddSample[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").SimpleErrorReply>;
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, toAdd: import("@redis/time-series/dist/lib/commands/MADD.js").TsMAddSample[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number> | import("@redis/client/dist/lib/RESP/types.js").SimpleErrorReply>;
        };
        readonly MGET_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET.js").TsMGetOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping | undefined): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET.js").TsMGetOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping | undefined): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET_WITHLABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").TsMGetWithLabelsOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping | undefined): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetWithLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").TsMGetWithLabelsOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping | undefined): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS.js").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET.js").TsMGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET.js").MGetRawReply2, _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET.js").MGetRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET.js").TsMGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET.js").MGetRawReply2, _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET.js").MGetRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[]>;
            };
        };
        readonly MREVRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS.js").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY.js").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY.js").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS.js").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRevRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE.js").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types.js").MapReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[]>;
            };
        };
        readonly QUERYINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        readonly queryIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types.js").SetReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
            };
        };
        readonly RANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").RespType<42, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/helpers.js").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[];
            };
        };
        readonly range: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").RespType<42, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/helpers.js").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[];
            };
        };
        readonly REVRANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").RespType<42, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/helpers.js").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[];
            };
        };
        readonly revRange: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands/helpers.js").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE.js").TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types.js").RespType<42, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types.js").RespType<42, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/helpers.js").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                }[];
            };
        };
    };
    bf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly CARD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly card: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/bloom/INFO.js").BfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/bloom/INFO.js").BfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/bloom/INFO.js").BfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/bloom/INFO.js").BfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/bloom/INSERT.js").BfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/bloom/INSERT.js").BfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly MEXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly mExists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, errorRate: number, capacity: number, options?: import("@redis/bloom/dist/lib/commands/bloom/RESERVE.js").BfReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, errorRate: number, capacity: number, options?: import("@redis/bloom/dist/lib/commands/bloom/RESERVE.js").BfReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            };
        };
    };
    cms: {
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY.js").BfIncrByItem | import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY.js").BfIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY.js").BfIncrByItem | import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY.js").BfIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"count">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO.js").CmsInfoReply;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO.js").CmsInfoReply;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"count">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO.js").CmsInfoReply;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO.js").CmsInfoReply;
            };
        };
        readonly INITBYDIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly initByDim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly INITBYPROB: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly initByProb: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/bloom/dist/lib/commands/count-min-sketch/MERGE.js").BfMergeSketches) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/bloom/dist/lib/commands/count-min-sketch/MERGE.js").BfMergeSketches) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly query: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
    };
    cf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly ADDNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly addNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of buckets">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items deleted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Bucket size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Max iterations">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/cuckoo/INFO.js").CfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/cuckoo/INFO.js").CfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of buckets">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Number of items deleted">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Bucket size">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Max iterations">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/cuckoo/INFO.js").CfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/cuckoo/INFO.js").CfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT.js").CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT.js").CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly INSERTNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT.js").CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly insertNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT.js").CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, capacity: number, options?: import("@redis/bloom/dist/lib/commands/cuckoo/RESERVE.js").CfReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, capacity: number, options?: import("@redis/bloom/dist/lib/commands/cuckoo/RESERVE.js").CfReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
            };
        };
    };
    tDigest: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly BYRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly byRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly BYREVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly byRevRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly CDF: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly cdf: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/CREATE.js").TDigestCreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/CREATE.js").TDigestCreateOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Compression">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Merged nodes">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Unmerged nodes">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Merged weight">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Unmerged weight">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Observations">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Total compressions">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Memory usage">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/t-digest/INFO.js").TdInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/t-digest/INFO.js").TdInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Compression">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Merged nodes">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Unmerged nodes">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Merged weight">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Unmerged weight">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Observations">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Total compressions">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"Memory usage">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/t-digest/INFO.js").TdInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/t-digest/INFO.js").TdInfoReplyMap;
            };
        };
        readonly MAX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
        readonly max: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/MERGE.js").TDigestMergeOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/MERGE.js").TDigestMergeOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly MIN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
        readonly min: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
        readonly QUANTILE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly quantile: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>>;
            };
        };
        readonly RANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly rank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly RESET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly reset: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly REVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly revRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly TRIMMED_MEAN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
        readonly trimmedMean: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types.js").DoubleReply<number>;
            };
        };
    };
    topK: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>>;
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/top-k/INCRBY.js").TopKIncrByItem | import("@redis/bloom/dist/lib/commands/top-k/INCRBY.js").TopKIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/top-k/INCRBY.js").TopKIncrByItem | import("@redis/bloom/dist/lib/commands/top-k/INCRBY.js").TopKIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NullReply | import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<string>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"k">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"decay">, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/top-k/INFO.js").TopKInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/top-k/INFO.js").TopKInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"k">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>, import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"decay">, import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>], preserve?: any, typeMapping?: import("redis").TypeMapping | undefined) => import("@redis/bloom/dist/lib/commands/top-k/INFO.js").TopKInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/top-k/INFO.js").TopKInfoReplyMap;
            };
        };
        readonly LIST_WITHCOUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>)[]) => {
                item: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                count: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
            }[];
        };
        readonly listWithCount: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>)[]) => {
                item: import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>;
                count: import("@redis/client/dist/lib/RESP/types.js").NumberReply<number>;
            }[];
        };
        readonly LIST: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        readonly list: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BlobStringReply<string>>;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly query: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers.js").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types.js").ArrayReply<import("@redis/client/dist/lib/RESP/types.js").BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, topK: number, options?: import("@redis/bloom/dist/lib/commands/top-k/RESERVE.js").TopKReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, topK: number, options?: import("@redis/bloom/dist/lib/commands/top-k/RESERVE.js").TopKReserveOptions | undefined) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types.js").SimpleStringReply<"OK">;
        };
    };
} & import("redis").RedisModules, import("redis").RedisFunctions, import("redis").RedisScripts, import("redis").RespVersions, import("redis").TypeMapping>;
export default client;
//# sourceMappingURL=redisClient.d.ts.map