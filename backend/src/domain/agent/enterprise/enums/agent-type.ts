export const AgentTypeEnum = {
    LOTARIA_NACIONAL: "LOTARIA-NACIONAL",
    REVENDOR: "REVENDEDOR"
} as const;

export type AgentType = typeof AgentTypeEnum[keyof typeof AgentTypeEnum];