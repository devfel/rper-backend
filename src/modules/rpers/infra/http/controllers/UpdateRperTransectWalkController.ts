import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { UpdateRperTransectWalkService } from '@modules/rpers/services/UpdateRperTransectWalkService.ts'

export class UpdateRperTransectWalkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { content } = request.body
    const { rper_id } = request.params

    const updateRperService = container.resolve(UpdateRperTransectWalkService)

    await updateRperService.execute({ content, rper_id })

    return response.status(204).json()
  }
}
