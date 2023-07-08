import { inject, injectable } from 'tsyringe'
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository'
import AppError from '@shared/errors/AppError'
import { RperSection } from 'enums'
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository'

interface ExecuteParams {
  rper_id: string
  section: string
}

@injectable()
export class GetRperSectionStatusService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private readonly rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersAcknowledgmentRepository')
    private readonly rperAcknowledgmentRepository: IRperAcknowledgmentRepository,
  ) {}

  async execute({ rper_id, section }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const rper = await this.rpersSecondaryDataRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status }
    }

    if (section === RperSection.ACKNOWLEDGMENT) {
      const rper = await this.rperAcknowledgmentRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status }
    }
  }
}
