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
exports.CreateRperBackgroundService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
let CreateRperBackgroundService = class CreateRperBackgroundService {
    constructor(rpersRepository, storageProvider) {
        this.rpersRepository = rpersRepository;
        this.storageProvider = storageProvider;
    }
    execute({ backgroundFileName, rper_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = yield this.rpersRepository.findById(rper_id);
            if (!rper) {
                throw new AppError_1.default('Rper not found', 404);
            }
            if (rper.background) {
                yield this.storageProvider.deleteFile(rper.background);
            }
            const filename = yield this.storageProvider.saveFile(backgroundFileName);
            rper.background = filename;
            rper.updated_at = new Date();
            yield this.rpersRepository.update(rper);
            return rper;
        });
    }
};
CreateRperBackgroundService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RpersRepository')),
    __param(1, (0, tsyringe_1.inject)('StorageProvider')),
    __metadata("design:paramtypes", [Object, Object])
], CreateRperBackgroundService);
exports.CreateRperBackgroundService = CreateRperBackgroundService;
