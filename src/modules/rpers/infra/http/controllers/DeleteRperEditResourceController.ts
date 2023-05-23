import { RperResource } from '@modules/rpers/enums/Rpers';
import { DeleteRperEditResourceService } from '@modules/rpers/services/DeleteRperEditResourceService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteRperEditResourceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { resource, rper_id, user_id } = request.params;

    const deleteRperEditResourceService = container.resolve(DeleteRperEditResourceService);

    await deleteRperEditResourceService.execute({
      resource: resource as RperResource,
      rper_id,
      user_id,
    });

    return response.status(204).json();
  }
}
