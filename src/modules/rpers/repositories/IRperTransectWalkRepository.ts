import { IUpdateRperTransectWalkDTO } from '../dtos/IUpdateRperTransectWalkDTO'
import { RperTransectWalk } from '../infra/typeorm/entities/RperTransectWalk'

export interface IRperTransectWalkRepository {
  create(data: IUpdateRperTransectWalkDTO): Promise<RperTransectWalk>
  findByRperId(rper_id: string): Promise<RperTransectWalk>
  update(rperTransectWalk: RperTransectWalk): Promise<void>
}
