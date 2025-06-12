import { Entity } from "@/core/domain/entity"

export type AdministrationProps = {
  name: string
  licences_id: string[]
  created_at: Date
}

export class Administration extends Entity<AdministrationProps> {
  static create(props: Omit<AdministrationProps, 'created_at'> & { created_at?: Date }, id?: string) {
    return new Administration(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      id
    )
  }

  get name() {
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

  // 👇 Método adicional para adicionar 1 licença sem substituir as outras
  addLicence(licenceId: string) {
    if (!this.props.licences_id.includes(licenceId)) {
      this.props.licences_id.push(licenceId)
    }
  }

  get created_at(): Date {
    return this.props.created_at
  }
}
