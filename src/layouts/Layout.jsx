import { Outlet } from "react-router-dom"

export const Layout = () =>{
    return (
        <div className="container">
            <Outlet>

            </Outlet>
            <footer> Esto es un footer </footer>
        </div>
    )
}