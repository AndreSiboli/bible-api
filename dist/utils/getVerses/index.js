"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerses = void 0;
const getNVI_1 = require("./getNVI");
function getVerses({ version, abbrev }) {
    if (version === 'nvi')
        return (0, getNVI_1.getNvi)(abbrev);
    if (version === 'ara')
        return '';
}
exports.getVerses = getVerses;
