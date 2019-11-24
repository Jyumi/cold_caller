DROP DATABASE IF EXISTS hrla33students;

CREATE DATABASE hrla33students;

USE hrla33students;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Aaron");
INSERT INTO students (id, name) VALUES (2, "Aria");
INSERT INTO students (id, name) VALUES (3, "Austin");
INSERT INTO students (id, name) VALUES (4, "Blake");
INSERT INTO students (id, name) VALUES (5, "Derick");
INSERT INTO students (id, name) VALUES (6, "David (Eui Hyun)");
INSERT INTO students (id, name) VALUES (7, "Hunter");
INSERT INTO students (id, name) VALUES (8, "Josh");
INSERT INTO students (id, name) VALUES (9, "Justin");
INSERT INTO students (id, name) VALUES (10, "Kat (Katherine)");
INSERT INTO students (id, name) VALUES (11, "Luis");
INSERT INTO students (id, name) VALUES (12, "Matthew");
INSERT INTO students (id, name) VALUES (13, "Steve (M)");
INSERT INTO students (id, name) VALUES (14, "Steven (C)");


INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-UPLJEKJRM-6b64f7970160-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://avatars2.githubusercontent.com/u/43763415?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (3, "https://avatars3.githubusercontent.com/u/50532548?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (4, "https://avatars1.githubusercontent.com/u/32968885?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (5, "https://avatars1.githubusercontent.com/u/54970194?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (6, "https://avatars3.githubusercontent.com/u/38476995?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-UPLUSQ8TG-99e7cc962243-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://avatars3.githubusercontent.com/u/53022260?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (9, "https://avatars2.githubusercontent.com/u/31914974?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (10, "https://avatars2.githubusercontent.com/u/36659985?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (11, "https://avatars3.githubusercontent.com/u/55332272?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (12, "https://avatars0.githubusercontent.com/u/42285261?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (13, "https://avatars2.githubusercontent.com/u/10617615?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (14, "https://avatars0.githubusercontent.com/u/54191459?s=460&v=4");