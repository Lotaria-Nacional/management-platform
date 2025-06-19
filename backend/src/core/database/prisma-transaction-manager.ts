import { PrismaClient,Prisma } from '@prisma/client'
import { ITransactionManager } from '../interfaces/transaction-manager.interface'

export class PrismaTransactionManager implements ITransactionManager {
  constructor(private prisma: PrismaClient) {}

  async runInTransaction<T>(operation: (tx: PrismaClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(async (tx:any) => {
      return operation(tx);
    });
  }
}