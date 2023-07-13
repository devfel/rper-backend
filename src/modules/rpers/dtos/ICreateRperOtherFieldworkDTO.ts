import { RperStatus } from 'enums'

export interface ICreateRperOtherFieldworkDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}