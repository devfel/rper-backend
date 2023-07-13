import { RperStatus } from 'enums'

export interface ICreateRperPrioritiesElectionDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}