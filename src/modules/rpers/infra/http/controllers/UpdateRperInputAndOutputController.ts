import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperInputAndOutputService } from '@modules/rpers/services/UpdateRperInputAndOutputService';

export class UpdateRperInputAndOutputController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperInputAndOutputService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
