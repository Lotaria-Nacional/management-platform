import {
  Revision,
  RevisionProps,
} from "@/domain/agent/enterprise/entities/revision.entity"

export function makeRevisions(id: string, props?: RevisionProps) {
  const revision = Revision.create(
    {
      additional_info: "Additional info",
      agent_id: "Agent id",
      image: "image",
      items: { glasses: true },
      created_at: new Date(),
      updated_at: new Date(),
      ...props,
    },
    id
  )

  return { revision }
}
