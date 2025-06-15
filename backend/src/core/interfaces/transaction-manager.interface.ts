import { Prisma } from "generated/prisma"

export interface ITransactionManager {
  runInTransaction<T>(
    fn: (tx: Prisma.TransactionClient) => Promise<T>
  ): Promise<T>
}
