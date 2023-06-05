import { inject, injectable } from 'tsyringe';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import AppError from '@shared/errors/AppError';
import { RperSection } from 'enums';

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
  ) {}

  async execute({ rper_id, section, new_status }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const rper = await this.rpersSecondaryDataRepository.findByRperId(rper_id);

      if (!rper) {
        throw new AppError('RPER not found', 404);
      }

      rper.status = new_status;

      await this.rpersSecondaryDataRepository.update(rper);
    }
  }
}
