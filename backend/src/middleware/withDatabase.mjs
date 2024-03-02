import Database from '../modules/Database.mjs';

/**
 * A wrapper that provides database access within middleware req object
 */
export const withDatabase = (...functions) => {
    return [(req, res, next) => {
        req.db = new Database();
        next();
    }, ...functions];
}


