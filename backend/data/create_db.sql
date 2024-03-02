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
	"username"	TEXT NOT NULL UNIQUE,
    "password"    TEXT NOT NULL,
    "phone"	NUMERIC NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);

DROP TABLE IF EXISTS "QUESTIONNAIRE";
CREATE TABLE IF NOT EXISTS "QUESTIONNAIRE" (
    "id"    INTEGER
    "q1"    TEXT,
    "q2"    TEXT,
    "q3"    TEXT,
    PRIMARY KEY("id" AUTOINCREMENT)
)

-- Inserting  fake data for testing
INSERT INTO "USER" ("username", "password", "phone") VALUES ('Jon', '$2b$10$Q/UhyQB/nL46kxBAA10lyunFvClSdtj9MGPMcSncixlWRBU29YitK', "+13068507554");

COMMIT;
