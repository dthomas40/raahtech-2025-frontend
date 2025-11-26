import React, { useState, useRef, useEffect } from 'react';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './ServicesAdvisorySection.css';
import ServicesAdvisorySectionGraphic from '../../assets/ServicesHeroSectionContentGraphic5.png';
import { Link } from 'react-router-dom';

const focuses = [
    {
        focusTitle: 'IAM',
        focusModalTitle: 'IAM (Identity and Access Management)',
        focusModalDescription: "We assess your current IAM landscape for gaps in SSO, MFA, and lifecycle automation. Our team defines federated models, access policies, and zero trust strategies that streamline authentication and ensure consistent enforcement across all systems."
    },
    {
        focusTitle: 'CIAM',
        focusModalTitle: 'CIAM (Customer Identity and Access Management)',
        focusModalDescription: "We evaluate your customer onboarding and authentication flows, identifying friction points and compliance risks. Our assessments deliver tailored strategies for adaptive authentication, consent management, and scalable customer trust frameworks."
    },
    {
        focusTitle: 'IGA',
        focusModalTitle: 'IGA (Identity Governance and Administration)',
        focusModalDescription: "We analyze your entitlement models, access reviews, and joiner-mover-leaver processes to uncover inefficiencies and compliance risks. Our team designs governance frameworks with automated certifications, SoD controls, and audit-ready reporting."
    },
    {
        focusTitle: 'PAM',
        focusModalTitle: 'PAM (Privileged Access Management)',
        focusModalDescription: "We review your privileged access lifecycle, admin credential management, and escalation paths. Our recommendations include least-privilege strategies, just-in-time access models, and monitoring practices to reduce breach risk and satisfy auditors."
    }
]

const ServicesAdvisorySection = () => {
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
            <div className='NavbarScrollSpacer' id='advisory' />
            <div className='ServicesAdvisorySectionContainer'>
                <div className='ServicesAdvisorySectionIntro'>
                    <h2 className='ServicesAdvisorySectionIntroTitle'>Advisory & Assessment Services</h2>
                    <p className='ServicesAdvisorySectionIntroDescription'>
                        Our advisory services help organizations understand where they are, where they need to go, and how to get there — securely and efficiently.
                    </p>
                </div>

                <div className='ServicesAdvisorySectionBulletsContainer'>
                    <div className='ServicesAdvisorySectionBullet'>
                        <h3 className='ServicesAdvisorySectionBulletTitle'>What We Offer:</h3>
                        <p className='ServicesAdvisorySectionBulletDescription'>
                            Strategic assessment, architecture review, roadmap design
                        </p>
                    </div>
                    <div className='ServicesAdvisorySectionBullet'>
                        <h3 className='ServicesAdvisorySectionBulletTitle'>Why It Matters:</h3>
                        <p className='ServicesAdvisorySectionBulletDescription'>
                            Accelerates maturity, aligns business & identity, reduces risk
                        </p>
                    </div>

                    <div className='ServicesAdvisorySectionBulletFocus' ref={focusRef}>
                        <div className='ServicesAdvisorySectionBulletFocusTextContainer'>
                            <h3 className='ServicesAdvisorySectionBulletTitle'>Focus Areas:</h3>
                            <div className='ServicesAdvisorySectionFocusAreasContainer'>
                                {focuses.map((focus, index) => (
                                    <button
                                        key={index}
                                        className={`ServicesAdvisorySectionFocusTitle ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleFocus(index)}
                                    >
                                        {focus.focusTitle}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div
                            className='ServicesAdvisorySectionFocusModal'
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
                                        <h4 className='ServicesAdvisorySectionFocusModalTitle'>{focuses[activeIndex].focusModalTitle}</h4>
                                        <p className='ServicesAdvisorySectionFocusModalDescription'>{focuses[activeIndex].focusModalDescription}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ServicesAdvisorySectionButtonImageContainer'>
                    <Link to={'/contact'}>
                        <button className='ServicesAdvisorySectionCTA'>
                            Start with an Identity Assessment
                            {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                        </button>
                    </Link>
                    <img
                        className='ServicesAdvisorySectionGraphic'
                        src={ServicesAdvisorySectionGraphic}
                        alt='Services Advisory Section Graphic'
                    />
                </div>
            </div>
        </>
    );
};

export default ServicesAdvisorySection;
