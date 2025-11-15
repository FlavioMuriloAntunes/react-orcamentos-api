# Sistema de Gerenciamento de Orçamentos (Full-Stack)

![Status](https://img.shields.io/badge/status-finalizado-brightgreen)
![Disciplina](https://img.shields.io/badge/disciplina-Desenvolvimento%20Web-blue)
![Universidade](https://img.shields.io/badge/universidade-UEPG-lightgrey)
![Tecnologias](https://img.shields.io/badge/Java-17-orange)
![Framework](https://img.shields.io/badge/Spring%20Boot-3+-green)
![Frontend](https://img.shields.io/badge/React-Vite-blue)

## Trabalho realizado pelos alunos Flávio Murilo Antunes, Lorenzo Bazeggio Licodiedoff e Pedro Alex Ribeiro Vieira

## 📜 Sobre o Projeto

Este é um projeto **full-stack** para gerenciamento de orçamentos, composto por um **back-end RESTful** desenvolvido em **Spring Boot** e um **front-end** em **React** com **Vite**.  

O objetivo do sistema é fornecer uma interface para **cadastrar, listar, atualizar e deletar orçamentos**. A comunicação com o banco de dados PostgreSQL é gerenciada pelo **Spring Data JPA** e **Hibernate**.  

### Funcionalidades Principais

**Back-end (API RESTful)**:
- **Listar Orçamentos:** Retorna todos os orçamentos cadastrados.
- **Criar Orçamento:** Adiciona um novo orçamento ao banco de dados.
- **Atualizar Orçamento:** Modifica um orçamento existente com base no ID.
- **Deletar Orçamento:** Remove um orçamento do banco de dados.

**Front-end (React)**:
- **Navegação:** Utiliza `react-router-dom` para navegação entre páginas sem recarregar o site.
- **Páginas:** Inclui páginas para "Cadastrar", "Listar" e "Atualizar" orçamentos.
- **Integração:** Consome a API back-end usando `fetch` para realizar as operações CRUD.

## 🛠️ Tecnologias Utilizadas

**Back-end**
- Linguagem: Java 17
- Framework: Spring Boot 3+
- Dependências Spring: Spring Web, Spring Data JPA, Hibernate, PostgreSQL Driver, Spring Boot DevTools
- Banco de Dados: PostgreSQL
- Gerenciador de Dependências: Maven

**Front-end**
- Framework: React
- Ferramenta de Build: Vite
- Linguagem: JavaScript
- Rotas: React Router DOM
- Estilização: CSS

## 🚀 Como Rodar o Projeto

**Back-end**
1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Entre na pasta do back-end: `cd orcamentos-api`
3. Configure o banco PostgreSQL (usuário, senha e database)
4. Rode a aplicação: `mvn spring-boot:run`
5. Endpoints disponíveis em: `http://localhost:8080/Orcamento`

**Front-end**
1. Entre na pasta do front-end: `cd orcamentos-frontend`
2. Instale as dependências: `npm install`
3. Rode a aplicação: `npm run dev`
4. Acesse no navegador: `http://localhost:5173`


