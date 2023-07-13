import { inject, injectable } from 'tsyringe';
import { ICreateRperDailyRoutineDTO } from '../dtos/ICreateRperDailyRoutineDTO';
import { IRperDailyRoutineRepository } from '../repositories/IRperDailyRoutineRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperDailyRoutineService {
    constructor(
        @inject('RpersDailyRoutineRepository')
        private rpersDailyRoutineRepository: IRperDailyRoutineRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperDailyRoutineDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const dailyroutine = await this.rpersDailyRoutineRepository.findByRperId(data.rper_id);

        if (!dailyroutine || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(dailyroutine, data);
        rper.updated_at = new Date();

        await this.rpersDailyRoutineRepository.update(dailyroutine);
        await this.rpersRepository.update(rper);
    }
}
