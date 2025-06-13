import { PaginationParams } from "@/core/types/params"
import { LicenceMapper } from "../mappers/licence-mapper"
import { Licence } from "../../enterprise/entities/licence.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { ILicenceRepository } from "../../application/interfaces/licence-repository.interface"

export class PrismaLicenceRepository implements ILicenceRepository {

  async create(licence: Licence) {
    try {
      await prisma.$transaction(async(tx)=>{
        await tx.licence.create({
          data:LicenceMapper.toPrisma(licence)
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  async save(licence: Licence) {
    try {
      await prisma.$transaction(async(tx)=>{
        await tx.licence.update({
          where:{ id:licence.id },
          data: LicenceMapper.toPrisma(licence)
        })
      })  
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      await prisma.licence.delete({
        where: { id }
      })
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id: string) {
    const licence = await prisma.licence.findUnique({
      where:{ id },
      include: {
        pos:true,
        administration: true
      }
    })

    if(!licence){
      return null
    }

    return LicenceMapper.toDomain(licence)
  }

  async fetchMany({ limit, page}:PaginationParams) {
    const licences = await prisma.licence.findMany({
      skip: page,
      take: limit,
      orderBy: {
        created_at: "desc",
      },
      include: {
        administration: true,
        pos: true,
      },
    })

    return licences.map((licence) =>LicenceMapper.toDomain(licence))
  }

  async countAll() {
    return await prisma.licence.count()
  }
}
