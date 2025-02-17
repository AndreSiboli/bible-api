import express from 'express';
import { getChapter, getVerse } from '../controllers/verses';
import { getBook } from '../controllers/book';
import { BookType } from '../@types/book';
import { genericError, notFound } from '../errors';

const router = express.Router();

//https://www.bible.com/verses/:version/:abbrev/:chapter
router.get('/:version/:abbrev/:chapter', async (req, res) => {
    try {
        const { version, abbrev, chapter } = req.params;
        
        const book: BookType | null = await getBook(abbrev);
        if (!book) throw new SyntaxError('book');
        
        const verses = await getChapter({ id: book.id, version, chapter: parseInt(chapter) });
        if (!verses || verses.length === 0) throw new SyntaxError('chapter');

        return res.json({
            book: {
                abbrev: book.abbrev,
                author: book.author,
                chapters: book.chapters,
                group: book.group,
                name: book.name,
                testament: book.testament,
                version: version.toLowerCase(),
            },
            chapter: {
                number: parseInt(chapter),
                verses: verses.length,
            },
            verses: verses,
        });
    } catch (error) {
        if (error instanceof SyntaxError) notFound(res, error as SyntaxError);
        else genericError(res, error as Error);
    }
});

//https://www.bible.com/verses/:version/:abbrev/:chapter/:number
router.get('/:version/:abbrev/:chapter/:number', async (req, res) => {
    try {
        const { version, abbrev, chapter, number } = req.params;

        const book: BookType | null = await getBook(abbrev);
        if (!book) throw new SyntaxError('book');

        const verses = await getChapter({ id: book.id, version, chapter: parseInt(chapter) });
        if (!verses || verses.length === 0) throw new SyntaxError('chapter');
        const verse = await getVerse({ verses: verses, number: parseInt(number) });
        if (!verse) throw new SyntaxError('verse');

        return res.json({
            book: {
                abbrev: book.abbrev,
                author: book.author,
                chapters: book.chapters,
                group: book.group,
                name: book.name,
                testament: book.testament,
                version: version.toLowerCase(),
            },
            chapter: parseInt(chapter),
            number: verse.number,
            text: verse.text,
        });
    } catch (error) {
        if (error instanceof SyntaxError) notFound(res, error as SyntaxError);
        else genericError(res, error as Error);
    }
});

export default router;
