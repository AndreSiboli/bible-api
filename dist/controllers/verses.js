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
exports.getVerse = exports.getChapter = void 0;
const verse_1 = __importDefault(require("../models/verse"));
function getChapter(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, chapter, version } = req;
        const verses = yield verse_1.default
            .find({ 'book._id': id, chapter, version })
            .sort({ number: 1 })
            .then((data) => {
            return data;
        })
            .catch((err) => {
            console.log('Não foi possivel encontrar.');
        });
        if (!verses)
            return null;
        const versesArr = verses.map((verse) => {
            return { _id: verse._id, number: verse.number, text: verse.text };
        });
        return versesArr;
    });
}
exports.getChapter = getChapter;
function getVerse(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verses, number } = req;
        const verse = verses.filter((data) => data.number === number);
        if (!verse || verse.length !== 1)
            return null;
        return {
            number: verse[0].number,
            text: verse[0].text,
        };
    });
}
exports.getVerse = getVerse;
