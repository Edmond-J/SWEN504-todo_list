-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2023 at 03:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edmond_todo_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_items`
--

CREATE TABLE `todo_items` (
  `id` int(8) NOT NULL,
  `content` text NOT NULL,
  `completed` tinyint(1) NOT NULL,
  `important` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `due_date` date NOT NULL,
  `create_date` date NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todo_items`
--

INSERT INTO `todo_items` (`id`, `content`, `completed`, `important`, `deleted`, `due_date`, `create_date`, `comment`) VALUES
(1039, 'Story teller to be happy ', 0, 0, 1, '0000-00-00', '2023-12-06', ''),
(1040, 'I can buy myself flower ', 0, 0, 1, '0000-00-00', '2023-12-06', ''),
(1041, 'I can buy myself flower ', 1, 0, 1, '0000-00-00', '2023-12-06', ''),
(1042, '2nd trimester invoice  ', 0, 0, 0, '0000-00-00', '2023-12-06', 'french school'),
(1043, 'MK payment ', 1, 0, 0, '2023-12-06', '2023-12-06', ''),
(1044, 'Khetias and foodplus return confirmation', 0, 0, 0, '0000-00-00', '2023-12-07', ''),
(1045, 'magunas training ', 1, 0, 0, '0000-00-00', '2023-12-07', ''),
(1046, 'Alif  home site checking\n ', 1, 0, 0, '2023-12-07', '2023-12-07', ''),
(1047, '投影仪', 1, 0, 0, '0000-00-00', '2023-12-17', ''),
(1048, 'visa cfm', 0, 0, 0, '0000-00-00', '2023-12-18', ''),
(1049, 'tickets xmas', 0, 0, 0, '0000-00-00', '2023-12-18', ''),
(1050, 'MK STATEMENT', 0, 0, 0, '0000-00-00', '2023-12-18', ''),
(1051, 'KARIM AND GUSHN DINNER', 0, 0, 0, '0000-00-00', '2023-12-18', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_items`
--
ALTER TABLE `todo_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_items`
--
ALTER TABLE `todo_items`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1052;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
