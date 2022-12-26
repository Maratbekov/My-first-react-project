import React from 'react';
import "./Header.css"
import {style} from "../../style/styles";
import {NavLink,Link} from "react-router-dom";


const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <NavLink to="/" style={style.headerLogo}>Assembled</NavLink>

                    <nav>
                        <NavLink to="/" style={style.headerLink} className="nav-item">Home</NavLink>
                        <NavLink to="/recipes" style={style.headerLink} className="nav-item">Recipes</NavLink>
                        <NavLink to="/meat" style={style.headerLink} className="nav-item">Meat</NavLink>
                        <NavLink to="/about" style={style.headerLink} className="nav-item">About</NavLink>
                        <NavLink to="/sign" style={style.headerLink} className="nav-item">Sign</NavLink>
                        <NavLink to="/support" style={style.headerLink} className="nav-item">Support</NavLink>
                        <NavLink to="/project" style={style.headerLink} className="nav-item">Project</NavLink>

                        <button className="header-btn" style={style.headerBtn}>Sign in</button>
                        <button className="header-btn2" style={style.headerBtnTwo}>Request demo</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;