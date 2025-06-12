import { Entity } from "@/core/domain/entity"
import { AreaProps } from "./area.entity"

export type CityProps = {
  province_id: string
  name: string
  created_at?: Date
  areas?: (Partial<AreaProps> & { id: string })[]
}

export class City extends Entity<CityProps> {
  static create(props: CityProps, id?: string): City {
    return new City(
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

  get province_id(): string {
    return this.props.province_id
  }

  set province_id(value: string) {
    this.props.province_id = value
  }

  get created_at(): Date {
    return this.props.created_at!
  }

  get areas(): (Partial<AreaProps> & { id: string })[] | undefined {
    return this.props.areas
  }

  set areas(value: (Partial<AreaProps> & { id: string })[] | undefined) {
    this.props.areas = value
  }
}
