import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navwrapper">
            <ul>
                <li>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/personnel">Personnel</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar