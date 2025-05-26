import { Zone } from "../../enterprise/entities/zone.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IZoneRepository } from "../../application/interfaces/zone-repository.interface"

export class PrismaZoneRepository implements IZoneRepository {
  async fetchMany() {
    const zones = await prisma.zone.findMany({
      orderBy: {
        zone_number: "asc",
      },
      include: {
        area: true,
      },
    })

    return zones.sort((a,b) => a.zone_number - b.zone_number)
    .map((zone) =>
      Zone.create({
        zone_number: zone.zone_number,
        area_id: zone.area_id ?? "",
        created_at: zone.created_at,
      })
    )
  }
}
