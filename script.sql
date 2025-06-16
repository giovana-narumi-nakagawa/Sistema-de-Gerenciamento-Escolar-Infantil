CREATE TABLE Usuario ( id_usuario SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, tipo_usuario VARCHAR(50) NOT NULL );

CREATE TABLE Responsavel ( id_responsavel SERIAL PRIMARY KEY, nome_completo VARCHAR(100) NOT NULL, telefone VARCHAR(20), email VARCHAR(100), endereco TEXT );

CREATE TABLE Chatbot_Interacao ( id_chatbot_interacao SERIAL PRIMARY KEY, id_responsavel INTEGER NOT NULL REFERENCES Responsavel(id_responsavel), mensagem_usuario TEXT NOT NULL, resposta_chatbot TEXT NOT NULL, data_hora TIMESTAMP NOT NULL );

CREATE TABLE Turma ( id_turma SERIAL PRIMARY KEY, nome_turma VARCHAR(100) NOT NULL, horario VARCHAR(50), id_professor_responsavel INTEGER NOT NULL REFERENCES Usuario(id_usuario) );

CREATE TABLE Aluno ( id_aluno SERIAL PRIMARY KEY, nome_completo VARCHAR(100) NOT NULL, numero_matricula VARCHAR(50) UNIQUE NOT NULL, id_turma INTEGER NOT NULL REFERENCES Turma(id_turma), id_responsavel INTEGER NOT NULL REFERENCES Responsavel(id_responsavel) );

CREATE TABLE Atividade ( id_atividade SERIAL PRIMARY KEY, descricao TEXT NOT NULL, data_realizacao DATE NOT NULL, id_turma INTEGER NOT NULL REFERENCES Turma(id_turma) );

CREATE TABLE Presenca ( id_presenca SERIAL PRIMARY KEY, id_aluno INTEGER NOT NULL REFERENCES Aluno(id_aluno), id_atividade INTEGER NOT NULL REFERENCES Atividade(id_atividade), presente BOOLEAN NOT NULL, data DATE NOT NULL );