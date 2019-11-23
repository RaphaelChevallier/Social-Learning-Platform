/* Replace with your SQL commands */
ALTER TABLE "MENTOR" drop mentor_id; 
ALTER TABLE "USER" drop mentor_id;
ALTER TABLE "MENTOR" drop user_id;
ALTER TABLE "USER" ADD mentor_id INTEGER ;
ALTER TABLE "MENTOR" ADD user_id INTEGER NOT NULL;
ALTER TABLE "MENTOR" ADD mentor_id INTEGER NOT NULL;
CREATE SEQUENCE serial_mentor_id;