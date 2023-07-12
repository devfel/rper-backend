import { inject, injectable } from 'tsyringe';
import { ICreateRperFinalConsiderationDTO } from '../dtos/ICreateRperFinalConsiderationDTO';
import { IRperFinalConsiderationRepository } from '../repositories/IRperFinalConsiderationRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperFinalConsiderationService {
    constructor(
        @inject('RpersFinalConsiderationRepository')
        private rpersFinalConsiderationRepository: IRperFinalConsiderationRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperFinalConsiderationDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const finalconsideration = await this.rpersFinalConsiderationRepository.findByRperId(data.rper_id);

        if (!finalconsideration || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(finalconsideration, data);
        rper.updated_at = new Date();

        await this.rpersFinalConsiderationRepository.update(finalconsideration);
        await this.rpersRepository.update(rper);
    }
}