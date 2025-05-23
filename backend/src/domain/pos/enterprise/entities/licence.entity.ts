import { Entity } from "@/core/domain/entity";

export type LicenceProps = {
    administration:string
    status:boolean
    created_at:Date
}

export class Licence extends Entity<LicenceProps>{
    
    static create(props:LicenceProps){
        return new Licence({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get status(): boolean {
        return this.props.status;
    }
    set status(value:boolean) {
        this.props.status = value;
    }
    set administration(value: string) {
        this.props.administration = value;
    }
}