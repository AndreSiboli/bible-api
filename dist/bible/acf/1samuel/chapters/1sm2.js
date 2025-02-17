"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsm2 = void 0;
exports.fsm2 = [
    {
        number: 1,
        text: "Então orou Ana, e disse: O meu coração exulta ao SENHOR, o meu poder está exaltado no SENHOR; a minha boca se dilatou sobre os meus inimigos, porquanto me alegro na tua salvação.",
    },
    {
        number: 2,
        text: "Não há santo como o Senhor; porque não há outro fora de ti; e rocha nenhuma há como o nosso Deus.",
    },
    {
        number: 3,
        text: "Não multipliqueis palavras de altivez, nem saiam coisas arrogantes da vossa boca; porque o Senhor é o Deus de conhecimento, e por ele são as obras pesadas na balança.",
    },
    {
        number: 4,
        text: "O arco dos fortes foi quebrado, e os que tropeçavam foram cingidos de força.",
    },
    {
        number: 5,
        text: "Os fartos se alugaram por pão, e cessaram os famintos; até a estéril deu à luz sete filhos, e a que tinha muitos filhos enfraqueceu.",
    },
    {
        number: 6,
        text: "O Senhor é o que tira a vida e a dá; faz descer à sepultura e faz tornar a subir dela.",
    },
    {
        number: 7,
        text: "O Senhor empobrece e enriquece; abaixa e também exalta.",
    },
    {
        number: 8,
        text: "Levanta o pobre do pó, e desde o monturo exalta o necessitado, para o fazer assentar entre os príncipes, para o fazer herdar o trono de glória; porque do Senhor são os alicerces da terra, e assentou sobre eles o mundo.",
    },
    {
        number: 9,
        text: "Os pés dos seus santos guardará, porém os ímpios ficarão mudos nas trevas; porque o homem não prevalecerá pela força.",
    },
    {
        number: 10,
        text: "Os que contendem com o Senhor serão quebrantados, desde os céus trovejará sobre eles; o Senhor julgará as extremidades da terra; e dará força ao seu rei, e exaltará o poder do seu ungido.",
    },
    {
        number: 11,
        text: "Então Elcana foi a Ramá, à sua casa; porém o menino ficou servindo ao Senhor, perante o sacerdote Eli.",
    },
    {
        number: 12,
        text: "Eram, porém, os filhos de Eli filhos de Belial; não conheciam ao Senhor.",
    },
    {
        number: 13,
        text: "Porquanto o costume daqueles sacerdotes com o povo era que, oferecendo alguém algum sacrifício, estando-se cozendo a carne, vinha o moço do sacerdote, com um garfo de três dentes em sua mão;",
    },
    {
        number: 14,
        text: "E enfiava-o na caldeira, ou na panela, ou no caldeirão, ou na marmita; e tudo quanto o garfo tirava, o sacerdote tomava para si; assim faziam a todo o Israel que ia ali a Siló.",
    },
    {
        number: 15,
        text: "Também antes de queimarem a gordura vinha o moço do sacerdote, e dizia ao homem que sacrificava: Dá essa carne para assar ao sacerdote; porque não receberá de ti carne cozida, mas crua.",
    },
    {
        number: 16,
        text: "E, dizendo-lhe o homem: Queime-se primeiro a gordura de hoje, e depois toma para ti quanto desejar a tua alma, então ele lhe dizia: Não, agora a hás de dar, e, se não, por força a tomarei.",
    },
    {
        number: 17,
        text: "Era, pois, muito grande o pecado destes moços perante o Senhor, porquanto os homens desprezavam a oferta do Senhor.",
    },
    {
        number: 18,
        text: "Porém Samuel ministrava perante o Senhor, sendo ainda jovem, vestido com um éfode de linho.",
    },
    {
        number: 19,
        text: "E sua mãe lhe fazia uma túnica pequena, e de ano em ano lha trazia, quando com seu marido subia para oferecer o sacrifício anual.",
    },
    {
        number: 20,
        text: "E Eli abençoava a Elcana e a sua mulher, e dizia: O Senhor te dê descendência desta mulher, pela petição que fez ao Senhor. E voltavam para o seu lugar.",
    },
    {
        number: 21,
        text: "Visitou, pois, o Senhor a Ana, que concebeu, e deu à luz três filhos e duas filhas; e o jovem Samuel crescia diante do Senhor.",
    },
    {
        number: 22,
        text: "Era, porém, Eli já muito velho, e ouvia tudo quanto seus filhos faziam a todo o Israel, e de como se deitavam com as mulheres que em bandos se ajuntavam à porta da tenda da congregação.",
    },
    {
        number: 23,
        text: "E disse-lhes: Por que fazeis tais coisas? Pois ouço de todo este povo os vossos malefícios.",
    },
    {
        number: 24,
        text: "Não, filhos meus, porque não é boa esta fama que ouço; fazeis transgredir o povo do Senhor.",
    },
    {
        number: 25,
        text: "Pecando homem contra homem, os juízes o julgarão; pecando, porém, o homem contra o Senhor, quem rogará por ele? Mas não ouviram a voz de seu pai, porque o Senhor os queria matar.",
    },
    {
        number: 26,
        text: "E o jovem Samuel ia crescendo, e fazia-se agradável, assim para com o Senhor, como também para com os homens.",
    },
    {
        number: 27,
        text: "E veio um homem de Deus a Eli, e disse-lhe: Assim diz o Senhor: Não me manifestei, na verdade, à casa de teu pai, estando eles ainda no Egito, na casa de Faraó?",
    },
    {
        number: 28,
        text: "E eu o escolhi dentre todas as tribos de Israel por sacerdote, para oferecer sobre o meu altar, para acender o incenso, e para trazer o éfode perante mim; e dei à casa de teu pai todas as ofertas queimadas dos filhos de Israel.",
    },
    {
        number: 29,
        text: "Por que pisastes o meu sacrifício e a minha oferta de alimentos, que ordenei na minha morada, e honras a teus filhos mais do que a mim, para vos engordardes do principal de todas as ofertas do meu povo de Israel?",
    },
    {
        number: 30,
        text: "Portanto, diz o Senhor Deus de Israel: Na verdade tinha falado eu que a tua casa e a casa de teu pai andariam diante de mim perpetuamente; porém agora diz o Senhor: Longe de mim tal coisa, porque aos que me honram honrarei, porém os que me desprezam serão desprezados.",
    },
    {
        number: 31,
        text: "Eis que vêm dias em que cortarei o teu braço e o braço da casa de teu pai, para que não haja mais ancião algum em tua casa.",
    },
    {
        number: 32,
        text: "E verás o aperto da morada de Deus, em lugar de todo o bem que houvera de fazer a Israel; nem haverá por todos os dias ancião algum em tua casa.",
    },
    {
        number: 33,
        text: "O homem, porém, a quem eu não desarraigar do meu altar será para te consumir os olhos e para te entristecer a alma; e toda a multidão da tua casa morrerá quando chegar à idade varonil.",
    },
    {
        number: 34,
        text: "E isto te será por sinal, a saber: o que acontecerá a teus dois filhos, a Hofni e a Finéias; ambos morrerão no mesmo dia.",
    },
    {
        number: 35,
        text: "E eu suscitarei para mim um sacerdote fiel, que procederá segundo o meu coração e a minha alma, e eu lhe edificarei uma casa firme, e andará sempre diante do meu ungido.",
    },
    {
        number: 36,
        text: "E será que todo aquele que restar da tua casa virá a inclinar-se diante dele por uma moeda de prata e por um bocado de pão, e dirá: Rogo-te que me admitas a algum ministério sacerdotal, para que possa comer um pedaço de pão.",
    },
];
