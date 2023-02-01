import React, { useState, useEffect, useCallback } from 'react'

import { useLocation, Link } from 'react-router-dom'

import { scrollToSection } from '../../utils'

import { HashLink } from 'react-router-hash-link';

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
        <div className={location.pathname === '/'
            ? navHeight < 600 && !click
                ? 'navbar-home-transparent'
                : 'navbar-home'
            : 'navbar'
        }
        >
            <div className="navbar-container container">

                <Link
                    to={location.pathname !== '/' && '/'}
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                    <div className='navbar-logo-container'>
                        {/* <img
                            onClick={() => location.pathname === '/' && window.scrollTo(0, 0)}
                            src={images.logoTerziiski}
                            alt="Medical Center Trinity"
                        /> */}
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
                            <HashLink
                                to={location.pathname !== '/' ? `/${item.footerUrl}` : '/'}
                                onClick={() => location.pathname === '/' && scrollToSection(item.url)}
                                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                                elementId={location.pathname === '/' ? `${item.footerUrl}` : ''}
                                className="nav-links"
                            >
                                {item.title}
                            </HashLink>
                        </li>
                    ))}

                    <li className='save-hours-mobile'>
                        <a
                            href='tel:0893706923'
                        >
                            <FiPhone /> Поръчай
                        </a>
                    </li>
                </ul>
                <div className='save-hours'>
                    <HashLink
                        to={location.pathname !== '/' ? `/#contacts` : ''}
                        onClick={() => location.pathname === '/' && scrollToSection('contacts')}
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                        // elementId={location.pathname === '/' ? `${item.footerUrl}` : ''}
                        className="nav-links"
                    >
                        <FiPhone />   <p> <span>Поръчай!</span></p>
                    </HashLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar