import { RperStatus } from 'enums'

export interface IUpdateRperTransectWalkDTO {
  rper_id: string
  content?: string
  status?: RperStatus
}
