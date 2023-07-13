import { RperStatus } from 'enums'

export interface ICreateRperConstructionDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}