import React, { useState } from 'react'
import logo from '../images/logo.png';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }


    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className="logo">
                <img src={logo} alt="" />
            </a>
            <input type="checkbox" className="menu-btn" id='menu-btn' />
            <label for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#presentation">UI SS</a></li>
                <li><a href="#">Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar