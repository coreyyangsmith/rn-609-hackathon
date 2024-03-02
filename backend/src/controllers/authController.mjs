import bcrypt from 'bcrypt';
import OTP from "../modules/OTP.mjs";
import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";


// Number of salt rounds for hashing
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

// Example request body:
// {
//     "username": "Jon",
//     "password": "password1"
// }
export const login = withDatabase(
    asyncHandler(async (req, res, next) => {
        const { username, password } = req.body;
        console.log(username, password);

        // Query database for user with the given username
        const searchResult = await req.db.queryOne('SELECT * FROM USER WHERE username = ?', [username]);
        if(!searchResult) {
            return res.status(404).send("User not found" );
        }
        console.log(searchResult.phone);

        // Compare hashed password from database with input password
        const isPasswordCorrect = await bcrypt.compare(password, searchResult.password);
        if(isPasswordCorrect) {
            await OTP.sendSMS(searchResult.phone, username)
            res.send("Password is correct");
        } else {
            res.send("Password is incorrect");
        }
    })
);


export const verifyCode = withDatabase(
    asyncHandler(async (req, res, next) => {
        const { username, code } = req.body;

        if(OTP.verifyCode(username, code)){
            res.json({
                message: "success"
            });
        } else {
            res.status(401).send("Invalid code");
        }
    })
);
