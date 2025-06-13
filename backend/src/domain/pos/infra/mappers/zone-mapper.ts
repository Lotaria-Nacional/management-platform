import { Prisma } from "generated/prisma"
import { Zone } from "../../enterprise/entities/zone.entity"
 
type PrismaZoneWithRelations = Prisma.ZoneGetPayload<{
    include:{
        agents:true
    }
}>

export class ZoneMapper {
    static toDomain(data:PrismaZoneWithRelations):Zone{
        const { created_at, id, value, area_id } = data
        return Zone.create({
            value,
            area_id: area_id ?? undefined,
            created_at,
        }, id)
    }
}