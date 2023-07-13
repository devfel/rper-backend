import { RperStatus } from 'enums'

export interface ICreateRperInputAndOutputDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}