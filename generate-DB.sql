CREATE DATABASE `xAcademyEjercicioNode` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- xAcademyEjercicioNode.Libraries definition

CREATE TABLE `Libraries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `location` varchar(60) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `eliminated` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- xAcademyEjercicioNode.Books definition

CREATE TABLE `Books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isbn` int NOT NULL,
  `title` varchar(40) NOT NULL,
  `autor` varchar(60) DEFAULT NULL,
  `year` varchar(25) DEFAULT NULL,
  `library` int DEFAULT NULL,
  `eliminated` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- xAcademyEjercicioNode.Users definition

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
);