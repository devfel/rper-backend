import { RperStatus } from 'enums'

export interface ICreateRperPresentationDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}