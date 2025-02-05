"use strict";
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
const tsyringe_1 = require("tsyringe");
const CreateRperService_1 = __importDefault(require("../../../../rpers/services/CreateRperService"));
const ListRpersService_1 = __importDefault(require("../../../../rpers/services/ListRpersService"));
const class_transformer_1 = require("class-transformer");
class RpersController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, coordinator_id } = request.body;
            const createRper = tsyringe_1.container.resolve(CreateRperService_1.default);
            const rper = yield createRper.execute({ name, coordinator_id });
            return response.json(rper);
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRpers = tsyringe_1.container.resolve(ListRpersService_1.default);
            const rpers = yield listRpers.execute();
            return response.json((0, class_transformer_1.classToClass)(rpers));
        });
    }
}
exports.default = RpersController;
