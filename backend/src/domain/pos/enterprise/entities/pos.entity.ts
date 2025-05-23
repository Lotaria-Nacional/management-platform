import { Entity } from "@/core/domain/entity";
import { Agent, AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";
import { ProvinceProps } from "./province.entity";
import { TypeProps } from "./type.entity";

export type PosProps = {
    id_reference:number
    province_id:string
    city_id:string
    area_id:string
    zone_id:string
    type_id:string
    subtype?:string
    licence_id:string
    status:boolean
    coordinates:number[]
    administration_id:string
    agent_id:string
    created_at?:Date

    agent?: AgentProps 
    province?: ProvinceProps 
    zone?: Agent 
    areat?: Agent 
    type?: TypeProps 
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

    get subtype(): string | undefined{
        return this.props.subtype;
    }
    set subtype(value: string) {
        this.props.subtype = value;
    }
  

    get status(): boolean {
        return this.props.status;
    }
    set status(value: boolean) {
        this.props.status = value;
    }


    get coordinates(): number[] {
        return this.props.coordinates;
    }
    set coordinates(value: number[]) {
        this.props.coordinates = value;
    }
    get agent_id(): string {
        return this.props.agent_id;
    }
    set agent_id(value: string) {
        this.props.agent_id = value;
    }

}