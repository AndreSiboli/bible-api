"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.genericError = void 0;
function genericError(res, err) {
    return res.status(500).json({
        err: `An error has occurred.`,
    });
}
exports.genericError = genericError;
function notFound(res, err) {
    return res.status(404).json({
        err: `This ${err.message} doesn't exist.`,
    });
}
exports.notFound = notFound;
