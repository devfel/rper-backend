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
exports.RperSeasonalCalendarRepository = void 0;
const RperSeasonalCalendar_1 = require("../entities/RperSeasonalCalendar");
const typeorm_1 = require("typeorm");
class RperSeasonalCalendarRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(RperSeasonalCalendar_1.RperSeasonalCalendar);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rperSeasonalCalendar = this.ormRepository.create(data);
            yield this.ormRepository.save(rperSeasonalCalendar);
            return rperSeasonalCalendar;
        });
    }
    findByRperId(rper_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.findOne({ where: { rper_id } });
        });
    }
    update(rperSeasonalCalendar) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.save(rperSeasonalCalendar);
        });
    }
}
exports.RperSeasonalCalendarRepository = RperSeasonalCalendarRepository;
