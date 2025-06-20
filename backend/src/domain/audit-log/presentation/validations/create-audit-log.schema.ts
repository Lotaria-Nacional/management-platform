import { z } from "zod";

export const createAuditLogSchema = z.object({
    action:z.string(),
    entity:z.string(),
    entity_id:z.string(),
    user_id:z.string(),
    metadata:z.record(z.string(),z.string()),
    timestamp:z.date()
})

export type CreateAuditLogDTO = z.infer<typeof createAuditLogSchema>