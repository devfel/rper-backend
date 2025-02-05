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
exports.GenerateDocxReportController = void 0;
const GenerateDocxReportService_1 = require("../../../../rpers/services/GenerateDocxReportService");
const tsyringe_1 = require("tsyringe");
class GenerateDocxReportController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rper_id } = request.params;
            const generateRperReportService = tsyringe_1.container.resolve(GenerateDocxReportService_1.GenerateDocxReportService);
            const result = yield generateRperReportService.execute({
                rper_id,
                user_name: request.user.name,
            });
            response.download(result);
            return response;
        });
    }
}
exports.GenerateDocxReportController = GenerateDocxReportController;
