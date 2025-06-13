import { PaginationParams } from "@/core/types/params"
import { TerminalMapper } from "../../mappers/terminal-mapper"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"

export class PrismaTerminalRepository implements ITerminalRepository {
  async create(terminal: Terminal) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.terminal.create({
          data: TerminalMapper.toPrismaCreate(terminal)
        })
      })
    } catch (error) {
        console.error(error)      
    }
  }

  async save(terminal: Terminal) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.terminal.update({
          where: { id: terminal.id },
          data: TerminalMapper.toPrismaUpdate(terminal)
        })
      })
    } catch (error) {
      console.error(error)      
    }
  }

  async delete(id: string) {
    try {
      await prisma.terminal.delete({ where: { id } })
    } catch (error) {
      console.error(error);
            
    }
  }

  async getById(id: string) {
    const terminal = await prisma.terminal.findUnique({
      where: { id: id },
      include: {
        agent: {
          include:{
            area:true,
            zone:true,
            type:true,
          }
        },
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
        agent: {
          include:{
            area:true,
            zone:true,
            type:true,
          }
        },
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
