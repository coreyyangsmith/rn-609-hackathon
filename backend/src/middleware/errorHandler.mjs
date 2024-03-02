
/**
 * Not found handler
 */
export const notFound = (req, res, next) => {
    next(new Error("404 Not Found"));
};

/**
 * A wrapper that takes asynchronous middleware and catches asynchronous errors
 */
export const asyncHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => next(err));
    }
}
