import { UploadImageService } from "@modules/rpers/services/UploadImageService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UploadImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;

    const uploadImageService = container.resolve(UploadImageService);

    const file = await uploadImageService.execute(filename);

    return response.status(201).json(file);
  }
}