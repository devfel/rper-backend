import { ICreateRperHistoricalMappingDTO } from '../dtos/ICreateRperHistoricalMappingDTO'
import { RperHistoricalMapping } from '../infra/typeorm/entities/RperHistoricalMapping'

export interface IRperHistoricalMappingRepository {
  create(data: ICreateRperHistoricalMappingDTO): Promise<RperHistoricalMapping>
  findByRperId(rper_id: string): Promise<RperHistoricalMapping>
  update(rperHistoricalMapping: RperHistoricalMapping): Promise<void>
}
