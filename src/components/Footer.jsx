import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import FooterIcon1 from "../assets/FooterIcon1.png";
import FooterIcon2 from "../assets/FooterIcon2.png";
import FooterIcon3 from "../assets/FooterIcon3.png";
import FooterIcon4 from "../assets/FooterIcon4.png";
import FooterIcon5 from "../assets/FooterIcon5.png";
import FooterIcon6 from "../assets/FooterIcon6.png";
import FooterSubmitIcon from "../assets/FooterSubmitIcon.png";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async () => {
        setMessage('');
        try {
            const response = await fetch('https://dev-website-backend--raahtechnologies-server-2025.us-central1.hosted.app/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error('Subscription failed');
            }

            setMessage('Subscribed successfully!');
            setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            setMessage('Subscription failed. Please try again.');
        }
    };

    return (
        <div className='Footer'>
            <div className='FooterIconsSection'>
                <a href="https://www.google.com/maps/place/RAAH+Technologies/@33.8445116,-84.3738048,17z/data=!3m1!5s0x88f505f5c93c8b43:0x7edf0a3a151cedb5!4m6!3m5!1s0x88f50f55f259f13b:0xeb60f4bfbfd5170c!8m2!3d33.8445072!4d-84.3712299!16s%2Fg%2F11fy4ts4zt?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <img alt="Google Maps Link to RAAH Technologies Office Location" src={FooterIcon1} />
                </a>
                <a href="tel:+16787359229">
                    <img alt="Call RAAH Technologies" src={FooterIcon2} />
                </a>
                <a href="mailto:solutions@raahtech.com">
                    <img alt="Email RAAH Technologies" src={FooterIcon3} />
                </a>
                <a href="https://linkedin.com/company/raahtech" target="_blank" rel="noopener noreferrer">
                    <img alt="RAAH Technologies LinkedIn Link" src={FooterIcon4} />
                </a>
                <a href="https://instagram.com/raah_tech" target="_blank" rel="noopener noreferrer">
                    <img alt="RAAH Technologies Instagram Link" src={FooterIcon5} />
                </a>
                <a href="https://facebook.com/RAAHTech" target="_blank" rel="noopener noreferrer">
                    <img alt="RAAH Technologies Facebook Link" src={FooterIcon6} />
                </a>
            </div>

            <div className='FooterSubscriptionSection'>
                <p>Stay updated with the identity and cybersecurity world today.<br /> Subscribe now!</p>

                {message ? (
                    <p className="FooterSubscriptionMessage">{message}</p>
                ) : (
                    <div className="FooterSubscriptionSectionEmailContainer">
                        <input
                            type="email"
                            placeholder="Enter your email."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" onClick={handleSubscribe}>
                            <img src={FooterSubmitIcon} alt="Submit" />
                        </button>
                    </div>
                )}
                <div className='FooterLegalLinks'>
                    {/* <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link> */}
                </div>
                <p className='FooterCopyright'>Copyright © 2025 RAAH Technologies All rights reserved.</p>
            </div>

            <div className='FooterNavigationSection'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/solutions">Solutions</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/explore">Explore</Link>
            </div>
        </div>
    );
};

export default Footer;
