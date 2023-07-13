import { RperStatus } from 'enums'

export interface ICreateRperVennDiagramDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}