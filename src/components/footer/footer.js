import React from "react";
import "./footer.scss";
import toTop from "../../assets/to-top.svg";

const Footer = () => {
    return (
        <div className="footer">
            <img className="totop" src={toTop} alt="totop"/>
            <p className ="company">2019 © NETFRONT</p>
            <p className = "privacy">Privacy | Term & Condition | Contact</p>
        </div>
    );
}

export default Footer