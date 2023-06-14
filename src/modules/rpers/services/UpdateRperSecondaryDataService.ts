import { inject, injectable } from 'tsyringe';

import { IUpdateRperSecondaryDataDTO } from '../dtos/IUpdateRperSecondaryDataDTO';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class UpdateRperSecondaryDataService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersRepository')
    private rpersRepository: IRpersRepository,
  ) {}

  async execute(data: IUpdateRperSecondaryDataDTO): Promise<void> {
    const rper = await this.rpersRepository.findById(data.rper_id);
    const secondaryData = await this.rpersSecondaryDataRepository.findByRperId(data.rper_id);

    if (!secondaryData || !rper) {
      throw new AppError('RPER not found', 404);
    }

    Object.assign(secondaryData, data);
    rper.updated_at = new Date();

    await this.rpersSecondaryDataRepository.update(secondaryData);
    await this.rpersRepository.update(rper);
  }
}
