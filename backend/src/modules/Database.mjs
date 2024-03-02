import sqlite3 from 'sqlite3';

class Database {
    static _db = null;  // Private db connection

    /**
     * Establishes a connection to the SQLite database.
     */
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

    /**
     * Closes the connection to the SQLite database.
     */
    static disconnect() {
        Database._db.close((error) => {
            if (error) {
                console.error('Database disconnection error:', error);
            } else {
                console.log('Disconnected from the SQLite database.');
            }
        });
    }

    /**
     * Returns the database instance.
     */
    static getDB() {
        return Database;
    }

    /**
     * Executes a SQL SELECT statement that returns multiple rows.
     */
    async queryAll(statement) {
        return new Promise((resolve, reject) => {
            Database._db.all(statement, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Executes a SQL SELECT statement that returns a single row.
     */
    async queryOne(statement, values) {
        return new Promise((resolve, reject) => {
            Database._db.get(statement, values, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * Executes a SQL INSERT statement for multiple rows.
     */
    async insertAll(statement, valuesArray) {
        return new Promise((resolve, reject) => {
            Database._db.run('BEGIN TRANSACTION', async (transactionError) => {
                if (transactionError) {
                    reject(transactionError);
                    return;
                }

                let insertedIds = [];

                for (const values of valuesArray) {
                    Database._db.run(statement, values, function (err) {
                        if (err) {
                            reject(err);
                            return;
                        }

                        // Retrieve the last inserted ID for each insertion
                        insertedIds.push(this.lastID);
                    });
                }

                Database._db.run('COMMIT', (commitError) => {
                    if (commitError) {
                        reject(commitError);
                    } else {
                        resolve({ insertedIds: insertedIds });
                    }
                });
            });
        });
    }

    /**
     * Executes a SQL INSERT statement for a single row.
     */
    async insertOne(statement, values) {
        return new Promise((resolve, reject) => {
            Database._db.run(statement, values, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    /**
     * Executes a SQL UPDATE or DELETE statement.
     */
    async execute(statement, values) {
        return new Promise((resolve, reject) => {
            Database._db.run(statement, values, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ affectedRows: this.changes });
                }
            });
        });
    }
}

export default Database;