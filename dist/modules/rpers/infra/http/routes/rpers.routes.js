"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ensureAuthenticated_1 = __importDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
const RpersController_1 = __importDefault(require("../controllers/RpersController"));
const CreateRpersMembersController_1 = require("../controllers/CreateRpersMembersController");
const UpdateRperSecondaryController_1 = require("../controllers/UpdateRperSecondaryController");
const ensureRperMember_1 = require("../middlewares/ensureRperMember");
const GetRperByIdController_1 = require("../controllers/GetRperByIdController");
const RemoveRperMemberController_1 = require("../controllers/RemoveRperMemberController");
const CreateRperEditResourceController_1 = require("../controllers/CreateRperEditResourceController");
const FindRperEditResourceController_1 = require("../controllers/FindRperEditResourceController");
const DeleteRperEditResourceController_1 = require("../controllers/DeleteRperEditResourceController");
const upload_1 = __importDefault(require("../../../../../config/upload"));
const multer_1 = __importDefault(require("multer"));
const UploadImageController_1 = require("../controllers/UploadImageController");
const GetRperSectionStatusController_1 = require("../controllers/GetRperSectionStatusController");
const UpdateRperSectionStatusController_1 = require("../controllers/UpdateRperSectionStatusController");
const CreateRperBackgroundController_1 = require("../controllers/CreateRperBackgroundController");
const UpdateRperAcknowledgmentController_1 = require("../controllers/UpdateRperAcknowledgmentController");
const UpdateRperFinalConsiderationController_1 = require("../controllers/UpdateRperFinalConsiderationController");
const UpdateRperHistoricalMappingController_1 = require("../controllers/UpdateRperHistoricalMappingController");
const UpdateRperTransectWalkController_1 = require("../controllers/UpdateRperTransectWalkController");
const UpdateRperConstructionController_1 = require("../controllers/UpdateRperConstructionController");
const UpdateRperDailyRoutineController_1 = require("../controllers/UpdateRperDailyRoutineController");
const UpdateRperExtraInformationController_1 = require("../controllers/UpdateRperExtraInformationController");
const UpdateRperFocusGroupController_1 = require("../controllers/UpdateRperFocusGroupController");
const UpdateRperInputAndOutputController_1 = require("../controllers/UpdateRperInputAndOutputController");
const UpdateRperInterviewsController_1 = require("../controllers/UpdateRperInterviewsController");
const UpdateRperOtherFieldworkController_1 = require("../controllers/UpdateRperOtherFieldworkController");
const UpdateRperOtherPreparationController_1 = require("../controllers/UpdateRperOtherPreparationController");
const UpdateRperPresentationController_1 = require("../controllers/UpdateRperPresentationController");
const UpdateRperPrioritiesElectionController_1 = require("../controllers/UpdateRperPrioritiesElectionController");
const UpdateRperRealityAndObjMatrixController_1 = require("../controllers/UpdateRperRealityAndObjMatrixController");
const UpdateRperSeasonalCalendarController_1 = require("../controllers/UpdateRperSeasonalCalendarController");
const UpdateRperThemesFrameworkController_1 = require("../controllers/UpdateRperThemesFrameworkController");
const UpdateRperVennDiagramController_1 = require("../controllers/UpdateRperVennDiagramController");
const GenerateDocxReportController_1 = require("../controllers/GenerateDocxReportController");
const rpersRouter = (0, express_1.Router)();
const rpersController = new RpersController_1.default();
const createRpersMembersController = new CreateRpersMembersController_1.CreateRpersMembersController();
const updateRperController = new UpdateRperSecondaryController_1.UpdateRperSecondaryController();
const getRperByIdController = new GetRperByIdController_1.GetRperByIdController();
const removeRperMemberController = new RemoveRperMemberController_1.RemoveRperMemberController();
const createRperEditResourceController = new CreateRperEditResourceController_1.CreateRperEditResourceController();
const findRperEditResourceController = new FindRperEditResourceController_1.FindRperEditResourceController();
const deleteRperEditResourceController = new DeleteRperEditResourceController_1.DeleteRperEditResourceController();
const uploadImageController = new UploadImageController_1.UploadImageController();
const getRperSectionStatusController = new GetRperSectionStatusController_1.GetRperSectionStatusController();
const updateRperSectionStatusController = new UpdateRperSectionStatusController_1.UpdateRperSectionStatusController();
const createRperBackgroundController = new CreateRperBackgroundController_1.CreateRperBackgroundController();
const updateRperAcknowledgmentController = new UpdateRperAcknowledgmentController_1.UpdateRperAcknowledgmentController();
const updateRperFinalConsiderationController = new UpdateRperFinalConsiderationController_1.UpdateRperFinalConsiderationController();
const updateRperHistoricalMappingController = new UpdateRperHistoricalMappingController_1.UpdateRperHistoricalMappingController();
const updateRperTransectWalkController = new UpdateRperTransectWalkController_1.UpdateRperTransectWalkController();
const updateRperExtraInformationController = new UpdateRperExtraInformationController_1.UpdateRperExtraInformationController();
const updateRperOtherFieldworkController = new UpdateRperOtherFieldworkController_1.UpdateRperOtherFieldworkController();
const updateRperPrioritiesElectionController = new UpdateRperPrioritiesElectionController_1.UpdateRperPrioritiesElectionController();
const updateRperRealityAndObjMatrixController = new UpdateRperRealityAndObjMatrixController_1.UpdateRperRealityAndObjMatrixController();
const updateRperFocusGroupController = new UpdateRperFocusGroupController_1.UpdateRperFocusGroupController();
const updateRperConstructionController = new UpdateRperConstructionController_1.UpdateRperConstructionController();
const updateRperInputAndOutputController = new UpdateRperInputAndOutputController_1.UpdateRperInputAndOutputController();
const updateRperDailyRoutineController = new UpdateRperDailyRoutineController_1.UpdateRperDailyRoutineController();
const updateRperSeasonalCalendarController = new UpdateRperSeasonalCalendarController_1.UpdateRperSeasonalCalendarController();
const updateRperVennDiagramController = new UpdateRperVennDiagramController_1.UpdateRperVennDiagramController();
const updateRperPresentationController = new UpdateRperPresentationController_1.UpdateRperPresentationController();
const updateRperInterviewsController = new UpdateRperInterviewsController_1.UpdateRperInterviewsController();
const updateRperOtherPreparationController = new UpdateRperOtherPreparationController_1.UpdateRperOtherPreparationController();
const updateRperThemesFrameworkController = new UpdateRperThemesFrameworkController_1.UpdateRperThemesFrameworkController();
const generateRperReportController = new GenerateDocxReportController_1.GenerateDocxReportController();
const upload = (0, multer_1.default)(upload_1.default);
//Middleware to ensure the user is logged in before listing RPERs and Creating new one.
rpersRouter.use(ensureAuthenticated_1.default);
rpersRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        coordinator_id: celebrate_1.Joi.string().uuid().required(),
    },
}), rpersController.create);
rpersRouter.get('/', rpersController.index);
rpersRouter.get('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), getRperByIdController.handle);
rpersRouter.post('/members', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        rper_id: celebrate_1.Joi.string().required(),
        users_ids: celebrate_1.Joi.array().required(),
    },
}), createRpersMembersController.handle);
rpersRouter.put('/:rper_id/secondary-data', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperController.handle);
rpersRouter.put('/:rper_id/acknowledgment', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperAcknowledgmentController.handle);
rpersRouter.put('/:rper_id/finalconsideration', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperFinalConsiderationController.handle);
rpersRouter.put('/:rper_id/historical-mapping', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperHistoricalMappingController.handle);
rpersRouter.put('/:rper_id/transect-walk', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperTransectWalkController.handle);
rpersRouter.put('/:rper_id/extrainformation', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperExtraInformationController.handle);
rpersRouter.put('/:rper_id/otherfieldwork', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperOtherFieldworkController.handle);
rpersRouter.put('/:rper_id/prioritieselection', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperPrioritiesElectionController.handle);
rpersRouter.put('/:rper_id/realityandobjmatrix', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperRealityAndObjMatrixController.handle);
rpersRouter.put('/:rper_id/focusgroup', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperFocusGroupController.handle);
rpersRouter.put('/:rper_id/construction', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperConstructionController.handle);
rpersRouter.put('/:rper_id/inputandoutput', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperInputAndOutputController.handle);
rpersRouter.put('/:rper_id/dailyroutine', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperDailyRoutineController.handle);
rpersRouter.put('/:rper_id/seasonalcalendar', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperSeasonalCalendarController.handle);
rpersRouter.put('/:rper_id/venndiagram', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperVennDiagramController.handle);
rpersRouter.put('/:rper_id/presentation', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperPresentationController.handle);
rpersRouter.put('/:rper_id/interviews', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperInterviewsController.handle);
rpersRouter.put('/:rper_id/otherpreparation', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperOtherPreparationController.handle);
rpersRouter.put('/:rper_id/themesframework', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        content: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, updateRperThemesFrameworkController.handle);
rpersRouter.patch('/:rper_id/members/:user_id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        user_id: celebrate_1.Joi.string().uuid().required(),
    },
}), ensureRperMember_1.ensureRperMember, removeRperMemberController.handle);
// Editing rpers resources
rpersRouter.post('/resources', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        user_id: celebrate_1.Joi.string().uuid().required(),
        resource: celebrate_1.Joi.string().required(),
    },
}), createRperEditResourceController.handle);
rpersRouter.get('/resources/:rper_id/:resource', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        resource: celebrate_1.Joi.string().required(),
    },
}), findRperEditResourceController.handle);
rpersRouter.delete('/resources/:rper_id/:user_id/:resource', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        user_id: celebrate_1.Joi.string().uuid().required(),
        resource: celebrate_1.Joi.string().required(),
    },
}), deleteRperEditResourceController.handle);
rpersRouter.post('/images', upload.single('image'), uploadImageController.handle);
rpersRouter.get('/:rper_id/:section/status', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        section: celebrate_1.Joi.string().required(),
    },
}), getRperSectionStatusController.handle);
rpersRouter.patch('/:rper_id/:section/status', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        rper_id: celebrate_1.Joi.string().uuid().required(),
        section: celebrate_1.Joi.string().required(),
    },
    [celebrate_1.Segments.BODY]: {
        new_status: celebrate_1.Joi.string().required(),
    },
}), updateRperSectionStatusController.handle);
rpersRouter.patch('/:rper_id/background', upload.single('background'), createRperBackgroundController.handle);
rpersRouter.get('/:rper_id/report', generateRperReportController.handle);
exports.default = rpersRouter;
