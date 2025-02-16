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
const typeorm_1 = require("typeorm");
function runMigrations() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, typeorm_1.createConnection)();
        yield connection.runMigrations();
        console.log('Migrations executed successfully!');
        yield connection.close();
    });
}
runMigrations().catch(error => {
    console.error('Error running migrations:', error);
    process.exit(1);
});
