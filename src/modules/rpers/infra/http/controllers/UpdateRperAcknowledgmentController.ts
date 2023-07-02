import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperAcknowledgmentService } from '@modules/rpers/services/UpdateRperAcknowledgmentService';

export class UpdateRperAcknowledgmentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperAcknowledgmentService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
