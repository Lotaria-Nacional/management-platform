import { Agent } from "../../enterprise/entities/agent.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface"

export class PrismaAgentRepository implements IAgentRepository {
  async create(agent: Agent) {
    try {
      console.log("REPO: ", agent)
      await prisma.agent.create({
        data: {
          agent_id: agent.props.agent_id,
          area: agent.props.area,
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
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        agent_id: existingAgent.agent_id,
        area: existingAgent.area,
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
        afrimoney: existingAgent.afrimoney,
        terminal: existingAgent.terminal_id ?? null,
      },
      existingAgent.id
    )
  }

  async fetchMany() {
    const agents = await prisma.agent.findMany({
      orderBy: {
        agent_id: "asc",
      },
    })

    return agents.map(
      ({
        afrimoney,
        agent_id,
        area,
        city,
        first_name,
        id,
        last_name,
        phone,
        province,
        status,
        terminal_id,
        zone,
      }) =>
        Agent.create(
          {
            afrimoney,
            agent_id,
            area,
            city,
            first_name,
            last_name,
            phone,
            province,
            status,
            zone,
            terminal: terminal_id,
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
    })

    if (!existingAgent) return null

    return Agent.create(
      {
        agent_id: existingAgent.agent_id,
        area: existingAgent.area,
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
        afrimoney: existingAgent.afrimoney,
        terminal: existingAgent.terminal_id ?? null,
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
        area: existingAgent.area,
        city: existingAgent.city,
        first_name: existingAgent.first_name,
        last_name: existingAgent.last_name,
        phone: existingAgent.phone,
        province: existingAgent.province,
        status: existingAgent.status,
        zone: existingAgent.zone,
        afrimoney: existingAgent.afrimoney,
        terminal: existingAgent.terminal_id ?? null,
      },
      existingAgent.id
    )
  }

  async save({
    afrimoney,
    agent_id,
    area,
    city,
    first_name,
    id,
    last_name,
    phone,
    province,
    status,
    terminal,
    zone,
  }: Agent) {
    await prisma.agent.update({
      where: { id },
      data: {
        afrimoney,
        agent_id,
        area,
        city,
        first_name,
        last_name,
        phone,
        province,
        status,
        terminal_id: terminal,
        zone,
      },
    })
  }

  async saveMany(agents: Agent[]) {}
}
