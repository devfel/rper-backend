import { ICreateRperSeasonalCalendarDTO } from "@modules/rpers/dtos/ICreateRperSeasonalCalendarDTO";
import { IRperSeasonalCalendarRepository } from "@modules/rpers/repositories/IRperSeasonalCalendarRepository";
import { RperSeasonalCalendar } from "../entities/RperSeasonalCalendar";
import { getRepository, Repository } from "typeorm";

export class RperSeasonalCalendarRepository implements IRperSeasonalCalendarRepository {

    private ormRepository: Repository<RperSeasonalCalendar>;

    constructor() {
        this.ormRepository = getRepository(RperSeasonalCalendar);
    }

    async create(data: ICreateRperSeasonalCalendarDTO): Promise<RperSeasonalCalendar> {
        const rperSeasonalCalendar = this.ormRepository.create(data);

        await this.ormRepository.save(rperSeasonalCalendar);

        return rperSeasonalCalendar;
    }

    async findByRperId(rper_id: string): Promise<RperSeasonalCalendar> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperSeasonalCalendar: RperSeasonalCalendar): Promise<void> {
        await this.ormRepository.save(rperSeasonalCalendar);
    }

}