import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRperSeasonalCalendarService } from '@modules/rpers/services/UpdateRperSeasonalCalendarService';

export class UpdateRperSeasonalCalendarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.body;
        const { rper_id } = request.params;

        const updateRperService = container.resolve(UpdateRperSeasonalCalendarService);

        await updateRperService.execute({ content, rper_id });

        return response.status(204).json();
    }
}
