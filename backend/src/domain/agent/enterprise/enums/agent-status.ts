export const AgentStatusEnum = {
    ACTIVE:"ATIVO",
    INACTIVE:"INATIVO",
    PENDING:"PENDENTE"
} as const;

export type AgentStatus = typeof AgentStatusEnum[keyof typeof AgentStatusEnum];