import { useState, useEffect } from 'react';

export default function AlunoForm({ onSubmit, alunoSelecionado }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  useEffect(() => {
    if (alunoSelecionado) {
      setNome(alunoSelecionado.nome);
      setIdade(alunoSelecionado.idade);
    }
  }, [alunoSelecionado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, idade });
    setNome('');
    setIdade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <button type="submit">{alunoSelecionado ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
}
