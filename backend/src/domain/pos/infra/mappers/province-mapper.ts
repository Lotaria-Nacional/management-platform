import { Prisma } from "generated/prisma"
import { Province } from "../../enterprise/entities/province.entity"
 
type PrismaProvinceWithRelations = Prisma.ProvinceGetPayload<{
    include:{
        cities:true
    }
}>

export class ProvinceMapper {
    static toDomain(data:PrismaProvinceWithRelations):Province{
        const { cities, created_at, id, name } = data
        return Province.create({
            name,
            cities: cities.map((city) => ({
              id: city.id,
              name:city.name,
            })),
            created_at,
        }, id)
    }
}