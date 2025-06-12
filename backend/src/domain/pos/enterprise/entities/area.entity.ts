import { Entity } from "@/core/domain/entity"
import { Zone, ZoneProps } from "./zone.entity"

export type AreaProps = {
  city_id: string | null
  name: string
  zone:Partial<ZoneProps> & {id:string }[]
  created_at: Date
}

export class Area extends Entity<AreaProps> {
  static create(props: AreaProps,id?:string) {
    return new Area({
      ...props,
      created_at: props.created_at ?? new Date(),
    }, id)
  }

  get name(): string {
    return this.props.name
  }
  
  set name(value: string) {
    this.props.name = value
  }
  
  get city_id() {
    return this.props.city_id
  }
  
  set city_id(value: string | null) {
    this.props.city_id = value
  }

  get zones() {
    return this.props.zone
  }
}
