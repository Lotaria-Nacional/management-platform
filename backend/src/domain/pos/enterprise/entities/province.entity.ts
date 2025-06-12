import { Entity } from "@/core/domain/entity"
import { CityProps } from "./city.entity"

export type ProvinceProps = {
  name: string
  created_at?: Date
  cities?: (Partial<CityProps> & { id: string })[]
}

export class Province extends Entity<ProvinceProps> {
  static create(props: ProvinceProps, id?: string): Province {
    return new Province(
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

  get created_at(): Date {
    return this.props.created_at!
  }

  get cities(): (Partial<CityProps> & { id: string })[] | undefined {
    return this.props.cities
  }

  set cities(value: (Partial<CityProps> & { id: string })[] | undefined) {
    this.props.cities = value
  }
}
