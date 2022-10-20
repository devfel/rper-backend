import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateRperMembersDTO } from '@modules/rpers/dtos/ICreateRperMembersDTO';
import { CreateRperMembersService } from '@modules/rpers/services/CreateRperMembersService';

export class CreateRpersMembersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data: ICreateRperMembersDTO = request.body;

        const createRperMembersService = container.resolve(CreateRperMembersService);

        await createRperMembersService.execute(data);

        return response.status(201).json();
    }
}