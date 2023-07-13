import { inject, injectable } from 'tsyringe';
import { ICreateRperConstructionDTO } from '../dtos/ICreateRperConstructionDTO';
import { IRperConstructionRepository } from '../repositories/IRperConstructionRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperConstructionService {
    constructor(
        @inject('RpersConstructionRepository')
        private rpersConstructionRepository: IRperConstructionRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperConstructionDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const construction = await this.rpersConstructionRepository.findByRperId(data.rper_id);

        if (!construction || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(construction, data);
        rper.updated_at = new Date();

        await this.rpersConstructionRepository.update(construction);
        await this.rpersRepository.update(rper);
    }
}
