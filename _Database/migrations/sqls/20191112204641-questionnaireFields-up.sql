ALTER TABLE "USER" ADD interests jsonb;

ALTER TABLE "USER" ADD level_of_experience_primary_interest varchar(50);

ALTER TABLE "USER" ADD summary varchar(200);

ALTER TABLE "MENTOR" ADD mentoring_subjects jsonb;

ALTER TABLE "MENTOR" ADD level_of_experience_primary_mentoring_subject varchar(50);