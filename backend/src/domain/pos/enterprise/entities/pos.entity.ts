import { Entity } from "@/core/domain/entity";
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";

export type PosProps = {
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
    agent_id?: string
    agent?: Partial<AgentProps>
    created_at?: Date
}

export class Pos extends Entity<PosProps> {

    static create(props: PosProps, id?:string):Pos{
        return new Pos({
            ...props,
            created_at: props.created_at 
            ? props.created_at 
            : new Date()
        }, id)
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
    get admin() {
        return this.props.admin || null || undefined
    }
    get licence(){
        return this.props.licence
    }
    get agent_id(){
        return this.props.agent_id
    }
    get agent(){
        return this.props.agent
    }

    set agent(agent:Partial<AgentProps> | undefined){
         this.props.agent = agent   
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
    set admin(admin:string | undefined | null){
        this.props.admin = admin
    }
    set licence(licence:string){
        this.props.licence = licence
    }
    set agent_id(agent_id:string | undefined){
        this.props.agent_id = agent_id
    }
} 