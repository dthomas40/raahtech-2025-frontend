import React, { useState, useRef } from 'react';
import './ContactAccordionSection.css';
import CTAArrow from '../../assets/CTA_Arrow.png';
import ContactAccordionSectionGraphic from '../../assets/ContactAccordionSectionGraphic.png';
import { Link } from 'react-router-dom';

const ContactAccordionSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const accordionTopics = [
        {
            title: 'IAM (Workforce Identity)',
            description: 'Streamline workforce access with secure, consistent authentication and automated lifecycle management. Let’s discuss SSO, MFA, and policy enforcement strategies tailored to your environment.',
            buttonName: 'Schedule with IAM Expert'
        },
        {
            title: 'CIAM (Customer Identity)',
            description: 'Enhance customer trust while removing friction from digital experiences. Explore solutions for registration, adaptive MFA, consent management, and fraud prevention.',
            buttonName: 'Schedule with CIAM Expert'
        },
        {
            title: 'IGA (Identity Governance)',
            description: 'Gain visibility and control over access with automated JML processes, access certifications, and SoD compliance frameworks that keep audits simple.',
            buttonName: 'Schedule with IGA Expert'
        },
        {
            title: 'PAM (Privileged Access)',
            description: 'Protect your most sensitive accounts with least-privilege models, just-in-time elevation, and full session visibility to reduce breach risks.',
            buttonName: 'Schedule with PAM Lead'
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className='ContactAccordionSectionContainer'>
            <div className='ContactAccordionSectionIntro'>
                <h2 className='ContactAccordionSectionIntroTitle'>
                    Speak With a Specialist
                </h2>
                <p className='ContactAccordionSectionIntroDescription'>
                    Already know where your identity challenge lives? Choose your focus area below to schedule time directly with one of our solution leads.
                </p>
            </div>
            <div className='ContactAccordionSectionAccordionContainer'>
                {accordionTopics.map((accordion, index) => (
                    <div
                        key={index}
                        className={`ContactAccordionSectionAccordionWrapper ${openIndex === index ? 'open' : ''}`}
                    >
                        <div
                            className='ContactAccordionSectionAccordionTextContainer'
                            onClick={() => toggleAccordion(index)}
                        >
                            <p className='ContactAccordionSectionAccordionTitle'>
                                {accordion.title}
                            </p>
                            <img
                                className={`ContactAccordionSectionGraphic ${openIndex === index ? 'rotated' : ''}`}
                                src={ContactAccordionSectionGraphic}
                                alt='Accordion Arrow'
                            />
                        </div>

                        <div
                            ref={(element) => (contentRefs.current[index] = element)}
                            className='ContactAccordionSectionAccordionContentWrapper'
                            style={{
                                maxHeight:
                                    openIndex === index
                                        ? `${contentRefs.current[index]?.scrollHeight}px`
                                        : '0px',
                            }}
                        >
                            <div className='ContactAccordionSectionAccordionDescriptionContainer'>
                                <p className='ContactAccordionSectionAccordionDescription'>
                                    {accordion.description}
                                </p>
                                <Link to={'/contact#intro'}>
                                    <button className='ContactAccordionSectionCTA'>
                                        {accordion.buttonName}
                                        {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactAccordionSection;
