import { Pos } from "../../enterprise/entities/pos.entity";
import { prisma } from "@/core/infra/database/prisma/prisma.config";
import { IPosRepository } from "../../application/interfaces/pos-repository.interface";

export class PrismaPosRepository implements IPosRepository {

    async create(pos: Pos): Promise<void> {
        const data = pos.toJSON();
    
        await prisma.$transaction(async (tx) => {
          await tx.pos.create({
            data: {
              id_reference:data.id_reference,
              coordinates:data.coordinates,
              status: data.status,
              type:{ connect: { id: data.type } },
              city: { connect: { id: data.city } },
              area: { connect: { id: data.area } },
              zone: { connect: { id: data.zone } },
              licence: { connect: { id: data.licence } },
              province: { connect: { id: data.province } },
              administration: { connect: { id: data.administration } } ,
              subtype: data.subtype ? { connect: { id: data.type } } : undefined,
              agent: data.agent_id ? { connect: { id: data.agent_id } } : undefined
            },
          });
        });
      }
    

    async fetchMany() {
    }

    async getById(id: string) {
        const pos = await prisma.pos.findUnique({
            where: { id },
            include: {
                agent: true
            }
        })

        if(!pos) return null

        return Pos.create(
            {
                area: pos.area,
                city: pos.city,
                coordinates: pos.coordinates,
                id_pos: pos.id_pos,
                id_reference_pos: pos.id_reference_pos,
                licence: pos.licence,
                province: pos.province,
                type: pos.type,
                zone: pos.zone,
                admin: pos.admin,
                created_at: pos.created_at,
                agent_id: pos.agent_id ?? undefined,
                agent: {
                    agent_id: pos.agent?.id,
                    first_name: pos.agent?.first_name,
                    last_name: pos.agent?.last_name
                }
            },pos.id
        )
    }

    async save(pos: Pos) {
        await prisma.pos.update({
            where: { id: pos.id },
            data: {
                admin:pos.props.admin,
                area: pos.props.area,
                city: pos.props.city,
                coordinates: pos.props.coordinates,
                id_pos: pos.props.id_pos,
                licence: pos.props.licence,
                province: pos.props.province,
                type: pos.props.type,
                zone: pos.props.zone,
                id_reference_pos: pos.props.id_reference_pos,
                created_at: pos.props.created_at,
                agent_id: pos.props.agent_id,
            }
        })
    }

    async delete(id: string) {
        await prisma.pos.delete({
            where: { id }
        })
    }
}