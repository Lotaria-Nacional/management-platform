export const AgentGenreEnum = {
  MALE: "Masculino",
  FEMALE: "Feminino",
} as const

export type AgentGenre = (typeof AgentGenreEnum)[keyof typeof AgentGenreEnum]
