# Sistema de gerenciamento escolar infantil
Nessa etapa do projeto fizemos o front end do sistema iniciado no bimestre passado. Adicionamos views completas de CRUD para duas entidades já existentes na API.

## Como abrir o repositório na sua máquina
1. Clonar o repositório:

   ```sh
   git clone https://github.com/giovana-narumi-nakagawa/Sistema-de-Gerenciamento-Escolar-Infantil.git
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd Sistema-de-Gerenciamento-Escolar-Infantil
   ```
## Tecnologias utilizadas
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

## Como usar:
Pré-requisitos:
Ter o Docker , Docker Compose e o MondoDB instalados na máquina.

Passo 1: Instalar o npm e todas as suas dependências:
```sh
npm install
```

Passo 2: Construindo as Imagens Docker
Dentro da raiz do projeto (onde está o seu Dockerfile e docker-compose.yml), execute o seguinte comando para construir as imagens:

```sh
docker compose build
```

Passo 3: Subindo os Containers (Backend + Banco de Dados)
Depois da build, inicie os containers com:

```sh
docker compose up
```
Antes do próximo passo, aguarde carregar totalmente, e em seguida, aperte as teclas ctrl + C

Para rodar os containers em segundo plano:
```sh
docker compose up -d
```
Passo 4: Rodar o servidor com:
```sh
node server.js
```

Passo 5: Verificar se o Backend está rodando
Por padrão, o backend ficará disponível em:

```sh
http://localhost:3000/
```

Passo 6: Interagindo com as Rotas da API
Temos alguns exemplos de como você pode testar as rotas usando um cliente HTTP, como por exemplo o Insomnia

Recurso    Método    URL    Exemplo de Uso
Listar todos os alunos    GET    http://localhost:3000/alunos    Retorna lista de alunos

Cadastrar novo aluno    POST    http://localhost:3000/alunos    Enviar JSON com os dados do aluno

Atualizar um aluno    PUT    http://localhost:3000/alunos/%7Bid%7D    Atualiza aluno com ID específico

Deletar um aluno    DELETE    http://localhost:3000/alunos/%7Bid%7D    Remove aluno com ID específico
