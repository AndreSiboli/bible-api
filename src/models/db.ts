import mongoose from 'mongoose';
import 'dotenv/config';

const user = process.env.API_USER_NAME;
const password = process.env.API_USER_PASSWORD;

const url = `mongodb+srv://${user}:${password}@cluster0.llblqrk.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(url)
    .then(() => {
        console.log('Database is connected!');
    })
    .catch((err) => [console.log('Database is not connected!', err)]);
