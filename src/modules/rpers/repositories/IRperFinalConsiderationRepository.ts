import { ICreateRperFinalConsiderationDTO } from "../dtos/ICreateRperFinalConsiderationDTO";
import { RperFinalConsideration } from "../infra/typeorm/entities/RperFinalConsideration";

export interface IRperFinalConsiderationRepository {
    create(data: ICreateRperFinalConsiderationDTO): Promise<RperFinalConsideration>
    findByRperId(rper_id: string): Promise<RperFinalConsideration>
    update(rperFinalConsideration: RperFinalConsideration): Promise<void>
}