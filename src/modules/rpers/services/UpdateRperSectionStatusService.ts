import { inject, injectable } from 'tsyringe';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';
import { IRperFinalConsiderationRepository } from '../repositories/IRperFinalConsiderationRepository';
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository'
import { IRperTransectWalkRepository } from '../repositories/IRperTransectWalkRepository'
import { IRperConstructionRepository } from '../repositories/IRperConstructionRepository';
import { IRperDailyRoutineRepository } from '../repositories/IRperDailyRoutineRepository';
import { IRperExtraInformationRepository } from '../repositories/IRperExtraInformationRepository';
import { IRperFocusGroupRepository } from '../repositories/IRperFocusGroupRepository';
import { IRperInputAndOutputRepository } from '../repositories/IRperInputAndOutputRepository';
import { IRperInterviewsRepository } from '../repositories/IRperInterviewsRepository';
import { IRperOtherFieldworkRepository } from '../repositories/IRperOtherFieldworkRepository';
import { IRperOtherPreparationRepository } from '../repositories/IRperOtherPreparationRepository';
import { IRperPresentationRepository } from '../repositories/IRperPresentationRepository';
import { IRperPrioritiesElectionRepository } from '../repositories/IRperPrioritiesElectionRepository';
import { IRperRealityAndObjMatrixRepository } from '../repositories/IRperRealityAndObjMatrixRepository';
import { IRperSeasonalCalendarRepository } from '../repositories/IRperSeasonalCalendarRepository';
import { IRperThemesFrameworkRepository } from '../repositories/IRperThemesFrameworkRepository';
import { IRperVennDiagramRepository } from '../repositories/IRperVennDiagramRepository';

import AppError from '@shared/errors/AppError';
import { RperSection } from 'enums';
import IRpersRepository from '../repositories/IRpersRepository';


interface ExecuteParams {
  rper_id: string
  section: string
  new_status: string
}

@injectable()
export class UpdateRperSectionStatusService {
  constructor(
    @inject('RpersSecondaryDataRepository')
    private readonly rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

    @inject('RpersAcknowledgmentRepository')
    private readonly rperAcknowledgmentRepository: IRperAcknowledgmentRepository,

    @inject('RperHistoricalMappingRepository')
    private readonly rperHistoricalMappingRepository: IRperHistoricalMappingRepository,

    @inject('RperTransectWalkRepository')
    private readonly rperTransectWalkRepository: IRperTransectWalkRepository,

    @inject('RpersFinalConsiderationRepository')
    private readonly rperFinalConsiderationRepository: IRperFinalConsiderationRepository,

    @inject('RpersExtraInformationRepository')
    private readonly rperExtraInformationRepository: IRperExtraInformationRepository,

    @inject('RpersOtherFieldworkRepository')
    private readonly rperOtherFieldworkRepository: IRperOtherFieldworkRepository,

    @inject('RpersPrioritiesElectionRepository')
    private readonly rperPrioritiesElectionRepository: IRperPrioritiesElectionRepository,

    @inject('RpersRealityAndObjMatrixRepository')
    private readonly rperRealityAndObjMatrixRepository: IRperRealityAndObjMatrixRepository,

    @inject('RpersFocusGroupRepository')
    private readonly rperFocusGroupRepository: IRperFocusGroupRepository,

    @inject('RpersConstructionRepository')
    private readonly rperConstructionRepository: IRperConstructionRepository,

    @inject('RpersInputAndOutputRepository')
    private readonly rperInputAndOutputRepository: IRperInputAndOutputRepository,

    @inject('RpersDailyRoutineRepository')
    private readonly rperDailyRoutineRepository: IRperDailyRoutineRepository,

    @inject('RpersSeasonalCalendarRepository')
    private readonly rperSeasonalCalendarRepository: IRperSeasonalCalendarRepository,

    @inject('RpersVennDiagramRepository')
    private readonly rperVennDiagramRepository: IRperVennDiagramRepository,

    @inject('RpersPresentationRepository')
    private readonly rperPresentationRepository: IRperPresentationRepository,

    @inject('RpersInterviewsRepository')
    private readonly rperInterviewsRepository: IRperInterviewsRepository,

    @inject('RpersOtherPreparationRepository')
    private readonly rperOtherPreparationRepository: IRperOtherPreparationRepository,

    @inject('RpersThemesFrameworkRepository')
    private readonly rperThemesFrameworkRepository: IRperThemesFrameworkRepository,


    @inject('RpersRepository')
    private readonly rpersRepository: IRpersRepository,
  ) { }

  async execute({ rper_id, section, new_status }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const secondaryData =
        await this.rpersSecondaryDataRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!secondaryData || !rper) {
        throw new AppError('RPER not found', 404)
      }

      secondaryData.status = new_status
      rper.updated_at = new Date()

      await this.rpersSecondaryDataRepository.update(secondaryData)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.ACKNOWLEDGMENT) {
      const acknowledgment =
        await this.rperAcknowledgmentRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!acknowledgment || !rper) {
        throw new AppError('RPER not found', 404)
      }

      acknowledgment.status = new_status
      rper.updated_at = new Date()

      await this.rperAcknowledgmentRepository.update(acknowledgment)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.HISTORICAL_MAPPING) {
      const historicalMapping =
        await this.rperHistoricalMappingRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!historicalMapping || !rper) {
        throw new AppError('RPER not found', 404)
      }

      historicalMapping.status = new_status
      rper.updated_at = new Date()

      await this.rperHistoricalMappingRepository.update(historicalMapping)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.TRANSECT_WALK) {
      const transectWalk = await this.rperTransectWalkRepository.findByRperId(
        rper_id,
      )
      const rper = await this.rpersRepository.findById(rper_id)

      if (!transectWalk || !rper) {
        throw new AppError('RPER not found', 404)
      }

      transectWalk.status = new_status
      rper.updated_at = new Date()

      await this.rperTransectWalkRepository.update(transectWalk)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.FINALCONSIDERATION) {
      const finalconsideration = await this.rperFinalConsiderationRepository.findByRperId(rper_id);
      const rper = await this.rpersRepository.findById(rper_id);

      if (!finalconsideration || !rper) {
        throw new AppError('RPER not found', 404);
      }

      finalconsideration.status = new_status;
      rper.updated_at = new Date();

      await this.rperFinalConsiderationRepository.update(finalconsideration);
      await this.rpersRepository.update(rper);
    }

    if (section === RperSection.EXTRAINFORMATION) {
      const extrainformation =
        await this.rperExtraInformationRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!extrainformation || !rper) {
        throw new AppError('RPER not found', 404)
      }

      extrainformation.status = new_status
      rper.updated_at = new Date()

      await this.rperExtraInformationRepository.update(extrainformation)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.OTHERFIELDWORK) {
      const otherfieldwork =
        await this.rperOtherFieldworkRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!otherfieldwork || !rper) {
        throw new AppError('RPER not found', 404)
      }

      otherfieldwork.status = new_status
      rper.updated_at = new Date()

      await this.rperOtherFieldworkRepository.update(otherfieldwork)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.PRIORITIESELECTION) {
      const prioritieselection =
        await this.rperPrioritiesElectionRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!prioritieselection || !rper) {
        throw new AppError('RPER not found', 404)
      }

      prioritieselection.status = new_status
      rper.updated_at = new Date()

      await this.rperPrioritiesElectionRepository.update(prioritieselection)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.REALITYANDOBJMATRIX) {
      const realityandobjmatrix =
        await this.rperRealityAndObjMatrixRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!realityandobjmatrix || !rper) {
        throw new AppError('RPER not found', 404)
      }

      realityandobjmatrix.status = new_status
      rper.updated_at = new Date()

      await this.rperRealityAndObjMatrixRepository.update(realityandobjmatrix)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.FOCUSGROUP) {
      const focusgroup =
        await this.rperFocusGroupRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!focusgroup || !rper) {
        throw new AppError('RPER not found', 404)
      }

      focusgroup.status = new_status
      rper.updated_at = new Date()

      await this.rperFocusGroupRepository.update(focusgroup)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.CONSTRUCTION) {
      const construction =
        await this.rperConstructionRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!construction || !rper) {
        throw new AppError('RPER not found', 404)
      }

      construction.status = new_status
      rper.updated_at = new Date()

      await this.rperConstructionRepository.update(construction)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.INPUTANDOUTPUT) {
      const inputandoutput =
        await this.rperInputAndOutputRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!inputandoutput || !rper) {
        throw new AppError('RPER not found', 404)
      }

      inputandoutput.status = new_status
      rper.updated_at = new Date()

      await this.rperInputAndOutputRepository.update(inputandoutput)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.DAILYROUTINE) {
      const dailyroutine =
        await this.rperDailyRoutineRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!dailyroutine || !rper) {
        throw new AppError('RPER not found', 404)
      }

      dailyroutine.status = new_status
      rper.updated_at = new Date()

      await this.rperDailyRoutineRepository.update(dailyroutine)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.SEASONALCALENDAR) {
      const seasonalcalendar =
        await this.rperSeasonalCalendarRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!seasonalcalendar || !rper) {
        throw new AppError('RPER not found', 404)
      }

      seasonalcalendar.status = new_status
      rper.updated_at = new Date()

      await this.rperSeasonalCalendarRepository.update(seasonalcalendar)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.VENNDIAGRAM) {
      const venndiagram =
        await this.rperVennDiagramRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!venndiagram || !rper) {
        throw new AppError('RPER not found', 404)
      }

      venndiagram.status = new_status
      rper.updated_at = new Date()

      await this.rperVennDiagramRepository.update(venndiagram)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.PRESENTATION) {
      const presentation =
        await this.rperPresentationRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!presentation || !rper) {
        throw new AppError('RPER not found', 404)
      }

      presentation.status = new_status
      rper.updated_at = new Date()

      await this.rperPresentationRepository.update(presentation)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.INTERVIEWS) {
      const interviews =
        await this.rperInterviewsRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!interviews || !rper) {
        throw new AppError('RPER not found', 404)
      }

      interviews.status = new_status
      rper.updated_at = new Date()

      await this.rperInterviewsRepository.update(interviews)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.OTHERPREPARATION) {
      const otherpreparation =
        await this.rperOtherPreparationRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!otherpreparation || !rper) {
        throw new AppError('RPER not found', 404)
      }

      otherpreparation.status = new_status
      rper.updated_at = new Date()

      await this.rperOtherPreparationRepository.update(otherpreparation)
      await this.rpersRepository.update(rper)
    }

    if (section === RperSection.THEMESFRAMEWORK) {
      const themesframework =
        await this.rperThemesFrameworkRepository.findByRperId(rper_id)
      const rper = await this.rpersRepository.findById(rper_id)

      if (!themesframework || !rper) {
        throw new AppError('RPER not found', 404)
      }

      themesframework.status = new_status
      rper.updated_at = new Date()

      await this.rperThemesFrameworkRepository.update(themesframework)
      await this.rpersRepository.update(rper)
    }

  }
}
