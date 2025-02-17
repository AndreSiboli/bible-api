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
exports.getBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield book_1.default
            .find()
            .sort({ orderby: 1 })
            .select('-__v -orderby')
            .then((data) => {
            return data;
        })
            .catch((err) => {
            return null;
        });
        if (!data)
            return null;
        return data;
    });
}
exports.getBooks = getBooks;
function getBook(abbrev) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield book_1.default
            .findOne({ abbrev: abbrev })
            .then((data) => {
            return data;
        })
            .catch((err) => {
            console.log('err');
        });
        if (!book)
            return null;
        return {
            id: book.id,
            abbrev: book.abbrev,
            author: book.author,
            chapters: book.chapters,
            group: book.group,
            name: book.name,
            testament: book.testament,
        };
    });
}
exports.getBook = getBook;
