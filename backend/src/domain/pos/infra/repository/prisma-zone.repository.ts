import { Zone } from "../../enterprise/entities/zone.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IZoneRepository } from "../../application/interfaces/zone-repository.interface"

export class PrismaZoneRepository implements IZoneRepository {
  async fetchMany() {
    const zones = await prisma.zone.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        area: true,
      },
    })

    return zones.map((zone) =>
      Zone.create({
        zone_number: zone.zone_number,
        area_id: zone.area_id ?? "",
        created_at: zone.created_at,
      })
    )
  }
}
