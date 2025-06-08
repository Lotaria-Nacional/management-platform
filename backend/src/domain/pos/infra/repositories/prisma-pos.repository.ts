import { PaginationParams } from "@/core/types/params"
import { Pos } from "../../enterprise/entities/pos.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IPosRepository } from "../../application/interfaces/pos-repository.interface"

export class PrismaPosRepository implements IPosRepository {
  async create(pos: Pos): Promise<void> {
    const data = pos.toJSON()

    await prisma.$transaction(async (tx) => {
      await tx.pos.create({
        data: {
          id_reference: data.id_reference,
          coordinates: data.coordinates,
          status: data.status,
          type: { connect: { id: data.type.id } },
          city: { connect: { id: data.city.id } },
          area: { connect: { id: data.area.id } },
          zone: { connect: { id: data.zone.id } },
          licence: data.licence?.id
            ? { connect: { id: data.licence?.id } }
            : undefined,
          province: { connect: { id: data.province.id } },
          administration: data.administration?.id
            ? { connect: { id: data.administration.id } }
            : undefined,
          subtype: data.subtype?.id
            ? { connect: { id: data.subtype.id } }
            : undefined,
          agent: data.agent.id ? { connect: { id: data.agent.id } } : undefined,
        },
      })
    })
  }

  async fetchMany({ page, limit }: PaginationParams) {
    const allPos = await prisma.pos.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id_reference: "asc",
      },
      include: {
        type: true,
        city: true,
        zone: true,
        area: true,
        agent: true,
        subtype: true,
        licence: true,
        province: true,
        administration: true,
      },
    })

    return allPos.map((pos) =>
      Pos.create(
        {
          status: pos.status,
          coordinates: pos.coordinates,
          id_reference: pos.id_reference,
          agent: pos.agent?.id
            ? {
                id: pos.agent?.id,
                agent_id: pos.agent?.agent_id,
                phone: pos.agent?.phone,
                first_name: pos.agent?.first_name,
                last_name: pos.agent?.last_name,
              }
            : { id: "" },
          type: { id: pos.type.id, name: pos.type.name },
          area: { id: pos.area.id, name: pos.area.name },
          city: { id: pos.city.id, name: pos.city.name },
          subtype: pos.subtype
            ? { id: pos.subtype.id, name: pos.subtype.name }
            : undefined,
          province: { id: pos.province.id, name: pos.province.name },
          licence: pos.licence
            ? {
                id: pos.licence?.id,
                status: pos.licence?.status,
                reference_id: pos.licence.reference_id,
              }
            : undefined,
          zone: { id: pos.zone_id, zone_number: pos.zone.zone_number },
          administration: pos.administration
            ? {
                id: pos.administration.id,
                name: pos.administration.name,
              }
            : undefined,
        },
        pos.id
      )
    )
  }

  async getById(id: string) {
    const pos = await prisma.pos.findUnique({
      where: { id },
      include: {
        type: true,
        city: true,
        zone: true,
        area: true,
        agent: true,
        subtype: true,
        licence: true,
        province: true,
        administration: true,
      },
    })

    if (!pos) return null

    return Pos.create(
      {
        status: pos.status,
        coordinates: pos.coordinates,
        id_reference: pos.id_reference,
        agent: { id: pos.agent?.id ?? "" },
        type: { id: pos.type.id, name: pos.type.name },
        area: { id: pos.area.id, name: pos.area.name },
        city: { id: pos.city.id, name: pos.city.name },
        subtype: pos.subtype
          ? { id: pos.subtype.id, name: pos.subtype.name }
          : undefined,
        province: { id: pos.province.id, name: pos.province.name },
        licence: pos?.licence?.id
          ? { id: pos?.licence.id, status: pos?.licence.status }
          : undefined,
        zone: { id: pos.zone_id, zone_number: pos.zone.zone_number },
        administration: pos.administration?.id
          ? {
              id: pos.administration.id,
              name: pos.administration.name,
            }
          : undefined,
      },
      pos.id
    )
  }

  async save(pos: Pos) {
    const data = pos.toJSON()
    await prisma.$transaction(async (tx) => {
      await tx.pos.update({
        where: { id: pos.id },
        data: {
          id_reference: data.id_reference,
          coordinates: data.coordinates,
          status: data.status,
          type: { connect: { id: data.type.id } },
          city: { connect: { id: data.city.id } },
          area: { connect: { id: data.area.id } },
          zone: { connect: { id: data.zone.id } },
          licence: data?.licence?.id
            ? { connect: { id: data?.licence.id } }
            : undefined,
          province: { connect: { id: data.province.id } },
          administration: data.administration?.id
            ? { connect: { id: data.administration.id } }
            : undefined,
          subtype: data.subtype?.id
            ? { connect: { id: data.subtype.id } }
            : undefined,
          agent: data.agent.id ? { connect: { id: data.agent.id } } : undefined,
        },
      })
    })
  }

  async delete(id: string) {
    await prisma.pos.delete({
      where: { id },
    })
  }

  async countAll(): Promise<number> {
    return await prisma.pos.count()
  }
}
