import { Entity } from "@/core/domain/entity";

type PosProps = {
    id_pos:string
    id_reference_pos:string | null
    coordinates:string
    type:string
    admin?:string | null
    licence:string 
    zone:string
    area:string
    city:string
    province:string
}

export class Pos extends Entity<PosProps> {
    
    static create(props: PosProps, id?:string):Pos{
        return new Pos(props, id)
    }

    get id_pos():string{
        return this.props.id_pos
    }
    get id_reference_pos():string | null {
        return this.props.id_reference_pos || null
    }
    get coordinates():string{
        return this.props.coordinates
    }
    get type():string{
        return this.props.type
    }
    get city():string {
        return this.props.city
    }
    get area():string{
        return this.props.area
    }
    get zone():string{
        return this.props.zone
    }
    get province():string{
        return this.props.province
    }
    get admin(): string | null | undefined {
        return this.props.admin || null || undefined
    }
    get licence(){
        return this.props.licence
    }

    set id_pos(id_pos:string){
        this.props.id_pos = id_pos
    }
    set id_reference_pos(id_reference_pos:string) {
        this.props.id_reference_pos =id_reference_pos
    }
    set coordinates(coordinates:string){
        this.props.coordinates = coordinates
    }
    set type(type:string){
        this.props.type = type
    }
    set city(city:string) {
        this.props.city = city
    }
    set area(area:string){
        this.props.area = area
    }
    set zone(zone:string){
        this.props.zone = zone
    }
    set province(province:string){
        this.props.province = province
    }
    set admin(admin:string){
        this.props.admin = admin || null 
    }
    set licence(licence:string){
        this.props.licence = licence
    }
} 