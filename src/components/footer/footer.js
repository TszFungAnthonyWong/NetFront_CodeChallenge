import React from "react";
import "./footer.scss";
import toTop from "../../assets/to-top.svg";

const Footer = () => {
    const goTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="footer">
            <div onClick={goTop} className = "totop">
                <img src={toTop} alt="totop" />
            </div>
            <p className="company">2019 © NETFRONT</p>
            <p className="privacy">Privacy | Term & Condition | Contact</p>
        </div>
    );
}

export default Footer