import { PaginationParams } from "@/core/types/params"
import { AgentType } from "../../enterprise/enums/agent-type"
import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.create({
          data: {
            id_reference: agent.props.id_reference,
            first_name: agent.props.first_name,
            last_name: agent.props.last_name,
            phone: agent.props.phone,
            status: agent.props.status,
            type: agent.props.type,
            afrimoney: agent.props.afrimoney,
            pos: agent.props.pos_id
              ? { connect: { id: agent.props.pos_id } }
              : undefined,
          },
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async findByAgentId(id: string) {
      const existingAgent = await prisma.agent.findUnique({
        where: {
          id,
        },
        include: {
          terminal: true,
        },
      })
  
      if (!existingAgent) return null
  
      return Agent.create(
        {
          id_reference: existingAgent.id_reference,
          first_name: existingAgent.first_name,
          last_name: existingAgent.last_name,
          phone: existingAgent.phone,
          status: existingAgent.status,
          afrimoney: existingAgent.afrimoney,
          type:existingAgent.type as AgentType,
          terminal: existingAgent.terminal
            ? {
                id: existingAgent.terminal.id,
                serial: existingAgent.terminal.serial,
                sim_card: existingAgent.terminal.sim_card,
                created_at: existingAgent.terminal.created_at,
                id_reference: existingAgent.terminal.id_reference,
              }
            : undefined,
        },
        existingAgent.id
      )
 
  }

  async fetchMany({ limit, page }: PaginationParams) {
    const agents = await prisma.agent.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id_reference: "asc",
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
    })

    return agents.map(
      ({
        id,
        pos,
        phone,
        status,
        type,
        terminal,
        afrimoney,
        last_name,
        first_name,
        supervision,
        id_reference,
      }) =>
        Agent.create(
          {
            phone,
            status,
            last_name,
            afrimoney,
            first_name,
            id_reference,
            type: type as AgentType,
            
            terminal: terminal ? {
              id:terminal.id,
              serial:terminal.serial,
              sim_card:terminal.sim_card
            } : undefined,
           
            pos: pos
              ? {
                  id: pos.id,
                  area: { id: pos.area.id, name: pos.area.name },
                  province: { id: pos.province.id, name: pos.province.name },
                  zone: { id: pos.zone.id, value: pos.zone.value },
                }
              : undefined,
          },
          id
        )
    )
  }

  async findById(id: string) {
    const existingAgent = await prisma.agent.findUnique({
      where: {
        id,
      },
      include: {
        supervision: true,
        pos: true,
      },
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        id_reference: existingAgent.id_reference,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        status: existingAgent.status,
        afrimoney: existingAgent.afrimoney,
        type:existingAgent.type as AgentType,
        supervision: existingAgent.supervision
          ? {
            ...existingAgent.supervision,
              image: existingAgent.supervision.image,
              items: existingAgent.supervision.items as Record<string, boolean>,
            }
          : undefined,
      },
      existingAgent.id
    )
  }

  async getLast() {
    const existingAgent = await prisma.agent.findFirst({
      orderBy: {
        id_reference: "desc",
      },
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        phone: existingAgent.phone,
        status: existingAgent.status,
        afrimoney: existingAgent.afrimoney,
        last_name: existingAgent.last_name,
        first_name: existingAgent.first_name,
        id_reference: existingAgent.id_reference,
        type:existingAgent.type as AgentType,
      },
      existingAgent.id
    )
  }

  async save(props: Agent) {
    const data = props.toJSON()
    await prisma.$transaction(async (tx) => {
      await tx.agent.update({
        where: { id: data.id },
        data: {
          phone: data.phone,
          status: data.status,
          last_name: data.last_name,
          afrimoney: data.afrimoney,
          first_name: data.first_name,
          id_reference: data.id_reference,
          pos: data.pos_id ? { connect: { id: data.pos_id } } : undefined,
          terminal: data.terminal?.id ? { connect: { id: data.terminal.id } } : undefined }
      })
    })
  }

  async countAll() {
    return prisma.agent.count()
  }
}
