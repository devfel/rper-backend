"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import dotenv, { config } from "dotenv";
require("reflect-metadata");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const celebrate_1 = require("celebrate");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const upload_1 = __importDefault(require("../../../config/upload"));
require("../../infra/typeorm");
require("../../container");
const express_handlebars_1 = require("express-handlebars");
//dotenv.config();
const app = (0, express_1.default)();
//Swagger Configuration
//Extended: https://swagger.io/specifications/#infoObject
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'RPER API Documentation',
            version: '0.6.0',
            description: 'Rapid Participatory Emancipatory Research (RPER) consist of intervention techniques that allow qualitative and quantitative information to be obtained from a collectivity in a short period. This information is then used to identify problems, their causes, and possible solutions, with the goal of promoting social change and development. The method was specifically designed to intervene, in a planned way, in the complex reality of social groups such as rural land reform settlements, associations, cooperatives, among others.',
            contact: {
                name: '- Luiz Flavio Felizardo',
                email: 'devfelizardo@gmail.com',
            },
            servers: ['http://localhost:3333'],
        },
    },
    apis: ['**/*.routes.ts'],
    //apis: ['.routes/*.js']
    //apis: ['../../../modules/users/infra/http/routes/*.ts']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
//End of Swagger Configuration
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.uploadsFolder));
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    else {
        console.log('Unexpected Error', err);
        return response.status(500).json({
            status: 'error',
            message: 'Unexpected Error',
        });
    }
});
app.engine('handlebars', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', 'handlebars');
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
});
