import { Entity } from "@/core/domain/entity";

export type PosProps = {
    id_reference:number
    province:string
    city:string
    area:string
    zone:string
    type:string
    licence:string
    status:boolean
    administration:string
    created_at:Date
}

export class Pos extends Entity<PosProps>{
    
    static create(props:PosProps){
        return new Pos({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get id_reference(): number {
        return this.props.id_reference;
    }
    set id_reference(value: number) {
        this.props.id_reference = value;
    }

    get province(): string {
        return this.props.province;
    }
    set province(value: string) {
        this.props.province = value;
    }

    get city(): string {
        return this.props.city;
    }
    set city(value: string) {
        this.props.city = value;
    }

    get area(): string {
        return this.props.area;
    }
    set area(value: string) {
        this.props.area = value;
    }

    get zone(): string {
        return this.props.zone;
    }
    set zone(value: string) {
        this.props.zone = value;
    }

    get type(): string {
        return this.props.type;
    }
    set type(value: string) {
        this.props.type = value;
    }

    get licence(): string {
        return this.props.licence;
    }
    set licence(value: string) {
        this.props.licence = value;
    }

    get status(): boolean {
        return this.props.status;
    }
    set status(value: boolean) {
        this.props.status = value;
    }

    get administration(): string {
        return this.props.administration;
    }
    set administration(value: string) {
        this.props.administration = value;
    }

}