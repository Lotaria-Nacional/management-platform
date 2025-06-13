import { AreaMapper } from "../mappers/area-mapper";
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { IAreaRepository } from "../../application/interfaces/area-repository.interface"

export class PrismaAreaRepository implements IAreaRepository {
  async fetchMany() {
    const areas = await prisma.area.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        zones: true,
      },
    })

    return areas
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((area) => AreaMapper.toDomain(area)
    );
  }
}
