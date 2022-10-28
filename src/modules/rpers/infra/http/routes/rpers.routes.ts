import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import RpersController from '../controllers/RpersController';
import { CreateRpersMembersController } from '../controllers/CreateRpersMembersController';
import { UpdateRperController } from '../controllers/UpdateRperController';
import { ensureRperMember } from '../middlewares/ensureRperMember';

const rpersRouter = Router();
const rpersController = new RpersController();
const createRpersMembersController = new CreateRpersMembersController();
const updateRperController = new UpdateRperController();


//Middleware to ensure the user is logged in before listing RPERs and Creating new one.
rpersRouter.use(ensureAuthenticated);

rpersRouter.post("/", celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        coordinator_id: Joi.string().uuid().required()
    }
}), rpersController.create);

rpersRouter.get("/", rpersController.index);

rpersRouter.post('/members', celebrate({
    [Segments.BODY]: {
        rper_id: Joi.string().required(),
        users_ids: Joi.array().required(),
    }
}), createRpersMembersController.handle);

rpersRouter.put('/:rper_id/secondary-data', celebrate({
    [Segments.BODY]: {
        content: Joi.string().required(),
        status: Joi.string().required(),
    },
    [Segments.PARAMS]: {
        rper_id: Joi.string().uuid().required(),
    },
}), ensureRperMember, updateRperController.handle);

export default rpersRouter;


//ROUTE TO GET ALL THE RPERs.
//Route should only receive a request, call another file, return a response.
// rpersRouter.get("/", async (request, response) => {
//     //User ID is availabe in all routes that use ensureAuthenticated:
//     //console.log(request.user);

//     const rpers = await rpersRepository.find();
//     return response.json(rpers);
// });

// rpersRouter.get("/", async (request, response) => {
//     const rpersRepository = new RpersRepository();

//     const rperList = new CreateRperService(rpersRepository);
//     const rpers = await rperList.findRperByName();

//     return response.json(rperList);

//     //     //User ID is availabe in all routes that use ensureAuthenticated:
//     //     //console.log(request.user);

//     //     const rpers = await rpersRepository.find();
//     //     return response.json(rpers);
//     // });
// });