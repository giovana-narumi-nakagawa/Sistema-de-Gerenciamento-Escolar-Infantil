import { useState, useEffect } from 'react';
import api from '../api/api';

export default function UsuarioList({ onEdit }) {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    const res = await api.get('/usuario');
    setUsuarios(res.data);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/usuario/${id}`);
    fetchUsuarios();
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} ({usuario.email}) [{usuario.tipo}]
            <button onClick={() => onEdit(usuario)}>Editar</button>
            <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
