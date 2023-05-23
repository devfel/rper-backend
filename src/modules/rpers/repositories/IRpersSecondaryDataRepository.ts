import { IUpdateRperSecondaryDataDTO } from '../dtos/IUpdateRperSecondaryDataDTO';
import { RperSecondaryData } from '../infra/typeorm/entities/RperSecondaryData';

export interface IRpersSecondaryDataRepository {
  create(data: IUpdateRperSecondaryDataDTO): Promise<RperSecondaryData>;
  findByRperId(rper_id: string): Promise<RperSecondaryData>;
  update(rperSecondaryData: RperSecondaryData): Promise<void>;
}
