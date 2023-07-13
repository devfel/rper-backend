import { ICreateRperRealityAndObjMatrixDTO } from "../dtos/ICreateRperRealityAndObjMatrixDTO";
import { RperRealityAndObjMatrix } from "../infra/typeorm/entities/RperRealityAndObjMatrix";

export interface IRperRealityAndObjMatrixRepository {
    create(data: ICreateRperRealityAndObjMatrixDTO): Promise<RperRealityAndObjMatrix>
    findByRperId(rper_id: string): Promise<RperRealityAndObjMatrix>
    update(rperRealityAndObjMatrix: RperRealityAndObjMatrix): Promise<void>
}