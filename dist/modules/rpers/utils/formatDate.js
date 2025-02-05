"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActualDate = void 0;
const getActualDate = () => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR');
    return formatter.format(now);
};
exports.getActualDate = getActualDate;
