import { Entity } from "@/core/domain/entity";

export type AdministrationProps = {
    city_id:string
    name:string
    licence_id:string
    created_at:Date
}

export class Administration extends Entity<AdministrationProps>{
    
    static create(props:AdministrationProps){
        return new Administration({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get name(): string {
        return this.props.name;
    }

    set name(value: string) {
        this.props.name = value;
    }

    get city_id(): string {
        return this.props.city_id;
    }

    set city_id(value:string) {
        this.props.city_id = value;
    }

    get licence_id(): string {
        return this.props.licence_id;
    }

    set licence_id(value:string) {
        this.props.licence_id = value;
    }
}