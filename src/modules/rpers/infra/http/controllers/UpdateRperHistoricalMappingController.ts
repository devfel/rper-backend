import { UpdateRperHistoricalMappingService } from '@modules/rpers/services/UpdateRperHistoricalMappingService'
import { container } from 'tsyringe'
import { Request, Response } from 'express'

export class UpdateRperHistoricalMappingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { content } = request.body
    const { rper_id } = request.params

    const updateRperService = container.resolve(
      UpdateRperHistoricalMappingService,
    )

    await updateRperService.execute({ content, rper_id })

    return response.status(204).json()
  }
}
