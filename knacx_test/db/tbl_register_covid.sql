-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2023 at 04:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knacx_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_register_covid`
--

CREATE TABLE `tbl_register_covid` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `addr` text NOT NULL,
  `note` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_register_covid`
--

INSERT INTO `tbl_register_covid` (`id`, `fname`, `lname`, `tel`, `addr`, `note`, `created_at`, `updated_at`) VALUES
(1, 'pichayapa', 'tochuendee', '0869071013', '38749 ถ.อิสรภาพ แขวงหิรัญรูจี เขตธนบุรี กทม. 10600', 'มีไข้สูง เจ็บคอ', '2023-02-23 09:42:07', '2023-02-23 02:42:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_register_covid`
--
ALTER TABLE `tbl_register_covid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_register_covid`
--
ALTER TABLE `tbl_register_covid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
