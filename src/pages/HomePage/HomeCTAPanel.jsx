import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sword from '../../assets/HomeCTASword.png';
import CTAArrow from '../../assets/CTA_Arrow.png';

import './HomeCTAPanel.css';

const HomeCTAPanel = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index, label) => {
        setClickedIndex(index); // trigger animation class
        setTimeout(() => {
            console.log(`Button clicked: ${label}`);
            setClickedIndex(null); // reset after logging (optional)
        }, 1000);
    };

    const buttons = [
        {
            label: "Schedule A Consultation",
            url: "/contact"
        },
        {
            label: "Learn About Us",
            url: "/about"
        },
        {
            label: "Explore Pain Points In Depth",
            url: "/explore"
        }
    ];

    return (
        <div className='HomeCTAPanel'>
            {buttons.map((button, index) => (
                <div className={`CTAPanelButtonContainer ${clickedIndex === index ? 'clicked' : ''}`} key={index}>
                    <Link to={button.url}>
                        <button
                            className={`CTAPanelButton ${clickedIndex === index ? 'clicked' : ''}`}
                            onClick={() => handleClick(index, button.label)}
                        >
                            {button.label}<img src={CTAArrow} alt='Button Arrow Graphic' />
                        </button>
                    </Link>
                    <img src={sword} alt="Sword" className="SwordGraphic" />
                </div>
            ))}
        </div>
    );
};

export default HomeCTAPanel;
