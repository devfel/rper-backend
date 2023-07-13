import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperExtraInformationService } from '@modules/rpers/services/UpdateRperExtraInformationService';

export class UpdateRperExtraInformationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperExtraInformationService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
