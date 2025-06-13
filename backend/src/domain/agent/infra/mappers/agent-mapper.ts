import { Prisma } from "generated/prisma";
import { AgentType } from "../../enterprise/enums/agent-type";
import { Agent } from "../../enterprise/entities/agent.entity";
import { AgentStatus } from "../../enterprise/enums/agent-status";

type PrismaAgentWithRelations = Prisma.AgentGetPayload<{
    include:{
        terminal:true,
        pos:{
            include:{
                province:true
                area:true,
                type:true,
                zone:true,
                city:true,
                subtype:true
            }
        },
    }
}>

export class AgentMapper {
    static toDomain(data:PrismaAgentWithRelations){
        const { afrimoney, first_name, id, id_reference, last_name, phone, status, terminal, agent_type,pos,bi_number, genre } = data
        return Agent.create({
            afrimoney,
            first_name,
            id_reference,
            last_name,
            phone,
            genre: genre ?? undefined,
            status: status as AgentStatus,
            bi_number: bi_number ?? undefined,
            agent_type: agent_type as AgentType,
            area: pos?.area ? { id:pos.area.id, name: pos?.area.name } : undefined,
            zone: pos?.zone ? { id: pos?.zone.id, value: pos?.zone.value } : undefined,
            type: pos?.type ? { id: pos?.type.id, name:pos.type.name } : undefined,
            city: pos?.city.id ? { id:pos?.city.id, name: pos?.city.name } : undefined,
            province: pos?.province.id ? { id:pos.province.id, name: pos?.province.name } : undefined,
            terminal: terminal ? { id: terminal.id, serial: terminal.serial, id_reference: terminal.id_reference } : undefined,
        }, id)
    }

    static toPrisma(agent:Agent):Prisma.AgentCreateInput {
        const data = agent.toJSON()

        return {
            id_reference:data.id_reference,
            first_name:data.first_name,
            last_name:data.last_name,
            phone:data.phone ?? null,
            afrimoney:data.afrimoney ?? null,
            status:data.status,
            agent_type: data.agent_type,
            genre: data.genre ?? null,
            bi_number:data.bi_number ?? null,
            pos: data.pos_id ?  { connect: { id: data.pos_id } } : undefined,
            type: data.type_id ? { connect : {id: data.type_id } } : undefined,
            area: data.area_id ? { connect : {id: data.area_id } } : undefined,
            zone: data.zone_id ? { connect : {id: data.zone_id } } : undefined,
            terminal: data.terminal_id ?  { connect: { id: data.terminal_id } } : undefined,
        }
    }

}

