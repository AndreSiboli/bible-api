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
const express_1 = __importDefault(require("express"));
const verses_1 = require("../controllers/verses");
const book_1 = require("../controllers/book");
const errors_1 = require("../errors");
const router = express_1.default.Router();
router.get('/:version/:abbrev/:chapter', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { version, abbrev, chapter } = req.params;
        const book = yield (0, book_1.getBook)(abbrev);
        if (!book)
            throw new SyntaxError('book');
        const verses = yield (0, verses_1.getChapter)({ id: book.id, version, chapter: parseInt(chapter) });
        if (!verses || verses.length === 0)
            throw new SyntaxError('chapter');
        return res.json({
            book: {
                abbrev: book.abbrev,
                author: book.author,
                chapters: book.chapters,
                group: book.group,
                name: book.name,
                testament: book.testament,
                version: version.toLowerCase(),
            },
            chapter: {
                number: parseInt(chapter),
                verses: verses.length,
            },
            verses: verses,
        });
    }
    catch (error) {
        if (error instanceof SyntaxError)
            (0, errors_1.notFound)(res, error);
        else
            (0, errors_1.genericError)(res, error);
    }
}));
router.get('/:version/:abbrev/:chapter/:number', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { version, abbrev, chapter, number } = req.params;
        const book = yield (0, book_1.getBook)(abbrev);
        if (!book)
            throw new SyntaxError('book');
        const verses = yield (0, verses_1.getChapter)({ id: book.id, version, chapter: parseInt(chapter) });
        if (!verses || verses.length === 0)
            throw new SyntaxError('chapter');
        const verse = yield (0, verses_1.getVerse)({ verses: verses, number: parseInt(number) });
        if (!verse)
            throw new SyntaxError('verse');
        return res.json({
            book: {
                abbrev: book.abbrev,
                author: book.author,
                chapters: book.chapters,
                group: book.group,
                name: book.name,
                testament: book.testament,
                version: version.toLowerCase(),
            },
            chapter: parseInt(chapter),
            number: verse.number,
            text: verse.text,
        });
    }
    catch (error) {
        if (error instanceof SyntaxError)
            (0, errors_1.notFound)(res, error);
        else
            (0, errors_1.genericError)(res, error);
    }
}));
exports.default = router;
