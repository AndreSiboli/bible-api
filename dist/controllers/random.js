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
exports.getRandomChapter = exports.getRandom = void 0;
const verse_1 = __importDefault(require("../models/verse"));
const book_1 = require("./book");
function getRandom(version) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield (0, book_1.getBooks)();
        if (!books)
            return null;
        const randomBook = Math.floor(Math.random() * books.length);
        const chosenBook = books[randomBook];
        const randomChapter = Math.floor(Math.random() * chosenBook.chapters);
        const chosenChapter = yield verse_1.default
            .find({ 'book._id': chosenBook.id, chapter: randomChapter + 1, version })
            .select('-_id -__v')
            .then((data) => {
            return data;
        })
            .catch((err) => {
            console.log(err);
        });
        if (!chosenChapter)
            return null;
        const randomVerse = Math.floor(Math.random() * chosenChapter.length);
        const chosenVerse = chosenChapter[randomVerse];
        if (!chosenVerse)
            return null;
        return {
            book: {
                abbrev: chosenBook.abbrev,
                author: chosenBook.author,
                chapters: chosenBook.chapters,
                group: chosenBook.group,
                name: chosenBook.name,
                testament: chosenBook.testament,
                version: chosenVerse.version,
            },
            chapter: chosenVerse.chapter,
            number: chosenVerse.number,
            text: chosenVerse.text,
        };
    });
}
exports.getRandom = getRandom;
function getRandomChapter({ version, abbrev }) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield (0, book_1.getBooks)();
        if (!books)
            return null;
        const chosenBook = books.filter((bk) => bk.abbrev === abbrev)[0];
        if (!chosenBook)
            return;
        const randomChapter = Math.floor(Math.random() * chosenBook.chapters);
        const chosenChapter = yield verse_1.default
            .find({ 'book._id': chosenBook.id, chapter: randomChapter + 1, version })
            .select('-_id -__v')
            .then((data) => {
            return data;
        })
            .catch((err) => {
            console.log(err);
        });
        if (!chosenChapter)
            return null;
        const randomVerse = Math.floor(Math.random() * chosenChapter.length);
        const chosenVerse = chosenChapter[randomVerse];
        if (!chosenVerse)
            return null;
        return {
            book: {
                abbrev: chosenBook.abbrev,
                author: chosenBook.author,
                chapters: chosenBook.chapters,
                group: chosenBook.group,
                name: chosenBook.name,
                testament: chosenBook.testament,
                version: chosenVerse.version,
            },
            chapter: chosenVerse.chapter,
            number: chosenVerse.number,
            text: chosenVerse.text,
        };
    });
}
exports.getRandomChapter = getRandomChapter;
