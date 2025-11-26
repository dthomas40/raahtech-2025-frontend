import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CTAArrow from '../assets/CTA_Arrow.png';

import "./Navbar.css";

const Navbar = () => {
    const [moveUp, setMoveUp] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => setMoveUp(window.scrollY > 0);
        const handleResize = () => setIsMobile(window.innerWidth < 850);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname.substring(1, location.pathname.length) === 'contact' && location.hash === '#consultation') {
            setActiveLink('consultation');
        } else {
            setActiveLink(location.pathname.substring(1, location.pathname.length));
        }
    }, [location]);

    const navigate = useNavigate();

    const handleNavClick = (path, linkName) => {
        if (location.pathname + location.hash === path) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            setShowMenu(false);
            setActiveLink(linkName);
            navigate(path);
        }
    };

    const menuItems = (
        <>
            <Link
                to="/"
                onClick={(e) => { e.preventDefault(); handleNavClick("/", ""); }}
                className={activeLink === '' ? 'active' : ''}
            >
                Home
            </Link>
            <Link
                to="/services"
                onClick={(e) => { e.preventDefault(); handleNavClick("/services", "services"); }}
                className={activeLink === 'services' ? 'active' : ''}
            >
                Services
            </Link>
            <Link
                to="/solutions"
                onClick={(e) => { e.preventDefault(); handleNavClick("/solutions", "solutions"); }}
                className={activeLink === 'solutions' ? 'active' : ''}
            >
                Solutions
            </Link>
            <Link
                to="/about"
                onClick={(e) => { e.preventDefault(); handleNavClick("/about", "about"); }}
                className={activeLink === 'about' ? 'active' : ''}
            >
                About
            </Link>
            <Link
                to="/contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("/contact", "contact"); }}
                className={activeLink === 'contact' ? 'active' : ''}
            >
                Contact
            </Link>
            <Link
                to="/explore"
                onClick={(e) => { e.preventDefault(); handleNavClick("/explore", "explore"); }}
                className={activeLink === 'explore' ? 'active' : ''}
            >
                Explore
            </Link>
            <Link
                to="/contact#consultation"
                className={`NavbarCTA ${activeLink === 'consultation' ? 'active' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/contact#consultation", "consultation");
                }}
            >
                Consultation
                {/* <img src={CTAArrow} alt='Button Arrow Graphic' /> */}
            </Link>
        </>
    );

    return (
        <div className={`NavbarContainer ${moveUp ? 'move-up' : ''}`}>
            {isMobile ? (
                <>
                    <div className="HamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
                        {showMenu ? '🗙' : '☰'}
                    </div>
                    {showMenu && (
                        <div className="MobileMenuModal" onClick={() => setShowMenu(false)}>
                            <div className="MobileMenuContent" onClick={(e) => e.stopPropagation()}>
                                {menuItems}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className='Navbar'>
                    {menuItems}
                </div>
            )}
        </div>
    );
};

export default Navbar;