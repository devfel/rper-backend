import { inject, injectable } from 'tsyringe';
import { ICreateRperSeasonalCalendarDTO } from '../dtos/ICreateRperSeasonalCalendarDTO';
import { IRperSeasonalCalendarRepository } from '../repositories/IRperSeasonalCalendarRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperSeasonalCalendarService {
    constructor(
        @inject('RpersSeasonalCalendarRepository')
        private rpersSeasonalCalendarRepository: IRperSeasonalCalendarRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperSeasonalCalendarDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const seasonalcalendar = await this.rpersSeasonalCalendarRepository.findByRperId(data.rper_id);

        if (!seasonalcalendar || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(seasonalcalendar, data);
        rper.updated_at = new Date();

        await this.rpersSeasonalCalendarRepository.update(seasonalcalendar);
        await this.rpersRepository.update(rper);
    }
}
