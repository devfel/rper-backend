import { inject, injectable } from 'tsyringe';
import { ICreateRperInterviewsDTO } from '../dtos/ICreateRperInterviewsDTO';
import { IRperInterviewsRepository } from '../repositories/IRperInterviewsRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperInterviewsService {
    constructor(
        @inject('RpersInterviewsRepository')
        private rpersInterviewsRepository: IRperInterviewsRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperInterviewsDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const interviews = await this.rpersInterviewsRepository.findByRperId(data.rper_id);

        if (!interviews || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(interviews, data);
        rper.updated_at = new Date();

        await this.rpersInterviewsRepository.update(interviews);
        await this.rpersRepository.update(rper);
    }
}
