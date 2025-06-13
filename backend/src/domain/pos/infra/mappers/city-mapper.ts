import { Prisma } from "generated/prisma"
import { City } from "../../enterprise/entities/city.entity"
 
type PrismaCityWithRelations = Prisma.CityGetPayload<{
    include:{
        areas:true,
    }
}>

export class CityMapper {
    static toDomain(data:PrismaCityWithRelations):City{
        const { created_at, id, name, areas, province_id } = data
        return City.create({
            name,
            province_id,
            areas: areas.map((area)=>({
                id: area.id,
                name:area.name,
                city_id:area.city_id ?? undefined
            })),
            created_at,
        }, id)
    }
}