-- phpMyAdmin SQL Dump
-- version 3.5.3
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306

-- Generation Time: Dec 06, 2012 at 01:58 AM
-- Server version: 5.5.28
-- PHP Version: 5.4.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `plants`
--

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `soil_temp_germ` varchar(255) DEFAULT NULL,
  `soil_temp` varchar(255) DEFAULT NULL,
  `air_temp` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `edible_part` varchar(255) DEFAULT NULL,
  `how_many` varchar(255) DEFAULT NULL,
  `water_how_much` varchar(255) DEFAULT NULL,
  `water_how_often` varchar(255) DEFAULT NULL,
  `sunlight` varchar(255) DEFAULT NULL,
  `root_depth` varchar(255) DEFAULT NULL,
  `min_spacing` varchar(255) DEFAULT NULL,
  `yeild_plant` varchar(255) DEFAULT NULL,
  `start_season` varchar(255) DEFAULT NULL,
  `when_plant` varchar(255) DEFAULT NULL,
  `hard_change` varchar(255) DEFAULT NULL,
  `week_transplanting` varchar(255) DEFAULT NULL,
  `when_transplant` varchar(255) DEFAULT NULL,
  `mauraty` varchar(255) DEFAULT NULL,
  `when_harvest` varchar(255) DEFAULT NULL,
  `companions` varchar(255) DEFAULT NULL,
  `antagonists` varchar(255) DEFAULT NULL,
  `common_pests` varchar(255) DEFAULT NULL,
  `plants_that_keep_pests_away` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `life_cycle` varchar(255) DEFAULT NULL,
  `calories` varchar(255) DEFAULT NULL,
  `calcium` varchar(255) DEFAULT NULL,
  `phosphorus` varchar(255) DEFAULT NULL,
  `potassium` varchar(255) DEFAULT NULL,
  `vitamin_c` varchar(255) DEFAULT NULL,
  `soil_ph` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=ascii;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` (`id`, `name`, `soil_temp_germ`, `soil_temp`, `air_temp`, `image_url`, `edible_part`, `how_many`, `water_how_much`, `water_how_often`, `sunlight`, `root_depth`, `min_spacing`, `yeild_plant`, `start_season`, `when_plant`, `hard_change`, `week_transplanting`, `when_transplant`, `mauraty`, `when_harvest`, `companions`, `antagonists`, `common_pests`, `plants_that_keep_pests_away`, `type`, `life_cycle`, `calories`, `calcium`, `phosphorus`, `potassium`, `vitamin_c`, `soil_ph`) VALUES
('1', 'Artichoke, Jerusalem', '44-50', '0-0', '65-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=b1l_4vMxAxzhlM:&imgrefurl=http://home.howstuffworks.com/jerusalem-artichokes.htm&docid=9XYq93YKZGbM7M&imgurl=http://static.ddmcdn.com/gif/jerusalem-', 'Tuber', '-, R', '1', '20', '5.0', '0-0', '15', '1.2-5', 'SP', '2012,1,15', NULL, '4-6', NULL, '17-26', '-', NULL, NULL, 'Aphids', NULL, 'Helianthus', NULL, '73', '14', '78', '429', '4', '6.75-7.5'),
('2', 'Artichoke, Regular', '0-0', '0-0', '0-0', 'http://upload.wikimedia.org/wikipedia/commons/a/a7/CDC_artichoke.jpg', 'Heart', 'D', '1', '5', '5.0', '0-0', '72', '0-0', 'FA', NULL, NULL, '8-10', NULL, '17-26', '8', NULL, NULL, NULL, NULL, 'Cynara', 'perennial', '60', '56', '115', '474', '15', '6.5-8.0'),
('3', 'Asparagus', '60-85', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=L-V5lt9Y_Ht0UM:&imgrefurl=http://www.worldcommunitycookbook.org/season/guide/asparagus.html&docid=SKnRprK2QU5r9M&imgurl=http://www.worldcommunitycoo', 'Stem', '0.7', '1', '20', '4.5', '6-8', '12', '0.06-0.24', 'SP', '2012,2,10', '5', '10-12', 'Nov. 15-Mar. 15', '52-52', '8', '58, 37', NULL, 'Asparagus beetles (common and spotted)', 'Tomatoes repel beetles', 'Asparagus', 'perennial', '20', '24', '52', '202', '5.6', '6.0-8.0'),
('4', 'Beans, Broad, Fava', '65-86', '70-80', '50-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=oNdKYq8SIP1kWM:&imgrefurl=http://greekfood.about.com/od/greekfoodphotogalleries/ig/Greek-Ingredient-Photos/Koukia-Gallery.htm&docid=Q13V-C2GBrm8mM&i', 'Seeds', '0.7R', '1', '7', '5.0', '2.5-2.5', '8', '0.28-1.1', 'FA, SP', '2012,3,15', NULL, '10-12', NULL, '11-26', '8', '43, 44, 15, 22, 16, 14', '34, 35, 36, 24', NULL, 'Catnip repels flea beetles; 43, 44 repel Mexican bean beetles; rosemary repels insects in general', 'Vicia', NULL, '341', '103', '421', '1062', '1.4', '6.0-6.75'),
('5', 'Beans, Lima, Bush', '65-86', '70-80', '50-80', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=r6jAnsvnsqQXdM:&imgrefurl=http://www.organicgardeninfo.com/bush-lima-beans.html&docid=Cr0XljdvN-4cqM&imgurl=http://www.organicgardeninfo.com/images/bush-', 'Seeds', '0.7R', '1', '7', '5.0', '1.5-2', '6', '0.018-0.037', 'SU', '2012,3,15', '13', '3-4', 'May 1-July 1', '9-11', '12', '43, 44, 22, 20, 21, 17', '34, 35, 36', 'Mexican bean beetles, Aphids, Leafhoppers, Seedcorn maggot, Spider mites (two-spotted)', 'Catnip repels flea beetles; 43, 44 repel Mexican bean beetles; rosemary repels insects in general', 'Phaseolus', 'Tender annual', '103', '30', '97', '304', '12.', '6.5-7.0'),
('6', 'Beans, Lima, Pole', '65-86', '70-80', '50-80', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=HpUlRQ8D6A3d3M:&imgrefurl=http://www.southernexposure.com/worchester-indian-red-pole-bean-lima-pole-28-g-p-735.html&docid=tvCKdATUKF8RDM&imgurl=http://ww', 'Seeds', '0.7R', '1', '5', '5.0', '1.5-2', '8', '0.035-0.071', 'SU', '2012,3,15', '13', '3-4', 'May 1-June 15', '11-13', '12', '20, 21', '34, 35, 36, 9, 10, 27, 57', 'Mexican bean beetles, Aphids, Leafhoppers, Seedcorn maggot, Spider mites (two-spotted)', 'Catnip repels flea beetles; 43, 44 repel Mexican bean beetles; rosemary repels insects in general', 'Phaseolus', 'Tender annual', '103', '30', '97', '304', '12.', '6.0-7.5'),
('7', 'Beans, Snap, Bush', '65-86', '70-80', '50-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=pexl4nrVXvjlIM:&imgrefurl=http://sowtrueseed.com/bean-snap-bush/bean-snap-bush-provider/&docid=tVSmEc7VHoPCEM&itg=1&imgurl=http://sowtrueseed.com/im', 'Seeds', '0.75R', '1', '7', '5.0', '1-2', '4', '0.022-0.08', 'SP, SU', '2012,3,10', '10', '1-2', 'Apr. 15-July 15', '8-8', '12', '43, 44, 22, 20, 21, 17', '34, 35, 36', 'Mexican bean beetles, Aphids, Leafhoppers, Seedcorn maggot, Spider mites (two-spotted)', 'Catnip repels flea beetles; 43, 44 repel Mexican bean beetles; rosemary repels insects in general', 'Phaseolus', 'Tender annual', '31', '37', '38', '209', '16.', '6.0-6.8'),
('8', 'Beans, Snap, Pole', '65-86', '70-80', '50-80', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=BCwY4k6Az_ecuM:&imgrefurl=http://loghouseplants.com/plants/shop/heirloom-bean-kentucky-wonder-pole-snap-pole-bean/&docid=CjoetPsKGID2BM&imgurl=http://log', 'Seeds', '0.75R', '1', '5', '5.0', '1-1.5', '6', '0.048-0.171', 'SP, SU', '2012,3,10', '10', '1-2', 'Apr. 15-July 15', '8-9', '12', '20, 21', '34, 35, 36, 9, 10, 27, 57', 'Mexican bean beetles, Aphids, Leafhoppers, Seedcorn maggot, Spider mites (two-spotted)', 'Catnip repels flea beetles; 43, 44 repel Mexican bean beetles; rosemary repels insects in general', 'Phaseolus', 'Tender annual', '31', '37', '38', '209', '16.', '6.0-7.5'),
('9', 'Beets, Cylindra', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=ECdcHQ-RsgTwrM:&imgrefurl=http://www.genericseeds.com/vegetable-garden-seed/cylindra-beet-seeds&docid=Yt3VcECQIW3XUM&imgurl=http://www.genericseeds.', 'Roots', '0.65R', '1', '14', '4.5', '1.5-2', '3', '0.044-0.21', 'SP, SU, FA', '2012,2,10', '5', '4-6', 'Mar. 15-Apr. 15; July 15-Aug. 15', '8-9', '-', '34, 35, 36, 27', '6, 8', 'Leafminer', 'Onion family repels insects in general', 'Beta', 'Biennial grown as an annual', NULL, NULL, NULL, NULL, NULL, '6.75-7.5'),
('10', 'Beets, Regular', '50-85', '65-75', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=5RLvc0yTecM-MM:&imgrefurl=http://naturelivings.blogspot.com/2012/02/red-beet-5-miraculous-health-properties.html&docid=aboAsIKMK0rBzM&imgurl=http://', 'Roots', '0.65R', '1', '14', '4.5', '1.5-2', '3', '0.02-0.1', 'SP, SU, FA', '2012,2,10', '5', '4-6', 'Mar. 15-Apr. 15; July 15-Aug. 15', '8-9', '-', '34, 35, 36, 27', '6, 8', 'Leafminer', 'Onion family repels insects in general', 'Beta', 'Biennial grown as an annual', '43', '16', '40', '325', '4.9', '6.0-7.5'),
('11', 'Broccoli', '45-85', '65-75', '40-75', 'http://www.google.com/imgres?start=123&um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=s5PTbh3JlrbqgM:&imgrefurl=http://sweetwater-organic.org/veggies/broccoli/&docid=rxN_7tu_PeY3pM&imgurl=http://sweetwater-organic.org/wp-con', 'Florets', '0.75', '1', '5', '5.0', '0.25-0.5', '15', '0.3-0.63', 'SP, FA', '2012,2,30', '5', '4-6', 'Mar. 15-31; July 15-Aug. 15', '8-9', '6-Apr', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cabbageworms, Flea beetles, Cabbage root maggot, Cabbage aphids, Slugs and snails, Cutworms', NULL, 'Brassica', 'Biennial grown as an annual', '34', '47', '66', '316', '89.', '6.0-7.0'),
('12', 'Brussels Sprouts', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=-_XswYi-BY6bBM:&imgrefurl=http://tinyfarmblog.com/harvesting-brussels-sprouts/&docid=zWfjNHI6Hc5ApM&imgurl=http://tinyfarmblog.com/wp-content/upload', 'Leaves', '0.7', '1', '5', '5.0', '0.5-0.5', '18', '1.3-2.6', 'SP, FA', '2012,2,30', '5', '5-7', 'July 1-15', '11-13', '12', NULL, NULL, 'Cabbage aphids, Cabbage root maggot, Cabbageworms, Flea Beetles, Cutworms, Cabbage loopers, Slugs, Nematodes', NULL, 'Brassica', 'Biennial grown as an annual', '43', '42', '69', '389', '85', '6.0-7.5'),
('13', 'Cabbage, Chinese', '40-85', '60-70', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=ZMvXWKxOmPCGLM:&imgrefurl=http://www.openhandsfarm.com/chinesecabbage.php&docid=Kc5PY3dr9pzmWM&imgurl=http://www.openhandsfarm.com/photos/chinesecab', 'Leaves', '0.75', '1', '5', '3.5', '0.5-0.05', '10', '0.47-1.9', 'SP, FA', '2012,2,15', '8', '8-10', 'Mar. 15-Apr. 1; Aug. 1-15', '7-11', '-', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cabbage aphids, Cabbage root maggot, Cabbageworms, Flea Beetles, Cutworms, Cabbage loopers, Slugs, Nematodes ', 'Celery repels cabbageworms; onion family deters maggots; rosemary, sage and thyme repel insects in general', 'Brassica', 'Biennial grown as an annual', '16', '77', '29', '238', '27', '6.0-7.5'),
('14', 'Cabbage, Regular', '50-85', '65-75', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=YGl8goyUiTIYTM:&imgrefurl=http://adellefrank.com/blog/csa/small-farms-csa-produce-share-2010-fall&docid=x8ke6kF_by32cM&imgurl=http://farm5.static.fl', 'Leaves', '0.75', '1', '10', '5.0', '0.5-0.05', '15', '1.1-4.5', 'SP, FA', '2012,2,15', '8', '4-6', 'Feb. 1-Apr.1; Aug 1-15', '9-16', '-', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cabbage aphids, Cabbage root maggot, Cabbageworms, Flea Beetles, Cutworms, Cabbage loopers, Slugs, Nematodes ', 'Celery repels cabbageworms; onion family deters maggots; rosemary, sage and thyme repel insects in general', 'Brassica', 'Biennial grown as an annual', '25', '40', '26', '170', '36.', '6.0-7.0'),
('15', 'Carrots', '60-80', '65-75', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=2K-TbndFe5tGHM:&imgrefurl=http://www.worldcommunitycookbook.org/season/guide/carrots.html&docid=dniV_ExQFDq67M&imgurl=http://www.worldcommunitycookb', 'Roots', '0.55', '1', '21', '5.0', '0.25-0.25', '2', '0.016-0.18', 'SP, SU, FA', '2012,2,10', '10', '2-3', 'Feb. 15-Mar. 1; July 1-15', '9-11', '-', '39, 40, 30, 34, 35, 36, 28, 58', NULL, 'Carrot rust fly, Carrot weevil, Leafhopper, Slugs', 'Onion family repels carrot flies; rosemary and sage repel insects in general', 'Daucus', 'Biennial grown as an annual', '41', '33', '35', '320', '5.9', '5.5-7.0'),
('16', 'Cauliflower', '50-85', '65-75', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=SGqY53ZxkH83gM:&imgrefurl=http://foodrefashionista.wordpress.com/2011/08/25/cauliflower-carrot-bake/&docid=mbzswtkphA0pWM&imgurl=http://foodrefashio', 'Florets', '0.75', '1', '5', '5.0', '0.25-0.25', '15', '0.52-3.4', 'SP, FA', '2012,2,30', '5', '4-6', 'Mar. 15-31; Aug 1-15', '8-12', '-', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cabbageworms, Flea Beetles, Cabbage root maggot, Cabbage aphids, Cutworms, Slugs and snails', NULL, 'Brassica', 'Biennial grown as an annual', '25', '22', '44', '299', '48.', '5.5-7.5'),
('17', 'Celery', '50-70', '60-70', '45-75', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=wYv95aRbXybGEM:&imgrefurl=http://gardenplantsbypost.com/oscom/product_info.php/products_id/136&docid=yhinX6h51WMRXM&imgurl=http://gardenplantsbypost.com/', 'All', '0.55', '1', '5', '4.5', '0.5-0.05', '6', '0.38-1.5', 'SP, FA', '2012,3,1', '5', '10-12', NULL, '15-19', '-', '28, 58, 5, 7, 16, 14', NULL, 'Aphids, Tarnished plant bug, Cabbage loopers, Whiteflies, Cutworms', 'Cabbage repels insects in general', 'Apium', 'Biennial grown as an annual', '16', '40', '24', '260', '3.1', '5.8-7.0'),
('18', 'Chard, Swiss', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=kNeQhKTwLrGLEM:&imgrefurl=http://www.klesickfamilyfarm.com/main/main/know-your-produce-swiss-chard&docid=gZCc3Y3Y3YpMHM&imgurl=http://www.klesickfam', 'Leaves & stem', '0.65R', '1', '5', '4.5', '0-0', '8', '0.62-2.5', 'SP, SU, FA', '2012,2,15', '8', '10-12', 'Mar. 15-May 1', '7-8', '44', NULL, NULL, 'Aphids, Leaf miners', NULL, 'Beta', 'annual', '19', '51', '46', '379', '30', '6.5-7.0'),
('19', 'Collards', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=NvwlJ4tfu6wiKM:&imgrefurl=http://summertomato.com/tag/summer-squash/&docid=M-wuBnw5qwPL0M&imgurl=http://summertomato.com/wp-content/uploads/2010/07/', 'Leaves & stem', '0.8', '1', '14', '5.0', '0-0', '12', '0.6-2.4', 'SP, FA', '2012,2,1', '8', '4-6', 'July 15-Aug. 15', '12-12', '24', NULL, NULL, 'Cutworm, Cabbage loopers, Cabbageworms, Flea beetles, Cabbage root maggots, Cabbage aphids, Slugs and snails, Nematodes', NULL, 'Brassica', 'Biennial grown as an annual', '32', '232', '25', '213', '35.', '6.0-7.5'),
('20', 'Corn', '55-85', '75-85', '50-95', NULL, 'stalks, husks, cobs, and tassels', NULL, '1', '14', '5.0', '2-2', '12', '0-0', NULL, '2012,2,10', NULL, '2-4', NULL, NULL, NULL, '43, 44, 39, 40, 4, 5, 6, 7, 8, 22, 45, 53, 54, 55, 56', NULL, NULL, '43, 44 repel insects in general; soybeans deter chinch bugs', 'Zea', NULL, '365', '7', '210', '287', '0', '6.0-7.5'),
('21', 'Corn, Sweet', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=GfNhDAEP6zGTwM:&imgrefurl=http://experiencingrheumatoidarthritis.blogspot.com/2010/04/sweet-corn.html&docid=oMzg86xhobtM5M&imgurl=http://3.bp.blogsp', 'stalks, husks, cobs, and tassels', '0.75', '1', '14', '5.0', '0-0', '15', '0.3-1.3', 'SU', '2012,3,10', '10', '2-4', 'Apr. 15-June 1', '9-13', '-', NULL, NULL, 'European corn borer, corn earworms, Seedcorn maggots', NULL, 'Zea', 'Tender annual', '86', '2', '89', '270', '6.8', '6.0-7.5'),
('22', 'Cucumbers', '65-85', '70-80', '60-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=6fb5SpmU8AZ4LM:&imgrefurl=http://www.owlcreeksupply.com/cucumbers-overview.php&docid=WXBh7xBti4WidM&imgurl=http://www.owlcreeksupply.com/images/cucu', 'Fruit', '0.8', '1', '7', '5.0', '1-1', '12', '1.0-3.6', 'SU', '2012,3,20', '10', '4-4', 'Apr. 20-May 15; Aug. 1-15', '7-10', '26', '4, 5, 6, 7, 8, 20, 21, 39, 40, 46, 57', '43, 44', 'Stripped or spotted cucumber beetles, Aphids, Squash vine borer', 'Radishes deter chinch beetles', 'Cucumis', 'annual', '15', '16', '24', '147', '2.8', '5.5-7.0'),
('23', 'Eggplant', '65-85', '75-85', '65-95', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=foQQDBXEH1JlHM:&imgrefurl=http://www.yumsugar.com/Season-Japanese-Eggplant-2136622&docid=bll_oOnFD4b2uM&imgurl=http://images.teamsugar.com/files/upl', 'Fruit', '0.6', '7', '7', '5.0', '0.25-0.5', '18', '1.0-3.0', 'SU', '2012,4,1', '8', '8-10', 'May 1-31', '10-11', '13', '4, 5, 6, 7, 8', NULL, 'Aphids, Flea beetles, Colorado potato beetles, Cutworms', 'Green beans deter Colorado potato beetles; 43, 44 can be used as a trap plant', 'Solanum', 'Tender annual', '25', '9', '24', '229', '2.2', '5.5-6.5'),
('24', 'Garlic', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=7VsE99-AWgJtLM:&imgrefurl=http://christopherranch.wordpress.com/2009/07/02/promising-sign-for-california-garlic-growers/&docid=i6ROJ-AvlJqwNM&imgurl', 'Bulb', '0.5ZZ', '1', '5', '5.0', '1-1', '3', '0.02-0.096', 'SP, FA', NULL, NULL, '8-10', NULL, '17-26', '-', '9, 10, 58, 29, 30', '39, 40, 4, 5, 6, 7, 8', 'Expect few or no insect problems', NULL, 'Allium', 'annual', '149', '181', '153', '401', '31.', '5.5-8.0'),
('25', 'Horseradish', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=zLHIFbLUGf-ujM:&imgrefurl=http://localfoods.about.com/od/horseradish/tp/abouthorseradish.htm&docid=6u9lReDTiBnmYM&imgurl=http://0.tqn.com/d/localfoo', 'Roots', NULL, '1', '5', '4.5', '3-3', '12', '0-0', 'SP, FA', NULL, NULL, '8-12', NULL, '26-26', '-', NULL, NULL, NULL, NULL, 'Armoracia', NULL, '48', '56', '31', '246', '24.', '6.0-7.5'),
('26', 'Kale', '40-70', '60-70', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=4UWPe-QOpiMtEM:&imgrefurl=http://www.providentorganicfarm.com/vegetables/kale.html&docid=o_GA51UvZXESSM&imgurl=http://www.providentorganicfarm.com/i', 'Leaves & stem', '0.75', '1', '7', '4.5', '0.5-0.05', '15', '0.9-1.8', 'SP, FA', '2012,2,10', '5', '4-5', 'Mar. 1-Apr. 1; Aug. 15-Sept. 1', '8-9', '17', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cutworm, Cabbage loopers, Cabbageworms, Flea beetles, Cabbage root maggots, Cabbage aphids, Slugs and snails, Nematodes', NULL, 'Brassica', 'Biennial grown as an annual', '49', '150', '92', '491', '120', '6.0-7.5'),
('27', 'Kohlrabi', '50-85', '65-75', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=MvGV3pZ2-9rLgM:&imgrefurl=http://www.naturalhealth-solutions.net/healthy-eating/healthy-eating-kohlrabi&docid=96jetmgiouvi1M&imgurl=http://www.natur', 'Leaves & bulb', '0.75', '1', '5', '5.0', '0.5-0.05', '4', '0.05-0.2', 'SP, FA', '2012,2,15', '5', '4-6', 'Mar. 1-Apr. 15; Aug. 1-Sept. 1', '7-8', '-', '43, 44, 17, 9, 10, 34, 35, 36', '58, 6, 8', 'Cutworm, Cabbage loopers, Cabbageworms, Flea beetles, Cabbage root maggots, Cabbage aphids, Slugs and snails, Nematodes', NULL, 'Brassica', 'Biennial grown as an annual', '27', '24', '46', '350', '62', '6.5-7.0'),
('28', 'Leeks', '40-75', '65-75', '45-85', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=YBWxT5F-svvz3M:&imgrefurl=http://www.growit.umd.edu/Vegetable%2520Profiles/Leeks.cfm&docid=VWc7NIVFfz2VKM&imgurl=http://www.growit.umd.edu/Images3/l', 'All', '0.6', '1', '5', '4.5', '0.5-1', '3', '0.095-0.38', 'SP, FA', '2012,2,10', NULL, '10-12', NULL, '19-19', '-', '34, 35, 36, 17, 15', NULL, 'Onion maggot, Thrips', NULL, 'Allium', 'Biennial grown as an annual', '61', '59', '35', '180', '12', '6.0-7.0'),
('29', 'Lettuce, Head', '40-80', '65-75', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=1iDpaAGDVDtr8M:&imgrefurl=http://nancybabb-classes.blogspot.com/2012/05/how-to-handle-head-of-lettucetip.html&docid=titSUYrEMZFeLM&imgurl=http://4.b', 'Head', '0.8', '1', '7', '4.5', '0.25-0.5', '12', '0.47-1.9', 'SP, FA', '2012,2,15', '8', '4-6', 'Feb. 15-Mar. 15; Aug. 15-31', '11-13', '-', '15, 46, 22', NULL, 'Aphids, Leafminers, Leafhoppers, Cabbage loopers, Cutworms, Wireworms, Slugs', 'Carrots and radishes repel insects in general', 'Lactuca', 'nnual', '13', '35', '33', '238', '3.7', '6.0-7.0'),
('30', 'Lettuce, Leaf', '40-80', '65-75', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=K-wmyC9ffONfmM:&imgrefurl=http://www.proprofs.com/flashcards/cardshowall.php%3Ftitle%3Dstater-brothers-produce-codes&docid=BzS5Jqu5Z9tzcM&imgurl=htt', 'Leaves', '0.8', '1', '7', '4.5', '0.25-0.5', '8', '0.4-1.7', 'SP, FA', '2012,2,15', '8', '4-6', 'Mar. 1-Apr. 1; Aug. 1-Sept. 1', '6-13', '-', '15, 46, 22', NULL, 'Aphids, Leafminers, Leafhoppers, Cabbage loopers, Cutworms, Wireworms, Slugs', 'Carrots and radishes repel insects in general', 'Lactuca', 'nnual', '15', '36', '29', '194', '9.2', '6.0-7.0'),
('31', 'Melons', '65-85', '70-80', '60-80', 'http://www.google.com/imgres?imgurl=http://www.foodsubs.com/Photos/cantaloupe.jpg&imgrefurl=http://www.foodsubs.com/Fruitmel.html&h=244&w=388&sz=13&tbnid=EI96G2G9VMJe6M:&tbnh=74&tbnw=118&zoom=1&usg=__jy4-JJjjLcrnFqh-Ezuh8oJoAPg=&docid=Nwf33wCzMfLwmM&sa=X&', 'Sarcocarp', '0.75', '1', '7', '5.0', '0.5-1', '15', '0.6-1.7', 'SU', '2012,3,20', '13', '2-4', NULL, '12-17', '13', NULL, NULL, 'Striped or spotted cucumber beetles, Aphids, Squash vine borer, Squash bugs, Flea beetles', NULL, 'Cucumis', 'Tender annual', '34', '9', '15', '267', '36.', '6.5-7.0'),
('32', 'Mustard', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=rPxJuBwr8lQKOM:&imgrefurl=http://www.thehungrymouse.com/2010/06/01/spicy-guinness-mustard/&docid=mjqC-4sUgDQS4M&imgurl=http://www.thehungrymouse.com', 'Seed', '0.75', '1', '7', '4.5', '0.5-0.05', '6', '0.29-0.43', 'SP, FA', NULL, NULL, '2-3', 'Mar. 1-Apr. 1; Aug. 1-Sept. 15', '5-6', '8', NULL, NULL, 'Flea beetles, White flies, Aphids', NULL, 'Brassica', 'nnual', '27', '115', '58', '384', '70', '6.0-7.5'),
('33', 'Okra', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=w9JLZhTQ3JdB8M:&imgrefurl=http://docakilah.wordpress.com/2011/11/07/okra-cure-for-diabetes/&docid=H8CF9dR8SdkGkM&imgurl=http://docakilah.files.wordp', 'Fruit', '0.5', '1', '14', '4.5', '0-0', '12', '0.19-0.75', 'SU', '2012,3,20', '13', '6-8', 'May 1-31', '7-8', '13', NULL, NULL, NULL, NULL, 'Abelmoschus', NULL, '33', '82', '61', '299', '23', '6.5-7.0'),
('34', 'Onions, Bunching', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=Nfx6w0pl8VL1CM:&imgrefurl=http://www.semena.org/sort/onion/green-banner-e.htm&docid=fcc0YAtDY9AgNM&imgurl=http://www.semena.org/sort/onion/image/green-ba', 'Roots', '0.7', '1', '7', '4.5', '0-0', '1', '0.004-0.023', 'SP, SU, FA', '2012,2,1', '8', '4-6', 'Feb. 1-Mar. 15; Sept. 1-15', '17-17', '-', '9, 10, 58, 29, 30', '39, 40, 4, 5, 6, 7, 8', 'Slugs', NULL, 'Allium', 'perennial', NULL, NULL, NULL, NULL, NULL, '6.2-6.8'),
('35', 'Onions, Regular', '50-85', '65-75', '45-85', 'http://www.google.com/imgres?um=1&hl=en&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=cCEfbzg8gWPXEM:&imgrefurl=http://en.wikipedia.org/wiki/File:Onions.jpg&docid=DHgGoEqCynaLLM&imgurl=http://upload.wikimedia.org/wikipedia/commons/1/1b/Oni', 'Roots', '0.7', '1', '7', '5.0', '0.5-0.05', '3', '0.04-0.2', 'SP', '2012,2,15', '8', '4-6', 'Feb. 1-Mar. 15; Sept. 1-15', '14-17', '-', '9, 10, 58, 29, 30', '39, 40, 4, 5, 6, 7, 8', 'Onion maggot, Thrips', NULL, 'Allium', 'Biennial grown as annual', '40', '23', '29', '146', '7.4', '6.0-7.5'),
('36', 'Onions, Torpedo', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=JtwEo9mLQfu7DM:&imgrefurl=http://blogs.laweekly.com/squidink/2009/06/index.php%3Fpage%3D2&docid=roBlL0A9xyNNsM&imgurl=http://blogs.laweekly.com/squi', 'Roots', '0.7', '1', '7', '4.5', '0-0', '3', '0.08-0.43', 'SP', '2012,2,10', '10', '4-6', 'Feb. 1-Mar. 15; Sept. 1-15', '14-17', '-', '9, 10, 58, 29, 30', '39, 40, 4, 5, 6, 7, 8', NULL, NULL, 'Allium', NULL, NULL, NULL, NULL, NULL, NULL, '6.0-7.5'),
('37', 'Parsley', '50-85', '65-75', '45-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=Vi7-6R6LmXAuPM:&imgrefurl=http://www.mariquita.com/recipes/parsleyroot.html&docid=Xp-IjRR55t8ltM&imgurl=http://www.mariquita.com/images/photogallery', 'Leaves', '0.6', '1', '7', '4.5', '0.25-0.25', '4', '0.02-0.08', 'SP', '2012,2,10', '10', '1-2', NULL, '10-13', '40', '58, 3', NULL, NULL, NULL, 'Petroselinum', NULL, '36', '138', '58', '554', '133', '6.0-6.75'),
('38', 'Parsnips', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=H9dBs3bJ7NjFdM:&imgrefurl=http://www.openhandsfarm.com/parsnip.php&docid=LxNiPklmTNZJnM&imgurl=http://www.openhandsfarm.com/photos/parsnip.jpg&w=269', 'Leaves', '0.6', '1', '14', '4.5', '0.5-0.05', '3', '0.047-0.19', 'SP, FA', '2012,2,10', '10', '4-6', NULL, '15-15', '-', NULL, NULL, 'Carrot weevil, Leafhopper', NULL, 'Pastinaca', 'Biennial grown as annual', '75', '36', '71', '375', '17', '6.0-7.5'),
('39', 'Peas, Bush', '40-85', '65-75', '45-75', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=TC15JmYdIApyHM:&imgrefurl=http://www.organicgardeninfo.com/growing-bush-peas.html&docid=ykKkh5Wb6xsRRM&imgurl=http://www.organicgardeninfo.com/images/bus', 'Peas', '0.8R', '1', '7', '4.5', '0-0', '3', '0.01-0.04', 'SP, FA', '2012,1,20', '13', '4-6', 'Jan. 1-Mar. 15', '8-10', '12', '15, 59, 46, 22, 20, 21, 4, 5, 6, 7, 8', '34, 35, 36, 24, 43, 44', 'Aphids, Seedcorn maggot', NULL, 'Pisum', 'annual', NULL, NULL, NULL, NULL, NULL, '6.0-7.5'),
('40', 'Peas, Pole', '40-85', '65-75', '45-75', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=pq0F6NcX56SS9M:&imgrefurl=http://www.organicgardeninfo.com/growing-pole-peas.html&docid=9pGeFJerZZGbvM&imgurl=http://www.organicgardeninfo.com/images/pol', 'Peas', '0.8R', '1', '7', '4.5', '0-0', '4', '0.02-0.08', 'SP, FA', '2012,1,20', '13', '4-6', 'Jan. 1-Mar. 15', '10-11', '12', '15, 59, 46, 22, 20, 21, 4, 5, 6, 7, 8', '34, 35, 36, 24, 43, 44', 'Aphids, Seedcorn maggot', NULL, 'Pisum', 'annual', NULL, NULL, NULL, NULL, NULL, '6.0-7.5'),
('41', 'Peppers, Cayenne', '65-85', '70-80', '65-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=S_igUSq8eYq5nM:&imgrefurl=http://www.thenutritionpost.com/eatright/cayenne-pepper-health-benefits.html&docid=9TP2cGsez7em6M&imgurl=http://www.thenut', 'Leaves & fruits', '0.55', '1', '7', '5.0', '0.25-0.25', '12', '0.06-0.25', 'SU', '2012,4,1', '10', '8-10', 'May 1-31', '9-11', '17', NULL, NULL, 'Aphids, Borers, Tarnished plant bugs', NULL, 'Capsicum', 'annual', NULL, NULL, NULL, NULL, NULL, '6.75-7.5'),
('42', 'Peppers, Sweet, Green', '65-85', '70-80', '65-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=_DicGHFukKiA5M:&imgrefurl=http://www.thedailygreen.com/healthy-eating/eat-safe/top-sources-vitamin-C-44102808&docid=o_re_KqBFtjAXM&imgurl=http://www', 'Leaves & fruits', '0.55', '1', '7', '5.0', '0.25-0.25', '12', '0.2-0.8', 'SU', '2012,4,1', '10', '8-10', 'May 1-31', '9-12', '17', NULL, NULL, 'Aphids, Borers, Tarnished plant bugs', NULL, 'Capsicum', 'annual', '20', '10', '20', '175', '80.', '5.5-7.0'),
('43', 'Potatoes, Irish', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=XnRyIEg7WNg9tM:&imgrefurl=http://gardening.ktsa.com/Irish-Potato/8338888&docid=4grSahzb3H7xxM&imgurl=http://imgsrv.gardening.ktsa.com/image/ktsag/Us', 'Roots', NULL, '1', '7', '5.0', '4-4', '12', '0.4-3.1', 'SP, FA', '2012,2,15', '3', '4-6', 'Feb. 15-Apr. 1', '17-17', '-', '4, 5, 6, 7, 8, 20, 21, 14, 25, 23', '45, 53, 54, 55, 56, 22, 57, 58', 'Colorado potato beetles, Aphids, Flea beetles, Leaf hoppers', 'Beans and corn repel insects in general; use eggplant as trap plant', 'Solanum', 'annual', NULL, NULL, NULL, NULL, NULL, '4.8-6.5'),
('44', 'Potatoes, Sweet', '60-85', '75-85', '65-95', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=bd6oUXURd6jGNM:&imgrefurl=http://theouteraisle.blogspot.com/2012/05/sah-weet-sweet-potatoes-3-ways.html&docid=UM0NpOLGjkIw7M&imgurl=http://2.bp.blog', 'Roots', NULL, '1', '21', '5.0', '4-5', '12', '0.33-2.0', 'SU', '2012,4,1', '10', '4-6', 'May 15-June 15', '26-34', '-', '4, 5, 6, 7, 8, 20, 21, 14, 25, 23', '45, 53, 54, 55, 56, 22, 57, 58', 'Colorado potato beetles, Aphids, Flea beetles, Leaf hoppers', 'Beans and corn repel insects in general; use eggplant as trap plant', 'Ipomoea', 'annual', '377', '38', '54', '475', '19.', '4.8-6.5'),
('45', 'Pumpkin', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1129&bih=757&tbm=isch&tbnid=Iw3QgPrUEc0ZlM:&imgrefurl=http://www.aftonapple.com/pumpkins.htm&docid=3XqJZAUHEu9C9M&imgurl=http://www.aftonapple.com/pumpkins.jpg&w=600&h=432&ei=', 'Sarcocarp', '0.75', '1', '14', '5.0', '1-1', '30', '3.4-13.6', 'SU', '2012,3,20', '10', '2-4', 'Apr. 15-June 15', '14-16', '-', '20, 21', '43, 44', 'Aphids, Squash bug, Spider mites, Squash vine borer, Striped cucumber beetles', NULL, 'Cucurbita', 'Tender annual', '26', '21', '44', '340', '9', '5.5-7.5'),
('46', 'Radishes', '40-85', '65-75', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=VYHDHANHdxrjwM:&imgrefurl=http://gardening.ktsa.com/Radishes/8337370&docid=ha_shc5uYGPGJM&imgurl=http://imgsrv.gardening.ktsa.com/image/ktsag/UserFi', 'Roots', '0.75R', '1', '5', '4.5', '0.5-0.05', '2', '0.017-0.09', 'SP, FA', '2012,2,1', '8', '4-6', 'Feb. 1-Apr. 1; Aug. 15-Sept. 15', '3-9', '-', '39, 40, 29, 30, 22', NULL, 'Cabbage root maggots', 'Cucumbers repel insects in general', 'Raphanus', 'annual', '16', '25', '20', '233', '14.', '6.0-7.0'),
('47', 'Rhubarb', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=E0lb_Gr3BwkkSM:&imgrefurl=http://rustbeltrunner.com/2012/09/my-swiss-chard-pie/&docid=sLM_K_fT5FGdGM&imgurl=http://rustbeltrunner.com/wp-content/upl', 'Stalks', '0.6Y', '1', '21', '4.5', '2-3', '24', '0-0', 'SP', '2012,2,1', '8', '4-6', NULL, '52-52', 'D', NULL, NULL, 'Rhubarb is relatively trouble-free. Some potential pests include: Rhubarb curculio, Potato stem borer, Mites', NULL, 'Rheum', 'perennial', '21', '86', '14', '288', '8', '5.25-6.75'),
('48', 'Rutabagas', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=wa8ESnOpQjX1eM:&imgrefurl=http://carletongarden.blogspot.com/2007/11/here-are-beautiful-rutabagas-i-bought.html&docid=Zxz0FWfkXkKrrM&imgurl=http://f', 'Roots', '0.75', '1', '14', '4.5', '0.25-0.25', '6', '0.3-1.5', 'SP, FA', '2012,2,1', '8', '12-14', 'Feb. 1-Apr. 1; July 1-Aug. 1', '13-13', '-', NULL, NULL, 'Flea beetles, Cabbage root maggots', NULL, 'Brassica', 'annual', '37', '43', '53', '305', '25', '5.0-7.0'),
('49', 'Salsify', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=DlxARtMZHQOBAM:&imgrefurl=http://www.goinglocal-info.com/my_weblog/2007/12/savoring-salsif.html&docid=TYqBP2xI5GRFmM&imgurl=http://www.goinglocal-in', 'Roots', '0.75R', '1', '7', '4.0', '1-1', '2', '0.03-0.18', 'SP, FA', NULL, NULL, NULL, NULL, '17-17', '-', NULL, NULL, NULL, NULL, 'Tragopogon', NULL, '82', '60', '75', '380', '8', '6.5-7.0'),
('50', 'Shallots', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=3XAGD_LlwSDpuM:&imgrefurl=http://irisheyesgardenseeds.com/index.php/vegetable-seed/shallots.html&docid=fCrJqBA9t7MTDM&imgurl=http://irisheyesgardens', 'Roots', '0.75Y', '1', '7', '4.5', '1-1', '3', '0.02-0.01', 'SP, FA', NULL, NULL, NULL, NULL, '17-26', '-', NULL, NULL, 'Rarely damaged. Onion maggot, Thrips', NULL, 'Allium', 'perennial', '72', '37', '60', '334', '8', '6.0-6.75'),
('51', 'Spinach, New Zealand', '40-85', '60-70', '40-75', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=919&bih=757&tbm=isch&tbnid=QyEgqCY1OPB8TM:&imgrefurl=http://www.thekitchn.com/farmers-market-find-new-zealan-94416&docid=dNj0Ty_2bynBSM&imgurl=http://i-cdn.apartmenttherapy.com/uim', 'Leaves', '0.4', '1', '5', '5.0', '0.5-0.05', '12', '1.1-1.7', 'SP, SU, FA', '2012,1,15', '13', '2-3', NULL, '10-10', '42', NULL, NULL, NULL, NULL, 'Spinacia', 'Tender annual', '14', '58', '28', '130', '30', '6.75-7.5'),
('52', 'Spinach, Regular', '40-85', '60-70', '40-75', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=sjvp-ESsN-EpjM:&imgrefurl=http://www.tarladalal.com/Spinach-Vegetables-Ingredients-recipe-slider-62&docid=jLrNGuFeXnX_iM&imgurl=http://www.tarladal', 'Leaves', '0.6', '1', '5', '4.5', '0.5-0.05', '4', '0.037-0.17', 'SP, FA', '2012,1,15', '13', '2-3', 'Feb. 15-Mar. 15; Aug. 1-15', '6-7', '-', NULL, NULL, 'Leaf miners', NULL, 'Spinacia', 'annual', '23', '99', '49', '558', '28.', '6.0-7.5'),
('53', 'Squash, Crook Neck', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=GozHTeIHeU9HiM:&imgrefurl=http://greennature.com/gallery/pumpkin-pictures/squash.html&docid=JBBSRnCV78voCM&imgurl=http://greennature.com/gallery/pu', 'Fruit', '0.75', '1', '5', '5.0', '0-0', '15', '0.4-1.8', 'SU', NULL, NULL, '2-3', NULL, '10-10', '17+', '20, 21', NULL, NULL, NULL, 'Cucurbita', NULL, '19', '21', '32', '3222', '19.', '6.0-7.5'),
('54', 'Squash, Patty Pan', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=r2jb__MYJQyjgM:&imgrefurl=http://www.farmersfreshmarket.org/rutherford/market/vegetables/squash/F-1300/patty-pan-squash&docid=xi_1aEiYNNROCM&imgurl', 'Fruit', '0.75', '1', '5', '5.0', '0-0', '15', '0.9-3.6', 'SU', NULL, NULL, '2-3', NULL, '7-7', '17+', '20, 21', NULL, NULL, NULL, 'Cucurbita', NULL, '4.1', '0', '0', '0', '0', '6.0-6.75'),
('55', 'Squash, Winter', '65-85', '75-85', '50-90', 'http://www.google.com/imgres?hl=en&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=6YhfI9Dtk4r0zM:&imgrefurl=http://whatscookingamerica.net/squash.htm&docid=clWN_rkahbTCBM&imgurl=http://whatscookingamerica.net/Vegetables/Acorn.JPG&w=288&h=2', 'Fruit', '0.75', '1', '10', '5.0', '1-1', '30', '5.6-13.6', 'SU', '2012,3,20', '13', '4-6', 'Apr. 15-May 15; Aug. 1-15', '11-17', '17+', '20, 21', NULL, 'Squash bug, Squash vine borer, Striped cucumber beetles', NULL, 'Cucurbita', 'Tender annual', '40', '33', '36', '347', '11', '5.5-7.0'),
('56', 'Squash, Zucchini', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=ryqdde7TuTBkvM:&imgrefurl=http://www.all-creatures.org/recipes/i-squash-zucchini.html&docid=6MAqCd9AtJGoGM&imgurl=http://www.all-creatures.org/reci', 'Fruit', '0.75', '1', '7', '5.0', '0-0', '18', '3.0-9.0', 'SU', '2012,3,20', '13', '2-4', 'Apr. 15-May 15; Aug. 1-15', '7-9', '26', '20, 21', NULL, 'Squash bug, Squash vine borer, Striped cucumber beetles', NULL, 'Cucurbita', 'Tender annual', '17', '16', '38', '261', '17.', '6.0-6.75'),
('57', 'Sunflowers', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?hl=en&sa=X&tbo=d&rlz=1C1CHFX_enUS498US498&biw=1015&bih=757&tbm=isch&tbnid=CDJACBKYXX8G3M:&imgrefurl=http://en.wikipedia.org/wiki/File:Sunflowers.jpg&docid=8OxujhagBwyOzM&imgurl=http://upload.wikimedia.org/wikipedia/commons/d/d', 'Seed', '0.5+Y', '1', '7', '5.0', '1-1', '24', '0.09-0.37', 'SU', NULL, NULL, '6-7', NULL, '12-12', '-', '22', '43, 44', NULL, NULL, 'Helianthus', NULL, '584', '78', '660', '645', '1.4', '6.0-6.75'),
('58', 'Tomatoes', '65-85', '70-80', '65-80', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=ND4uftPL8ec5bM:&imgrefurl=http://www.crockettfarms.com/tomatoes/&docid=FeNKWOQXtdIPfM&imgurl=http://www.crockettfarms.com/images/Tomatoes.jpg&w=380&', 'Fruit', '0.75', '1', '5', '5.0', '0.5-0.05', '12', '1.9-16.0', 'SU', '2012,3,20', '13', '4-6', 'Apr. 20-July 15', '8-13', '17+', '34, 35, 36, 37, 3, 15', '27, 43, 44, 14', 'Tomato hornworms, Aphids, Whiteflies, Colorado potato beetle, Cutworms, Flea beetles', 'Asparagus and basil repel insects in general', 'Solanum', 'Tender annual', NULL, NULL, NULL, NULL, NULL, '5.5-7.5'),
('59', 'Turnips', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=JeiEIpt-YrtZDM:&imgrefurl=http://www.tinkersgardens.com/vegetables/turnips/&docid=Flz_ENBdleCt8M&imgurl=http://www.tinkersgardens.com/site_images/ve', 'Roots', '0.8R', '1', '10', '4.5', '0.5-0.05', '3', '0.04-0.14', 'SP, FA', '2012,2,1', '8', NULL, 'Feb. 1-Apr. 15; Aug. 1-31', '5-10', '-', '39, 40', NULL, 'Flea beetles, Cutworms, Root maggots, Cabbage loopers, Cabbageworms, Cabbage aphids, Slugs and snails, Nematodes', NULL, 'Brassica', 'annual', '28', '30', '27', '191', '21', '6.0-7.5'),
('60', 'Watermelon', '0-0', '0-0', '0-0', 'http://www.google.com/imgres?um=1&hl=en&sa=N&tbo=d&rlz=1C1CHFX_enUS498US498&biw=999&bih=757&tbm=isch&tbnid=JsZWXeTaU5HG0M:&imgrefurl=http://www.schreiberandsons.com/melons.html&docid=cqEXZ7iK9G4oIM&imgurl=http://bestsmoothierecipes.net/wp-content/uploads/', 'Sarcocarp', '0.7', '1', '21', '5.0', '0.5-0.05', '72', '0.31-12.3', 'SU', '2012,3,20', '13', '4-4', 'Apr. 15-June 1', '10-13', '13', NULL, NULL, 'Striped or spotted cucumber beetles, Aphids, Squash vine borer, Squash bugs, Flea beetles', NULL, 'Citrullus', 'Tender annual', '30', '7', '11', '112', '8.1', '6.0-6.75');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;