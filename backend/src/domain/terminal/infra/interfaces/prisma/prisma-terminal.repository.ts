import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";
import { prisma } from "@/core/infra/database/prisma/prisma.config";

export class PrismaRevisionRepository implements ITerminalRepository {
    async create(terminal: Terminal) {
        await prisma.$transaction(async (tx)=>{
            await tx.terminal.create({
                data:{
                    id_terminal:terminal.props.id_terminal,
                    serial:terminal.props.serial,
                    sim_card:terminal.props.sim_card,
                    Agent: terminal.props.agent_id ? {
                        connect:{
                            id: terminal.id
                        }
                    } : undefined
                }
            })
        })
    }

    async save(terminals: Terminal) {
        
    }

    async delete(id: string) {
        
    }

    async getById(id: string) {
        const terminal = await prisma.terminal.findUnique({
            where:{ id },
            include:{
                Agent:true
            }
        })

        if(!terminal) return null

        return Terminal.create({
            agent_id:terminal.id_terminal,
            serial:terminal.serial,
            id_terminal:terminal.id_terminal,
            sim_card:terminal.sim_card,
            created_at:terminal.created_at
        }, terminal.id)
    }

    async saveMany(terminals: Terminal[]) {
        
    }

    async fetchMany() {
        const terminals = await prisma.terminal.findMany({
            include:{
                Agent:true,
            },
            orderBy:{
                created_at:"desc"
            }
        })

        return terminals.map((t)=> Terminal.create({
            agent_id:t.Agent?.agent_id ?? "",
            id_terminal:t.id_terminal,
            serial:t.serial,
            sim_card:t.serial,
            agent: {
                status:t.Agent?.status,
                first_name:t.Agent?.first_name,
                last_name:t.Agent?.last_name,
            },
            created_at:t.created_at
        }))
    }
}