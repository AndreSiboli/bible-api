import versesGn from '../../bible/acf/books/genesis/book';
import versesEx from '../../bible/acf/books/exodo/book';
import versesLv from '../../bible/acf/books/levitico/book';
import versesNm from '../../bible/acf/books/numeros/book';
import versesDt from '../../bible/acf/books/deuteronomio/book';
import versesJs from '../../bible/acf/books/josue/book';
import versesJz from '../../bible/acf/books/juizes/book';
import versesRt from '../../bible/acf/books/rute/book';
import versesFsm from '../../bible/acf/books/1samuel/book';
import versesSsm from '../../bible/acf/books/2samuel/book';
import versesFrs from '../../bible/acf/books/1reis/book';
import versesSrs from '../../bible/acf/books/2reis/book';
import versesFcr from '../../bible/acf/books/1cronicas/book';
import versesScr from '../../bible/acf/books/2cronicas/book';
import versesEd from '../../bible/acf/books/esdras/book';
import versesNe from '../../bible/acf/books/neemias/book';
import versesEt from '../../bible/acf/books/ester/book';
import versesJob from '../../bible/acf/books/jo/book';
import versesSl from '../../bible/acf/books/salmos/book';
import versesPv from '../../bible/acf/books/proverbios/book';
import versesEc from '../../bible/acf/books/eclesiastes/book';
import versesCt from '../../bible/acf/books/canticos/book';
import versesIs from '../../bible/acf/books/isaias/book';
import versesJr from '../../bible/acf/books/jeremias/book';
import versesLm from '../../bible/acf/books/lamentacoes/book';
import versesEz from '../../bible/acf/books/ezequiel/book';
import versesDn from '../../bible/acf/books/daniel/book';
import versesOs from '../../bible/acf/books/oseias/book';
import versesJl from '../../bible/acf/books/joel/book';
import versesAm from '../../bible/acf/books/amos/book';
import versesOb from '../../bible/acf/books/obadias/book';
import versesJn from '../../bible/acf/books/jonas/book';
import versesMq from '../../bible/acf/books/miqueias/book';
import versesNa from '../../bible/acf/books/naum/book';
import versesHc from '../../bible/acf/books/habacuque/book';
import versesSf from '../../bible/acf/books/sofonias/book';
import versesAg from '../../bible/acf/books/ageu/book';
import versesZc from '../../bible/acf/books/zacarias/book';
import versesMl from '../../bible/acf/books/malaquias/book';
import versesMt from '../../bible/acf/books/mateus/book';
import versesMc from '../../bible/acf/books/marcos/book';
import versesLc from '../../bible/acf/books/lucas/book';
import versesJo from '../../bible/acf/books/joao/book';
import versesAt from '../../bible/acf/books/atos/book';
import versesRm from '../../bible/acf/books/romanos/book';
import versesFco from '../../bible/acf/books/1corintios/book';
import versesSco from '../../bible/acf/books/2corintios/book';
import versesGl from '../../bible/acf/books/galatas/book';
import versesEf from '../../bible/acf/books/efesios/book';
import versesFp from '../../bible/acf/books/filipenses/book';
import versesCl from '../../bible/acf/books/colossenses/book';
import versesFts from '../../bible/acf/books/1tessalonicenses/book';
import versesSts from '../../bible/acf/books/2tessalonicenses/book';
import versesFtm from '../../bible/acf/books/1timoteo/book';
import versesStm from '../../bible/acf/books/2timoteo/book';
import versesTt from '../../bible/acf/books/tito/book';
import versesFm from '../../bible/acf/books/filemom/book';
import versesHb from '../../bible/acf/books/hebreus/book';
import versesTg from '../../bible/acf/books/tiago/book';
import versesFpe from '../../bible/acf/books/1pedro/book';
import versesSpe from '../../bible/acf/books/2pedro/book';
import versesFjo from '../../bible/acf/books/1joao/book';
import versesSjo from '../../bible/acf/books/2joao/book';
import versesTjo from '../../bible/acf/books/3joao/book';
import versesJd from '../../bible/acf/books/judas/book';
import versesAp from '../../bible/acf/books/apocalipse/book';

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

export function getAcf(abbrev: string) {
    return bible[abbrev] || null;
}

