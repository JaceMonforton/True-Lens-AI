import React from "react";
import "../Navbar.css";
import Logo from '../assets/AI-Ethics.png'
import { useNavigate } from "react-router";
    const Navbar: React.FC = () => {
        const Navigate = useNavigate();

    return (
        <nav className="navbar">
        <div className="nav-buttons">
            <button className="navbar-item0" onClick={() => Navigate('/')}>
            <img src={Logo} alt="Onboarding" className="nav-logo-image" />
            </button>

            <button className="navbar-item1" onClick={() => Navigate('/about')}>About</button>
            <button className="navbar-item2" onClick={() => Navigate('/contact')}>Contact</button>
        </div>
        </nav>
    );
    };

    export default Navbar;
