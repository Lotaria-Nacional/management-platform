import { City } from "../../enterprise/entities/city.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ICityRepository } from "../../application/interfaces/city-repository.interface"

export class PrismaCityRepository implements ICityRepository {
  async fetchMany() {
    const citys = await prisma.city.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        area: true,
      },
    })

    return citys.map((city) =>
      City.create({
        name: city.name,
        province_id: city.province_id,
        created_at: city.created_at,
      })
    )
  }
}
