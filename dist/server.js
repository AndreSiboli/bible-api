"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./models/db");
require("dotenv/config");
const book_1 = __importDefault(require("./routes/book"));
const verses_1 = __importDefault(require("./routes/verses"));
const search_1 = __importDefault(require("./routes/search"));
const random_1 = __importDefault(require("./routes/random"));
const insert_1 = __importDefault(require("./routes/insert"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/books', book_1.default);
app.use('/verses', verses_1.default);
app.use('/search', search_1.default);
app.use('/random', random_1.default);
app.use('/insert', insert_1.default);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is on fire!');
});
