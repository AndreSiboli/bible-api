"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const user = process.env.API_USER_NAME;
const password = process.env.API_USER_PASSWORD;
const url = `mongodb+srv://${user}:${password}@cluster0.llblqrk.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log('Database is connected!');
})
    .catch((err) => [console.log('Database is not connected!', err)]);
