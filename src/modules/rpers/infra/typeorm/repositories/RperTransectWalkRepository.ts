import { Repository, getRepository } from 'typeorm'
import { IRperTransectWalkRepository } from '@modules/rpers/repositories/IRperTransectWalkRepository'
import { RperTransectWalk } from '../entities/RperTransectWalk'
import { IUpdateRperTransectWalkDTO } from '@modules/rpers/dtos/IUpdateRperTransectWalkDTO'

export class RperTransectWalkRepository implements IRperTransectWalkRepository {
  private ormRepository: Repository<RperTransectWalk>

  constructor() {
    this.ormRepository = getRepository(RperTransectWalk)
  }

  async create(data: IUpdateRperTransectWalkDTO): Promise<RperTransectWalk> {
    const rperTransectWalk = this.ormRepository.create(data)

    await this.ormRepository.save(rperTransectWalk)

    return rperTransectWalk
  }

  async findByRperId(rper_id: string): Promise<RperTransectWalk> {
    return this.ormRepository.findOne({ where: { rper_id } })
  }

  async update(rperTransectWalk: RperTransectWalk): Promise<void> {
    await this.ormRepository.save(rperTransectWalk)
  }
}
