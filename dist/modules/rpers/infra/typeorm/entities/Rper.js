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
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../../../../users/infra/typeorm/entities/User"));
const class_transformer_1 = require("class-transformer");
const RperSecondaryData_1 = require("./RperSecondaryData");
const RperAcknowledgment_1 = require("./RperAcknowledgment");
const RperFinalConsideration_1 = require("./RperFinalConsideration");
const RperHistoricalMapping_1 = require("./RperHistoricalMapping");
const RperTransectWalk_1 = require("./RperTransectWalk");
const RperExtraInformation_1 = require("./RperExtraInformation");
const RperOtherFieldwork_1 = require("./RperOtherFieldwork");
const RperPrioritiesElection_1 = require("./RperPrioritiesElection");
const RperRealityAndObjMatrix_1 = require("./RperRealityAndObjMatrix");
const RperFocusGroup_1 = require("./RperFocusGroup");
const RperConstruction_1 = require("./RperConstruction");
const RperInputAndOutput_1 = require("./RperInputAndOutput");
const RperDailyRoutine_1 = require("./RperDailyRoutine");
const RperSeasonalCalendar_1 = require("./RperSeasonalCalendar");
const RperVennDiagram_1 = require("./RperVennDiagram");
const RperPresentation_1 = require("./RperPresentation");
const RperInterviews_1 = require("./RperInterviews");
const RperOtherPreparation_1 = require("./RperOtherPreparation");
const RperThemesFramework_1 = require("./RperThemesFramework");
let Rper = class Rper {
    getBackgroundUrl() {
        return this.background
            ? `${process.env.APP_API_URL}/files/${this.background}`
            : null;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Rper.prototype, "rper_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rper.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rper.prototype, "coordinator_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rper.prototype, "background", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.default, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'coordinator_id' }),
    __metadata("design:type", User_1.default)
], Rper.prototype, "coordinator", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.default, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: 'rper_members',
        joinColumns: [{ name: 'rper_id' }],
        inverseJoinColumns: [{ name: 'user_id' }],
    }),
    __metadata("design:type", Array)
], Rper.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperSecondaryData_1.RperSecondaryData, secondaryData => secondaryData.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperSecondaryData_1.RperSecondaryData)
], Rper.prototype, "secondaryData", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperAcknowledgment_1.RperAcknowledgment, acknowledgment => acknowledgment.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperAcknowledgment_1.RperAcknowledgment)
], Rper.prototype, "acknowledgment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperHistoricalMapping_1.RperHistoricalMapping, historicalMapping => historicalMapping.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperHistoricalMapping_1.RperHistoricalMapping)
], Rper.prototype, "historicalMapping", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperTransectWalk_1.RperTransectWalk, historicalMapping => historicalMapping.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperTransectWalk_1.RperTransectWalk)
], Rper.prototype, "transectWalk", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperFinalConsideration_1.RperFinalConsideration, finalconsideration => finalconsideration.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperFinalConsideration_1.RperFinalConsideration)
], Rper.prototype, "finalconsideration", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperExtraInformation_1.RperExtraInformation, extrainformation => extrainformation.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperExtraInformation_1.RperExtraInformation)
], Rper.prototype, "extrainformation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperOtherFieldwork_1.RperOtherFieldwork, otherfieldwork => otherfieldwork.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperOtherFieldwork_1.RperOtherFieldwork)
], Rper.prototype, "otherfieldwork", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperPrioritiesElection_1.RperPrioritiesElection, prioritieselection => prioritieselection.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperPrioritiesElection_1.RperPrioritiesElection)
], Rper.prototype, "prioritieselection", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperRealityAndObjMatrix_1.RperRealityAndObjMatrix, realityandobjmatrix => realityandobjmatrix.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperRealityAndObjMatrix_1.RperRealityAndObjMatrix)
], Rper.prototype, "realityandobjmatrix", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperFocusGroup_1.RperFocusGroup, focusgroup => focusgroup.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperFocusGroup_1.RperFocusGroup)
], Rper.prototype, "focusgroup", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperConstruction_1.RperConstruction, construction => construction.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperConstruction_1.RperConstruction)
], Rper.prototype, "construction", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperInputAndOutput_1.RperInputAndOutput, inputandoutput => inputandoutput.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperInputAndOutput_1.RperInputAndOutput)
], Rper.prototype, "inputandoutput", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperDailyRoutine_1.RperDailyRoutine, dailyroutine => dailyroutine.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperDailyRoutine_1.RperDailyRoutine)
], Rper.prototype, "dailyroutine", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperSeasonalCalendar_1.RperSeasonalCalendar, seasonalcalendar => seasonalcalendar.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperSeasonalCalendar_1.RperSeasonalCalendar)
], Rper.prototype, "seasonalcalendar", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperVennDiagram_1.RperVennDiagram, venndiagram => venndiagram.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperVennDiagram_1.RperVennDiagram)
], Rper.prototype, "venndiagram", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperPresentation_1.RperPresentation, presentation => presentation.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperPresentation_1.RperPresentation)
], Rper.prototype, "presentation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperInterviews_1.RperInterviews, interviews => interviews.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperInterviews_1.RperInterviews)
], Rper.prototype, "interviews", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperOtherPreparation_1.RperOtherPreparation, otherpreparation => otherpreparation.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperOtherPreparation_1.RperOtherPreparation)
], Rper.prototype, "otherpreparation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RperThemesFramework_1.RperThemesFramework, themesframework => themesframework.rper, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rper_id' }),
    __metadata("design:type", RperThemesFramework_1.RperThemesFramework)
], Rper.prototype, "themesframework", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rper.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'now()' }),
    __metadata("design:type", Date)
], Rper.prototype, "updated_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'background_url' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Rper.prototype, "getBackgroundUrl", null);
Rper = __decorate([
    (0, typeorm_1.Entity)('rpers')
], Rper);
exports.default = Rper;
