import { Prisma } from "generated/prisma";
import { Licence } from "../../enterprise/entities/licence.entity";
import { LicenceStatus } from "../../enterprise/enums/licence.enums";

type PrismaLicenceWithRelations = Prisma.LicenceGetPayload<{
    include:{
        administration:true,
    }
}>

export class LicenceMapper {
    static toDomain(licence:PrismaLicenceWithRelations):Licence{
        return Licence.create({
            administration_id:licence.administration_id,
            creation_date:licence.creation_date!,
            description:licence.description!,
            licence_number:licence.licence_number,
            status:licence.status as LicenceStatus,
            licence_reference:licence.licence_reference,
            ...(licence.administration_id && { admin: { id: licence.administration.id, name:licence.administration.name} }),
            created_at:licence.created_at
        },
        licence.id
        )
    }

    static toPersistence(licence: Licence):Prisma.LicenceCreateInput{
        const data = licence.toJSON()
        
        return {
            administration: { connect: { id: data.administration_id } },
            status:licence.status,
            creation_date: data.creation_date,
            description: data.description,
            licence_number: data.licence_number,
            licence_reference:data.licence_reference!,
            ...(data.pos_id && { pos: { connect: { id: data.pos_id } } }),
            ...(data.administration_id && { administration: { connect: { id: data.administration_id } } }),
        }
      }
}