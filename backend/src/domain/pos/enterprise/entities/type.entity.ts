import { Entity } from "@/core/domain/entity";
import { Subtype } from "./subtype.entity";

export type LicenceProps = {
    name:string
    subtype:Subtype[]
    created_at:Date
}

export class Licence extends Entity<LicenceProps>{
    
    static create(props:LicenceProps){
        return new Licence({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get subtype():Subtype[]{}
        return this.props.subtype
    }
    set subtype(value: Subtype[]){
        this.props.subtype = value
    }
    set name(value: string) {
        this.props.name = value;
    }
}