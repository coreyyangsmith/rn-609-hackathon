import bcrypt from 'bcrypt';
import OTP from "../modules/OTP.mjs";
import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";


// Number of salt rounds for hashing
const saltRounds = 10;

export const register = withDatabase(
    asyncHandler(async (req, res, next) => {
        const {mrn, patient_name, user_name, user_id, password} = req.body;

        // Query database for user with the given user_id
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Attempt to insert new user into database
        const response = await req.db.execute('INSERT INTO USER (mrn,patient_name,user_name,user_id, password) VALUES (?, ?,?,?,?)', [mrn, patient_name, user_name, user_id, hashedPassword]);
        console.log(response);

        res.json({
            message: "success"
        });
    })
);

// Example request body:
// {
//     "user_id": "Jon",
//     "password": "password1"
// }
export const login = withDatabase(
    asyncHandler(async (req, res, next) => {
        const {user_id, password} = req.body;
        console.log(user_id, password);

        // Query database for user with the given user_id
        const searchResult = await req.db.queryOne('SELECT * FROM USER WHERE user_id = ?', [user_id]);
        if (!searchResult) {
            return res.status(404).send("User not found");
        }
        console.log(searchResult.phone);

        // Compare hashed password from database with input password
        const isPasswordCorrect = await bcrypt.compare(password, searchResult.password);
        if (isPasswordCorrect) {
            await OTP.sendSMS(searchResult.phone, user_id)
            res.json({ user_type: searchResult.user_type} );
        } else {
            res.send("Password is incorrect");
        }
    })
);


export const verifyCode = withDatabase(
    asyncHandler(async (req, res, next) => {
        const {user_id, code} = req.body;

        if (OTP.verifyCode(user_id, code)) {
            res.json({
                message: "success"
            });
        } else {
            res.status(401).send("Invalid code");
        }
    })
);
