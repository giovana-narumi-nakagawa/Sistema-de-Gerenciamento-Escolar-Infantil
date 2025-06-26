CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    tipo_usuario VARCHAR(50)
);

CREATE TABLE Responsavel (
    id_responsavel INT PRIMARY KEY,
    nome_responsavel VARCHAR(100),
    telefone_responsavel VARCHAR(20),
    email_responsavel VARCHAR(100),
    endereco_responsavel VARCHAR(200),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Chatbot_Interacao (
    id_chatbot_interacao INT PRIMARY KEY,
    id_responsavel INT,
    mensagem_usuario TEXT,
    resposta_chatbot TEXT,
    data_hora TIMESTAMP,
    FOREIGN KEY (id_responsavel) REFERENCES Responsavel(id_responsavel)
);

CREATE TABLE Professor (
    id_professor INT PRIMARY KEY,
    nome_professor VARCHAR(100),
    materia VARCHAR(100),
    endereco_professor VARCHAR(200)
);

CREATE TABLE Turma (
    id_turma INT PRIMARY KEY,
    nome_turma VARCHAR(100),
    horario VARCHAR(50),
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);

CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY,
    nome_aluno VARCHAR(100),
    id_turma INT,
    id_responsavel INT,
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma),
    FOREIGN KEY (id_responsavel) REFERENCES Responsavel(id_responsavel)
);

CREATE TABLE Atividade (
    id_atividade INT PRIMARY KEY,
    id_professor INT,
    id_turma INT,
    descricao TEXT,
    data DATE,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor),
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma)
);

CREATE TABLE Presenca (
    id_presenca INT PRIMARY KEY,
    id_aluno INT,
    id_turma INT,
    id_professor INT,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma),
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);

INSERT INTO Usuario (id_usuario, nome, email, tipo_usuario)
VALUES 
(1, 'Davi Campoi', 'davi@email.com', 'responsavel'),
(2, 'Paulo Vinicius', 'vinicius@email.com', 'professor');

INSERT INTO Responsavel (id_responsavel, nome_responsavel, telefone_responsavel, email_responsavel, endereco_responsavel, id_usuario)
VALUES 
(1, 'Davi Campoi', '11999999999', 'davi@email.com', 'Rua das Flores, 123', 1);

INSERT INTO Professor (id_professor, nome_professor, materia, endereco_professor)
VALUES 
(1, 'Paulo Vinicius', 'Matemática', 'Av. Brasil, 456');

INSERT INTO Turma (id_turma, nome_turma, horario, id_professor)
VALUES 
(1, 'Turma A', '08:00 - 10:00', 1);

INSERT INTO Aluno (id_aluno, nome_aluno, id_turma, id_responsavel)
VALUES 
(1, 'Giovana Narumi', 1, 1),
(2, 'Nicolas Henrique', 1, 1);

INSERT INTO Atividade (id_atividade, id_professor, id_turma, descricao, data)
VALUES 
(1, 1, 1, 'Atividade de matemática básica', '2025-06-10'),
(2, 1, 1, 'Prova de revisão', '2025-06-25');

INSERT INTO Presenca (id_presenca, id_aluno, id_turma, id_professor)
VALUES 
(1, 1, 1, 1),
(2, 2, 1, 1);

INSERT INTO Chatbot_Interacao (id_chatbot_interacao, id_responsavel, mensagem_usuario, resposta_chatbot, data_hora)
VALUES 
(1, 1, 'Qual o horário da próxima reunião?', 'A próxima reunião será dia 30 às 18h.', NOW());
