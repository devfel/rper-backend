import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperPresentationService } from '@modules/rpers/services/UpdateRperPresentationService';

export class UpdateRperPresentationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperPresentationService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
