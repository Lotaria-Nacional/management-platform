import { AgentMapper } from "../mappers/agent-mapper"
import { PaginationParams } from "@/core/types/params"
import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"
import { AgentExtraFilter } from "../../application/use-cases/agent/fetch-many-agents.useCase"
import { AgentStatus } from "../../enterprise/enums/agent-status"
import { AgentType } from "../../enterprise/enums/agent-type"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.create({
          data: AgentMapper.toPrisma(agent),
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id: string): Promise<Agent | null> {
    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        terminal: true,
        pos: {
          include: {
            area: true,
            zone: true,
            type: true,
            city: true,
            province: true,
            subtype: true,
            licence: true,
            administration: true,
          },
        },
      },
    })

    if (!agent) {
      return null
    }

    return AgentMapper.toDomain(agent)
  }

  async fetchMany({
    limit = 10,
    page = 0,
    area_id,
    zone_id,
    city_id,
    province_id,
    status,
    type_id,
  }: PaginationParams & AgentExtraFilter) {
    const where: any = {
      ...(status && { status }),
      ...(city_id && { city_id }),
      ...(province_id && { province_id }),
      ...(type_id && { type_id }),
    }

    // Filtros relacionados ao POS (evita criar pos se não houver nenhum dos dois)
    if (area_id || zone_id) {
      where.pos = {
        ...(area_id && { area_id }),
        ...(zone_id && { zone_id }),
      }
    }

    const agents = await prisma.agent.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id_reference: "asc",
      },
      where,
      include: {
        terminal: true,
        pos: {
          include: {
            area: true,
            zone: true,
            type: true,
            city: true,
            subtype: true,
            province: true,
          },
        },
      },
    })

    return agents.map((agent) => AgentMapper.toDomain(agent))
  }

  async save(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.update({
          where: { id: agent.id },
          include: {
            area: true,
            city: true,
            pos: {
              include: {
                province: true,
                type: true,
                zone: true,
              },
            },
            terminal: true,
          },

          data: AgentMapper.toPrisma(agent),
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async countAll({
    area_id,
    zone_id,
    city_id,
    province_id,
    status,
    type_id,
  }: AgentExtraFilter = {}) {
    return prisma.agent.count({
      where: {
        status,
        type_id,
        city_id,
        province_id,
        pos: {
          area_id,
          zone_id,
        },
      },
    })
  }
}
