import express from 'express';
import cors from 'cors';
import './models/db';
import 'dotenv/config';

//Routes
import book from './routes/book';
import verses from './routes/verses';
import search from './routes/search';
import random from './routes/random';
import addVerse from './routes/insert';

//App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/books', book);
app.use('/verses', verses);
app.use('/search', search);
app.use('/random', random);
app.use('/insert', addVerse);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is on fire!');
});
