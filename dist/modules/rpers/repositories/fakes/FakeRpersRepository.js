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
const uuid_1 = require("uuid");
const Rper_1 = __importDefault(require("../../infra/typeorm/entities/Rper"));
class RpersRepository {
    constructor() {
        this.rpers = [];
    }
    findById(id) {
        throw new Error('Method not implemented.');
    }
    update(rper) {
        throw new Error('Method not implemented.');
    }
    findRperByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const findRperByName = this.rpers.find(rper => rper.name === name);
            return findRperByName;
        });
    }
    create({ name, coordinator_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = new Rper_1.default();
            // rper.rper_id = uuid();
            // rper.name = name;
            // rper.coordinator_id = coordinator_id;
            //Relaced by Object.assign:
            Object.assign(rper, { id: (0, uuid_1.v4)(), name, coordinator_id });
            this.rpers.push(rper);
            return rper;
        });
    }
    findAllRpers() {
        return __awaiter(this, void 0, void 0, function* () {
            let { rpers } = this;
            rpers = this.rpers.map(el => el);
            return rpers;
        });
    }
}
exports.default = RpersRepository;
