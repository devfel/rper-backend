"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
require("../../modules/users/providers");
require("./providers");
const RpersRepository_1 = __importDefault(require("../../modules/rpers/infra/typeorm/repositories/RpersRepository"));
const UsersRepository_1 = __importDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));
const UserTokensRepository_1 = __importDefault(require("../../modules/users/infra/typeorm/repositories/UserTokensRepository"));
const RperEditResourceRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperEditResourceRepository");
const RpersSecondaryDataRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RpersSecondaryDataRepository");
const RperAcknowledgmentRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperAcknowledgmentRepository");
const RperFinalConsiderationRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperFinalConsiderationRepository");
const RperHistoricalMappingRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperHistoricalMappingRepository");
const RperTransectWalkRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperTransectWalkRepository");
const RperExtraInformationRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperExtraInformationRepository");
const RperConstructionRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperConstructionRepository");
const RperDailyRoutineRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperDailyRoutineRepository");
const RperFocusGroupRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperFocusGroupRepository");
const RperInputAndOutputRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperInputAndOutputRepository");
const RperInterviewsRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperInterviewsRepository");
const RperOtherFieldworkRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperOtherFieldworkRepository");
const RperOtherPreparationRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperOtherPreparationRepository");
const RperPresentationRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperPresentationRepository");
const RperPrioritiesElectionRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperPrioritiesElectionRepository");
const RperRealityAndObjMatrixRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperRealityAndObjMatrixRepository");
const RperSeasonalCalendarRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperSeasonalCalendarRepository");
const RperThemesFrameworkRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperThemesFrameworkRepository");
const RperVennDiagramRepository_1 = require("../../modules/rpers/infra/typeorm/repositories/RperVennDiagramRepository");
tsyringe_1.container.registerSingleton('RpersRepository', RpersRepository_1.default);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('UserTokensRepository', UserTokensRepository_1.default);
tsyringe_1.container.registerSingleton('RpersSecondaryDataRepository', RpersSecondaryDataRepository_1.RpersSecondaryDataRepository);
tsyringe_1.container.registerSingleton('RpersAcknowledgmentRepository', RperAcknowledgmentRepository_1.RperAcknowledgmentRepository);
tsyringe_1.container.registerSingleton('RpersFinalConsiderationRepository', RperFinalConsiderationRepository_1.RperFinalConsiderationRepository);
tsyringe_1.container.registerSingleton('RperHistoricalMappingRepository', RperHistoricalMappingRepository_1.RperHistoricalMappingRepository);
tsyringe_1.container.registerSingleton('RperTransectWalkRepository', RperTransectWalkRepository_1.RperTransectWalkRepository);
tsyringe_1.container.registerSingleton('RpersExtraInformationRepository', RperExtraInformationRepository_1.RperExtraInformationRepository);
tsyringe_1.container.registerSingleton('RpersOtherFieldworkRepository', RperOtherFieldworkRepository_1.RperOtherFieldworkRepository);
tsyringe_1.container.registerSingleton('RpersPrioritiesElectionRepository', RperPrioritiesElectionRepository_1.RperPrioritiesElectionRepository);
tsyringe_1.container.registerSingleton('RpersRealityAndObjMatrixRepository', RperRealityAndObjMatrixRepository_1.RperRealityAndObjMatrixRepository);
tsyringe_1.container.registerSingleton('RpersFocusGroupRepository', RperFocusGroupRepository_1.RperFocusGroupRepository);
tsyringe_1.container.registerSingleton('RpersConstructionRepository', RperConstructionRepository_1.RperConstructionRepository);
tsyringe_1.container.registerSingleton('RpersInputAndOutputRepository', RperInputAndOutputRepository_1.RperInputAndOutputRepository);
tsyringe_1.container.registerSingleton('RpersDailyRoutineRepository', RperDailyRoutineRepository_1.RperDailyRoutineRepository);
tsyringe_1.container.registerSingleton('RpersSeasonalCalendarRepository', RperSeasonalCalendarRepository_1.RperSeasonalCalendarRepository);
tsyringe_1.container.registerSingleton('RpersVennDiagramRepository', RperVennDiagramRepository_1.RperVennDiagramRepository);
tsyringe_1.container.registerSingleton('RpersPresentationRepository', RperPresentationRepository_1.RperPresentationRepository);
tsyringe_1.container.registerSingleton('RpersInterviewsRepository', RperInterviewsRepository_1.RperInterviewsRepository);
tsyringe_1.container.registerSingleton('RpersOtherPreparationRepository', RperOtherPreparationRepository_1.RperOtherPreparationRepository);
tsyringe_1.container.registerSingleton('RpersThemesFrameworkRepository', RperThemesFrameworkRepository_1.RperThemesFrameworkRepository);
tsyringe_1.container.registerSingleton('RperEditResourceRepository', RperEditResourceRepository_1.RperEditResourceRepository);
