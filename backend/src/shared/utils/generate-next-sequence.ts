import { prisma } from "@/core/infra/database/prisma/prisma.config"

export type CounterNameType =
  | "id_terminal_reference"
  | "id_agent_reference"
  | "id_agent_reference_revendor"
  | "id_pos_reference"

export async function generateNextSequence(
  name: CounterNameType
): Promise<number> {
  const updated = await prisma.counter.update({
    where: { name },
    data: {
      value: { increment: 1 },
    },
  })

  return updated.value
}
