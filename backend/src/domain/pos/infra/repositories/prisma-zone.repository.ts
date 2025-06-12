import { Zone } from "../../enterprise/entities/zone.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IZoneRepository } from "../../application/interfaces/zone-repository.interface"

export class PrismaZoneRepository implements IZoneRepository {
  async fetchMany() {
    const zones = await prisma.zone.findMany({
      orderBy: {
        value: "asc",
      },
      include: {
        area: true,
      },
    })

    return zones.sort((a,b) => a.value - b.value)
    .map((zone) =>
      Zone.create({
        value: zone.value,
        area_id: zone.area_id ?? null,
        created_at: zone.created_at,
      }, zone.id)
    )
  }
}
