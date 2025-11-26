import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';
import DarkModeToggleGraphic1 from "../assets/DarkModeToggleGraphic1.png";
import DarkModeToggleGraphic2 from "../assets/DarkModeToggleGraphic2.png";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const [hasBorder, setHasBorder] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);


    useEffect(() => {
        const handleScroll = () => {
            setHasBorder(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button className={`DarkModeToggle  ${hasBorder ? 'with-border' : ''}`} onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? <img src={DarkModeToggleGraphic2} /> : <img src={DarkModeToggleGraphic1} />}
        </button>
    );
};

export default DarkModeToggle;
