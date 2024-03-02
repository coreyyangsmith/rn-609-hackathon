import { withDatabase } from "../middleware/withDatabase.mjs";
import { asyncHandler } from "../middleware/errorHandler.mjs";


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