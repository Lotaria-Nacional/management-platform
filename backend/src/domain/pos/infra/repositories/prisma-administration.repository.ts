import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { Administration } from "../../enterprise/entities/administration.entity"
import { IAdministrationRepository } from "../../application/interfaces/administration-repository.interface"

export class PrismaAdministrationRepository
  implements IAdministrationRepository
{

  async getById(id: string): Promise<Administration | null> {
      const admin = await prisma.administration.findUnique({ where: { id }, include:{ licences: true } })
      return admin ? Administration.create({
        name:admin.name,
        licences_id:[],
      }, admin.id) : null 
  }

  async fetchMany() {
    const administrations = await prisma.administration.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        licences: true,
      },
    })

    return administrations.map((administration) =>
      Administration.create({
        name: administration.name,
        licences_id: administration.licences.map(licence => licence.id),
        created_at: administration.created_at,
      }, administration.id)
    )
  }
}
