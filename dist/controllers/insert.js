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
exports.pushVerses = exports.pushVersesTest = exports.pushBooks = void 0;
const index_1 = __importDefault(require("../bible/index"));
const book_1 = __importDefault(require("../models/book"));
const versetest_1 = __importDefault(require("../models/versetest"));
const verse_1 = __importDefault(require("../models/verse"));
function pushBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        index_1.default.forEach((bk, index) => __awaiter(this, void 0, void 0, function* () {
            yield new book_1.default(Object.assign(Object.assign({}, bk), { orderby: index }))
                .save()
                .then(() => {
                console.log('Salvo com sucesso');
            })
                .catch((err) => {
                console.log('Não foi possivel salvar.');
            });
        }));
    });
}
exports.pushBooks = pushBooks;
function insertVerses(db, datas) {
    return __awaiter(this, void 0, void 0, function* () {
        const { book, arr, version } = datas;
        arr.forEach((chapter, index) => {
            chapter.forEach((verse) => {
                new db({
                    book: {
                        id: book.id,
                        abbrev: book.abbrev,
                    },
                    chapter: index + 1,
                    number: verse.number,
                    text: verse.text,
                    version,
                })
                    .save()
                    .then((ret) => {
                })
                    .catch((err) => {
                    console.log('An error has occurred while adding verses.');
                });
            });
        });
    });
}
function pushVersesTest(book, verses, version) {
    insertVerses(versetest_1.default, { book, arr: verses, version });
}
exports.pushVersesTest = pushVersesTest;
function pushVerses(book, verses, version) {
    insertVerses(verse_1.default, { book, arr: verses, version });
}
exports.pushVerses = pushVerses;
