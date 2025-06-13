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
          data: AgentMapper.toPrisma(agent),
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
        terminal:true,
        pos:{
          include:{
            area:true,
            zone:true,
            type:true,
            city:true,
            province:true,
            subtype:true,
            licence:true,
            administration:true
          }
        },
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
      terminal: true,
      pos: {
        include: {
          area:true,
          zone:true,
          type:true,
          city:true,
          subtype:true,
          province:true,
        },
      },
    },
  });

  return agents.map((agent) => AgentMapper.toDomain(agent));
}


  async save(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.update({
          where: { id: agent.id },
          data: AgentMapper.toPrisma(agent)
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  async countAll() {
    return prisma.agent.count()
  }
}
