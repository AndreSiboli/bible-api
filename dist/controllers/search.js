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
exports.search = void 0;
const verse_1 = __importDefault(require("../models/verse"));
const book_1 = __importDefault(require("../models/book"));
function search(props) {
    return __awaiter(this, void 0, void 0, function* () {
        const { text, version } = props;
        const searchBook = {};
        const books = yield book_1.default
            .find()
            .select('-__v -orderby')
            .then((data) => {
            return data;
        })
            .catch();
        if (!books)
            return null;
        books.map((book) => (searchBook[book.abbrev] = book));
        const data = yield verse_1.default
            .find({ version, $text: { $search: text } })
            .sort({ chapter: 1, number: 1 })
            .then((res) => {
            return res;
        })
            .catch((err) => { });
        if (!data)
            return null;
        return data.map((verse) => {
            return {
                book: searchBook[verse.book.abbrev],
                chapter: verse.chapter,
                number: verse.number,
                text: verse.text,
            };
        });
    });
}
exports.search = search;
