import { ICreateRperAcknowledgmentDTO } from "../dtos/ICreateRperAcknowledgmentDTO";
import { RperAcknowledgment } from "../infra/typeorm/entities/RperAcknowledgment";

export interface IRperAcknowledgmentRepository {
    create(data: ICreateRperAcknowledgmentDTO): Promise<RperAcknowledgment>
    findByRperId(rper_id: string): Promise<RperAcknowledgment>
    update(rperAcknowledgment: RperAcknowledgment): Promise<void>
}