import { ProvinceMapper } from "../mappers/province-mapper"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IProvinceRepository } from "../../application/interfaces/province-repository.interface"

export class PrismaProvinceRepository implements IProvinceRepository {
  async fetchMany() {
    const provinces = await prisma.province.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        cities: true,
      },
    })

    return provinces.map((province) => ProvinceMapper.toDomain(province)
    )
  }
}
