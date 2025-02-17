"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAA = void 0;
const book_1 = __importDefault(require("../../bible/aa/books/genesis/book"));
const book_2 = __importDefault(require("../../bible/aa/books/exodo/book"));
const book_3 = __importDefault(require("../../bible/aa/books/levitico/book"));
const book_4 = __importDefault(require("../../bible/aa/books/numeros/book"));
const book_5 = __importDefault(require("../../bible/aa/books/deuteronomio/book"));
const book_6 = __importDefault(require("../../bible/aa/books/josue/book"));
const book_7 = __importDefault(require("../../bible/aa/books/juizes/book"));
const book_8 = __importDefault(require("../../bible/aa/books/rute/book"));
const book_9 = __importDefault(require("../../bible/aa/books/1samuel/book"));
const book_10 = __importDefault(require("../../bible/aa/books/2samuel/book"));
const book_11 = __importDefault(require("../../bible/aa/books/1reis/book"));
const book_12 = __importDefault(require("../../bible/aa/books/2reis/book"));
const book_13 = __importDefault(require("../../bible/aa/books/1cronicas/book"));
const book_14 = __importDefault(require("../../bible/aa/books/2cronicas/book"));
const book_15 = __importDefault(require("../../bible/aa/books/esdras/book"));
const book_16 = __importDefault(require("../../bible/aa/books/neemias/book"));
const book_17 = __importDefault(require("../../bible/aa/books/ester/book"));
const book_18 = __importDefault(require("../../bible/aa/books/jo/book"));
const book_19 = __importDefault(require("../../bible/aa/books/salmos/book"));
const book_20 = __importDefault(require("../../bible/aa/books/proverbios/book"));
const book_21 = __importDefault(require("../../bible/aa/books/eclesiastes/book"));
const book_22 = __importDefault(require("../../bible/aa/books/canticos/book"));
const book_23 = __importDefault(require("../../bible/aa/books/isaias/book"));
const book_24 = __importDefault(require("../../bible/aa/books/jeremias/book"));
const book_25 = __importDefault(require("../../bible/aa/books/lamentacoes/book"));
const book_26 = __importDefault(require("../../bible/aa/books/ezequiel/book"));
const book_27 = __importDefault(require("../../bible/aa/books/daniel/book"));
const book_28 = __importDefault(require("../../bible/aa/books/oseias/book"));
const book_29 = __importDefault(require("../../bible/aa/books/joel/book"));
const book_30 = __importDefault(require("../../bible/aa/books/amos/book"));
const book_31 = __importDefault(require("../../bible/aa/books/obadias/book"));
const book_32 = __importDefault(require("../../bible/aa/books/jonas/book"));
const book_33 = __importDefault(require("../../bible/aa/books/miqueias/book"));
const book_34 = __importDefault(require("../../bible/aa/books/naum/book"));
const book_35 = __importDefault(require("../../bible/aa/books/habacuque/book"));
const book_36 = __importDefault(require("../../bible/aa/books/sofonias/book"));
const book_37 = __importDefault(require("../../bible/aa/books/ageu/book"));
const book_38 = __importDefault(require("../../bible/aa/books/zacarias/book"));
const book_39 = __importDefault(require("../../bible/aa/books/malaquias/book"));
const book_40 = __importDefault(require("../../bible/aa/books/mateus/book"));
const book_41 = __importDefault(require("../../bible/aa/books/marcos/book"));
const book_42 = __importDefault(require("../../bible/aa/books/lucas/book"));
const book_43 = __importDefault(require("../../bible/aa/books/joao/book"));
const book_44 = __importDefault(require("../../bible/aa/books/atos/book"));
const book_45 = __importDefault(require("../../bible/aa/books/romanos/book"));
const book_46 = __importDefault(require("../../bible/aa/books/1corintios/book"));
const book_47 = __importDefault(require("../../bible/aa/books/2corintios/book"));
const book_48 = __importDefault(require("../../bible/aa/books/galatas/book"));
const book_49 = __importDefault(require("../../bible/aa/books/efesios/book"));
const book_50 = __importDefault(require("../../bible/aa/books/filipenses/book"));
const book_51 = __importDefault(require("../../bible/aa/books/colossenses/book"));
const book_52 = __importDefault(require("../../bible/aa/books/1tessalonicenses/book"));
const book_53 = __importDefault(require("../../bible/aa/books/2tessalonicenses/book"));
const book_54 = __importDefault(require("../../bible/aa/books/1timoteo/book"));
const book_55 = __importDefault(require("../../bible/aa/books/2timoteo/book"));
const book_56 = __importDefault(require("../../bible/aa/books/tito/book"));
const book_57 = __importDefault(require("../../bible/aa/books/filemom/book"));
const book_58 = __importDefault(require("../../bible/aa/books/hebreus/book"));
const book_59 = __importDefault(require("../../bible/aa/books/tiago/book"));
const book_60 = __importDefault(require("../../bible/aa/books/1pedro/book"));
const book_61 = __importDefault(require("../../bible/aa/books/2pedro/book"));
const book_62 = __importDefault(require("../../bible/aa/books/1joao/book"));
const book_63 = __importDefault(require("../../bible/aa/books/2joao/book"));
const book_64 = __importDefault(require("../../bible/aa/books/3joao/book"));
const book_65 = __importDefault(require("../../bible/aa/books/judas/book"));
const book_66 = __importDefault(require("../../bible/aa/books/apocalipse/book"));
const bible = {
    gn: book_1.default,
    ex: book_2.default,
    lv: book_3.default,
    nm: book_4.default,
    dt: book_5.default,
    js: book_6.default,
    jz: book_7.default,
    rt: book_8.default,
    '1sm': book_9.default,
    '2sm': book_10.default,
    '1rs': book_11.default,
    '2rs': book_12.default,
    '1cr': book_13.default,
    '2cr': book_14.default,
    ed: book_15.default,
    ne: book_16.default,
    et: book_17.default,
    job: book_18.default,
    sl: book_19.default,
    pv: book_20.default,
    ec: book_21.default,
    ct: book_22.default,
    is: book_23.default,
    jr: book_24.default,
    lm: book_25.default,
    ez: book_26.default,
    dn: book_27.default,
    os: book_28.default,
    jl: book_29.default,
    am: book_30.default,
    ob: book_31.default,
    jn: book_32.default,
    mq: book_33.default,
    na: book_34.default,
    hc: book_35.default,
    sf: book_36.default,
    ag: book_37.default,
    zc: book_38.default,
    ml: book_39.default,
    mt: book_40.default,
    mc: book_41.default,
    lc: book_42.default,
    jo: book_43.default,
    at: book_44.default,
    rm: book_45.default,
    '1co': book_46.default,
    '2co': book_47.default,
    gl: book_48.default,
    ef: book_49.default,
    fp: book_50.default,
    cl: book_51.default,
    '1ts': book_52.default,
    '2ts': book_53.default,
    '1tm': book_54.default,
    '2tm': book_55.default,
    tt: book_56.default,
    fm: book_57.default,
    hb: book_58.default,
    tg: book_59.default,
    '1pe': book_60.default,
    '2pe': book_61.default,
    '1jo': book_62.default,
    '2jo': book_63.default,
    '3jo': book_64.default,
    jd: book_65.default,
    ap: book_66.default,
};
function getAA(abbrev) {
    return bible[abbrev] || null;
}
exports.getAA = getAA;
