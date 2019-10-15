/* Replace with your SQL commands */
CREATE TABLE "DEPARTMENT"(
    dept_id      SERIAL PRIMARY KEY,
    dept_name    VARCHAR(50)
);

CREATE TABLE "AMBASSADOR"(
    ambass_id       SERIAL PRIMARY KEY NOT NULL,
    specialization  VARCHAR NOT NULL,
    dept_id         SERIAL NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES "DEPARTMENT"(dept_id) ON DELETE NO ACTION ON UPDATE CASCADE
);


CREATE TABLE "USER" (
    user_id     SERIAL PRIMARY KEY NOT NULL,
    firstname   VARCHAR(50) NOT NULL,
    lastname    VARCHAR(50) NOT NULL,
    bdate       DATE,
    gender      VARCHAR(10),
    country     VARCHAR(20),
    province    VARCHAR(50),
    city        VARCHAR(30),
    email       VARCHAR,
    subscribed  BOOLEAN,
    dept_id     SERIAL,
    mentor_id   SERIAL,
    FOREIGN KEY(mentor_id) REFERENCES "MENTOR"(mentor_id)ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES "DEPARTMENT"(dept_id) ON DELETE NO ACTION ON UPDATE CASCADE     
);

CREATE TABLE "MENTOR" (
    user_id     SERIAL NOT NULL,
    mentor_id   SERIAL NOT NULL,
    certified   BOOLEAN NOT NULL,
    wage        DECIMAL(9,2) NOT NULL,
    ambass_id   SERIAL,
    dept_id     SERIAL,
    PRIMARY KEY (user_id,mentor_id),
    FOREIGN KEY (user_id) REFERENCES "USER"(user_id) ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (ambass_id) REFERENCES "AMBASSADOR"(ambass_id) ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES "DEPARTMENT"(dept_id) ON DELETE NO ACTION ON UPDATE CASCADE
);


