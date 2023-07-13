import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperConstructionService } from '@modules/rpers/services/UpdateRperConstructionService';

export class UpdateRperConstructionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperConstructionService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
