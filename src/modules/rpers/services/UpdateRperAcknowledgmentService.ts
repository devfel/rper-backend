import { inject, injectable } from 'tsyringe';
import { ICreateRperAcknowledgmentDTO } from '../dtos/ICreateRperAcknowledgmentDTO';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperAcknowledgmentService {
    constructor(
        @inject('RpersAcknowledgmentRepository')
        private rpersAcknowledgmentRepository: IRperAcknowledgmentRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperAcknowledgmentDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const acknowledgment = await this.rpersAcknowledgmentRepository.findByRperId(data.rper_id);

        if (!acknowledgment || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(acknowledgment, data);
        rper.updated_at = new Date();

        await this.rpersAcknowledgmentRepository.update(acknowledgment);
        await this.rpersRepository.update(rper);
    }
}
