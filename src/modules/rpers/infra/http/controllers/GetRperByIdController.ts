import { GetRperByIdService } from '@modules/rpers/services/GetRperByIdService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetRperByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getRperByIdService = container.resolve(GetRperByIdService);

    const rper = await getRperByIdService.execute(id);

    return response.json(classToClass(rper));
  }
}
