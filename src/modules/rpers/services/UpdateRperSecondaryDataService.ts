import { inject, injectable } from 'tsyringe';

import { IUpdateRperSecondaryDataDTO } from '../dtos/IUpdateRperSecondaryDataDTO';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';

@injectable()
export class UpdateRperSecondaryDataService {
    constructor(
        @inject('RpersSecondaryDataRepository')
        private rpersSecondaryDataRepository: IRpersSecondaryDataRepository,
    ) { }

    async execute(data: IUpdateRperSecondaryDataDTO): Promise<void> {
        const rper = await this.rpersSecondaryDataRepository.findByRperId(
            data.rper_id,
        );

        Object.assign(rper, data);

        await this.rpersSecondaryDataRepository.update(rper);
    }
}