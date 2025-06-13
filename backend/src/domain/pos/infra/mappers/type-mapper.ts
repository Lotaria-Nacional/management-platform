import { Prisma } from "generated/prisma"
import { Type } from "../../enterprise/entities/type.entity"
 
type PrismaTypeWithRelations = Prisma.TypeGetPayload<{
    include:{
        subtypes:true
    }
}>

export class TypeMapper {
    static toDomain(data:PrismaTypeWithRelations):Type{
        const { created_at, id, name, subtypes } = data
        return Type.create({
            name,
            subtypes: subtypes?.map((subtype)=>({
                id: subtype.id,
                name:subtype.name,
                type_id:subtype.type_id
            })),
            created_at,
        }, id)
    }
}