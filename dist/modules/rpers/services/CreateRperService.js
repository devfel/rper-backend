"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../../enums");
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
let CreateRperService = class CreateRperService {
    constructor(rpersRepository, rpersSecondaryDataRepository, rperAcknowledgmentRepository, rperFinalConsiderationRepository, rperHistoricalMappingRepository, rperTransectWalkRepository, rperExtraInformationRepository, rperOtherFieldworkRepository, rperPrioritiesElectionRepository, rperRealityAndObjMatrixRepository, rperFocusGroupRepository, rperConstructionRepository, rperInputAndOutputRepository, rperDailyRoutineRepository, rperSeasonalCalendarRepository, rperVennDiagramRepository, rperPresentationRepository, rperInterviewsRepository, rperOtherPreparationRepository, rperThemesFrameworkRepository) {
        this.rpersRepository = rpersRepository;
        this.rpersSecondaryDataRepository = rpersSecondaryDataRepository;
        this.rperAcknowledgmentRepository = rperAcknowledgmentRepository;
        this.rperFinalConsiderationRepository = rperFinalConsiderationRepository;
        this.rperHistoricalMappingRepository = rperHistoricalMappingRepository;
        this.rperTransectWalkRepository = rperTransectWalkRepository;
        this.rperExtraInformationRepository = rperExtraInformationRepository;
        this.rperOtherFieldworkRepository = rperOtherFieldworkRepository;
        this.rperPrioritiesElectionRepository = rperPrioritiesElectionRepository;
        this.rperRealityAndObjMatrixRepository = rperRealityAndObjMatrixRepository;
        this.rperFocusGroupRepository = rperFocusGroupRepository;
        this.rperConstructionRepository = rperConstructionRepository;
        this.rperInputAndOutputRepository = rperInputAndOutputRepository;
        this.rperDailyRoutineRepository = rperDailyRoutineRepository;
        this.rperSeasonalCalendarRepository = rperSeasonalCalendarRepository;
        this.rperVennDiagramRepository = rperVennDiagramRepository;
        this.rperPresentationRepository = rperPresentationRepository;
        this.rperInterviewsRepository = rperInterviewsRepository;
        this.rperOtherPreparationRepository = rperOtherPreparationRepository;
        this.rperThemesFrameworkRepository = rperThemesFrameworkRepository;
    }
    execute({ name, coordinator_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const findRperWithSameName = yield this.rpersRepository.findRperByName(name);
            if (findRperWithSameName) {
                throw new AppError_1.default("RPER with same name already exists.");
            }
            const rper = yield this.rpersRepository.create({
                name,
                coordinator_id,
            });
            const rperSecondaryData = yield this.rpersSecondaryDataRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperAcknowledgment = yield this.rperAcknowledgmentRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperFinalConsideration = yield this.rperFinalConsiderationRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperHistoricalMapping = yield this.rperHistoricalMappingRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperTransectWalk = yield this.rperTransectWalkRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperExtraInformation = yield this.rperExtraInformationRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperOtherFieldwork = yield this.rperOtherFieldworkRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperPrioritiesElection = yield this.rperPrioritiesElectionRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperRealityAndObjMatrix = yield this.rperRealityAndObjMatrixRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperFocusGroup = yield this.rperFocusGroupRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperConstruction = yield this.rperConstructionRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperInputAndOutput = yield this.rperInputAndOutputRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperDailyRoutine = yield this.rperDailyRoutineRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperSeasonalCalendar = yield this.rperSeasonalCalendarRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperVennDiagram = yield this.rperVennDiagramRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperPresentation = yield this.rperPresentationRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperInterviews = yield this.rperInterviewsRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperOtherPreparation = yield this.rperOtherPreparationRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
            });
            const rperThemesFramework = yield this.rperThemesFrameworkRepository.create({
                content: '',
                rper_id: rper.rper_id,
                status: enums_1.RperStatus.UNSTARTED,
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
            yield this.rpersRepository.update(rper);
            return rper;
        });
    }
};
CreateRperService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RpersRepository')),
    __param(1, (0, tsyringe_1.inject)('RpersSecondaryDataRepository')),
    __param(2, (0, tsyringe_1.inject)('RpersAcknowledgmentRepository')),
    __param(3, (0, tsyringe_1.inject)('RpersFinalConsiderationRepository')),
    __param(4, (0, tsyringe_1.inject)('RperHistoricalMappingRepository')),
    __param(5, (0, tsyringe_1.inject)('RperTransectWalkRepository')),
    __param(6, (0, tsyringe_1.inject)('RpersExtraInformationRepository')),
    __param(7, (0, tsyringe_1.inject)('RpersOtherFieldworkRepository')),
    __param(8, (0, tsyringe_1.inject)('RpersPrioritiesElectionRepository')),
    __param(9, (0, tsyringe_1.inject)('RpersRealityAndObjMatrixRepository')),
    __param(10, (0, tsyringe_1.inject)('RpersFocusGroupRepository')),
    __param(11, (0, tsyringe_1.inject)('RpersConstructionRepository')),
    __param(12, (0, tsyringe_1.inject)('RpersInputAndOutputRepository')),
    __param(13, (0, tsyringe_1.inject)('RpersDailyRoutineRepository')),
    __param(14, (0, tsyringe_1.inject)('RpersSeasonalCalendarRepository')),
    __param(15, (0, tsyringe_1.inject)('RpersVennDiagramRepository')),
    __param(16, (0, tsyringe_1.inject)('RpersPresentationRepository')),
    __param(17, (0, tsyringe_1.inject)('RpersInterviewsRepository')),
    __param(18, (0, tsyringe_1.inject)('RpersOtherPreparationRepository')),
    __param(19, (0, tsyringe_1.inject)('RpersThemesFrameworkRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], CreateRperService);
exports.default = CreateRperService;
