import { Pos } from "./pos.entity";
import { Entity } from "@/core/domain/entity";



export type LicenceProps = {
    administration_id?:string 
    status:boolean
    current_state:string
    reference_id:number
    pos?:Partial<Pos>
    created_at:Date
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
    set reference_id(value:number) {
        this.props.reference_id = value;
    }
    set administration(value: string | undefined) {
        this.props.administration_id = value;
    }
}