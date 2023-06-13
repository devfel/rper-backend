import { CreateRperBackgroundService } from '@modules/rpers/services/CreateRperBackgroundService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateRperBackgroundController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const { rper_id } = request.params;

    const createRperBackgroundService = container.resolve(CreateRperBackgroundService);

    const rper = await createRperBackgroundService.execute({
      backgroundFileName: file.filename,
      rper_id,
    });

    return response.json(rper);
  }
}
