import { Licence } from "../../enterprise/entities/licence.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ILicenceRepository } from "../../application/interfaces/licence-repository.interface"

export class PrismaLicenceRepository implements ILicenceRepository {
  async fetchMany() {
    const licences = await prisma.licence.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        administration: true,
      },
    })

    return licences.map((licence) =>
      Licence.create({
        status: licence.status,
        administration: licence.administration.id,
        created_at: licence.created_at,
      })
    )
  }
}
