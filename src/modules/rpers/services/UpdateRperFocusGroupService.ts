import { inject, injectable } from 'tsyringe';
import { ICreateRperFocusGroupDTO } from '../dtos/ICreateRperFocusGroupDTO';
import { IRperFocusGroupRepository } from '../repositories/IRperFocusGroupRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperFocusGroupService {
    constructor(
        @inject('RpersFocusGroupRepository')
        private rpersFocusGroupRepository: IRperFocusGroupRepository,

        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,
    ) { }

    async execute(data: ICreateRperFocusGroupDTO): Promise<void> {
        const rper = await this.rpersRepository.findById(data.rper_id);
        const focusgroup = await this.rpersFocusGroupRepository.findByRperId(data.rper_id);

        if (!focusgroup || !rper) {
            throw new AppError('RPER not found', 404);
        }

        Object.assign(focusgroup, data);
        rper.updated_at = new Date();

        await this.rpersFocusGroupRepository.update(focusgroup);
        await this.rpersRepository.update(rper);
    }
}
