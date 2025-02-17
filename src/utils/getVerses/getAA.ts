import versesGn from '../../bible/aa/books/genesis/book';
import versesEx from '../../bible/aa/books/exodo/book';
import versesLv from '../../bible/aa/books/levitico/book';
import versesNm from '../../bible/aa/books/numeros/book';
import versesDt from '../../bible/aa/books/deuteronomio/book';
import versesJs from '../../bible/aa/books/josue/book';
import versesJz from '../../bible/aa/books/juizes/book';
import versesRt from '../../bible/aa/books/rute/book';
import versesFsm from '../../bible/aa/books/1samuel/book';
import versesSsm from '../../bible/aa/books/2samuel/book';
import versesFrs from '../../bible/aa/books/1reis/book';
import versesSrs from '../../bible/aa/books/2reis/book';
import versesFcr from '../../bible/aa/books/1cronicas/book';
import versesScr from '../../bible/aa/books/2cronicas/book';
import versesEd from '../../bible/aa/books/esdras/book';
import versesNe from '../../bible/aa/books/neemias/book';
import versesEt from '../../bible/aa/books/ester/book';
import versesJob from '../../bible/aa/books/jo/book';
import versesSl from '../../bible/aa/books/salmos/book';
import versesPv from '../../bible/aa/books/proverbios/book';
import versesEc from '../../bible/aa/books/eclesiastes/book';
import versesCt from '../../bible/aa/books/canticos/book';
import versesIs from '../../bible/aa/books/isaias/book';
import versesJr from '../../bible/aa/books/jeremias/book';
import versesLm from '../../bible/aa/books/lamentacoes/book';
import versesEz from '../../bible/aa/books/ezequiel/book';
import versesDn from '../../bible/aa/books/daniel/book';
import versesOs from '../../bible/aa/books/oseias/book';
import versesJl from '../../bible/aa/books/joel/book';
import versesAm from '../../bible/aa/books/amos/book';
import versesOb from '../../bible/aa/books/obadias/book';
import versesJn from '../../bible/aa/books/jonas/book';
import versesMq from '../../bible/aa/books/miqueias/book';
import versesNa from '../../bible/aa/books/naum/book';
import versesHc from '../../bible/aa/books/habacuque/book';
import versesSf from '../../bible/aa/books/sofonias/book';
import versesAg from '../../bible/aa/books/ageu/book';
import versesZc from '../../bible/aa/books/zacarias/book';
import versesMl from '../../bible/aa/books/malaquias/book';
import versesMt from '../../bible/aa/books/mateus/book';
import versesMc from '../../bible/aa/books/marcos/book';
import versesLc from '../../bible/aa/books/lucas/book';
import versesJo from '../../bible/aa/books/joao/book';
import versesAt from '../../bible/aa/books/atos/book';
import versesRm from '../../bible/aa/books/romanos/book';
import versesFco from '../../bible/aa/books/1corintios/book';
import versesSco from '../../bible/aa/books/2corintios/book';
import versesGl from '../../bible/aa/books/galatas/book';
import versesEf from '../../bible/aa/books/efesios/book';
import versesFp from '../../bible/aa/books/filipenses/book';
import versesCl from '../../bible/aa/books/colossenses/book';
import versesFts from '../../bible/aa/books/1tessalonicenses/book';
import versesSts from '../../bible/aa/books/2tessalonicenses/book';
import versesFtm from '../../bible/aa/books/1timoteo/book';
import versesStm from '../../bible/aa/books/2timoteo/book';
import versesTt from '../../bible/aa/books/tito/book';
import versesFm from '../../bible/aa/books/filemom/book';
import versesHb from '../../bible/aa/books/hebreus/book';
import versesTg from '../../bible/aa/books/tiago/book';
import versesFpe from '../../bible/aa/books/1pedro/book';
import versesSpe from '../../bible/aa/books/2pedro/book';
import versesFjo from '../../bible/aa/books/1joao/book';
import versesSjo from '../../bible/aa/books/2joao/book';
import versesTjo from '../../bible/aa/books/3joao/book';
import versesJd from '../../bible/aa/books/judas/book';
import versesAp from '../../bible/aa/books/apocalipse/book';

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

export function getAA(abbrev: string) {
    return bible[abbrev] || null;
}

