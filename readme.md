# Sistema de gerenciamento escolar infantil
O projeto consiste em um Sistema de Gerenciamento Escolar Infantil, com o objetivo de facilitar o gerenciamento de informações relacionadas a alunos, turmas, professores e atividades escolares.


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

- Linguagem: Node.js (JavaScript)

- Framework: Express.js

- Banco de Dados: PostgreSQL

- ORM: Sequelize (ou outro, dependendo do que usaram)

- Ambiente de Containerização: Docker e Docker Compose

- Servidor Web: Nginx (proxy reverso)

- Outros: Dotenv, Nodemon, entre outras bibliotecas NPM

## Estrutura do projeto:

```plaintext
Sistema-de-Gerenciamento-Escolar-Infantil/
📦 raiz-do-projeto
├── 📁 app
│   ├── 📁 controllers
│   │   ├── alunoController.js
│   │   ├── atividadeController.js
│   │   ├── chatbotController.js
│   │   ├── presencaController.js
│   │   ├── responsavelController.js
│   │   ├── turmaController.js
│   │   └── usuarioController.js
│   ├── 📁 middleware
│   │   └── auth.js
│   └── 📁 models
│       ├── alunoModel.js
│       ├── atividadeModel.js
│       ├── chatbotModel.js
│       ├── presencaModel.js
│       ├── responsavelModel.js
│       ├── turmaModel.js
│       └── usuarioModel.js
├── 📁 bootstrap
│   └── app.js
├── 📁 config
│   ├── constants.js
│   ├── db.js
│   ├── sequelize_relations.js
│   ├── sequelize.js
│   └── swagger.js
├── 📁 docker
│   ├── Dockerfile
│   ├── Dockerfile-nginx
│   └── Dockerfiledb
├── 📁 docs
│   ├── 01-loginDoc.js
│   ├── 02-colaboradorDoc.js
│   ├── 03-projetoDoc.js
│   ├── 04-todoDoc.js
│   ├── 05-colaboradorProjetoDoc.js
│   └── 06-userDoc.js
├── 📁 Mer e Der
│   ├── der.jpg
│   └── mer.jpg
├── 📁 node_modules
├── 📁 public
│   └── index.js
├── 📁 routes
│   ├── 📁 api
│   │   ├── api.js
│   │   ├── routes.js
│   │   └── web.js
│   ├── alunoRoutes.js
│   ├── atividadeRoutes.js
│   ├── chatbotRoutes.js
│   ├── presencaRoutes.js
│   ├── responsavelRoutes.js
│   ├── turmaRoutes.js
│   └── usuarioRoutes.js
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── insomnia.yaml
├── n-nginx.conf
├── package.json
├── package-lock.json
├── readme.md
├── script.sql
├── server.js
└── swaggerJson.js
```
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

Caso apareça a versão do Docker, a instalação deu certo.

## Como usar:
Pré-requisitos:
Ter o Docker , Docker Compose e o MondoDB instalados na máquina.

Passo 1: Construindo as Imagens Docker
Dentro da raiz do projeto (onde está o seu Dockerfile e docker-compose.yml), execute o seguinte comando para construir as imagens:

```sh
docker compose build
```

Passo 2: Subindo os Containers (Backend + Banco de Dados)
Depois da build, inicie os containers com:

```sh
docker compose up
```
Antes do próximo passo, aguarde carregar totalmente, e em seguida, aperte as teclas ctrl + c

Se quiser rodar os containers em segundo plano:
```sh
docker compose up -d
```
Passo 3: Radar o servidor com:
```sh
node server.js
```


Passo 4: Verificar se o Backend está rodando
Por padrão, o backend ficará disponível em:

```sh
http://localhost:3000/
```

Passo 5: Interagindo com as Rotas da API
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
Extensões recomendadas
ESLint — para garantir a padronização do código e identificar erros
GitLens — para facilitar o trabalho com Git dentro do VS Code
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

