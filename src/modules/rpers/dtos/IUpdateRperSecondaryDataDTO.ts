import { RperStatus } from 'enums'

export interface IUpdateRperSecondaryDataDTO {
  rper_id: string;
  content?: string;
  status?: RperStatus;
}
