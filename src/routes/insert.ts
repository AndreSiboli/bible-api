import express from 'express';
import { getVerses } from '../utils/getVerses/index';
import { getBook } from '../controllers/book';
import { pushVerses, pushVersesTest, pushBooks } from '../controllers/insert';
import { genericError, notFound } from '../errors';
import { bookList } from '../utils/bookList';

const router = express.Router();

//https://www.bible.com/insert/books
router.get('/books', async (req, res) => {
    try {
        await pushBooks();
        return res.send('Verify if the verses were added correctly.');
    } catch (error) {
        genericError(res, error as Error);
    }
});

//https://www.bible.com/insert/all-verses
router.get('/all-verses/:version', async (req, res) => {
    try {
        const booksAbbrev = bookList;

        booksAbbrev.forEach(async (abbrev) => {
            const isTest = false;

            const { version } = req.params;

            const verses = getVerses({ abbrev, version });
            if (!verses) throw new SyntaxError('abbreviation');

            const book = await getBook(abbrev);
            if (!book) throw new SyntaxError('book');

            if (isTest) {
                pushVersesTest(book, verses, version);
                return;
            }

            pushVerses(book, verses, version);
        });

        res.send('Verify if the verses were added correctly on production database.');
    } catch (error) {
        if (error instanceof SyntaxError) notFound(res, error as SyntaxError);
        else genericError(res, error as Error);
    }
});

//https://www.bible.com/insert/verses/:abbrev
router.get('/verses/:version/:abbrev', async (req, res) => {
    try {
        const isTest = true;
        const { abbrev, version } = req.params;

        const arr = getVerses(req.params);
        if (!arr) throw new SyntaxError('abbreviation');

        const book = await getBook(abbrev);
        if (!book) throw new SyntaxError('book');

        if (isTest) {
            pushVersesTest(book, arr, version);
            return res.send('Verify if the verses were added correctly on TEST DB.');
        }

        pushVerses(book, arr, version);
        res.send('Verify if the verses were added correctly on production database.');
    } catch (error) {
        if (error instanceof SyntaxError) notFound(res, error as SyntaxError);
        else genericError(res, error as Error);
    }
});

export default router;
