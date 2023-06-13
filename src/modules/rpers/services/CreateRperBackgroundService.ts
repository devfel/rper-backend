import { inject, injectable } from 'tsyringe';
import Rper from '../infra/typeorm/entities/Rper';
import IRpersRepository from '../repositories/IRpersRepository';
import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface RequestParams {
  rper_id: string;
  backgroundFileName: string;
}

@injectable()
export class CreateRperBackgroundService {
  constructor(
    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  async execute({ backgroundFileName, rper_id }: RequestParams): Promise<Rper> {
    const rper = await this.rpersRepository.findById(rper_id);

    if (!rper) {
      throw new AppError('Rper not found', 404);
    }

    if (rper.background) {
      await this.storageProvider.deleteFile(rper.background);
    }

    const filename = await this.storageProvider.saveFile(backgroundFileName);

    rper.background = filename;
    rper.updated_at = new Date();

    await this.rpersRepository.update(rper);

    return rper;
  }
}
