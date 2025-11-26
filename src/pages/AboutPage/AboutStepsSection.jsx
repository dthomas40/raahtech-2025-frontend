import React, { useState, useEffect, useRef } from 'react';
import './AboutStepsSection.css';

const AboutStepsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [animatingIndex, setAnimatingIndex] = useState(null);
    const [showContentIndex, setShowContentIndex] = useState(null);

    const wrapperRef = useRef(null);

    const steps = [
        {
            step: 'STEP 1',
            title: 'Discovery & Alignment',
            description: [
                "What We Do:",
                "Engage with stakeholders to understand your current environment, business priorities, and compliance requirements.",
                "Deliverables:",
            ],
            bullets: [
                "Current state analysis",
                "Gap & risk assessment",
                "Identity maturity baseline"
            ]
        },
        {
            step: 'STEP 2',
            title: 'Strategy & Roadmap Design',
            description: [
                "What We Do:",
                "Define a tailored identity strategy that aligns to your goals and regulatory needs, prioritizing quick wins and long-term maturity.",
                "Deliverables:",
            ],
            bullets: [
                "Strategic roadmap",
                "High-level architecture",
                "Prioritized implementation plan"
            ]
        },
        {
            step: 'STEP 3',
            title: 'Implementation & Integration',
            description: [
                "What We Do:",
                "Configure and deploy best-of-breed platforms, customize workflows, and integrate across applications, directories, and systems.",
                "Deliverables:"
            ],
            bullets: [
                "Working integrations",
                "Automated workflows & approvals",
                "Technical documentation"
            ]
        },
        {
            step: 'STEP 4',
            title: 'Enablement & Transition',
            description: [
                "What We Do:",
                "Prepare your team for success with training, documentation, and knowledge transfer while ensuring a smooth transition to production.",
                "Deliverables:"
            ],
            bullets: [
                "Admin and user training",
                "Operational playbooks",
                "Post-go-live support plan"
            ]
        },
        {
            step: 'STEP 5',
            title: 'Continuous Optimization',
            description: [
                "What We Do:",
                "Monitor performance, fine-tune access models, and evolve capabilities as your business and security landscape changes.",
                "Deliverables:"
            ],
            bullets: [
                "Periodic health checks",
                "Maturity progression tracking",
                "Recommendations for ongoing improvement"
            ]
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenIndex(null);
            }
        };

        if (openIndex !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openIndex]);

    const handleTabClick = (index) => {
        if (openIndex === index) return;

        setAnimatingIndex(index);
        setOpenIndex(index);
        setShowContentIndex(null);

        setTimeout(() => {
            setAnimatingIndex(null);
            setShowContentIndex(index);
        }, 600);
    };

    return (
        <div className="AboutStepsSectionContainer">
            <div className="AboutStepSectionWrapper" ref={wrapperRef}>
                {steps.map((step, index) => {
                    const isOpen = openIndex === index;
                    const isAnimating = animatingIndex === index;
                    const showContent = showContentIndex === index;

                    return (
                        <div key={index} className="StepSlot">
                            <div
                                className={`StepTabWrapper ${isOpen ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}
                                onClick={() => !isOpen && handleTabClick(index)}
                            >
                                <div className="StepTabContent">
                                    {!isOpen && <span className="StepLabel">{step.step}</span>}


                                    {isOpen && (
                                        <div className={`StepDetailsCardContent ${showContent ? 'fadeInText' : ''}`}>
                                            <h3 className="StepDetailsTitle">{step.title}</h3>
                                            {step.description.map((item, idx) => (
                                                <p className='StepDetailsDescription' key={idx}>{item}</p>
                                            ))}
                                            <ul className="StepDetailsList">
                                                {step.bullets?.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutStepsSection;
