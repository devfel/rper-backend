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
const Rper_1 = __importDefault(require("../entities/Rper"));
const typeorm_1 = require("typeorm");
class RpersRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Rper_1.default);
    }
    findRperByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const findRperByName = yield this.ormRepository.findOne({
                where: { name },
            });
            return findRperByName;
        });
    }
    create({ name, coordinator_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = this.ormRepository.create({ name, coordinator_id });
            yield this.ormRepository.save(rper);
            return rper;
        });
    }
    findAllRpers() {
        return __awaiter(this, void 0, void 0, function* () {
            const rpers = yield this.ormRepository.find();
            return rpers;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = yield this.ormRepository.findOne(id);
            return rper;
        });
    }
    update(rper) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.save(rper);
            return rper;
        });
    }
}
exports.default = RpersRepository;
