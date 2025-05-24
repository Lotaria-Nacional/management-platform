import { Subtype } from "../../enterprise/entities/subtype.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ISubtypeRepository } from "../../application/interfaces/subtype-repository.interface"

export class PrismaSubtypeRepository implements ISubtypeRepository {
  async fetchMany() {
    const subtypes = await prisma.subtype.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        type: true,
      },
    })

    return subtypes.map((subtype) =>
      Subtype.create({
        name: subtype.name,
        type_id: subtype.type_id,
        created_at: subtype.created_at,
      })
    )
  }
}
