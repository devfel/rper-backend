import { inject, injectable } from 'tsyringe';
import { ICreateRperOtherFieldworkDTO } from '../dtos/ICreateRperOtherFieldworkDTO';
import { IRperOtherFieldworkRepository } from '../repositories/IRperOtherFieldworkRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperOtherFieldworkService {
    constructor(
        @inject('RpersOtherFieldworkRepository')
        private rpersOtherFieldworkRepository: IRperOtherFieldworkRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperOtherFieldworkDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const otherfieldwork = await this.rpersOtherFieldworkRepository.findByRperId(data.rper_id);

        if (!otherfieldwork || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(otherfieldwork, data);
        rper.updated_at = new Date();

        await this.rpersOtherFieldworkRepository.update(otherfieldwork);
        await this.rpersRepository.update(rper);
    }
}
