import { inject, injectable } from 'tsyringe';
import { ICreateRperPresentationDTO } from '../dtos/ICreateRperPresentationDTO';
import { IRperPresentationRepository } from '../repositories/IRperPresentationRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperPresentationService {
    constructor(
        @inject('RpersPresentationRepository')
        private rpersPresentationRepository: IRperPresentationRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperPresentationDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const presentation = await this.rpersPresentationRepository.findByRperId(data.rper_id);

        if (!presentation || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(presentation, data);
        rper.updated_at = new Date();

        await this.rpersPresentationRepository.update(presentation);
        await this.rpersRepository.update(rper);
    }
}
