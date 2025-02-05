import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import IRpersRepository from '../repositories/IRpersRepository'
import { IRperTransectWalkRepository } from '../repositories/IRperTransectWalkRepository'
import { IUpdateRperTransectWalkDTO } from '../dtos/IUpdateRperTransectWalkDTO'

@injectable()
export class UpdateRperTransectWalkService {
  constructor(
    @inject('RperTransectWalkRepository')
    private rperTransectWalkRepository: IRperTransectWalkRepository,

    @inject('RpersRepository')
    private rpersRepository: IRpersRepository,
  ) {}

  async execute(data: IUpdateRperTransectWalkDTO): Promise<void> {
    const rper = await this.rpersRepository.findById(data.rper_id)
    const transectWalk = await this.rperTransectWalkRepository.findByRperId(
      data.rper_id,
    )

    if (!transectWalk || !rper) {
      throw new AppError('RPER not found', 404)
    }

    Object.assign(transectWalk, data)
    rper.updated_at = new Date()

    await this.rperTransectWalkRepository.update(transectWalk)
    await this.rpersRepository.update(rper)
  }
}
