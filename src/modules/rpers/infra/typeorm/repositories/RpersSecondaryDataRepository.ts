import { getRepository, Repository } from 'typeorm';

import { IUpdateRperSecondaryDataDTO } from '@modules/rpers/dtos/IUpdateRperSecondaryDataDTO';
import { IRpersSecondaryDataRepository } from '@modules/rpers/repositories/IRpersSecondaryDataRepository';

import { RperSecondaryData } from '../entities/RperSecondaryData';

export class RpersSecondaryDataRepository
    implements IRpersSecondaryDataRepository {
    private ormRepository: Repository<RperSecondaryData>;

    constructor() {
        this.ormRepository = getRepository(RperSecondaryData);
    }

    async create(data: IUpdateRperSecondaryDataDTO): Promise<RperSecondaryData> {
        const secondaryData = this.ormRepository.create(data);

        await this.ormRepository.save(secondaryData);

        return secondaryData;
    }

    async findByRperId(rper_id: string): Promise<RperSecondaryData> {
        return this.ormRepository.findOne({ rper_id });
    }

    async update(rperSecondaryData: RperSecondaryData): Promise<void> {
        await this.ormRepository.save(rperSecondaryData);
    }
}