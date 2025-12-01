import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principais (do grupo)
import Home from "./pages/Home";

// Suas páginas
import ViewAlunos from "./pages/alunos/ViewAlunos";
import CreateAluno from "./pages/alunos/CreateAluno";
import EditAluno from "./pages/alunos/EditAluno";
import Chat from "./pages/alunos/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Suas rotas */}
        <Route path="/alunos/view" element={<ViewAlunos />} />
        <Route path="/alunos/create" element={<CreateAluno />} />
        <Route path="/alunos/edit/:id" element={<EditAluno />} />

        {/* WebSocket Chat */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
