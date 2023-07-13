import { RperStatus } from 'enums'

export interface ICreateRperSeasonalCalendarDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}