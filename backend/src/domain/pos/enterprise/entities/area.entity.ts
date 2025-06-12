import { Entity } from "@/core/domain/entity"
import { ZoneProps } from "./zone.entity"

export type AreaProps = {
  city_id?: string
  name: string
  zones?: (Partial<ZoneProps> & { id: string })[]
  created_at?: Date
}

export class Area extends Entity<AreaProps> {
  static create(props: AreaProps, id?: string): Area {
    return new Area(
      {
        ...props,
        created_at: props.created_at ?? new Date()
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

  get city_id(): string | undefined {
    return this.props.city_id
  }

  set city_id(value: string | undefined) {
    this.props.city_id = value
  }

  get created_at(): Date {
    return this.props.created_at!
  }

  get zones(): (Partial<ZoneProps> & { id: string })[] | undefined {
    return this.props.zones
  }

  set zones(value: (Partial<ZoneProps> & { id: string })[] | undefined) {
    this.props.zones = value
  }
}
