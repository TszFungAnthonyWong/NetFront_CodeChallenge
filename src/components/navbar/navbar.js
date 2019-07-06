import React from "react";
import "./navbar.scss";

import logo from "../../assets/logo.svg"
import menu from "../../assets/menu-dash.svg"
import profile from "../../assets/profile.svg"

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><img className="logo" src={logo} alt="logo" /></li>
                <li><img className="menu" src={menu} alt="menu" /></li>
                <li><img className="profile" src={profile} alt="profile" /></li>
            </ul>
            <div className="titleBar">
                <p>Dashboard > My apps</p>
                <h3>My apps</h3>
                
            </div>
        </div>
    );
}

export default Navbar