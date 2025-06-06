import { PaginationParams } from "@/core/types/params"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"

export class PrismaTerminalRepository implements ITerminalRepository {
  async create(terminal: Terminal) {
    await prisma.$transaction(async (tx) => {
      await tx.terminal.create({
        data: {
          id_terminal: terminal.props.id_terminal,
          serial: terminal.props.serial,
          sim_card: terminal.props.sim_card,
          agent: terminal.agent_id
            ? { connect: { id: terminal.agent_id } }
            : undefined,
        },
      })
    })
  }

  async save(terminal: Terminal) {
    await prisma.$transaction(async (tx) => {
      await tx.terminal.update({
        where: {
          id: terminal.id,
        },
        data: {
          sim_card: terminal.props.sim_card,
          serial: terminal.props.serial,
          id_terminal: terminal.props.id_terminal,
          created_at: terminal.props.created_at,
          agent: terminal.props.agent_id
            ? { connect: { id: terminal.props.agent_id } }
            : undefined,
        },
      })
    })
  }

  async delete(id: string) {
    await prisma.terminal.delete({ where: { id } })
  }

  async getById(id: string) {
    const terminal = await prisma.terminal.findUnique({
      where: { id: id },
      include: {
        agent: true,
      },
    })

    if (!terminal) return null

    return Terminal.create(
      {
        agent_id: terminal.agent_id ?? undefined,
        serial: terminal.serial,
        id_terminal: terminal.id_terminal,
        sim_card: terminal.sim_card,
        created_at: terminal.created_at,
        agent: terminal.agent
          ? {
              id: terminal.agent.id,
              agent_id: terminal.agent.agent_id,
              first_name: terminal.agent.first_name,
              last_name: terminal.agent.last_name,
            }
          : undefined,
      },
      terminal.id
    )
  }

  async saveMany(terminals: Terminal[]) {}

  async fetchMany({ limit, page }: PaginationParams) {
    const terminals = await prisma.terminal.findMany({
      skip: page,
      take: limit,
      include: {
        agent: true,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return terminals.map((t) =>
      Terminal.create(
        {
          agent_id: t.agent_id ?? undefined,
          id_terminal: t.id_terminal,
          serial: t.serial,
          sim_card: t.sim_card,
          agent: t.agent
            ? {
                id: t.id,
                status: t.agent.status,
                agent_id: t.agent_id ?? undefined,
                first_name: t.agent.first_name,
                last_name: t.agent.last_name,
              }
            : undefined,
          created_at: t.created_at,
        },
        t.id
      )
    )
  }
  async countAll(): Promise<number> {
    return await prisma.terminal.count()
  }
}
