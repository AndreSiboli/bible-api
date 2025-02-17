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
const index_1 = require("../utils/getVerses/index");
const book_1 = require("../controllers/book");
const insert_1 = require("../controllers/insert");
const errors_1 = require("../errors");
const bookList_1 = require("../utils/bookList");
const router = express_1.default.Router();
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, insert_1.pushBooks)();
        return res.send('Verify if the verses were added correctly.');
    }
    catch (error) {
        (0, errors_1.genericError)(res, error);
    }
}));
router.get('/all-verses/:version', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booksAbbrev = bookList_1.bookList;
        booksAbbrev.forEach((abbrev) => __awaiter(void 0, void 0, void 0, function* () {
            const { version } = req.params;
            const verses = (0, index_1.getVerses)({ abbrev, version });
            if (!verses)
                throw new SyntaxError('abbreviation');
            const book = yield (0, book_1.getBook)(abbrev);
            if (!book)
                throw new SyntaxError('book');
            (0, insert_1.pushVerses)(book, verses, version);
        }));
        res.send('Verify if the verses were added correctly on production database.');
    }
    catch (error) {
        if (error instanceof SyntaxError)
            (0, errors_1.notFound)(res, error);
        else
            (0, errors_1.genericError)(res, error);
    }
}));
router.get('/verses/:version/:abbrev', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { abbrev, version } = req.params;
        const arr = (0, index_1.getVerses)(req.params);
        if (!arr)
            throw new SyntaxError('abbreviation');
        const book = yield (0, book_1.getBook)(abbrev);
        if (!book)
            throw new SyntaxError('book');
        (0, insert_1.pushVerses)(book, arr, version);
        res.send('Verify if the verses were added correctly on production database.');
    }
    catch (error) {
        if (error instanceof SyntaxError)
            (0, errors_1.notFound)(res, error);
        else
            (0, errors_1.genericError)(res, error);
    }
}));
exports.default = router;
