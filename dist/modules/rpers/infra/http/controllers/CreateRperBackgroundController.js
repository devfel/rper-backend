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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRperBackgroundController = void 0;
const CreateRperBackgroundService_1 = require("../../../../rpers/services/CreateRperBackgroundService");
const tsyringe_1 = require("tsyringe");
class CreateRperBackgroundController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { file } = request;
            const { rper_id } = request.params;
            const createRperBackgroundService = tsyringe_1.container.resolve(CreateRperBackgroundService_1.CreateRperBackgroundService);
            const rper = yield createRperBackgroundService.execute({
                backgroundFileName: file.filename,
                rper_id,
            });
            return response.json(rper);
        });
    }
}
exports.CreateRperBackgroundController = CreateRperBackgroundController;
