import { ICreateRperDailyRoutineDTO } from "../dtos/ICreateRperDailyRoutineDTO";
import { RperDailyRoutine } from "../infra/typeorm/entities/RperDailyRoutine";

export interface IRperDailyRoutineRepository {
    create(data: ICreateRperDailyRoutineDTO): Promise<RperDailyRoutine>
    findByRperId(rper_id: string): Promise<RperDailyRoutine>
    update(rperDailyRoutine: RperDailyRoutine): Promise<void>
}