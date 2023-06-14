import { inject, injectable } from 'tsyringe';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import AppError from '@shared/errors/AppError';
import { RperSection } from 'enums';
import IRpersRepository from '../repositories/IRpersRepository';

interface ExecuteParams {
  rper_id: string;
  section: string;
  new_status: string;
}

@injectable()
export class UpdateRperSectionStatusService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private readonly rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {}

  async execute({ rper_id, section, new_status }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const secondaryData = await this.rpersSecondaryDataRepository.findByRperId(rper_id);
      const rper = await this.rpersRepository.findById(rper_id);

      if (!secondaryData || !rper) {
        throw new AppError('RPER not found', 404);
      }

      secondaryData.status = new_status;
      rper.updated_at = new Date();

      await this.rpersSecondaryDataRepository.update(secondaryData);
      await this.rpersRepository.update(rper);
    }
  }
}
