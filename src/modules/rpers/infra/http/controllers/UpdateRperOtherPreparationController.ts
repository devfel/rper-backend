import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperOtherPreparationService } from '@modules/rpers/services/UpdateRperOtherPreparationService';

export class UpdateRperOtherPreparationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperOtherPreparationService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
