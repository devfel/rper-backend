import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperRealityAndObjMatrixService } from '@modules/rpers/services/UpdateRperRealityAndObjMatrixService';

export class UpdateRperRealityAndObjMatrixController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperRealityAndObjMatrixService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
