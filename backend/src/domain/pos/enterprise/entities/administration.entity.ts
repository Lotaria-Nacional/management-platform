import { Entity } from "@/core/domain/entity"

export type AdministrationProps = {
  name: number
  licence_id: string
  created_at: Date
}

export class Administration extends Entity<AdministrationProps> {
  static create(props: AdministrationProps) {
    return new Administration({
      ...props,
      created_at: props.created_at ?? new Date(),
    })
  }

  get name() {
    return this.props.name
  }

  set name(value: number) {
    this.props.name = value
  }

  get licence_id(): string {
    return this.props.licence_id
  }

  set licence_id(value: string) {
    this.props.licence_id = value
  }
}
