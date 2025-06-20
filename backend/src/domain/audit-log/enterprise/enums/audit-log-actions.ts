export const AUDIT_LOG_ACTIONS_ENUM = {
    ADD: "Adição",
    REMOVE: "Remoção",
    UPDATE: "Edição",
} as const

export type AuditLogsActionType = typeof AUDIT_LOG_ACTIONS_ENUM[keyof typeof AUDIT_LOG_ACTIONS_ENUM]