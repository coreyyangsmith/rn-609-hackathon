import sqlite3 from 'sqlite3';

class Database {
    static _db = null;  // Private db connection

    static connect() {
        if(Database._db !== null) {
            console.log('Database connection already established.');
            return;
        }

        Database._db = new sqlite3.Database('./data/data.db', sqlite3.OPEN_READWRITE, (error) => {
            if (error) {
                console.error('Database connection error:', error);
            } else {
                console.log('Connected to the SQLite database.');
            }
        });
    }

    static disconnect() {
        Database._db.close((error) => {
            if (error) {
                console.error('Database disconnection error:', error);
            } else {
                console.log('Disconnected from the SQLite database.');
            }
        });
    }

    static getDB() {
        return Database;
    }

    async queryAll(statement) {
        console.log('Executing query:', statement);
        return new Promise((resolve, reject) => {
            Database._db.all(statement, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Query executed successfully');
                    resolve(rows);
                }
            });
        });
    }

}

export default Database;