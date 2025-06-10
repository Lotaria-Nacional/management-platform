import { AgentProps } from "./agent.entity"
import { Entity } from "@/core/domain/entity"

export type SupervisionProps = {
  image: string | null
  additional_info: string | null
  items: Record<string, boolean>
  created_at?: Date
  updated_at?: Date

  agent_id: string
  agent?: Partial<AgentProps> & { id: string }
}

export class Supervision extends Entity<SupervisionProps> {
  static create(props: SupervisionProps, id?: string): Supervision {
    return new Supervision(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
        updated_at: props.updated_at ?? new Date(),
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

  set image(image: string | null) {
    this.props.image = image
  }

  get additional_info() {
    return this.props.additional_info
  }

  set additional_info(value:string | null) {
    this.props.additional_info = value
  }

  get items() {
    return this.props.items
  }

  get created_at() {
    return this.props.created_at
  }

  get updated_at() {
    return this.props.updated_at
  }


}
