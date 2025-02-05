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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.GenerateDocxReportService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const enums_1 = require("../../../enums");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const html_to_docx_1 = __importDefault(require("html-to-docx"));
const formatDate_1 = require("../utils/formatDate");
const fs_2 = require("fs");
let GenerateDocxReportService = class GenerateDocxReportService {
    constructor(rpersRepository) {
        this.rpersRepository = rpersRepository;
        handlebars_1.default.registerHelper('simplifyContent', this.simplifyContent.bind(this));
    }
    simplifyContent(htmlString) {
        console.log('simplifyContent function has been called.');
        console.log('HTML input to simplifyContent:', htmlString);
        const imgRegexReplacer = /<div class="se-component se-image-container[^>]+><figure[^>]*><img[^>]+src="([^"]+)"[^>]*><\/figure><\/div>/g;
        return htmlString.replace(imgRegexReplacer, (match, srcValue) => {
            if (!srcValue) {
                console.log('Skipping invalid image src:', srcValue);
                return '';
            }
            // Extract the file name from the src (e.g., "/files/cutecat.png")
            const filePath = srcValue.replace('http://localhost:3333/files/', '');
            const absolutePath = path_1.default.resolve('/app/tmp/uploads', filePath);
            console.log('Resolved path:', absolutePath);
            if (!(0, fs_2.existsSync)(absolutePath)) {
                console.log(`File does not exist: ${absolutePath}`);
                return ''; // Skip this <img> tag if the file doesn't exist
            }
            console.log(`File exists, including image: ${absolutePath}`);
            return `<img src="${srcValue}" />`; // Include the valid <img> tag
        });
    }
    isFinished(section) {
        return (section.status &&
            (section.status === enums_1.RperStatus.COMPLETED ||
                section.status === enums_1.RperStatus.IN_PROGRESS));
    }
    execute({ rper_id, user_name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rper = yield this.rpersRepository.findById(rper_id);
            if (!rper) {
                throw new AppError_1.default('RPER not found', 404);
            }
            const secondaryDataFinished = this.isFinished(rper.secondaryData);
            const acknowledgmentFinished = this.isFinished(rper.acknowledgment);
            const dailyRoutineFinished = this.isFinished(rper.dailyroutine);
            const extraInformationFinished = this.isFinished(rper.extrainformation);
            const finalConsiderationFinished = this.isFinished(rper.finalconsideration);
            const focusGroupFinished = this.isFinished(rper.focusgroup);
            const historicalMappingFinished = this.isFinished(rper.historicalMapping);
            const inputAndOutputFinished = this.isFinished(rper.inputandoutput);
            const interviewsFinished = this.isFinished(rper.interviews);
            const otherFieldworkFinished = this.isFinished(rper.otherfieldwork);
            const otherPreparationFinished = this.isFinished(rper.otherpreparation);
            const presentationFinished = this.isFinished(rper.presentation);
            const priorityAndSelectionFinished = this.isFinished(rper.prioritieselection);
            const realityAndObjMatrixFinished = this.isFinished(rper.realityandobjmatrix);
            const seasonalCalendarFinished = this.isFinished(rper.seasonalcalendar);
            const themesFrameworkFinished = this.isFinished(rper.themesframework);
            const transectWalkFinished = this.isFinished(rper.transectWalk);
            const vennDiagramFinished = this.isFinished(rper.venndiagram);
            const constructionFinished = this.isFinished(rper.construction);
            // const outputPath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp')
            const pathToView = path_1.default.resolve(__dirname, '..', '..', '..', 'views', 'report.hbs');
            const page = (0, fs_1.readFileSync)(pathToView).toString();
            const actualDate = (0, formatDate_1.getActualDate)();
            const html = handlebars_1.default.compile(page);
            const reportPage = html({
                rper_name: rper.name,
                coordinator_name: rper.coordinator.name,
                actualDate,
                members: rper.members,
                secondaryData: secondaryDataFinished ? rper.secondaryData : null,
                acknowledgment: acknowledgmentFinished ? rper.acknowledgment : null,
                dailyRoutine: dailyRoutineFinished ? rper.dailyroutine : null,
                extraInformation: extraInformationFinished ? rper.extrainformation : null,
                finalConsideration: finalConsiderationFinished
                    ? rper.finalconsideration
                    : null,
                focusGroup: focusGroupFinished ? rper.focusgroup : null,
                historicalMapping: historicalMappingFinished
                    ? rper.historicalMapping
                    : null,
                inputAndOutput: inputAndOutputFinished ? rper.inputandoutput : null,
                interviews: interviewsFinished ? rper.interviews : null,
                otherFieldwork: otherFieldworkFinished ? rper.otherfieldwork : null,
                otherPreparation: otherPreparationFinished ? rper.otherpreparation : null,
                presentation: presentationFinished ? rper.presentation : null,
                priorityAndElection: priorityAndSelectionFinished
                    ? rper.prioritieselection
                    : null,
                realityAndObjMatrix: realityAndObjMatrixFinished
                    ? rper.realityandobjmatrix
                    : null,
                seasonalCalendar: seasonalCalendarFinished ? rper.seasonalcalendar : null,
                themesFramework: themesFrameworkFinished ? rper.themesframework : null,
                transectWalk: transectWalkFinished ? rper.transectWalk : null,
                vennDiagram: vennDiagramFinished ? rper.venndiagram : null,
                construction: constructionFinished ? rper.construction : null,
            });
            const docxBuffer = yield (0, html_to_docx_1.default)(reportPage, null);
            const outputPath = path_1.default.resolve(__dirname, '..', '..', '..', '..', 'tmp');
            const filename = `${outputPath}/${rper.name}-${new Date().getTime()}.docx`;
            (0, fs_1.writeFileSync)(filename, docxBuffer);
            return filename;
        });
    }
};
GenerateDocxReportService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RpersRepository')),
    __metadata("design:paramtypes", [Object])
], GenerateDocxReportService);
exports.GenerateDocxReportService = GenerateDocxReportService;
