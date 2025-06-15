import { PaginationParams } from "@/core/types/params"
import { TerminalMapper } from "../../mappers/terminal-mapper"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"
import { TerminalExtraFilters } from "@/domain/terminal/application/use-cases/fetch-many-terminals.useCase"

export class PrismaTerminalRepository implements ITerminalRepository {
  async create(terminal: Terminal) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.terminal.create({
          data: TerminalMapper.toPersistence(terminal),
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
          include: {
            area: true,
            city: true,
            zone: true,
            agent: true,
            province: true,
          },
          data: TerminalMapper.toPersistence(terminal),
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
      console.error(error)
    }
  }

  async getById(id: string) {
    const terminal = await prisma.terminal.findUnique({
      where: { id: id },
      include: {
        agent: {
          include: {
            area: true,
            zone: true,
            type: true,
          },
        },
      },
    })

    if (!terminal) return null

    return TerminalMapper.toDomain(terminal)
  }

  async fetchMany({
    limit = 10,
    page = 0,
    area_id,
    city_id,
    province_id,
    type_id,
    zone_id,
  }: PaginationParams & TerminalExtraFilters) {
    const where: any = {
      ...(area_id && { area_id }),
      ...(zone_id && { zone_id }),
      ...(city_id && { city_id }),
      ...(province_id && { province_id }),
      ...(type_id && { type_id }),
    }

    const terminals = await prisma.terminal.findMany({
      skip: page,
      take: limit,
      where,
      include: {
        area: true,
        city: true,
        zone: true,
        province: true,
        agent: {
          include: {
            area: true,
            zone: true,
            type: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return terminals.map((terminal) => TerminalMapper.toDomain(terminal))
  }
  async countAll(params?: TerminalExtraFilters): Promise<number> {
    return await prisma.terminal.count({
      where: {
        ...params,
      },
    })
  }
}
