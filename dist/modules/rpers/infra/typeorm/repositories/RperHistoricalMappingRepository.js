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
exports.RperHistoricalMappingRepository = void 0;
const RperHistoricalMapping_1 = require("../entities/RperHistoricalMapping");
const typeorm_1 = require("typeorm");
class RperHistoricalMappingRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(RperHistoricalMapping_1.RperHistoricalMapping);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rperHistoricalMapping = this.ormRepository.create(data);
            yield this.ormRepository.save(rperHistoricalMapping);
            return rperHistoricalMapping;
        });
    }
    findByRperId(rper_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.findOne({ where: { rper_id } });
        });
    }
    update(rperHistoricalMapping) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.save(rperHistoricalMapping);
        });
    }
}
exports.RperHistoricalMappingRepository = RperHistoricalMappingRepository;
