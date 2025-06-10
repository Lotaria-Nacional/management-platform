import { PaginationParams } from "@/core/types/params"
import { Licence } from "../../enterprise/entities/licence.entity"
import { prisma } from "@/core/infra/database/prisma/prisma.config"
import { LicenceStatus } from "../../enterprise/enums/licence.enums"
import { ILicenceRepository } from "../../application/interfaces/licence-repository.interface"

export class PrismaLicenceRepository implements ILicenceRepository {

  async create(licence: Licence) {
    const { licence_reference, status, administration_id, created_at, pos_id } = licence.toJSON()
    await prisma.$transaction(async(tx)=>{
      await tx.licence.create({
        data:{
          status:licence.status,
          licence_reference: licence_reference,
          administration_id:  administration_id,
          pos: pos_id ? { connect:{ id: pos_id }  } : undefined,
        }
      })
    })
  }

  async save(licence: Licence) {
    const { id, licence_reference, status, administration_id, created_at, pos_id } = licence.toJSON()
    await prisma.$transaction(async(tx)=>{
      await tx.licence.update({
        where:{ id },
        data: {
          status,
          created_at,
          licence_reference,
          administration_id,
          pos: pos_id ? { connect: { id: pos_id} } : undefined
        }
      })
    })  
  }

  async delete(id: string) {
    await prisma.licence.delete({
      where: { id }
    })
  }

  async getById(id: string) {
    const licence = await prisma.licence.findUnique({
      where:{
        id
      },
      include: {
        pos:true,
        administration: true
      }
    })

    if(!licence){
      return null
    }

    return Licence.create({
      ...licence,
      status:licence.status as LicenceStatus,
      admin: { id: licence.administration.id },
      pos: licence.pos ? { id: licence.pos.id } : undefined,
    }, licence.id)
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

    return licences.map((licence) =>
      Licence.create(
        {
          admin:{ name: licence.administration.name},
          administration_id: licence.administration_id,
          status: licence.status as LicenceStatus,
          created_at: licence.created_at,
          licence_reference: licence.licence_reference,
          pos: licence.pos ? {
            id:licence.pos.id,
          } : undefined
        },
        licence.id
      )
    )
  }

  async countAll() {
    return await prisma.licence.count()
  }
}
