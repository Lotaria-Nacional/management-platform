import { PaginationParams } from "@/core/types/params"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"
import { TerminalMapper } from "../../mappers/terminal-mapper"

export class PrismaTerminalRepository implements ITerminalRepository {
  async create(terminal: Terminal) {
    await prisma.$transaction(async (tx) => {
      await tx.terminal.create({
        data: TerminalMapper.toPrismaCreate(terminal)
      })
    })
  }

  async save(terminal: Terminal) {
    await prisma.$transaction(async (tx) => {
      await tx.terminal.update({
        where: { id: terminal.id },
        data: TerminalMapper.toPrismaUpdate(terminal)
      })
    })
  }

  async delete(id: string) {
    await prisma.terminal.delete({ where: { id } })
  }

  async getById(id: string) {
    const terminal = await prisma.terminal.findUnique({
      where: { id: id },
      include: {
        agent: true,
      },
    })

    if (!terminal) return null

    return TerminalMapper.toDomain(terminal)
  }

  async saveMany(terminals: Terminal[]) {}

  async fetchMany({ limit, page }: PaginationParams) {
    const terminals = await prisma.terminal.findMany({
      skip: page,
      take: limit,
      include: {
        agent: true,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return terminals.map((terminal)=> TerminalMapper.toDomain(terminal))
  }
  async countAll(): Promise<number> {
    return await prisma.terminal.count()
  }
}
