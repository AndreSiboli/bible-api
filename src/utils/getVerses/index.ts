import { getNvi } from "./getNVI";

export function getVerses({version, abbrev}: {version: string, abbrev: string}){
    if(version === 'nvi') return getNvi(abbrev)
    if(version === 'ara') return ''
    // ...
}