import { SubtypeMapper } from "../mappers/subtype-mapper"
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

    return subtypes.map((subtype) => SubtypeMapper.toDomain(subtype)
    )
  }
}
