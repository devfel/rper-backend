import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperInterviewsService } from '@modules/rpers/services/UpdateRperInterviewsService';

export class UpdateRperInterviewsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperInterviewsService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
