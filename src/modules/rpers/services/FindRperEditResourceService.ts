import { inject, injectable } from 'tsyringe';
import { IRperEditResourceRepository } from '../repositories/IRperEditResourceRepository';
import { IFindRperEditResourceDTO } from '../dtos/IFindRperEditResourceDTO';
import { RperEditResource } from '../infra/typeorm/entities/RperEditResource';

@injectable()
export class FindRperEditResourceService {
  constructor(
    @inject('RperEditResourceRepository')
    private rperEditResourceRepository: IRperEditResourceRepository,
  ) {}

  async execute(data: IFindRperEditResourceDTO): Promise<RperEditResource> {
    return this.rperEditResourceRepository.findOne(data);
  }
}
