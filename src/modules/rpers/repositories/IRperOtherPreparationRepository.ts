import { ICreateRperOtherPreparationDTO } from "../dtos/ICreateRperOtherPreparationDTO";
import { RperOtherPreparation } from "../infra/typeorm/entities/RperOtherPreparation";

export interface IRperOtherPreparationRepository {
    create(data: ICreateRperOtherPreparationDTO): Promise<RperOtherPreparation>
    findByRperId(rper_id: string): Promise<RperOtherPreparation>
    update(rperOtherPreparation: RperOtherPreparation): Promise<void>
}