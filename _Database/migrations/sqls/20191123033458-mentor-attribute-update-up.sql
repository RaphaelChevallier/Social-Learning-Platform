/* Replace with your SQL commands */

ALTER TABLE "USER" drop mentor_id;
ALTER TABLE "USER" ADD mentor_id INTEGER;
CREATE SEQUENCE serial_mentor_id;