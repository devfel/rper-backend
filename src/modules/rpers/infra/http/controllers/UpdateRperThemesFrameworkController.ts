import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperThemesFrameworkService } from '@modules/rpers/services/UpdateRperThemesFrameworkService';

export class UpdateRperThemesFrameworkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperThemesFrameworkService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
