import { inject, injectable } from 'tsyringe'
import IRpersRepository from '../repositories/IRpersRepository'
import { IGenerateRperReportDTO } from '../dtos/IGenerateRperReportDTO'
import AppError from '@shared/errors/AppError'
import { RperStatus } from 'enums'
import { Document, Packer, Paragraph } from 'docx'
import { writeFileSync } from 'fs'
import path from 'path'

@injectable()
export class GenerateDocxReportService {
  constructor(
    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {}

  private isFinished(section: any) {
    return (
      section.status &&
      (section.status === RperStatus.COMPLETED ||
        section.status === RperStatus.COMPLETED)
    )
  }

  async execute({ rper_id, user_name }: IGenerateRperReportDTO): Promise<any> {
    const rper = await this.rpersRepository.findById(rper_id)

    if (!rper) {
      throw new AppError('RPER not found', 404)
    }

    const secondaryDataFinished = this.isFinished(rper.secondaryData)
    const acknowledgmentFinished = this.isFinished(rper.acknowledgment)
    const dailyRoutineFinished = this.isFinished(rper.dailyroutine)
    const extraInformationFinished = this.isFinished(rper.extrainformation)
    const finalConsiderationFinished = this.isFinished(rper.finalconsideration)
    const focusGroupFinished = this.isFinished(rper.focusgroup)
    const historicalMappingFinished = this.isFinished(rper.historicalMapping)
    const inputAndOutputFinished = this.isFinished(rper.inputandoutput)
    const interviewsFinished = this.isFinished(rper.interviews)
    const otherFieldworkFinished = this.isFinished(rper.otherfieldwork)
    const otherPreparationFinished = this.isFinished(rper.otherpreparation)
    const presentationFinished = this.isFinished(rper.presentation)
    const priorityAndSelectionFinished = this.isFinished(
      rper.prioritieselection,
    )
    const realityAndObjMatrixFinished = this.isFinished(
      rper.realityandobjmatrix,
    )
    const seasonalCalendarFinished = this.isFinished(rper.seasonalcalendar)
    const themesFrameworkFinished = this.isFinished(rper.themesframework)
    const transectWalkFinished = this.isFinished(rper.transectWalk)
    const vennDiagramFinished = this.isFinished(rper.venndiagram)
    const constructionFinished = this.isFinished(rper.construction)

    const document = new Document({
      creator: user_name,
      description: '',
      title: `${rper.name}`,
      sections: [
        {
          children: [
            new Paragraph({
              text: 'Hello World',
            }),
          ],
        },
      ],
    })

    const outputPath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp')

    Packer.toBuffer(document).then(buffer => {
      writeFileSync(
        `${outputPath}/${rper.name}-${new Date().getTime()}.docx`,
        buffer,
      )
    })
  }
}
