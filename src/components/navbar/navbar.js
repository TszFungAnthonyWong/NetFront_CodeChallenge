import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu-dash.svg"
import profile from "../../assets/profile.svg"
import expand from "../../assets/expand-button.svg"

class Navbar extends Component {
    state = {
        showOption: false
    }
    render() {
        const expandClick = () => {
            let cur = this.state.showOption;
            this.setState({ showOption: !cur });
        }

        let expandPad = "";

        if (this.state.showOption) {
            expandPad = <div className="expandPad" >
                <p>Profile</p>
                <p>Menu</p>
            </div>
        }

        return (
            <div>
                <ul>
                    <li><img className="logo" src={logo} alt="logo" /></li>
                    <li><img className="profile" src={profile} alt="profile" /></li>
                    <li><img className="menu" src={menu} alt="menu" /></li>
                    <li><img className="expand" onClick={expandClick} src={expand} alt="expand" /></li>
                </ul>
                <div className="titleBar">
                    <p>Dashboard > My apps</p>
                    <h3>My apps</h3>
                </div>

                {expandPad}
            </div>
        );
    }
}

export default Navbar