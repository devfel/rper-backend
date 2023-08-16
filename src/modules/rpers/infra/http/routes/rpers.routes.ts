import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import RpersController from '../controllers/RpersController'
import { CreateRpersMembersController } from '../controllers/CreateRpersMembersController'
import { UpdateRperSecondaryController } from '../controllers/UpdateRperSecondaryController'
import { ensureRperMember } from '../middlewares/ensureRperMember'
import { GetRperByIdController } from '../controllers/GetRperByIdController'
import { RemoveRperMemberController } from '../controllers/RemoveRperMemberController'
import { CreateRperEditResourceController } from '../controllers/CreateRperEditResourceController'
import { FindRperEditResourceController } from '../controllers/FindRperEditResourceController'
import { DeleteRperEditResourceController } from '../controllers/DeleteRperEditResourceController'
import uploadConfig from '@config/upload'
import multer from 'multer'
import { UploadImageController } from '../controllers/UploadImageController'
import { GetRperSectionStatusController } from '../controllers/GetRperSectionStatusController'
import { UpdateRperSectionStatusController } from '../controllers/UpdateRperSectionStatusController'
import { CreateRperBackgroundController } from '../controllers/CreateRperBackgroundController'
import { UpdateRperAcknowledgmentController } from '../controllers/UpdateRperAcknowledgmentController'
import { UpdateRperFinalConsiderationController } from '../controllers/UpdateRperFinalConsiderationController'
import { UpdateRperHistoricalMappingController } from '../controllers/UpdateRperHistoricalMappingController'
import { UpdateRperTransectWalkController } from '../controllers/UpdateRperTransectWalkController'
import { UpdateRperConstructionController } from '../controllers/UpdateRperConstructionController'
import { UpdateRperDailyRoutineController } from '../controllers/UpdateRperDailyRoutineController'
import { UpdateRperExtraInformationController } from '../controllers/UpdateRperExtraInformationController'
import { UpdateRperFocusGroupController } from '../controllers/UpdateRperFocusGroupController'
import { UpdateRperInputAndOutputController } from '../controllers/UpdateRperInputAndOutputController'
import { UpdateRperInterviewsController } from '../controllers/UpdateRperInterviewsController'
import { UpdateRperOtherFieldworkController } from '../controllers/UpdateRperOtherFieldworkController'
import { UpdateRperOtherPreparationController } from '../controllers/UpdateRperOtherPreparationController'
import { UpdateRperPresentationController } from '../controllers/UpdateRperPresentationController'
import { UpdateRperPrioritiesElectionController } from '../controllers/UpdateRperPrioritiesElectionController'
import { UpdateRperRealityAndObjMatrixController } from '../controllers/UpdateRperRealityAndObjMatrixController'
import { UpdateRperSeasonalCalendarController } from '../controllers/UpdateRperSeasonalCalendarController'
import { UpdateRperThemesFrameworkController } from '../controllers/UpdateRperThemesFrameworkController'
import { UpdateRperVennDiagramController } from '../controllers/UpdateRperVennDiagramController'
import { GenerateDocxReportController } from '../controllers/GenerateDocxReportController'

const rpersRouter = Router()
const rpersController = new RpersController()
const createRpersMembersController = new CreateRpersMembersController()
const updateRperController = new UpdateRperSecondaryController()
const getRperByIdController = new GetRperByIdController()
const removeRperMemberController = new RemoveRperMemberController()
const createRperEditResourceController = new CreateRperEditResourceController()
const findRperEditResourceController = new FindRperEditResourceController()
const deleteRperEditResourceController = new DeleteRperEditResourceController()
const uploadImageController = new UploadImageController()
const getRperSectionStatusController = new GetRperSectionStatusController()
const updateRperSectionStatusController =
  new UpdateRperSectionStatusController()
const createRperBackgroundController = new CreateRperBackgroundController()
const updateRperAcknowledgmentController =
  new UpdateRperAcknowledgmentController()
const updateRperFinalConsiderationController =
  new UpdateRperFinalConsiderationController()
const updateRperHistoricalMappingController =
  new UpdateRperHistoricalMappingController()
const updateRperTransectWalkController = new UpdateRperTransectWalkController()
const updateRperExtraInformationController =
  new UpdateRperExtraInformationController()
const updateRperOtherFieldworkController =
  new UpdateRperOtherFieldworkController()
const updateRperPrioritiesElectionController =
  new UpdateRperPrioritiesElectionController()
const updateRperRealityAndObjMatrixController =
  new UpdateRperRealityAndObjMatrixController()
const updateRperFocusGroupController = new UpdateRperFocusGroupController()
const updateRperConstructionController = new UpdateRperConstructionController()
const updateRperInputAndOutputController =
  new UpdateRperInputAndOutputController()
const updateRperDailyRoutineController = new UpdateRperDailyRoutineController()
const updateRperSeasonalCalendarController =
  new UpdateRperSeasonalCalendarController()
const updateRperVennDiagramController = new UpdateRperVennDiagramController()
const updateRperPresentationController = new UpdateRperPresentationController()
const updateRperInterviewsController = new UpdateRperInterviewsController()
const updateRperOtherPreparationController =
  new UpdateRperOtherPreparationController()
const updateRperThemesFrameworkController =
  new UpdateRperThemesFrameworkController()
const generateRperReportController = new GenerateDocxReportController()

const upload = multer(uploadConfig)

//Middleware to ensure the user is logged in before listing RPERs and Creating new one.
rpersRouter.use(ensureAuthenticated)

rpersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      coordinator_id: Joi.string().uuid().required(),
    },
  }),
  rpersController.create,
)

rpersRouter.get('/', rpersController.index)

rpersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  getRperByIdController.handle,
)

rpersRouter.post(
  '/members',
  celebrate({
    [Segments.BODY]: {
      rper_id: Joi.string().required(),
      users_ids: Joi.array().required(),
    },
  }),
  createRpersMembersController.handle,
)

rpersRouter.put(
  '/:rper_id/secondary-data',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperController.handle,
)

rpersRouter.put(
  '/:rper_id/acknowledgment',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperAcknowledgmentController.handle,
)

rpersRouter.put(
  '/:rper_id/finalconsideration',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperFinalConsiderationController.handle,
)

rpersRouter.put(
  '/:rper_id/historical-mapping',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperHistoricalMappingController.handle,
)

rpersRouter.put(
  '/:rper_id/transect-walk',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperTransectWalkController.handle,
)

rpersRouter.put(
  '/:rper_id/extrainformation',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperExtraInformationController.handle,
)

rpersRouter.put(
  '/:rper_id/otherfieldwork',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperOtherFieldworkController.handle,
)

rpersRouter.put(
  '/:rper_id/prioritieselection',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperPrioritiesElectionController.handle,
)

rpersRouter.put(
  '/:rper_id/realityandobjmatrix',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperRealityAndObjMatrixController.handle,
)

rpersRouter.put(
  '/:rper_id/focusgroup',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperFocusGroupController.handle,
)

rpersRouter.put(
  '/:rper_id/construction',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperConstructionController.handle,
)

rpersRouter.put(
  '/:rper_id/inputandoutput',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperInputAndOutputController.handle,
)

rpersRouter.put(
  '/:rper_id/dailyroutine',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperDailyRoutineController.handle,
)

rpersRouter.put(
  '/:rper_id/seasonalcalendar',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperSeasonalCalendarController.handle,
)

rpersRouter.put(
  '/:rper_id/venndiagram',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperVennDiagramController.handle,
)

rpersRouter.put(
  '/:rper_id/presentation',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperPresentationController.handle,
)

rpersRouter.put(
  '/:rper_id/interviews',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperInterviewsController.handle,
)

rpersRouter.put(
  '/:rper_id/otherpreparation',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperOtherPreparationController.handle,
)

rpersRouter.put(
  '/:rper_id/themesframework',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperThemesFrameworkController.handle,
)

rpersRouter.patch(
  '/:rper_id/members/:user_id',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      user_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  removeRperMemberController.handle,
)

// Editing rpers resources
rpersRouter.post(
  '/resources',
  celebrate({
    [Segments.BODY]: {
      rper_id: Joi.string().uuid().required(),
      user_id: Joi.string().uuid().required(),
      resource: Joi.string().required(),
    },
  }),
  createRperEditResourceController.handle,
)

rpersRouter.get(
  '/resources/:rper_id/:resource',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      resource: Joi.string().required(),
    },
  }),
  findRperEditResourceController.handle,
)

rpersRouter.delete(
  '/resources/:rper_id/:user_id/:resource',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      user_id: Joi.string().uuid().required(),
      resource: Joi.string().required(),
    },
  }),
  deleteRperEditResourceController.handle,
)

rpersRouter.post(
  '/images',
  upload.single('image'),
  uploadImageController.handle,
)

rpersRouter.get(
  '/:rper_id/:section/status',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      section: Joi.string().required(),
    },
  }),
  getRperSectionStatusController.handle,
)

rpersRouter.patch(
  '/:rper_id/:section/status',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      section: Joi.string().required(),
    },
    [Segments.BODY]: {
      new_status: Joi.string().required(),
    },
  }),
  updateRperSectionStatusController.handle,
)

rpersRouter.patch(
  '/:rper_id/background',
  upload.single('background'),
  createRperBackgroundController.handle,
)

rpersRouter.get('/:rper_id/report', generateRperReportController.handle)

export default rpersRouter
