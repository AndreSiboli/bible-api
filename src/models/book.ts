import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const book = new Schema({
    abbrev: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    chapters: {
        type: Number,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    testament: {
        type: String,
        required: true,
    },
    orderby: {
        type: Number,
        required: true,
    },
});

export default mongoose.model('books', book);
