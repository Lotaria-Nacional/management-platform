import { CityMapper } from "../mappers/city-mapper"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ICityRepository } from "../../application/interfaces/city-repository.interface"

export class PrismaCityRepository implements ICityRepository {
  async fetchMany() {
    const citys = await prisma.city.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        areas: true,
      },
    })

    return citys
    .sort((a,b)=> a.name.localeCompare(b.name))
    .map((city) =>CityMapper.toDomain(city)
    )
  }
}