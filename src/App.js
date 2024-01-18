import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/Contacto";
import { Blog } from "./pages/Blog";
import { BlogCharacter } from "./pages/BlogCharacter";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1></h1>
      <Routes>
        <Route path="/" element={<Layout />}>


          <Route element={<Inicio />} path="/"></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogCharacter />} path="/blog/:id"></Route>
          <Route element={<NotFound />} path="/*"></Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
