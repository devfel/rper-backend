import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperPrioritiesElectionService } from '@modules/rpers/services/UpdateRperPrioritiesElectionService';

export class UpdateRperPrioritiesElectionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperPrioritiesElectionService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
