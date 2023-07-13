import { ICreateRperOtherFieldworkDTO } from "../dtos/ICreateRperOtherFieldworkDTO";
import { RperOtherFieldwork } from "../infra/typeorm/entities/RperOtherFieldwork";

export interface IRperOtherFieldworkRepository {
    create(data: ICreateRperOtherFieldworkDTO): Promise<RperOtherFieldwork>
    findByRperId(rper_id: string): Promise<RperOtherFieldwork>
    update(rperOtherFieldwork: RperOtherFieldwork): Promise<void>
}