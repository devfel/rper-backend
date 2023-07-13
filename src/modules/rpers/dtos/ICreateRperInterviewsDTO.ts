import { RperStatus } from 'enums'

export interface ICreateRperInterviewsDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}