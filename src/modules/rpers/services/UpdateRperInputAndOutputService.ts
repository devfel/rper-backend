import { inject, injectable } from 'tsyringe';
import { ICreateRperInputAndOutputDTO } from '../dtos/ICreateRperInputAndOutputDTO';
import { IRperInputAndOutputRepository } from '../repositories/IRperInputAndOutputRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperInputAndOutputService {
    constructor(
        @inject('RpersInputAndOutputRepository')
        private rpersInputAndOutputRepository: IRperInputAndOutputRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperInputAndOutputDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const inputandoutput = await this.rpersInputAndOutputRepository.findByRperId(data.rper_id);

        if (!inputandoutput || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(inputandoutput, data);
        rper.updated_at = new Date();

        await this.rpersInputAndOutputRepository.update(inputandoutput);
        await this.rpersRepository.update(rper);
    }
}
