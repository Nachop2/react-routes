import { Link } from "react-router-dom";

export const FormularioPregunta = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to="/">Inicio</Link>
                <Link className="btn btn-outline-primary" to="/contacto">Contacto</Link>
                <Link className="btn btn-outline-primary" to="/blog">Blog</Link>
                <Link className="btn btn-outline-primary" to="/"></Link>
                <Link className="btn btn-outline-primary" to="/"></Link>
            </div>
        </div>
    );
}