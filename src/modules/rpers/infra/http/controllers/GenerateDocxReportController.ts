import { GenerateDocxReportService } from '@modules/rpers/services/GenerateDocxReportService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class GenerateDocxReportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rper_id } = request.params

    const generateRperReportService = container.resolve(
      GenerateDocxReportService,
    )

    const result = await generateRperReportService.execute({
      rper_id,
      user_name: request.user.name,
    })

    response.download(result)
    return response
  }
}
