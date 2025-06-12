import { Pos, PosProps } from "./pos.entity";
import { Entity } from "@/core/domain/entity";
import { AdministrationProps } from "./administration.entity";
import { LicenceStatus, LicenceStatusEnum } from "../enums/licence.enums";

type LicenceRelations = {
    pos?:Partial<PosProps> & { id:string }
    admin?:Partial<AdministrationProps> & { id?:string }
}

export type LicenceProps = {
    administration_id:string 
    status:LicenceStatus
    pos_id?:string
    licence_reference:string
    created_at?:Date
} & LicenceRelations

export class Licence extends Entity<LicenceProps> {
    static create(props: LicenceProps, id?: string) {
      return new Licence(
        {
          ...props,
          licence_reference: props.licence_reference.toUpperCase(),
          created_at: props.created_at ?? new Date(),
        },
        id
      )
    }
  
    update(data: Partial<LicenceProps>) {
      const { licence_reference, administration_id, pos_id } = data
      if (pos_id !== undefined) this.props.pos_id = pos_id
      if (licence_reference !== undefined) this.props.licence_reference = licence_reference.toUpperCase()
      if (administration_id !== undefined) this.props.administration_id = administration_id
    }
  
    get licence_reference(): string {
      return this.props.licence_reference
    }
  
    set licence_reference(value: string) {
      this.props.licence_reference = value.toUpperCase()
    }
  
    get status(): LicenceStatus {
      return this.props.status
    }
  
    set status(value: LicenceStatus) {
      this.props.status = value
    }
  
    get pos_id(): string | undefined {
      return this.props.pos_id
    }
  
    set pos_id(value: string | undefined) {
      this.props.pos_id = value
    }
  
    get administration_id(): string {
      return this.props.administration_id
    }
  
    set administration_id(value: string) {
      this.props.administration_id = value
    }
  
    get created_at(): Date {
      return this.props.created_at!
    }
  
    public checkLicenceStatus() {
      if (this.props.pos_id || this.props.pos) {
        this.status = LicenceStatusEnum.USED
      }
    }
  }
  