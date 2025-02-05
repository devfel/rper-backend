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
exports.GetRperSectionStatusService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const enums_1 = require("../../../enums");
let GetRperSectionStatusService = class GetRperSectionStatusService {
    constructor(rpersSecondaryDataRepository, rperAcknowledgmentRepository, rperHistoricalMappingRepository, rperTransectWalkRepository, rperFinalConsiderationRepository, rperExtraInformationRepository, rperOtherFieldworkRepository, rperPrioritiesElectionRepository, rperRealityAndObjMatrixRepository, rperFocusGroupRepository, rperConstructionRepository, rperInputAndOutputRepository, rperDailyRoutineRepository, rperSeasonalCalendarRepository, rperVennDiagramRepository, rperPresentationRepository, rperInterviewsRepository, rperOtherPreparationRepository, rperThemesFrameworkRepository) {
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
    }
    execute({ rper_id, section }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (section === enums_1.RperSection.SECONDARY_DATA) {
                const rper = yield this.rpersSecondaryDataRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.ACKNOWLEDGMENT) {
                const rper = yield this.rperAcknowledgmentRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.FINALCONSIDERATION) {
                const rper = yield this.rperFinalConsiderationRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.HISTORICAL_MAPPING) {
                const rper = yield this.rperHistoricalMappingRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.TRANSECT_WALK) {
                const rper = yield this.rperTransectWalkRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.EXTRAINFORMATION) {
                const rper = yield this.rperExtraInformationRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.OTHERFIELDWORK) {
                const rper = yield this.rperOtherFieldworkRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.PRIORITIESELECTION) {
                const rper = yield this.rperPrioritiesElectionRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.REALITYANDOBJMATRIX) {
                const rper = yield this.rperRealityAndObjMatrixRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.FOCUSGROUP) {
                const rper = yield this.rperFocusGroupRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.CONSTRUCTION) {
                const rper = yield this.rperConstructionRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.INPUTANDOUTPUT) {
                const rper = yield this.rperInputAndOutputRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.DAILYROUTINE) {
                const rper = yield this.rperDailyRoutineRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.SEASONALCALENDAR) {
                const rper = yield this.rperSeasonalCalendarRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.VENNDIAGRAM) {
                const rper = yield this.rperVennDiagramRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.PRESENTATION) {
                const rper = yield this.rperPresentationRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.INTERVIEWS) {
                const rper = yield this.rperInterviewsRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.OTHERPREPARATION) {
                const rper = yield this.rperOtherPreparationRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
            if (section === enums_1.RperSection.THEMESFRAMEWORK) {
                const rper = yield this.rperThemesFrameworkRepository.findByRperId(rper_id);
                if (!rper) {
                    throw new AppError_1.default('RPER not found', 404);
                }
                return { status: rper.status };
            }
        });
    }
};
GetRperSectionStatusService = __decorate([
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
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], GetRperSectionStatusService);
exports.GetRperSectionStatusService = GetRperSectionStatusService;
