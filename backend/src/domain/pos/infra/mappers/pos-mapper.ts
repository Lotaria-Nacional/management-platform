import { Prisma } from "generated/prisma";
import { Pos } from "../../enterprise/entities/pos.entity";
import { LicenceStatus } from "../../enterprise/enums/licence.enums";

type PrismaPosWithRelations = Prisma.PosGetPayload<{
    include:{
        type:true,
        area:true,
        city:true,
        zone:true,
        agent:true,
        licence:true,
        subtype:true,
        province:true,
        administration:true,
    }
}>

export class PosMapper {
    static toDomain(pos:PrismaPosWithRelations):Pos{
        return Pos.create({
              status: pos.status,   
              latitude: pos.latitude,
              longitude: pos.longitude,
              id_reference: pos.id_reference,
              type: { id: pos.type.id, name: pos.type.name },
              area: { id: pos.area.id, name: pos.area.name },
              city: { id: pos.city.id, name: pos.city.name },
              zone: { id: pos.zone_id, value: pos.zone.value },
              province: { id: pos.province.id, name: pos.province.name },
              ...(pos.agent_id && {agent: {id: pos.agent_id, first_name:pos.agent?.first_name, last_name:pos.agent?.last_name, id_reference:pos.agent?.id_reference, phone:pos.agent?.phone, afrimoney:pos.agent?.afrimoney } }),
              ...(pos.subtype_id && pos.subtype && {subtype: { id: pos.subtype_id, name: pos.subtype.name} }),
              ...(pos.licence_id && pos.licence && {licence: { status: pos.licence.status as LicenceStatus, id: pos.licence_id }}),
              created_at: pos.created_at,
              ...(pos.administration_id && pos.administration && {
                administration: { id: pos.administration_id, name: pos.administration.name }
              }),
            },
            pos.id
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
          ...(data.province_id && { province: { connect: { id: data.province_id } } }),
          ...(data.administration_id && { administration: { connect: { id: data.administration_id } } }),
          ...(data.licence_id && { licence: { connect: { id: data.licence_id } } }),
          ...(data.agent_id && { agent: { connect: { id: data.agent_id } } }),
        }
      }
}