import React from 'react';
import './Navbar.css';
import logo from '../../image/logo.jpg';
import menu from '../../image/nav-menu.jpg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
    return (
        <>
            <nav className="navbar flex">
                <Link to="/"><img className='logo' src={logo} alt='Logo'/></Link>
                <div id="menuu" className="nav-links">
                    <ul className="list">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/experience">Experience</NavLink></li>
                        <li><NavLink to="/fetch">Motivation</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="btn">
                    <DarkMode/>
                    <button type="button">Resume</button>
                    <button type="button">Hire me</button>
                </div>
                {/* <a className="menubtn" href="#menuu"><img src={menu} alt='menubar'/></a> */}
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar