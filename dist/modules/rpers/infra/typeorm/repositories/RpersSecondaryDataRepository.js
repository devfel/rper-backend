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
exports.RpersSecondaryDataRepository = void 0;
const typeorm_1 = require("typeorm");
const RperSecondaryData_1 = require("../entities/RperSecondaryData");
class RpersSecondaryDataRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(RperSecondaryData_1.RperSecondaryData);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const secondaryData = this.ormRepository.create(data);
            yield this.ormRepository.save(secondaryData);
            return secondaryData;
        });
    }
    findByRperId(rper_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.findOne({ rper_id });
        });
    }
    update(rperSecondaryData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.save(rperSecondaryData);
        });
    }
}
exports.RpersSecondaryDataRepository = RpersSecondaryDataRepository;
