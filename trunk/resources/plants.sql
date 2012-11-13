-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2012 at 08:29 AM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a6858635_vegie`
--

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `how_many` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `water_how_much` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `water_how_often` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_temp` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `air_temp` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `sunlight` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `root_depth` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `min_spacing` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `growing_area` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `common_pests` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `organic_pest_control` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `inorganic_pest_control` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `plants_keep_pests_away` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `type` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `flower_size` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `flower_color` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `flower_scent` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `language_of_flowers` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `life_cycle` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_nitrogen` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_phosphorus` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_potassium` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_ph` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `soil_texture` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `calories` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `vitamins` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `yield_per_plant` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `edible_part` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `start` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `harden` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `transplant` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `harvest` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `image_url` mediumtext COLLATE latin1_general_ci,
  `companions` mediumtext COLLATE latin1_general_ci,
  `antagonists` mediumtext COLLATE latin1_general_ci,
  UNIQUE KEY `name` (`name`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` VALUES(6, 'artichoke, jerusalem', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `plants` VALUES(8, 'Corn', NULL, NULL, NULL, '60-95', '60-75', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
