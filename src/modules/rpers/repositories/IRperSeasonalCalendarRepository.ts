import { ICreateRperSeasonalCalendarDTO } from "../dtos/ICreateRperSeasonalCalendarDTO";
import { RperSeasonalCalendar } from "../infra/typeorm/entities/RperSeasonalCalendar";

export interface IRperSeasonalCalendarRepository {
    create(data: ICreateRperSeasonalCalendarDTO): Promise<RperSeasonalCalendar>
    findByRperId(rper_id: string): Promise<RperSeasonalCalendar>
    update(rperSeasonalCalendar: RperSeasonalCalendar): Promise<void>
}