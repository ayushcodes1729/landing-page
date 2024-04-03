import React from 'react'
import "./navbar.css";
import logo from "../assets/ECell.jpg"

const Navbar = () => {
    return (
        <div>
            <nav id="navbar">
                <div id="logo">
                    <a href="#home">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div id="navbut">
                    <ul>
                        <li id="item1" className="navi"><a href="">Discover</a></li>
                        <li id="item2" className="navi"><a href="">Team</a></li>
                        <li id="item3" className="navi"><a href="">Learn</a></li>
                        <li id="item4" className="navi"><a href="">Incubator</a></li>
                        <li id="item5" className="navi"><a href="">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
