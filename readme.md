# Sistema de gerenciamento escolar infantil
Repositório da interface front-end desenvolvida em React + TypeScript + Vite, consumindo a API REST do backend do grupo, com implementação de WebSocket e hook customizado.

# Objetivo da Etapa
Esta fase do projeto tem como objetivo desenvolver o front-end completo do Sistema de Gerenciamento Escolar Infantil, dando continuidade ao backend entregue no semestre anterior.

# Instruções de execução
1. Clonar o repositório:

```sh
git clone https://github.com/giovana-narumi-nakagawa/Sistema-de-Gerenciamento-Escolar-Infantil.git
```

2. Entrar na pasta do projeto:

```sh
cd Sistema-de-Gerenciamento-Escolar-Infantil
```
   
3. Rode com o Docker:

```sh
docker compose up --build
```

4. Após executar o docker, acesse:

```sh
http://localhost:3000/alunos
```

Instruções de build com o Node:

Primeiro, na raiz da pasta pelo terminal, baixe o node-fetch:

```sh
pip install node-fetch
```

Em seguida, rode:

```sh
node server.js
```

# Portas usadas:

1.Criar Aluno:

```sh
http://localhost:3000/alunos/create
```

2. Criar Usuario:
   
  ```sh
http://localhost:3000/usuarios/create
```

# Instruções de build (Vite).
1. Baixe as dependências:
   
```sh
npm install
```

2. Rode o Vite:
   
```sh
npm run dev
```

# Tecnologias utilizadas
- Front-end 

React + TypeScript (.tsx / .ts)

Vite (pré-compilador)

Axios (requisições HTTP)

React Router DOM (roteamento)

WebSocket API nativa

Custom Hook (useWebSocket)

EJS (views obrigatórias da prova)

- Back-end (já desenvolvido no semestre anterior)

Node.js (JavaScript)

Express.js (framework principal)

PostgreSQL (banco de dados relacional)

Sequelize (ORM)

Docker & Docker Compose (containerização)

Nginx (proxy reverso)

Dotenv (variáveis de ambiente)

Nodemon (hot reload em desenvolvimento)

#Entidades Escolhidas para o CRUD

O grupo escolheu implementar o CRUD completo das seguintes entidades:

- Alunos

- Usuário

# WebSocket
O projeto utiliza um WebSocket para permitir comunicação em tempo real entre o front-end e o backend.
Para organizar essa conexão, foi criado um hook customizado em React, chamado useWebSocket, que encapsula toda a lógica da conexão.
