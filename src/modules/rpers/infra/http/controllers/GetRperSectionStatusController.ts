import { GetRperSectionStatusService } from '@modules/rpers/services/GetRperSectionStatusService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetRperSectionStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rper_id, section } = request.params;

    const getRperSectionStatusService = container.resolve(GetRperSectionStatusService);

    const rperSectionStatus = await getRperSectionStatusService.execute({
      rper_id,
      section,
    });

    return response.json(rperSectionStatus);
  }
}
