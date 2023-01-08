import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";


function App() {

  return (
      <BrowserRouter>
      <header>
          <nav>
            <Link to="/">Home</Link>
            <NavLink to="/empresa">Empresa</NavLink>
            <NavLink to="/contato">contato</NavLink>
          </nav>
      </header>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/empresa" element={<Empresa/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
