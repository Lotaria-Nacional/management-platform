import { Entity } from "@/core/domain/entity"
import { Subtype } from "./subtype.entity"

export type TypeProps = {
  name: string
  subtype: Subtype[]
  created_at: Date
}

export class Type extends Entity<TypeProps> {
  static create(props: TypeProps) {
    return new Type({
      ...props,
      created_at: props.created_at ?? new Date(),
    })
  }

  get subtype(): Subtype[] {
    return this.props.subtype
  }

  set subtype(value: Subtype[]) {
    this.props.subtype = value
  }
}
