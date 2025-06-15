import { Prisma } from "generated/prisma"
import { Pos } from "../../enterprise/entities/pos.entity"
import { LicenceStatus } from "../../enterprise/enums/licence.enums"

type PrismaPosWithRelations = Prisma.PosGetPayload<{
  include: {
    type: true
    area: true
    city: true
    zone: true
    agent: true
    licence: true
    subtype: true
    province: true
    administration: true
  }
}>

export class PosMapper {
  static toDomain(data: PrismaPosWithRelations): Pos {
    const {
      administration,
      agent,
      area,
      city,
      created_at,
      id,
      id_reference,
      latitude,
      licence,
      longitude,
      province,
      status,
      type,
      zone,
      zone_id,
    } = data

    return Pos.create(
      {
        status: status,
        latitude: latitude,
        longitude: longitude,
        id_reference: id_reference,
        type: { id: type.id, name: type.name },
        area: { id: area.id, name: area.name },
        city: { id: city.id, name: city.name },
        zone: { id: zone_id, value: zone.value },
        province: { id: province.id, name: province.name },
        agent: agent
          ? {
              id: agent.id,
              id_reference: agent.id_reference,
              first_name: agent.first_name,
              last_name: agent.last_name,
              phone: agent.phone,
              afrimoney: agent.afrimoney,
            }
          : undefined,
        licence: licence
          ? { id: licence.id, licence_reference: licence.licence_reference }
          : undefined,
        administration: administration
          ? { id: administration.id, name: administration.name }
          : undefined,
        created_at: created_at,
      },
      id
    )
  }

  static toPrisma(pos: Pos): any {
    const data = pos.toJSON()

    return {
      id_reference: data.id_reference,
      latitude: data.latitude,
      longitude: data.longitude,
      status: data.status,
      ...(data.city_id && { city: { connect: { id: data.city_id } } }),
      ...(data.area_id && { area: { connect: { id: data.area_id } } }),
      ...(data.zone_id && { zone: { connect: { id: data.zone_id } } }),
      ...(data.type_id && { type: { connect: { id: data.type_id } } }),
      ...(data.subtype_id && { subtype: { connect: { id: data.subtype_id } } }),
      ...(data.province_id && {
        province: { connect: { id: data.province_id } },
      }),
      ...(data.administration_id && {
        administration: { connect: { id: data.administration_id } },
      }),
      ...(data.licence_id && { licence: { connect: { id: data.licence_id } } }),
      ...(data.agent_id && { agent: { connect: { id: data.agent_id } } }),
    }
  }
}
