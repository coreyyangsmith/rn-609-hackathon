import bcrypt from 'bcrypt';
import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";

const saltRounds = 10;

export const register = withDatabase(
    asyncHandler(async (req, res, next) => {
        const { username, password } = req.body;

        // Query database for user with the given username
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Attempt to insert new user into database
        const response = await req.db.execute('INSERT INTO USER (username, password) VALUES (?, ?)', [username, hashedPassword]);
        console.log(response);

        res.json({
            message: "success"
        });
    })
);

export const login = withDatabase(
    asyncHandler(async (req, res, next) => {
        const { username, password } = req.body;

        // Query database for user with the given username
        const searchResult = await req.db.queryOne('SELECT * FROM USER WHERE username = ?', [username]);
        if(!searchResult) {
            return res.status(404).send("User not found" );
        }

        // Compare hashed password from database with input password
        const isPasswordCorrect = await bcrypt.compare(password, searchResult.password);
        if(isPasswordCorrect) {
            res.send("Password is correct");
        } else {
            res.send("Password is incorrect");
        }
    })
);