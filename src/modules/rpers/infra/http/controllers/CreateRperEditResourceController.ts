import { ICreateRperEditResourceDTO } from '@modules/rpers/dtos/ICreateRperEditResourceDTO';
import { CreateRperEditResourceService } from '@modules/rpers/services/CreateRperEditResourceService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateRperEditResourceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { resource, rper_id, user_id }: ICreateRperEditResourceDTO = request.body;

    const createRperEditResourceService = container.resolve(CreateRperEditResourceService);

    await createRperEditResourceService.execute({ resource, rper_id, user_id });

    return response.status(201).json();
  }
}
