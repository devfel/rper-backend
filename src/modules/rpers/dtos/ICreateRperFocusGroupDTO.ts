import { RperStatus } from 'enums'

export interface ICreateRperFocusGroupDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}