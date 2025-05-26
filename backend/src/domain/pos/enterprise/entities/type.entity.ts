import { Entity } from "@/core/domain/entity"
import { SubtypeProps } from "./subtype.entity"

export type TypeProps = {
  name: string
  subtype: Partial<SubtypeProps & { id:string }>[]
  created_at: Date
}

export class Type extends Entity<TypeProps> {
  static create(props: TypeProps, id?:string) {
    return new Type({
      ...props,
      created_at: props.created_at ?? new Date(),
    }, id)
  }

  get subtype() {
    return this.props.subtype
  }

  
}
