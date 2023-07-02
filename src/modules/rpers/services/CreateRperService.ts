import { RperStatus } from 'enums';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Rper from '../infra/typeorm/entities/Rper';
import IRpersRepository from '../repositories/IRpersRepository';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';

interface IRequestDTO {
    name: string;
    coordinator_id: string;
}

@injectable()
class CreateRperService {

    constructor(
        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,

        @inject('RpersSecondaryDataRepository')
        private rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

        @inject('RperAcknowledgmentRepository')
        private rperAcknowledgmentRepository: IRperAcknowledgmentRepository,
    ) { }

    public async execute({ name, coordinator_id }: IRequestDTO): Promise<Rper> {
        const findRperWithSameName = await this.rpersRepository.findRperByName(name);

        if (findRperWithSameName) {
            throw new AppError("RPER with same name already exists.");
        }

        const rper = await this.rpersRepository.create({
            name,
            coordinator_id,
        });

        const rperSecondaryData = await this.rpersSecondaryDataRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperAcknowledgment = await this.rperAcknowledgmentRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        rper.secondaryData = rperSecondaryData;
        rper.acknowledgment = rperAcknowledgment;

        await this.rpersRepository.update(rper);

        return rper;
    }
}

export default CreateRperService;