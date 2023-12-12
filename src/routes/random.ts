import express from 'express';
import { getRandom, getRandomChapter } from '../controllers/random';
import { genericError } from '../errors';

const router = express.Router();

//https://www.bible.com/random/:version
router.get('/:version', async (req, res) => {
    try {
        const { version } = req.params;

        const data = await getRandom(version);
        if (!data) throw new Error();

        res.json(data);
    } catch (error) {
        genericError(res, error as Error);
    }
});

//https://www.bible.com/random/:version/:abbrev
router.get('/:version/:abbrev', async (req, res) => {
    try {
        const data = await getRandomChapter(req.params);
        if (!data) throw new Error();

        res.json(data);
    } catch (error) {
        genericError(res, error as Error);
    }
});

export default router;
