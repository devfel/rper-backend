import { RemoveRperMemberService } from '@modules/rpers/services/RemoveRperMemberService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class RemoveRperMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rper_id, user_id } = request.params;

    const removeRperMemberService = container.resolve(RemoveRperMemberService);

    await removeRperMemberService.execute({ rper_id, user_id });

    return response.status(204).json();
  }
}
