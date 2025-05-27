import { Entity } from "@/core/domain/entity"

export type AdministrationProps = {
  name: string
  licence_id: string
  created_at: Date
}

export class Administration extends Entity<AdministrationProps> {
  static create(props: AdministrationProps, id?:string) {
    return new Administration({
      ...props,
      created_at: props.created_at ?? new Date(),
    },id)
  }

  get name() {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get licence_id(): string {
    return this.props.licence_id
  }

  set licence_id(value: string) {
    this.props.licence_id = value
  }
}
