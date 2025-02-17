import { getAA } from './getAA';
import { getNvi } from './getNVI';
import { getAcf } from './getACF';

export function getVerses({ version, abbrev }: { version: string; abbrev: string }) {
    if (version === 'nvi') return getNvi(abbrev);
    if (version === 'aa') return getAA(abbrev);
    if(version === 'acf') return getAcf(abbrev)
}
