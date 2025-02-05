"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.GetRperByIdService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const enums_1 = require("../../../enums");
let GetRperByIdService = class GetRperByIdService {
    constructor(rpersRepository) {
        this.rpersRepository = rpersRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = yield this.rpersRepository.findById(id);
            if (!rper) {
                throw new AppError_1.default('Rper not found', 404);
            }
            const rperSections = [
                rper.secondaryData,
                rper.acknowledgment,
                rper.historicalMapping,
                rper.transectWalk,
                rper.finalconsideration,
                rper.themesframework,
                rper.otherpreparation,
                rper.interviews,
                rper.presentation,
                rper.venndiagram,
                rper.seasonalcalendar,
                rper.dailyroutine,
                rper.inputandoutput,
                rper.construction,
                rper.focusgroup,
                rper.realityandobjmatrix,
                rper.prioritieselection,
                rper.otherfieldwork,
                rper.extrainformation,
            ];
            const statusCompleted = rperSections.reduce((acc, section) => {
                if (section &&
                    (section.status === enums_1.RperStatus.COMPLETED || section.status === enums_1.RperStatus.NOT_APPLICABLE)) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            const progress = ((statusCompleted / rperSections.length) * 100).toFixed(0);
            Object.assign(rper, { progress });
            return rper;
        });
    }
};
GetRperByIdService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RpersRepository')),
    __metadata("design:paramtypes", [Object])
], GetRperByIdService);
exports.GetRperByIdService = GetRperByIdService;
