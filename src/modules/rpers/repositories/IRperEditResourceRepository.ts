import { ICreateRperEditResourceDTO } from '../dtos/ICreateRperEditResourceDTO';
import { IFindRperEditResourceDTO } from '../dtos/IFindRperEditResourceDTO';
import { RperEditResource } from '../infra/typeorm/entities/RperEditResource';

export interface IRperEditResourceRepository {
  create(data: ICreateRperEditResourceDTO): Promise<void>;
  findOne(data: IFindRperEditResourceDTO): Promise<RperEditResource>;
  delete(id: string): Promise<void>;
}
