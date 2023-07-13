import { inject, injectable } from 'tsyringe';
import { ICreateRperThemesFrameworkDTO } from '../dtos/ICreateRperThemesFrameworkDTO';
import { IRperThemesFrameworkRepository } from '../repositories/IRperThemesFrameworkRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperThemesFrameworkService {
    constructor(
        @inject('RpersThemesFrameworkRepository')
        private rpersThemesFrameworkRepository: IRperThemesFrameworkRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperThemesFrameworkDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const themesframework = await this.rpersThemesFrameworkRepository.findByRperId(data.rper_id);

        if (!themesframework || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(themesframework, data);
        rper.updated_at = new Date();

        await this.rpersThemesFrameworkRepository.update(themesframework);
        await this.rpersRepository.update(rper);
    }
}
