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
        revision,
        terminal,
      }) =>
        Agent.create(
          {
            afrimoney,
            agent_id,
            city,
            first_name,
            last_name,
            phone,
            revision: revision
              ? {
                  ...revision,
                  items: revision.items as Record<string, boolean>,
                }
              : undefined,
            province,
            status,
            zone,
            terminal: terminal
              ? {
                  id_terminal: terminal.id_terminal,
                  serial: terminal.serial,
                  sim_card: terminal.serial,
                  created_at: terminal.created_at,
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

  async save({
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
  }: Agent) {
    await prisma.agent.update({
      where: { id },
      data: {
        afrimoney,
        agent_id,
        city,
        first_name,
        last_name,
        phone,
        province,
        status,
        zone,
      },
    })
  }

  async saveMany(agents: Agent[]) {}
}
