const books = [
    {
        abbrev: 'gn',
        author: 'Moisés',
        chapters: 50,
        group: 'Pentateuco',
        name: 'Gênesis',
        testament: 'VT',
    },
    {
        abbrev: 'ex',
        author: 'Moisés',
        chapters: 40,
        group: 'Pentateuco',
        name: 'Êxodo',
        testament: 'VT',
    },
    {
        abbrev: 'lv',
        author: 'Moisés',
        chapters: 27,
        group: 'Pentateuco',
        name: 'Levítico',
        testament: 'VT',
    },
    {
        abbrev: 'nm',
        author: 'Moisés',
        chapters: 36,
        group: 'Pentateuco',
        name: 'Números',
        testament: 'VT',
    },
    {
        abbrev: 'dt',
        author: 'Moisés',
        chapters: 34,
        group: 'Pentateuco',
        name: 'Deuteronômio',
        testament: 'VT',
    },
    {
        abbrev: 'js',
        author: 'Josué',
        chapters: 24,
        group: 'Históricos',
        name: 'Josué',
        testament: 'VT',
    },
    {
        abbrev: 'jz',
        author: 'Samuel',
        chapters: 21,
        group: 'Históricos',
        name: 'Juízes',
        testament: 'VT',
    },
    {
        abbrev: 'rt',
        author: 'Samuel',
        chapters: 4,
        group: 'Históricos',
        name: 'Rute',
        testament: 'VT',
    },
    {
        abbrev: '1sm',
        author: 'Samuel',
        chapters: 31,
        group: 'Históricos',
        name: '1º Samuel',
        testament: 'VT',
    },
    {
        abbrev: '2sm',
        author: 'Samuel',
        chapters: 24,
        group: 'Históricos',
        name: '2º Samuel',
        testament: 'VT',
    },
    {
        abbrev: '1rs',
        author: 'Jeremias',
        chapters: 22,
        group: 'Históricos',
        name: '1º Reis',
        testament: 'VT',
    },
    {
        abbrev: '2rs',
        author: 'Jeremias',
        chapters: 25,
        group: 'Históricos',
        name: '2º Reis',
        testament: 'VT',
    },
    {
        abbrev: '1cr',
        author: 'Esdras',
        chapters: 29,
        group: 'Históricos',
        name: '1º Crônicas',
        testament: 'VT',
    },
    {
        abbrev: '2cr',
        author: 'Esdras',
        chapters: 36,
        group: 'Históricos',
        name: '2º Crônicas',
        testament: 'VT',
    },
    {
        abbrev: 'ed',
        author: 'Esdras',
        chapters: 10,
        group: 'Históricos',
        name: 'Esdras',
        testament: 'VT',
    },
    {
        abbrev: 'ne',
        author: 'Neemias',
        chapters: 13,
        group: 'Históricos',
        name: 'Neemias',
        testament: 'VT',
    },
    {
        abbrev: 'et',
        author: 'Desconhecido',
        chapters: 10,
        group: 'Históricos',
        name: 'Ester',
        testament: 'VT',
    },
    {
        abbrev: 'job',
        author: 'Desconhecido',
        chapters: 42,
        group: 'Poéticos',
        name: 'Jó',
        testament: 'VT',
    },
    {
        abbrev: 'sl',
        author: 'David, Moisés, Salomão',
        chapters: 150,
        group: 'Poéticos',
        name: 'Salmos',
        testament: 'VT',
    },
    {
        abbrev: 'pv',
        author: 'Salomão',
        chapters: 31,
        group: 'Poéticos',
        name: 'Provérbios',
        testament: 'VT',
    },
    {
        abbrev: 'ec',
        author: 'Salomão',
        chapters: 12,
        group: 'Poéticos',
        name: 'Eclesiastes',
        testament: 'VT',
    },
    {
        abbrev: 'ct',
        author: 'Salomão',
        chapters: 8,
        group: 'Poéticos',
        name: 'Cânticos',
        testament: 'VT',
    },
    {
        abbrev: 'is',
        author: 'Isaías',
        chapters: 66,
        group: 'Profetas maiores',
        name: 'Isaías',
        testament: 'VT',
    },
    {
        abbrev: 'jr',
        author: 'Jeremias',
        chapters: 52,
        group: 'Profetas maiores',
        name: 'Jeremias',
        testament: 'VT',
    },
    {
        abbrev: 'lm',
        author: 'Jeremias',
        chapters: 5,
        group: 'Profetas maiores',
        name: 'Lamentações',
        testament: 'VT',
    },
    {
        abbrev: 'ez',
        author: 'Ezequiel',
        chapters: 48,
        group: 'Profetas maiores',
        name: 'Ezequiel',
        testament: 'VT',
    },
    {
        abbrev: 'dn',
        author: 'Daniel',
        chapters: 12,
        group: 'Profetas maiores',
        name: 'Daniel',
        testament: 'VT',
    },
    {
        abbrev: 'os',
        author: 'Oséias',
        chapters: 14,
        group: 'Profetas menores',
        name: 'Oséias',
        testament: 'VT',
    },
    {
        abbrev: 'jl',
        author: 'Joel',
        chapters: 3,
        group: 'Profetas menores',
        name: 'Joel',
        testament: 'VT',
    },
    {
        abbrev: 'am',
        author: 'Amós',
        chapters: 9,
        group: 'Profetas menores',
        name: 'Amós',
        testament: 'VT',
    },
    {
        abbrev: 'ob',
        author: 'Obadias',
        chapters: 1,
        group: 'Profetas menores',
        name: 'Obadias',
        testament: 'VT',
    },
    {
        abbrev: 'jn',
        author: 'Jonas',
        chapters: 4,
        group: 'Profetas menores',
        name: 'Jonas',
        testament: 'VT',
    },
    {
        abbrev: 'mq',
        author: 'Miquéias',
        chapters: 7,
        group: 'Profetas menores',
        name: 'Miquéias',
        testament: 'VT',
    },
    {
        abbrev: 'na',
        author: 'Naum',
        chapters: 3,
        group: 'Profetas menores',
        name: 'Naum',
        testament: 'VT',
    },
    {
        abbrev: 'hc',
        author: 'Habacuque',
        chapters: 3,
        group: 'Profetas menores',
        name: 'Habacuque',
        testament: 'VT',
    },
    {
        abbrev: 'sf',
        author: 'Sofonias',
        chapters: 3,
        group: 'Profetas menores',
        name: 'Sofonias',
        testament: 'VT',
    },
    {
        abbrev: 'ag',
        author: 'Ageu',
        chapters: 2,
        group: 'Profetas menores',
        name: 'Ageu',
        testament: 'VT',
    },
    {
        abbrev: 'zc',
        author: 'Zacarias',
        chapters: 14,
        group: 'Profetas menores',
        name: 'Zacarias',
        testament: 'VT',
    },
    {
        abbrev: 'ml',
        author: 'Malaquias',
        chapters: 4,
        group: 'Profetas menores',
        name: 'Malaquias',
        testament: 'VT',
    },
    {
        abbrev: 'mt',
        author: 'Mateus',
        chapters: 28,
        group: 'Evangelhos',
        name: 'Mateus',
        testament: 'NT',
    },
    {
        abbrev: 'mc',
        author: 'Marcos',
        chapters: 16,
        group: 'Evangelhos',
        name: 'Marcos',
        testament: 'NT',
    },
    {
        abbrev: 'lc',
        author: 'Lucas',
        chapters: 24,
        group: 'Evangelhos',
        name: 'Lucas',
        testament: 'NT',
    },
    {
        abbrev: 'jo',
        author: 'João',
        chapters: 21,
        group: 'Evangelhos',
        name: 'João',
        testament: 'NT',
    },
    {
        abbrev: 'at',
        author: 'Lucas',
        chapters: 28,
        group: 'Histórico',
        name: 'Atos',
        testament: 'NT',
    },
    {
        abbrev: 'rm',
        author: 'Paulo',
        chapters: 16,
        group: 'Cartas',
        name: 'Romanos',
        testament: 'NT',
    },
    {
        abbrev: '1co',
        author: 'Paulo',
        chapters: 16,
        group: 'Cartas',
        name: '1ª Coríntios',
        testament: 'NT',
    },
    {
        abbrev: '2co',
        author: 'Paulo',
        chapters: 13,
        group: 'Cartas',
        name: '2ª Coríntios',
        testament: 'NT',
    },
    {
        abbrev: 'gl',
        author: 'Paulo',
        chapters: 6,
        group: 'Cartas',
        name: 'Gálatas',
        testament: 'NT',
    },
    {
        abbrev: 'ef',
        author: 'Paulo',
        chapters: 6,
        group: 'Cartas',
        name: 'Efésios',
        testament: 'NT',
    },
    {
        abbrev: 'fp',
        author: 'Paulo',
        chapters: 4,
        group: 'Cartas',
        name: 'Filipenses',
        testament: 'NT',
    },
    {
        abbrev: 'cl',
        author: 'Paulo',
        chapters: 4,
        group: 'Cartas',
        name: 'Colossenses',
        testament: 'NT',
    },
    {
        abbrev: '1ts',
        author: 'Paulo',
        chapters: 5,
        group: 'Cartas',
        name: '1ª Tessalonicenses',
        testament: 'NT',
    },
    {
        abbrev: '2ts',
        author: 'Paulo',
        chapters: 3,
        group: 'Cartas',
        name: '2ª Tessalonicenses',
        testament: 'NT',
    },
    {
        abbrev: '1tm',
        author: 'Paulo',
        chapters: 6,
        group: 'Cartas',
        name: '1ª Timóteo',
        testament: 'NT',
    },
    {
        abbrev: '2tm',
        author: 'Paulo',
        chapters: 4,
        group: 'Cartas',
        name: '2ª Timóteo',
        testament: 'NT',
    },
    {
        abbrev: 'tt',
        author: 'Paulo',
        chapters: 3,
        group: 'Cartas',
        name: 'Tito',
        testament: 'NT',
    },
    {
        abbrev: 'fm',
        author: 'Paulo',
        chapters: 1,
        group: 'Cartas',
        name: 'Filemom',
        testament: 'NT',
    },
    {
        abbrev: 'hb',
        author: 'Desconhecido',
        chapters: 13,
        group: 'Cartas',
        name: 'Hebreus',
        testament: 'NT',
    },
    {
        abbrev: 'tg',
        author: 'Tiago',
        chapters: 5,
        group: 'Cartas',
        name: 'Tiago',
        testament: 'NT',
    },
    {
        abbrev: '1pe',
        author: 'Pedro',
        chapters: 5,
        group: 'Cartas',
        name: '1ª Pedro',
        testament: 'NT',
    },
    {
        abbrev: '2pe',
        author: 'Pedro',
        chapters: 3,
        group: 'Cartas',
        name: '2ª Pedro',
        testament: 'NT',
    },
    {
        abbrev: '1jo',
        author: 'João',
        chapters: 5,
        group: 'Cartas',
        name: '1ª João',
        testament: 'NT',
    },
    {
        abbrev: '2jo',
        author: 'João',
        chapters: 1,
        group: 'Cartas',
        name: '2ª João',
        testament: 'NT',
    },
    {
        abbrev: '3jo',
        author: 'João',
        chapters: 1,
        group: 'Cartas',
        name: '3ª João',
        testament: 'NT',
    },
    {
        abbrev: 'jd',
        author: 'Judas',
        chapters: 1,
        group: 'Cartas',
        name: 'Judas',
        testament: 'NT',
    },
    {
        abbrev: 'ap',
        author: 'João',
        chapters: 22,
        group: 'Revelações',
        name: 'Apocalipse',
        testament: 'NT',
    },
];

export default books;