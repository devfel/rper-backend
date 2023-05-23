import { RperResource } from '../enums/Rpers';

export interface ICreateRperEditResourceDTO {
  rper_id: string;
  user_id: string;
  resource: RperResource;
}
