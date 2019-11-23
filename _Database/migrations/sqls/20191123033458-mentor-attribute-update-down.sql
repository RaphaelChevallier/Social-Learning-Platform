/* Replace with your SQL commands */
ALTER TABLE "USER" DROP mentor_id;
ALTER TABLE "USER" ADD mentor_id SERIAL;
DROP SEQUENCE serial_mentor_id;
