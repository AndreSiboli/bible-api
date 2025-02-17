# Advice

The project has been created using MongoDB as the database, but you can use any other database if you prefer. You’ll just need to implement your own logic. Make sure all dependencies are installed.

If you want to use it this way, follow the steps below.

## Initializating Database

Firstly, you will need to open the `/src/server.ts` path and set a port. After that, open the `src/models/db.ts` path and change the database URL or add an environment path. Run the following commands:

```bash
 npm run ts
```

and

```bash
npm run start
```

## Adding in database

Now, you need to add the books. If you do not add them first, it will be impossible to add the verses because the verses require the corresponding book's key.

For this, I recommend installing [Postman](https://www.postman.com/) or using a similar tool. Make a request to:

`http://localhost:8080/insert/books`

After that, make a request to:

`http://localhost:8080/insert/all-verses/:version
`

In **:version**, use one of the following options: NVI, AA, or ACF. This will add all the verses for the chosen version.

Alternatively, you can add verses book by book using:

`http://localhost:8080/insert/verses/:version/:abbrev
`

In **:abbrev**, provide the book's abbreviation.

Now, to make requests and retrieve verses, follow the [documentation](https://github.com/AndreSiboli/bible-api/blob/main/Documentation.md).

I hope you enjoy it! 😊
