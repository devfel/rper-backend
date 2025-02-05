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
exports.RperFocusGroup = void 0;
const typeorm_1 = require("typeorm");
const Rper_1 = __importDefault(require("./Rper"));
let RperFocusGroup = class RperFocusGroup {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' }),
    __metadata("design:type", String)
], RperFocusGroup.prototype, "rper_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RperFocusGroup.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RperFocusGroup.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RperFocusGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RperFocusGroup.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Rper_1.default, rper => rper.focusgroup),
    __metadata("design:type", Rper_1.default)
], RperFocusGroup.prototype, "rper", void 0);
RperFocusGroup = __decorate([
    (0, typeorm_1.Entity)('rper_focusgroup')
], RperFocusGroup);
exports.RperFocusGroup = RperFocusGroup;
