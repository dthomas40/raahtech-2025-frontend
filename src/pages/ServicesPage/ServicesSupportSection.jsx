import React, { useState, useRef, useEffect } from 'react';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './ServicesSupportSection.css';
import ServicesSupportSectionGraphic from '../../assets/ServicesHeroSectionContentGraphic6.png';
import { Link } from 'react-router-dom';

const focuses = [
    {
        focusTitle: 'IAM',
        focusModalTitle: 'IAM (Identity and Access Management)',
        focusModalDescription: "We monitor IAM environments to enforce consistent access policies, resolve incidents quickly, and keep integrations up-to-date with evolving needs."
    },
    {
        focusTitle: 'CIAM',
        focusModalTitle: 'CIAM (Customer Identity and Access Management)',
        focusModalDescription: "We maintain CIAM environments with ongoing fraud prevention tuning, authentication updates, and regulatory compliance checks to protect both customers and your brand."
    },
    {
        focusTitle: 'IGA',
        focusModalTitle: 'IGA (Identity Governance and Administration)',
        focusModalDescription: "We support governance platforms by managing certifications, reviewing SoD policy conflicts, and providing continuous audit-readiness."
    },
    {
        focusTitle: 'PAM',
        focusModalTitle: 'PAM (Privileged Access Management)',
        focusModalDescription: "We handle privileged account monitoring, access elevation approvals, and integration upkeep to maintain least-privilege access controls."
    }
]

const ServicesSupportSection = () => {
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
            <div className='NavbarScrollSpacer' id='support' />
            <div className='ServicesSupportSectionContainer'>
                <div className='ServicesSupportSectionIntro'>
                    <h2 className='ServicesSupportSectionIntroTitle'>Support & Managed Services</h2>
                    <p className='ServicesSupportSectionIntroDescription'>
                        Our managed services keep your identity environment running smoothly — from incident response to user access support.
                    </p>
                </div>

                <div className='ServicesSupportSectionBulletsContainer'>
                    <div className='ServicesSupportSectionBullet'>
                        <h3 className='ServicesSupportSectionBulletTitle'>What We Offer:</h3>
                        <p className='ServicesSupportSectionBulletDescription'>
                            Platform integration, automation, customization
                        </p>
                    </div>
                    <div className='ServicesSupportSectionBullet'>
                        <h3 className='ServicesSupportSectionBulletTitle'>Why It Matters:</h3>
                        <p className='ServicesSupportSectionBulletDescription'>
                            Faster time-to-value, clean architecture, extensibility
                        </p>
                    </div>

                    <div className='ServicesSupportSectionBulletFocus' ref={focusRef}>
                        <div className='ServicesSupportSectionBulletFocusTextContainer'>
                            <h3 className='ServicesSupportSectionBulletTitle'>Focus Areas:</h3>
                            <div className='ServicesSupportSectionFocusAreasContainer'>
                                {focuses.map((focus, index) => (
                                    <button
                                        key={index}
                                        className={`ServicesSupportSectionFocusTitle ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleFocus(index)}
                                    >
                                        {focus.focusTitle}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div
                            className='ServicesSupportSectionFocusModal'
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
                                        <h4 className='ServicesSupportSectionFocusModalTitle'>{focuses[activeIndex].focusModalTitle}</h4>
                                        <p className='ServicesSupportSectionFocusModalDescription'>{focuses[activeIndex].focusModalDescription}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ServicesSupportSectionButtonImageContainer'>
                    <Link to={'/contact'}>
                        <button className='ServicesSupportSectionCTA'>
                            Start with an Identity Assessment
                            {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                        </button>
                    </Link>
                    <img
                        className='ServicesSupportSectionGraphic'
                        src={ServicesSupportSectionGraphic}
                        alt='Services Advisory Section Graphic'
                    />
                </div>
            </div>
        </>
    );
};

export default ServicesSupportSection;
