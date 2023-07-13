import { inject, injectable } from 'tsyringe';
import { ICreateRperOtherPreparationDTO } from '../dtos/ICreateRperOtherPreparationDTO';
import { IRperOtherPreparationRepository } from '../repositories/IRperOtherPreparationRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperOtherPreparationService {
    constructor(
        @inject('RpersOtherPreparationRepository')
        private rpersOtherPreparationRepository: IRperOtherPreparationRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperOtherPreparationDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const otherpreparation = await this.rpersOtherPreparationRepository.findByRperId(data.rper_id);

        if (!otherpreparation || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(otherpreparation, data);
        rper.updated_at = new Date();

        await this.rpersOtherPreparationRepository.update(otherpreparation);
        await this.rpersRepository.update(rper);
    }
}
