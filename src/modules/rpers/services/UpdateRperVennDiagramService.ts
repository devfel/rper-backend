import { inject, injectable } from 'tsyringe';
import { ICreateRperVennDiagramDTO } from '../dtos/ICreateRperVennDiagramDTO';
import { IRperVennDiagramRepository } from '../repositories/IRperVennDiagramRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperVennDiagramService {
    constructor(
        @inject('RpersVennDiagramRepository')
        private rpersVennDiagramRepository: IRperVennDiagramRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperVennDiagramDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const venndiagram = await this.rpersVennDiagramRepository.findByRperId(data.rper_id);

        if (!venndiagram || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(venndiagram, data);
        rper.updated_at = new Date();

        await this.rpersVennDiagramRepository.update(venndiagram);
        await this.rpersRepository.update(rper);
    }
}
