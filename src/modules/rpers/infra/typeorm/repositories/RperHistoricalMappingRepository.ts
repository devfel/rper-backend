import { ICreateRperHistoricalMappingDTO } from '@modules/rpers/dtos/ICreateRperHistoricalMappingDTO'
import { IRperHistoricalMappingRepository } from '@modules/rpers/repositories/IRperHistoricalMappingRepository'
import { RperHistoricalMapping } from '../entities/RperHistoricalMapping'
import { Repository, getRepository } from 'typeorm'

export class RperHistoricalMappingRepository
  implements IRperHistoricalMappingRepository
{
  private ormRepository: Repository<RperHistoricalMapping>

  constructor() {
    this.ormRepository = getRepository(RperHistoricalMapping)
  }

  async create(
    data: ICreateRperHistoricalMappingDTO,
  ): Promise<RperHistoricalMapping> {
    const rperHistoricalMapping = this.ormRepository.create(data)

    await this.ormRepository.save(rperHistoricalMapping)

    return rperHistoricalMapping
  }

  async findByRperId(rper_id: string): Promise<RperHistoricalMapping> {
    return this.ormRepository.findOne({ where: { rper_id } })
  }

  async update(rperHistoricalMapping: RperHistoricalMapping): Promise<void> {
    await this.ormRepository.save(rperHistoricalMapping)
  }
}
