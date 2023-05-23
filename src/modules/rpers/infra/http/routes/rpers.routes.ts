import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import RpersController from '../controllers/RpersController';
import { CreateRpersMembersController } from '../controllers/CreateRpersMembersController';
import { UpdateRperSecondaryController } from '../controllers/UpdateRperSecondaryController';
import { ensureRperMember } from '../middlewares/ensureRperMember';
import { GetRperByIdController } from '../controllers/GetRperByIdController';
import { RemoveRperMemberController } from '../controllers/RemoveRperMemberController';
import { CreateRperEditResourceController } from '../controllers/CreateRperEditResourceController';
import { FindRperEditResourceController } from '../controllers/FindRperEditResourceController';
import { DeleteRperEditResourceController } from '../controllers/DeleteRperEditResourceController';

const rpersRouter = Router();
const rpersController = new RpersController();
const createRpersMembersController = new CreateRpersMembersController();
const updateRperController = new UpdateRperSecondaryController();
const getRperByIdController = new GetRperByIdController();
const removeRperMemberController = new RemoveRperMemberController();
const createRperEditResourceController = new CreateRperEditResourceController();
const findRperEditResourceController = new FindRperEditResourceController();
const deleteRperEditResourceController = new DeleteRperEditResourceController();

//Middleware to ensure the user is logged in before listing RPERs and Creating new one.
rpersRouter.use(ensureAuthenticated);

rpersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      coordinator_id: Joi.string().uuid().required(),
    },
  }),
  rpersController.create,
);

rpersRouter.get('/', rpersController.index);

rpersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  getRperByIdController.handle,
);

rpersRouter.post(
  '/members',
  celebrate({
    [Segments.BODY]: {
      rper_id: Joi.string().required(),
      users_ids: Joi.array().required(),
    },
  }),
  createRpersMembersController.handle,
);

rpersRouter.put(
  '/:rper_id/secondary-data',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string(),
      editable: Joi.boolean(),
    },
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
    },
  }),
  ensureRperMember,
  updateRperController.handle,
);

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
);

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
);

rpersRouter.get(
  '/resources/:rper_id/:resource',
  celebrate({
    [Segments.PARAMS]: {
      rper_id: Joi.string().uuid().required(),
      resource: Joi.string().required(),
    },
  }),
  findRperEditResourceController.handle,
);

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
);

export default rpersRouter;
