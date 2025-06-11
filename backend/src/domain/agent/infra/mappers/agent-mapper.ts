import { Prisma } from "generated/prisma";
import { AgentType } from "../../enterprise/enums/agent-type";
import { Agent } from "../../enterprise/entities/agent.entity";

type PrismaAgentWithRelations = Prisma.AgentGetPayload<{
    include:{
        terminal:true
    }
}>

type ToPrismaCreateData = {
    id_reference: number
    first_name: string
    last_name: string
    phone: number | null
    status: string | null
    type: AgentType
    afrimoney: number | null
    pos?: { connect: { id: string } }
    terminal?: { connect: { id: string } }
  }
  
  type ToPrismaUpdateData = Partial<ToPrismaCreateData>

export class AgentMapper {
    static toDomain(data:PrismaAgentWithRelations){
        const { afrimoney, first_name, id, id_reference, last_name, phone, status, terminal, type } = data
        return Agent.create({
            afrimoney,
            first_name,
            id_reference,
            last_name,
            phone,
            status,
            type: type as AgentType,
            terminal: terminal ? { id: terminal.id } : undefined,
        }, id)
    }

    static toPrismaCreate(agent:Agent):ToPrismaCreateData {
        const data = agent.toJSON()

        return {
            id_reference:data.id_reference,
            first_name:data.first_name,
            last_name:data.last_name,
            phone:data.phone,
            afrimoney:data.afrimoney,
            type:data.type,
            status:data.status,
            pos: data.pos_id ?  { connect: { id: data.pos_id } } : undefined,
            terminal: data.terminal_id ?  { connect: { id: data.terminal_id } } : undefined,
        }
    }
    static toPrismaUpdate(agent: Agent): ToPrismaUpdateData {
        const data = agent.toJSON()
    
        const updateData: ToPrismaUpdateData = {}
    
        if (data.id_reference !== undefined) updateData.id_reference = data.id_reference
        if (data.first_name !== undefined) updateData.first_name = data.first_name
        if (data.last_name !== undefined) updateData.last_name = data.last_name
        if (data.phone !== undefined) updateData.phone = data.phone
        if (data.afrimoney !== undefined) updateData.afrimoney = data.afrimoney
        if (data.type !== undefined) updateData.type = data.type
        if (data.status !== undefined) updateData.status = data.status
        if (data.pos_id) updateData.pos = { connect: { id: data.pos_id } }
        if (data.terminal_id) updateData.terminal = { connect: { id: data.terminal_id } }
    
        return updateData
      }
}

