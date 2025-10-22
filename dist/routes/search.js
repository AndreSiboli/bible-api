"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const search_1 = require("../controllers/search");
const errors_1 = require("../errors");
const router = express_1.default.Router();
router.post('/:version', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { version } = req.params;
        const { text } = req.body;
        if (typeof version !== 'string' || !version)
            throw new SyntaxError('version');
        if (typeof text !== 'string' || !text)
            throw new SyntaxError('text');
        const data = yield (0, search_1.search)({ version, text });
        if (!data)
            throw new Error();
        res.json({
            appearance: data.length,
            version,
            text,
            verses: data,
        });
    }
    catch (error) {
        if (error instanceof SyntaxError)
            (0, errors_1.notFound)(res, error);
        else
            (0, errors_1.genericError)(res, error);
    }
}));
exports.default = router;
