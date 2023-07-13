import { ICreateRperConstructionDTO } from "../dtos/ICreateRperConstructionDTO";
import { RperConstruction } from "../infra/typeorm/entities/RperConstruction";

export interface IRperConstructionRepository {
    create(data: ICreateRperConstructionDTO): Promise<RperConstruction>
    findByRperId(rper_id: string): Promise<RperConstruction>
    update(rperConstruction: RperConstruction): Promise<void>
}