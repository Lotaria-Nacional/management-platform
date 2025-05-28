import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      await prisma.agent.create({
        data: {
          agent_id: agent.props.agent_id,
          city: agent.props.city,
          first_name: agent.props.first_name,
          last_name: agent.props.last_name,
          phone: agent.props.phone,
          province: agent.props.province,
          status: agent.props.status,
          zone: agent.props.zone,
          afrimoney: agent.props.afrimoney,
        },
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
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
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

  async fetchMany() {
    const agents = await prisma.agent.findMany({
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
    })

    return agents.map(
      ({
        afrimoney,
        agent_id,
        city,
        first_name,
        id,
        last_name,
        phone,
        province,
        status,
        zone,
        pos,
      }) =>
        Agent.create(
          {
            afrimoney,
            agent_id,
            city,
            first_name,
            last_name,
            phone,
            province,
            status,
            zone,
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
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
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
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
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
}
