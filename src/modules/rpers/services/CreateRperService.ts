import { RperStatus } from 'enums';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Rper from '../infra/typeorm/entities/Rper';
import IRpersRepository from '../repositories/IRpersRepository';
import { IRpersSecondaryDataRepository } from '../repositories/IRpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '../repositories/IRperAcknowledgmentRepository';
import { IRperFinalConsiderationRepository } from '../repositories/IRperFinalConsiderationRepository';
import { IRperHistoricalMappingRepository } from '../repositories/IRperHistoricalMappingRepository';
import { IRperTransectWalkRepository } from '../repositories/IRperTransectWalkRepository'
import { IRperExtraInformationRepository } from '../repositories/IRperExtraInformationRepository';
import { IRperOtherFieldworkRepository } from '../repositories/IRperOtherFieldworkRepository';
import { IRperPrioritiesElectionRepository } from '../repositories/IRperPrioritiesElectionRepository';
import { IRperRealityAndObjMatrixRepository } from '../repositories/IRperRealityAndObjMatrixRepository';
import { IRperFocusGroupRepository } from '../repositories/IRperFocusGroupRepository';
import { IRperConstructionRepository } from '../repositories/IRperConstructionRepository';
import { IRperInputAndOutputRepository } from '../repositories/IRperInputAndOutputRepository';
import { IRperDailyRoutineRepository } from '../repositories/IRperDailyRoutineRepository';
import { IRperSeasonalCalendarRepository } from '../repositories/IRperSeasonalCalendarRepository';
import { IRperVennDiagramRepository } from '../repositories/IRperVennDiagramRepository';
import { IRperPresentationRepository } from '../repositories/IRperPresentationRepository';
import { IRperInterviewsRepository } from '../repositories/IRperInterviewsRepository';
import { IRperOtherPreparationRepository } from '../repositories/IRperOtherPreparationRepository';
import { IRperThemesFrameworkRepository } from '../repositories/IRperThemesFrameworkRepository';

interface IRequestDTO {
    name: string;
    coordinator_id: string;
}

@injectable()
class CreateRperService {

    constructor(
        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,

        @inject('RpersSecondaryDataRepository')
        private rpersSecondaryDataRepository: IRpersSecondaryDataRepository,

        @inject('RpersAcknowledgmentRepository')
        private rperAcknowledgmentRepository: IRperAcknowledgmentRepository,

        @inject('RpersFinalConsiderationRepository')
        private rperFinalConsiderationRepository: IRperFinalConsiderationRepository,

        @inject('RperHistoricalMappingRepository')
        private rperHistoricalMappingRepository: IRperHistoricalMappingRepository,

        @inject('RperTransectWalkRepository')
        private rperTransectWalkRepository: IRperTransectWalkRepository,

        @inject('RpersExtraInformationRepository')
        private rperExtraInformationRepository: IRperExtraInformationRepository,

        @inject('RpersOtherFieldworkRepository')
        private rperOtherFieldworkRepository: IRperOtherFieldworkRepository,

        @inject('RpersPrioritiesElectionRepository')
        private rperPrioritiesElectionRepository: IRperPrioritiesElectionRepository,

        @inject('RpersRealityAndObjMatrixRepository')
        private rperRealityAndObjMatrixRepository: IRperRealityAndObjMatrixRepository,

        @inject('RpersFocusGroupRepository')
        private rperFocusGroupRepository: IRperFocusGroupRepository,

        @inject('RpersConstructionRepository')
        private rperConstructionRepository: IRperConstructionRepository,

        @inject('RpersInputAndOutputRepository')
        private rperInputAndOutputRepository: IRperInputAndOutputRepository,

        @inject('RpersDailyRoutineRepository')
        private rperDailyRoutineRepository: IRperDailyRoutineRepository,

        @inject('RpersSeasonalCalendarRepository')
        private rperSeasonalCalendarRepository: IRperSeasonalCalendarRepository,

        @inject('RpersVennDiagramRepository')
        private rperVennDiagramRepository: IRperVennDiagramRepository,

        @inject('RpersPresentationRepository')
        private rperPresentationRepository: IRperPresentationRepository,

        @inject('RpersInterviewsRepository')
        private rperInterviewsRepository: IRperInterviewsRepository,

        @inject('RpersOtherPreparationRepository')
        private rperOtherPreparationRepository: IRperOtherPreparationRepository,

        @inject('RpersThemesFrameworkRepository')
        private rperThemesFrameworkRepository: IRperThemesFrameworkRepository,

    ) { }

    public async execute({ name, coordinator_id }: IRequestDTO): Promise<Rper> {
        const findRperWithSameName = await this.rpersRepository.findRperByName(name);

        if (findRperWithSameName) {
            throw new AppError("RPER with same name already exists.");
        }

        const rper = await this.rpersRepository.create({
            name,
            coordinator_id,
        });

        const rperSecondaryData = await this.rpersSecondaryDataRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperAcknowledgment = await this.rperAcknowledgmentRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperFinalConsideration = await this.rperFinalConsiderationRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperHistoricalMapping = await this.rperHistoricalMappingRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperTransectWalk = await this.rperTransectWalkRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperExtraInformation = await this.rperExtraInformationRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperOtherFieldwork = await this.rperOtherFieldworkRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperPrioritiesElection = await this.rperPrioritiesElectionRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperRealityAndObjMatrix = await this.rperRealityAndObjMatrixRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperFocusGroup = await this.rperFocusGroupRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperConstruction = await this.rperConstructionRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperInputAndOutput = await this.rperInputAndOutputRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperDailyRoutine = await this.rperDailyRoutineRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperSeasonalCalendar = await this.rperSeasonalCalendarRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperVennDiagram = await this.rperVennDiagramRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperPresentation = await this.rperPresentationRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperInterviews = await this.rperInterviewsRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperOtherPreparation = await this.rperOtherPreparationRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        const rperThemesFramework = await this.rperThemesFrameworkRepository.create({
            content: '',
            rper_id: rper.rper_id,
            status: RperStatus.UNSTARTED,
        });

        rper.secondaryData = rperSecondaryData;
        rper.acknowledgment = rperAcknowledgment;
        rper.finalconsideration = rperFinalConsideration;
        rper.historicalMapping = rperHistoricalMapping;
        rper.transectWalk = rperTransectWalk;
        rper.extrainformation = rperExtraInformation;
        rper.otherfieldwork = rperOtherFieldwork;
        rper.prioritieselection = rperPrioritiesElection;
        rper.realityandobjmatrix = rperRealityAndObjMatrix;
        rper.focusgroup = rperFocusGroup;
        rper.construction = rperConstruction;
        rper.inputandoutput = rperInputAndOutput;
        rper.dailyroutine = rperDailyRoutine;
        rper.seasonalcalendar = rperSeasonalCalendar;
        rper.venndiagram = rperVennDiagram;
        rper.presentation = rperPresentation;
        rper.interviews = rperInterviews;
        rper.otherpreparation = rperOtherPreparation;
        rper.themesframework = rperThemesFramework;


        await this.rpersRepository.update(rper);

        return rper;
    }
}

export default CreateRperService;
