import { Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Inicio } from "./Inicio";
import { Contacto } from "./Contacto";
import { Blog } from "./Blog";
import { NotFound } from "./NotFound";

export const Routes = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1></h1>
            <Routes>
                <Route path="/" element={<Layout/>}>


                    <Route element={<Inicio/>} path="/"></Route>
                    <Route element={<Contacto/>} path="/contacto"></Route>
                    <Route element={<Blog/>} path="/blog"></Route>
                    <Route element={<NotFound/>} path="/*"></Route>
                </Route>

            </Routes>
        </>
    );
}

