import { Entity } from "@/core/domain/entity"

export type SubtypeProps = {
  type_id: string
  name: string
  created_at: Date
}

export class Subtype extends Entity<SubtypeProps> {
  static create(props: SubtypeProps, id?:string) {
    return new Subtype({
      ...props,
      created_at: props.created_at ?? new Date(),
    },id)
  }

  get name(): string {
    return this.props.name
  }
  set name(value: string) {
    this.props.name = value
  }
}
