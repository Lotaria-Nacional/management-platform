import { Prisma } from "generated/prisma"
import { Area } from "../../enterprise/entities/area.entity"
 
type PrismaAreaWithRelations = Prisma.AreaGetPayload<{
    include:{
        zones:true
    }
}>

export class AreaMapper {
    static toDomain(data:PrismaAreaWithRelations):Area{
        const { zones, created_at, id, name } = data
        return Area.create({
            name,
            zones: zones?.map((city) => ({
              id: city.id,
              value:city.value,
            })),
            created_at,
        }, id)
    }
}