import { Type } from "../../enterprise/entities/type.entity"
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
    .map((type) =>
      Type.create({
        name: type.name,
        subtype: type.subtypes.map((t)=> ({
            id:t.id,
            name:t.name
        })),
        created_at: type.created_at,
      }, type.id)
    )
  }
}
