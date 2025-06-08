import { City } from "../../enterprise/entities/city.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ICityRepository } from "../../application/interfaces/city-repository.interface"

export class PrismaCityRepository implements ICityRepository {
  async fetchMany() {
    const citys = await prisma.city.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        area: true,
      },
    })

    return citys
    .sort((a,b)=> a.name.localeCompare(b.name))
    .map((city) =>
      City.create({
        name: city.name,
        province_id: city.province_id,
        areas:city.area.map((area)=> ({
          id:area.id,
          name:area.name   
        })),
        created_at: city.created_at,
      }, city.id)
    )
  }
}