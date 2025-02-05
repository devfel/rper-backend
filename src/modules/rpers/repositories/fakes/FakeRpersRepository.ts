import { v4 as uuid } from 'uuid'

import IRpersRepository from '@modules/rpers/repositories/IRpersRepository'
import ICreateRperDTO from '@modules/rpers/dtos/ICreateRperDTO'

import Rper from '../../infra/typeorm/entities/Rper'

class RpersRepository implements IRpersRepository {
  findById(id: string): Promise<Rper | undefined> {
    throw new Error('Method not implemented.')
  }

  update(rper: Rper): Promise<Rper> {
    throw new Error('Method not implemented.')
  }

  private rpers: Rper[] = []

  public async findRperByName(name: string): Promise<Rper | undefined> {
    const findRperByName = this.rpers.find(rper => rper.name === name)

    return findRperByName
  }

  public async create({ name, coordinator_id }: ICreateRperDTO): Promise<Rper> {
    const rper = new Rper()

    // rper.rper_id = uuid();
    // rper.name = name;
    // rper.coordinator_id = coordinator_id;
    //Relaced by Object.assign:
    Object.assign(rper, { id: uuid(), name, coordinator_id })

    this.rpers.push(rper)
    return rper
  }

  public async findAllRpers(): Promise<Rper[]> {
    let { rpers } = this
    rpers = this.rpers.map(el => el)

    return rpers
  }
}

export default RpersRepository
