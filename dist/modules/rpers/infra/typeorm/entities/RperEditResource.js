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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RperEditResource = void 0;
const User_1 = __importDefault(require("../../../../users/infra/typeorm/entities/User"));
const typeorm_1 = require("typeorm");
const uuidv4_1 = require("uuidv4");
const Rper_1 = __importDefault(require("./Rper"));
let RperEditResource = class RperEditResource {
    constructor() {
        if (!this.id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RperEditResource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RperEditResource.prototype, "rper_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RperEditResource.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RperEditResource.prototype, "resource", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RperEditResource.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User_1.default)
], RperEditResource.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Rper_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", Rper_1.default)
], RperEditResource.prototype, "rper", void 0);
RperEditResource = __decorate([
    (0, typeorm_1.Entity)('user_edit_resources'),
    __metadata("design:paramtypes", [])
], RperEditResource);
exports.RperEditResource = RperEditResource;
