/* Replace with your SQL commands */
ALTER TABLE "MENTOR" drop mentor_id; 
ALTER TABLE "USER" drop mentor_id;
ALTER TABLE "MENTOR" drop user_id;
ALTER TABLE "USER" ADD mentor_id INTEGER ;
ALTER TABLE "MENTOR" ADD user_id INTEGER NOT NULL;
ALTER TABLE "MENTOR" ADD mentor_id INTEGER NOT NULL;
<<<<<<< HEAD
=======
ALTER TABLE "MENTOR" DROP CONSTRAINT "MENTOR_dept_id_fkey";
>>>>>>> 7839f1b63211e0bc4a0249b98b2c3eaad47d0c56
CREATE SEQUENCE serial_mentor_id;