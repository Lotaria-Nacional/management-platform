import { Prisma } from "generated/prisma";
import { Terminal } from "../../enterprise/entities/terminal.entity";

type PrismaTerminalWithRelations = Prisma.TerminalGetPayload<{
    include:{
        agent:true
    }
}>

export class TerminalMapper{
    static toDomain(data:PrismaTerminalWithRelations):Terminal{
        const { agent, created_at, id, id_reference, pin, puk, serial, sim_card } = data
        return Terminal.create({
            id_reference,
            pin:pin ?? null,
            puk:puk ?? null,
            serial,
            sim_card,
            created_at,
            ...(agent && {
                agent:{
                    id:agent.id,
                    id_reference: agent.id_reference,
                    first_name:agent.first_name,
                    last_name:agent.last_name,
                    afrimoney:agent.afrimoney,
                    phone:agent.phone
            } } ),
        }, id)
    }

    static toPrismaCreate(data:Terminal):Prisma.TerminalCreateInput{
        const { id_reference, pin, puk, serial, sim_card, agent_id } = data.toJSON()

        return {
            id_reference,
            pin,
            puk,
            serial,
            sim_card,
            ...(agent_id && { agent: { connect: { id: agent_id } }}),
        }
    }

    static toPrismaUpdate(data:Terminal):Prisma.TerminalUpdateInput{
        const { id_reference, pin, puk, serial, sim_card, agent_id } = data.toJSON()

        return {
            id_reference,
            pin,
            puk,
            serial,
            sim_card,
            ...(agent_id && { agent: { connect: { id: agent_id } }}),
        }
    }
}