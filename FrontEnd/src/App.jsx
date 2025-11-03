import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import Cadastrar from "./Pages/Cadastrar";
import Listar from "./Pages/Listar";
import Deletar from "./Pages/Deletar";
import Atualizar from "./Pages/Atualizar";


function App() {
  return (
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<Menu />} />

      {/* páginas */}
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/listar" element={<Listar />} />
      <Route path="/deletar" element={<Deletar />} />
      <Route path="/atualizar" element={<Atualizar />} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
