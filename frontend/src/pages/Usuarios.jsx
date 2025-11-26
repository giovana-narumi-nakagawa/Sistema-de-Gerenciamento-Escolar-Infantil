import { useState } from 'react';
import UsuarioForm from '../components/UsuarioForm';
import UsuarioList from '../components/UsuarioList';
import api from '../api/api';

export default function Usuarios() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  const handleSubmit = async (usuario) => {
    if (usuarioSelecionado) {
      await api.put(`/usuario/${usuarioSelecionado.id}`, usuario);
      setUsuarioSelecionado(null);
    } else {
      await api.post('/usuario', usuario);
    }
  };

  return (
    <div>
      <UsuarioForm onSubmit={handleSubmit} usuarioSelecionado={usuarioSelecionado} />
      <UsuarioList onEdit={setUsuarioSelecionado} />
    </div>
  );
}
