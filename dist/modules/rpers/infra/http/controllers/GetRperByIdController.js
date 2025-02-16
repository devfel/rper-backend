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
exports.GetRperByIdController = void 0;
const GetRperByIdService_1 = require("../../../../rpers/services/GetRperByIdService");
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
class GetRperByIdController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const getRperByIdService = tsyringe_1.container.resolve(GetRperByIdService_1.GetRperByIdService);
            const rper = yield getRperByIdService.execute(id);
            return response.json((0, class_transformer_1.classToClass)(rper));
        });
    }
}
exports.GetRperByIdController = GetRperByIdController;
