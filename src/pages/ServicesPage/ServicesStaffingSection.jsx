import React, { useState, useRef, useEffect } from 'react';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './ServicesStaffingSection.css';
import ServicesStaffingSectionGraphic from '../../assets/ServicesHeroSectionContentGraphic7.png';
import { Link } from 'react-router-dom';

const focuses = [
    {
        focusTitle: 'IAM',
        focusModalTitle: 'IAM (Identity and Access Management)',
        focusModalDescription: "Architects, engineers, and analysts who can design, maintain, and scale IAM solutions for your environment."
    },
    {
        focusTitle: 'CIAM',
        focusModalTitle: 'CIAM (Customer Identity and Access Management)',
        focusModalDescription: "Customer identity specialists focused on building secure, user-friendly authentication and compliance-driven workflows."
    },
    {
        focusTitle: 'IGA',
        focusModalTitle: 'IGA (Identity Governance and Administration)',
        focusModalDescription: "Governance experts skilled in entitlement modeling, audit readiness, and role-based access frameworks."
    },
    {
        focusTitle: 'PAM',
        focusModalTitle: 'PAM (Privileged Access Management)',
        focusModalDescription: "Privileged access professionals who design, implement, and maintain secure privilege models, vaults, and session controls."
    }
]

const ServicesStaffingSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const focusRef = useRef(null);
    const modalRef = useRef(null);
    const [modalHeight, setModalHeight] = useState(0);

    const toggleFocus = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (focusRef.current && !focusRef.current.contains(event.target)) {
                setActiveIndex(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (modalRef.current && activeIndex !== null) {
            setModalHeight(modalRef.current.scrollHeight);
        } else {
            setModalHeight(0);
        }
    }, [activeIndex]);

    return (
        <>
            <div className='NavbarScrollSpacer' id='staffing' />
            <div className='ServicesStaffingSectionContainer'>
                <div className='ServicesStaffingSectionIntro'>
                    <h2 className='ServicesStaffingSectionIntroTitle'>Staffing Services</h2>
                    <p className='ServicesStaffingSectionIntroDescription'>
                        When you need great people fast — from full-time engineers to interim advisors — we deliver identity-focused professionals who are ready to execute.
                    </p>
                </div>

                <div className='ServicesStaffingSectionBulletsContainer'>
                    <div className='ServicesStaffingSectionBullet'>
                        <h3 className='ServicesStaffingSectionBulletTitle'>What We Offer:</h3>
                        <p className='ServicesStaffingSectionBulletDescription'>
                            Platform integration, automation, customization
                        </p>
                    </div>
                    <div className='ServicesStaffingSectionBullet'>
                        <h3 className='ServicesStaffingSectionBulletTitle'>Why It Matters:</h3>
                        <p className='ServicesStaffingSectionBulletDescription'>
                            Faster time-to-value, clean architecture, extensibility
                        </p>
                    </div>

                    <div className='ServicesStaffingSectionBulletFocus' ref={focusRef}>
                        <div className='ServicesStaffingSectionBulletFocusTextContainer'>
                            <h3 className='ServicesStaffingSectionBulletTitle'>Focus Areas:</h3>
                            <div className='ServicesStaffingSectionFocusAreasContainer'>
                                {focuses.map((focus, index) => (
                                    <button
                                        key={index}
                                        className={`ServicesStaffingSectionFocusTitle ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleFocus(index)}
                                    >
                                        {focus.focusTitle}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div
                            className='ServicesStaffingSectionFocusModal'
                            style={{
                                maxHeight: `${modalHeight}px`,
                                opacity: activeIndex !== null ? 1 : 0,
                                marginTop: activeIndex !== null ? '1em' : '0',
                                paddingTop: activeIndex !== null ? '1em' : '0',
                                pointerEvents: activeIndex !== null ? 'auto' : 'none',
                                transition: 'max-height 0.6s ease, opacity 0.4s ease, margin-top 0.6s ease, padding-top 0.6s ease',
                                overflow: 'hidden',
                            }}
                        >
                            <div ref={modalRef}>
                                {activeIndex !== null && (
                                    <>
                                        <h4 className='ServicesStaffingSectionFocusModalTitle'>{focuses[activeIndex].focusModalTitle}</h4>
                                        <p className='ServicesStaffingSectionFocusModalDescription'>{focuses[activeIndex].focusModalDescription}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ServicesStaffingSectionButtonImageContainer'>
                    <Link to={'/contact'}>
                        <button className='ServicesStaffingSectionCTA'>
                            Start with an Identity Assessment
                            {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                        </button>
                    </Link>
                    <img
                        className='ServicesStaffingSectionGraphic'
                        src={ServicesStaffingSectionGraphic}
                        alt='Services Advisory Section Graphic'
                    />
                </div>
            </div>
        </>
    );
};

export default ServicesStaffingSection;
