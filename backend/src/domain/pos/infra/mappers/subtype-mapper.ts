import { Prisma } from "generated/prisma"
import { Subtype } from "../../enterprise/entities/subtype.entity"
 
type PrismaSubtypeWithRelations = Prisma.SubtypeGetPayload<{}>

export class SubtypeMapper {
    static toDomain(data:PrismaSubtypeWithRelations):Subtype{
        const { created_at, id, name, type_id } = data
        return Subtype.create({
            name,
            type_id,
            created_at,
        }, id)
    }
}