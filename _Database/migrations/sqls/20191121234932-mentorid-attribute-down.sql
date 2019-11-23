/* Replace with your SQL commands */
ALTER TABLE "MENTOR" drop mentor_id; 
ALTER TABLE "USER" drop mentor_id;
ALTER TABLE "MENTOR" drop user_id;
ALTER TABLE "MENTOR" ADD user_id SERIAL;
ALTER TABLE "USER" ADD mentor_id SERIAL ;
ALTER TABLE "MENTOR" ADD mentor_id SERIAL NOT NULL;
DROP SEQUENCE serial_mentor_id;