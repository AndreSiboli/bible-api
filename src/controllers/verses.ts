import verseModel from '../models/verse';

interface ChapterType {
    id: string;
    chapter: number;
    version: string;
}

export async function getChapter(req: ChapterType) {
    const { id, chapter, version } = req;

    const verses = await verseModel
        .find({ 'book._id': id, chapter, version })
        .sort({ number: 1 })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log('Não foi possivel encontrar.');
        });

    if (!verses) return null;

    const versesArr = verses.map((verse) => {
        return { _id: verse._id, number: verse.number, text: verse.text };
    });

    return versesArr;
}

interface VerseType {
    verses: VerseTypes[];
    number: number;
}

export async function getVerse(req: VerseType) {
    const { verses, number } = req;

    const verse = verses.filter((data) => data.number === number);
    if (!verse || verse.length !== 1) return null;

    return {
        number: verse[0].number,
        text: verse[0].text,
    };
}
