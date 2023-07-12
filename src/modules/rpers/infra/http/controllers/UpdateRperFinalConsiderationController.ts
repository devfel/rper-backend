import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperFinalConsiderationService } from '@modules/rpers/services/UpdateRperFinalConsiderationService';

export class UpdateRperFinalConsiderationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperFinalConsiderationService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}