# Portfólio Digital com Node.js e EJS


### Status do Projeto: Em Desenvolvimento 🚀

---

## 📖 Sobre o Projeto

Este projeto é um portfólio pessoal totalmente digital, desenvolvido para apresentar minhas informações, projetos e formação de maneira profissional e facilmente gerenciável. O grande diferencial é que todo o conteúdo do site (textos, links, projetos, etc.) é buscado de um banco de dados MySQL e pode ser completamente gerenciado através de uma API RESTful, sem a necessidade de alterar o código-fonte para fazer atualizações.

A aplicação foi construída utilizando Node.js com o framework Express para o backend, e EJS (Embedded JavaScript) como template engine para renderizar as páginas dinamicamente no lado do servidor.

---

## ✨ Funcionalidades Principais

* **Conteúdo 100% Dinâmico:** Todas as seções do site (Sobre, Projetos, Formação) são alimentadas por um banco de dados.
* **Gerenciamento via API:** Uma API RESTful completa permite adicionar, editar, visualizar e deletar o conteúdo do portfólio.
* **Páginas Renderizadas no Servidor (SSR):** Utilização de EJS para construir as páginas no backend, garantindo um carregamento rápido e boa performance.
* **Estrutura Organizada:** Código dividido de forma lógica entre rotas de visualização e rotas de API.

---

## 🛠️ Tecnologias Utilizadas

Esta é a stack de tecnologias que dá vida ao projeto:

| Tecnologia      | Descrição                                                    |
| :-------------- | :----------------------------------------------------------- |
| **Node.js** | Ambiente de execução para o JavaScript no servidor.          |
| **Express.js** | Framework para a construção do servidor web e da API.        |
| **EJS** | Template engine para criar HTML dinâmico com JavaScript.     |
| **MySQL** | Banco de dados relacional para armazenamento de todo o conteúdo. |
| **HTML5 & CSS3**| Estrutura e estilização das páginas.                         |
| **Bootstrap** | Framework CSS para componentização e responsividade.       |
| **Thunder Client**| Ferramenta utilizada para testar e interagir com a API.      |
| **GitHub** | Plataforma de controle de versão e hospedagem do código.     |

---

## ⚙️ Endpoints da API

A API é o cérebro por trás da gerenciabilidade do portfólio. Para um guia detalhado sobre como usar cada endpoint para adicionar, editar e deletar conteúdo, consulte o `leiaMe.txt` no repositório.

**Resumo dos principais endpoints:**

* `GET /api/projects` - Lista todos os projetos.
* `POST /api/projects` - Adiciona um novo projeto.
* `GET /api/formacao` - Lista todas as formações.
* `POST /api/formacao` - Adiciona uma nova formação.
* `PUT /api/about` - Atualiza a seção "Sobre Mim".

---

## 🚀 Como Rodar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo, caso tenha alguma dúvida leia o arquivo txt !!!

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/KwMajor/portfolio
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure o Banco de Dados:**
    * Crie um banco de dados MySQL.
    * Execute os scripts SQL presentes no repositório para criar as tabelas (`about_index`, `projetos`, `formacao`).
    * Configure suas credenciais do banco de dados.

5.  **Inicie o servidor:**
    ```bash
    node app.js
    ```
6.  Abra seu navegador e acesse `http://localhost:3000`.

---

## 🤝 Contribuidores

* **Autor:** Matheus Ramos ([@KwMajor](https://github.com/KwMajor))
* **Orientadores:** Jean Carlos e Claudio Etelvino

---

## 📬 Contato

**Matheus Ramos**

* **E-mail:** matheuskwta@gmail.com
* **LinkedIn:** [https://www.linkedin.com/in/matheus-felipe-0832b52ba/](https://www.linkedin.com/in/matheus-felipe-0832b52ba/)

