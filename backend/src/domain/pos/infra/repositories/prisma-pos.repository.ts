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
      await tx.pos.update({
        where: { id: pos.id },
        data: PosMapper.toPrisma(pos)
      })

      if(pos.toJSON().licence_id){
        await tx.licence.update({
          where:{ id: pos.toJSON().licence_id },
          data:{
            status: LicenceStatus.USED  
          }
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
