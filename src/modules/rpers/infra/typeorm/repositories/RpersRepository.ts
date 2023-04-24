import Rper from '../entities/Rper';
import IRpersRepository from '@modules/rpers/repositories/IRpersRepository';
import { getRepository, Repository } from 'typeorm';
import ICreateRperDTO from '@modules/rpers/dtos/ICreateRperDTO';

class RpersRepository implements IRpersRepository {
  private ormRepository: Repository<Rper>;

  constructor() {
    this.ormRepository = getRepository(Rper);
  }

  public async findRperByName(name: string): Promise<Rper | undefined> {
    const findRperByName = await this.ormRepository.findOne({
      where: { name },
    });

    return findRperByName;
  }

  public async create({ name, coordinator_id }: ICreateRperDTO): Promise<Rper> {
    const rper = this.ormRepository.create({ name, coordinator_id });
    await this.ormRepository.save(rper);
    return rper;
  }

  public async findAllRpers(): Promise<Rper[]> {
    const rpers = await this.ormRepository.find();
    return rpers;
  }

  public async findById(id: string): Promise<Rper> {
    const rper = await this.ormRepository.findOne(id, {
      relations: ['coordinator'],
    });
    return rper;
  }

  public async update(rper: Rper): Promise<Rper> {
    await this.ormRepository.save(rper);
    return rper;
  }
}

export default RpersRepository;
