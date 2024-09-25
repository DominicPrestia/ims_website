import { Link, NavLink } from "react-router-dom"

const Navbar = ({scrollToSection}) => {
    return (
        <nav className="navwrapper">
            <ul>
                <li>
                    <NavLink className="nav-link" onClick={()=>scrollToSection('home')}>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" onClick={()=>scrollToSection('services')}>Services</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" onClick={()=>scrollToSection('personnel')}>Personnel</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" onClick={()=>scrollToSection('contact')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar