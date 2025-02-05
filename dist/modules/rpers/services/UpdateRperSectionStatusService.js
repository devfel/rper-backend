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
exports.UpdateRperSectionStatusService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const enums_1 = require("../../../enums");
let UpdateRperSectionStatusService = class UpdateRperSectionStatusService {
    constructor(rpersSecondaryDataRepository, rperAcknowledgmentRepository, rperHistoricalMappingRepository, rperTransectWalkRepository, rperFinalConsiderationRepository, rperExtraInformationRepository, rperOtherFieldworkRepository, rperPrioritiesElectionRepository, rperRealityAndObjMatrixRepository, rperFocusGroupRepository, rperConstructionRepository, rperInputAndOutputRepository, rperDailyRoutineRepository, rperSeasonalCalendarRepository, rperVennDiagramRepository, rperPresentationRepository, rperInterviewsRepository, rperOtherPreparationRepository, rperThemesFrameworkRepository, rpersRepository) {
        this.rpersSecondaryDataRepository = rpersSecondaryDataRepository;
        this.rperAcknowledgmentRepository = rperAcknowledgmentRepository;
        this.rperHistoricalMappingRepository = rperHistoricalMappingRepository;
        this.rperTransectWalkRepository = rperTransectWalkRepository;
        this.rperFinalConsiderationRepository = rperFinalConsiderationRepository;
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
        this.rpersRepository = rpersRepository;
    }
    execute({ rper_id, section, new_status }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (section === enums_1.RperSection.SECONDARY_DATA) {
                const secondaryData = yield this.rpersSecondaryDataRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!secondaryData || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                secondaryData.status = new_status;
                rper.updated_at = new Date();
                yield this.rpersSecondaryDataRepository.update(secondaryData);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.ACKNOWLEDGMENT) {
                const acknowledgment = yield this.rperAcknowledgmentRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!acknowledgment || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                acknowledgment.status = new_status;
                rper.updated_at = new Date();
                yield this.rperAcknowledgmentRepository.update(acknowledgment);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.HISTORICAL_MAPPING) {
                const historicalMapping = yield this.rperHistoricalMappingRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!historicalMapping || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                historicalMapping.status = new_status;
                rper.updated_at = new Date();
                yield this.rperHistoricalMappingRepository.update(historicalMapping);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.TRANSECT_WALK) {
                const transectWalk = yield this.rperTransectWalkRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!transectWalk || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                transectWalk.status = new_status;
                rper.updated_at = new Date();
                yield this.rperTransectWalkRepository.update(transectWalk);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.FINALCONSIDERATION) {
                const finalconsideration = yield this.rperFinalConsiderationRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!finalconsideration || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                finalconsideration.status = new_status;
                rper.updated_at = new Date();
                yield this.rperFinalConsiderationRepository.update(finalconsideration);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.EXTRAINFORMATION) {
                const extrainformation = yield this.rperExtraInformationRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!extrainformation || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                extrainformation.status = new_status;
                rper.updated_at = new Date();
                yield this.rperExtraInformationRepository.update(extrainformation);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.OTHERFIELDWORK) {
                const otherfieldwork = yield this.rperOtherFieldworkRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!otherfieldwork || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                otherfieldwork.status = new_status;
                rper.updated_at = new Date();
                yield this.rperOtherFieldworkRepository.update(otherfieldwork);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.PRIORITIESELECTION) {
                const prioritieselection = yield this.rperPrioritiesElectionRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!prioritieselection || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                prioritieselection.status = new_status;
                rper.updated_at = new Date();
                yield this.rperPrioritiesElectionRepository.update(prioritieselection);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.REALITYANDOBJMATRIX) {
                const realityandobjmatrix = yield this.rperRealityAndObjMatrixRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!realityandobjmatrix || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                realityandobjmatrix.status = new_status;
                rper.updated_at = new Date();
                yield this.rperRealityAndObjMatrixRepository.update(realityandobjmatrix);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.FOCUSGROUP) {
                const focusgroup = yield this.rperFocusGroupRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!focusgroup || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                focusgroup.status = new_status;
                rper.updated_at = new Date();
                yield this.rperFocusGroupRepository.update(focusgroup);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.CONSTRUCTION) {
                const construction = yield this.rperConstructionRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!construction || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                construction.status = new_status;
                rper.updated_at = new Date();
                yield this.rperConstructionRepository.update(construction);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.INPUTANDOUTPUT) {
                const inputandoutput = yield this.rperInputAndOutputRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!inputandoutput || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                inputandoutput.status = new_status;
                rper.updated_at = new Date();
                yield this.rperInputAndOutputRepository.update(inputandoutput);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.DAILYROUTINE) {
                const dailyroutine = yield this.rperDailyRoutineRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!dailyroutine || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                dailyroutine.status = new_status;
                rper.updated_at = new Date();
                yield this.rperDailyRoutineRepository.update(dailyroutine);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.SEASONALCALENDAR) {
                const seasonalcalendar = yield this.rperSeasonalCalendarRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!seasonalcalendar || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                seasonalcalendar.status = new_status;
                rper.updated_at = new Date();
                yield this.rperSeasonalCalendarRepository.update(seasonalcalendar);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.VENNDIAGRAM) {
                const venndiagram = yield this.rperVennDiagramRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!venndiagram || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                venndiagram.status = new_status;
                rper.updated_at = new Date();
                yield this.rperVennDiagramRepository.update(venndiagram);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.PRESENTATION) {
                const presentation = yield this.rperPresentationRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!presentation || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                presentation.status = new_status;
                rper.updated_at = new Date();
                yield this.rperPresentationRepository.update(presentation);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.INTERVIEWS) {
                const interviews = yield this.rperInterviewsRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!interviews || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                interviews.status = new_status;
                rper.updated_at = new Date();
                yield this.rperInterviewsRepository.update(interviews);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.OTHERPREPARATION) {
                const otherpreparation = yield this.rperOtherPreparationRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!otherpreparation || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                otherpreparation.status = new_status;
                rper.updated_at = new Date();
                yield this.rperOtherPreparationRepository.update(otherpreparation);
                yield this.rpersRepository.update(rper);
            }
            if (section === enums_1.RperSection.THEMESFRAMEWORK) {
                const themesframework = yield this.rperThemesFrameworkRepository.findByRperId(rper_id);
                const rper = yield this.rpersRepository.findById(rper_id);
                if (!themesframework || !rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                themesframework.status = new_status;
                rper.updated_at = new Date();
                yield this.rperThemesFrameworkRepository.update(themesframework);
                yield this.rpersRepository.update(rper);
            }
        });
    }
};
UpdateRperSectionStatusService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RpersSecondaryDataRepository')),
    __param(1, (0, tsyringe_1.inject)('RpersAcknowledgmentRepository')),
    __param(2, (0, tsyringe_1.inject)('RperHistoricalMappingRepository')),
    __param(3, (0, tsyringe_1.inject)('RperTransectWalkRepository')),
    __param(4, (0, tsyringe_1.inject)('RpersFinalConsiderationRepository')),
    __param(5, (0, tsyringe_1.inject)('RpersExtraInformationRepository')),
    __param(6, (0, tsyringe_1.inject)('RpersOtherFieldworkRepository')),
    __param(7, (0, tsyringe_1.inject)('RpersPrioritiesElectionRepository')),
    __param(8, (0, tsyringe_1.inject)('RpersRealityAndObjMatrixRepository')),
    __param(9, (0, tsyringe_1.inject)('RpersFocusGroupRepository')),
    __param(10, (0, tsyringe_1.inject)('RpersConstructionRepository')),
    __param(11, (0, tsyringe_1.inject)('RpersInputAndOutputRepository')),
    __param(12, (0, tsyringe_1.inject)('RpersDailyRoutineRepository')),
    __param(13, (0, tsyringe_1.inject)('RpersSeasonalCalendarRepository')),
    __param(14, (0, tsyringe_1.inject)('RpersVennDiagramRepository')),
    __param(15, (0, tsyringe_1.inject)('RpersPresentationRepository')),
    __param(16, (0, tsyringe_1.inject)('RpersInterviewsRepository')),
    __param(17, (0, tsyringe_1.inject)('RpersOtherPreparationRepository')),
    __param(18, (0, tsyringe_1.inject)('RpersThemesFrameworkRepository')),
    __param(19, (0, tsyringe_1.inject)('RpersRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], UpdateRperSectionStatusService);
exports.UpdateRperSectionStatusService = UpdateRperSectionStatusService;
