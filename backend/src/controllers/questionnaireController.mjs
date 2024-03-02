import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";

export const setQuestions = withDatabase(
    asyncHandler(async (req, res, next) => {
        const rows = await req.db.insert('INSERT INTO QUESTIONNAIRE (q1, q2, q3) VALUES (?, ?, ?)', [q1, q2, q3]);

        res.json({
            message: "success",
            data: rows
        });
    })
)

export const getQuestions = withDatabase(
    asyncHandler(async (req, res, next) => {
        const rows = await req.db.queryAll('SELECT * FROM QUESTIONNAIRE WHERE mrn = ?', [mrn]);

        res.json({
            message: "success",
            data: rows
        });
    })
)

