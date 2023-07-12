import { inject, injectable } from 'tsyringe';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';
import { IRperFinalConsiderationRepository } from '../repositories/IRperFinalConsiderationRepository';
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository';

import AppError from '@shared/errors/AppError';
import { RperSection } from 'enums';

interface ExecuteParams {
  rper_id: string;
  section: string;
}

@injectable()
export class GetRperSectionStatusService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private readonly rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersAcknowledgmentRepository')
    private readonly rperAcknowledgmentRepository: IRperAcknowledgmentRepository,
     
    @inject('RperHistoricalMappingRepository')
    private readonly rperHistoricalMappingRepository: IRperHistoricalMappingRepository,

    @inject('RpersFinalConsiderationRepository')
    private readonly rperFinalConsiderationRepository: IRperFinalConsiderationRepository,
  ) { }

  async execute({ rper_id, section }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const rper = await this.rpersSecondaryDataRepository.findByRperId(rper_id);

      if (!rper) {
        throw new AppError('RPER not found', 404);
      }

      return { status: rper.status };
    }

    if (section === RperSection.ACKNOWLEDGMENT) {
      const rper = await this.rperAcknowledgmentRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.FINALCONSIDERATION) {
      const rper = await this.rperFinalConsiderationRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.HISTORICAL_MAPPING) {
      const rper = await this.rperHistoricalMappingRepository.findByRperId(
        rper_id,
      )

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status }
    }
  }
}