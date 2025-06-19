import { z } from "zod"
import { LicenceStatusEnum } from "@/domain/pos/enterprise/enums/licence.enums"

export const editLicenceSchema = z.object({
  id: z.string(),
  administration_id: z.string().optional(),
  pos_id: z.string().optional(),
  status: z.enum([LicenceStatusEnum.NOT_USED,LicenceStatusEnum.USED]).optional(),
  description: z.string().optional(),
  licence_number: z.string().optional(),
  creation_date: z.coerce.date().optional(),
})

export type TEditLicenceDTO = z.infer<typeof editLicenceSchema>
