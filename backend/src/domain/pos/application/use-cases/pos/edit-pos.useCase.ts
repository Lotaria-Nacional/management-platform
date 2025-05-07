import { IEditPosRequestDTO } from "../../dto/pos/edit-pos.dto";
import { IPosRepository } from "../../interfaces/pos-repository.interface";

export class EditPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(data:IEditPosRequestDTO):Promise<IEditPosRequestDTO>{
        
        const { id,...updates } = data
        const pos = await this.posRepository.findById(id)

        if(!pos){
            throw new Error("Pos Not Found")
        }

        const fieldMap: Record<string, keyof typeof pos> = {
            id_pos:"id_pos",
            id_reference_pos:"id_reference_pos",
            coordinates:"coordinates",
            type:"type",
            admin:"admin",
            licence:"licence",
            zone:"zone",
            area:"area",
            city:"city",
            province:"province"
        }

    for (const [key, value] of Object.entries(updates) as [keyof typeof updates, any][]) {
      if (value !== undefined) {
        const posProp = fieldMap[key];
        const targetProp = posProp ?? key;
        (pos as any)[targetProp] = value;
      }
    }
        const editedPos = await this.posRepository.save(pos);

        return editedPos
    }
}