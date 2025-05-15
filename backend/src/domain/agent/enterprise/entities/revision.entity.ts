import { Entity } from "@/core/domain/entity"
import { Agent, AgentProps } from "./agent.entity"
import { Optional } from "generated/prisma/runtime/library"

export type RevisionProps = {
  agent_id: string
  image: string
  additional_info: string | null
  items:Record<string, boolean>
  created_at?: Date
  updated_at?: Date
  agent?:Optional<AgentProps> & { id:string }
}

export class Revision extends Entity<RevisionProps> {
  static create(props: RevisionProps, id?: string): Revision {
    return new Revision(
      {
        ...props,
        additional_info: props.additional_info || null,
        created_at: props.created_at ?? new Date(),
        updated_at: props.updated_at ?? new Date()
      },
      id
    )
  }

  get agent_id() {
    return this.props.agent_id
  }

  get image() {
    return this.props.image
  }

  get additional_info() {
    return this.props.additional_info
  }

  get created_at() {
    return this.props.created_at
  }

  get updated_at() {
    return this.props.updated_at
  }

  get items() {
    return this.props.items
  }

  set image(image: string) {
    this.props.image = image
  }

}
