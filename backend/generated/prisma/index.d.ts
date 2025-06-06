
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pos
 * 
 */
export type Pos = $Result.DefaultSelection<Prisma.$PosPayload>
/**
 * Model Administration
 * 
 */
export type Administration = $Result.DefaultSelection<Prisma.$AdministrationPayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model Licence
 * 
 */
export type Licence = $Result.DefaultSelection<Prisma.$LicencePayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Subtype
 * 
 */
export type Subtype = $Result.DefaultSelection<Prisma.$SubtypePayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Revision
 * 
 */
export type Revision = $Result.DefaultSelection<Prisma.$RevisionPayload>
/**
 * Model Terminal
 * 
 */
export type Terminal = $Result.DefaultSelection<Prisma.$TerminalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pos
 * const pos = await prisma.pos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pos
   * const pos = await prisma.pos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pos`: Exposes CRUD operations for the **Pos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pos
    * const pos = await prisma.pos.findMany()
    * ```
    */
  get pos(): Prisma.PosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administration`: Exposes CRUD operations for the **Administration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrations
    * const administrations = await prisma.administration.findMany()
    * ```
    */
  get administration(): Prisma.AdministrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licence`: Exposes CRUD operations for the **Licence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licences
    * const licences = await prisma.licence.findMany()
    * ```
    */
  get licence(): Prisma.LicenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtype`: Exposes CRUD operations for the **Subtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtypes
    * const subtypes = await prisma.subtype.findMany()
    * ```
    */
  get subtype(): Prisma.SubtypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revision`: Exposes CRUD operations for the **Revision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revisions
    * const revisions = await prisma.revision.findMany()
    * ```
    */
  get revision(): Prisma.RevisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.terminal`: Exposes CRUD operations for the **Terminal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terminals
    * const terminals = await prisma.terminal.findMany()
    * ```
    */
  get terminal(): Prisma.TerminalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pos: 'Pos',
    Administration: 'Administration',
    Province: 'Province',
    City: 'City',
    Area: 'Area',
    Zone: 'Zone',
    Licence: 'Licence',
    Type: 'Type',
    Subtype: 'Subtype',
    Agent: 'Agent',
    Revision: 'Revision',
    Terminal: 'Terminal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pos" | "administration" | "province" | "city" | "area" | "zone" | "licence" | "type" | "subtype" | "agent" | "revision" | "terminal"
      txIsolationLevel: never
    }
    model: {
      Pos: {
        payload: Prisma.$PosPayload<ExtArgs>
        fields: Prisma.PosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          findFirst: {
            args: Prisma.PosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          findMany: {
            args: Prisma.PosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>[]
          }
          create: {
            args: Prisma.PosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          createMany: {
            args: Prisma.PosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          update: {
            args: Prisma.PosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          deleteMany: {
            args: Prisma.PosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosPayload>
          }
          aggregate: {
            args: Prisma.PosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePos>
          }
          groupBy: {
            args: Prisma.PosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PosCountArgs<ExtArgs>
            result: $Utils.Optional<PosCountAggregateOutputType> | number
          }
        }
      }
      Administration: {
        payload: Prisma.$AdministrationPayload<ExtArgs>
        fields: Prisma.AdministrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          findFirst: {
            args: Prisma.AdministrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          findMany: {
            args: Prisma.AdministrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>[]
          }
          create: {
            args: Prisma.AdministrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          createMany: {
            args: Prisma.AdministrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdministrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          update: {
            args: Prisma.AdministrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          deleteMany: {
            args: Prisma.AdministrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationPayload>
          }
          aggregate: {
            args: Prisma.AdministrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministration>
          }
          groupBy: {
            args: Prisma.AdministrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministrationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdministrationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdministrationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdministrationCountArgs<ExtArgs>
            result: $Utils.Optional<AdministrationCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProvinceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProvinceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AreaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AreaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ZoneFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ZoneAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      Licence: {
        payload: Prisma.$LicencePayload<ExtArgs>
        fields: Prisma.LicenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          findFirst: {
            args: Prisma.LicenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          findMany: {
            args: Prisma.LicenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>[]
          }
          create: {
            args: Prisma.LicenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          createMany: {
            args: Prisma.LicenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LicenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          update: {
            args: Prisma.LicenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          deleteMany: {
            args: Prisma.LicenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicencePayload>
          }
          aggregate: {
            args: Prisma.LicenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicence>
          }
          groupBy: {
            args: Prisma.LicenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LicenceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LicenceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LicenceCountArgs<ExtArgs>
            result: $Utils.Optional<LicenceCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Subtype: {
        payload: Prisma.$SubtypePayload<ExtArgs>
        fields: Prisma.SubtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          findFirst: {
            args: Prisma.SubtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          findMany: {
            args: Prisma.SubtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>[]
          }
          create: {
            args: Prisma.SubtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          createMany: {
            args: Prisma.SubtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          update: {
            args: Prisma.SubtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          deleteMany: {
            args: Prisma.SubtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtypePayload>
          }
          aggregate: {
            args: Prisma.SubtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtype>
          }
          groupBy: {
            args: Prisma.SubtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubtypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubtypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubtypeCountArgs<ExtArgs>
            result: $Utils.Optional<SubtypeCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AgentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AgentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Revision: {
        payload: Prisma.$RevisionPayload<ExtArgs>
        fields: Prisma.RevisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findFirst: {
            args: Prisma.RevisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findMany: {
            args: Prisma.RevisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>[]
          }
          create: {
            args: Prisma.RevisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          createMany: {
            args: Prisma.RevisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          update: {
            args: Prisma.RevisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          deleteMany: {
            args: Prisma.RevisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          aggregate: {
            args: Prisma.RevisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevision>
          }
          groupBy: {
            args: Prisma.RevisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RevisionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RevisionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RevisionCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionCountAggregateOutputType> | number
          }
        }
      }
      Terminal: {
        payload: Prisma.$TerminalPayload<ExtArgs>
        fields: Prisma.TerminalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerminalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerminalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          findFirst: {
            args: Prisma.TerminalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerminalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          findMany: {
            args: Prisma.TerminalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>[]
          }
          create: {
            args: Prisma.TerminalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          createMany: {
            args: Prisma.TerminalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TerminalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          update: {
            args: Prisma.TerminalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          deleteMany: {
            args: Prisma.TerminalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerminalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TerminalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalPayload>
          }
          aggregate: {
            args: Prisma.TerminalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerminal>
          }
          groupBy: {
            args: Prisma.TerminalGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerminalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TerminalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TerminalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TerminalCountArgs<ExtArgs>
            result: $Utils.Optional<TerminalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pos?: PosOmit
    administration?: AdministrationOmit
    province?: ProvinceOmit
    city?: CityOmit
    area?: AreaOmit
    zone?: ZoneOmit
    licence?: LicenceOmit
    type?: TypeOmit
    subtype?: SubtypeOmit
    agent?: AgentOmit
    revision?: RevisionOmit
    terminal?: TerminalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdministrationCountOutputType
   */

  export type AdministrationCountOutputType = {
    pos: number
  }

  export type AdministrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pos?: boolean | AdministrationCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * AdministrationCountOutputType without action
   */
  export type AdministrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationCountOutputType
     */
    select?: AdministrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministrationCountOutputType without action
   */
  export type AdministrationCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    city: number
    Pos: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | ProvinceCountOutputTypeCountCityArgs
    Pos?: boolean | ProvinceCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    Pos: number
    area: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pos?: boolean | CityCountOutputTypeCountPosArgs
    area?: boolean | CityCountOutputTypeCountAreaArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    zone: number
    Pos: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | AreaCountOutputTypeCountZoneArgs
    Pos?: boolean | AreaCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountZoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    Pos: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pos?: boolean | ZoneCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    subtype: number
    Pos: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtype?: boolean | TypeCountOutputTypeCountSubtypeArgs
    Pos?: boolean | TypeCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountSubtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtypeWhereInput
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Count Type SubtypeCountOutputType
   */

  export type SubtypeCountOutputType = {
    Pos: number
  }

  export type SubtypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pos?: boolean | SubtypeCountOutputTypeCountPosArgs
  }

  // Custom InputTypes
  /**
   * SubtypeCountOutputType without action
   */
  export type SubtypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtypeCountOutputType
     */
    select?: SubtypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubtypeCountOutputType without action
   */
  export type SubtypeCountOutputTypeCountPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pos
   */

  export type AggregatePos = {
    _count: PosCountAggregateOutputType | null
    _avg: PosAvgAggregateOutputType | null
    _sum: PosSumAggregateOutputType | null
    _min: PosMinAggregateOutputType | null
    _max: PosMaxAggregateOutputType | null
  }

  export type PosAvgAggregateOutputType = {
    id_reference: number | null
  }

  export type PosSumAggregateOutputType = {
    id_reference: number | null
  }

  export type PosMinAggregateOutputType = {
    id: string | null
    id_reference: number | null
    province_id: string | null
    city_id: string | null
    area_id: string | null
    zone_id: string | null
    type_id: string | null
    subtype_id: string | null
    administration_id: string | null
    agent_id: string | null
    status: boolean | null
    licence_id: string | null
    created_at: Date | null
  }

  export type PosMaxAggregateOutputType = {
    id: string | null
    id_reference: number | null
    province_id: string | null
    city_id: string | null
    area_id: string | null
    zone_id: string | null
    type_id: string | null
    subtype_id: string | null
    administration_id: string | null
    agent_id: string | null
    status: boolean | null
    licence_id: string | null
    created_at: Date | null
  }

  export type PosCountAggregateOutputType = {
    id: number
    id_reference: number
    province_id: number
    city_id: number
    area_id: number
    zone_id: number
    type_id: number
    subtype_id: number
    administration_id: number
    agent_id: number
    status: number
    coordinates: number
    licence_id: number
    created_at: number
    _all: number
  }


  export type PosAvgAggregateInputType = {
    id_reference?: true
  }

  export type PosSumAggregateInputType = {
    id_reference?: true
  }

  export type PosMinAggregateInputType = {
    id?: true
    id_reference?: true
    province_id?: true
    city_id?: true
    area_id?: true
    zone_id?: true
    type_id?: true
    subtype_id?: true
    administration_id?: true
    agent_id?: true
    status?: true
    licence_id?: true
    created_at?: true
  }

  export type PosMaxAggregateInputType = {
    id?: true
    id_reference?: true
    province_id?: true
    city_id?: true
    area_id?: true
    zone_id?: true
    type_id?: true
    subtype_id?: true
    administration_id?: true
    agent_id?: true
    status?: true
    licence_id?: true
    created_at?: true
  }

  export type PosCountAggregateInputType = {
    id?: true
    id_reference?: true
    province_id?: true
    city_id?: true
    area_id?: true
    zone_id?: true
    type_id?: true
    subtype_id?: true
    administration_id?: true
    agent_id?: true
    status?: true
    coordinates?: true
    licence_id?: true
    created_at?: true
    _all?: true
  }

  export type PosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pos to aggregate.
     */
    where?: PosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pos to fetch.
     */
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pos
    **/
    _count?: true | PosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosMaxAggregateInputType
  }

  export type GetPosAggregateType<T extends PosAggregateArgs> = {
        [P in keyof T & keyof AggregatePos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePos[P]>
      : GetScalarType<T[P], AggregatePos[P]>
  }




  export type PosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosWhereInput
    orderBy?: PosOrderByWithAggregationInput | PosOrderByWithAggregationInput[]
    by: PosScalarFieldEnum[] | PosScalarFieldEnum
    having?: PosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosCountAggregateInputType | true
    _avg?: PosAvgAggregateInputType
    _sum?: PosSumAggregateInputType
    _min?: PosMinAggregateInputType
    _max?: PosMaxAggregateInputType
  }

  export type PosGroupByOutputType = {
    id: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id: string | null
    administration_id: string | null
    agent_id: string | null
    status: boolean
    coordinates: string[]
    licence_id: string | null
    created_at: Date
    _count: PosCountAggregateOutputType | null
    _avg: PosAvgAggregateOutputType | null
    _sum: PosSumAggregateOutputType | null
    _min: PosMinAggregateOutputType | null
    _max: PosMaxAggregateOutputType | null
  }

  type GetPosGroupByPayload<T extends PosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosGroupByOutputType[P]>
            : GetScalarType<T[P], PosGroupByOutputType[P]>
        }
      >
    >


  export type PosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_reference?: boolean
    province_id?: boolean
    city_id?: boolean
    area_id?: boolean
    zone_id?: boolean
    type_id?: boolean
    subtype_id?: boolean
    administration_id?: boolean
    agent_id?: boolean
    status?: boolean
    coordinates?: boolean
    licence_id?: boolean
    created_at?: boolean
    licence?: boolean | Pos$licenceArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    subtype?: boolean | Pos$subtypeArgs<ExtArgs>
    administration?: boolean | Pos$administrationArgs<ExtArgs>
    agent?: boolean | Pos$agentArgs<ExtArgs>
  }, ExtArgs["result"]["pos"]>



  export type PosSelectScalar = {
    id?: boolean
    id_reference?: boolean
    province_id?: boolean
    city_id?: boolean
    area_id?: boolean
    zone_id?: boolean
    type_id?: boolean
    subtype_id?: boolean
    administration_id?: boolean
    agent_id?: boolean
    status?: boolean
    coordinates?: boolean
    licence_id?: boolean
    created_at?: boolean
  }

  export type PosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_reference" | "province_id" | "city_id" | "area_id" | "zone_id" | "type_id" | "subtype_id" | "administration_id" | "agent_id" | "status" | "coordinates" | "licence_id" | "created_at", ExtArgs["result"]["pos"]>
  export type PosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licence?: boolean | Pos$licenceArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    subtype?: boolean | Pos$subtypeArgs<ExtArgs>
    administration?: boolean | Pos$administrationArgs<ExtArgs>
    agent?: boolean | Pos$agentArgs<ExtArgs>
  }

  export type $PosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pos"
    objects: {
      licence: Prisma.$LicencePayload<ExtArgs> | null
      province: Prisma.$ProvincePayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
      area: Prisma.$AreaPayload<ExtArgs>
      zone: Prisma.$ZonePayload<ExtArgs>
      type: Prisma.$TypePayload<ExtArgs>
      subtype: Prisma.$SubtypePayload<ExtArgs> | null
      administration: Prisma.$AdministrationPayload<ExtArgs> | null
      agent: Prisma.$AgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_reference: number
      province_id: string
      city_id: string
      area_id: string
      zone_id: string
      type_id: string
      subtype_id: string | null
      administration_id: string | null
      agent_id: string | null
      status: boolean
      coordinates: string[]
      licence_id: string | null
      created_at: Date
    }, ExtArgs["result"]["pos"]>
    composites: {}
  }

  type PosGetPayload<S extends boolean | null | undefined | PosDefaultArgs> = $Result.GetResult<Prisma.$PosPayload, S>

  type PosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosCountAggregateInputType | true
    }

  export interface PosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pos'], meta: { name: 'Pos' } }
    /**
     * Find zero or one Pos that matches the filter.
     * @param {PosFindUniqueArgs} args - Arguments to find a Pos
     * @example
     * // Get one Pos
     * const pos = await prisma.pos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosFindUniqueArgs>(args: SelectSubset<T, PosFindUniqueArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosFindUniqueOrThrowArgs} args - Arguments to find a Pos
     * @example
     * // Get one Pos
     * const pos = await prisma.pos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosFindUniqueOrThrowArgs>(args: SelectSubset<T, PosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosFindFirstArgs} args - Arguments to find a Pos
     * @example
     * // Get one Pos
     * const pos = await prisma.pos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosFindFirstArgs>(args?: SelectSubset<T, PosFindFirstArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosFindFirstOrThrowArgs} args - Arguments to find a Pos
     * @example
     * // Get one Pos
     * const pos = await prisma.pos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosFindFirstOrThrowArgs>(args?: SelectSubset<T, PosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pos
     * const pos = await prisma.pos.findMany()
     * 
     * // Get first 10 Pos
     * const pos = await prisma.pos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posWithIdOnly = await prisma.pos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosFindManyArgs>(args?: SelectSubset<T, PosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pos.
     * @param {PosCreateArgs} args - Arguments to create a Pos.
     * @example
     * // Create one Pos
     * const Pos = await prisma.pos.create({
     *   data: {
     *     // ... data to create a Pos
     *   }
     * })
     * 
     */
    create<T extends PosCreateArgs>(args: SelectSubset<T, PosCreateArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pos.
     * @param {PosCreateManyArgs} args - Arguments to create many Pos.
     * @example
     * // Create many Pos
     * const pos = await prisma.pos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosCreateManyArgs>(args?: SelectSubset<T, PosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pos.
     * @param {PosDeleteArgs} args - Arguments to delete one Pos.
     * @example
     * // Delete one Pos
     * const Pos = await prisma.pos.delete({
     *   where: {
     *     // ... filter to delete one Pos
     *   }
     * })
     * 
     */
    delete<T extends PosDeleteArgs>(args: SelectSubset<T, PosDeleteArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pos.
     * @param {PosUpdateArgs} args - Arguments to update one Pos.
     * @example
     * // Update one Pos
     * const pos = await prisma.pos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosUpdateArgs>(args: SelectSubset<T, PosUpdateArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pos.
     * @param {PosDeleteManyArgs} args - Arguments to filter Pos to delete.
     * @example
     * // Delete a few Pos
     * const { count } = await prisma.pos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosDeleteManyArgs>(args?: SelectSubset<T, PosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pos
     * const pos = await prisma.pos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosUpdateManyArgs>(args: SelectSubset<T, PosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pos.
     * @param {PosUpsertArgs} args - Arguments to update or create a Pos.
     * @example
     * // Update or create a Pos
     * const pos = await prisma.pos.upsert({
     *   create: {
     *     // ... data to create a Pos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pos we want to update
     *   }
     * })
     */
    upsert<T extends PosUpsertArgs>(args: SelectSubset<T, PosUpsertArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pos that matches the filter.
     * @param {PosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pos = await prisma.pos.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pos.
     * @param {PosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pos = await prisma.pos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosCountArgs} args - Arguments to filter Pos to count.
     * @example
     * // Count the number of Pos
     * const count = await prisma.pos.count({
     *   where: {
     *     // ... the filter for the Pos we want to count
     *   }
     * })
    **/
    count<T extends PosCountArgs>(
      args?: Subset<T, PosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PosAggregateArgs>(args: Subset<T, PosAggregateArgs>): Prisma.PrismaPromise<GetPosAggregateType<T>>

    /**
     * Group by Pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosGroupByArgs['orderBy'] }
        : { orderBy?: PosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pos model
   */
  readonly fields: PosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licence<T extends Pos$licenceArgs<ExtArgs> = {}>(args?: Subset<T, Pos$licenceArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subtype<T extends Pos$subtypeArgs<ExtArgs> = {}>(args?: Subset<T, Pos$subtypeArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    administration<T extends Pos$administrationArgs<ExtArgs> = {}>(args?: Subset<T, Pos$administrationArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agent<T extends Pos$agentArgs<ExtArgs> = {}>(args?: Subset<T, Pos$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pos model
   */
  interface PosFieldRefs {
    readonly id: FieldRef<"Pos", 'String'>
    readonly id_reference: FieldRef<"Pos", 'Int'>
    readonly province_id: FieldRef<"Pos", 'String'>
    readonly city_id: FieldRef<"Pos", 'String'>
    readonly area_id: FieldRef<"Pos", 'String'>
    readonly zone_id: FieldRef<"Pos", 'String'>
    readonly type_id: FieldRef<"Pos", 'String'>
    readonly subtype_id: FieldRef<"Pos", 'String'>
    readonly administration_id: FieldRef<"Pos", 'String'>
    readonly agent_id: FieldRef<"Pos", 'String'>
    readonly status: FieldRef<"Pos", 'Boolean'>
    readonly coordinates: FieldRef<"Pos", 'String[]'>
    readonly licence_id: FieldRef<"Pos", 'String'>
    readonly created_at: FieldRef<"Pos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pos findUnique
   */
  export type PosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter, which Pos to fetch.
     */
    where: PosWhereUniqueInput
  }

  /**
   * Pos findUniqueOrThrow
   */
  export type PosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter, which Pos to fetch.
     */
    where: PosWhereUniqueInput
  }

  /**
   * Pos findFirst
   */
  export type PosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter, which Pos to fetch.
     */
    where?: PosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pos to fetch.
     */
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pos.
     */
    cursor?: PosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pos.
     */
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Pos findFirstOrThrow
   */
  export type PosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter, which Pos to fetch.
     */
    where?: PosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pos to fetch.
     */
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pos.
     */
    cursor?: PosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pos.
     */
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Pos findMany
   */
  export type PosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter, which Pos to fetch.
     */
    where?: PosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pos to fetch.
     */
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pos.
     */
    cursor?: PosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pos.
     */
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Pos create
   */
  export type PosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * The data needed to create a Pos.
     */
    data: XOR<PosCreateInput, PosUncheckedCreateInput>
  }

  /**
   * Pos createMany
   */
  export type PosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pos.
     */
    data: PosCreateManyInput | PosCreateManyInput[]
  }

  /**
   * Pos update
   */
  export type PosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * The data needed to update a Pos.
     */
    data: XOR<PosUpdateInput, PosUncheckedUpdateInput>
    /**
     * Choose, which Pos to update.
     */
    where: PosWhereUniqueInput
  }

  /**
   * Pos updateMany
   */
  export type PosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pos.
     */
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyInput>
    /**
     * Filter which Pos to update
     */
    where?: PosWhereInput
    /**
     * Limit how many Pos to update.
     */
    limit?: number
  }

  /**
   * Pos upsert
   */
  export type PosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * The filter to search for the Pos to update in case it exists.
     */
    where: PosWhereUniqueInput
    /**
     * In case the Pos found by the `where` argument doesn't exist, create a new Pos with this data.
     */
    create: XOR<PosCreateInput, PosUncheckedCreateInput>
    /**
     * In case the Pos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosUpdateInput, PosUncheckedUpdateInput>
  }

  /**
   * Pos delete
   */
  export type PosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    /**
     * Filter which Pos to delete.
     */
    where: PosWhereUniqueInput
  }

  /**
   * Pos deleteMany
   */
  export type PosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pos to delete
     */
    where?: PosWhereInput
    /**
     * Limit how many Pos to delete.
     */
    limit?: number
  }

  /**
   * Pos findRaw
   */
  export type PosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pos aggregateRaw
   */
  export type PosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pos.licence
   */
  export type Pos$licenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    where?: LicenceWhereInput
  }

  /**
   * Pos.subtype
   */
  export type Pos$subtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    where?: SubtypeWhereInput
  }

  /**
   * Pos.administration
   */
  export type Pos$administrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    where?: AdministrationWhereInput
  }

  /**
   * Pos.agent
   */
  export type Pos$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Pos without action
   */
  export type PosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
  }


  /**
   * Model Administration
   */

  export type AggregateAdministration = {
    _count: AdministrationCountAggregateOutputType | null
    _min: AdministrationMinAggregateOutputType | null
    _max: AdministrationMaxAggregateOutputType | null
  }

  export type AdministrationMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type AdministrationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type AdministrationCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type AdministrationMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type AdministrationMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type AdministrationCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type AdministrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administration to aggregate.
     */
    where?: AdministrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrations to fetch.
     */
    orderBy?: AdministrationOrderByWithRelationInput | AdministrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrations
    **/
    _count?: true | AdministrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministrationMaxAggregateInputType
  }

  export type GetAdministrationAggregateType<T extends AdministrationAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministration[P]>
      : GetScalarType<T[P], AggregateAdministration[P]>
  }




  export type AdministrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrationWhereInput
    orderBy?: AdministrationOrderByWithAggregationInput | AdministrationOrderByWithAggregationInput[]
    by: AdministrationScalarFieldEnum[] | AdministrationScalarFieldEnum
    having?: AdministrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministrationCountAggregateInputType | true
    _min?: AdministrationMinAggregateInputType
    _max?: AdministrationMaxAggregateInputType
  }

  export type AdministrationGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    _count: AdministrationCountAggregateOutputType | null
    _min: AdministrationMinAggregateOutputType | null
    _max: AdministrationMaxAggregateOutputType | null
  }

  type GetAdministrationGroupByPayload<T extends AdministrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministrationGroupByOutputType[P]>
            : GetScalarType<T[P], AdministrationGroupByOutputType[P]>
        }
      >
    >


  export type AdministrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    licence?: boolean | Administration$licenceArgs<ExtArgs>
    pos?: boolean | Administration$posArgs<ExtArgs>
    _count?: boolean | AdministrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administration"]>



  export type AdministrationSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type AdministrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["administration"]>
  export type AdministrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licence?: boolean | Administration$licenceArgs<ExtArgs>
    pos?: boolean | Administration$posArgs<ExtArgs>
    _count?: boolean | AdministrationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdministrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administration"
    objects: {
      licence: Prisma.$LicencePayload<ExtArgs> | null
      pos: Prisma.$PosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["administration"]>
    composites: {}
  }

  type AdministrationGetPayload<S extends boolean | null | undefined | AdministrationDefaultArgs> = $Result.GetResult<Prisma.$AdministrationPayload, S>

  type AdministrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministrationCountAggregateInputType | true
    }

  export interface AdministrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administration'], meta: { name: 'Administration' } }
    /**
     * Find zero or one Administration that matches the filter.
     * @param {AdministrationFindUniqueArgs} args - Arguments to find a Administration
     * @example
     * // Get one Administration
     * const administration = await prisma.administration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministrationFindUniqueArgs>(args: SelectSubset<T, AdministrationFindUniqueArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministrationFindUniqueOrThrowArgs} args - Arguments to find a Administration
     * @example
     * // Get one Administration
     * const administration = await prisma.administration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministrationFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationFindFirstArgs} args - Arguments to find a Administration
     * @example
     * // Get one Administration
     * const administration = await prisma.administration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministrationFindFirstArgs>(args?: SelectSubset<T, AdministrationFindFirstArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationFindFirstOrThrowArgs} args - Arguments to find a Administration
     * @example
     * // Get one Administration
     * const administration = await prisma.administration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministrationFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrations
     * const administrations = await prisma.administration.findMany()
     * 
     * // Get first 10 Administrations
     * const administrations = await prisma.administration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administrationWithIdOnly = await prisma.administration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministrationFindManyArgs>(args?: SelectSubset<T, AdministrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administration.
     * @param {AdministrationCreateArgs} args - Arguments to create a Administration.
     * @example
     * // Create one Administration
     * const Administration = await prisma.administration.create({
     *   data: {
     *     // ... data to create a Administration
     *   }
     * })
     * 
     */
    create<T extends AdministrationCreateArgs>(args: SelectSubset<T, AdministrationCreateArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrations.
     * @param {AdministrationCreateManyArgs} args - Arguments to create many Administrations.
     * @example
     * // Create many Administrations
     * const administration = await prisma.administration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministrationCreateManyArgs>(args?: SelectSubset<T, AdministrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administration.
     * @param {AdministrationDeleteArgs} args - Arguments to delete one Administration.
     * @example
     * // Delete one Administration
     * const Administration = await prisma.administration.delete({
     *   where: {
     *     // ... filter to delete one Administration
     *   }
     * })
     * 
     */
    delete<T extends AdministrationDeleteArgs>(args: SelectSubset<T, AdministrationDeleteArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administration.
     * @param {AdministrationUpdateArgs} args - Arguments to update one Administration.
     * @example
     * // Update one Administration
     * const administration = await prisma.administration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministrationUpdateArgs>(args: SelectSubset<T, AdministrationUpdateArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrations.
     * @param {AdministrationDeleteManyArgs} args - Arguments to filter Administrations to delete.
     * @example
     * // Delete a few Administrations
     * const { count } = await prisma.administration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministrationDeleteManyArgs>(args?: SelectSubset<T, AdministrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrations
     * const administration = await prisma.administration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministrationUpdateManyArgs>(args: SelectSubset<T, AdministrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administration.
     * @param {AdministrationUpsertArgs} args - Arguments to update or create a Administration.
     * @example
     * // Update or create a Administration
     * const administration = await prisma.administration.upsert({
     *   create: {
     *     // ... data to create a Administration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administration we want to update
     *   }
     * })
     */
    upsert<T extends AdministrationUpsertArgs>(args: SelectSubset<T, AdministrationUpsertArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrations that matches the filter.
     * @param {AdministrationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const administration = await prisma.administration.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdministrationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Administration.
     * @param {AdministrationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const administration = await prisma.administration.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdministrationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Administrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationCountArgs} args - Arguments to filter Administrations to count.
     * @example
     * // Count the number of Administrations
     * const count = await prisma.administration.count({
     *   where: {
     *     // ... the filter for the Administrations we want to count
     *   }
     * })
    **/
    count<T extends AdministrationCountArgs>(
      args?: Subset<T, AdministrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministrationAggregateArgs>(args: Subset<T, AdministrationAggregateArgs>): Prisma.PrismaPromise<GetAdministrationAggregateType<T>>

    /**
     * Group by Administration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministrationGroupByArgs['orderBy'] }
        : { orderBy?: AdministrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administration model
   */
  readonly fields: AdministrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licence<T extends Administration$licenceArgs<ExtArgs> = {}>(args?: Subset<T, Administration$licenceArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pos<T extends Administration$posArgs<ExtArgs> = {}>(args?: Subset<T, Administration$posArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administration model
   */
  interface AdministrationFieldRefs {
    readonly id: FieldRef<"Administration", 'String'>
    readonly name: FieldRef<"Administration", 'String'>
    readonly created_at: FieldRef<"Administration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administration findUnique
   */
  export type AdministrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter, which Administration to fetch.
     */
    where: AdministrationWhereUniqueInput
  }

  /**
   * Administration findUniqueOrThrow
   */
  export type AdministrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter, which Administration to fetch.
     */
    where: AdministrationWhereUniqueInput
  }

  /**
   * Administration findFirst
   */
  export type AdministrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter, which Administration to fetch.
     */
    where?: AdministrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrations to fetch.
     */
    orderBy?: AdministrationOrderByWithRelationInput | AdministrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrations.
     */
    cursor?: AdministrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrations.
     */
    distinct?: AdministrationScalarFieldEnum | AdministrationScalarFieldEnum[]
  }

  /**
   * Administration findFirstOrThrow
   */
  export type AdministrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter, which Administration to fetch.
     */
    where?: AdministrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrations to fetch.
     */
    orderBy?: AdministrationOrderByWithRelationInput | AdministrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrations.
     */
    cursor?: AdministrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrations.
     */
    distinct?: AdministrationScalarFieldEnum | AdministrationScalarFieldEnum[]
  }

  /**
   * Administration findMany
   */
  export type AdministrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter, which Administrations to fetch.
     */
    where?: AdministrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrations to fetch.
     */
    orderBy?: AdministrationOrderByWithRelationInput | AdministrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrations.
     */
    cursor?: AdministrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrations.
     */
    skip?: number
    distinct?: AdministrationScalarFieldEnum | AdministrationScalarFieldEnum[]
  }

  /**
   * Administration create
   */
  export type AdministrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Administration.
     */
    data: XOR<AdministrationCreateInput, AdministrationUncheckedCreateInput>
  }

  /**
   * Administration createMany
   */
  export type AdministrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrations.
     */
    data: AdministrationCreateManyInput | AdministrationCreateManyInput[]
  }

  /**
   * Administration update
   */
  export type AdministrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Administration.
     */
    data: XOR<AdministrationUpdateInput, AdministrationUncheckedUpdateInput>
    /**
     * Choose, which Administration to update.
     */
    where: AdministrationWhereUniqueInput
  }

  /**
   * Administration updateMany
   */
  export type AdministrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrations.
     */
    data: XOR<AdministrationUpdateManyMutationInput, AdministrationUncheckedUpdateManyInput>
    /**
     * Filter which Administrations to update
     */
    where?: AdministrationWhereInput
    /**
     * Limit how many Administrations to update.
     */
    limit?: number
  }

  /**
   * Administration upsert
   */
  export type AdministrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Administration to update in case it exists.
     */
    where: AdministrationWhereUniqueInput
    /**
     * In case the Administration found by the `where` argument doesn't exist, create a new Administration with this data.
     */
    create: XOR<AdministrationCreateInput, AdministrationUncheckedCreateInput>
    /**
     * In case the Administration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministrationUpdateInput, AdministrationUncheckedUpdateInput>
  }

  /**
   * Administration delete
   */
  export type AdministrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
    /**
     * Filter which Administration to delete.
     */
    where: AdministrationWhereUniqueInput
  }

  /**
   * Administration deleteMany
   */
  export type AdministrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrations to delete
     */
    where?: AdministrationWhereInput
    /**
     * Limit how many Administrations to delete.
     */
    limit?: number
  }

  /**
   * Administration findRaw
   */
  export type AdministrationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Administration aggregateRaw
   */
  export type AdministrationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Administration.licence
   */
  export type Administration$licenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    where?: LicenceWhereInput
  }

  /**
   * Administration.pos
   */
  export type Administration$posArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Administration without action
   */
  export type AdministrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administration
     */
    select?: AdministrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administration
     */
    omit?: AdministrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    city?: boolean | Province$cityArgs<ExtArgs>
    Pos?: boolean | Province$PosArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>



  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Province$cityArgs<ExtArgs>
    Pos?: boolean | Province$PosArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>[]
      Pos: Prisma.$PosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * @param {ProvinceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const province = await prisma.province.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProvinceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Province.
     * @param {ProvinceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const province = await prisma.province.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProvinceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends Province$cityArgs<ExtArgs> = {}>(args?: Subset<T, Province$cityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pos<T extends Province$PosArgs<ExtArgs> = {}>(args?: Subset<T, Province$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'String'>
    readonly name: FieldRef<"Province", 'String'>
    readonly created_at: FieldRef<"Province", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province findRaw
   */
  export type ProvinceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Province aggregateRaw
   */
  export type ProvinceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Province.city
   */
  export type Province$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Province.Pos
   */
  export type Province$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    province_id: string | null
    created_at: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    province_id: string | null
    created_at: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    province_id: number
    created_at: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
    created_at?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
    created_at?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
    created_at?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    province_id: string
    created_at: Date
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    province_id?: boolean
    created_at?: boolean
    Province?: boolean | ProvinceDefaultArgs<ExtArgs>
    Pos?: boolean | City$PosArgs<ExtArgs>
    area?: boolean | City$areaArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>



  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    province_id?: boolean
    created_at?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "province_id" | "created_at", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Province?: boolean | ProvinceDefaultArgs<ExtArgs>
    Pos?: boolean | City$PosArgs<ExtArgs>
    area?: boolean | City$areaArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      Province: Prisma.$ProvincePayload<ExtArgs>
      Pos: Prisma.$PosPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      province_id: string
      created_at: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * @param {CityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const city = await prisma.city.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a City.
     * @param {CityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const city = await prisma.city.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pos<T extends City$PosArgs<ExtArgs> = {}>(args?: Subset<T, City$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    area<T extends City$areaArgs<ExtArgs> = {}>(args?: Subset<T, City$areaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly province_id: FieldRef<"City", 'String'>
    readonly created_at: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City findRaw
   */
  export type CityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * City aggregateRaw
   */
  export type CityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * City.Pos
   */
  export type City$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * City.area
   */
  export type City$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    city_id: string | null
    created_at: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city_id: string | null
    created_at: Date | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    city_id: number
    created_at: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    city_id?: true
    created_at?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    city_id?: true
    created_at?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    city_id?: true
    created_at?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    city_id: string | null
    created_at: Date
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city_id?: boolean
    created_at?: boolean
    zone?: boolean | Area$zoneArgs<ExtArgs>
    Pos?: boolean | Area$PosArgs<ExtArgs>
    city?: boolean | Area$cityArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    city_id?: boolean
    created_at?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city_id" | "created_at", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | Area$zoneArgs<ExtArgs>
    Pos?: boolean | Area$PosArgs<ExtArgs>
    city?: boolean | Area$cityArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>[]
      Pos: Prisma.$PosPayload<ExtArgs>[]
      city: Prisma.$CityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city_id: string | null
      created_at: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * @param {AreaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const area = await prisma.area.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AreaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Area.
     * @param {AreaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const area = await prisma.area.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AreaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends Area$zoneArgs<ExtArgs> = {}>(args?: Subset<T, Area$zoneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pos<T extends Area$PosArgs<ExtArgs> = {}>(args?: Subset<T, Area$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    city<T extends Area$cityArgs<ExtArgs> = {}>(args?: Subset<T, Area$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly city_id: FieldRef<"Area", 'String'>
    readonly created_at: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area findRaw
   */
  export type AreaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Area aggregateRaw
   */
  export type AreaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Area.zone
   */
  export type Area$zoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    cursor?: ZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Area.Pos
   */
  export type Area$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Area.city
   */
  export type Area$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneAvgAggregateOutputType = {
    zone_number: number | null
  }

  export type ZoneSumAggregateOutputType = {
    zone_number: number | null
  }

  export type ZoneMinAggregateOutputType = {
    id: string | null
    zone_number: number | null
    area_id: string | null
    created_at: Date | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: string | null
    zone_number: number | null
    area_id: string | null
    created_at: Date | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    zone_number: number
    area_id: number
    created_at: number
    _all: number
  }


  export type ZoneAvgAggregateInputType = {
    zone_number?: true
  }

  export type ZoneSumAggregateInputType = {
    zone_number?: true
  }

  export type ZoneMinAggregateInputType = {
    id?: true
    zone_number?: true
    area_id?: true
    created_at?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    zone_number?: true
    area_id?: true
    created_at?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    zone_number?: true
    area_id?: true
    created_at?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _avg?: ZoneAvgAggregateInputType
    _sum?: ZoneSumAggregateInputType
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: string
    zone_number: number
    area_id: string | null
    created_at: Date
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zone_number?: boolean
    area_id?: boolean
    created_at?: boolean
    area?: boolean | Zone$areaArgs<ExtArgs>
    Pos?: boolean | Zone$PosArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>



  export type ZoneSelectScalar = {
    id?: boolean
    zone_number?: boolean
    area_id?: boolean
    created_at?: boolean
  }

  export type ZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zone_number" | "area_id" | "created_at", ExtArgs["result"]["zone"]>
  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Zone$areaArgs<ExtArgs>
    Pos?: boolean | Zone$PosArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      Pos: Prisma.$PosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zone_number: number
      area_id: string | null
      created_at: Date
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneFindUniqueArgs>(args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneFindFirstArgs>(args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneFindManyArgs>(args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends ZoneCreateArgs>(args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneCreateManyArgs>(args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends ZoneDeleteArgs>(args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneUpdateArgs>(args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneDeleteManyArgs>(args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneUpdateManyArgs>(args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends ZoneUpsertArgs>(args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * @param {ZoneFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const zone = await prisma.zone.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ZoneFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Zone.
     * @param {ZoneAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const zone = await prisma.zone.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ZoneAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Zone$areaArgs<ExtArgs> = {}>(args?: Subset<T, Zone$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Pos<T extends Zone$PosArgs<ExtArgs> = {}>(args?: Subset<T, Zone$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zone model
   */
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'String'>
    readonly zone_number: FieldRef<"Zone", 'Int'>
    readonly area_id: FieldRef<"Zone", 'String'>
    readonly created_at: FieldRef<"Zone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to delete.
     */
    limit?: number
  }

  /**
   * Zone findRaw
   */
  export type ZoneFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Zone aggregateRaw
   */
  export type ZoneAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Zone.area
   */
  export type Zone$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Zone.Pos
   */
  export type Zone$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model Licence
   */

  export type AggregateLicence = {
    _count: LicenceCountAggregateOutputType | null
    _avg: LicenceAvgAggregateOutputType | null
    _sum: LicenceSumAggregateOutputType | null
    _min: LicenceMinAggregateOutputType | null
    _max: LicenceMaxAggregateOutputType | null
  }

  export type LicenceAvgAggregateOutputType = {
    reference_id: number | null
  }

  export type LicenceSumAggregateOutputType = {
    reference_id: number | null
  }

  export type LicenceMinAggregateOutputType = {
    id: string | null
    reference_id: number | null
    status: boolean | null
    created_at: Date | null
    administration_id: string | null
  }

  export type LicenceMaxAggregateOutputType = {
    id: string | null
    reference_id: number | null
    status: boolean | null
    created_at: Date | null
    administration_id: string | null
  }

  export type LicenceCountAggregateOutputType = {
    id: number
    reference_id: number
    status: number
    created_at: number
    administration_id: number
    _all: number
  }


  export type LicenceAvgAggregateInputType = {
    reference_id?: true
  }

  export type LicenceSumAggregateInputType = {
    reference_id?: true
  }

  export type LicenceMinAggregateInputType = {
    id?: true
    reference_id?: true
    status?: true
    created_at?: true
    administration_id?: true
  }

  export type LicenceMaxAggregateInputType = {
    id?: true
    reference_id?: true
    status?: true
    created_at?: true
    administration_id?: true
  }

  export type LicenceCountAggregateInputType = {
    id?: true
    reference_id?: true
    status?: true
    created_at?: true
    administration_id?: true
    _all?: true
  }

  export type LicenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licence to aggregate.
     */
    where?: LicenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licences to fetch.
     */
    orderBy?: LicenceOrderByWithRelationInput | LicenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licences
    **/
    _count?: true | LicenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenceMaxAggregateInputType
  }

  export type GetLicenceAggregateType<T extends LicenceAggregateArgs> = {
        [P in keyof T & keyof AggregateLicence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicence[P]>
      : GetScalarType<T[P], AggregateLicence[P]>
  }




  export type LicenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenceWhereInput
    orderBy?: LicenceOrderByWithAggregationInput | LicenceOrderByWithAggregationInput[]
    by: LicenceScalarFieldEnum[] | LicenceScalarFieldEnum
    having?: LicenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenceCountAggregateInputType | true
    _avg?: LicenceAvgAggregateInputType
    _sum?: LicenceSumAggregateInputType
    _min?: LicenceMinAggregateInputType
    _max?: LicenceMaxAggregateInputType
  }

  export type LicenceGroupByOutputType = {
    id: string
    reference_id: number
    status: boolean
    created_at: Date
    administration_id: string
    _count: LicenceCountAggregateOutputType | null
    _avg: LicenceAvgAggregateOutputType | null
    _sum: LicenceSumAggregateOutputType | null
    _min: LicenceMinAggregateOutputType | null
    _max: LicenceMaxAggregateOutputType | null
  }

  type GetLicenceGroupByPayload<T extends LicenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenceGroupByOutputType[P]>
            : GetScalarType<T[P], LicenceGroupByOutputType[P]>
        }
      >
    >


  export type LicenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference_id?: boolean
    status?: boolean
    created_at?: boolean
    administration_id?: boolean
    pos?: boolean | Licence$posArgs<ExtArgs>
    administration?: boolean | AdministrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licence"]>



  export type LicenceSelectScalar = {
    id?: boolean
    reference_id?: boolean
    status?: boolean
    created_at?: boolean
    administration_id?: boolean
  }

  export type LicenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference_id" | "status" | "created_at" | "administration_id", ExtArgs["result"]["licence"]>
  export type LicenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pos?: boolean | Licence$posArgs<ExtArgs>
    administration?: boolean | AdministrationDefaultArgs<ExtArgs>
  }

  export type $LicencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Licence"
    objects: {
      pos: Prisma.$PosPayload<ExtArgs> | null
      administration: Prisma.$AdministrationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference_id: number
      status: boolean
      created_at: Date
      administration_id: string
    }, ExtArgs["result"]["licence"]>
    composites: {}
  }

  type LicenceGetPayload<S extends boolean | null | undefined | LicenceDefaultArgs> = $Result.GetResult<Prisma.$LicencePayload, S>

  type LicenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenceCountAggregateInputType | true
    }

  export interface LicenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Licence'], meta: { name: 'Licence' } }
    /**
     * Find zero or one Licence that matches the filter.
     * @param {LicenceFindUniqueArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenceFindUniqueArgs>(args: SelectSubset<T, LicenceFindUniqueArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Licence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenceFindUniqueOrThrowArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenceFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceFindFirstArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenceFindFirstArgs>(args?: SelectSubset<T, LicenceFindFirstArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceFindFirstOrThrowArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenceFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licences
     * const licences = await prisma.licence.findMany()
     * 
     * // Get first 10 Licences
     * const licences = await prisma.licence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenceWithIdOnly = await prisma.licence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenceFindManyArgs>(args?: SelectSubset<T, LicenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Licence.
     * @param {LicenceCreateArgs} args - Arguments to create a Licence.
     * @example
     * // Create one Licence
     * const Licence = await prisma.licence.create({
     *   data: {
     *     // ... data to create a Licence
     *   }
     * })
     * 
     */
    create<T extends LicenceCreateArgs>(args: SelectSubset<T, LicenceCreateArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licences.
     * @param {LicenceCreateManyArgs} args - Arguments to create many Licences.
     * @example
     * // Create many Licences
     * const licence = await prisma.licence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenceCreateManyArgs>(args?: SelectSubset<T, LicenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Licence.
     * @param {LicenceDeleteArgs} args - Arguments to delete one Licence.
     * @example
     * // Delete one Licence
     * const Licence = await prisma.licence.delete({
     *   where: {
     *     // ... filter to delete one Licence
     *   }
     * })
     * 
     */
    delete<T extends LicenceDeleteArgs>(args: SelectSubset<T, LicenceDeleteArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Licence.
     * @param {LicenceUpdateArgs} args - Arguments to update one Licence.
     * @example
     * // Update one Licence
     * const licence = await prisma.licence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenceUpdateArgs>(args: SelectSubset<T, LicenceUpdateArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licences.
     * @param {LicenceDeleteManyArgs} args - Arguments to filter Licences to delete.
     * @example
     * // Delete a few Licences
     * const { count } = await prisma.licence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenceDeleteManyArgs>(args?: SelectSubset<T, LicenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licences
     * const licence = await prisma.licence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenceUpdateManyArgs>(args: SelectSubset<T, LicenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Licence.
     * @param {LicenceUpsertArgs} args - Arguments to update or create a Licence.
     * @example
     * // Update or create a Licence
     * const licence = await prisma.licence.upsert({
     *   create: {
     *     // ... data to create a Licence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licence we want to update
     *   }
     * })
     */
    upsert<T extends LicenceUpsertArgs>(args: SelectSubset<T, LicenceUpsertArgs<ExtArgs>>): Prisma__LicenceClient<$Result.GetResult<Prisma.$LicencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licences that matches the filter.
     * @param {LicenceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const licence = await prisma.licence.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LicenceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Licence.
     * @param {LicenceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const licence = await prisma.licence.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LicenceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Licences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceCountArgs} args - Arguments to filter Licences to count.
     * @example
     * // Count the number of Licences
     * const count = await prisma.licence.count({
     *   where: {
     *     // ... the filter for the Licences we want to count
     *   }
     * })
    **/
    count<T extends LicenceCountArgs>(
      args?: Subset<T, LicenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenceAggregateArgs>(args: Subset<T, LicenceAggregateArgs>): Prisma.PrismaPromise<GetLicenceAggregateType<T>>

    /**
     * Group by Licence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenceGroupByArgs['orderBy'] }
        : { orderBy?: LicenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Licence model
   */
  readonly fields: LicenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Licence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pos<T extends Licence$posArgs<ExtArgs> = {}>(args?: Subset<T, Licence$posArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    administration<T extends AdministrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministrationDefaultArgs<ExtArgs>>): Prisma__AdministrationClient<$Result.GetResult<Prisma.$AdministrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Licence model
   */
  interface LicenceFieldRefs {
    readonly id: FieldRef<"Licence", 'String'>
    readonly reference_id: FieldRef<"Licence", 'Int'>
    readonly status: FieldRef<"Licence", 'Boolean'>
    readonly created_at: FieldRef<"Licence", 'DateTime'>
    readonly administration_id: FieldRef<"Licence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Licence findUnique
   */
  export type LicenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter, which Licence to fetch.
     */
    where: LicenceWhereUniqueInput
  }

  /**
   * Licence findUniqueOrThrow
   */
  export type LicenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter, which Licence to fetch.
     */
    where: LicenceWhereUniqueInput
  }

  /**
   * Licence findFirst
   */
  export type LicenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter, which Licence to fetch.
     */
    where?: LicenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licences to fetch.
     */
    orderBy?: LicenceOrderByWithRelationInput | LicenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licences.
     */
    cursor?: LicenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licences.
     */
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * Licence findFirstOrThrow
   */
  export type LicenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter, which Licence to fetch.
     */
    where?: LicenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licences to fetch.
     */
    orderBy?: LicenceOrderByWithRelationInput | LicenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licences.
     */
    cursor?: LicenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licences.
     */
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * Licence findMany
   */
  export type LicenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter, which Licences to fetch.
     */
    where?: LicenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licences to fetch.
     */
    orderBy?: LicenceOrderByWithRelationInput | LicenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licences.
     */
    cursor?: LicenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licences.
     */
    skip?: number
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * Licence create
   */
  export type LicenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Licence.
     */
    data: XOR<LicenceCreateInput, LicenceUncheckedCreateInput>
  }

  /**
   * Licence createMany
   */
  export type LicenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licences.
     */
    data: LicenceCreateManyInput | LicenceCreateManyInput[]
  }

  /**
   * Licence update
   */
  export type LicenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Licence.
     */
    data: XOR<LicenceUpdateInput, LicenceUncheckedUpdateInput>
    /**
     * Choose, which Licence to update.
     */
    where: LicenceWhereUniqueInput
  }

  /**
   * Licence updateMany
   */
  export type LicenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licences.
     */
    data: XOR<LicenceUpdateManyMutationInput, LicenceUncheckedUpdateManyInput>
    /**
     * Filter which Licences to update
     */
    where?: LicenceWhereInput
    /**
     * Limit how many Licences to update.
     */
    limit?: number
  }

  /**
   * Licence upsert
   */
  export type LicenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Licence to update in case it exists.
     */
    where: LicenceWhereUniqueInput
    /**
     * In case the Licence found by the `where` argument doesn't exist, create a new Licence with this data.
     */
    create: XOR<LicenceCreateInput, LicenceUncheckedCreateInput>
    /**
     * In case the Licence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenceUpdateInput, LicenceUncheckedUpdateInput>
  }

  /**
   * Licence delete
   */
  export type LicenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
    /**
     * Filter which Licence to delete.
     */
    where: LicenceWhereUniqueInput
  }

  /**
   * Licence deleteMany
   */
  export type LicenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licences to delete
     */
    where?: LicenceWhereInput
    /**
     * Limit how many Licences to delete.
     */
    limit?: number
  }

  /**
   * Licence findRaw
   */
  export type LicenceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Licence aggregateRaw
   */
  export type LicenceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Licence.pos
   */
  export type Licence$posArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
  }

  /**
   * Licence without action
   */
  export type LicenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licence
     */
    select?: LicenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licence
     */
    omit?: LicenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenceInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type TypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    subtype?: boolean | Type$subtypeArgs<ExtArgs>
    Pos?: boolean | Type$PosArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>



  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtype?: boolean | Type$subtypeArgs<ExtArgs>
    Pos?: boolean | Type$PosArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      subtype: Prisma.$SubtypePayload<ExtArgs>[]
      Pos: Prisma.$PosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * @param {TypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const type = await prisma.type.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Type.
     * @param {TypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const type = await prisma.type.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtype<T extends Type$subtypeArgs<ExtArgs> = {}>(args?: Subset<T, Type$subtypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pos<T extends Type$PosArgs<ExtArgs> = {}>(args?: Subset<T, Type$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'String'>
    readonly name: FieldRef<"Type", 'String'>
    readonly created_at: FieldRef<"Type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type findRaw
   */
  export type TypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Type aggregateRaw
   */
  export type TypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Type.subtype
   */
  export type Type$subtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    where?: SubtypeWhereInput
    orderBy?: SubtypeOrderByWithRelationInput | SubtypeOrderByWithRelationInput[]
    cursor?: SubtypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtypeScalarFieldEnum | SubtypeScalarFieldEnum[]
  }

  /**
   * Type.Pos
   */
  export type Type$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Subtype
   */

  export type AggregateSubtype = {
    _count: SubtypeCountAggregateOutputType | null
    _min: SubtypeMinAggregateOutputType | null
    _max: SubtypeMaxAggregateOutputType | null
  }

  export type SubtypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    type_id: string | null
    created_at: Date | null
  }

  export type SubtypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type_id: string | null
    created_at: Date | null
  }

  export type SubtypeCountAggregateOutputType = {
    id: number
    name: number
    type_id: number
    created_at: number
    _all: number
  }


  export type SubtypeMinAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    created_at?: true
  }

  export type SubtypeMaxAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    created_at?: true
  }

  export type SubtypeCountAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    created_at?: true
    _all?: true
  }

  export type SubtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtype to aggregate.
     */
    where?: SubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtypes to fetch.
     */
    orderBy?: SubtypeOrderByWithRelationInput | SubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtypes
    **/
    _count?: true | SubtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtypeMaxAggregateInputType
  }

  export type GetSubtypeAggregateType<T extends SubtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtype[P]>
      : GetScalarType<T[P], AggregateSubtype[P]>
  }




  export type SubtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtypeWhereInput
    orderBy?: SubtypeOrderByWithAggregationInput | SubtypeOrderByWithAggregationInput[]
    by: SubtypeScalarFieldEnum[] | SubtypeScalarFieldEnum
    having?: SubtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtypeCountAggregateInputType | true
    _min?: SubtypeMinAggregateInputType
    _max?: SubtypeMaxAggregateInputType
  }

  export type SubtypeGroupByOutputType = {
    id: string
    name: string
    type_id: string
    created_at: Date
    _count: SubtypeCountAggregateOutputType | null
    _min: SubtypeMinAggregateOutputType | null
    _max: SubtypeMaxAggregateOutputType | null
  }

  type GetSubtypeGroupByPayload<T extends SubtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtypeGroupByOutputType[P]>
            : GetScalarType<T[P], SubtypeGroupByOutputType[P]>
        }
      >
    >


  export type SubtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type_id?: boolean
    created_at?: boolean
    type?: boolean | TypeDefaultArgs<ExtArgs>
    Pos?: boolean | Subtype$PosArgs<ExtArgs>
    _count?: boolean | SubtypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtype"]>



  export type SubtypeSelectScalar = {
    id?: boolean
    name?: boolean
    type_id?: boolean
    created_at?: boolean
  }

  export type SubtypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type_id" | "created_at", ExtArgs["result"]["subtype"]>
  export type SubtypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TypeDefaultArgs<ExtArgs>
    Pos?: boolean | Subtype$PosArgs<ExtArgs>
    _count?: boolean | SubtypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtype"
    objects: {
      type: Prisma.$TypePayload<ExtArgs>
      Pos: Prisma.$PosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type_id: string
      created_at: Date
    }, ExtArgs["result"]["subtype"]>
    composites: {}
  }

  type SubtypeGetPayload<S extends boolean | null | undefined | SubtypeDefaultArgs> = $Result.GetResult<Prisma.$SubtypePayload, S>

  type SubtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtypeCountAggregateInputType | true
    }

  export interface SubtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtype'], meta: { name: 'Subtype' } }
    /**
     * Find zero or one Subtype that matches the filter.
     * @param {SubtypeFindUniqueArgs} args - Arguments to find a Subtype
     * @example
     * // Get one Subtype
     * const subtype = await prisma.subtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtypeFindUniqueArgs>(args: SelectSubset<T, SubtypeFindUniqueArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subtype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtypeFindUniqueOrThrowArgs} args - Arguments to find a Subtype
     * @example
     * // Get one Subtype
     * const subtype = await prisma.subtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeFindFirstArgs} args - Arguments to find a Subtype
     * @example
     * // Get one Subtype
     * const subtype = await prisma.subtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtypeFindFirstArgs>(args?: SelectSubset<T, SubtypeFindFirstArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeFindFirstOrThrowArgs} args - Arguments to find a Subtype
     * @example
     * // Get one Subtype
     * const subtype = await prisma.subtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtypes
     * const subtypes = await prisma.subtype.findMany()
     * 
     * // Get first 10 Subtypes
     * const subtypes = await prisma.subtype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtypeWithIdOnly = await prisma.subtype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtypeFindManyArgs>(args?: SelectSubset<T, SubtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subtype.
     * @param {SubtypeCreateArgs} args - Arguments to create a Subtype.
     * @example
     * // Create one Subtype
     * const Subtype = await prisma.subtype.create({
     *   data: {
     *     // ... data to create a Subtype
     *   }
     * })
     * 
     */
    create<T extends SubtypeCreateArgs>(args: SelectSubset<T, SubtypeCreateArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subtypes.
     * @param {SubtypeCreateManyArgs} args - Arguments to create many Subtypes.
     * @example
     * // Create many Subtypes
     * const subtype = await prisma.subtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtypeCreateManyArgs>(args?: SelectSubset<T, SubtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtype.
     * @param {SubtypeDeleteArgs} args - Arguments to delete one Subtype.
     * @example
     * // Delete one Subtype
     * const Subtype = await prisma.subtype.delete({
     *   where: {
     *     // ... filter to delete one Subtype
     *   }
     * })
     * 
     */
    delete<T extends SubtypeDeleteArgs>(args: SelectSubset<T, SubtypeDeleteArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subtype.
     * @param {SubtypeUpdateArgs} args - Arguments to update one Subtype.
     * @example
     * // Update one Subtype
     * const subtype = await prisma.subtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtypeUpdateArgs>(args: SelectSubset<T, SubtypeUpdateArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subtypes.
     * @param {SubtypeDeleteManyArgs} args - Arguments to filter Subtypes to delete.
     * @example
     * // Delete a few Subtypes
     * const { count } = await prisma.subtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtypeDeleteManyArgs>(args?: SelectSubset<T, SubtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtypes
     * const subtype = await prisma.subtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtypeUpdateManyArgs>(args: SelectSubset<T, SubtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtype.
     * @param {SubtypeUpsertArgs} args - Arguments to update or create a Subtype.
     * @example
     * // Update or create a Subtype
     * const subtype = await prisma.subtype.upsert({
     *   create: {
     *     // ... data to create a Subtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtype we want to update
     *   }
     * })
     */
    upsert<T extends SubtypeUpsertArgs>(args: SelectSubset<T, SubtypeUpsertArgs<ExtArgs>>): Prisma__SubtypeClient<$Result.GetResult<Prisma.$SubtypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtypes that matches the filter.
     * @param {SubtypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subtype = await prisma.subtype.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubtypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subtype.
     * @param {SubtypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subtype = await prisma.subtype.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubtypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeCountArgs} args - Arguments to filter Subtypes to count.
     * @example
     * // Count the number of Subtypes
     * const count = await prisma.subtype.count({
     *   where: {
     *     // ... the filter for the Subtypes we want to count
     *   }
     * })
    **/
    count<T extends SubtypeCountArgs>(
      args?: Subset<T, SubtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubtypeAggregateArgs>(args: Subset<T, SubtypeAggregateArgs>): Prisma.PrismaPromise<GetSubtypeAggregateType<T>>

    /**
     * Group by Subtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtypeGroupByArgs['orderBy'] }
        : { orderBy?: SubtypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtype model
   */
  readonly fields: SubtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pos<T extends Subtype$PosArgs<ExtArgs> = {}>(args?: Subset<T, Subtype$PosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subtype model
   */
  interface SubtypeFieldRefs {
    readonly id: FieldRef<"Subtype", 'String'>
    readonly name: FieldRef<"Subtype", 'String'>
    readonly type_id: FieldRef<"Subtype", 'String'>
    readonly created_at: FieldRef<"Subtype", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subtype findUnique
   */
  export type SubtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter, which Subtype to fetch.
     */
    where: SubtypeWhereUniqueInput
  }

  /**
   * Subtype findUniqueOrThrow
   */
  export type SubtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter, which Subtype to fetch.
     */
    where: SubtypeWhereUniqueInput
  }

  /**
   * Subtype findFirst
   */
  export type SubtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter, which Subtype to fetch.
     */
    where?: SubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtypes to fetch.
     */
    orderBy?: SubtypeOrderByWithRelationInput | SubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtypes.
     */
    cursor?: SubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtypes.
     */
    distinct?: SubtypeScalarFieldEnum | SubtypeScalarFieldEnum[]
  }

  /**
   * Subtype findFirstOrThrow
   */
  export type SubtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter, which Subtype to fetch.
     */
    where?: SubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtypes to fetch.
     */
    orderBy?: SubtypeOrderByWithRelationInput | SubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtypes.
     */
    cursor?: SubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtypes.
     */
    distinct?: SubtypeScalarFieldEnum | SubtypeScalarFieldEnum[]
  }

  /**
   * Subtype findMany
   */
  export type SubtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter, which Subtypes to fetch.
     */
    where?: SubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtypes to fetch.
     */
    orderBy?: SubtypeOrderByWithRelationInput | SubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtypes.
     */
    cursor?: SubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtypes.
     */
    skip?: number
    distinct?: SubtypeScalarFieldEnum | SubtypeScalarFieldEnum[]
  }

  /**
   * Subtype create
   */
  export type SubtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtype.
     */
    data: XOR<SubtypeCreateInput, SubtypeUncheckedCreateInput>
  }

  /**
   * Subtype createMany
   */
  export type SubtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtypes.
     */
    data: SubtypeCreateManyInput | SubtypeCreateManyInput[]
  }

  /**
   * Subtype update
   */
  export type SubtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtype.
     */
    data: XOR<SubtypeUpdateInput, SubtypeUncheckedUpdateInput>
    /**
     * Choose, which Subtype to update.
     */
    where: SubtypeWhereUniqueInput
  }

  /**
   * Subtype updateMany
   */
  export type SubtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtypes.
     */
    data: XOR<SubtypeUpdateManyMutationInput, SubtypeUncheckedUpdateManyInput>
    /**
     * Filter which Subtypes to update
     */
    where?: SubtypeWhereInput
    /**
     * Limit how many Subtypes to update.
     */
    limit?: number
  }

  /**
   * Subtype upsert
   */
  export type SubtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtype to update in case it exists.
     */
    where: SubtypeWhereUniqueInput
    /**
     * In case the Subtype found by the `where` argument doesn't exist, create a new Subtype with this data.
     */
    create: XOR<SubtypeCreateInput, SubtypeUncheckedCreateInput>
    /**
     * In case the Subtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtypeUpdateInput, SubtypeUncheckedUpdateInput>
  }

  /**
   * Subtype delete
   */
  export type SubtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
    /**
     * Filter which Subtype to delete.
     */
    where: SubtypeWhereUniqueInput
  }

  /**
   * Subtype deleteMany
   */
  export type SubtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtypes to delete
     */
    where?: SubtypeWhereInput
    /**
     * Limit how many Subtypes to delete.
     */
    limit?: number
  }

  /**
   * Subtype findRaw
   */
  export type SubtypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subtype aggregateRaw
   */
  export type SubtypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subtype.Pos
   */
  export type Subtype$PosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
    orderBy?: PosOrderByWithRelationInput | PosOrderByWithRelationInput[]
    cursor?: PosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosScalarFieldEnum | PosScalarFieldEnum[]
  }

  /**
   * Subtype without action
   */
  export type SubtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtype
     */
    select?: SubtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtype
     */
    omit?: SubtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtypeInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    agent_id: string | null
    phone: string | null
    afrimoney: string | null
    status: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    agent_id: string | null
    phone: string | null
    afrimoney: string | null
    status: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    agent_id: number
    phone: number
    afrimoney: number
    status: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    agent_id?: true
    phone?: true
    afrimoney?: true
    status?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    agent_id?: true
    phone?: true
    afrimoney?: true
    status?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    agent_id?: true
    phone?: true
    afrimoney?: true
    status?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney: string | null
    status: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    agent_id?: boolean
    phone?: boolean
    afrimoney?: boolean
    status?: boolean
    pos?: boolean | Agent$posArgs<ExtArgs>
    terminal?: boolean | Agent$terminalArgs<ExtArgs>
    revision?: boolean | Agent$revisionArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>



  export type AgentSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    agent_id?: boolean
    phone?: boolean
    afrimoney?: boolean
    status?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "agent_id" | "phone" | "afrimoney" | "status", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pos?: boolean | Agent$posArgs<ExtArgs>
    terminal?: boolean | Agent$terminalArgs<ExtArgs>
    revision?: boolean | Agent$revisionArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      pos: Prisma.$PosPayload<ExtArgs> | null
      terminal: Prisma.$TerminalPayload<ExtArgs> | null
      revision: Prisma.$RevisionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      agent_id: string
      phone: string
      afrimoney: string | null
      status: string | null
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * @param {AgentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const agent = await prisma.agent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AgentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Agent.
     * @param {AgentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const agent = await prisma.agent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AgentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pos<T extends Agent$posArgs<ExtArgs> = {}>(args?: Subset<T, Agent$posArgs<ExtArgs>>): Prisma__PosClient<$Result.GetResult<Prisma.$PosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    terminal<T extends Agent$terminalArgs<ExtArgs> = {}>(args?: Subset<T, Agent$terminalArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revision<T extends Agent$revisionArgs<ExtArgs> = {}>(args?: Subset<T, Agent$revisionArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly first_name: FieldRef<"Agent", 'String'>
    readonly last_name: FieldRef<"Agent", 'String'>
    readonly agent_id: FieldRef<"Agent", 'String'>
    readonly phone: FieldRef<"Agent", 'String'>
    readonly afrimoney: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent findRaw
   */
  export type AgentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Agent aggregateRaw
   */
  export type AgentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Agent.pos
   */
  export type Agent$posArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pos
     */
    select?: PosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pos
     */
    omit?: PosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInclude<ExtArgs> | null
    where?: PosWhereInput
  }

  /**
   * Agent.terminal
   */
  export type Agent$terminalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    where?: TerminalWhereInput
  }

  /**
   * Agent.revision
   */
  export type Agent$revisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Revision
   */

  export type AggregateRevision = {
    _count: RevisionCountAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  export type RevisionMinAggregateOutputType = {
    id: string | null
    image: string | null
    additional_info: string | null
    agent_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RevisionMaxAggregateOutputType = {
    id: string | null
    image: string | null
    additional_info: string | null
    agent_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RevisionCountAggregateOutputType = {
    id: number
    image: number
    additional_info: number
    items: number
    agent_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RevisionMinAggregateInputType = {
    id?: true
    image?: true
    additional_info?: true
    agent_id?: true
    created_at?: true
    updated_at?: true
  }

  export type RevisionMaxAggregateInputType = {
    id?: true
    image?: true
    additional_info?: true
    agent_id?: true
    created_at?: true
    updated_at?: true
  }

  export type RevisionCountAggregateInputType = {
    id?: true
    image?: true
    additional_info?: true
    items?: true
    agent_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RevisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revision to aggregate.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Revisions
    **/
    _count?: true | RevisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionMaxAggregateInputType
  }

  export type GetRevisionAggregateType<T extends RevisionAggregateArgs> = {
        [P in keyof T & keyof AggregateRevision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevision[P]>
      : GetScalarType<T[P], AggregateRevision[P]>
  }




  export type RevisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithAggregationInput | RevisionOrderByWithAggregationInput[]
    by: RevisionScalarFieldEnum[] | RevisionScalarFieldEnum
    having?: RevisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionCountAggregateInputType | true
    _min?: RevisionMinAggregateInputType
    _max?: RevisionMaxAggregateInputType
  }

  export type RevisionGroupByOutputType = {
    id: string
    image: string
    additional_info: string | null
    items: JsonValue
    agent_id: string
    created_at: Date
    updated_at: Date
    _count: RevisionCountAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  type GetRevisionGroupByPayload<T extends RevisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionGroupByOutputType[P]>
        }
      >
    >


  export type RevisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    additional_info?: boolean
    items?: boolean
    agent_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    agent?: boolean | Revision$agentArgs<ExtArgs>
  }, ExtArgs["result"]["revision"]>



  export type RevisionSelectScalar = {
    id?: boolean
    image?: boolean
    additional_info?: boolean
    items?: boolean
    agent_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RevisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "additional_info" | "items" | "agent_id" | "created_at" | "updated_at", ExtArgs["result"]["revision"]>
  export type RevisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Revision$agentArgs<ExtArgs>
  }

  export type $RevisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Revision"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string
      additional_info: string | null
      items: Prisma.JsonValue
      agent_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["revision"]>
    composites: {}
  }

  type RevisionGetPayload<S extends boolean | null | undefined | RevisionDefaultArgs> = $Result.GetResult<Prisma.$RevisionPayload, S>

  type RevisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionCountAggregateInputType | true
    }

  export interface RevisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Revision'], meta: { name: 'Revision' } }
    /**
     * Find zero or one Revision that matches the filter.
     * @param {RevisionFindUniqueArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionFindUniqueArgs>(args: SelectSubset<T, RevisionFindUniqueArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Revision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionFindUniqueOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionFindFirstArgs>(args?: SelectSubset<T, RevisionFindFirstArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revisions
     * const revisions = await prisma.revision.findMany()
     * 
     * // Get first 10 Revisions
     * const revisions = await prisma.revision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionWithIdOnly = await prisma.revision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionFindManyArgs>(args?: SelectSubset<T, RevisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Revision.
     * @param {RevisionCreateArgs} args - Arguments to create a Revision.
     * @example
     * // Create one Revision
     * const Revision = await prisma.revision.create({
     *   data: {
     *     // ... data to create a Revision
     *   }
     * })
     * 
     */
    create<T extends RevisionCreateArgs>(args: SelectSubset<T, RevisionCreateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Revisions.
     * @param {RevisionCreateManyArgs} args - Arguments to create many Revisions.
     * @example
     * // Create many Revisions
     * const revision = await prisma.revision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionCreateManyArgs>(args?: SelectSubset<T, RevisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Revision.
     * @param {RevisionDeleteArgs} args - Arguments to delete one Revision.
     * @example
     * // Delete one Revision
     * const Revision = await prisma.revision.delete({
     *   where: {
     *     // ... filter to delete one Revision
     *   }
     * })
     * 
     */
    delete<T extends RevisionDeleteArgs>(args: SelectSubset<T, RevisionDeleteArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Revision.
     * @param {RevisionUpdateArgs} args - Arguments to update one Revision.
     * @example
     * // Update one Revision
     * const revision = await prisma.revision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionUpdateArgs>(args: SelectSubset<T, RevisionUpdateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Revisions.
     * @param {RevisionDeleteManyArgs} args - Arguments to filter Revisions to delete.
     * @example
     * // Delete a few Revisions
     * const { count } = await prisma.revision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionDeleteManyArgs>(args?: SelectSubset<T, RevisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revisions
     * const revision = await prisma.revision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionUpdateManyArgs>(args: SelectSubset<T, RevisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Revision.
     * @param {RevisionUpsertArgs} args - Arguments to update or create a Revision.
     * @example
     * // Update or create a Revision
     * const revision = await prisma.revision.upsert({
     *   create: {
     *     // ... data to create a Revision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revision we want to update
     *   }
     * })
     */
    upsert<T extends RevisionUpsertArgs>(args: SelectSubset<T, RevisionUpsertArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revisions that matches the filter.
     * @param {RevisionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const revision = await prisma.revision.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RevisionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Revision.
     * @param {RevisionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const revision = await prisma.revision.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RevisionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionCountArgs} args - Arguments to filter Revisions to count.
     * @example
     * // Count the number of Revisions
     * const count = await prisma.revision.count({
     *   where: {
     *     // ... the filter for the Revisions we want to count
     *   }
     * })
    **/
    count<T extends RevisionCountArgs>(
      args?: Subset<T, RevisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevisionAggregateArgs>(args: Subset<T, RevisionAggregateArgs>): Prisma.PrismaPromise<GetRevisionAggregateType<T>>

    /**
     * Group by Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionGroupByArgs['orderBy'] }
        : { orderBy?: RevisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Revision model
   */
  readonly fields: RevisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Revision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends Revision$agentArgs<ExtArgs> = {}>(args?: Subset<T, Revision$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Revision model
   */
  interface RevisionFieldRefs {
    readonly id: FieldRef<"Revision", 'String'>
    readonly image: FieldRef<"Revision", 'String'>
    readonly additional_info: FieldRef<"Revision", 'String'>
    readonly items: FieldRef<"Revision", 'Json'>
    readonly agent_id: FieldRef<"Revision", 'String'>
    readonly created_at: FieldRef<"Revision", 'DateTime'>
    readonly updated_at: FieldRef<"Revision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Revision findUnique
   */
  export type RevisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findUniqueOrThrow
   */
  export type RevisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findFirst
   */
  export type RevisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findFirstOrThrow
   */
  export type RevisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findMany
   */
  export type RevisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revisions to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision create
   */
  export type RevisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Revision.
     */
    data: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
  }

  /**
   * Revision createMany
   */
  export type RevisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Revisions.
     */
    data: RevisionCreateManyInput | RevisionCreateManyInput[]
  }

  /**
   * Revision update
   */
  export type RevisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Revision.
     */
    data: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
    /**
     * Choose, which Revision to update.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision updateMany
   */
  export type RevisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Revisions.
     */
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyInput>
    /**
     * Filter which Revisions to update
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to update.
     */
    limit?: number
  }

  /**
   * Revision upsert
   */
  export type RevisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Revision to update in case it exists.
     */
    where: RevisionWhereUniqueInput
    /**
     * In case the Revision found by the `where` argument doesn't exist, create a new Revision with this data.
     */
    create: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
    /**
     * In case the Revision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
  }

  /**
   * Revision delete
   */
  export type RevisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter which Revision to delete.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision deleteMany
   */
  export type RevisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revisions to delete
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to delete.
     */
    limit?: number
  }

  /**
   * Revision findRaw
   */
  export type RevisionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Revision aggregateRaw
   */
  export type RevisionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Revision.agent
   */
  export type Revision$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Revision without action
   */
  export type RevisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
  }


  /**
   * Model Terminal
   */

  export type AggregateTerminal = {
    _count: TerminalCountAggregateOutputType | null
    _min: TerminalMinAggregateOutputType | null
    _max: TerminalMaxAggregateOutputType | null
  }

  export type TerminalMinAggregateOutputType = {
    id: string | null
    id_terminal: string | null
    serial: string | null
    sim_card: string | null
    created_at: Date | null
    agent_id: string | null
  }

  export type TerminalMaxAggregateOutputType = {
    id: string | null
    id_terminal: string | null
    serial: string | null
    sim_card: string | null
    created_at: Date | null
    agent_id: string | null
  }

  export type TerminalCountAggregateOutputType = {
    id: number
    id_terminal: number
    serial: number
    sim_card: number
    created_at: number
    agent_id: number
    _all: number
  }


  export type TerminalMinAggregateInputType = {
    id?: true
    id_terminal?: true
    serial?: true
    sim_card?: true
    created_at?: true
    agent_id?: true
  }

  export type TerminalMaxAggregateInputType = {
    id?: true
    id_terminal?: true
    serial?: true
    sim_card?: true
    created_at?: true
    agent_id?: true
  }

  export type TerminalCountAggregateInputType = {
    id?: true
    id_terminal?: true
    serial?: true
    sim_card?: true
    created_at?: true
    agent_id?: true
    _all?: true
  }

  export type TerminalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terminal to aggregate.
     */
    where?: TerminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terminals to fetch.
     */
    orderBy?: TerminalOrderByWithRelationInput | TerminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terminals
    **/
    _count?: true | TerminalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerminalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerminalMaxAggregateInputType
  }

  export type GetTerminalAggregateType<T extends TerminalAggregateArgs> = {
        [P in keyof T & keyof AggregateTerminal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerminal[P]>
      : GetScalarType<T[P], AggregateTerminal[P]>
  }




  export type TerminalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalWhereInput
    orderBy?: TerminalOrderByWithAggregationInput | TerminalOrderByWithAggregationInput[]
    by: TerminalScalarFieldEnum[] | TerminalScalarFieldEnum
    having?: TerminalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerminalCountAggregateInputType | true
    _min?: TerminalMinAggregateInputType
    _max?: TerminalMaxAggregateInputType
  }

  export type TerminalGroupByOutputType = {
    id: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at: Date
    agent_id: string | null
    _count: TerminalCountAggregateOutputType | null
    _min: TerminalMinAggregateOutputType | null
    _max: TerminalMaxAggregateOutputType | null
  }

  type GetTerminalGroupByPayload<T extends TerminalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerminalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerminalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerminalGroupByOutputType[P]>
            : GetScalarType<T[P], TerminalGroupByOutputType[P]>
        }
      >
    >


  export type TerminalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_terminal?: boolean
    serial?: boolean
    sim_card?: boolean
    created_at?: boolean
    agent_id?: boolean
    agent?: boolean | Terminal$agentArgs<ExtArgs>
  }, ExtArgs["result"]["terminal"]>



  export type TerminalSelectScalar = {
    id?: boolean
    id_terminal?: boolean
    serial?: boolean
    sim_card?: boolean
    created_at?: boolean
    agent_id?: boolean
  }

  export type TerminalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_terminal" | "serial" | "sim_card" | "created_at" | "agent_id", ExtArgs["result"]["terminal"]>
  export type TerminalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Terminal$agentArgs<ExtArgs>
  }

  export type $TerminalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Terminal"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_terminal: string
      serial: string
      sim_card: string
      created_at: Date
      agent_id: string | null
    }, ExtArgs["result"]["terminal"]>
    composites: {}
  }

  type TerminalGetPayload<S extends boolean | null | undefined | TerminalDefaultArgs> = $Result.GetResult<Prisma.$TerminalPayload, S>

  type TerminalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerminalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerminalCountAggregateInputType | true
    }

  export interface TerminalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Terminal'], meta: { name: 'Terminal' } }
    /**
     * Find zero or one Terminal that matches the filter.
     * @param {TerminalFindUniqueArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerminalFindUniqueArgs>(args: SelectSubset<T, TerminalFindUniqueArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Terminal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerminalFindUniqueOrThrowArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerminalFindUniqueOrThrowArgs>(args: SelectSubset<T, TerminalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terminal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalFindFirstArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerminalFindFirstArgs>(args?: SelectSubset<T, TerminalFindFirstArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terminal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalFindFirstOrThrowArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerminalFindFirstOrThrowArgs>(args?: SelectSubset<T, TerminalFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terminals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terminals
     * const terminals = await prisma.terminal.findMany()
     * 
     * // Get first 10 Terminals
     * const terminals = await prisma.terminal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terminalWithIdOnly = await prisma.terminal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TerminalFindManyArgs>(args?: SelectSubset<T, TerminalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Terminal.
     * @param {TerminalCreateArgs} args - Arguments to create a Terminal.
     * @example
     * // Create one Terminal
     * const Terminal = await prisma.terminal.create({
     *   data: {
     *     // ... data to create a Terminal
     *   }
     * })
     * 
     */
    create<T extends TerminalCreateArgs>(args: SelectSubset<T, TerminalCreateArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terminals.
     * @param {TerminalCreateManyArgs} args - Arguments to create many Terminals.
     * @example
     * // Create many Terminals
     * const terminal = await prisma.terminal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerminalCreateManyArgs>(args?: SelectSubset<T, TerminalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Terminal.
     * @param {TerminalDeleteArgs} args - Arguments to delete one Terminal.
     * @example
     * // Delete one Terminal
     * const Terminal = await prisma.terminal.delete({
     *   where: {
     *     // ... filter to delete one Terminal
     *   }
     * })
     * 
     */
    delete<T extends TerminalDeleteArgs>(args: SelectSubset<T, TerminalDeleteArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Terminal.
     * @param {TerminalUpdateArgs} args - Arguments to update one Terminal.
     * @example
     * // Update one Terminal
     * const terminal = await prisma.terminal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerminalUpdateArgs>(args: SelectSubset<T, TerminalUpdateArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terminals.
     * @param {TerminalDeleteManyArgs} args - Arguments to filter Terminals to delete.
     * @example
     * // Delete a few Terminals
     * const { count } = await prisma.terminal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerminalDeleteManyArgs>(args?: SelectSubset<T, TerminalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terminals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terminals
     * const terminal = await prisma.terminal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerminalUpdateManyArgs>(args: SelectSubset<T, TerminalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Terminal.
     * @param {TerminalUpsertArgs} args - Arguments to update or create a Terminal.
     * @example
     * // Update or create a Terminal
     * const terminal = await prisma.terminal.upsert({
     *   create: {
     *     // ... data to create a Terminal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Terminal we want to update
     *   }
     * })
     */
    upsert<T extends TerminalUpsertArgs>(args: SelectSubset<T, TerminalUpsertArgs<ExtArgs>>): Prisma__TerminalClient<$Result.GetResult<Prisma.$TerminalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terminals that matches the filter.
     * @param {TerminalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const terminal = await prisma.terminal.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TerminalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Terminal.
     * @param {TerminalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const terminal = await prisma.terminal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TerminalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Terminals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalCountArgs} args - Arguments to filter Terminals to count.
     * @example
     * // Count the number of Terminals
     * const count = await prisma.terminal.count({
     *   where: {
     *     // ... the filter for the Terminals we want to count
     *   }
     * })
    **/
    count<T extends TerminalCountArgs>(
      args?: Subset<T, TerminalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerminalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Terminal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerminalAggregateArgs>(args: Subset<T, TerminalAggregateArgs>): Prisma.PrismaPromise<GetTerminalAggregateType<T>>

    /**
     * Group by Terminal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TerminalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerminalGroupByArgs['orderBy'] }
        : { orderBy?: TerminalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TerminalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerminalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Terminal model
   */
  readonly fields: TerminalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Terminal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerminalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends Terminal$agentArgs<ExtArgs> = {}>(args?: Subset<T, Terminal$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Terminal model
   */
  interface TerminalFieldRefs {
    readonly id: FieldRef<"Terminal", 'String'>
    readonly id_terminal: FieldRef<"Terminal", 'String'>
    readonly serial: FieldRef<"Terminal", 'String'>
    readonly sim_card: FieldRef<"Terminal", 'String'>
    readonly created_at: FieldRef<"Terminal", 'DateTime'>
    readonly agent_id: FieldRef<"Terminal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Terminal findUnique
   */
  export type TerminalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter, which Terminal to fetch.
     */
    where: TerminalWhereUniqueInput
  }

  /**
   * Terminal findUniqueOrThrow
   */
  export type TerminalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter, which Terminal to fetch.
     */
    where: TerminalWhereUniqueInput
  }

  /**
   * Terminal findFirst
   */
  export type TerminalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter, which Terminal to fetch.
     */
    where?: TerminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terminals to fetch.
     */
    orderBy?: TerminalOrderByWithRelationInput | TerminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terminals.
     */
    cursor?: TerminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terminals.
     */
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }

  /**
   * Terminal findFirstOrThrow
   */
  export type TerminalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter, which Terminal to fetch.
     */
    where?: TerminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terminals to fetch.
     */
    orderBy?: TerminalOrderByWithRelationInput | TerminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terminals.
     */
    cursor?: TerminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terminals.
     */
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }

  /**
   * Terminal findMany
   */
  export type TerminalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter, which Terminals to fetch.
     */
    where?: TerminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terminals to fetch.
     */
    orderBy?: TerminalOrderByWithRelationInput | TerminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terminals.
     */
    cursor?: TerminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terminals.
     */
    skip?: number
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }

  /**
   * Terminal create
   */
  export type TerminalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * The data needed to create a Terminal.
     */
    data: XOR<TerminalCreateInput, TerminalUncheckedCreateInput>
  }

  /**
   * Terminal createMany
   */
  export type TerminalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terminals.
     */
    data: TerminalCreateManyInput | TerminalCreateManyInput[]
  }

  /**
   * Terminal update
   */
  export type TerminalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * The data needed to update a Terminal.
     */
    data: XOR<TerminalUpdateInput, TerminalUncheckedUpdateInput>
    /**
     * Choose, which Terminal to update.
     */
    where: TerminalWhereUniqueInput
  }

  /**
   * Terminal updateMany
   */
  export type TerminalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terminals.
     */
    data: XOR<TerminalUpdateManyMutationInput, TerminalUncheckedUpdateManyInput>
    /**
     * Filter which Terminals to update
     */
    where?: TerminalWhereInput
    /**
     * Limit how many Terminals to update.
     */
    limit?: number
  }

  /**
   * Terminal upsert
   */
  export type TerminalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * The filter to search for the Terminal to update in case it exists.
     */
    where: TerminalWhereUniqueInput
    /**
     * In case the Terminal found by the `where` argument doesn't exist, create a new Terminal with this data.
     */
    create: XOR<TerminalCreateInput, TerminalUncheckedCreateInput>
    /**
     * In case the Terminal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerminalUpdateInput, TerminalUncheckedUpdateInput>
  }

  /**
   * Terminal delete
   */
  export type TerminalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
    /**
     * Filter which Terminal to delete.
     */
    where: TerminalWhereUniqueInput
  }

  /**
   * Terminal deleteMany
   */
  export type TerminalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terminals to delete
     */
    where?: TerminalWhereInput
    /**
     * Limit how many Terminals to delete.
     */
    limit?: number
  }

  /**
   * Terminal findRaw
   */
  export type TerminalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Terminal aggregateRaw
   */
  export type TerminalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Terminal.agent
   */
  export type Terminal$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Terminal without action
   */
  export type TerminalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terminal
     */
    select?: TerminalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terminal
     */
    omit?: TerminalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PosScalarFieldEnum: {
    id: 'id',
    id_reference: 'id_reference',
    province_id: 'province_id',
    city_id: 'city_id',
    area_id: 'area_id',
    zone_id: 'zone_id',
    type_id: 'type_id',
    subtype_id: 'subtype_id',
    administration_id: 'administration_id',
    agent_id: 'agent_id',
    status: 'status',
    coordinates: 'coordinates',
    licence_id: 'licence_id',
    created_at: 'created_at'
  };

  export type PosScalarFieldEnum = (typeof PosScalarFieldEnum)[keyof typeof PosScalarFieldEnum]


  export const AdministrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type AdministrationScalarFieldEnum = (typeof AdministrationScalarFieldEnum)[keyof typeof AdministrationScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    province_id: 'province_id',
    created_at: 'created_at'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city_id: 'city_id',
    created_at: 'created_at'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    zone_number: 'zone_number',
    area_id: 'area_id',
    created_at: 'created_at'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const LicenceScalarFieldEnum: {
    id: 'id',
    reference_id: 'reference_id',
    status: 'status',
    created_at: 'created_at',
    administration_id: 'administration_id'
  };

  export type LicenceScalarFieldEnum = (typeof LicenceScalarFieldEnum)[keyof typeof LicenceScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const SubtypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type_id: 'type_id',
    created_at: 'created_at'
  };

  export type SubtypeScalarFieldEnum = (typeof SubtypeScalarFieldEnum)[keyof typeof SubtypeScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    agent_id: 'agent_id',
    phone: 'phone',
    afrimoney: 'afrimoney',
    status: 'status'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const RevisionScalarFieldEnum: {
    id: 'id',
    image: 'image',
    additional_info: 'additional_info',
    items: 'items',
    agent_id: 'agent_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RevisionScalarFieldEnum = (typeof RevisionScalarFieldEnum)[keyof typeof RevisionScalarFieldEnum]


  export const TerminalScalarFieldEnum: {
    id: 'id',
    id_terminal: 'id_terminal',
    serial: 'serial',
    sim_card: 'sim_card',
    created_at: 'created_at',
    agent_id: 'agent_id'
  };

  export type TerminalScalarFieldEnum = (typeof TerminalScalarFieldEnum)[keyof typeof TerminalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PosWhereInput = {
    AND?: PosWhereInput | PosWhereInput[]
    OR?: PosWhereInput[]
    NOT?: PosWhereInput | PosWhereInput[]
    id?: StringFilter<"Pos"> | string
    id_reference?: IntFilter<"Pos"> | number
    province_id?: StringFilter<"Pos"> | string
    city_id?: StringFilter<"Pos"> | string
    area_id?: StringFilter<"Pos"> | string
    zone_id?: StringFilter<"Pos"> | string
    type_id?: StringFilter<"Pos"> | string
    subtype_id?: StringNullableFilter<"Pos"> | string | null
    administration_id?: StringNullableFilter<"Pos"> | string | null
    agent_id?: StringNullableFilter<"Pos"> | string | null
    status?: BoolFilter<"Pos"> | boolean
    coordinates?: StringNullableListFilter<"Pos">
    licence_id?: StringNullableFilter<"Pos"> | string | null
    created_at?: DateTimeFilter<"Pos"> | Date | string
    licence?: XOR<LicenceNullableScalarRelationFilter, LicenceWhereInput> | null
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    subtype?: XOR<SubtypeNullableScalarRelationFilter, SubtypeWhereInput> | null
    administration?: XOR<AdministrationNullableScalarRelationFilter, AdministrationWhereInput> | null
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }

  export type PosOrderByWithRelationInput = {
    id?: SortOrder
    id_reference?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    area_id?: SortOrder
    zone_id?: SortOrder
    type_id?: SortOrder
    subtype_id?: SortOrder
    administration_id?: SortOrder
    agent_id?: SortOrder
    status?: SortOrder
    coordinates?: SortOrder
    licence_id?: SortOrder
    created_at?: SortOrder
    licence?: LicenceOrderByWithRelationInput
    province?: ProvinceOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
    zone?: ZoneOrderByWithRelationInput
    type?: TypeOrderByWithRelationInput
    subtype?: SubtypeOrderByWithRelationInput
    administration?: AdministrationOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
  }

  export type PosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agent_id?: string
    licence_id?: string
    AND?: PosWhereInput | PosWhereInput[]
    OR?: PosWhereInput[]
    NOT?: PosWhereInput | PosWhereInput[]
    id_reference?: IntFilter<"Pos"> | number
    province_id?: StringFilter<"Pos"> | string
    city_id?: StringFilter<"Pos"> | string
    area_id?: StringFilter<"Pos"> | string
    zone_id?: StringFilter<"Pos"> | string
    type_id?: StringFilter<"Pos"> | string
    subtype_id?: StringNullableFilter<"Pos"> | string | null
    administration_id?: StringNullableFilter<"Pos"> | string | null
    status?: BoolFilter<"Pos"> | boolean
    coordinates?: StringNullableListFilter<"Pos">
    created_at?: DateTimeFilter<"Pos"> | Date | string
    licence?: XOR<LicenceNullableScalarRelationFilter, LicenceWhereInput> | null
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    subtype?: XOR<SubtypeNullableScalarRelationFilter, SubtypeWhereInput> | null
    administration?: XOR<AdministrationNullableScalarRelationFilter, AdministrationWhereInput> | null
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }, "id" | "agent_id" | "licence_id">

  export type PosOrderByWithAggregationInput = {
    id?: SortOrder
    id_reference?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    area_id?: SortOrder
    zone_id?: SortOrder
    type_id?: SortOrder
    subtype_id?: SortOrder
    administration_id?: SortOrder
    agent_id?: SortOrder
    status?: SortOrder
    coordinates?: SortOrder
    licence_id?: SortOrder
    created_at?: SortOrder
    _count?: PosCountOrderByAggregateInput
    _avg?: PosAvgOrderByAggregateInput
    _max?: PosMaxOrderByAggregateInput
    _min?: PosMinOrderByAggregateInput
    _sum?: PosSumOrderByAggregateInput
  }

  export type PosScalarWhereWithAggregatesInput = {
    AND?: PosScalarWhereWithAggregatesInput | PosScalarWhereWithAggregatesInput[]
    OR?: PosScalarWhereWithAggregatesInput[]
    NOT?: PosScalarWhereWithAggregatesInput | PosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pos"> | string
    id_reference?: IntWithAggregatesFilter<"Pos"> | number
    province_id?: StringWithAggregatesFilter<"Pos"> | string
    city_id?: StringWithAggregatesFilter<"Pos"> | string
    area_id?: StringWithAggregatesFilter<"Pos"> | string
    zone_id?: StringWithAggregatesFilter<"Pos"> | string
    type_id?: StringWithAggregatesFilter<"Pos"> | string
    subtype_id?: StringNullableWithAggregatesFilter<"Pos"> | string | null
    administration_id?: StringNullableWithAggregatesFilter<"Pos"> | string | null
    agent_id?: StringNullableWithAggregatesFilter<"Pos"> | string | null
    status?: BoolWithAggregatesFilter<"Pos"> | boolean
    coordinates?: StringNullableListFilter<"Pos">
    licence_id?: StringNullableWithAggregatesFilter<"Pos"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Pos"> | Date | string
  }

  export type AdministrationWhereInput = {
    AND?: AdministrationWhereInput | AdministrationWhereInput[]
    OR?: AdministrationWhereInput[]
    NOT?: AdministrationWhereInput | AdministrationWhereInput[]
    id?: StringFilter<"Administration"> | string
    name?: StringFilter<"Administration"> | string
    created_at?: DateTimeFilter<"Administration"> | Date | string
    licence?: XOR<LicenceNullableScalarRelationFilter, LicenceWhereInput> | null
    pos?: PosListRelationFilter
  }

  export type AdministrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    licence?: LicenceOrderByWithRelationInput
    pos?: PosOrderByRelationAggregateInput
  }

  export type AdministrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdministrationWhereInput | AdministrationWhereInput[]
    OR?: AdministrationWhereInput[]
    NOT?: AdministrationWhereInput | AdministrationWhereInput[]
    name?: StringFilter<"Administration"> | string
    created_at?: DateTimeFilter<"Administration"> | Date | string
    licence?: XOR<LicenceNullableScalarRelationFilter, LicenceWhereInput> | null
    pos?: PosListRelationFilter
  }, "id">

  export type AdministrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: AdministrationCountOrderByAggregateInput
    _max?: AdministrationMaxOrderByAggregateInput
    _min?: AdministrationMinOrderByAggregateInput
  }

  export type AdministrationScalarWhereWithAggregatesInput = {
    AND?: AdministrationScalarWhereWithAggregatesInput | AdministrationScalarWhereWithAggregatesInput[]
    OR?: AdministrationScalarWhereWithAggregatesInput[]
    NOT?: AdministrationScalarWhereWithAggregatesInput | AdministrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administration"> | string
    name?: StringWithAggregatesFilter<"Administration"> | string
    created_at?: DateTimeWithAggregatesFilter<"Administration"> | Date | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: StringFilter<"Province"> | string
    name?: StringFilter<"Province"> | string
    created_at?: DateTimeFilter<"Province"> | Date | string
    city?: CityListRelationFilter
    Pos?: PosListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    city?: CityOrderByRelationAggregateInput
    Pos?: PosOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    created_at?: DateTimeFilter<"Province"> | Date | string
    city?: CityListRelationFilter
    Pos?: PosListRelationFilter
  }, "id" | "name">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Province"> | string
    name?: StringWithAggregatesFilter<"Province"> | string
    created_at?: DateTimeWithAggregatesFilter<"Province"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    province_id?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    Province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    Pos?: PosListRelationFilter
    area?: AreaListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    created_at?: SortOrder
    Province?: ProvinceOrderByWithRelationInput
    Pos?: PosOrderByRelationAggregateInput
    area?: AreaOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    province_id?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    created_at?: DateTimeFilter<"City"> | Date | string
    Province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    Pos?: PosListRelationFilter
    area?: AreaListRelationFilter
  }, "id" | "name" | "province_id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    created_at?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    province_id?: StringWithAggregatesFilter<"City"> | string
    created_at?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    city_id?: StringNullableFilter<"Area"> | string | null
    created_at?: DateTimeFilter<"Area"> | Date | string
    zone?: ZoneListRelationFilter
    Pos?: PosListRelationFilter
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    zone?: ZoneOrderByRelationAggregateInput
    Pos?: PosOrderByRelationAggregateInput
    city?: CityOrderByWithRelationInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    city_id?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    created_at?: DateTimeFilter<"Area"> | Date | string
    zone?: ZoneListRelationFilter
    Pos?: PosListRelationFilter
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }, "id" | "name" | "city_id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    city_id?: StringNullableWithAggregatesFilter<"Area"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: StringFilter<"Zone"> | string
    zone_number?: IntFilter<"Zone"> | number
    area_id?: StringNullableFilter<"Zone"> | string | null
    created_at?: DateTimeFilter<"Zone"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    Pos?: PosListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    zone_number?: SortOrder
    area_id?: SortOrder
    created_at?: SortOrder
    area?: AreaOrderByWithRelationInput
    Pos?: PosOrderByRelationAggregateInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zone_number?: number
    area_id?: string
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    created_at?: DateTimeFilter<"Zone"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    Pos?: PosListRelationFilter
  }, "id" | "zone_number" | "area_id">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    zone_number?: SortOrder
    area_id?: SortOrder
    created_at?: SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _avg?: ZoneAvgOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
    _sum?: ZoneSumOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zone"> | string
    zone_number?: IntWithAggregatesFilter<"Zone"> | number
    area_id?: StringNullableWithAggregatesFilter<"Zone"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Zone"> | Date | string
  }

  export type LicenceWhereInput = {
    AND?: LicenceWhereInput | LicenceWhereInput[]
    OR?: LicenceWhereInput[]
    NOT?: LicenceWhereInput | LicenceWhereInput[]
    id?: StringFilter<"Licence"> | string
    reference_id?: IntFilter<"Licence"> | number
    status?: BoolFilter<"Licence"> | boolean
    created_at?: DateTimeFilter<"Licence"> | Date | string
    administration_id?: StringFilter<"Licence"> | string
    pos?: XOR<PosNullableScalarRelationFilter, PosWhereInput> | null
    administration?: XOR<AdministrationScalarRelationFilter, AdministrationWhereInput>
  }

  export type LicenceOrderByWithRelationInput = {
    id?: SortOrder
    reference_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    administration_id?: SortOrder
    pos?: PosOrderByWithRelationInput
    administration?: AdministrationOrderByWithRelationInput
  }

  export type LicenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference_id?: number
    administration_id?: string
    AND?: LicenceWhereInput | LicenceWhereInput[]
    OR?: LicenceWhereInput[]
    NOT?: LicenceWhereInput | LicenceWhereInput[]
    status?: BoolFilter<"Licence"> | boolean
    created_at?: DateTimeFilter<"Licence"> | Date | string
    pos?: XOR<PosNullableScalarRelationFilter, PosWhereInput> | null
    administration?: XOR<AdministrationScalarRelationFilter, AdministrationWhereInput>
  }, "id" | "reference_id" | "administration_id">

  export type LicenceOrderByWithAggregationInput = {
    id?: SortOrder
    reference_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    administration_id?: SortOrder
    _count?: LicenceCountOrderByAggregateInput
    _avg?: LicenceAvgOrderByAggregateInput
    _max?: LicenceMaxOrderByAggregateInput
    _min?: LicenceMinOrderByAggregateInput
    _sum?: LicenceSumOrderByAggregateInput
  }

  export type LicenceScalarWhereWithAggregatesInput = {
    AND?: LicenceScalarWhereWithAggregatesInput | LicenceScalarWhereWithAggregatesInput[]
    OR?: LicenceScalarWhereWithAggregatesInput[]
    NOT?: LicenceScalarWhereWithAggregatesInput | LicenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Licence"> | string
    reference_id?: IntWithAggregatesFilter<"Licence"> | number
    status?: BoolWithAggregatesFilter<"Licence"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Licence"> | Date | string
    administration_id?: StringWithAggregatesFilter<"Licence"> | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: StringFilter<"Type"> | string
    name?: StringFilter<"Type"> | string
    created_at?: DateTimeFilter<"Type"> | Date | string
    subtype?: SubtypeListRelationFilter
    Pos?: PosListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    subtype?: SubtypeOrderByRelationAggregateInput
    Pos?: PosOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    name?: StringFilter<"Type"> | string
    created_at?: DateTimeFilter<"Type"> | Date | string
    subtype?: SubtypeListRelationFilter
    Pos?: PosListRelationFilter
  }, "id">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Type"> | string
    name?: StringWithAggregatesFilter<"Type"> | string
    created_at?: DateTimeWithAggregatesFilter<"Type"> | Date | string
  }

  export type SubtypeWhereInput = {
    AND?: SubtypeWhereInput | SubtypeWhereInput[]
    OR?: SubtypeWhereInput[]
    NOT?: SubtypeWhereInput | SubtypeWhereInput[]
    id?: StringFilter<"Subtype"> | string
    name?: StringFilter<"Subtype"> | string
    type_id?: StringFilter<"Subtype"> | string
    created_at?: DateTimeFilter<"Subtype"> | Date | string
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    Pos?: PosListRelationFilter
  }

  export type SubtypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
    type?: TypeOrderByWithRelationInput
    Pos?: PosOrderByRelationAggregateInput
  }

  export type SubtypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type_id?: string
    AND?: SubtypeWhereInput | SubtypeWhereInput[]
    OR?: SubtypeWhereInput[]
    NOT?: SubtypeWhereInput | SubtypeWhereInput[]
    name?: StringFilter<"Subtype"> | string
    created_at?: DateTimeFilter<"Subtype"> | Date | string
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    Pos?: PosListRelationFilter
  }, "id" | "type_id">

  export type SubtypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
    _count?: SubtypeCountOrderByAggregateInput
    _max?: SubtypeMaxOrderByAggregateInput
    _min?: SubtypeMinOrderByAggregateInput
  }

  export type SubtypeScalarWhereWithAggregatesInput = {
    AND?: SubtypeScalarWhereWithAggregatesInput | SubtypeScalarWhereWithAggregatesInput[]
    OR?: SubtypeScalarWhereWithAggregatesInput[]
    NOT?: SubtypeScalarWhereWithAggregatesInput | SubtypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtype"> | string
    name?: StringWithAggregatesFilter<"Subtype"> | string
    type_id?: StringWithAggregatesFilter<"Subtype"> | string
    created_at?: DateTimeWithAggregatesFilter<"Subtype"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    first_name?: StringFilter<"Agent"> | string
    last_name?: StringFilter<"Agent"> | string
    agent_id?: StringFilter<"Agent"> | string
    phone?: StringFilter<"Agent"> | string
    afrimoney?: StringNullableFilter<"Agent"> | string | null
    status?: StringNullableFilter<"Agent"> | string | null
    pos?: XOR<PosNullableScalarRelationFilter, PosWhereInput> | null
    terminal?: XOR<TerminalNullableScalarRelationFilter, TerminalWhereInput> | null
    revision?: XOR<RevisionNullableScalarRelationFilter, RevisionWhereInput> | null
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    agent_id?: SortOrder
    phone?: SortOrder
    afrimoney?: SortOrder
    status?: SortOrder
    pos?: PosOrderByWithRelationInput
    terminal?: TerminalOrderByWithRelationInput
    revision?: RevisionOrderByWithRelationInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    first_name?: StringFilter<"Agent"> | string
    last_name?: StringFilter<"Agent"> | string
    agent_id?: StringFilter<"Agent"> | string
    phone?: StringFilter<"Agent"> | string
    afrimoney?: StringNullableFilter<"Agent"> | string | null
    status?: StringNullableFilter<"Agent"> | string | null
    pos?: XOR<PosNullableScalarRelationFilter, PosWhereInput> | null
    terminal?: XOR<TerminalNullableScalarRelationFilter, TerminalWhereInput> | null
    revision?: XOR<RevisionNullableScalarRelationFilter, RevisionWhereInput> | null
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    agent_id?: SortOrder
    phone?: SortOrder
    afrimoney?: SortOrder
    status?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    first_name?: StringWithAggregatesFilter<"Agent"> | string
    last_name?: StringWithAggregatesFilter<"Agent"> | string
    agent_id?: StringWithAggregatesFilter<"Agent"> | string
    phone?: StringWithAggregatesFilter<"Agent"> | string
    afrimoney?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    status?: StringNullableWithAggregatesFilter<"Agent"> | string | null
  }

  export type RevisionWhereInput = {
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    id?: StringFilter<"Revision"> | string
    image?: StringFilter<"Revision"> | string
    additional_info?: StringNullableFilter<"Revision"> | string | null
    items?: JsonFilter<"Revision">
    agent_id?: StringFilter<"Revision"> | string
    created_at?: DateTimeFilter<"Revision"> | Date | string
    updated_at?: DateTimeFilter<"Revision"> | Date | string
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }

  export type RevisionOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    additional_info?: SortOrder
    items?: SortOrder
    agent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type RevisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agent_id?: string
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    image?: StringFilter<"Revision"> | string
    additional_info?: StringNullableFilter<"Revision"> | string | null
    items?: JsonFilter<"Revision">
    created_at?: DateTimeFilter<"Revision"> | Date | string
    updated_at?: DateTimeFilter<"Revision"> | Date | string
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }, "id" | "agent_id">

  export type RevisionOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    additional_info?: SortOrder
    items?: SortOrder
    agent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RevisionCountOrderByAggregateInput
    _max?: RevisionMaxOrderByAggregateInput
    _min?: RevisionMinOrderByAggregateInput
  }

  export type RevisionScalarWhereWithAggregatesInput = {
    AND?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    OR?: RevisionScalarWhereWithAggregatesInput[]
    NOT?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Revision"> | string
    image?: StringWithAggregatesFilter<"Revision"> | string
    additional_info?: StringNullableWithAggregatesFilter<"Revision"> | string | null
    items?: JsonWithAggregatesFilter<"Revision">
    agent_id?: StringWithAggregatesFilter<"Revision"> | string
    created_at?: DateTimeWithAggregatesFilter<"Revision"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Revision"> | Date | string
  }

  export type TerminalWhereInput = {
    AND?: TerminalWhereInput | TerminalWhereInput[]
    OR?: TerminalWhereInput[]
    NOT?: TerminalWhereInput | TerminalWhereInput[]
    id?: StringFilter<"Terminal"> | string
    id_terminal?: StringFilter<"Terminal"> | string
    serial?: StringFilter<"Terminal"> | string
    sim_card?: StringFilter<"Terminal"> | string
    created_at?: DateTimeFilter<"Terminal"> | Date | string
    agent_id?: StringNullableFilter<"Terminal"> | string | null
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }

  export type TerminalOrderByWithRelationInput = {
    id?: SortOrder
    id_terminal?: SortOrder
    serial?: SortOrder
    sim_card?: SortOrder
    created_at?: SortOrder
    agent_id?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type TerminalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_terminal?: string
    agent_id?: string
    AND?: TerminalWhereInput | TerminalWhereInput[]
    OR?: TerminalWhereInput[]
    NOT?: TerminalWhereInput | TerminalWhereInput[]
    serial?: StringFilter<"Terminal"> | string
    sim_card?: StringFilter<"Terminal"> | string
    created_at?: DateTimeFilter<"Terminal"> | Date | string
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }, "id" | "id_terminal" | "agent_id">

  export type TerminalOrderByWithAggregationInput = {
    id?: SortOrder
    id_terminal?: SortOrder
    serial?: SortOrder
    sim_card?: SortOrder
    created_at?: SortOrder
    agent_id?: SortOrder
    _count?: TerminalCountOrderByAggregateInput
    _max?: TerminalMaxOrderByAggregateInput
    _min?: TerminalMinOrderByAggregateInput
  }

  export type TerminalScalarWhereWithAggregatesInput = {
    AND?: TerminalScalarWhereWithAggregatesInput | TerminalScalarWhereWithAggregatesInput[]
    OR?: TerminalScalarWhereWithAggregatesInput[]
    NOT?: TerminalScalarWhereWithAggregatesInput | TerminalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Terminal"> | string
    id_terminal?: StringWithAggregatesFilter<"Terminal"> | string
    serial?: StringWithAggregatesFilter<"Terminal"> | string
    sim_card?: StringWithAggregatesFilter<"Terminal"> | string
    created_at?: DateTimeWithAggregatesFilter<"Terminal"> | Date | string
    agent_id?: StringNullableWithAggregatesFilter<"Terminal"> | string | null
  }

  export type PosCreateInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosUpdateInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosCreateManyInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosUpdateManyMutationInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutAdministrationInput
    pos?: PosCreateNestedManyWithoutAdministrationInput
  }

  export type AdministrationUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    licence?: LicenceUncheckedCreateNestedOneWithoutAdministrationInput
    pos?: PosUncheckedCreateNestedManyWithoutAdministrationInput
  }

  export type AdministrationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutAdministrationNestedInput
    pos?: PosUpdateManyWithoutAdministrationNestedInput
  }

  export type AdministrationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUncheckedUpdateOneWithoutAdministrationNestedInput
    pos?: PosUncheckedUpdateManyWithoutAdministrationNestedInput
  }

  export type AdministrationCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type AdministrationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    city?: CityCreateNestedManyWithoutProvinceInput
    Pos?: PosCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    city?: CityUncheckedCreateNestedManyWithoutProvinceInput
    Pos?: PosUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateManyWithoutProvinceNestedInput
    Pos?: PosUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUncheckedUpdateManyWithoutProvinceNestedInput
    Pos?: PosUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type ProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    Province: ProvinceCreateNestedOneWithoutCityInput
    Pos?: PosCreateNestedManyWithoutCityInput
    area?: AreaCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    province_id: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutCityInput
    area?: AreaUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Province?: ProvinceUpdateOneRequiredWithoutCityNestedInput
    Pos?: PosUpdateManyWithoutCityNestedInput
    area?: AreaUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    province_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutCityNestedInput
    area?: AreaUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    province_id: string
    created_at?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    province_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    zone?: ZoneCreateNestedManyWithoutAreaInput
    Pos?: PosCreateNestedManyWithoutAreaInput
    city?: CityCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    name: string
    city_id?: string | null
    created_at?: Date | string
    zone?: ZoneUncheckedCreateNestedManyWithoutAreaInput
    Pos?: PosUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateManyWithoutAreaNestedInput
    Pos?: PosUpdateManyWithoutAreaNestedInput
    city?: CityUpdateOneWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUncheckedUpdateManyWithoutAreaNestedInput
    Pos?: PosUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    name: string
    city_id?: string | null
    created_at?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    city_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneCreateInput = {
    id?: string
    zone_number: number
    created_at?: Date | string
    area?: AreaCreateNestedOneWithoutZoneInput
    Pos?: PosCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: string
    zone_number: number
    area_id?: string | null
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUpdateInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutZoneNestedInput
    Pos?: PosUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: string
    zone_number: number
    area_id?: string | null
    created_at?: Date | string
  }

  export type ZoneUpdateManyMutationInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneUncheckedUpdateManyInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenceCreateInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    pos?: PosCreateNestedOneWithoutLicenceInput
    administration: AdministrationCreateNestedOneWithoutLicenceInput
  }

  export type LicenceUncheckedCreateInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    administration_id: string
    pos?: PosUncheckedCreateNestedOneWithoutLicenceInput
  }

  export type LicenceUpdateInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pos?: PosUpdateOneWithoutLicenceNestedInput
    administration?: AdministrationUpdateOneRequiredWithoutLicenceNestedInput
  }

  export type LicenceUncheckedUpdateInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    administration_id?: StringFieldUpdateOperationsInput | string
    pos?: PosUncheckedUpdateOneWithoutLicenceNestedInput
  }

  export type LicenceCreateManyInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    administration_id: string
  }

  export type LicenceUpdateManyMutationInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenceUncheckedUpdateManyInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    administration_id?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    subtype?: SubtypeCreateNestedManyWithoutTypeInput
    Pos?: PosCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    subtype?: SubtypeUncheckedCreateNestedManyWithoutTypeInput
    Pos?: PosUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: SubtypeUpdateManyWithoutTypeNestedInput
    Pos?: PosUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: SubtypeUncheckedUpdateManyWithoutTypeNestedInput
    Pos?: PosUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtypeCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    type: TypeCreateNestedOneWithoutSubtypeInput
    Pos?: PosCreateNestedManyWithoutSubtypeInput
  }

  export type SubtypeUncheckedCreateInput = {
    id?: string
    name: string
    type_id: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutSubtypeInput
  }

  export type SubtypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUpdateOneRequiredWithoutSubtypeNestedInput
    Pos?: PosUpdateManyWithoutSubtypeNestedInput
  }

  export type SubtypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutSubtypeNestedInput
  }

  export type SubtypeCreateManyInput = {
    id?: string
    name: string
    type_id: string
    created_at?: Date | string
  }

  export type SubtypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosCreateNestedOneWithoutAgentInput
    terminal?: TerminalCreateNestedOneWithoutAgentInput
    revision?: RevisionCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosUncheckedCreateNestedOneWithoutAgentInput
    terminal?: TerminalUncheckedCreateNestedOneWithoutAgentInput
    revision?: RevisionUncheckedCreateNestedOneWithoutAgentInput
  }

  export type AgentUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUpdateOneWithoutAgentNestedInput
    terminal?: TerminalUpdateOneWithoutAgentNestedInput
    revision?: RevisionUpdateOneWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUncheckedUpdateOneWithoutAgentNestedInput
    terminal?: TerminalUncheckedUpdateOneWithoutAgentNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevisionCreateInput = {
    id?: string
    image: string
    additional_info?: string | null
    items: InputJsonValue
    created_at?: Date | string
    updated_at: Date | string
    agent?: AgentCreateNestedOneWithoutRevisionInput
  }

  export type RevisionUncheckedCreateInput = {
    id?: string
    image: string
    additional_info?: string | null
    items: InputJsonValue
    agent_id: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type RevisionUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneWithoutRevisionNestedInput
  }

  export type RevisionUncheckedUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    agent_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionCreateManyInput = {
    id?: string
    image: string
    additional_info?: string | null
    items: InputJsonValue
    agent_id: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type RevisionUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUncheckedUpdateManyInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    agent_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalCreateInput = {
    id?: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at?: Date | string
    agent?: AgentCreateNestedOneWithoutTerminalInput
  }

  export type TerminalUncheckedCreateInput = {
    id?: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at?: Date | string
    agent_id?: string | null
  }

  export type TerminalUpdateInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneWithoutTerminalNestedInput
  }

  export type TerminalUncheckedUpdateInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TerminalCreateManyInput = {
    id?: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at?: Date | string
    agent_id?: string | null
  }

  export type TerminalUpdateManyMutationInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalUncheckedUpdateManyInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LicenceNullableScalarRelationFilter = {
    is?: LicenceWhereInput | null
    isNot?: LicenceWhereInput | null
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type ZoneScalarRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type SubtypeNullableScalarRelationFilter = {
    is?: SubtypeWhereInput | null
    isNot?: SubtypeWhereInput | null
  }

  export type AdministrationNullableScalarRelationFilter = {
    is?: AdministrationWhereInput | null
    isNot?: AdministrationWhereInput | null
  }

  export type AgentNullableScalarRelationFilter = {
    is?: AgentWhereInput | null
    isNot?: AgentWhereInput | null
  }

  export type PosCountOrderByAggregateInput = {
    id?: SortOrder
    id_reference?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    area_id?: SortOrder
    zone_id?: SortOrder
    type_id?: SortOrder
    subtype_id?: SortOrder
    administration_id?: SortOrder
    agent_id?: SortOrder
    status?: SortOrder
    coordinates?: SortOrder
    licence_id?: SortOrder
    created_at?: SortOrder
  }

  export type PosAvgOrderByAggregateInput = {
    id_reference?: SortOrder
  }

  export type PosMaxOrderByAggregateInput = {
    id?: SortOrder
    id_reference?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    area_id?: SortOrder
    zone_id?: SortOrder
    type_id?: SortOrder
    subtype_id?: SortOrder
    administration_id?: SortOrder
    agent_id?: SortOrder
    status?: SortOrder
    licence_id?: SortOrder
    created_at?: SortOrder
  }

  export type PosMinOrderByAggregateInput = {
    id?: SortOrder
    id_reference?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    area_id?: SortOrder
    zone_id?: SortOrder
    type_id?: SortOrder
    subtype_id?: SortOrder
    administration_id?: SortOrder
    agent_id?: SortOrder
    status?: SortOrder
    licence_id?: SortOrder
    created_at?: SortOrder
  }

  export type PosSumOrderByAggregateInput = {
    id_reference?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PosListRelationFilter = {
    every?: PosWhereInput
    some?: PosWhereInput
    none?: PosWhereInput
  }

  export type PosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdministrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type AdministrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type AdministrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    created_at?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    created_at?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    created_at?: SortOrder
  }

  export type ZoneListRelationFilter = {
    every?: ZoneWhereInput
    some?: ZoneWhereInput
    none?: ZoneWhereInput
  }

  export type CityNullableScalarRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type ZoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
  }

  export type AreaNullableScalarRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    zone_number?: SortOrder
    area_id?: SortOrder
    created_at?: SortOrder
  }

  export type ZoneAvgOrderByAggregateInput = {
    zone_number?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    zone_number?: SortOrder
    area_id?: SortOrder
    created_at?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    zone_number?: SortOrder
    area_id?: SortOrder
    created_at?: SortOrder
  }

  export type ZoneSumOrderByAggregateInput = {
    zone_number?: SortOrder
  }

  export type PosNullableScalarRelationFilter = {
    is?: PosWhereInput | null
    isNot?: PosWhereInput | null
  }

  export type AdministrationScalarRelationFilter = {
    is?: AdministrationWhereInput
    isNot?: AdministrationWhereInput
  }

  export type LicenceCountOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    administration_id?: SortOrder
  }

  export type LicenceAvgOrderByAggregateInput = {
    reference_id?: SortOrder
  }

  export type LicenceMaxOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    administration_id?: SortOrder
  }

  export type LicenceMinOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    administration_id?: SortOrder
  }

  export type LicenceSumOrderByAggregateInput = {
    reference_id?: SortOrder
  }

  export type SubtypeListRelationFilter = {
    every?: SubtypeWhereInput
    some?: SubtypeWhereInput
    none?: SubtypeWhereInput
  }

  export type SubtypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type SubtypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type SubtypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type SubtypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type TerminalNullableScalarRelationFilter = {
    is?: TerminalWhereInput | null
    isNot?: TerminalWhereInput | null
  }

  export type RevisionNullableScalarRelationFilter = {
    is?: RevisionWhereInput | null
    isNot?: RevisionWhereInput | null
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    agent_id?: SortOrder
    phone?: SortOrder
    afrimoney?: SortOrder
    status?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    agent_id?: SortOrder
    phone?: SortOrder
    afrimoney?: SortOrder
    status?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    agent_id?: SortOrder
    phone?: SortOrder
    afrimoney?: SortOrder
    status?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type RevisionCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    additional_info?: SortOrder
    items?: SortOrder
    agent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RevisionMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    additional_info?: SortOrder
    agent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RevisionMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    additional_info?: SortOrder
    agent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TerminalCountOrderByAggregateInput = {
    id?: SortOrder
    id_terminal?: SortOrder
    serial?: SortOrder
    sim_card?: SortOrder
    created_at?: SortOrder
    agent_id?: SortOrder
  }

  export type TerminalMaxOrderByAggregateInput = {
    id?: SortOrder
    id_terminal?: SortOrder
    serial?: SortOrder
    sim_card?: SortOrder
    created_at?: SortOrder
    agent_id?: SortOrder
  }

  export type TerminalMinOrderByAggregateInput = {
    id?: SortOrder
    id_terminal?: SortOrder
    serial?: SortOrder
    sim_card?: SortOrder
    created_at?: SortOrder
    agent_id?: SortOrder
  }

  export type PosCreatecoordinatesInput = {
    set: string[]
  }

  export type LicenceCreateNestedOneWithoutPosInput = {
    create?: XOR<LicenceCreateWithoutPosInput, LicenceUncheckedCreateWithoutPosInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutPosInput
    connect?: LicenceWhereUniqueInput
  }

  export type ProvinceCreateNestedOneWithoutPosInput = {
    create?: XOR<ProvinceCreateWithoutPosInput, ProvinceUncheckedCreateWithoutPosInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutPosInput
    connect?: ProvinceWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutPosInput = {
    create?: XOR<CityCreateWithoutPosInput, CityUncheckedCreateWithoutPosInput>
    connectOrCreate?: CityCreateOrConnectWithoutPosInput
    connect?: CityWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutPosInput = {
    create?: XOR<AreaCreateWithoutPosInput, AreaUncheckedCreateWithoutPosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPosInput
    connect?: AreaWhereUniqueInput
  }

  export type ZoneCreateNestedOneWithoutPosInput = {
    create?: XOR<ZoneCreateWithoutPosInput, ZoneUncheckedCreateWithoutPosInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutPosInput
    connect?: ZoneWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutPosInput = {
    create?: XOR<TypeCreateWithoutPosInput, TypeUncheckedCreateWithoutPosInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPosInput
    connect?: TypeWhereUniqueInput
  }

  export type SubtypeCreateNestedOneWithoutPosInput = {
    create?: XOR<SubtypeCreateWithoutPosInput, SubtypeUncheckedCreateWithoutPosInput>
    connectOrCreate?: SubtypeCreateOrConnectWithoutPosInput
    connect?: SubtypeWhereUniqueInput
  }

  export type AdministrationCreateNestedOneWithoutPosInput = {
    create?: XOR<AdministrationCreateWithoutPosInput, AdministrationUncheckedCreateWithoutPosInput>
    connectOrCreate?: AdministrationCreateOrConnectWithoutPosInput
    connect?: AdministrationWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutPosInput = {
    create?: XOR<AgentCreateWithoutPosInput, AgentUncheckedCreateWithoutPosInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPosInput
    connect?: AgentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PosUpdatecoordinatesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LicenceUpdateOneWithoutPosNestedInput = {
    create?: XOR<LicenceCreateWithoutPosInput, LicenceUncheckedCreateWithoutPosInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutPosInput
    upsert?: LicenceUpsertWithoutPosInput
    disconnect?: boolean
    delete?: LicenceWhereInput | boolean
    connect?: LicenceWhereUniqueInput
    update?: XOR<XOR<LicenceUpdateToOneWithWhereWithoutPosInput, LicenceUpdateWithoutPosInput>, LicenceUncheckedUpdateWithoutPosInput>
  }

  export type ProvinceUpdateOneRequiredWithoutPosNestedInput = {
    create?: XOR<ProvinceCreateWithoutPosInput, ProvinceUncheckedCreateWithoutPosInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutPosInput
    upsert?: ProvinceUpsertWithoutPosInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutPosInput, ProvinceUpdateWithoutPosInput>, ProvinceUncheckedUpdateWithoutPosInput>
  }

  export type CityUpdateOneRequiredWithoutPosNestedInput = {
    create?: XOR<CityCreateWithoutPosInput, CityUncheckedCreateWithoutPosInput>
    connectOrCreate?: CityCreateOrConnectWithoutPosInput
    upsert?: CityUpsertWithoutPosInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPosInput, CityUpdateWithoutPosInput>, CityUncheckedUpdateWithoutPosInput>
  }

  export type AreaUpdateOneRequiredWithoutPosNestedInput = {
    create?: XOR<AreaCreateWithoutPosInput, AreaUncheckedCreateWithoutPosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPosInput
    upsert?: AreaUpsertWithoutPosInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutPosInput, AreaUpdateWithoutPosInput>, AreaUncheckedUpdateWithoutPosInput>
  }

  export type ZoneUpdateOneRequiredWithoutPosNestedInput = {
    create?: XOR<ZoneCreateWithoutPosInput, ZoneUncheckedCreateWithoutPosInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutPosInput
    upsert?: ZoneUpsertWithoutPosInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutPosInput, ZoneUpdateWithoutPosInput>, ZoneUncheckedUpdateWithoutPosInput>
  }

  export type TypeUpdateOneRequiredWithoutPosNestedInput = {
    create?: XOR<TypeCreateWithoutPosInput, TypeUncheckedCreateWithoutPosInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPosInput
    upsert?: TypeUpsertWithoutPosInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutPosInput, TypeUpdateWithoutPosInput>, TypeUncheckedUpdateWithoutPosInput>
  }

  export type SubtypeUpdateOneWithoutPosNestedInput = {
    create?: XOR<SubtypeCreateWithoutPosInput, SubtypeUncheckedCreateWithoutPosInput>
    connectOrCreate?: SubtypeCreateOrConnectWithoutPosInput
    upsert?: SubtypeUpsertWithoutPosInput
    disconnect?: boolean
    delete?: SubtypeWhereInput | boolean
    connect?: SubtypeWhereUniqueInput
    update?: XOR<XOR<SubtypeUpdateToOneWithWhereWithoutPosInput, SubtypeUpdateWithoutPosInput>, SubtypeUncheckedUpdateWithoutPosInput>
  }

  export type AdministrationUpdateOneWithoutPosNestedInput = {
    create?: XOR<AdministrationCreateWithoutPosInput, AdministrationUncheckedCreateWithoutPosInput>
    connectOrCreate?: AdministrationCreateOrConnectWithoutPosInput
    upsert?: AdministrationUpsertWithoutPosInput
    disconnect?: boolean
    delete?: AdministrationWhereInput | boolean
    connect?: AdministrationWhereUniqueInput
    update?: XOR<XOR<AdministrationUpdateToOneWithWhereWithoutPosInput, AdministrationUpdateWithoutPosInput>, AdministrationUncheckedUpdateWithoutPosInput>
  }

  export type AgentUpdateOneWithoutPosNestedInput = {
    create?: XOR<AgentCreateWithoutPosInput, AgentUncheckedCreateWithoutPosInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPosInput
    upsert?: AgentUpsertWithoutPosInput
    disconnect?: boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutPosInput, AgentUpdateWithoutPosInput>, AgentUncheckedUpdateWithoutPosInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type LicenceCreateNestedOneWithoutAdministrationInput = {
    create?: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutAdministrationInput
    connect?: LicenceWhereUniqueInput
  }

  export type PosCreateNestedManyWithoutAdministrationInput = {
    create?: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput> | PosCreateWithoutAdministrationInput[] | PosUncheckedCreateWithoutAdministrationInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAdministrationInput | PosCreateOrConnectWithoutAdministrationInput[]
    createMany?: PosCreateManyAdministrationInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type LicenceUncheckedCreateNestedOneWithoutAdministrationInput = {
    create?: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutAdministrationInput
    connect?: LicenceWhereUniqueInput
  }

  export type PosUncheckedCreateNestedManyWithoutAdministrationInput = {
    create?: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput> | PosCreateWithoutAdministrationInput[] | PosUncheckedCreateWithoutAdministrationInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAdministrationInput | PosCreateOrConnectWithoutAdministrationInput[]
    createMany?: PosCreateManyAdministrationInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type LicenceUpdateOneWithoutAdministrationNestedInput = {
    create?: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutAdministrationInput
    upsert?: LicenceUpsertWithoutAdministrationInput
    disconnect?: LicenceWhereInput | boolean
    delete?: LicenceWhereInput | boolean
    connect?: LicenceWhereUniqueInput
    update?: XOR<XOR<LicenceUpdateToOneWithWhereWithoutAdministrationInput, LicenceUpdateWithoutAdministrationInput>, LicenceUncheckedUpdateWithoutAdministrationInput>
  }

  export type PosUpdateManyWithoutAdministrationNestedInput = {
    create?: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput> | PosCreateWithoutAdministrationInput[] | PosUncheckedCreateWithoutAdministrationInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAdministrationInput | PosCreateOrConnectWithoutAdministrationInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutAdministrationInput | PosUpsertWithWhereUniqueWithoutAdministrationInput[]
    createMany?: PosCreateManyAdministrationInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutAdministrationInput | PosUpdateWithWhereUniqueWithoutAdministrationInput[]
    updateMany?: PosUpdateManyWithWhereWithoutAdministrationInput | PosUpdateManyWithWhereWithoutAdministrationInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type LicenceUncheckedUpdateOneWithoutAdministrationNestedInput = {
    create?: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
    connectOrCreate?: LicenceCreateOrConnectWithoutAdministrationInput
    upsert?: LicenceUpsertWithoutAdministrationInput
    disconnect?: LicenceWhereInput | boolean
    delete?: LicenceWhereInput | boolean
    connect?: LicenceWhereUniqueInput
    update?: XOR<XOR<LicenceUpdateToOneWithWhereWithoutAdministrationInput, LicenceUpdateWithoutAdministrationInput>, LicenceUncheckedUpdateWithoutAdministrationInput>
  }

  export type PosUncheckedUpdateManyWithoutAdministrationNestedInput = {
    create?: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput> | PosCreateWithoutAdministrationInput[] | PosUncheckedCreateWithoutAdministrationInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAdministrationInput | PosCreateOrConnectWithoutAdministrationInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutAdministrationInput | PosUpsertWithWhereUniqueWithoutAdministrationInput[]
    createMany?: PosCreateManyAdministrationInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutAdministrationInput | PosUpdateWithWhereUniqueWithoutAdministrationInput[]
    updateMany?: PosUpdateManyWithWhereWithoutAdministrationInput | PosUpdateManyWithWhereWithoutAdministrationInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type CityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type PosCreateNestedManyWithoutProvinceInput = {
    create?: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput> | PosCreateWithoutProvinceInput[] | PosUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PosCreateOrConnectWithoutProvinceInput | PosCreateOrConnectWithoutProvinceInput[]
    createMany?: PosCreateManyProvinceInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput> | PosCreateWithoutProvinceInput[] | PosUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PosCreateOrConnectWithoutProvinceInput | PosCreateOrConnectWithoutProvinceInput[]
    createMany?: PosCreateManyProvinceInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type CityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type PosUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput> | PosCreateWithoutProvinceInput[] | PosUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PosCreateOrConnectWithoutProvinceInput | PosCreateOrConnectWithoutProvinceInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutProvinceInput | PosUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: PosCreateManyProvinceInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutProvinceInput | PosUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: PosUpdateManyWithWhereWithoutProvinceInput | PosUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput> | PosCreateWithoutProvinceInput[] | PosUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PosCreateOrConnectWithoutProvinceInput | PosCreateOrConnectWithoutProvinceInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutProvinceInput | PosUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: PosCreateManyProvinceInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutProvinceInput | PosUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: PosUpdateManyWithWhereWithoutProvinceInput | PosUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutCityInput = {
    create?: XOR<ProvinceCreateWithoutCityInput, ProvinceUncheckedCreateWithoutCityInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCityInput
    connect?: ProvinceWhereUniqueInput
  }

  export type PosCreateNestedManyWithoutCityInput = {
    create?: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput> | PosCreateWithoutCityInput[] | PosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PosCreateOrConnectWithoutCityInput | PosCreateOrConnectWithoutCityInput[]
    createMany?: PosCreateManyCityInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type AreaCreateNestedManyWithoutCityInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput> | PosCreateWithoutCityInput[] | PosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PosCreateOrConnectWithoutCityInput | PosCreateOrConnectWithoutCityInput[]
    createMany?: PosCreateManyCityInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<ProvinceCreateWithoutCityInput, ProvinceUncheckedCreateWithoutCityInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCityInput
    upsert?: ProvinceUpsertWithoutCityInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutCityInput, ProvinceUpdateWithoutCityInput>, ProvinceUncheckedUpdateWithoutCityInput>
  }

  export type PosUpdateManyWithoutCityNestedInput = {
    create?: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput> | PosCreateWithoutCityInput[] | PosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PosCreateOrConnectWithoutCityInput | PosCreateOrConnectWithoutCityInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutCityInput | PosUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PosCreateManyCityInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutCityInput | PosUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PosUpdateManyWithWhereWithoutCityInput | PosUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type AreaUpdateManyWithoutCityNestedInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCityInput | AreaUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCityInput | AreaUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCityInput | AreaUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput> | PosCreateWithoutCityInput[] | PosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PosCreateOrConnectWithoutCityInput | PosCreateOrConnectWithoutCityInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutCityInput | PosUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PosCreateManyCityInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutCityInput | PosUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PosUpdateManyWithWhereWithoutCityInput | PosUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCityInput | AreaUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCityInput | AreaUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCityInput | AreaUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type ZoneCreateNestedManyWithoutAreaInput = {
    create?: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput> | ZoneCreateWithoutAreaInput[] | ZoneUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutAreaInput | ZoneCreateOrConnectWithoutAreaInput[]
    createMany?: ZoneCreateManyAreaInputEnvelope
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
  }

  export type PosCreateNestedManyWithoutAreaInput = {
    create?: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput> | PosCreateWithoutAreaInput[] | PosUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAreaInput | PosCreateOrConnectWithoutAreaInput[]
    createMany?: PosCreateManyAreaInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type CityCreateNestedOneWithoutAreaInput = {
    create?: XOR<CityCreateWithoutAreaInput, CityUncheckedCreateWithoutAreaInput>
    connectOrCreate?: CityCreateOrConnectWithoutAreaInput
    connect?: CityWhereUniqueInput
  }

  export type ZoneUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput> | ZoneCreateWithoutAreaInput[] | ZoneUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutAreaInput | ZoneCreateOrConnectWithoutAreaInput[]
    createMany?: ZoneCreateManyAreaInputEnvelope
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput> | PosCreateWithoutAreaInput[] | PosUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAreaInput | PosCreateOrConnectWithoutAreaInput[]
    createMany?: PosCreateManyAreaInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type ZoneUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput> | ZoneCreateWithoutAreaInput[] | ZoneUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutAreaInput | ZoneCreateOrConnectWithoutAreaInput[]
    upsert?: ZoneUpsertWithWhereUniqueWithoutAreaInput | ZoneUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ZoneCreateManyAreaInputEnvelope
    set?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    disconnect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    delete?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    update?: ZoneUpdateWithWhereUniqueWithoutAreaInput | ZoneUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ZoneUpdateManyWithWhereWithoutAreaInput | ZoneUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
  }

  export type PosUpdateManyWithoutAreaNestedInput = {
    create?: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput> | PosCreateWithoutAreaInput[] | PosUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAreaInput | PosCreateOrConnectWithoutAreaInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutAreaInput | PosUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: PosCreateManyAreaInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutAreaInput | PosUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: PosUpdateManyWithWhereWithoutAreaInput | PosUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type CityUpdateOneWithoutAreaNestedInput = {
    create?: XOR<CityCreateWithoutAreaInput, CityUncheckedCreateWithoutAreaInput>
    connectOrCreate?: CityCreateOrConnectWithoutAreaInput
    upsert?: CityUpsertWithoutAreaInput
    disconnect?: boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAreaInput, CityUpdateWithoutAreaInput>, CityUncheckedUpdateWithoutAreaInput>
  }

  export type ZoneUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput> | ZoneCreateWithoutAreaInput[] | ZoneUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutAreaInput | ZoneCreateOrConnectWithoutAreaInput[]
    upsert?: ZoneUpsertWithWhereUniqueWithoutAreaInput | ZoneUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ZoneCreateManyAreaInputEnvelope
    set?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    disconnect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    delete?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    update?: ZoneUpdateWithWhereUniqueWithoutAreaInput | ZoneUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ZoneUpdateManyWithWhereWithoutAreaInput | ZoneUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput> | PosCreateWithoutAreaInput[] | PosUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PosCreateOrConnectWithoutAreaInput | PosCreateOrConnectWithoutAreaInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutAreaInput | PosUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: PosCreateManyAreaInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutAreaInput | PosUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: PosUpdateManyWithWhereWithoutAreaInput | PosUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutZoneInput = {
    create?: XOR<AreaCreateWithoutZoneInput, AreaUncheckedCreateWithoutZoneInput>
    connectOrCreate?: AreaCreateOrConnectWithoutZoneInput
    connect?: AreaWhereUniqueInput
  }

  export type PosCreateNestedManyWithoutZoneInput = {
    create?: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput> | PosCreateWithoutZoneInput[] | PosUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PosCreateOrConnectWithoutZoneInput | PosCreateOrConnectWithoutZoneInput[]
    createMany?: PosCreateManyZoneInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput> | PosCreateWithoutZoneInput[] | PosUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PosCreateOrConnectWithoutZoneInput | PosCreateOrConnectWithoutZoneInput[]
    createMany?: PosCreateManyZoneInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type AreaUpdateOneWithoutZoneNestedInput = {
    create?: XOR<AreaCreateWithoutZoneInput, AreaUncheckedCreateWithoutZoneInput>
    connectOrCreate?: AreaCreateOrConnectWithoutZoneInput
    upsert?: AreaUpsertWithoutZoneInput
    disconnect?: boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutZoneInput, AreaUpdateWithoutZoneInput>, AreaUncheckedUpdateWithoutZoneInput>
  }

  export type PosUpdateManyWithoutZoneNestedInput = {
    create?: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput> | PosCreateWithoutZoneInput[] | PosUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PosCreateOrConnectWithoutZoneInput | PosCreateOrConnectWithoutZoneInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutZoneInput | PosUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: PosCreateManyZoneInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutZoneInput | PosUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: PosUpdateManyWithWhereWithoutZoneInput | PosUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput> | PosCreateWithoutZoneInput[] | PosUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PosCreateOrConnectWithoutZoneInput | PosCreateOrConnectWithoutZoneInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutZoneInput | PosUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: PosCreateManyZoneInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutZoneInput | PosUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: PosUpdateManyWithWhereWithoutZoneInput | PosUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type PosCreateNestedOneWithoutLicenceInput = {
    create?: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: PosCreateOrConnectWithoutLicenceInput
    connect?: PosWhereUniqueInput
  }

  export type AdministrationCreateNestedOneWithoutLicenceInput = {
    create?: XOR<AdministrationCreateWithoutLicenceInput, AdministrationUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: AdministrationCreateOrConnectWithoutLicenceInput
    connect?: AdministrationWhereUniqueInput
  }

  export type PosUncheckedCreateNestedOneWithoutLicenceInput = {
    create?: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: PosCreateOrConnectWithoutLicenceInput
    connect?: PosWhereUniqueInput
  }

  export type PosUpdateOneWithoutLicenceNestedInput = {
    create?: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: PosCreateOrConnectWithoutLicenceInput
    upsert?: PosUpsertWithoutLicenceInput
    disconnect?: PosWhereInput | boolean
    delete?: PosWhereInput | boolean
    connect?: PosWhereUniqueInput
    update?: XOR<XOR<PosUpdateToOneWithWhereWithoutLicenceInput, PosUpdateWithoutLicenceInput>, PosUncheckedUpdateWithoutLicenceInput>
  }

  export type AdministrationUpdateOneRequiredWithoutLicenceNestedInput = {
    create?: XOR<AdministrationCreateWithoutLicenceInput, AdministrationUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: AdministrationCreateOrConnectWithoutLicenceInput
    upsert?: AdministrationUpsertWithoutLicenceInput
    connect?: AdministrationWhereUniqueInput
    update?: XOR<XOR<AdministrationUpdateToOneWithWhereWithoutLicenceInput, AdministrationUpdateWithoutLicenceInput>, AdministrationUncheckedUpdateWithoutLicenceInput>
  }

  export type PosUncheckedUpdateOneWithoutLicenceNestedInput = {
    create?: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
    connectOrCreate?: PosCreateOrConnectWithoutLicenceInput
    upsert?: PosUpsertWithoutLicenceInput
    disconnect?: PosWhereInput | boolean
    delete?: PosWhereInput | boolean
    connect?: PosWhereUniqueInput
    update?: XOR<XOR<PosUpdateToOneWithWhereWithoutLicenceInput, PosUpdateWithoutLicenceInput>, PosUncheckedUpdateWithoutLicenceInput>
  }

  export type SubtypeCreateNestedManyWithoutTypeInput = {
    create?: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput> | SubtypeCreateWithoutTypeInput[] | SubtypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SubtypeCreateOrConnectWithoutTypeInput | SubtypeCreateOrConnectWithoutTypeInput[]
    createMany?: SubtypeCreateManyTypeInputEnvelope
    connect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
  }

  export type PosCreateNestedManyWithoutTypeInput = {
    create?: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput> | PosCreateWithoutTypeInput[] | PosUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutTypeInput | PosCreateOrConnectWithoutTypeInput[]
    createMany?: PosCreateManyTypeInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type SubtypeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput> | SubtypeCreateWithoutTypeInput[] | SubtypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SubtypeCreateOrConnectWithoutTypeInput | SubtypeCreateOrConnectWithoutTypeInput[]
    createMany?: SubtypeCreateManyTypeInputEnvelope
    connect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput> | PosCreateWithoutTypeInput[] | PosUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutTypeInput | PosCreateOrConnectWithoutTypeInput[]
    createMany?: PosCreateManyTypeInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type SubtypeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput> | SubtypeCreateWithoutTypeInput[] | SubtypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SubtypeCreateOrConnectWithoutTypeInput | SubtypeCreateOrConnectWithoutTypeInput[]
    upsert?: SubtypeUpsertWithWhereUniqueWithoutTypeInput | SubtypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SubtypeCreateManyTypeInputEnvelope
    set?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    disconnect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    delete?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    connect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    update?: SubtypeUpdateWithWhereUniqueWithoutTypeInput | SubtypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SubtypeUpdateManyWithWhereWithoutTypeInput | SubtypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SubtypeScalarWhereInput | SubtypeScalarWhereInput[]
  }

  export type PosUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput> | PosCreateWithoutTypeInput[] | PosUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutTypeInput | PosCreateOrConnectWithoutTypeInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutTypeInput | PosUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PosCreateManyTypeInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutTypeInput | PosUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PosUpdateManyWithWhereWithoutTypeInput | PosUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type SubtypeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput> | SubtypeCreateWithoutTypeInput[] | SubtypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SubtypeCreateOrConnectWithoutTypeInput | SubtypeCreateOrConnectWithoutTypeInput[]
    upsert?: SubtypeUpsertWithWhereUniqueWithoutTypeInput | SubtypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SubtypeCreateManyTypeInputEnvelope
    set?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    disconnect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    delete?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    connect?: SubtypeWhereUniqueInput | SubtypeWhereUniqueInput[]
    update?: SubtypeUpdateWithWhereUniqueWithoutTypeInput | SubtypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SubtypeUpdateManyWithWhereWithoutTypeInput | SubtypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SubtypeScalarWhereInput | SubtypeScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput> | PosCreateWithoutTypeInput[] | PosUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutTypeInput | PosCreateOrConnectWithoutTypeInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutTypeInput | PosUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PosCreateManyTypeInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutTypeInput | PosUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PosUpdateManyWithWhereWithoutTypeInput | PosUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type TypeCreateNestedOneWithoutSubtypeInput = {
    create?: XOR<TypeCreateWithoutSubtypeInput, TypeUncheckedCreateWithoutSubtypeInput>
    connectOrCreate?: TypeCreateOrConnectWithoutSubtypeInput
    connect?: TypeWhereUniqueInput
  }

  export type PosCreateNestedManyWithoutSubtypeInput = {
    create?: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput> | PosCreateWithoutSubtypeInput[] | PosUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutSubtypeInput | PosCreateOrConnectWithoutSubtypeInput[]
    createMany?: PosCreateManySubtypeInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type PosUncheckedCreateNestedManyWithoutSubtypeInput = {
    create?: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput> | PosCreateWithoutSubtypeInput[] | PosUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutSubtypeInput | PosCreateOrConnectWithoutSubtypeInput[]
    createMany?: PosCreateManySubtypeInputEnvelope
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
  }

  export type TypeUpdateOneRequiredWithoutSubtypeNestedInput = {
    create?: XOR<TypeCreateWithoutSubtypeInput, TypeUncheckedCreateWithoutSubtypeInput>
    connectOrCreate?: TypeCreateOrConnectWithoutSubtypeInput
    upsert?: TypeUpsertWithoutSubtypeInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutSubtypeInput, TypeUpdateWithoutSubtypeInput>, TypeUncheckedUpdateWithoutSubtypeInput>
  }

  export type PosUpdateManyWithoutSubtypeNestedInput = {
    create?: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput> | PosCreateWithoutSubtypeInput[] | PosUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutSubtypeInput | PosCreateOrConnectWithoutSubtypeInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutSubtypeInput | PosUpsertWithWhereUniqueWithoutSubtypeInput[]
    createMany?: PosCreateManySubtypeInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutSubtypeInput | PosUpdateWithWhereUniqueWithoutSubtypeInput[]
    updateMany?: PosUpdateManyWithWhereWithoutSubtypeInput | PosUpdateManyWithWhereWithoutSubtypeInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type PosUncheckedUpdateManyWithoutSubtypeNestedInput = {
    create?: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput> | PosCreateWithoutSubtypeInput[] | PosUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: PosCreateOrConnectWithoutSubtypeInput | PosCreateOrConnectWithoutSubtypeInput[]
    upsert?: PosUpsertWithWhereUniqueWithoutSubtypeInput | PosUpsertWithWhereUniqueWithoutSubtypeInput[]
    createMany?: PosCreateManySubtypeInputEnvelope
    set?: PosWhereUniqueInput | PosWhereUniqueInput[]
    disconnect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    delete?: PosWhereUniqueInput | PosWhereUniqueInput[]
    connect?: PosWhereUniqueInput | PosWhereUniqueInput[]
    update?: PosUpdateWithWhereUniqueWithoutSubtypeInput | PosUpdateWithWhereUniqueWithoutSubtypeInput[]
    updateMany?: PosUpdateManyWithWhereWithoutSubtypeInput | PosUpdateManyWithWhereWithoutSubtypeInput[]
    deleteMany?: PosScalarWhereInput | PosScalarWhereInput[]
  }

  export type PosCreateNestedOneWithoutAgentInput = {
    create?: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PosCreateOrConnectWithoutAgentInput
    connect?: PosWhereUniqueInput
  }

  export type TerminalCreateNestedOneWithoutAgentInput = {
    create?: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
    connectOrCreate?: TerminalCreateOrConnectWithoutAgentInput
    connect?: TerminalWhereUniqueInput
  }

  export type RevisionCreateNestedOneWithoutAgentInput = {
    create?: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutAgentInput
    connect?: RevisionWhereUniqueInput
  }

  export type PosUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PosCreateOrConnectWithoutAgentInput
    connect?: PosWhereUniqueInput
  }

  export type TerminalUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
    connectOrCreate?: TerminalCreateOrConnectWithoutAgentInput
    connect?: TerminalWhereUniqueInput
  }

  export type RevisionUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutAgentInput
    connect?: RevisionWhereUniqueInput
  }

  export type PosUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PosCreateOrConnectWithoutAgentInput
    upsert?: PosUpsertWithoutAgentInput
    disconnect?: PosWhereInput | boolean
    delete?: PosWhereInput | boolean
    connect?: PosWhereUniqueInput
    update?: XOR<XOR<PosUpdateToOneWithWhereWithoutAgentInput, PosUpdateWithoutAgentInput>, PosUncheckedUpdateWithoutAgentInput>
  }

  export type TerminalUpdateOneWithoutAgentNestedInput = {
    create?: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
    connectOrCreate?: TerminalCreateOrConnectWithoutAgentInput
    upsert?: TerminalUpsertWithoutAgentInput
    disconnect?: TerminalWhereInput | boolean
    delete?: TerminalWhereInput | boolean
    connect?: TerminalWhereUniqueInput
    update?: XOR<XOR<TerminalUpdateToOneWithWhereWithoutAgentInput, TerminalUpdateWithoutAgentInput>, TerminalUncheckedUpdateWithoutAgentInput>
  }

  export type RevisionUpdateOneWithoutAgentNestedInput = {
    create?: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutAgentInput
    upsert?: RevisionUpsertWithoutAgentInput
    disconnect?: RevisionWhereInput | boolean
    delete?: RevisionWhereInput | boolean
    connect?: RevisionWhereUniqueInput
    update?: XOR<XOR<RevisionUpdateToOneWithWhereWithoutAgentInput, RevisionUpdateWithoutAgentInput>, RevisionUncheckedUpdateWithoutAgentInput>
  }

  export type PosUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PosCreateOrConnectWithoutAgentInput
    upsert?: PosUpsertWithoutAgentInput
    disconnect?: PosWhereInput | boolean
    delete?: PosWhereInput | boolean
    connect?: PosWhereUniqueInput
    update?: XOR<XOR<PosUpdateToOneWithWhereWithoutAgentInput, PosUpdateWithoutAgentInput>, PosUncheckedUpdateWithoutAgentInput>
  }

  export type TerminalUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
    connectOrCreate?: TerminalCreateOrConnectWithoutAgentInput
    upsert?: TerminalUpsertWithoutAgentInput
    disconnect?: TerminalWhereInput | boolean
    delete?: TerminalWhereInput | boolean
    connect?: TerminalWhereUniqueInput
    update?: XOR<XOR<TerminalUpdateToOneWithWhereWithoutAgentInput, TerminalUpdateWithoutAgentInput>, TerminalUncheckedUpdateWithoutAgentInput>
  }

  export type RevisionUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutAgentInput
    upsert?: RevisionUpsertWithoutAgentInput
    disconnect?: RevisionWhereInput | boolean
    delete?: RevisionWhereInput | boolean
    connect?: RevisionWhereUniqueInput
    update?: XOR<XOR<RevisionUpdateToOneWithWhereWithoutAgentInput, RevisionUpdateWithoutAgentInput>, RevisionUncheckedUpdateWithoutAgentInput>
  }

  export type AgentCreateNestedOneWithoutRevisionInput = {
    create?: XOR<AgentCreateWithoutRevisionInput, AgentUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: AgentCreateOrConnectWithoutRevisionInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneWithoutRevisionNestedInput = {
    create?: XOR<AgentCreateWithoutRevisionInput, AgentUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: AgentCreateOrConnectWithoutRevisionInput
    upsert?: AgentUpsertWithoutRevisionInput
    disconnect?: boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutRevisionInput, AgentUpdateWithoutRevisionInput>, AgentUncheckedUpdateWithoutRevisionInput>
  }

  export type AgentCreateNestedOneWithoutTerminalInput = {
    create?: XOR<AgentCreateWithoutTerminalInput, AgentUncheckedCreateWithoutTerminalInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTerminalInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneWithoutTerminalNestedInput = {
    create?: XOR<AgentCreateWithoutTerminalInput, AgentUncheckedCreateWithoutTerminalInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTerminalInput
    upsert?: AgentUpsertWithoutTerminalInput
    disconnect?: boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutTerminalInput, AgentUpdateWithoutTerminalInput>, AgentUncheckedUpdateWithoutTerminalInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type LicenceCreateWithoutPosInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    administration: AdministrationCreateNestedOneWithoutLicenceInput
  }

  export type LicenceUncheckedCreateWithoutPosInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    administration_id: string
  }

  export type LicenceCreateOrConnectWithoutPosInput = {
    where: LicenceWhereUniqueInput
    create: XOR<LicenceCreateWithoutPosInput, LicenceUncheckedCreateWithoutPosInput>
  }

  export type ProvinceCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    city?: CityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    city?: CityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutPosInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutPosInput, ProvinceUncheckedCreateWithoutPosInput>
  }

  export type CityCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    Province: ProvinceCreateNestedOneWithoutCityInput
    area?: AreaCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    province_id: string
    created_at?: Date | string
    area?: AreaUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPosInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPosInput, CityUncheckedCreateWithoutPosInput>
  }

  export type AreaCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    zone?: ZoneCreateNestedManyWithoutAreaInput
    city?: CityCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    city_id?: string | null
    created_at?: Date | string
    zone?: ZoneUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutPosInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutPosInput, AreaUncheckedCreateWithoutPosInput>
  }

  export type ZoneCreateWithoutPosInput = {
    id?: string
    zone_number: number
    created_at?: Date | string
    area?: AreaCreateNestedOneWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutPosInput = {
    id?: string
    zone_number: number
    area_id?: string | null
    created_at?: Date | string
  }

  export type ZoneCreateOrConnectWithoutPosInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutPosInput, ZoneUncheckedCreateWithoutPosInput>
  }

  export type TypeCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    subtype?: SubtypeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    subtype?: SubtypeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeCreateOrConnectWithoutPosInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutPosInput, TypeUncheckedCreateWithoutPosInput>
  }

  export type SubtypeCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    type: TypeCreateNestedOneWithoutSubtypeInput
  }

  export type SubtypeUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    type_id: string
    created_at?: Date | string
  }

  export type SubtypeCreateOrConnectWithoutPosInput = {
    where: SubtypeWhereUniqueInput
    create: XOR<SubtypeCreateWithoutPosInput, SubtypeUncheckedCreateWithoutPosInput>
  }

  export type AdministrationCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutAdministrationInput
  }

  export type AdministrationUncheckedCreateWithoutPosInput = {
    id?: string
    name: string
    created_at?: Date | string
    licence?: LicenceUncheckedCreateNestedOneWithoutAdministrationInput
  }

  export type AdministrationCreateOrConnectWithoutPosInput = {
    where: AdministrationWhereUniqueInput
    create: XOR<AdministrationCreateWithoutPosInput, AdministrationUncheckedCreateWithoutPosInput>
  }

  export type AgentCreateWithoutPosInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    terminal?: TerminalCreateNestedOneWithoutAgentInput
    revision?: RevisionCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutPosInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    terminal?: TerminalUncheckedCreateNestedOneWithoutAgentInput
    revision?: RevisionUncheckedCreateNestedOneWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutPosInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutPosInput, AgentUncheckedCreateWithoutPosInput>
  }

  export type LicenceUpsertWithoutPosInput = {
    update: XOR<LicenceUpdateWithoutPosInput, LicenceUncheckedUpdateWithoutPosInput>
    create: XOR<LicenceCreateWithoutPosInput, LicenceUncheckedCreateWithoutPosInput>
    where?: LicenceWhereInput
  }

  export type LicenceUpdateToOneWithWhereWithoutPosInput = {
    where?: LicenceWhereInput
    data: XOR<LicenceUpdateWithoutPosInput, LicenceUncheckedUpdateWithoutPosInput>
  }

  export type LicenceUpdateWithoutPosInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    administration?: AdministrationUpdateOneRequiredWithoutLicenceNestedInput
  }

  export type LicenceUncheckedUpdateWithoutPosInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    administration_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUpsertWithoutPosInput = {
    update: XOR<ProvinceUpdateWithoutPosInput, ProvinceUncheckedUpdateWithoutPosInput>
    create: XOR<ProvinceCreateWithoutPosInput, ProvinceUncheckedCreateWithoutPosInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutPosInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutPosInput, ProvinceUncheckedUpdateWithoutPosInput>
  }

  export type ProvinceUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type CityUpsertWithoutPosInput = {
    update: XOR<CityUpdateWithoutPosInput, CityUncheckedUpdateWithoutPosInput>
    create: XOR<CityCreateWithoutPosInput, CityUncheckedCreateWithoutPosInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPosInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPosInput, CityUncheckedUpdateWithoutPosInput>
  }

  export type CityUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Province?: ProvinceUpdateOneRequiredWithoutCityNestedInput
    area?: AreaUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    province_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUncheckedUpdateManyWithoutCityNestedInput
  }

  export type AreaUpsertWithoutPosInput = {
    update: XOR<AreaUpdateWithoutPosInput, AreaUncheckedUpdateWithoutPosInput>
    create: XOR<AreaCreateWithoutPosInput, AreaUncheckedCreateWithoutPosInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutPosInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutPosInput, AreaUncheckedUpdateWithoutPosInput>
  }

  export type AreaUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateManyWithoutAreaNestedInput
    city?: CityUpdateOneWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    city_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type ZoneUpsertWithoutPosInput = {
    update: XOR<ZoneUpdateWithoutPosInput, ZoneUncheckedUpdateWithoutPosInput>
    create: XOR<ZoneCreateWithoutPosInput, ZoneUncheckedCreateWithoutPosInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutPosInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutPosInput, ZoneUncheckedUpdateWithoutPosInput>
  }

  export type ZoneUpdateWithoutPosInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutPosInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUpsertWithoutPosInput = {
    update: XOR<TypeUpdateWithoutPosInput, TypeUncheckedUpdateWithoutPosInput>
    create: XOR<TypeCreateWithoutPosInput, TypeUncheckedCreateWithoutPosInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutPosInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutPosInput, TypeUncheckedUpdateWithoutPosInput>
  }

  export type TypeUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: SubtypeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: SubtypeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type SubtypeUpsertWithoutPosInput = {
    update: XOR<SubtypeUpdateWithoutPosInput, SubtypeUncheckedUpdateWithoutPosInput>
    create: XOR<SubtypeCreateWithoutPosInput, SubtypeUncheckedCreateWithoutPosInput>
    where?: SubtypeWhereInput
  }

  export type SubtypeUpdateToOneWithWhereWithoutPosInput = {
    where?: SubtypeWhereInput
    data: XOR<SubtypeUpdateWithoutPosInput, SubtypeUncheckedUpdateWithoutPosInput>
  }

  export type SubtypeUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUpdateOneRequiredWithoutSubtypeNestedInput
  }

  export type SubtypeUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationUpsertWithoutPosInput = {
    update: XOR<AdministrationUpdateWithoutPosInput, AdministrationUncheckedUpdateWithoutPosInput>
    create: XOR<AdministrationCreateWithoutPosInput, AdministrationUncheckedCreateWithoutPosInput>
    where?: AdministrationWhereInput
  }

  export type AdministrationUpdateToOneWithWhereWithoutPosInput = {
    where?: AdministrationWhereInput
    data: XOR<AdministrationUpdateWithoutPosInput, AdministrationUncheckedUpdateWithoutPosInput>
  }

  export type AdministrationUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutAdministrationNestedInput
  }

  export type AdministrationUncheckedUpdateWithoutPosInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUncheckedUpdateOneWithoutAdministrationNestedInput
  }

  export type AgentUpsertWithoutPosInput = {
    update: XOR<AgentUpdateWithoutPosInput, AgentUncheckedUpdateWithoutPosInput>
    create: XOR<AgentCreateWithoutPosInput, AgentUncheckedCreateWithoutPosInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutPosInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutPosInput, AgentUncheckedUpdateWithoutPosInput>
  }

  export type AgentUpdateWithoutPosInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    terminal?: TerminalUpdateOneWithoutAgentNestedInput
    revision?: RevisionUpdateOneWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutPosInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    terminal?: TerminalUncheckedUpdateOneWithoutAgentNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutAgentNestedInput
  }

  export type LicenceCreateWithoutAdministrationInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    pos?: PosCreateNestedOneWithoutLicenceInput
  }

  export type LicenceUncheckedCreateWithoutAdministrationInput = {
    id?: string
    reference_id: number
    status: boolean
    created_at?: Date | string
    pos?: PosUncheckedCreateNestedOneWithoutLicenceInput
  }

  export type LicenceCreateOrConnectWithoutAdministrationInput = {
    where: LicenceWhereUniqueInput
    create: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
  }

  export type PosCreateWithoutAdministrationInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutAdministrationInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutAdministrationInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput>
  }

  export type PosCreateManyAdministrationInputEnvelope = {
    data: PosCreateManyAdministrationInput | PosCreateManyAdministrationInput[]
  }

  export type LicenceUpsertWithoutAdministrationInput = {
    update: XOR<LicenceUpdateWithoutAdministrationInput, LicenceUncheckedUpdateWithoutAdministrationInput>
    create: XOR<LicenceCreateWithoutAdministrationInput, LicenceUncheckedCreateWithoutAdministrationInput>
    where?: LicenceWhereInput
  }

  export type LicenceUpdateToOneWithWhereWithoutAdministrationInput = {
    where?: LicenceWhereInput
    data: XOR<LicenceUpdateWithoutAdministrationInput, LicenceUncheckedUpdateWithoutAdministrationInput>
  }

  export type LicenceUpdateWithoutAdministrationInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pos?: PosUpdateOneWithoutLicenceNestedInput
  }

  export type LicenceUncheckedUpdateWithoutAdministrationInput = {
    reference_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pos?: PosUncheckedUpdateOneWithoutLicenceNestedInput
  }

  export type PosUpsertWithWhereUniqueWithoutAdministrationInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutAdministrationInput, PosUncheckedUpdateWithoutAdministrationInput>
    create: XOR<PosCreateWithoutAdministrationInput, PosUncheckedCreateWithoutAdministrationInput>
  }

  export type PosUpdateWithWhereUniqueWithoutAdministrationInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutAdministrationInput, PosUncheckedUpdateWithoutAdministrationInput>
  }

  export type PosUpdateManyWithWhereWithoutAdministrationInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutAdministrationInput>
  }

  export type PosScalarWhereInput = {
    AND?: PosScalarWhereInput | PosScalarWhereInput[]
    OR?: PosScalarWhereInput[]
    NOT?: PosScalarWhereInput | PosScalarWhereInput[]
    id?: StringFilter<"Pos"> | string
    id_reference?: IntFilter<"Pos"> | number
    province_id?: StringFilter<"Pos"> | string
    city_id?: StringFilter<"Pos"> | string
    area_id?: StringFilter<"Pos"> | string
    zone_id?: StringFilter<"Pos"> | string
    type_id?: StringFilter<"Pos"> | string
    subtype_id?: StringNullableFilter<"Pos"> | string | null
    administration_id?: StringNullableFilter<"Pos"> | string | null
    agent_id?: StringNullableFilter<"Pos"> | string | null
    status?: BoolFilter<"Pos"> | boolean
    coordinates?: StringNullableListFilter<"Pos">
    licence_id?: StringNullableFilter<"Pos"> | string | null
    created_at?: DateTimeFilter<"Pos"> | Date | string
  }

  export type CityCreateWithoutProvinceInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutCityInput
    area?: AreaCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutProvinceInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutCityInput
    area?: AreaUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutProvinceInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityCreateManyProvinceInputEnvelope = {
    data: CityCreateManyProvinceInput | CityCreateManyProvinceInput[]
  }

  export type PosCreateWithoutProvinceInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutProvinceInput = {
    id?: string
    id_reference: number
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutProvinceInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput>
  }

  export type PosCreateManyProvinceInputEnvelope = {
    data: PosCreateManyProvinceInput | PosCreateManyProvinceInput[]
  }

  export type CityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
  }

  export type CityUpdateManyWithWhereWithoutProvinceInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    province_id?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
  }

  export type PosUpsertWithWhereUniqueWithoutProvinceInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutProvinceInput, PosUncheckedUpdateWithoutProvinceInput>
    create: XOR<PosCreateWithoutProvinceInput, PosUncheckedCreateWithoutProvinceInput>
  }

  export type PosUpdateWithWhereUniqueWithoutProvinceInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutProvinceInput, PosUncheckedUpdateWithoutProvinceInput>
  }

  export type PosUpdateManyWithWhereWithoutProvinceInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutProvinceInput>
  }

  export type ProvinceCreateWithoutCityInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutCityInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutCityInput, ProvinceUncheckedCreateWithoutCityInput>
  }

  export type PosCreateWithoutCityInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutCityInput = {
    id?: string
    id_reference: number
    province_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutCityInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput>
  }

  export type PosCreateManyCityInputEnvelope = {
    data: PosCreateManyCityInput | PosCreateManyCityInput[]
  }

  export type AreaCreateWithoutCityInput = {
    id?: string
    name: string
    created_at?: Date | string
    zone?: ZoneCreateNestedManyWithoutAreaInput
    Pos?: PosCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    created_at?: Date | string
    zone?: ZoneUncheckedCreateNestedManyWithoutAreaInput
    Pos?: PosUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutCityInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput>
  }

  export type AreaCreateManyCityInputEnvelope = {
    data: AreaCreateManyCityInput | AreaCreateManyCityInput[]
  }

  export type ProvinceUpsertWithoutCityInput = {
    update: XOR<ProvinceUpdateWithoutCityInput, ProvinceUncheckedUpdateWithoutCityInput>
    create: XOR<ProvinceCreateWithoutCityInput, ProvinceUncheckedCreateWithoutCityInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutCityInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutCityInput, ProvinceUncheckedUpdateWithoutCityInput>
  }

  export type ProvinceUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type PosUpsertWithWhereUniqueWithoutCityInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutCityInput, PosUncheckedUpdateWithoutCityInput>
    create: XOR<PosCreateWithoutCityInput, PosUncheckedCreateWithoutCityInput>
  }

  export type PosUpdateWithWhereUniqueWithoutCityInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutCityInput, PosUncheckedUpdateWithoutCityInput>
  }

  export type PosUpdateManyWithWhereWithoutCityInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutCityInput>
  }

  export type AreaUpsertWithWhereUniqueWithoutCityInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutCityInput, AreaUncheckedUpdateWithoutCityInput>
    create: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutCityInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutCityInput, AreaUncheckedUpdateWithoutCityInput>
  }

  export type AreaUpdateManyWithWhereWithoutCityInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutCityInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    city_id?: StringNullableFilter<"Area"> | string | null
    created_at?: DateTimeFilter<"Area"> | Date | string
  }

  export type ZoneCreateWithoutAreaInput = {
    id?: string
    zone_number: number
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutAreaInput = {
    id?: string
    zone_number: number
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutAreaInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput>
  }

  export type ZoneCreateManyAreaInputEnvelope = {
    data: ZoneCreateManyAreaInput | ZoneCreateManyAreaInput[]
  }

  export type PosCreateWithoutAreaInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutAreaInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutAreaInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput>
  }

  export type PosCreateManyAreaInputEnvelope = {
    data: PosCreateManyAreaInput | PosCreateManyAreaInput[]
  }

  export type CityCreateWithoutAreaInput = {
    id?: string
    name: string
    created_at?: Date | string
    Province: ProvinceCreateNestedOneWithoutCityInput
    Pos?: PosCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAreaInput = {
    id?: string
    name: string
    province_id: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutAreaInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAreaInput, CityUncheckedCreateWithoutAreaInput>
  }

  export type ZoneUpsertWithWhereUniqueWithoutAreaInput = {
    where: ZoneWhereUniqueInput
    update: XOR<ZoneUpdateWithoutAreaInput, ZoneUncheckedUpdateWithoutAreaInput>
    create: XOR<ZoneCreateWithoutAreaInput, ZoneUncheckedCreateWithoutAreaInput>
  }

  export type ZoneUpdateWithWhereUniqueWithoutAreaInput = {
    where: ZoneWhereUniqueInput
    data: XOR<ZoneUpdateWithoutAreaInput, ZoneUncheckedUpdateWithoutAreaInput>
  }

  export type ZoneUpdateManyWithWhereWithoutAreaInput = {
    where: ZoneScalarWhereInput
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyWithoutAreaInput>
  }

  export type ZoneScalarWhereInput = {
    AND?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
    OR?: ZoneScalarWhereInput[]
    NOT?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
    id?: StringFilter<"Zone"> | string
    zone_number?: IntFilter<"Zone"> | number
    area_id?: StringNullableFilter<"Zone"> | string | null
    created_at?: DateTimeFilter<"Zone"> | Date | string
  }

  export type PosUpsertWithWhereUniqueWithoutAreaInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutAreaInput, PosUncheckedUpdateWithoutAreaInput>
    create: XOR<PosCreateWithoutAreaInput, PosUncheckedCreateWithoutAreaInput>
  }

  export type PosUpdateWithWhereUniqueWithoutAreaInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutAreaInput, PosUncheckedUpdateWithoutAreaInput>
  }

  export type PosUpdateManyWithWhereWithoutAreaInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutAreaInput>
  }

  export type CityUpsertWithoutAreaInput = {
    update: XOR<CityUpdateWithoutAreaInput, CityUncheckedUpdateWithoutAreaInput>
    create: XOR<CityCreateWithoutAreaInput, CityUncheckedCreateWithoutAreaInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAreaInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAreaInput, CityUncheckedUpdateWithoutAreaInput>
  }

  export type CityUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Province?: ProvinceUpdateOneRequiredWithoutCityNestedInput
    Pos?: PosUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    province_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutCityNestedInput
  }

  export type AreaCreateWithoutZoneInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutAreaInput
    city?: CityCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutZoneInput = {
    id?: string
    name: string
    city_id?: string | null
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutZoneInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutZoneInput, AreaUncheckedCreateWithoutZoneInput>
  }

  export type PosCreateWithoutZoneInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutZoneInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutZoneInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput>
  }

  export type PosCreateManyZoneInputEnvelope = {
    data: PosCreateManyZoneInput | PosCreateManyZoneInput[]
  }

  export type AreaUpsertWithoutZoneInput = {
    update: XOR<AreaUpdateWithoutZoneInput, AreaUncheckedUpdateWithoutZoneInput>
    create: XOR<AreaCreateWithoutZoneInput, AreaUncheckedCreateWithoutZoneInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutZoneInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutZoneInput, AreaUncheckedUpdateWithoutZoneInput>
  }

  export type AreaUpdateWithoutZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutAreaNestedInput
    city?: CityUpdateOneWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    city_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type PosUpsertWithWhereUniqueWithoutZoneInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutZoneInput, PosUncheckedUpdateWithoutZoneInput>
    create: XOR<PosCreateWithoutZoneInput, PosUncheckedCreateWithoutZoneInput>
  }

  export type PosUpdateWithWhereUniqueWithoutZoneInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutZoneInput, PosUncheckedUpdateWithoutZoneInput>
  }

  export type PosUpdateManyWithWhereWithoutZoneInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutZoneInput>
  }

  export type PosCreateWithoutLicenceInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutLicenceInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutLicenceInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
  }

  export type AdministrationCreateWithoutLicenceInput = {
    id?: string
    name: string
    created_at?: Date | string
    pos?: PosCreateNestedManyWithoutAdministrationInput
  }

  export type AdministrationUncheckedCreateWithoutLicenceInput = {
    id?: string
    name: string
    created_at?: Date | string
    pos?: PosUncheckedCreateNestedManyWithoutAdministrationInput
  }

  export type AdministrationCreateOrConnectWithoutLicenceInput = {
    where: AdministrationWhereUniqueInput
    create: XOR<AdministrationCreateWithoutLicenceInput, AdministrationUncheckedCreateWithoutLicenceInput>
  }

  export type PosUpsertWithoutLicenceInput = {
    update: XOR<PosUpdateWithoutLicenceInput, PosUncheckedUpdateWithoutLicenceInput>
    create: XOR<PosCreateWithoutLicenceInput, PosUncheckedCreateWithoutLicenceInput>
    where?: PosWhereInput
  }

  export type PosUpdateToOneWithWhereWithoutLicenceInput = {
    where?: PosWhereInput
    data: XOR<PosUpdateWithoutLicenceInput, PosUncheckedUpdateWithoutLicenceInput>
  }

  export type PosUpdateWithoutLicenceInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutLicenceInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationUpsertWithoutLicenceInput = {
    update: XOR<AdministrationUpdateWithoutLicenceInput, AdministrationUncheckedUpdateWithoutLicenceInput>
    create: XOR<AdministrationCreateWithoutLicenceInput, AdministrationUncheckedCreateWithoutLicenceInput>
    where?: AdministrationWhereInput
  }

  export type AdministrationUpdateToOneWithWhereWithoutLicenceInput = {
    where?: AdministrationWhereInput
    data: XOR<AdministrationUpdateWithoutLicenceInput, AdministrationUncheckedUpdateWithoutLicenceInput>
  }

  export type AdministrationUpdateWithoutLicenceInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pos?: PosUpdateManyWithoutAdministrationNestedInput
  }

  export type AdministrationUncheckedUpdateWithoutLicenceInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pos?: PosUncheckedUpdateManyWithoutAdministrationNestedInput
  }

  export type SubtypeCreateWithoutTypeInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutSubtypeInput
  }

  export type SubtypeUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutSubtypeInput
  }

  export type SubtypeCreateOrConnectWithoutTypeInput = {
    where: SubtypeWhereUniqueInput
    create: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput>
  }

  export type SubtypeCreateManyTypeInputEnvelope = {
    data: SubtypeCreateManyTypeInput | SubtypeCreateManyTypeInput[]
  }

  export type PosCreateWithoutTypeInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutTypeInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutTypeInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput>
  }

  export type PosCreateManyTypeInputEnvelope = {
    data: PosCreateManyTypeInput | PosCreateManyTypeInput[]
  }

  export type SubtypeUpsertWithWhereUniqueWithoutTypeInput = {
    where: SubtypeWhereUniqueInput
    update: XOR<SubtypeUpdateWithoutTypeInput, SubtypeUncheckedUpdateWithoutTypeInput>
    create: XOR<SubtypeCreateWithoutTypeInput, SubtypeUncheckedCreateWithoutTypeInput>
  }

  export type SubtypeUpdateWithWhereUniqueWithoutTypeInput = {
    where: SubtypeWhereUniqueInput
    data: XOR<SubtypeUpdateWithoutTypeInput, SubtypeUncheckedUpdateWithoutTypeInput>
  }

  export type SubtypeUpdateManyWithWhereWithoutTypeInput = {
    where: SubtypeScalarWhereInput
    data: XOR<SubtypeUpdateManyMutationInput, SubtypeUncheckedUpdateManyWithoutTypeInput>
  }

  export type SubtypeScalarWhereInput = {
    AND?: SubtypeScalarWhereInput | SubtypeScalarWhereInput[]
    OR?: SubtypeScalarWhereInput[]
    NOT?: SubtypeScalarWhereInput | SubtypeScalarWhereInput[]
    id?: StringFilter<"Subtype"> | string
    name?: StringFilter<"Subtype"> | string
    type_id?: StringFilter<"Subtype"> | string
    created_at?: DateTimeFilter<"Subtype"> | Date | string
  }

  export type PosUpsertWithWhereUniqueWithoutTypeInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutTypeInput, PosUncheckedUpdateWithoutTypeInput>
    create: XOR<PosCreateWithoutTypeInput, PosUncheckedCreateWithoutTypeInput>
  }

  export type PosUpdateWithWhereUniqueWithoutTypeInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutTypeInput, PosUncheckedUpdateWithoutTypeInput>
  }

  export type PosUpdateManyWithWhereWithoutTypeInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutTypeInput>
  }

  export type TypeCreateWithoutSubtypeInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateWithoutSubtypeInput = {
    id?: string
    name: string
    created_at?: Date | string
    Pos?: PosUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeCreateOrConnectWithoutSubtypeInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutSubtypeInput, TypeUncheckedCreateWithoutSubtypeInput>
  }

  export type PosCreateWithoutSubtypeInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
    agent?: AgentCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutSubtypeInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutSubtypeInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput>
  }

  export type PosCreateManySubtypeInputEnvelope = {
    data: PosCreateManySubtypeInput | PosCreateManySubtypeInput[]
  }

  export type TypeUpsertWithoutSubtypeInput = {
    update: XOR<TypeUpdateWithoutSubtypeInput, TypeUncheckedUpdateWithoutSubtypeInput>
    create: XOR<TypeCreateWithoutSubtypeInput, TypeUncheckedCreateWithoutSubtypeInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutSubtypeInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutSubtypeInput, TypeUncheckedUpdateWithoutSubtypeInput>
  }

  export type TypeUpdateWithoutSubtypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateWithoutSubtypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type PosUpsertWithWhereUniqueWithoutSubtypeInput = {
    where: PosWhereUniqueInput
    update: XOR<PosUpdateWithoutSubtypeInput, PosUncheckedUpdateWithoutSubtypeInput>
    create: XOR<PosCreateWithoutSubtypeInput, PosUncheckedCreateWithoutSubtypeInput>
  }

  export type PosUpdateWithWhereUniqueWithoutSubtypeInput = {
    where: PosWhereUniqueInput
    data: XOR<PosUpdateWithoutSubtypeInput, PosUncheckedUpdateWithoutSubtypeInput>
  }

  export type PosUpdateManyWithWhereWithoutSubtypeInput = {
    where: PosScalarWhereInput
    data: XOR<PosUpdateManyMutationInput, PosUncheckedUpdateManyWithoutSubtypeInput>
  }

  export type PosCreateWithoutAgentInput = {
    id?: string
    id_reference: number
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    created_at?: Date | string
    licence?: LicenceCreateNestedOneWithoutPosInput
    province: ProvinceCreateNestedOneWithoutPosInput
    city: CityCreateNestedOneWithoutPosInput
    area: AreaCreateNestedOneWithoutPosInput
    zone: ZoneCreateNestedOneWithoutPosInput
    type: TypeCreateNestedOneWithoutPosInput
    subtype?: SubtypeCreateNestedOneWithoutPosInput
    administration?: AdministrationCreateNestedOneWithoutPosInput
  }

  export type PosUncheckedCreateWithoutAgentInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosCreateOrConnectWithoutAgentInput = {
    where: PosWhereUniqueInput
    create: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
  }

  export type TerminalCreateWithoutAgentInput = {
    id?: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at?: Date | string
  }

  export type TerminalUncheckedCreateWithoutAgentInput = {
    id?: string
    id_terminal: string
    serial: string
    sim_card: string
    created_at?: Date | string
  }

  export type TerminalCreateOrConnectWithoutAgentInput = {
    where: TerminalWhereUniqueInput
    create: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
  }

  export type RevisionCreateWithoutAgentInput = {
    id?: string
    image: string
    additional_info?: string | null
    items: InputJsonValue
    created_at?: Date | string
    updated_at: Date | string
  }

  export type RevisionUncheckedCreateWithoutAgentInput = {
    id?: string
    image: string
    additional_info?: string | null
    items: InputJsonValue
    created_at?: Date | string
    updated_at: Date | string
  }

  export type RevisionCreateOrConnectWithoutAgentInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
  }

  export type PosUpsertWithoutAgentInput = {
    update: XOR<PosUpdateWithoutAgentInput, PosUncheckedUpdateWithoutAgentInput>
    create: XOR<PosCreateWithoutAgentInput, PosUncheckedCreateWithoutAgentInput>
    where?: PosWhereInput
  }

  export type PosUpdateToOneWithWhereWithoutAgentInput = {
    where?: PosWhereInput
    data: XOR<PosUpdateWithoutAgentInput, PosUncheckedUpdateWithoutAgentInput>
  }

  export type PosUpdateWithoutAgentInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutAgentInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalUpsertWithoutAgentInput = {
    update: XOR<TerminalUpdateWithoutAgentInput, TerminalUncheckedUpdateWithoutAgentInput>
    create: XOR<TerminalCreateWithoutAgentInput, TerminalUncheckedCreateWithoutAgentInput>
    where?: TerminalWhereInput
  }

  export type TerminalUpdateToOneWithWhereWithoutAgentInput = {
    where?: TerminalWhereInput
    data: XOR<TerminalUpdateWithoutAgentInput, TerminalUncheckedUpdateWithoutAgentInput>
  }

  export type TerminalUpdateWithoutAgentInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalUncheckedUpdateWithoutAgentInput = {
    id_terminal?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    sim_card?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUpsertWithoutAgentInput = {
    update: XOR<RevisionUpdateWithoutAgentInput, RevisionUncheckedUpdateWithoutAgentInput>
    create: XOR<RevisionCreateWithoutAgentInput, RevisionUncheckedCreateWithoutAgentInput>
    where?: RevisionWhereInput
  }

  export type RevisionUpdateToOneWithWhereWithoutAgentInput = {
    where?: RevisionWhereInput
    data: XOR<RevisionUpdateWithoutAgentInput, RevisionUncheckedUpdateWithoutAgentInput>
  }

  export type RevisionUpdateWithoutAgentInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUncheckedUpdateWithoutAgentInput = {
    image?: StringFieldUpdateOperationsInput | string
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateWithoutRevisionInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosCreateNestedOneWithoutAgentInput
    terminal?: TerminalCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutRevisionInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosUncheckedCreateNestedOneWithoutAgentInput
    terminal?: TerminalUncheckedCreateNestedOneWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutRevisionInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutRevisionInput, AgentUncheckedCreateWithoutRevisionInput>
  }

  export type AgentUpsertWithoutRevisionInput = {
    update: XOR<AgentUpdateWithoutRevisionInput, AgentUncheckedUpdateWithoutRevisionInput>
    create: XOR<AgentCreateWithoutRevisionInput, AgentUncheckedCreateWithoutRevisionInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutRevisionInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutRevisionInput, AgentUncheckedUpdateWithoutRevisionInput>
  }

  export type AgentUpdateWithoutRevisionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUpdateOneWithoutAgentNestedInput
    terminal?: TerminalUpdateOneWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutRevisionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUncheckedUpdateOneWithoutAgentNestedInput
    terminal?: TerminalUncheckedUpdateOneWithoutAgentNestedInput
  }

  export type AgentCreateWithoutTerminalInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosCreateNestedOneWithoutAgentInput
    revision?: RevisionCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutTerminalInput = {
    id?: string
    first_name: string
    last_name: string
    agent_id: string
    phone: string
    afrimoney?: string | null
    status?: string | null
    pos?: PosUncheckedCreateNestedOneWithoutAgentInput
    revision?: RevisionUncheckedCreateNestedOneWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutTerminalInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutTerminalInput, AgentUncheckedCreateWithoutTerminalInput>
  }

  export type AgentUpsertWithoutTerminalInput = {
    update: XOR<AgentUpdateWithoutTerminalInput, AgentUncheckedUpdateWithoutTerminalInput>
    create: XOR<AgentCreateWithoutTerminalInput, AgentUncheckedCreateWithoutTerminalInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutTerminalInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutTerminalInput, AgentUncheckedUpdateWithoutTerminalInput>
  }

  export type AgentUpdateWithoutTerminalInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUpdateOneWithoutAgentNestedInput
    revision?: RevisionUpdateOneWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutTerminalInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    afrimoney?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: PosUncheckedUpdateOneWithoutAgentNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutAgentNestedInput
  }

  export type PosCreateManyAdministrationInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosUpdateWithoutAdministrationInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutAdministrationInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutAdministrationInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateManyProvinceInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type PosCreateManyProvinceInput = {
    id?: string
    id_reference: number
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type CityUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutCityNestedInput
    area?: AreaUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutCityNestedInput
    area?: AreaUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUpdateWithoutProvinceInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutProvinceInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutProvinceInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosCreateManyCityInput = {
    id?: string
    id_reference: number
    province_id: string
    area_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type AreaCreateManyCityInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type PosUpdateWithoutCityInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutCityInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutCityInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateManyWithoutAreaNestedInput
    Pos?: PosUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUncheckedUpdateManyWithoutAreaNestedInput
    Pos?: PosUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneCreateManyAreaInput = {
    id?: string
    zone_number: number
    created_at?: Date | string
  }

  export type PosCreateManyAreaInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    zone_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type ZoneUpdateWithoutAreaInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutAreaInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateManyWithoutAreaInput = {
    zone_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUpdateWithoutAreaInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutAreaInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutAreaInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosCreateManyZoneInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    type_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosUpdateWithoutZoneInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutZoneInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutZoneInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtypeCreateManyTypeInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type PosCreateManyTypeInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    subtype_id?: string | null
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type SubtypeUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUpdateManyWithoutSubtypeNestedInput
  }

  export type SubtypeUncheckedUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Pos?: PosUncheckedUpdateManyWithoutSubtypeNestedInput
  }

  export type SubtypeUncheckedUpdateManyWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUpdateWithoutTypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    subtype?: SubtypeUpdateOneWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutTypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutTypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    subtype_id?: NullableStringFieldUpdateOperationsInput | string | null
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosCreateManySubtypeInput = {
    id?: string
    id_reference: number
    province_id: string
    city_id: string
    area_id: string
    zone_id: string
    type_id: string
    administration_id?: string | null
    agent_id?: string | null
    status?: boolean
    coordinates?: PosCreatecoordinatesInput | string[]
    licence_id?: string | null
    created_at?: Date | string
  }

  export type PosUpdateWithoutSubtypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    licence?: LicenceUpdateOneWithoutPosNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPosNestedInput
    city?: CityUpdateOneRequiredWithoutPosNestedInput
    area?: AreaUpdateOneRequiredWithoutPosNestedInput
    zone?: ZoneUpdateOneRequiredWithoutPosNestedInput
    type?: TypeUpdateOneRequiredWithoutPosNestedInput
    administration?: AdministrationUpdateOneWithoutPosNestedInput
    agent?: AgentUpdateOneWithoutPosNestedInput
  }

  export type PosUncheckedUpdateWithoutSubtypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosUncheckedUpdateManyWithoutSubtypeInput = {
    id_reference?: IntFieldUpdateOperationsInput | number
    province_id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    zone_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    administration_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: PosUpdatecoordinatesInput | string[]
    licence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}