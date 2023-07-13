import { RperStatus } from 'enums'

export interface ICreateRperExtraInformationDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}