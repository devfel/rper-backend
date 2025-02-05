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
exports.UpdateRperSectionStatusController = void 0;
const UpdateRperSectionStatusService_1 = require("../../../../rpers/services/UpdateRperSectionStatusService");
const tsyringe_1 = require("tsyringe");
class UpdateRperSectionStatusController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rper_id, section } = request.params;
            const { new_status } = request.body;
            const updateRperSectionStatusService = tsyringe_1.container.resolve(UpdateRperSectionStatusService_1.UpdateRperSectionStatusService);
            yield updateRperSectionStatusService.execute({
                rper_id,
                section,
                new_status,
            });
            return response.status(204).json();
        });
    }
}
exports.UpdateRperSectionStatusController = UpdateRperSectionStatusController;
