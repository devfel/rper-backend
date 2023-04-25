import { inject, injectable } from 'tsyringe';
import Rper from '../infra/typeorm/entities/Rper';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class GetRperByIdService {
  constructor(
    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {}

  async execute(id: string): Promise<Rper> {
    const rper = await this.rpersRepository.findById(id);

    if (!rper) {
      throw new AppError('Rper not found', 404);
    }

    return rper;
  }
}
