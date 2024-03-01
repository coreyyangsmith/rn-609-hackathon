
//Not found route handler
export const notFound = (req, res, next) => {
    next(new Error("404 Not Found"));
};