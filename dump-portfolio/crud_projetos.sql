-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `projetos`
--

DROP TABLE IF EXISTS `projetos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projetos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `descricao` text,
  `link` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projetos`
--

LOCK TABLES `projetos` WRITE;
/*!40000 ALTER TABLE `projetos` DISABLE KEYS */;
INSERT INTO `projetos` VALUES (1,'Projeto API 2° Semestre - HELPNEI','Dashboard Web com Dados de Impacto: Trata-se de um recurso desenvolvido para visualizar os principais indicadores de patrocinadores que fazem uso da plataforma Helpnei, evindeciando o crescimento e o engajamento dessas empresas. O dashboard exibe informações estratégicas em tempo real, incluindo: Número total de lojas criadas, Quantidade de usuários impactados, Distribuição geográfica das lojas (cidades atendidas). Objetivo: Criar um Dashboard Web que apresente dados essenciais para patrocinadores, stakeholders e administradores, garantindo um alto nível de usabilidade e performance.','https://github.com/ORBIS-2DSM-API/orbis-main','efeito-doppler-og.jpg'),(2,'Projeto API 1° Semestre - DEMOQUERYCY','O projeto nasceu em resposta à problemática da falta de engajamento político fora do período eleitoral e à falsa sensação de transparência no cenário democrático, onde muitos cidadãos confiam cegamente nas promessas feitas pelos candidatos durante essas campanhas. Nessa prerrogativa, buscamos evidenciar a atuação de cada político na câmara municipal de São José dos Campos. Nesse contexto, é inevitável refletir sobre os modelos democráticos que moldaram nossa organização social. Na democracia ateniense, por exemplo, os cidadãos, ainda que representando apenas uma pequena parcela do corpo social, exerciam o poder de decisão política de forma direta. Assim, eles defendiam seus interesses de maneira ativa no cenário político. Entretanto, conforme as organizações políticas se expandiram para níveis nacionais, a prática da democracia direta tornou-se inviável. Reunir milhares de pessoas em uma praça para deliberar é impossível, e por isso elegemos representantes que, em teoria, defendem nossos interesses. Portanto, diante da falta de engajamento político e dos desafios estruturais da democracia atual, é notório que apenas um povo informado é capaz de realizar o exercício da democracia e, desse modo, terceirizar a defesa de seus direitos e reivindicações através de um representante. Pensando nisso, desenvolvemos este software com o objetivo de, por meio do ambiente digital, reunir informações relevantes para que o eleitorado conheça melhor seus candidatos e suas ações no poder público. Dessa forma, podemos identificar quais políticos realmente defendem os interesses da população.','https://github.com/AgileKrakens/DemoQuerycy','demoquerycy_logo.png'),(3,'Desafio De Desenvolvimento Web I','Este projeto consiste no desenvolvimento de um site fictício para uma universidade, focado em oferecer uma experiência de navegação intuitiva e informativa para estudantes, professores e visitantes. A plataforma inclui páginas principais como Home, Sobre, e Contato, além de áreas específicas para acesso ao perfil dos alunos e professores, informações de cursos e eventos acadêmicos. Utilizando HTML, CSS, Flask e JavaScript, o site apresenta um design responsivo e moderno, priorizando usabilidade e clareza na organização das informações. O objetivo é simular um ambiente online completo e funcional, aplicando conhecimentos em desenvolvimento web e técnicas de layout e navegação com Bootstrap.','https://github.com/KwMajor/desafio2','unesindex.png'),(6,'Projeto Teste','Um projeto teste para editar.','https//www.google.com','/imagens/sua-foto');
/*!40000 ALTER TABLE `projetos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-20  2:20:27
