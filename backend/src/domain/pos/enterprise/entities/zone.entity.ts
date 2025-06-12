
import { Entity } from "@/core/domain/entity";

export type ZoneProps = {
    area_id?:string
    value:number
    created_at:Date
}

export class Zone extends Entity<ZoneProps>{
    
    static create(props:ZoneProps, id?:string){
        return new Zone({
            ...props,
            created_at: props.created_at ?? new Date()
        }, id)
    }

    get area_id() {
        return this.props.area_id;
    }

    set area_id(value:string | undefined) {
        this.props.area_id = value;
    }

    get value(): number {
        return this.props.value;
    }
    set value(value: number) {
        this.props.value = value;
    }

    get created_at(): Date {
        return this.props.created_at!
    }
}