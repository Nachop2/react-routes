import { Outlet } from "react-router-dom"

const Layout = () =>{
    return (
        <div className="container">
            <Outlet>

            </Outlet>
            <footer> Esto es un footer </footer>
        </div>
    )
}