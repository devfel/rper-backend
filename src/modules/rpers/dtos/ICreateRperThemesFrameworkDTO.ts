import { RperStatus } from 'enums'

export interface ICreateRperThemesFrameworkDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}