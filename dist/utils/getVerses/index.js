"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerses = void 0;
const getAA_1 = require("./getAA");
const getNVI_1 = require("./getNVI");
const getACF_1 = require("./getACF");
function getVerses({ version, abbrev }) {
    if (version === 'nvi')
        return (0, getNVI_1.getNvi)(abbrev);
    if (version === 'aa')
        return (0, getAA_1.getAA)(abbrev);
    if (version === 'acf')
        return (0, getACF_1.getAcf)(abbrev);
}
exports.getVerses = getVerses;
