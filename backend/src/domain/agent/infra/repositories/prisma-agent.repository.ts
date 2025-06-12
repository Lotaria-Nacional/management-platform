import { AgentMapper } from "../mappers/agent-mapper"
import { PaginationParams } from "@/core/types/params"
import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.create({
          data: AgentMapper.toPrismaCreate(agent),
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id: string): Promise<Agent | null> {
    const agent = await prisma.agent.findUnique({
      where:{ id },
      include:{
        pos:true,
        terminal:true,
        supervision:true,
      }
    })

    if(!agent){
      return null
    }

    return AgentMapper.toDomain(agent)
  }

  async fetchMany({
  limit,
  page,
  area_id,
  zone_id,
}: PaginationParams & { area_id?: string; zone_id?: string }) {
  const agents = await prisma.agent.findMany({
    skip: page,
    take: limit,
    orderBy: {
      id_reference: "asc",
    },
    where: {
      pos: {
          area_id,
          zone_id,
      },
    },
    include: {
      supervision: true,
      terminal: true,
      pos: {
        include: {
          area: true,
          zone: true,
          province: true,
        },
      },
    },
  });

  return agents.map((agent) => AgentMapper.toDomain(agent));
}


  async save(agent: Agent) {
    await prisma.$transaction(async (tx) => {
      await tx.agent.update({
        where: { id: agent.id },
        data: AgentMapper.toPrismaUpdate(agent)
      })
    })
  }

  async countAll() {
    return prisma.agent.count()
  }
}
