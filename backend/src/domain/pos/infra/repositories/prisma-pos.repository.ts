import { PosMapper } from "../mappers/pos-mapper"
import { PaginationParams } from "@/core/types/params"
import { Pos } from "../../enterprise/entities/pos.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { LicenceStatus } from "../../enterprise/enums/licence.enums"
import { IPosRepository } from "../../application/interfaces/pos-repository.interface"

export class PrismaPosRepository implements IPosRepository {
  async create(pos: Pos): Promise<void> {
    await prisma.$transaction(async (tx) => {
      await tx.pos.create({
        data: PosMapper.toPrisma(pos)
      })
    })
  }

  async fetchMany({ page, limit }: PaginationParams) {
    const allPos = await prisma.pos.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id_reference: "asc",
      },
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

    return allPos.map((pos) => PosMapper.toDomain(pos))
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
          data: { status: LicenceStatus.USED },
        })
      }
  
      // Se removeu a licença antiga, atualiza status dela para NOT_USED
      if (!newLicenceId && oldLicenceId) {
        await tx.licence.update({
          where: { id: oldLicenceId },
          data: { status: LicenceStatus.NOT_USED },
        })
      }
    })
  }

  async delete(id: string) {
    await prisma.pos.delete({
      where: { id },
    })
  }

  async countAll(): Promise<number> {
    return await prisma.pos.count()
  }
}
