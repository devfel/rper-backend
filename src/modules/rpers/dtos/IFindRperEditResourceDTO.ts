import { RperResource } from '../enums/Rpers'

export interface IFindRperEditResourceDTO {
  rper_id: string
  user_id: string
  resource: RperResource
}
