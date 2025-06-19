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
    licence_number:string
    description:string
    status:LicenceStatus
    pos_id?:string
    licence_reference?:string
    creation_date:Date
    created_at?:Date
} & LicenceRelations

export class Licence extends Entity<LicenceProps> {

    static create(props: LicenceProps, id?: string) {
      
      const licence = new Licence(
        {
          ...props,
          created_at: props.created_at ?? new Date(),
        },
        id
      )
      
      licence.generateLicenceReference()
      
      return licence
    }
    
    update(data: Partial<LicenceProps>) {
      const { licence_reference, administration_id, pos_id, creation_date, description, licence_number } = data
      if (pos_id !== undefined) this.props.pos_id = pos_id
      if (description !== undefined) this.props.description = description
      if (creation_date !== undefined) this.props.creation_date = creation_date
      if (licence_number !== undefined) this.props.licence_number = licence_number
      if (administration_id !== undefined) this.props.administration_id = administration_id
      if (licence_reference !== undefined) this.props.licence_reference = licence_reference.toUpperCase()
        
      this.generateLicenceReference()
    }
  
    get licence_reference(): string | undefined {
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

    get description(): string {
      return this.props.description
    }
  
    set description(value: string) {
      this.props.description = value
    }

    get creation_date(): Date {
      return this.props.creation_date
    }
  
    set creation_date(value: Date) {
      this.props.creation_date = value
    }
    
    get licence_number(): string {
      return this.props.licence_number
    }
  
    set licence_number(value: string) {
      this.props.licence_number = value
    }
  
    get created_at(): Date {
      return this.props.created_at!
    }
  
    public checkLicenceStatus() {
      if (this.props.pos_id || this.props.pos) {
        this.status = LicenceStatusEnum.USED
      }
    }

    private generateLicenceReference() {
      const { admin, licence_number, creation_date, description } = this.props;
        this.props.licence_reference = `${admin?.name ?? "unknown"}-N${licence_number}-${creation_date.getFullYear()}-PT${description}`.toUpperCase();
    }
  }
  