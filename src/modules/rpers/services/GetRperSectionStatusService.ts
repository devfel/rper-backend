import { inject, injectable } from 'tsyringe';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';
import { IRperFinalConsiderationRepository } from '../repositories/IRperFinalConsiderationRepository';
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository';
import { IRperTransectWalkRepository } from '../repositories/IRperTransectWalkRepository'

import AppError from '@shared/errors/AppError';
import { RperSection } from 'enums';
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

interface ExecuteParams {
  rper_id: string;
  section: string;
}

@injectable()
export class GetRperSectionStatusService {
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
  ) { }

  async execute({ rper_id, section }: ExecuteParams) {
    if (section === RperSection.SECONDARY_DATA) {
      const rper = await this.rpersSecondaryDataRepository.findByRperId(rper_id);

      if (!rper) {
        throw new AppError('RPER not found', 404);
      }

      return { status: rper.status };
    }

    if (section === RperSection.ACKNOWLEDGMENT) {
      const rper = await this.rperAcknowledgmentRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.FINALCONSIDERATION) {
      const rper = await this.rperFinalConsiderationRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.HISTORICAL_MAPPING) {
      const rper = await this.rperHistoricalMappingRepository.findByRperId(
        rper_id,
      )

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status }
    }

    if (section === RperSection.TRANSECT_WALK) {
      const rper = await this.rperTransectWalkRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status }
    }

    if (section === RperSection.EXTRAINFORMATION) {
      const rper = await this.rperExtraInformationRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.OTHERFIELDWORK) {
      const rper = await this.rperOtherFieldworkRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.PRIORITIESELECTION) {
      const rper = await this.rperPrioritiesElectionRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.REALITYANDOBJMATRIX) {
      const rper = await this.rperRealityAndObjMatrixRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.FOCUSGROUP) {
      const rper = await this.rperFocusGroupRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.CONSTRUCTION) {
      const rper = await this.rperConstructionRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.INPUTANDOUTPUT) {
      const rper = await this.rperInputAndOutputRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.DAILYROUTINE) {
      const rper = await this.rperDailyRoutineRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.SEASONALCALENDAR) {
      const rper = await this.rperSeasonalCalendarRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.VENNDIAGRAM) {
      const rper = await this.rperVennDiagramRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.PRESENTATION) {
      const rper = await this.rperPresentationRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.INTERVIEWS) {
      const rper = await this.rperInterviewsRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.OTHERPREPARATION) {
      const rper = await this.rperOtherPreparationRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }

    if (section === RperSection.THEMESFRAMEWORK) {
      const rper = await this.rperThemesFrameworkRepository.findByRperId(rper_id)

      if (!rper) {
        throw new AppError('RPER not found', 404)
      }

      return { status: rper.status };
    }
  }
}