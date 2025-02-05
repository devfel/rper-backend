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
exports.FindRperEditResourceController = void 0;
const FindRperEditResourceService_1 = require("../../../../rpers/services/FindRperEditResourceService");
const tsyringe_1 = require("tsyringe");
class FindRperEditResourceController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resource, rper_id, user_id } = request.params;
            const findRperEditResourceService = tsyringe_1.container.resolve(FindRperEditResourceService_1.FindRperEditResourceService);
            const editingResource = yield findRperEditResourceService.execute({
                resource: resource,
                rper_id,
                user_id,
            });
            return response.status(200).json(editingResource);
        });
    }
}
exports.FindRperEditResourceController = FindRperEditResourceController;
