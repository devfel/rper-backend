import { inject, injectable } from 'tsyringe';
import { ICreateRperRealityAndObjMatrixDTO } from '../dtos/ICreateRperRealityAndObjMatrixDTO';
import { IRperRealityAndObjMatrixRepository } from '../repositories/IRperRealityAndObjMatrixRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperRealityAndObjMatrixService {
    constructor(
        @inject('RpersRealityAndObjMatrixRepository')
        private rpersRealityAndObjMatrixRepository: IRperRealityAndObjMatrixRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperRealityAndObjMatrixDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const realityandobjmatrix = await this.rpersRealityAndObjMatrixRepository.findByRperId(data.rper_id);

        if (!realityandobjmatrix || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(realityandobjmatrix, data);
        rper.updated_at = new Date();

        await this.rpersRealityAndObjMatrixRepository.update(realityandobjmatrix);
        await this.rpersRepository.update(rper);
    }
}
