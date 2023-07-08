import { RperStatus } from 'enums'

export interface ICreateRperHistoricalMappingDTO {
  rper_id: string
  content?: string
  status?: RperStatus
}
