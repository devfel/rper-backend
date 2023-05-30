import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import { inject, injectable } from "tsyringe";

@injectable()
export class UploadImageService {
  constructor(
    @inject('StorageProvider')
    private readonly storageProvider: IStorageProvider
  ) {}

  async execute(filename: string): Promise<string> {
    const newFile = await this.storageProvider.saveFile(filename);

    return `${process.env.APP_API_URL}/files/${newFile}`;
  }
}