import { RperStatus } from 'enums'

export interface ICreateRperDailyRoutineDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}