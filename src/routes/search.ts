import express from 'express';
import { search } from '../controllers/search';
import { genericError, notFound } from '../errors';

const router = express.Router();

//https://www.bible.com/search/
router.post('/', async (req, res) => {
    try {
        const { version, text } = req.body;

        if (typeof version !== 'string' || !version) throw new SyntaxError('version');
        if (typeof text !== 'string' || !text) throw new SyntaxError('text');

        const data = await search(req.body);

        if (!data) throw new Error();

        res.json({
            appearance: data.length,
            version,
            text,
            verses: data,
        });
    } catch (error) {
        if (error instanceof SyntaxError) notFound(res, error as SyntaxError);
        else genericError(res, error as Error);
    }
});

export default router;
