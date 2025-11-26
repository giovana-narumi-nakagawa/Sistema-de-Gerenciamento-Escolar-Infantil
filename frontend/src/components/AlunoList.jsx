import { useState, useEffect } from 'react';
import api from '../api/api';

export default function AlunoList({ onEdit }) {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = async () => {
    const res = await api.get('/aluno');
    setAlunos(res.data);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/aluno/${id}`);
    fetchAlunos();
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} ({aluno.idade} anos)
            <button onClick={() => onEdit(aluno)}>Editar</button>
            <button onClick={() => handleDelete(aluno.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
