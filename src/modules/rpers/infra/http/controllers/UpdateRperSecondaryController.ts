import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperSecondaryDataService } from '@modules/rpers/services/UpdateRperSecondaryDataService';

export class UpdateRperSecondaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { content, editable } = request.body;
    const { rper_id } = request.params;

    const updateRperService = container.resolve(UpdateRperSecondaryDataService);

    await updateRperService.execute({ content, rper_id, editable });

    return response.status(204).json();
  }
}
