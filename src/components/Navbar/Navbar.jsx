import React, { useState, useEffect, useCallback } from 'react'

import { useLocation, Link } from 'react-router-dom'

import { scrollToSection } from '../../utils'

import HamburgerIcon from './HamburgerIcon/HamburgerIcon'

import { FiPhone } from 'react-icons/fi'
import './Navbar.css'

const navbarLinks = [
    {
        id: 1,
        title: 'Продукти',
        url: 'products',
    },
    {
        id: 2,
        title: 'Контакти',
        url: 'contacts',
    }
]

const Navbar = () => {
    const [navHeight, setNavHeigth] = useState(0)
    const [click, setClick] = useState(false);

    let container = React.createRef();
    let location = useLocation();

    const handleHeight = useCallback(() => {
        setNavHeigth(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => handleHeight());

        return () => {
            window.removeEventListener("scroll", () => handleHeight());
        };
    }, [handleHeight]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    });

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = id => scrollToSection(id)

    const handleClickOutside = (event) => {
        if (
            container.current &&
            !container.current.contains(event.target) &&
            !(event.target.className === "menu-icon")
        ) {
            closeMobileMenu()
        }
    };

    return (
        <div className={
            navHeight < 600 && !click
                ? 'navbar-home-transparent'
                : 'navbar-home'
        }
        >
            <div className="navbar-container container">

                <Link
                    to={location.pathname !== '/' && '/'}
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                    <div className='navbar-logo-container'>
                        <span
                            className='logo-font'

                            onClick={() => location.pathname === '/' && window.scrollTo(0, 0)}>
                            AFELIOS</span>
                    </div>

                </Link>
                <div
                    className="menu-icon" ref={container}
                    onClick={handleClick}
                >
                    <HamburgerIcon open={click} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    {navbarLinks.map((item) => (
                        <li
                            key={item.id}
                            className="nav-item"
                            onClick={() => {
                                scrollToTop(item.url)
                                closeMobileMenu()
                            }}
                        >
                            <span
                                onClick={() => scrollToSection(item.url)}
                                className="nav-links"
                            >
                                {item.title}
                            </span>
                        </li>
                    ))}

                    <li className='save-hours-mobile'>
                        <a
                            href='tel:0899140304'
                        >
                            <FiPhone /> Поръчай
                        </a>
                    </li>
                </ul>
                <div className='save-hours'>
                    <span
                        onClick={() => scrollToSection('contacts')}
                        className="nav-links"
                    >
                        <FiPhone />   <p> <span>Поръчай!</span></p>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navbar