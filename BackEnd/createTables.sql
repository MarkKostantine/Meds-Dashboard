CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `status` ENUM('active', 'in-active') NULL DEFAULT 'in-active',
  `roleType` ENUM("Patient", "Admin") NULL DEFAULT 'Patient',
  PRIMARY KEY (`id`));


CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `medicine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `expireDate` datetime NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `categoryId` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `medicineId` int(11) NOT NULL,
  `action` enum('rejected','accepted','waiting') DEFAULT 'waiting',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `medicineId` (`medicineId`),
  CONSTRAINT `medicineId` FOREIGN KEY (`medicineId`) REFERENCES `medicine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


