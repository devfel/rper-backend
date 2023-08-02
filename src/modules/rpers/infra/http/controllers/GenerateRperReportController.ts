import { GenerateRperReportService } from '@modules/rpers/services/GenerateRperReportService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class GenerateRperReportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rper_id } = request.params

    const generateRperReportService = container.resolve(
      GenerateRperReportService,
    )

    const result = await generateRperReportService.execute({
      rper_id,
      type: 'batata',
    })

    response.send(result)
  }
}
