import { RperStatus } from 'enums'

export interface ICreateRperOtherPreparationDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}