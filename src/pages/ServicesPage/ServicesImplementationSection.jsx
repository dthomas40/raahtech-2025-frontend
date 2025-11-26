import React, { useState, useRef, useEffect } from 'react';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './ServicesImplementationSection.css';
import ServicesImplementationSectionGraphic from '../../assets/ServicesHeroSectionContentGraphic3.png';
import { Link } from 'react-router-dom';

const focuses = [
    {
        focusTitle: 'IAM',
        focusModalTitle: 'IAM (Identity and Access Management)',
        focusModalDescription: "We integrate SSO and MFA across systems, unify identity stores, and automate lifecycle provisioning. Our implementations are built for scalability and resilience, aligning identity architecture with organizational needs."
    },
    {
        focusTitle: 'CIAM',
        focusModalTitle: 'CIAM (Customer Identity and Access Management)',
        focusModalDescription: "We deliver secure, seamless customer experiences — implementing low-friction registration, adaptive MFA, and fraud prevention workflows. Our CIAM implementations support compliance while optimizing UX."
    },
    {
        focusTitle: 'IGA',
        focusModalTitle: 'IGA (Identity Governance and Administration)',
        focusModalDescription: "We deploy governance platforms, building workflows for access requests, certifications, and SoD policy enforcement. Our team ensures entitlements are right-sized and auditable from day one."
    },
    {
        focusTitle: 'PAM',
        focusModalTitle: 'PAM (Privileged Access Management)',
        focusModalDescription: "We implement privilege vaulting, just-in-time elevation, and full session visibility. Our PAM deployments safeguard high-risk accounts while ensuring usability for administrators."
    }
]

const ServicesImplementationSection = () => {
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
            <div className='NavbarScrollSpacer' id='implementation' />
            <div className='ServicesImplementationSectionContainer'>
                <div className='ServicesImplementationSectionIntro'>
                    <h2 className='ServicesImplementationSectionIntroTitle'>Implementation & Professional Services</h2>
                    <p className='ServicesImplementationSectionIntroDescription'>
                        We turn strategy into action. Our team specializes in integrating, customizing, and deploying identity platforms — the right way.
                    </p>
                </div>

                <div className='ServicesImplementationSectionBulletsContainer'>
                    <div className='ServicesImplementationSectionBullet'>
                        <h3 className='ServicesImplementationSectionBulletTitle'>What We Offer:</h3>
                        <p className='ServicesImplementationSectionBulletDescription'>
                            Platform integration, automation, customization
                        </p>
                    </div>
                    <div className='ServicesImplementationSectionBullet'>
                        <h3 className='ServicesImplementationSectionBulletTitle'>Why It Matters:</h3>
                        <p className='ServicesImplementationSectionBulletDescription'>
                            Faster time-to-value, clean architecture, extensibility
                        </p>
                    </div>

                    <div className='ServicesImplementationSectionBulletFocus' ref={focusRef}>
                        <div className='ServicesImplementationSectionBulletFocusTextContainer'>
                            <h3 className='ServicesImplementationSectionBulletTitle'>Focus Areas:</h3>
                            <div className='ServicesImplementationSectionFocusAreasContainer'>
                                {focuses.map((focus, index) => (
                                    <button
                                        key={index}
                                        className={`ServicesImplementationSectionFocusTitle ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleFocus(index)}
                                    >
                                        {focus.focusTitle}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div
                            className='ServicesImplementationSectionFocusModal'
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
                                        <h4 className='ServicesImplementationSectionFocusModalTitle'>{focuses[activeIndex].focusModalTitle}</h4>
                                        <p className='ServicesImplementationSectionFocusModalDescription'>{focuses[activeIndex].focusModalDescription}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ServicesImplementationSectionButtonImageContainer'>
                    <Link to={'/contact'}>
                        <button className='ServicesImplementationSectionCTA'>
                            Start with an Identity Assessment
                            {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                        </button>
                    </Link>
                    <img
                        className='ServicesImplementationSectionGraphic'
                        src={ServicesImplementationSectionGraphic}
                        alt='Services Advisory Section Graphic'
                    />
                </div>
            </div>
        </>
    );
};

export default ServicesImplementationSection;
