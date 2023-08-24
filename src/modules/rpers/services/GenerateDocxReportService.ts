import { inject, injectable } from 'tsyringe'
import IRpersRepository from '../repositories/IRpersRepository'
import { IGenerateRperReportDTO } from '../dtos/IGenerateRperReportDTO'
import AppError from '@shared/errors/AppError'
import { RperStatus } from 'enums'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import HtmlToDocX from 'html-to-docx'
import { getActualDate } from '../utils/formatDate'



@injectable()
export class GenerateDocxReportService {
  constructor(
    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) {
    Handlebars.registerHelper('simplifyContent', this.simplifyContent.bind(this));
  }

  private simplifyContent(htmlString: string): string {
    let imgRegexReplacer = /<div class="se-component se-image-container[^>]+><figure[^>]*><img[^>]+src="([^"]+)"[^>]*><\/figure><\/div>/g;

    return htmlString.replace(imgRegexReplacer, (match, srcValue) => {
      return `<img src="${srcValue}" />`;
    });
  }

  private isFinished(section: any) {
    return (
      section.status &&
      (section.status === RperStatus.COMPLETED ||
        section.status === RperStatus.IN_PROGRESS)
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

    // const outputPath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp')

    const pathToView = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'views',
      'report.hbs',
    )

    const page = readFileSync(pathToView).toString()
    const actualDate = getActualDate()

    const html = Handlebars.compile(page)
    const reportPage = html({
      rper_name: rper.name,
      coordinator_name: rper.coordinator.name,
      actualDate,
      members: rper.members,
      secondaryData: secondaryDataFinished ? rper.secondaryData : null,
      acknowledgment: acknowledgmentFinished ? rper.acknowledgment : null,
      dailyRoutine: dailyRoutineFinished ? rper.dailyroutine : null,
      extraInformation: extraInformationFinished ? rper.extrainformation : null,
      finalConsideration: finalConsiderationFinished
        ? rper.finalconsideration
        : null,
      focusGroup: focusGroupFinished ? rper.focusgroup : null,
      historicalMapping: historicalMappingFinished
        ? rper.historicalMapping
        : null,
      inputAndOutput: inputAndOutputFinished ? rper.inputandoutput : null,
      interviews: interviewsFinished ? rper.interviews : null,
      otherFieldwork: otherFieldworkFinished ? rper.otherfieldwork : null,
      otherPreparation: otherPreparationFinished ? rper.otherpreparation : null,
      presentation: presentationFinished ? rper.presentation : null,
      priorityAndElection: priorityAndSelectionFinished
        ? rper.prioritieselection
        : null,
      realityAndObjMatrix: realityAndObjMatrixFinished
        ? rper.realityandobjmatrix
        : null,
      seasonalCalendar: seasonalCalendarFinished ? rper.seasonalcalendar : null,
      themesFramework: themesFrameworkFinished ? rper.themesframework : null,
      transectWalk: transectWalkFinished ? rper.transectWalk : null,
      vennDiagram: vennDiagramFinished ? rper.venndiagram : null,
      construction: constructionFinished ? rper.construction : null,
    })

    const docxBuffer = await HtmlToDocX(reportPage, null)
    const outputPath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp')

    writeFileSync(
      `${outputPath}/${rper.name}-${new Date().getTime()}.docx`,
      docxBuffer,
    )

    return reportPage
  }
}
