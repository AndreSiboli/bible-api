"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('books', book);
