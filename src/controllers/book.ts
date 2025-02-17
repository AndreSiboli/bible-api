import bookModel from '../models/book';

export async function getBooks() {
    const data = await bookModel
        .find()
        .sort({ orderby: 1 })
        .select('-__v -orderby')
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return null;
        });

    if (!data) return null;

    return data;
}

export async function getBook(abbrev: string) {
    const book = await bookModel
        .findOne({ abbrev: abbrev })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log('err');
        });

    if (!book) return null;

    return {
        id: book.id,
        abbrev: book.abbrev,
        author: book.author,
        chapters: book.chapters,
        group: book.group,
        name: book.name,
        testament: book.testament,
    };
}
