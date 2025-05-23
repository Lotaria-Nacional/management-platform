
import { Entity } from "@/core/domain/entity";

export type ZoneProps = {
    area_id:string
    zone_number:number
    created_at:Date
}

export class Zone extends Entity<ZoneProps>{
    
    static create(props:ZoneProps){
        return new Zone({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get area_id(): string {
        return this.props.area_id;
    }
    get zone_number(): number {
        return this.props.zone_number;
    }
    set zone_number(value: number) {
        this.props.zone_number = value;
    }
}