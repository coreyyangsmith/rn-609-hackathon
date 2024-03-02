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

export const getUsers = withDatabase(
    asyncHandler(async (req, res, next) => {
        const rows = await req.db.queryAll('SELECT * FROM USER');

        res.json({
            message: "success",
            data: rows
        });
    })
);


// // Test all db functions
// export const testAll = withDatabase(
//     asyncHandler(async (req, res, next) => {
//             // // Test queryAll method
//             // const allRows = await req.db.queryAll('SELECT * FROM USER');
//             // console.log("All rows:", allRows);
//
//             // // Test queryOne method
//             // const oneRow = await req.db.queryOne('SELECT * FROM USER WHERE id = ?', [3]);
//             // console.log("Single row:", oneRow);
//
//             // // Test insert method
//             // const insertedId = await req.db.insert('INSERT INTO USER (name, password) VALUES (?, ?)', ['A', '2']);
//             // console.log("Inserted ID:", insertedId);
//             //
//             //
//             // // Test modify method
//             // const response = await req.db.execute('UPDATE USER SET name = ? WHERE id = ?', ['Alice', 4]);
//             // console.log("Response:", response);
//             //
//             // // Test delete method
//             // await req.db.execute('DELETE FROM USER WHERE id = ?', [1]);
//             //
//             // // Test insertAll method
//             // const valuesArray = [
//             //     ['John', 'password1'],
//             //     ['Alice', 'password2'],
//             //     ['Bob', 'password3']
//             // ];
//             //
//             // console.log(await req.db.insertAll('INSERT INTO USER (name, password) VALUES (?, ?)', valuesArray));
//
//
//             // res.json({
//             //     message: "success"
//             // });
//         }
//     ));