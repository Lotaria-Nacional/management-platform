import { Type } from "../../enterprise/entities/type.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ITypeRepository } from "../../application/interfaces/type-repository.interface"

export class PrismaTypeRepository implements ITypeRepository {
  async fetchMany() {
    const types = await prisma.type.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        subtype: true,
      },
    })

    return types.map((type) =>
      Type.create({
        name: type.name,
        subtype: type.subtype as any[],
        created_at: type.created_at,
      })
    )
  }
}
