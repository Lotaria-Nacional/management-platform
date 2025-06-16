export const AgentStatusEnum = {
  ACTIVE: "Ativo",
  INACTIVE: "Inativo",
  PENDING: "Pendente",
} as const

export type AgentStatus = (typeof AgentStatusEnum)[keyof typeof AgentStatusEnum]
