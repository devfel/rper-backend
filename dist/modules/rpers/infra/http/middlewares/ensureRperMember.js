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
exports.ensureRperMember = void 0;
const AppError_1 = __importDefault(require("../../../../../shared/errors/AppError"));
const RpersRepository_1 = __importDefault(require("../../typeorm/repositories/RpersRepository"));
function ensureRperMember(request, response, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = request.user.id;
        const { rper_id } = request.params;
        const rpersRepository = new RpersRepository_1.default();
        const rper = yield rpersRepository.findById(rper_id);
        if (!rper) {
            throw new AppError_1.default('RPER not found', 404);
        }
        // if the coordinator ID is different of the user logged in
        const notCoordinator = rper.coordinator_id !== user_id;
        // Negate if find the user logged in ID in the members list
        const notMember = !((_a = rper.members) === null || _a === void 0 ? void 0 : _a.find(rper => rper.user_id === user_id));
        // both bellow has to be true to throw the error. 
        //that is, the user logged in is neither a coordinator nor a member. 
        if (notCoordinator && notMember) {
            throw new AppError_1.default('User does not have permission. User is not a Member nor the Coordinator of this RPER.', 403);
        }
        return next();
    });
}
exports.ensureRperMember = ensureRperMember;
