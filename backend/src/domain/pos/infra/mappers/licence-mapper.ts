import { Prisma } from "generated/prisma";
import { LicenceStatus } from "../../enterprise/enums/licence.enums";
import { Licence } from "../../enterprise/entities/licence.entity";

type PrismaLicenceWithRelations = Prisma.LicenceGetPayload<{
    include:{
        administration:true,
    }
}>

export class LicenceMapper {
    static toDomain(licence:PrismaLicenceWithRelations):Licence{
        return Licence.create({
            administration_id:licence.administration_id,
            licence_reference: licence.licence_reference,
            status:licence.status as LicenceStatus,
            ...(licence.administration_id && { admin: { id: licence.administration.id, name:licence.administration.name} }),
            created_at:licence.created_at
        },
        licence.id
        )
    }

    static toPrisma(licence: Licence):Prisma.LicenceCreateInput{
        const data = licence.toJSON()
      
        return {
            administration: { connect: { id: data.administration_id } },
            status:licence.status,
            licence_reference: data.licence_reference,
            ...(data.pos_id && { pos: { connect: { id: data.pos_id } } }),
            ...(data.administration_id && { administration: { connect: { id: data.administration_id } } }),
        }
      }
}