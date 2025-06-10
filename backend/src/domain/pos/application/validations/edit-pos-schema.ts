import { z } from "zod"

export const editPosSchema = z.object({
  id: z.string()
    .min(12, "id inválido, deve conter 12 caractéres"),
  id_reference: z.number()
    .min(5, "id reference muito curto")
    .optional(),
  latitude: z.number()
  .min(-90,"A latitude mínima é -90")
  .max(90,"A latitude máxima é 90")
  .optional(),
longitude: z.number()
  .min(-180,"A longitude mínima é -180")
  .max(180,"A longitude máxima é 180")
  .optional(),
  province_id: z
    .string()
    .min(12, "id da província não é válido")
    .max(12)
    .optional(),
  city_id: z.string()
    .min(12, "id da cidade não é válido")
    .max(12)
    .optional(),
  area_id: z.string()
    .min(12, "id da área não é válido")
    .max(12)
    .optional(),
  zone_id: z.string()
    .min(12, "id da zona não é válido")
    .max(12)
    .optional(),
  type_id: z.string()
    .min(12, "id do tipo não é válido")
    .max(12)
    .optional(),
  subtype_id: z
    .string()
    .min(12, "id do subtipo não é válido")
    .max(12)
    .optional(),
  licence_id: z
    .string()
    .min(12, "id da licença não é válido")
    .max(12)
    .optional()
    .nullable(),
  agent_id: z
    .string()
    .min(5, "o id refence do agente é muito curto")
    .max(5)
    .optional(),
  administration_id: z
    .string()
    .min(12, "id da administração não é válido")
    .max(12)
    .optional(),
})

export type TEditPosDTO = z.infer<typeof editPosSchema>
