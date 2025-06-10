export const AgentTypes = {
    LOTARIA_NACIONAL: "LOTARIA-NACIONAL",
    REVENDOR: "REVENDEDOR"
} as const;

export type AgentType = typeof AgentTypes[keyof typeof AgentTypes];