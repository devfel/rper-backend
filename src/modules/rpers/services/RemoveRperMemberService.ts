import { inject, injectable } from 'tsyringe';
import { IRemoveRperMemberDTO } from '../dtos/IRemoveRperMemberDTO';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
export class RemoveRperMemberService {
  constructor(
    @inject('RpersRepository')
    private rpersRepository: IRpersRepository,
  ) {}

  async execute({ rper_id, user_id }: IRemoveRperMemberDTO): Promise<void> {
    const rper = await this.rpersRepository.findById(rper_id);

    if (!rper) {
      throw new AppError('RPER not found!', 404);
    }

    const rperMemberIndex = rper.members.findIndex(member => member.user_id === user_id);

    if (rperMemberIndex >= 0) {
      rper.members.splice(rperMemberIndex, 1);
    }

    await this.rpersRepository.update(rper);
  }
}
