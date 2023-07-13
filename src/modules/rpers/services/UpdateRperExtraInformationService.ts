import { inject, injectable } from 'tsyringe';
import { ICreateRperExtraInformationDTO } from '../dtos/ICreateRperExtraInformationDTO';
import { IRperExtraInformationRepository } from '../repositories/IRperExtraInformationRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperExtraInformationService {
    constructor(
        @inject('RpersExtraInformationRepository')
        private rpersExtraInformationRepository: IRperExtraInformationRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperExtraInformationDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const extrainformation = await this.rpersExtraInformationRepository.findByRperId(data.rper_id);

        if (!extrainformation || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(extrainformation, data);
        rper.updated_at = new Date();

        await this.rpersExtraInformationRepository.update(extrainformation);
        await this.rpersRepository.update(rper);
    }
}
