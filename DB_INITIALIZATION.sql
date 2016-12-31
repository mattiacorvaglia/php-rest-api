CREATE SCHEMA `foo`;

CREATE TABLE `foo`.`foo` (
  `id_foo` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45),
  `comment` VARCHAR(45),
  PRIMARY KEY (`id_foo`));

CREATE TABLE `foo`.`bar` (
  `id_bar` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45),
  `comment` VARCHAR(45),
  PRIMARY KEY (`id_bar`));

INSERT INTO `foo`.`foo` (`name`, `comment`)
  VALUES ('Foo', 'Lorem ipsum dolor sit amet.'),
    ('Foo 1', 'Lorem ipsum dolor sit amet.'),
    ('Foo 2', 'Lorem ipsum dolor sit amet.'),
    ('Foo 2', 'Lorem ipsum dolor sit amet.'),
    ('Foo 3', 'Lorem ipsum dolor sit amet.'),
    ('Foo 4', 'Lorem ipsum dolor sit amet.'),
    ('Foo 5', 'Lorem ipsum dolor sit amet.');

INSERT INTO `foo`.`bar` (`name`, `comment`)
  VALUES ('Bar', 'Lorem ipsum dolor sit amet.'),
    ('Bar 1', 'Lorem ipsum dolor sit amet.'),
    ('Bar 2', 'Lorem ipsum dolor sit amet.');
