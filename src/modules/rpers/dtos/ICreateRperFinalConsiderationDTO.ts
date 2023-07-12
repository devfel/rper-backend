import { RperStatus } from 'enums'

export interface ICreateRperFinalConsiderationDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}