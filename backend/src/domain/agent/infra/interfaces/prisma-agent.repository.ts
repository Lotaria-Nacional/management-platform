import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"
import { PaginationParams } from "@/core/types/params"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      await prisma.$transaction(async (tx) => {
        await tx.agent.create({
          data: {
            agent_id: agent.props.agent_id,
            first_name: agent.props.first_name,
            last_name: agent.props.last_name,
            phone: agent.props.phone,
            status: agent.props.status,
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
        agent_id: existingAgent.agent_id,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        status: existingAgent.status,
        afrimoney: existingAgent.afrimoney,

        terminal: existingAgent.terminal
          ? {
              id: existingAgent.terminal.id,
              id_terminal: existingAgent.terminal.id_terminal,
              serial: existingAgent.terminal.serial,
              sim_card: existingAgent.terminal.serial,
              created_at: existingAgent.terminal.created_at,
            }
          : undefined,
      },
      existingAgent.id
    )
  }

  async fetchMany({skip, take}:PaginationParams) {
    const agents = await prisma.agent.findMany({
      skip,
      take,
      orderBy: {
        agent_id: "asc",
      },
      include: {
        revision: true,
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

    return agents.map(
      ({
        afrimoney,
        agent_id,
        first_name,
        id,
        last_name,
        phone,
        status,
        pos,
        revision,
      }) =>
        Agent.create(
          {
            afrimoney,
            agent_id,
            first_name,
            last_name,
            phone,
            status,
            revision: revision
              ? {
                  id: revision.id,
                  additional_info: revision.additional_info,
                  image: revision.image,
                  items: revision.items as Record<string, boolean>,
                }
              : undefined,
            pos: pos
              ? {
                  id: pos.id,
                  area: { id: pos.area.id, name: pos.area.name },
                  province: { id: pos.province.id, name: pos.province.name },
                  zone: { id: pos.zone.id, zone_number: pos.zone.zone_number },
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
        revision: true,
        pos: true,
      },
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        agent_id: existingAgent.agent_id,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        status: existingAgent.status,
        afrimoney: existingAgent.afrimoney,
        revision: existingAgent.revision
          ? {
              ...existingAgent.revision,
              items: existingAgent.revision.items as Record<string, boolean>,
            }
          : undefined,
      },
      existingAgent.id
    )
  }

  async getLast() {
    const existingAgent = await prisma.agent.findFirst({
      orderBy: {
        agent_id: "desc",
      },
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        agent_id: existingAgent.agent_id,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        status: existingAgent.status,
        afrimoney: existingAgent.afrimoney,
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
          afrimoney: data.afrimoney,
          agent_id: data.agent_id,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          status: data.status,
          pos: data.pos_id ? { connect: { id: data.pos_id } } : undefined,
          terminal: data.terminal?.id
            ? { connect: { id: data.terminal.id } }
            : undefined,
        },
      })
    })
  }

  async saveMany(agents: Agent[]) {}

  async countAll() {
    return prisma.agent.count();
  }
}
