import { useState, useEffect } from 'react';

export default function UsuarioForm({ onSubmit, usuarioSelecionado }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    if (usuarioSelecionado) {
      setNome(usuarioSelecionado.nome);
      setEmail(usuarioSelecionado.email);
      setSenha(usuarioSelecionado.senha);
      setTipo(usuarioSelecionado.tipo);
    }
  }, [usuarioSelecionado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, email, senha, tipo });
    setNome('');
    setEmail('');
    setSenha('');
    setTipo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
      <button type="submit">{usuarioSelecionado ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
}
