import { inject, injectable } from 'tsyringe'
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository'
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository'
import AppError from '@shared/errors/AppError'
import { RperSection } from 'enums'
import IRpersRepository from '../repositories/IRpersRepository'
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository'

interface ExecuteParams {
  rper_id: string
  section: string
  new_status: string
}

@injectable()
export class UpdateRperSectionStatusService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private readonly rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersAcknowledgmentRepository')
    private readonly rperAcknowledgmentRepository: IRperAcknowledgmentRepository,

    @inject('RperHistoricalMappingRepository')
    private rperHistoricalMappingRepository: IRperHistoricalMappingRepository,

    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {}

  async execute({ rper_id, section, new_status }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const secondaryData =
        await this.rpersSecondaryDataRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!secondaryData || !rper) {
        throw new AppError('RPER not found', 404)
      }

      secondaryData.status = new_status
      rper.updated_at = new Date()

      await this.rpersSecondaryDataRepository.update(secondaryData)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.ACKNOWLEDGMENT) {
      const acknowledgment =
        await this.rperAcknowledgmentRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!acknowledgment || !rper) {
        throw new AppError('RPER not found', 404)
      }

      acknowledgment.status = new_status
      rper.updated_at = new Date()

      await this.rperAcknowledgmentRepository.update(acknowledgment)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.HISTORICAL_MAPPING) {
      const historicalMapping =
        await this.rperHistoricalMappingRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!historicalMapping || !rper) {
        throw new AppError('RPER not found', 404)
      }

      historicalMapping.status = new_status
      rper.updated_at = new Date()

      await this.rperHistoricalMappingRepository.update(historicalMapping)
      await this.rpersRepository.update(rper)
    }
  }
}
