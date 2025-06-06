import { Province } from "../../enterprise/entities/province.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IProvinceRepository } from "../../application/interfaces/province-repository.interface"

export class PrismaProvinceRepository implements IProvinceRepository {
  async fetchMany() {
    const provinces = await prisma.province.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        city: true,
      },
    })

    return provinces.map((province) =>
      Province.create({
        name: province.name,
        cities: province.city.map((city) => ({
          id: city.id,
          name:city.name,
        })),
        created_at: province.created_at,
      }, province.id)
    )
  }
}
