import { RperStatus } from 'enums'

export interface ICreateRperAcknowledgmentDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}