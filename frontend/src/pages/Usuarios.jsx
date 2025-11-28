import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';


export function UsuariosPage() {
const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
const [usuarios, setUsuarios] = useState([]);
const fetchUsuarios = async () => {
const res = await api.get('/usuario');
setUsuarios(res.data);
};
useEffect(() => { fetchUsuarios(); }, []);
const handleSubmit = async (usuario) => {
if (usuarioSelecionado) {
await api.put(`/usuario/${usuarioSelecionado.id}`, usuario);
setUsuarioSelecionado(null);
} else {
await api.post('/usuario', usuario);
}
fetchUsuarios();
};
return (
<div className="p-6 grid gap-6">
<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold">Gerenciamento de Usuários</motion.h1>
<Card className="p-4">
<CardContent>
<UsuarioForm onSubmit={handleSubmit} usuarioSelecionado={usuarioSelecionado} />
</CardContent>
</Card>
<UsuarioList onEdit={setUsuarioSelecionado} usuarios={usuarios} />
</div>
);
}
