import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";

// Handle GET users info
export const getUsers = withDatabase(
    asyncHandler(async (req, res, next) => {
            console.log("here");
            const rows = await req.db.queryAll('SELECT * FROM USER');

            res.json({
                message: "success",
                data: rows
            });
        }
    ));