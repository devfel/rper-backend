"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
const profileRouter = (0, express_1.Router)();
const profileController = new ProfileController_1.default();
profileRouter.use(ensureAuthenticated_1.default);
profileRouter.get('/', profileController.show);
profileRouter.put('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string(),
        email: celebrate_1.Joi.string().email(),
        old_password: celebrate_1.Joi.string(),
        password: celebrate_1.Joi.string(),
        password_confirmation: celebrate_1.Joi.string().valid(celebrate_1.Joi.ref('password'))
    }
}), profileController.update);
exports.default = profileRouter;
