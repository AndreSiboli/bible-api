import { Response } from 'express';

export function genericError(res: Response, err: Error) {
    return res.status(500).json({
        err: `An error has occurred.`,
    });
}

export function notFound(res: Response, err: Error) {
    return res.status(404).json({
        err: `This ${err.message} doesn't exist.`,
    });
}
