import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Alunos from './pages/Alunos';
import Usuarios from './pages/Usuarios';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Sistema de Gerenciamento Escolar</h1>
        <nav>
          <Link to="/alunos">Alunos</Link> |{' '}
          <Link to="/usuarios">Usuários</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

