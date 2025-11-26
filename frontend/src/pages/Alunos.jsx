import { useState } from 'react';
import AlunoForm from '../components/AlunoForm';
import AlunoList from '../components/AlunoList';
import api from '../api/api';

export default function Alunos() {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const handleSubmit = async (aluno) => {
    if (alunoSelecionado) {
      await api.put(`/aluno/${alunoSelecionado.id}`, aluno);
      setAlunoSelecionado(null);
    } else {
      await api.post('/aluno', aluno);
    }
  };

  return (
    <div>
      <AlunoForm onSubmit={handleSubmit} alunoSelecionado={alunoSelecionado} />
      <AlunoList onEdit={setAlunoSelecionado} />
    </div>
  );
}
