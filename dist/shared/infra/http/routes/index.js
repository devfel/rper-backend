"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rpers_routes_1 = __importDefault(require("../../../../modules/rpers/infra/http/routes/rpers.routes"));
const users_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/users.routes"));
const sessions_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));
const password_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/password.routes"));
const profile_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/profile.routes"));
console.log('Resolved Path for rpers.routes');
const routes = (0, express_1.Router)();
routes.use('/users', users_routes_1.default);
routes.use('/rpers', rpers_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/password', password_routes_1.default);
routes.use('/profile', profile_routes_1.default);
exports.default = routes;
