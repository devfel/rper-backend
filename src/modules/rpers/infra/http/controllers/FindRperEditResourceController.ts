import { RperResource } from '@modules/rpers/enums/Rpers'
import { FindRperEditResourceService } from '@modules/rpers/services/FindRperEditResourceService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class FindRperEditResourceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { resource, rper_id, user_id } = request.params

    const findRperEditResourceService = container.resolve(
      FindRperEditResourceService,
    )

    const editingResource = await findRperEditResourceService.execute({
      resource: resource as RperResource,
      rper_id,
      user_id,
    })

    return response.status(200).json(editingResource)
  }
}
