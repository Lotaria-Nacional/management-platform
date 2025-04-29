import { Entity } from "@/core/domain/entity";

type TerminalProps = {
    id_terminal:string
    serial:string
    sim_card:string
}

export class Terminal extends Entity<TerminalProps> {

    static create(props:TerminalProps, id?:string):Terminal{
        return new Terminal(props, id)
    }

    get id_terminal():string {
        return this.props.id_terminal
    }
    
    get serial():string {
        return this.props.serial
    }

    get sim_card():string {
        return this.props.sim_card
    }

}