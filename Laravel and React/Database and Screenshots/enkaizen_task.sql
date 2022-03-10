-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2022 at 10:38 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enkaizen_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `admininfos`
--

CREATE TABLE `admininfos` (
  `id` int(10) UNSIGNED NOT NULL,
  `Username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fullname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phoneno` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admininfos`
--

INSERT INTO `admininfos` (`id`, `Username`, `Fullname`, `Phoneno`, `Address`, `Password`, `created_at`, `updated_at`) VALUES
(1, 'Ayshik99100', 'Ayshik', '01775503498', 'dhaka kuril', '1235oo', '2022-03-10 07:56:49', '2022-03-10 14:36:36'),
(3, 'Ayshik90', 'Sumon', '01775503498', 'dhaka kuril', '12hggo', '2022-03-10 07:58:36', '2022-03-10 14:37:37'),
(4, 'Ayshik70', 'Ayshik', '01775503498', 'dhaka kuril', '12hggo', '2022-03-10 08:00:19', '2022-03-10 08:00:19'),
(5, 'Ayshik4000', 'Ayshik', '01775503498', 'dhaka kuril', '12hggo', '2022-03-10 08:04:27', '2022-03-10 08:04:27'),
(14, 'Test88', 'Test', '002202020202', 'Asulia', '112233', '2022-03-10 14:38:56', '2022-03-10 14:38:56');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` int(10) UNSIGNED NOT NULL,
  `Username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fullname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `Username`, `Fullname`, `Password`, `Type`, `created_at`, `updated_at`) VALUES
(3, 'Ayshik99100', 'Ayshik', '1235oo', 'Admin', '2022-03-10 07:56:49', '2022-03-10 07:56:49'),
(4, 'Ayshik90', 'Ayshik', '12hggo', 'Admin', '2022-03-10 07:58:36', '2022-03-10 07:58:36'),
(5, 'Ayshik70', 'Ayshik', '12hggo', 'Admin', '2022-03-10 08:00:19', '2022-03-10 08:00:19'),
(6, 'Ayshik4000', 'Ayshik', '12hggo', 'Admin', '2022-03-10 08:04:27', '2022-03-10 08:04:27'),
(9, 'Admin', 'Aysh', '1122', 'Admin', '2022-03-10 08:36:11', '2022-03-10 08:36:11'),
(10, 'User', 'Ayshik Khan', '112233', 'User', '2022-03-10 08:38:05', '2022-03-10 08:38:05'),
(11, 'Ayshik007', 'Ayshik Khan', '1234555', 'User', '2022-03-10 11:48:49', '2022-03-10 11:48:49'),
(13, 'Test88', 'Test', '112233', 'Admin', '2022-03-10 14:38:56', '2022-03-10 14:38:56'),
(14, 'Sumon667', 'Sumon Khan', '123456', 'User', '2022-03-10 15:30:37', '2022-03-10 15:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_03_10_110330_create_logins_table', 1),
(7, '2022_03_10_110556_create_userinfos_table', 1),
(8, '2022_03_10_120529_login', 2),
(9, '2022_03_10_110242_create_admininfos_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `userinfos`
--

CREATE TABLE `userinfos` (
  `id` int(10) UNSIGNED NOT NULL,
  `Username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fullname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phoneno` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userinfos`
--

INSERT INTO `userinfos` (`id`, `Username`, `Fullname`, `Phoneno`, `Address`, `Password`, `created_at`, `updated_at`) VALUES
(3, 'Ayshik007', 'Ayshik Khan', '01775503498', 'Dhaka', '1234555', '2022-03-10 11:48:49', '2022-03-10 11:48:49'),
(4, 'Sopnil88', 'Sopnil', '0188883777', 'Dhaka', '11122233', '2022-03-10 11:53:15', '2022-03-10 11:53:15'),
(5, 'Sumon667', 'Sumon Khan', '01793324082', 'Dhaka bd', '123456', '2022-03-10 15:30:37', '2022-03-10 15:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admininfos`
--
ALTER TABLE `admininfos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admininfos_username_unique` (`Username`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `logins_username_unique` (`Username`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfos`
--
ALTER TABLE `userinfos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userinfos_username_unique` (`Username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admininfos`
--
ALTER TABLE `admininfos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userinfos`
--
ALTER TABLE `userinfos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
