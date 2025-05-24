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
          licence: { connect: { id: data.licence.id } },
          province: { connect: { id: data.province.id } },
          administration: { connect: { id: data.administration?.id } },
          subtype: data.subtype?.id
            ? { connect: { id: data.subtype.id } }
            : undefined,
          agent: data.agent.id ? { connect: { id: data.agent.id } } : undefined,
        },
      })
    })
  }

  async fetchMany() {
    const allPos = await prisma.pos.findMany({
      orderBy: {
        created_at: "desc",
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
          coordinates: [1213, 1398139],
          id_reference: pos.id_reference,
          agent: { id: pos.agent?.id ?? "" },
          type: { id: pos.type.id, name: pos.type.name },
          area: { id: pos.area.id, name: pos.area.name },
          city: { id: pos.city.id, name: pos.city.name },
          subtype: pos.subtype
            ? { id: pos.subtype.id, name: pos.subtype.name }
            : undefined,
          province: { id: pos.province.id, name: pos.province.name },
          licence: { id: pos.licence.id, status: pos.licence.status },
          zone: { id: pos.zone_id, zone_number: pos.zone.zone_number },
          administration: {
            id: pos.administration.id,
            name: pos.administration.name,
          },
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
        coordinates: [1213, 1398139],
        id_reference: pos.id_reference,
        agent: { id: pos.agent?.id ?? "" },
        type: { id: pos.type.id, name: pos.type.name },
        area: { id: pos.area.id, name: pos.area.name },
        city: { id: pos.city.id, name: pos.city.name },
        subtype: pos.subtype
          ? { id: pos.subtype.id, name: pos.subtype.name }
          : undefined,
        province: { id: pos.province.id, name: pos.province.name },
        licence: { id: pos.licence.id, status: pos.licence.status },
        zone: { id: pos.zone_id, zone_number: pos.zone.zone_number },
        administration: {
          id: pos.administration.id,
          name: pos.administration.name,
        },
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
          licence: { connect: { id: data.licence.id } },
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
}
