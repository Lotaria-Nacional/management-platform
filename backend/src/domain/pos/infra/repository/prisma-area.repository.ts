import { Area } from "../../enterprise/entities/area.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAreaRepository } from "../../application/interfaces/area-repository.interface"

export class PrismaAreaRepository implements IAreaRepository {
  async fetchMany() {
    const areas = await prisma.area.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        city: true,
        zone: true,
      },
    })

    return areas.map((area) =>
      Area.create({
        name: area.name,
        city_id: area.city_id ?? "",
        created_at: area.created_at,
      })
    )
  }
}
