import { inject, injectable } from 'tsyringe'
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository'
import { ICreateRperHistoricalMappingDTO } from '../dtos/ICreateRperHistoricalMappingDTO'
import AppError from '@shared/errors/AppError'
import IRpersRepository from '../repositories/IRpersRepository'

@injectable()
export class UpdateRperHistoricalMappingService {
  constructor(
    @inject('RperHistoricalMappingRepository')
    private rperHistoricalMappingRepository: IRperHistoricalMappingRepository,

    @inject('RpersRepository')
    private rpersRepository: IRpersRepository,
  ) {}

  async execute(data: ICreateRperHistoricalMappingDTO): Promise<void> {
    const rper = await this.rpersRepository.findById(data.rper_id)
    const historicalMapping =
      await this.rperHistoricalMappingRepository.findByRperId(data.rper_id)

    if (!historicalMapping || !rper) {
      throw new AppError('RPER not found', 404)
    }

    Object.assign(historicalMapping, data)
    rper.updated_at = new Date()

    await this.rperHistoricalMappingRepository.update(historicalMapping)
    await this.rpersRepository.update(rper)
  }
}
