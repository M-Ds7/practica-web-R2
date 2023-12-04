import Footer from "./Footer"
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Nosotros">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Servicios">Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contacto">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text"
                        placeholder="Buscar" aria-label="Buscar" />
                </form>
                <form className="form-inline mt-2 mt-md-0">
                    <button className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit">Buscar</button>
                </form>
            </nav>
            <div className="">
                <Footer />
            </div>
        </>
    )
}

export default Menu