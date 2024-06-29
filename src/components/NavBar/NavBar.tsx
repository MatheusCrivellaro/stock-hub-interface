import {Link, NavLink} from "react-router-dom";
import './NavBar.css'
import {useEffect, useState} from "react";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-stock-car row ${isSticky ? 'navbar-fixed-top' : ''}`}>
            <div className="nav-container row col-12">
                <Link className="nav-title col-6" to="/">
                    StockCar
                </Link>
                <ul className="nav-options col-6">
                    <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/">
                        Home
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/login">
                        Login
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;