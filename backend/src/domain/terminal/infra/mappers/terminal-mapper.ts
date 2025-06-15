import { Prisma } from "generated/prisma"
import { Terminal } from "../../enterprise/entities/terminal.entity"

type PrismaTerminalWithRelations = Prisma.TerminalGetPayload<{
  include: {
    agent: {
      include: {
        type: true
        area: true
      }
    }
  }
}>

export class TerminalMapper {
  static toDomain(data: PrismaTerminalWithRelations): Terminal {
    const { agent, created_at, id, id_reference, pin, puk, serial, sim_card } =
      data
    return Terminal.create(
      {
        id_reference,
        pin: pin ?? undefined,
        puk: puk ?? undefined,
        serial,
        sim_card,
        created_at,
        ...(agent && {
          agent: {
            id: agent.id,
            id_reference: agent.id_reference,
            first_name: agent.first_name,
            last_name: agent.last_name,
            afrimoney: agent.afrimoney,
            phone: agent.phone,
            ...(agent.type && {
              type: { id: agent.type.id, name: agent.type.name },
            }),
          },
        }),
      },
      id
    )
  }

  static toPersistence(data: Terminal): Prisma.TerminalCreateInput {
    const {
      id_reference,
      pin,
      puk,
      serial,
      sim_card,
      agent_id,
      area_id,
      city_id,
      province_id,
      zone_id,
    } = data.toJSON()

    return {
      id_reference,
      pin,
      puk,
      serial,
      sim_card,
      ...(province_id && { province: { connect: { id: province_id } } }),
      ...(city_id && { city: { connect: { id: city_id } } }),
      ...(area_id && { area: { connect: { id: area_id } } }),
      ...(zone_id && { zone: { connect: { id: zone_id } } }),
      ...(agent_id && { agent: { connect: { id: agent_id } } }),
    }
  }
}
