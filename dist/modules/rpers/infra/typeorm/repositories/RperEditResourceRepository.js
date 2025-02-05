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
exports.RperEditResourceRepository = void 0;
const RperEditResource_1 = require("../entities/RperEditResource");
const typeorm_1 = require("typeorm");
class RperEditResourceRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(RperEditResource_1.RperEditResource);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const editResource = this.repository.create(data);
            yield this.repository.save(editResource);
        });
    }
    findOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOne({
                where: {
                    rper_id: data.rper_id,
                    resource: data.resource,
                },
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete({ id });
        });
    }
}
exports.RperEditResourceRepository = RperEditResourceRepository;
