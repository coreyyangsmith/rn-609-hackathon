-- Command to recreate _db: sqlite3 data.db < create_db.sql

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
    "mrn"    INTEGER,
    "patient_name"    TEXT,
    "user_name"    TEXT,
	"user_id"	TEXT NOT NULL UNIQUE,
    "password"    TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "QUESTIONNAIRE";
CREATE TABLE IF NOT EXISTS "QUESTIONNAIRE" (
    "id"    INTEGER,
    "mrn" INTEGER,
    "q1"    TEXT,
    "q2"    TEXT,
    "q3"    TEXT,
    PRIMARY KEY("id" AUTOINCREMENT)
    FOREIGN KEY("mrn") REFERENCES PATIENT("mrn")
);

-- Inserting  fake data for testing
INSERT INTO "USER" ("user_id", "password") VALUES ('Jon', '$2b$10$Q/UhyQB/nL46kxBAA10lyunFvClSdtj9MGPMcSncixlWRBU29YitK');
INSERT INTO "USER" ("user_id", "password") VALUES ('Tom', '$2b$10$Q/UhyQB/nL46kxBAA10lyunFvClSdtj9MGPMcSncixlWRBU29YitK');

COMMIT;
