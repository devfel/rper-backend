import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperFocusGroupService } from '@modules/rpers/services/UpdateRperFocusGroupService';

export class UpdateRperFocusGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperFocusGroupService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
