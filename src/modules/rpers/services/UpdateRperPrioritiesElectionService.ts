import { inject, injectable } from 'tsyringe';
import { ICreateRperPrioritiesElectionDTO } from '../dtos/ICreateRperPrioritiesElectionDTO';
import { IRperPrioritiesElectionRepository } from '../repositories/IRperPrioritiesElectionRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperPrioritiesElectionService {
    constructor(
        @inject('RpersPrioritiesElectionRepository')
        private rpersPrioritiesElectionRepository: IRperPrioritiesElectionRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperPrioritiesElectionDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const prioritieselection = await this.rpersPrioritiesElectionRepository.findByRperId(data.rper_id);

        if (!prioritieselection || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(prioritieselection, data);
        rper.updated_at = new Date();

        await this.rpersPrioritiesElectionRepository.update(prioritieselection);
        await this.rpersRepository.update(rper);
    }
}
