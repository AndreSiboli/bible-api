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
const book_1 = require("../controllers/book");
const errors_1 = require("../errors");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, book_1.getBooks)();
        if (!data)
            throw new Error();
        data.map((book) => {
            return {
                abbrev: book.abbrev,
                author: book.author,
                chapters: book.chapters,
                group: book.group,
                name: book.name,
                testament: book.testament,
            };
        });
        return res.json(data);
    }
    catch (error) {
        (0, errors_1.genericError)(res, error);
    }
}));
router.get('/:abbrev', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { abbrev } = req.params;
        const data = yield (0, book_1.getBook)(abbrev);
        if (!data)
            throw new Error('book');
        return res.json({
            abbrev: data.abbrev,
            author: data.author,
            chapters: data.chapters,
            group: data.group,
            name: data.name,
            testament: data.testament,
        });
    }
    catch (error) {
        (0, errors_1.notFound)(res, error);
    }
}));
exports.default = router;
