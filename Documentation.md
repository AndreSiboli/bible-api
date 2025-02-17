# Documentation

This project has **NVI**, **ACF** and **AA** versions for now. The project will receive more updates soon.

## About Database

This back-end is free to use, you just have to host it by yourself. All the books is in bible folder, so you do not have to rack you brain trying to find them out there.

## Setting Database

Firstly, you will need to open the `/src/server.ts` path and set a port. After that, open the `src/models/db.ts` path and change the database URL or add an environment path. 

## Books

<details>
<summary><strong>Get Books</strong> - <i>It'll return all books</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/books
<br>
<strong>Method:</strong> GET
<br><br>

```bash
[
    {
        "_id": "6532e2652055e11c2fa92f89",
        "abbrev": "gn",
        "author": "Moisés",
        "chapters": 50,
        "group": "Pentateuco",
        "name": "Gênesis",
        "testament": "VT"
    },
    {
        "_id": "6532e2652055e11c2fa92f8a",
        "abbrev": "ex",
        "author": "Moisés",
        "chapters": 40,
        "group": "Pentateuco",
        "name": "Êxodo",
        "testament": "VT"
    },
    {
        "_id": "6532e2652055e11c2fa92f8b",
        "abbrev": "lv",
        "author": "Moisés",
        "chapters": 27,
        "group": "Pentateuco",
        "name": "Levítico",
        "testament": "VT"
    },
    ...
]
```

</details>

<details>
<summary><strong>Get Book</strong> - <i>It'll return a specific book</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/books/:abbrev
<br>
<strong>Method:</strong> GET
<br><br>

```bash
    {
        "_id": "6532e2652055e11c2fa92f89",
        "abbrev": "gn",
        "author": "Moisés",
        "chapters": 50,
        "group": "Pentateuco",
        "name": "Gênesis",
        "testament": "VT"
    }
```

</details>

## Verses

<details>
<summary><strong>Get Chapter</strong> - <i>It'll return a specific chapter of a book</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/verses/:version/:abbrev/:chapter
<br>
<strong>Method:</strong> GET
<br><br>

```bash
{
    "book": {
        "abbrev": "gn",
        "author": "Moisés",
        "chapters": 50,
        "group": "Pentateuco",
        "name": "Gênesis",
        "testament": "VT",
        "version": "nvi"
    },
    "chapter": {
        "number": 1,
        "verses": 31
    },
    "verses": [
        {
            "_id": "654be9b77ee0934509e4f646",
            "number": 1,
            "text": "No princípio Deus criou os céus e a terra."
        },
        {
            "_id": "654be9b77ee0934509e4f647",
            "number": 2,
            "text": "Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas."
        },
        {
            "_id": "654be9b77ee0934509e4f648",
            "number": 3,
            "text": "Disse Deus: \"Haja luz\", e houve luz."
        },
        ...
    ]
}
```

</details>

<details>
<summary><strong>Get Verse</strong> - <i>It'll return a specific verse of a chapter</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/verses/:version/:abbrev/:chapter/:number
<br>
<strong>Method:</strong> GET
<br><br>

```bash
{
    "book": {
        "abbrev": "jo",
        "author": "João",
        "chapters": 21,
        "group": "Evangelhos",
        "name": "João",
        "testament": "NT",
        "version": "nvi"
    },
    "chapter": 11,
    "number": 35,
    "text": "Jesus chorou."
}
```

</details>

## Search

<details>
<summary><strong>Search word</strong> - <i>It'll return the appeareance of the word in the bible</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/search/:version
<br>
<strong>Method:</strong> POST
<br><br>
<strong>Body:</strong>

```bash
{
    text: 'amor',
}
```

<strong>Response:</strong>

```bash
{
    "appearance": 359,
    "version": "nvi",
    "text": "amor",
    "verses": [
        {
            "book": {
                "_id": "6532e2652055e11c2fa92fc9",
                "abbrev": "jd",
                "author": "Judas",
                "chapters": 1,
                "group": "Cartas",
                "name": "Judas",
                "testament": "NT"
            },
            "chapter": 1,
            "number": 2,
            "text": "Misericórdia, paz e amor lhes sejam multiplicados."
        },
        {
            "book": {
                "_id": "6532e2652055e11c2fa92fc7",
                "abbrev": "2jo",
                "author": "João",
                "chapters": 1,
                "group": "Cartas",
                "name": "2ª João",
                "testament": "NT"
            },
            "chapter": 1,
            "number": 3,
            "text": "A graça, a misericórdia e a paz da parte de Deus Pai e de Jesus Cristo, seu Filho, estarão conosco em verdade e em amor."
        }
        ...
    ]
}
```

</details>

## Random

<details>
<summary><strong>Get Random Verse</strong> - <i>It'll return a random verse</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/random/:version
<br>
<strong>Method:</strong> GET
<br><br>

```bash
{
    "book": {
        "abbrev": "na",
        "author": "Naum",
        "chapters": 3,
        "group": "Profetas menores",
        "name": "Naum",
        "testament": "VT",
        "version": "nvi"
    },
    "chapter": 1,
    "number": 6,
    "text": "Quem pode resistir à sua indignação? Quem pode suportar o despertar de sua ira? O seu furor se derrama como fogo, e as rochas se despedaçam diante dele."
}
```

</details>

<details>
<summary><strong>Get Random Verse of a Book</strong> - <i>It'll return a random verse of a book</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/random/:version/:abbrev
<br>
<strong>Method:</strong> GET
<br><br>

```bash
{
    "book": {
        "abbrev": "pv",
        "author": "Salomão",
        "chapters": 31,
        "group": "Poéticos",
        "name": "Provérbios",
        "testament": "VT",
        "version": "nvi"
    },
    "chapter": 22,
    "number": 8,
    "text": "Quem semeia a injustiça colhe a maldade; o castigo da sua arrogância será completo."
}
```

</details>

## Insert

This method is only used to insert the books into the database. All the books are in the bible folder. To insert them, just follow the steps.
<br>

**Note:** For now, only the NVI version is available.

<details>
<summary><strong>Insert All Books</strong> - <i>It'll insert all books into database</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/insert/books
<br>
<strong>Method:</strong> GET
<br><br>
<strong>Explain:</strong> You need to do this step first, because the verses need foreign key.
</details>

<details>
<summary><strong>Insert All Verses</strong> - <i>It'll insert all verses into database</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/insert/all-verses/:version
<br>
<strong>Method:</strong> GET
<br><br>
<strong>Explain:</strong> If you want to test, you need to go to the insert route and check if the constant "<strong>isTrue</strong>" is true, otherwise change to false. When prepare, just call the route.
</details>

<details>
<summary><strong>Insert a Specific Book Verses</strong> - <i>It'll insert all verses of a specific book into database</i></summary>
<br>
<strong>Endpoint:</strong> https://<i>yourURL</i>/insert/verses/:version/:abbrev
<br>
<strong>Method:</strong> GET
<br><br>
<strong>Explain:</strong> If you want to test, you need to go to the insert route and check if the constant "<strong>isTrue</strong>" is true, otherwise change to false. When prepare, just call the route with the abbreviation.

</details>
