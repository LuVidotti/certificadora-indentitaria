import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/Administrador/AdminPage";
import LoginForm from "./Pages/LoginForm/LoginForm";
import AdminForm from "./Pages/Usuarios/AdminForm";
import ComumForm from "./Pages/Usuarios/ComumForm";
import Home from "./Pages/Home";
import CriarProduto from "./Pages/CriarProduto";
import Doacoes from "./Pages/Doacoes";
import CriarDoacao from "./Pages/CriarDoacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/criar-produto" Component={CriarProduto}/>
        <Route path="/doacoes" Component={Doacoes}/>
        <Route path="/criar-doacao" Component={CriarDoacao}/>
        <Route path="/admin" Component={AdminPage}/>
        <Route path="/login" Component={LoginForm}/>
        <Route path="/criar-admin" Component={AdminForm}/>
        <Route path="/criar-usuario" Component={ComumForm}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;