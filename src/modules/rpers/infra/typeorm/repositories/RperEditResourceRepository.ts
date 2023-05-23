import { ICreateRperEditResourceDTO } from '@modules/rpers/dtos/ICreateRperEditResourceDTO';
import { IRperEditResourceRepository } from '@modules/rpers/repositories/IRperEditResourceRepository';
import { RperEditResource } from '../entities/RperEditResource';
import { Repository, getRepository } from 'typeorm';
import { IFindRperEditResourceDTO } from '@modules/rpers/dtos/IFindRperEditResourceDTO';

export class RperEditResourceRepository implements IRperEditResourceRepository {
  private repository: Repository<RperEditResource>;

  constructor() {
    this.repository = getRepository(RperEditResource);
  }

  async create(data: ICreateRperEditResourceDTO): Promise<void> {
    const editResource = this.repository.create(data);

    await this.repository.save(editResource);
  }

  async findOne(data: IFindRperEditResourceDTO): Promise<RperEditResource> {
    return this.repository.findOne({
      where: {
        rper_id: data.rper_id,
        resource: data.resource,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
