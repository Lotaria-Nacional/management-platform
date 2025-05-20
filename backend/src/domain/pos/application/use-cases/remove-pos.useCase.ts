import { IPosRepository } from "../interfaces/pos-repository.interface";

export class RemovePosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(id:string):Promise<void>{

        const pos = await this.posRepository.getById(id)

        if(!pos){
            throw new Error("Pos Not Found")
        }

        await this.posRepository.delete(id);
    }
}