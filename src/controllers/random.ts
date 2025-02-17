import verseModel from '../models/verse';
import { getBooks } from './book';

export async function getRandom(version: string) {
    const books = await getBooks();
    if (!books) return null;

    const randomBook = Math.floor(Math.random() * books.length);
    const chosenBook = books[randomBook];

    const randomChapter = Math.floor(Math.random() * chosenBook.chapters);
    const chosenChapter = await verseModel
        .find({ 'book._id': chosenBook.id, chapter: randomChapter + 1, version })
        .select('-_id -__v')
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    if (!chosenChapter) return null;

    const randomVerse = Math.floor(Math.random() * chosenChapter.length);
    const chosenVerse = chosenChapter[randomVerse];
    if (!chosenVerse) return null;

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
}

export async function getRandomChapter({ version, abbrev }: { version: string; abbrev: string }) {
    const books = await getBooks();
    if (!books) return null;

    const chosenBook = books.filter((bk) => bk.abbrev === abbrev)[0];
    if (!chosenBook) return;

    const randomChapter = Math.floor(Math.random() * chosenBook.chapters);
    const chosenChapter = await verseModel
        .find({ 'book._id': chosenBook.id, chapter: randomChapter + 1, version })
        .select('-_id -__v')
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    if (!chosenChapter) return null;

    const randomVerse = Math.floor(Math.random() * chosenChapter.length);
    const chosenVerse = chosenChapter[randomVerse];
    if (!chosenVerse) return null;

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
}
