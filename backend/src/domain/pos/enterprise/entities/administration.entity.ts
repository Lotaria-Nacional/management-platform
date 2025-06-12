import { Entity } from "@/core/domain/entity"

export type AdministrationProps = {
  name: string
  licences_id: string[]
  created_at?: Date
}

export class Administration extends Entity<AdministrationProps> {
  static create(props: AdministrationProps, id?: string) {
    return new Administration(
      {
        ...props,
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

  get licences_id(): string[] {
    return this.props.licences_id
  }

  set licences_id(values: string[]) {
    this.props.licences_id = values
  }

  addLicence(licenceId: string) {
    if (!this.props.licences_id.includes(licenceId)) {
      this.props.licences_id.push(licenceId)
    }
  }

  removeLicence(licenceId: string) {
    this.props.licences_id = this.props.licences_id.filter(id => id !== licenceId)
  }

  get created_at(): Date {
    return this.props.created_at!
  }
}
