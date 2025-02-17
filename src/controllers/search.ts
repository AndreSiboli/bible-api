import verseModel from '../models/verse';
import bookModel from '../models/book';

interface SearchType {
    text: string;
    version: string;
}

export async function search(props: SearchType) {
    const { text, version } = props;

    const searchBook: any = {};

    const books = await bookModel
        .find()
        .select('-__v -orderby')
        .then((data) => {
            return data;
        })
        .catch();

    if (!books) return null;

    books.map((book) => (searchBook[book.abbrev] = book));

    const data = await verseModel
        .find({ version, $text: { $search: text } })
        .sort({ chapter: 1, number: 1 })
        .then((res) => {
            return res;
        })
        .catch((err) => {});

    if (!data) return null;

    return data.map((verse) => {
        return {
            book: searchBook[verse.book.abbrev],
            chapter: verse.chapter,
            number: verse.number,
            text: verse.text,
        };
    });
}
