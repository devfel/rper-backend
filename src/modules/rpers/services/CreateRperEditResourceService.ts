import { inject, injectable } from 'tsyringe';
import { IRperEditResourceRepository } from '../repositories/IRperEditResourceRepository';
import { ICreateRperEditResourceDTO } from '../dtos/ICreateRperEditResourceDTO';
import AppError from '@shared/errors/AppError';

@injectable()
export class CreateRperEditResourceService {
  constructor(
    @inject('RperEditResourceRepository')
    private rperEditResourceRepository: IRperEditResourceRepository,
  ) {}

  async execute(data: ICreateRperEditResourceDTO): Promise<void> {
    const existingEditResource = await this.rperEditResourceRepository.findOne({
      resource: data.resource,
      rper_id: data.rper_id,
      user_id: data.user_id,
    });

    if (existingEditResource) {
      throw new AppError('User already editing this resource!');
    }

    await this.rperEditResourceRepository.create(data);
  }
}
