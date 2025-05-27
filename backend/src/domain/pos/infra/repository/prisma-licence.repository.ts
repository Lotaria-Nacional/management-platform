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
        administration:true,
        pos:true
      },
    })

    return licences.map((licence) =>
      Licence.create({
        status: licence.status,
        administration_id: licence.administration_id,
        reference_id: licence.reference_id,
        created_at: licence.created_at,
        pos: licence.pos ? {
          id:licence.pos.id,
          licenceId:licence.pos.licence_id
        } : undefined
      }, licence.id)
    )
  }
}
