import { ICreateRperInputAndOutputDTO } from "../dtos/ICreateRperInputAndOutputDTO";
import { RperInputAndOutput } from "../infra/typeorm/entities/RperInputAndOutput";

export interface IRperInputAndOutputRepository {
    create(data: ICreateRperInputAndOutputDTO): Promise<RperInputAndOutput>
    findByRperId(rper_id: string): Promise<RperInputAndOutput>
    update(rperInputAndOutput: RperInputAndOutput): Promise<void>
}