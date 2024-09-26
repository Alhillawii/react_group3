-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 26, 2024 at 10:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `title`, `subject`, `content`, `name`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Aut deserunt aliquam non ullam id quo dolor.', 'Aut qui id necessitatibus consequatur maiores fugiat.', 'Dolores aut omnis in officia laborum qui. Qui fugit harum nam earum hic quia. Dolores hic sed unde et sint qui facere. Natus ipsam dolor numquam magnam in.', 'Ms. Ivy Beahan', 'gulgowski.joanne@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(2, 'Repellendus sed alias voluptas sit.', 'Voluptate sunt quia nesciunt.', 'Quasi nulla ipsum expedita quis voluptas alias quae. Mollitia suscipit et sed doloremque reiciendis nihil veniam. Iure et ipsum aut cum.', 'Maybell O\'Connell', 'rosamond.ankunding@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(3, 'Vel earum id recusandae atque et consequatur.', 'Ut dolorum neque consequatur ratione laudantium nobis.', 'Deleniti voluptates quia nihil omnis debitis et. Velit quam quia sed quibusdam. Labore accusamus et dignissimos consectetur iusto.', 'Jon Huel Jr.', 'chance15@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(4, 'Ea repudiandae voluptates deserunt alias odit.', 'Placeat qui perferendis vel ipsa unde.', 'Sint fugit eum dolor et. Cupiditate occaecati autem voluptatem sunt non nam. Voluptatem explicabo molestias voluptatem natus nostrum iusto porro rerum. Delectus qui consequatur sed repudiandae laborum.', 'Mr. Karley Schamberger PhD', 'baby04@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(5, 'Tenetur quia architecto quis architecto excepturi.', 'Voluptatem quas qui porro.', 'Ut quaerat occaecati incidunt facilis officia alias. Consequuntur numquam optio consectetur pariatur. Distinctio impedit explicabo impedit aut et quasi cumque.', 'Prof. Sebastian Lemke', 'jaylon98@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(6, 'Sit deserunt excepturi nihil inventore sequi dolorem velit alias.', 'Est doloribus eligendi neque molestias quibusdam sequi quas.', 'Asperiores id blanditiis earum cumque. In at rerum soluta quos porro. Et libero incidunt excepturi praesentium architecto tenetur voluptatem.', 'Prof. Mekhi Beer III', 'wmccullough@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(7, 'Dolorum autem eum commodi molestiae.', 'Cupiditate aut et quis quod.', 'Nihil quo similique sed. Eius accusamus sint tempore eveniet explicabo. Dolorem laudantium nisi sint recusandae adipisci quae. Molestiae sed quis id facere tempore. Dolorem sint libero autem.', 'Miss Kari McKenzie', 'reginald.lebsack@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(8, 'Qui sed beatae ut est dolorem ullam.', 'Adipisci accusamus omnis veritatis eligendi facere fuga eos sequi.', 'Tempora accusamus est commodi nihil. Consequuntur corrupti nobis aut sint soluta labore. Est nulla repellat ut ut enim recusandae. Nam ducimus excepturi veniam maiores quam.', 'Bennie Nienow DVM', 'samara.haley@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(9, 'Expedita tempora dolores itaque quae ad dolor assumenda.', 'Aperiam rem officia architecto est deserunt autem accusantium.', 'Eum aut molestiae autem suscipit. Sit et consequatur dolore. Voluptatem est odio minus deserunt ratione. Rem dolores est in velit doloribus laborum.', 'Jammie Schoen', 'foberbrunner@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(10, 'Qui delectus reprehenderit aut ut sequi exercitationem.', 'Aut est dolorem atque quia est soluta.', 'Consectetur enim ut voluptatem asperiores quo autem est. Animi esse repellendus ducimus dolorem vitae sunt quasi. Aut atque dolores adipisci et tenetur ducimus repudiandae. Laborum eum molestias aut dolor quos dolorem qui.', 'Dr. Roy Denesik DDS', 'elenor.cartwright@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(11, 'Atque id atque expedita sit eum nihil.', 'Ut rem et dolorum nulla est ea culpa.', 'Cum placeat quo aut consequatur beatae quia quam. Alias ex tempora a autem sit error at. Quia at quis aspernatur provident incidunt. Quasi dolorem recusandae laborum ut temporibus vitae.', 'Miss Noelia Kunde', 'daisy91@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(12, 'Consectetur voluptatem vitae est maxime quia et.', 'Qui ad qui sed hic tenetur.', 'Hic explicabo accusantium sit aut. At sequi et eaque doloremque officia. Adipisci eius ab quod voluptatem.', 'Cleve Emard', 'antonina01@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(13, 'Ut aut cupiditate quidem fugiat et asperiores.', 'At est quis ut et sunt in iure.', 'Maxime iusto fuga odit velit eum. Corporis tempore maxime cum sunt. Repellat qui illum consequatur non a. Est error amet omnis et.', 'Arnold Wunsch', 'elinore95@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(14, 'Quia voluptatem saepe earum nulla voluptas iusto.', 'Voluptatum quia soluta laudantium eum cumque amet quia.', 'Et et vitae et quia dolorem quisquam quam aliquam. Voluptatem qui sapiente facere corrupti. Et sint aperiam voluptas asperiores molestiae ut.', 'Easter Lemke', 'tyree74@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(15, 'Nesciunt aliquam harum unde.', 'Sint hic explicabo minus dignissimos omnis.', 'Doloremque ut quo maxime. Sit porro laborum laborum necessitatibus quas.', 'Xzavier Koelpin V', 'hhoeger@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(16, 'Cum at eum incidunt.', 'Quo voluptates quibusdam ut quaerat quos.', 'Qui id deleniti placeat quos enim tempora. Ex ducimus ut velit laudantium numquam saepe a. Nesciunt sit consectetur ipsum. Fugit odio aut cumque rem pariatur aspernatur excepturi.', 'Myrtie Gusikowski', 'timothy51@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(17, 'Dolor aut laudantium suscipit ratione numquam.', 'Libero et iusto delectus eius minus optio est.', 'Fuga inventore earum rerum dignissimos. Tenetur et quia fugit amet. Fugit vitae repellendus aut eius incidunt quis animi esse. Ipsa doloribus facilis et aut.', 'Betsy Hackett', 'paucek.tess@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(18, 'Iusto laborum dignissimos iusto.', 'Soluta doloremque aut qui incidunt corrupti.', 'Voluptas atque iste libero repellat labore. Aspernatur quam esse laboriosam voluptatum asperiores tempora minima.', 'Jettie Parisian', 'lacey06@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(19, 'Magni magnam porro quis voluptatum.', 'Aspernatur et autem ut temporibus corrupti.', 'Magnam voluptas voluptatum inventore dolore expedita laudantium. Deleniti dolores sapiente alias porro quo porro sapiente. Aut sequi porro maxime voluptatibus facere maiores.', 'Miss Neva Douglas', 'ymann@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(20, 'Recusandae natus eveniet omnis eum quaerat harum ut.', 'Ut nisi ut sint pariatur aut est blanditiis hic.', 'Alias fugit illum laudantium illo rem doloribus aliquid. In hic voluptatem corrupti illo omnis doloribus incidunt. Facere neque veritatis autem tempora quaerat ratione.', 'Norval Walter V', 'arne39@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(21, 'Aspernatur sed dicta quia.', 'Doloremque explicabo mollitia aliquid.', 'Tempora omnis esse vel perferendis. Aut dignissimos commodi rem dolor rerum perspiciatis. Voluptatem et consequatur perspiciatis accusamus illo repellat quisquam. Odit ipsam dicta ad ab laboriosam.', 'Dr. Ricardo Collins V', 'walter.samson@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(22, 'Nostrum nisi culpa provident nihil.', 'Quam amet dolorem enim excepturi eos.', 'Qui reprehenderit dolores similique cum. Veniam laboriosam illo et autem dolorum dolorem laboriosam accusamus. Quia ad molestiae eos suscipit nam. Voluptatum rem optio cumque quia deleniti est molestiae.', 'Mrs. Brisa Schuster', 'jacobson.bradford@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(23, 'Nulla pariatur ut commodi libero quod.', 'Dolorum veritatis dolores sit saepe.', 'Voluptatibus est illo quidem deleniti. Eum consequatur magni molestias culpa dolores sint aut. Et labore in unde dolor aut quia cupiditate. Error voluptates eveniet adipisci iste. Molestiae exercitationem perferendis porro doloremque velit quis.', 'Jonatan Torp', 'vkoelpin@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(24, 'Aut et vero reiciendis distinctio.', 'Porro quae quibusdam sunt sequi nihil consequatur recusandae.', 'Autem vel eos expedita hic. Dolores veritatis dolor officia ex quo impedit.', 'Prof. Romaine Jast', 'kelvin.bauch@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(25, 'Accusantium est consectetur minima totam.', 'Corrupti nemo quisquam sint voluptates.', 'Quod illum dolores ut occaecati et excepturi distinctio. Dicta odio perferendis suscipit dolorum aut itaque. Ducimus accusamus earum nihil voluptates deserunt sunt.', 'Dedric Goyette', 'fkohler@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(26, 'Et unde quaerat tempore ratione.', 'Nulla debitis esse distinctio molestiae alias voluptatem magnam architecto.', 'Ut omnis occaecati veritatis porro reprehenderit rem. Non qui ut saepe maiores praesentium in molestiae. Incidunt beatae ipsum culpa omnis. Unde facilis doloribus ex.', 'Federico Deckow I', 'qbotsford@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(27, 'Quo natus dolor quibusdam aut beatae provident.', 'Unde ea accusamus voluptatem velit ullam cumque voluptatem.', 'Sit vero veritatis nam velit. Aut odio neque architecto sunt vero doloribus. Quia omnis laborum culpa possimus sint deserunt dicta.', 'Mrs. Courtney Pacocha', 'sydni62@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(28, 'Expedita animi voluptatibus et ratione occaecati.', 'Eos aut provident neque aut est laboriosam explicabo.', 'Ut commodi nemo et molestiae officia molestiae fugiat. Autem nostrum eius natus est totam. Itaque maxime modi ut voluptatum dolorem velit molestiae id. Doloribus aliquam aspernatur minima molestiae voluptate aut. Quis sapiente dignissimos reprehenderit nesciunt.', 'Antonette Steuber', 'dewitt.nolan@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(29, 'Non saepe nam aut culpa nisi.', 'Nisi et blanditiis a aut fuga est ducimus.', 'Quia consectetur dolores facilis ipsam laboriosam saepe atque non. Ut non ut praesentium quod facilis. Eveniet voluptatem veritatis nihil quod autem aliquam veritatis. Fuga sint sint earum.', 'Dr. Joana Morar', 'destiney51@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(30, 'Ab et id fuga.', 'Aspernatur ut excepturi praesentium id perspiciatis.', 'Quo ratione quibusdam reiciendis ut voluptas earum. Et fugiat aut natus reiciendis non eligendi aut. Recusandae reiciendis nostrum voluptates debitis laborum modi.', 'Mr. Louie Wunsch PhD', 'skye78@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(31, 'Libero corporis et sunt quia eveniet quia quia.', 'Quasi et dolorem quasi quaerat aspernatur explicabo.', 'Praesentium voluptatem ratione voluptatem quos hic assumenda distinctio. Dolore adipisci voluptatem laboriosam voluptatem omnis ut ut. Excepturi odit minus eum non doloremque quisquam rerum. Blanditiis unde nam dolor et id voluptas blanditiis.', 'Elizabeth Cremin', 'lyda62@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(32, 'Nobis temporibus alias facilis illum ut voluptatibus.', 'Veritatis consequatur quod ratione ut corrupti culpa rerum et.', 'Et esse asperiores exercitationem dignissimos. Maxime vitae provident neque ut eaque voluptate. Illum quidem est omnis vero. Vero fuga omnis commodi sit et.', 'Celine Schowalter', 'arobel@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(33, 'Est enim doloremque tempore ea iure dolorum repellendus ullam.', 'Sit nihil facere distinctio officiis ea.', 'Molestias est doloremque ratione nobis possimus cum quia. Iste ex dolore est quae quae est. Sint omnis fuga ut est. Ad et molestiae quidem minus.', 'Mr. Gaston Spencer', 'elang@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(34, 'Doloremque laudantium possimus quidem soluta nostrum asperiores.', 'Tempora ea delectus atque et provident voluptate.', 'Est qui odit voluptatem. Unde numquam nesciunt quis similique corrupti. Ab aut incidunt ut voluptatem voluptatem occaecati. Vero tempore non rem occaecati est suscipit sed.', 'Natalie Carroll', 'freinger@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(35, 'Esse voluptas ea omnis sed.', 'Est accusamus nihil atque cumque corporis adipisci velit.', 'Culpa ut ad ipsam nostrum deserunt expedita libero. Possimus repellat est vitae minus. Odit nihil velit culpa qui neque.', 'Angel Ward', 'bashirian.shanny@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(36, 'Vel et quidem autem labore sunt ad qui.', 'Unde maiores distinctio et repudiandae odio.', 'Aperiam quia officiis id qui blanditiis quas. Ut dolor neque eum. Quam voluptatem qui asperiores quo voluptas dolores explicabo exercitationem.', 'Kobe Fahey V', 'mekhi13@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(37, 'Animi sint minima ea quo aut sed.', 'Autem voluptatibus at qui et quod consequuntur quis et.', 'Vitae placeat ratione necessitatibus error aliquam inventore. Aut asperiores rem et necessitatibus nam ipsum atque. Sequi ut debitis sed et sint ut sequi.', 'Bernie Jakubowski', 'eldora95@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(38, 'Aspernatur tempora consequatur modi.', 'Porro nostrum accusantium quod ut molestiae aut nam.', 'Dolorum est facere quam impedit non praesentium culpa. Quia ipsum omnis voluptas ad quibusdam. Quis consequatur architecto ea id. Ducimus doloremque rerum omnis labore quibusdam qui et voluptatibus.', 'Minerva Parisian', 'gislason.assunta@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(39, 'Et hic dolores dolorem est blanditiis placeat aperiam eius.', 'Eos doloremque nobis dolore dolor nesciunt nemo.', 'Eos minima quaerat commodi explicabo. Omnis voluptatem officia sed nobis magni sit. Voluptas voluptatum odit quibusdam.', 'Ilene Huel', 'jody.klocko@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(40, 'Beatae aut id quia.', 'Nihil corporis velit beatae rerum similique repudiandae.', 'Est nemo quam quibusdam dolorem. Ut voluptatem consequuntur ipsa ut corrupti. Maxime vel itaque alias rerum. Modi commodi saepe rerum officiis sint exercitationem.', 'Rosalyn Lindgren', 'hester.buckridge@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(41, 'Totam et odio iste consequuntur esse.', 'Quae corporis in dolorem similique et.', 'Et dolore ullam quia culpa. Error vero quia itaque molestias voluptatem minus sunt. Iste ut ut quo molestias ex.', 'Dexter Ullrich', 'andre.okuneva@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(42, 'Et et deserunt repellendus ratione ab quasi soluta.', 'Ea facere blanditiis aut corporis fuga voluptas.', 'Sit qui qui architecto consequuntur rerum. Commodi aliquid non exercitationem. Asperiores suscipit adipisci provident laudantium repudiandae incidunt. Dolores iusto et nostrum asperiores qui expedita.', 'Estell Wyman', 'augustine.luettgen@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(43, 'Accusamus nostrum voluptatem voluptas illum.', 'Aperiam neque hic nemo laborum est aliquid magni.', 'Quae voluptatem vitae ipsa id quaerat. Qui nulla facere sequi modi. Nobis voluptas est fugiat cumque et vitae harum. Qui quos soluta pariatur odio cum tempora. Tenetur iusto voluptas quod consequatur quis.', 'Prof. Lucinda Heathcote', 'toy.sarina@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(44, 'Earum dolorem qui et ut molestiae accusamus facilis.', 'Impedit quia ea id eos omnis et ad.', 'Asperiores ab ut rerum voluptates magnam ex. Blanditiis nihil aut eos iusto impedit et nostrum.', 'Miss Claudine Leannon Sr.', 'alia82@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(45, 'Amet iste est repellat illo deleniti voluptate.', 'Dolorem quia fuga illum quam sit et sed.', 'Voluptatem veritatis quia neque ut. Ratione dignissimos est sunt officia ad iste. Consectetur et deserunt molestiae quibusdam explicabo.', 'Dr. Estrella Crona', 'doyle.reanna@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(46, 'Consequatur vel natus dolores accusamus.', 'Consequatur consectetur at fugit quidem est et dolorem.', 'Cum voluptas sed sit corporis qui. Rem facere recusandae ex.', 'Zachariah Towne', 'garrett.schumm@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(47, 'Praesentium sed sint culpa ut perferendis quis minus.', 'Omnis eum qui sunt.', 'Distinctio iusto harum porro vitae deserunt et. Rerum qui praesentium dolor praesentium dolor quisquam. Tempore sint qui maiores a.', 'Miss Elza DuBuque', 'cmccullough@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(48, 'Voluptatem saepe omnis in necessitatibus mollitia.', 'Aut nulla porro ullam porro.', 'Similique quo libero labore impedit facere cum sit. Non cupiditate consequatur blanditiis molestiae suscipit. Soluta tempore inventore beatae molestiae porro. Magnam totam officiis occaecati eveniet eligendi eligendi. Libero repellat nihil excepturi dolorem.', 'Prof. Price Schoen', 'jayne.hartmann@example.com', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(49, 'Possimus aut animi voluptatem quidem.', 'Eaque quidem vero eos asperiores voluptas veritatis ut.', 'Inventore ratione veniam quas et ut tempore nostrum. Nobis unde consequatur harum quibusdam excepturi. Consequatur adipisci architecto ut voluptas inventore exercitationem vel.', 'Jedidiah Legros', 'jaeden.heathcote@example.net', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(50, 'Veniam et eos nihil non unde voluptate soluta repellendus.', 'Harum quis dolores eum et doloremque nihil corporis.', 'Nostrum eum nihil voluptas non dolores. Aliquam consequatur dolor molestiae optio. Nihil molestias maxime voluptatem blanditiis et.', 'Vincent Stanton', 'clay.schroeder@example.org', '2024-09-26 03:46:42', '2024-09-26 03:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_09_25_174610_create_teachers_table', 1),
(6, '2024_09_25_174619_create_students_table', 1),
(7, '2024_09_25_174631_create_contacts_table', 1),
(8, '2024_09_26_063923_create_messages_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `date_of_birth`, `created_at`, `updated_at`) VALUES
(1, 'Aletha Wehner', '2016-05-06', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(2, 'Prof. Isabel Lubowitz II', '1989-04-23', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(3, 'Garnett Nicolas', '2018-03-19', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(4, 'Mrs. Esta Koepp DDS', '2019-06-21', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(5, 'Dr. Juliana O\'Keefe', '1993-10-16', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(6, 'Norris Roob', '2019-08-05', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(7, 'Penelope Dickens', '1984-01-04', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(8, 'Mrs. Daniella Moen', '1993-05-04', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(9, 'Lydia Herman', '1996-08-21', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(10, 'Tabitha Herzog', '2000-11-09', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(11, 'Warren Rodriguez', '1999-08-31', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(12, 'Casimer Balistreri', '2017-08-26', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(13, 'Coty Huels Jr.', '1993-04-13', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(14, 'Isabella Schmidt', '2015-04-27', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(15, 'Dr. Laron Ondricka', '1993-01-08', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(16, 'Larissa Mayer', '1980-08-14', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(17, 'Cindy Prohaska', '1980-03-20', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(18, 'Estell Koelpin', '1976-04-10', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(19, 'Keaton Bogan', '2006-12-15', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(20, 'Maude Funk', '1986-04-09', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(21, 'Dorian Pagac Jr.', '1995-03-15', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(22, 'Euna Nienow V', '1992-12-13', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(23, 'Jazmin Hansen I', '1972-06-09', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(24, 'Christina Mitchell', '1989-01-03', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(25, 'Dr. Antone Hartmann', '1995-08-16', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(26, 'Ebony Renner DVM', '2012-08-01', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(27, 'Miss Daija Carter III', '1993-07-24', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(28, 'Louisa Hagenes', '2000-10-21', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(29, 'Prof. Darlene Reynolds DDS', '2015-08-31', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(30, 'Miss Rachael Batz Jr.', '2007-08-29', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(31, 'Carmelo Sawayn', '2007-08-27', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(32, 'Mr. Rickey Howell', '1976-11-05', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(33, 'Mikel Torphy', '1996-11-06', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(34, 'Bailee Gibson I', '2008-03-21', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(35, 'Roger Borer', '1985-01-08', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(36, 'Rylan Muller DVM', '1996-02-18', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(37, 'Dr. Nakia Turcotte MD', '2018-03-23', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(38, 'Halle Murazik', '1998-01-16', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(39, 'Prof. Tracey Prohaska', '1974-06-28', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(40, 'Faye Effertz', '1988-11-19', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(41, 'Audreanne Luettgen III', '1988-07-26', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(42, 'Hyman Lakin V', '1996-03-07', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(43, 'Miss Nedra Kihn IV', '1998-08-15', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(44, 'Dr. Nathan Kuhn', '1978-12-02', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(45, 'Evan DuBuque', '2022-02-02', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(46, 'Lucius Gorczany', '2009-06-06', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(47, 'Cletus Hansen', '1977-03-21', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(48, 'Stefan Sporer IV', '1997-08-22', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(49, 'Jerry Boyer', '2013-06-25', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(50, 'Prof. Ozella Pfannerstill', '2023-12-16', '2024-09-26 03:46:42', '2024-09-26 03:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `email`, `subject`, `created_at`, `updated_at`) VALUES
(1, 'Dr. Maye Langosh', 'crona.edmond@example.com', 'suscipit', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(2, 'Unique Rodriguez', 'gorczany.tyshawn@example.com', 'et', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(3, 'Sibyl Daugherty', 'umckenzie@example.org', 'consequuntur', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(4, 'Joanne Berge IV', 'wiza.icie@example.org', 'reiciendis', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(5, 'Alysha Volkman Sr.', 'ceasar.morar@example.com', 'rerum', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(6, 'Prof. Tyrell Kilback II', 'afritsch@example.com', 'veniam', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(7, 'Cheyanne Crooks', 'wkeeling@example.org', 'sunt', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(8, 'Dr. Grace Medhurst', 'lvandervort@example.com', 'fugit', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(9, 'Jillian Nitzsche', 'kiarra.schuppe@example.com', 'voluptas', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(10, 'Jocelyn Jacobson', 'blakin@example.org', 'vero', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(11, 'Dr. Donavon Crona', 'carolyne.bechtelar@example.org', 'tempora', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(12, 'Rico McGlynn', 'rowan51@example.net', 'laboriosam', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(13, 'Wilber O\'Connell', 'abechtelar@example.org', 'autem', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(14, 'Montana Bahringer', 'thegmann@example.org', 'et', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(15, 'Erika Klein', 'ytrantow@example.com', 'magnam', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(16, 'Dr. Kristian Schultz', 'kschaden@example.com', 'nam', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(17, 'Prof. Kennedy Hoeger', 'orn.florine@example.net', 'sed', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(18, 'Miss Nichole Howell', 'vschamberger@example.net', 'dolorem', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(19, 'Mr. Jayden Reichel', 'ortiz.terrell@example.org', 'et', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(20, 'Parker Batz', 'fosinski@example.com', 'consequatur', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(21, 'Dr. Louisa Champlin', 'raynor.amira@example.net', 'ut', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(22, 'Marcelina Swaniawski', 'kub.kelsi@example.com', 'dolor', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(23, 'Vicky Botsford', 'carey.price@example.net', 'velit', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(24, 'Prof. Lazaro Sporer Sr.', 'alize.howell@example.org', 'minus', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(25, 'Miss Madaline Konopelski', 'saul.hermann@example.com', 'ullam', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(26, 'Dulce Sporer IV', 'adrain.thiel@example.net', 'asperiores', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(27, 'Lue Hodkiewicz', 'hector72@example.net', 'sint', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(28, 'Cordelia Maggio II', 'ystanton@example.com', 'laudantium', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(29, 'Dr. Kaylie Wyman Jr.', 'qbotsford@example.net', 'minima', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(30, 'Martine Rippin', 'pernser@example.net', 'enim', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(31, 'Willard Pollich', 'langworth.darius@example.com', 'libero', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(32, 'Jacky White', 'yward@example.org', 'dolorem', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(33, 'Mrs. Pauline Barton III', 'alivia.mills@example.net', 'officiis', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(34, 'Louvenia Fay', 'koss.martin@example.com', 'autem', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(35, 'Shemar Bergnaum', 'rosina13@example.com', 'ex', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(36, 'Electa Von IV', 'littel.callie@example.net', 'nihil', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(37, 'Mr. Stone Mertz', 'mustafa.harvey@example.com', 'nostrum', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(38, 'Prof. Ayla Heaney', 'leone84@example.com', 'sit', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(39, 'Prof. Nella Gleason', 'thora.schaden@example.net', 'et', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(40, 'Chad Willms', 'marquardt.birdie@example.org', 'et', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(41, 'Dallin Quigley', 'omedhurst@example.com', 'molestiae', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(42, 'Einar Paucek DVM', 'lockman.amber@example.com', 'eum', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(43, 'Magdalena Jones V', 'savion.halvorson@example.com', 'ad', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(44, 'Ms. Aiyana Kohler DDS', 'bartoletti.mabel@example.org', 'temporibus', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(45, 'Earlene Gleason', 'lulu46@example.com', 'rerum', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(46, 'Isadore Crooks', 'laisha.dooley@example.net', 'voluptatum', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(47, 'Jammie Towne', 'wlindgren@example.com', 'minima', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(48, 'Desmond Parisian', 'rod.kulas@example.net', 'dicta', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(49, 'Barton Effertz', 'estelle.lueilwitz@example.org', 'ut', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(50, 'Shane Kiehn', 'ottilie.stamm@example.org', 'modi', '2024-09-26 03:46:42', '2024-09-26 03:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Sandy Ziemann', 'schulist.alessia@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'ZXJRGWbBeC', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(2, 'Sibyl Towne', 'dangelo.hackett@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'jhyb8CdAre', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(3, 'Imelda Corwin II', 'lawson45@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'nZXp652zZ5', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(4, 'Miss Hosea Turner', 'meggie95@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'YfVLGG6sBQ', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(5, 'Moshe Hackett', 'lavada.brekke@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'jggEZcz7kq', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(6, 'Prof. Matt McDermott', 'abalistreri@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'pp1QhreJKc', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(7, 'Magnolia Russel', 'jed.lubowitz@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '5VXNufQkN0', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(8, 'Prof. Deshaun Hodkiewicz PhD', 'collins.rusty@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'pb15fsJ1vF', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(9, 'Mrs. Carissa Brakus', 'wilbert.wolff@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'JCxiM3KgvZ', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(10, 'Stephanie McGlynn', 'gust24@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'ZlIHlhz1qQ', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(11, 'Alejandra Wuckert', 'leslie.sporer@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'vQ4Cvi0Cmt', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(12, 'Dr. Alvina Lesch Sr.', 'baumbach.jose@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'qJdB7JhbVc', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(13, 'Dr. Amalia Huel DVM', 'sigmund.sanford@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'CWPitOknNn', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(14, 'Dr. Don Wolff', 'medhurst.providenci@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'dY3KAjougq', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(15, 'Asia Beer', 'golda.torphy@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'oDorIywUtC', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(16, 'Lilly Cole', 'wilson61@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'xRnuAYjj4n', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(17, 'Evelyn Ullrich DVM', 'jan.dibbert@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'hhHkNaDE44', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(18, 'Kathryn Kuvalis', 'jacobs.destiney@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'CjFj8DankN', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(19, 'Stacy Klein Jr.', 'joshuah33@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'c2kirN0AN9', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(20, 'Dr. Norma Keeling', 'hwuckert@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '24MEUv2NDG', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(21, 'Prof. Abigail Huel', 'mitchell.mckenna@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '8rYts8ZAYz', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(22, 'Zechariah Armstrong', 'ryan98@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '53mS20Ifvj', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(23, 'Christa Koch II', 'jace.reichert@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'URAWbsp1XG', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(24, 'Mr. Maxwell Dietrich Jr.', 'elouise.bruen@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '65UYHgh9qf', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(25, 'Amber Wyman', 'hmcglynn@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'QxUCFLRVyS', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(26, 'Prof. Caterina Braun', 'okuneva.aletha@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'MKL9CJZdtf', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(27, 'Shanon Green PhD', 'estell87@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'hakAfYG7nW', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(28, 'Prof. Dario Wisozk DVM', 'electa21@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'hDkWRJj4gy', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(29, 'Prof. Crawford Williamson DDS', 'oren.goyette@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'LL5mibVGai', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(30, 'Clyde Schowalter', 'clarissa65@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'y1VoENReYy', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(31, 'Jeramy Nitzsche', 'schulist.keyshawn@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '9EcwlBIXyc', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(32, 'Ms. Eloisa Funk Sr.', 'hamill.chadrick@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'LF7ffGe4xL', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(33, 'Torey Graham', 'russel.lyric@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '6hXI6LfPRc', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(34, 'Evangeline Raynor', 'elmore.gulgowski@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'mWucE1mfDo', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(35, 'Mr. Boris Swift', 'hspencer@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'IiLfb8adT5', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(36, 'Mr. Marvin Gottlieb I', 'kfeeney@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'AuJo2fWVwV', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(37, 'Neal Murray', 'iaufderhar@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'V1SMErJ3ED', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(38, 'Kasey Spinka', 'graham.merle@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'L4EmrSntxN', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(39, 'Alba Botsford', 'dooley.aleen@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '6NxrX21rxV', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(40, 'Gunner Harvey', 'dcartwright@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'guhzK3kHAB', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(41, 'Prof. Gilda Larkin I', 'penelope04@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'pYuDQbaY2R', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(42, 'Rafaela Upton', 'howe.nolan@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '7Vn89CTj1Y', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(43, 'Werner Hoppe', 'blanda.milton@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'VZbFpQexH4', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(44, 'Charley Littel Sr.', 'kenyon.reinger@example.net', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'IiRcdUpk1C', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(45, 'Heber Kessler', 'icole@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'ZHfN59iRTD', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(46, 'Florian Nikolaus', 'wilderman.dedrick@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '4AEg4r93rc', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(47, 'Arnoldo Gerlach PhD', 'ohamill@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', '1ay3GwUApt', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(48, 'Mohammed Lebsack', 'casimir.zulauf@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'P5fErmlgnp', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(49, 'Dario Torphy', 'rafael22@example.com', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'G8aPGXvO3B', '2024-09-26 03:46:42', '2024-09-26 03:46:42'),
(50, 'Miss Marilie Labadie II', 'pernser@example.org', '2024-09-26 03:46:42', '$2y$12$83Us4VWXMTGviUxcaYvP3umb6zCh1caDO9fK/yLq8iOpr5q.Ny9bK', 'FPP9pNnSzr', '2024-09-26 03:46:42', '2024-09-26 03:46:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `teachers_email_unique` (`email`);

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
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
