import { Pos, PosProps } from "./pos.entity";
import { Entity } from "@/core/domain/entity";
import { AdministrationProps } from "./administration.entity";

export type LicenceProps = {
    administration_id:string 
    status:boolean
    pos_id?:string
    reference_id:number
    pos?:Partial<PosProps> & { id:string }
    admin:Partial<AdministrationProps> & { id?:string }
    created_at?:Date
}

export class Licence extends Entity<LicenceProps>{
    
    static create(props:LicenceProps, id?:string){
        return new Licence({
            ...props,
            created_at: props.created_at ?? new Date()
        }, id)
    }

    get status(): boolean {
        return this.props.status;
    }
    set status(value:boolean) {
        this.props.status = value;
    }
    get reference_id(): number {
        return this.props.reference_id;
    }
    set pos_id(value:string | undefined) {
        this.props.pos_id = value;
    }
    get pos_id() {
        return this.props.pos_id;
    }
    set reference_id(value:number) {
        this.props.reference_id = value;
    }
    set administration_id(value: string) {
        this.props.administration_id = value;
    }
}