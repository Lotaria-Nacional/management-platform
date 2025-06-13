import { TypeMapper } from "../mappers/type-mapper"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ITypeRepository } from "../../application/interfaces/type-repository.interface"

export class PrismaTypeRepository implements ITypeRepository {
  async fetchMany() {
    const types = await prisma.type.findMany({
      orderBy: {
        created_at: "asc",
      },
      include: {
        subtypes: true,
      },
    })

    return types
    .sort((a,b)=> a.name.localeCompare(b.name))
    .map((type) => TypeMapper.toDomain(type)
    )
  }
}
