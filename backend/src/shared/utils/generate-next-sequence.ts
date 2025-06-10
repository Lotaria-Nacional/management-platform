import { prisma } from "@/core/infra/database/prisma/prisma.config"

export type CounterNameType = "id_terminal_reference_seq" | "id_rev_agent_reference_seq" | "id_ln_agent_reference_seq" | "id_pos_reference_seq"

export async function generateNextSequence(
  name: CounterNameType
): Promise<number> {
  const updated = await prisma.idCounter.update({
    where: { name },
    data: {
      value: { increment: 1 },
    },
  })

  return updated.value
}
