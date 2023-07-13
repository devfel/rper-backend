import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperDailyRoutineService } from '@modules/rpers/services/UpdateRperDailyRoutineService';

export class UpdateRperDailyRoutineController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperDailyRoutineService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
