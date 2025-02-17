import versesGn from '../../bible/nvi/books/genesis/book';
import versesEx from '../../bible/nvi/books/exodo/book';
import versesLv from '../../bible/nvi/books/levitico/book';
import versesNm from '../../bible/nvi/books/numeros/book';
import versesDt from '../../bible/nvi/books/deuteronomio/book';
import versesJs from '../../bible/nvi/books/josue/book';
import versesJz from '../../bible/nvi/books/juizes/book';
import versesRt from '../../bible/nvi/books/rute/book';
import versesFsm from '../../bible/nvi/books/1samuel/book';
import versesSsm from '../../bible/nvi/books/2samuel/book';
import versesFrs from '../../bible/nvi/books/1reis/book';
import versesSrs from '../../bible/nvi/books/2reis/book';
import versesFcr from '../../bible/nvi/books/1cronicas/book';
import versesScr from '../../bible/nvi/books/2cronicas/book';
import versesEd from '../../bible/nvi/books/esdras/book';
import versesNe from '../../bible/nvi/books/neemias/book';
import versesEt from '../../bible/nvi/books/ester/book';
import versesJob from '../../bible/nvi/books/jo/book';
import versesSl from '../../bible/nvi/books/salmos/book';
import versesPv from '../../bible/nvi/books/proverbios/book';
import versesEc from '../../bible/nvi/books/eclesiastes/book';
import versesCt from '../../bible/nvi/books/canticos/book';
import versesIs from '../../bible/nvi/books/isaias/book';
import versesJr from '../../bible/nvi/books/jeremias/book';
import versesLm from '../../bible/nvi/books/lamentacoes/book';
import versesEz from '../../bible/nvi/books/ezequiel/book';
import versesDn from '../../bible/nvi/books/daniel/book';
import versesOs from '../../bible/nvi/books/oseias/book';
import versesJl from '../../bible/nvi/books/joel/book';
import versesAm from '../../bible/nvi/books/amos/book';
import versesOb from '../../bible/nvi/books/obadias/book';
import versesJn from '../../bible/nvi/books/jonas/book';
import versesMq from '../../bible/nvi/books/miqueias/book';
import versesNa from '../../bible/nvi/books/naum/book';
import versesHc from '../../bible/nvi/books/habacuque/book';
import versesSf from '../../bible/nvi/books/sofonias/book';
import versesAg from '../../bible/nvi/books/ageu/book';
import versesZc from '../../bible/nvi/books/zacarias/book';
import versesMl from '../../bible/nvi/books/malaquias/book';
import versesMt from '../../bible/nvi/books/mateus/book';
import versesMc from '../../bible/nvi/books/marcos/book';
import versesLc from '../../bible/nvi/books/lucas/book';
import versesJo from '../../bible/nvi/books/joao/book';
import versesAt from '../../bible/nvi/books/atos/book';
import versesRm from '../../bible/nvi/books/romanos/book';
import versesFco from '../../bible/nvi/books/1corintios/book';
import versesSco from '../../bible/nvi/books/2corintios/book';
import versesGl from '../../bible/nvi/books/galatas/book';
import versesEf from '../../bible/nvi/books/efesios/book';
import versesFp from '../../bible/nvi/books/filipenses/book';
import versesCl from '../../bible/nvi/books/colossenses/book';
import versesFts from '../../bible/nvi/books/1tessalonicenses/book';
import versesSts from '../../bible/nvi/books/2tessalonicenses/book';
import versesFtm from '../../bible/nvi/books/1timoteo/book';
import versesStm from '../../bible/nvi/books/2timoteo/book';
import versesTt from '../../bible/nvi/books/tito/book';
import versesFm from '../../bible/nvi/books/filemom/book';
import versesHb from '../../bible/nvi/books/hebreus/book';
import versesTg from '../../bible/nvi/books/tiago/book';
import versesFpe from '../../bible/nvi/books/1pedro/book';
import versesSpe from '../../bible/nvi/books/2pedro/book';
import versesFjo from '../../bible/nvi/books/1joao/book';
import versesSjo from '../../bible/nvi/books/2joao/book';
import versesTjo from '../../bible/nvi/books/3joao/book';
import versesJd from '../../bible/nvi/books/judas/book';
import versesAp from '../../bible/nvi/books/apocalipse/book';

const bible: any = {
    gn: versesGn,
    ex: versesEx,
    lv: versesLv,
    nm: versesNm,
    dt: versesDt,
    js: versesJs,
    jz: versesJz,
    rt: versesRt,
    '1sm': versesFsm,
    '2sm': versesSsm,
    '1rs': versesFrs,
    '2rs': versesSrs,
    '1cr': versesFcr,
    '2cr': versesScr,
    ed: versesEd,
    ne: versesNe,
    et: versesEt,
    job: versesJob,
    sl: versesSl,
    pv: versesPv,
    ec: versesEc,
    ct: versesCt,
    is: versesIs,
    jr: versesJr,
    lm: versesLm,
    ez: versesEz,
    dn: versesDn,
    os: versesOs,
    jl: versesJl,
    am: versesAm,
    ob: versesOb,
    jn: versesJn,
    mq: versesMq,
    na: versesNa,
    hc: versesHc,
    sf: versesSf,
    ag: versesAg,
    zc: versesZc,
    ml: versesMl,
    mt: versesMt,
    mc: versesMc,
    lc: versesLc,
    jo: versesJo,
    at: versesAt,
    rm: versesRm,
    '1co': versesFco,
    '2co': versesSco,
    gl: versesGl,
    ef: versesEf,
    fp: versesFp,
    cl: versesCl,
    '1ts': versesFts,
    '2ts': versesSts,
    '1tm': versesFtm,
    '2tm': versesStm,
    tt: versesTt,
    fm: versesFm,
    hb: versesHb,
    tg: versesTg,
    '1pe': versesFpe,
    '2pe': versesSpe,
    '1jo': versesFjo,
    '2jo': versesSjo,
    '3jo': versesTjo,
    jd: versesJd,
    ap: versesAp,
};

export function getNvi(abbrev: string) {
    return bible[abbrev] || null;
}

