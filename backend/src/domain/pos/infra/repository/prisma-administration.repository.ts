import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Administration } from "../../enterprise/entities/administration.entity"
import { IAdministrationRepository } from "../../application/interfaces/administration-repository.interface"

export class PrismaAdministrationRepository
  implements IAdministrationRepository
{
  async fetchMany() {
    const administrations = await prisma.administration.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        licence: true,
      },
    })

    return administrations.map((administration) =>
      Administration.create({
        name: administration.name,
        licence_id: administration.licence?.id ?? "",
        created_at: administration.created_at,
      })
    )
  }
}
