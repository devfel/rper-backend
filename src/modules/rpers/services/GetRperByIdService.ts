import { inject, injectable } from 'tsyringe'
import Rper from '../infra/typeorm/entities/Rper'
import IRpersRepository from '../repositories/IRpersRepository'
import AppError from '@shared/errors/AppError'
import { RperStatus } from 'enums'

@injectable()
export class GetRperByIdService {
  constructor(
    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {}

  async execute(id: string): Promise<Rper> {
    const rper = await this.rpersRepository.findById(id)

    if (!rper) {
      throw new AppError('Rper not found', 404)
    }

    const rperSections = [
      rper.secondaryData,
      rper.acknowledgment,
      rper.historicalMapping,
      rper.transectWalk,
      rper.finalConsideration,
    ]

    const statusCompleted = rperSections.reduce((acc, section) => {
      if (
        section &&
        (section.status === RperStatus.COMPLETED ||
          section.status === RperStatus.NOT_APPLICABLE)
      ) {
        return acc + 1
      }
      return acc
    }, 0)

    const progress = ((statusCompleted / rperSections.length) * 100).toFixed(0)

    Object.assign(rper, { progress })

    return rper
  }
}
