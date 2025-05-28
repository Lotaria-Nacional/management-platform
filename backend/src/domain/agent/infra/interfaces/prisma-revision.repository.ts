import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Revision } from "../../enterprise/entities/revision.entity"
import { IRevisionRepository } from "../../application/interfaces/revision-repository.interface"

export class PrismaRevisionRepository implements IRevisionRepository {
  async create(revision: Revision) {
    return await prisma.$transaction(async (tx) => {
      await tx.revision.create({
        data: {
          items: revision.props.items,
          image: revision.props.image,
          additional_info: revision.props.additional_info,
          updated_at: revision.props.updated_at ?? new Date(),
          agent: { connect: { id: revision.props.agent_id } },
        },
      })
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.$transaction(async (tx) => {
      await tx.revision.delete({ where: { id } })
    })
  }

  async fetchMany() {
    const revisions = await prisma.revision.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        agent: true,
      },
    })

    return revisions.map((data) =>
      Revision.create(
        {
          additional_info: data.additional_info,
          agent_id: data.agent_id,
          image: data.image,
          items: data.items as Record<string, boolean>,
          created_at: data.created_at,
          updated_at: data.updated_at,
          agent: data.agent?.id
            ? {
                id: data.agent.id,
                first_name: data.agent.first_name,
                last_name: data.agent.last_name,
              }
            : undefined,
        },
        data.id
      )
    )
  }

  async getById(id: string) {
    const existingRevision = await prisma.revision.findUnique({
      where: {
        id,
      },
      include: {
        agent: true,
      },
    })

    if (!existingRevision) return null

    const {
      additional_info,
      agent_id,
      created_at,
      image,
      items,
      updated_at,
      agent,
      id: revId,
    } = existingRevision

    return Revision.create(
      {
        additional_info,
        agent_id,
        image,
        items: items as Record<string, boolean>,
        created_at,
        updated_at,
        agent: agent?.id
          ? {
              id: agent.id,
              first_name: agent.first_name,
              last_name: agent.last_name,
            }
          : undefined,
      },
      revId
    )
  }

  async save(data: Revision) {}
}
