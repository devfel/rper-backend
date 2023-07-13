import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperVennDiagramService } from '@modules/rpers/services/UpdateRperVennDiagramService';

export class UpdateRperVennDiagramController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperVennDiagramService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
