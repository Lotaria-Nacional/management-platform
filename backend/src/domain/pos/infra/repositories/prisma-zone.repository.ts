import { ZoneMapper } from "../mappers/zone-mapper"
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
        agents:true
      },
    })

    return zones.sort((a,b) => a.value - b.value)
    .map((zone) => ZoneMapper.toDomain(zone)
    )
  }
}
