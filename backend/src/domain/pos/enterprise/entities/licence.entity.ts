import { Pos, PosProps } from "./pos.entity";
import { Entity } from "@/core/domain/entity";
import { AdministrationProps } from "./administration.entity";
import { LicenceStatus } from "../enums/licence.enums";


export type LicenceProps = {
    administration_id:string 
    status:LicenceStatus
    pos_id?:string
    licence_reference:string
    pos?:Partial<PosProps> & { id:string }
    admin?:Partial<AdministrationProps> & { id?:string }
    created_at?:Date
}

export class Licence extends Entity<LicenceProps>{
    
    static create(props:LicenceProps, id?:string){
        return new Licence({
            ...props,
            created_at: props.created_at ?? new Date()
        }, id)
    }

    get status() {
        return this.props.status;
    }
    set status(value:LicenceStatus ) {
        this.props.status = value;
    }
    get licence_reference() {
        return this.props.licence_reference;
    }
    set licence_reference(value:string) {
        this.props.licence_reference = value;
    }
    set pos_id(value:string | undefined) {
        this.props.pos_id = value;
    }
    get pos_id() {
        return this.props.pos_id;
    }
    set administration_id(value: string) {
        this.props.administration_id = value;
    }

    public checkLicenceStatus(){
        if(this.pos_id){
            this.status = LicenceStatus.USED
            return 
        }
    }
}