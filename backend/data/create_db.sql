-- Command to recreate _db: sqlite3 data._db < create_db.sql

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "CONSULT_REQUEST";
CREATE TABLE IF NOT EXISTS "CONSULT_REQUEST" (
    "id"    INTEGER,
    "patient_id"    INTEGER NOT NULL,
    "timestamp"    TEXT NOT NULL,
    "unit"    TEXT,
    "description "    TEXT,
    "is_urgent"    INTEGER,
    "completed"    INTEGER,
    PRIMARY KEY("id" AUTOINCREMENT)
);

DROP TABLE IF EXISTS "PATIENT";
CREATE TABLE IF NOT EXISTS "PATIENT" (
    "id"    INTEGER,
    "mrn"    INTEGER,
    "name"    TEXT,
    PRIMARY KEY("id" AUTOINCREMENT)
);

DROP TABLE IF EXISTS "USER";
CREATE TABLE IF NOT EXISTS "USER" (
    "id"    INTEGER,
    "name"    TEXT NOT NULL,
    "password"    TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);

-- Inserting  fake data for testing
INSERT INTO "USER" ("name", "password") VALUES ('fake', 'password123');

COMMIT;
