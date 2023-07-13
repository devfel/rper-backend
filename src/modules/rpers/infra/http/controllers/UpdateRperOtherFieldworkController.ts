import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperOtherFieldworkService } from '@modules/rpers/services/UpdateRperOtherFieldworkService';

export class UpdateRperOtherFieldworkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperOtherFieldworkService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
