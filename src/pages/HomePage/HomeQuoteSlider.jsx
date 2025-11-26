import React, { useState, useEffect } from 'react';
import "./HomeQuoteSlider.css";

const quotes = [
    { text: "At RAAH, merit rises. We build teams where ambition is fueled, ideas are heard, and people are empowered to lead. We listen, and we invest in what matters: our people.", name: "Naren Jangid (Founder & CEO)" },
    { text: "Michael Jordan said it best: to achieve greatness, you must trust the process and have unwavering belief in your abilities. At RAAH, that mindset is our foundation.", name: "Ovi Balaj (Chief Operating & Strategy Officer)" },
    { text: "RAAH champions solutions, not platforms. We don’t tailor your needs to a tool, we tailor tools to your needs.", name: "Tarun Guhanand (Director of Implementation & Delivery)" }
];

const HomeQuoteSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % quotes.length);
        }, 10000); // Change quote every 3 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className='HomeQuoteSlider'>
            <div className='HomeQuote' key={currentIndex}>
                <p className='HomeQuoteText'>"{quotes[currentIndex].text}"</p>
                <p className='HomeQuoteName'>{quotes[currentIndex].name}</p>
            </div>
        </div>
    );
};

export default HomeQuoteSlider;
