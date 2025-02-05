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
exports.RperRealityAndObjMatrixRepository = void 0;
const RperRealityAndObjMatrix_1 = require("../entities/RperRealityAndObjMatrix");
const typeorm_1 = require("typeorm");
class RperRealityAndObjMatrixRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(RperRealityAndObjMatrix_1.RperRealityAndObjMatrix);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rperRealityAndObjMatrix = this.ormRepository.create(data);
            yield this.ormRepository.save(rperRealityAndObjMatrix);
            return rperRealityAndObjMatrix;
        });
    }
    findByRperId(rper_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.findOne({ where: { rper_id } });
        });
    }
    update(rperRealityAndObjMatrix) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.save(rperRealityAndObjMatrix);
        });
    }
}
exports.RperRealityAndObjMatrixRepository = RperRealityAndObjMatrixRepository;
