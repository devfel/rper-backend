"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../../../../../config/upload"));
const celebrate_1 = require("celebrate");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const UserAvatarController_1 = __importDefault(require("../controllers/UserAvatarController"));
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
const usersRouter = (0, express_1.Router)();
const usersController = new UsersController_1.default();
const userAvatarController = new UserAvatarController_1.default();
const upload = (0, multer_1.default)(upload_1.default);
//Route should only receive a request, call another file, return a response. 
// usersRouter.get("/", async (request, response) => {
//     const usersRepository = new UsersRepository();
//     //const usersRepository = getCustomRepository(UsersRepository);
//     const users = await usersRepository.findByEmail();
//     //Remove password of all users to not return encrypted password
//     users.forEach(user => {
//         delete user.password;
//     });
//     return response.json(users);
// });
/**
 * @swagger
 * /users:
 *  post:
 *      description: Create new User
 *      responses:
 *      '200':
 *          description: User created successfully
*/
usersRouter.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    }
}), usersController.create);
/**
 * @swagger
 * /users:
 *  get:
 *      description: List all users
 *      responses:
 *      '200':
 *          description: List of all users in the application
*/
usersRouter.get("/", ensureAuthenticated_1.default, usersController.index);
/**
 * @swagger
 * /users:
 *  patch:
 *      description: Update User Avatar Picture
 *      responses:
 *      '200':
 *          description: Avatar picture updated successfully
*/
usersRouter.patch('/avatar', ensureAuthenticated_1.default, upload.single('avatar'), userAvatarController.update);
exports.default = usersRouter;
