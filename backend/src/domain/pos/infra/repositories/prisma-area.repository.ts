import { Area } from "../../enterprise/entities/area.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAreaRepository } from "../../application/interfaces/area-repository.interface"

export class PrismaAreaRepository implements IAreaRepository {
  async fetchMany() {
    const areas = await prisma.area.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        city: true,
        zones: true,
      },
    })

    return areas
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((area) =>
      Area.create({
        name: area.name,
        city_id: area.city_id ?? null,
        created_at: area.created_at,
        zone: area.zones.map(z => ({
          id:z.id,
          value:z.value
        }))
      }, area.id)
    );
  }
}
