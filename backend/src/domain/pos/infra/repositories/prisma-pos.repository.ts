import { PosMapper } from "../mappers/pos-mapper"
import { PaginationParams } from "@/core/types/params"
import { Pos } from "../../enterprise/entities/pos.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { PosExtraFilters } from "../../application/use-cases/fetch-many-pos.useCase"
import { IPosRepository } from "../../application/interfaces/pos-repository.interface"
import { LicenceStatusEnum } from "../../enterprise/enums/licence.enums"

export class PrismaPosRepository implements IPosRepository {
  async create(pos: Pos): Promise<void> {
    await prisma.$transaction(async (tx) => {
      await tx.pos.create({
        data: PosMapper.toPrisma(pos),
      })
    })
  }

  async fetchMany({
    limit = 10,
    page = 0,
    area_id,
    zone_id,
    city_id,
    province_id,
    type_id,
  }: PaginationParams & PosExtraFilters) {
    const where: any = {
      ...(area_id && { area_id }),
      ...(zone_id && { zone_id }),
      ...(city_id && { city_id }),
      ...(province_id && { province_id }),
      ...(type_id && { type_id }),
    }

    const posList = await prisma.pos.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id_reference: "asc",
      },
      where,
      include: {
        area: true,
        zone: true,
        city: true,
        province: true,
        type: true,
        subtype: true,
        licence: true,
        administration: true,
        agent: true,
      },
    })

    return posList.map((pos) => PosMapper.toDomain(pos))
  }

  async getById(id: string) {
    const pos = await prisma.pos.findUnique({
      where: { id },
      include: {
        type: true,
        city: true,
        zone: true,
        area: true,
        agent: true,
        subtype: true,
        licence: true,
        province: true,
        administration: true,
      },
    })

    if (!pos) return null

    return PosMapper.toDomain(pos)
  }

  async save(pos: Pos) {
    await prisma.$transaction(async (tx) => {
      const oldPos = await tx.pos.findUnique({
        where: { id: pos.id },
        select: { licence_id: true },
      })

      const newData = PosMapper.toPrisma(pos)

      await tx.pos.update({
        where: { id: pos.id },
        data: newData,
      })

      const newLicenceId = pos.toJSON().licence_id
      const oldLicenceId = oldPos?.licence_id

      // Se conectou uma nova licença, atualiza status dela para USED
      if (newLicenceId) {
        await tx.licence.update({
          where: { id: newLicenceId },
          data: { status: LicenceStatusEnum.USED },
        })
      }

      // Se removeu a licença antiga, atualiza status dela para NOT_USED
      if (!newLicenceId && oldLicenceId) {
        await tx.licence.update({
          where: { id: oldLicenceId },
          data: { status: LicenceStatusEnum.NOT_USED },
        })
      }
    })
  }

  async delete(id: string) {
    await prisma.pos.delete({
      where: { id },
    })
  }

  async countAll(params?: PosExtraFilters): Promise<number> {
    return await prisma.pos.count({
      where: {
        ...params,
      },
    })
  }
}
