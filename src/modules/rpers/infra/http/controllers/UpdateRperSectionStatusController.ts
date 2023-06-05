import { UpdateRperSectionStatusService } from '@modules/rpers/services/UpdateRperSectionStatusService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateRperSectionStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rper_id, section } = request.params;
    const { new_status } = request.body;

    const updateRperSectionStatusService = container.resolve(UpdateRperSectionStatusService);

    await updateRperSectionStatusService.execute({
      rper_id,
      section,
      new_status,
    });

    return response.status(204).json();
  }
}
