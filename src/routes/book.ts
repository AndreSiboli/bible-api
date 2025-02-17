import express from 'express';
import { getBook, getBooks } from '../controllers/book';
import { genericError, notFound } from '../errors';

const router = express.Router();

//https://www.bible.com/books
router.get('/', async (req, res) => {
    try {
        const data = await getBooks();
        if (!data) throw new Error();

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
    } catch (error) {
        genericError(res, error as Error);
    }
});

//https://www.bible.com/books/:abbrev
router.get('/:abbrev', async (req, res) => {
    try {
        const { abbrev } = req.params;

        const data = await getBook(abbrev);

        if (!data) throw new Error('book');

        return res.json({
            abbrev: data.abbrev,
            author: data.author,
            chapters: data.chapters,
            group: data.group,
            name: data.name,
            testament: data.testament,
        });
    } catch (error) {
        notFound(res, error as Error);
    }
});

export default router;
