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

## Como Instalar/Configurar:
Guia de Instalação das Ferramentas Necessárias
Antes de rodar o projeto, você precisa instalar algumas ferramentas fundamentais para garantir que o sistema funcione, o docker e o docker compose.

Como instalar o Docker no windows

Acesse https://docs.docker.com/docker-for-windows/install/

Baixe o instalador do Docker Desktop para Windows

Execute o instalador e siga as instruções

Depois de instalado, reinicie o computador (se solicitado)

Para verificar a instalação, abra o PowerShell ou Prompt de Comando e digite:

```sh
docker --version
```

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

## Contribuição:

Como contribuir
Fork este repositório para sua conta pessoal no GitHub.

Clone o fork para sua máquina local:

```sh
git clone https://github.com/giovana-narumi-nakagawa/Sistema-de-Gerenciamento-Escolar-Infantil.git
```

```sh
cd Sistema-de-Gerenciamento-Escolar-Infantil
```

Crie uma nova branch para a sua feature ou correção:

```sh
git checkout -b minha-feature
```

Faça as alterações desejadas, seguindo as diretrizes abaixo.
Commit suas mudanças com mensagens claras e descritivas:

```sh
git commit -m "Descrição clara do que foi feito"
```

Envie as mudanças para o seu fork:

```sh
git push origin minha-feature
```

Abra um Pull Request neste repositório principal, detalhando as alterações feitas.

Para garantir uma experiência consistente e produtiva no desenvolvimento, recomendamos o uso do Visual Studio Code, que utilizamos para escrever e organizar o código do projeto.
Docker — para gerenciar containers e imagens diretamente do editor
PostgreSQL — para facilitar a conexão, visualização e gerenciamento do banco de dados PostgreSQL usado no projeto

Regras para Pull Requests
Certifique-se de que o código está bem testado e funcionando corretamente.

Mantenha a consistência com o estilo de código do projeto.

Explique o motivo da alteração no PR para facilitar a revisão.

Evite alterações muito grandes ou múltiplas funcionalidades em um único PR.

Responda aos comentários dos revisores de forma clara e respeit

Testes
Sempre que possível, escreva testes para as funcionalidades adicionadas ou corrigidas.

Garanta que os testes existentes continuem passando.

