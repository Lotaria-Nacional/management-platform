import { Entity } from "@/core/domain/entity"
import { SubtypeProps } from "./subtype.entity"

export type TypeProps = {
  name: string
  subtypes?: (Partial<SubtypeProps> & { id: string })[]
  created_at?: Date
}

export class Type extends Entity<TypeProps> {
  static create(props: TypeProps, id?: string): Type {
    return new Type(
      {
        ...props,
        subtypes: props.subtypes ?? [],
        created_at: props.created_at ?? new Date(),
      },
      id
    )
  }

  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get subtypes() {
    return this.props.subtypes ?? []
  }

  set subtypes(value: (Partial<SubtypeProps> & { id: string })[]) {
    this.props.subtypes = value
  }

  get created_at(): Date {
    return this.props.created_at!
  }
}
