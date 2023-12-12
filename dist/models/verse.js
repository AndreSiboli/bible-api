"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bookObj = {
    _id: {
        type: mongoose_1.default.Schema.ObjectId,
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
verse.index({ text: 'text' });
exports.default = mongoose_1.default.model('verses', verse);
