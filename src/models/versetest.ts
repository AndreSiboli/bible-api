import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookObj = {
    _id: {
        type: mongoose.Schema.ObjectId,
        ref: 'books',
        required: true,
    },

    abbrev: {
        type: String,
        required: true,
    },
};

const verse = new Schema({
    book: {
        type: bookObj,
        required: true,
    },

    chapter: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    version: {
        type: String,
        required: true,
    },
});

export default mongoose.model('vtest', verse);
