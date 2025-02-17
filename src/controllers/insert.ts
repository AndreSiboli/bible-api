import bible from '../bible/index';
import bookModel from '../models/book';
import { BookType } from '../@types/book';
import verseTest from '../models/versetest';
import verseModel from '../models/verse';
import { Model } from 'mongoose';

export async function pushBooks() {
    bible.forEach(async (bk, index) => {
        await new bookModel({
            ...bk,
            orderby: index,
        })
            .save()
            .then(() => {
                console.log('Salvo com sucesso');
            })
            .catch((err) => {
                console.log('Não foi possivel salvar.');
            });
    });
}

interface InsertTypes {
    book: BookType;
    arr: VerseTypes[][];
    version: string;
}

async function insertVerses(db: Model<VersesTypes>, datas: InsertTypes) {
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
                    //
                })
                .catch((err) => {
                    console.log('An error has occurred while adding verses.');
                });
        });
    });
}

//This function send the datas to a test database.
export function pushVersesTest(book: BookType, verses: VerseTypes[][], version: string) {
    insertVerses(verseTest as any, { book, arr: verses, version });
}

export function pushVerses(book: BookType, verses: VerseTypes[][], version: string) {
    insertVerses(verseModel as any, { book, arr: verses, version });
}
