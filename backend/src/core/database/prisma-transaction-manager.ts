// src/core/infra/database/prisma/prisma-transaction-manager.ts
import { Prisma, PrismaClient } from "generated/prisma"
import { ITransactionManager } from "@/core/interfaces/transaction-manager.interface"
import { prisma } from "../infra/database/prisma/prisma.config"

export class PrismaTransactionManager implements ITransactionManager {
  async runInTransaction<T>(
    fn: (tx: Prisma.TransactionClient) => Promise<T>
  ): Promise<T> {
    return prisma.$transaction(async (tx) => {
      return await fn(tx)
    })
  }
}
