import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./HomeHero.css"
import HomeHeroCastle from '../../assets/HomeHeroCastle.png';
import HomeHeroCastleBrick from '../../assets/HomeHeroCastleBrick.png';
import HomeHeroContentGraphic1 from '../../assets/HomeHeroContentGraphic1.png';
import HomeHeroContentGraphic2 from '../../assets/HomeHeroContentGraphic2.png';
import HomeHeroContentGraphic3 from '../../assets/HomeHeroContentGraphic3.png';
import HomeHeroContentGraphic4 from '../../assets/HomeHeroContentGraphic4.png';
import CTAArrow from '../../assets/CTA_Arrow.png';

const identitySections = {
    IGA: {
        image: HomeHeroContentGraphic1,
        title: "Identity Governance (IGA)",
        problem: "Organizations rely on manual access reviews, disconnected identity systems, and unclear ownership of entitlements.",
        impact: "Audits are failed, risks go undetected, and access is rarely right-sized—leaving the organization exposed.",
        solution: "We define governance strategies, implement automated certifications, and connect data using premium platforms."
    },
    IAM: {
        image: HomeHeroContentGraphic2,
        title: "Identity & Access Management (IAM)",
        problem: "Inconsistent access policies, siloed identity stores, and lack of lifecycle automation create gaps in control.",
        impact: "Users receive incorrect or delayed access, IT becomes reactive, and security policies remain unenforced.",
        solution: "We build policy-driven IAM architectures that unify identity lifecycle, role modeling, and access automation."
    },
    CIAM: {
        image: HomeHeroContentGraphic3,
        title: "Customer Identity (CIAM)",
        problem: "Registration flows are clunky, MFA adoption is low, and identity data is fragmented across platforms.",
        impact: "Conversion drops, privacy risks grow, and customers lose trust in your digital experience.",
        solution: "We orchestrate secure, low-friction CIAM experiences built for scale, trust, and compliance from day one."
    },
    PAM: {
        image: HomeHeroContentGraphic4,
        title: "Privileged Access (PAM)",
        problem: "Admin accounts are overprovisioned, credentials are poorly managed, and sessions go unmonitored.",
        impact: "A single compromise leads to unrestricted system access and major breach fallout.",
        solution: "We implement least-privilege controls, enforce access boundaries, and enable full session accountability."
    }
};


const HomeHero = () => {
    const [selected, setSelected] = useState("IGA");
    const [animateDetail, setAnimateDetail] = useState(true);
    const requestRef = useRef();


    useEffect(() => {
        cancelAnimationFrame(requestRef.current);
        setAnimateDetail(true); // trigger animation

        const animate = (time) => {
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        const timeout = setTimeout(() => setAnimateDetail(false), 600); // match animation duration

        return () => {
            cancelAnimationFrame(requestRef.current);
            clearTimeout(timeout);
        };
    }, [selected]);

    const section = identitySections[selected];

    return (
        <div className='HomeHero'>
            <div className='HomeHeroDescription'>
                Identity problems span far beyond login issues. We tackle the core pain points that block <span>security</span>, <span>compliance</span>, and <span>efficiency</span> at every point in your identity journey.
            </div>
            <div className='HomeHeroInteractive'>
                <div className='HomeHeroCastle'>
                    <img className='HomeHeroCastleMainGraphic' src={HomeHeroCastle} alt="Castle" />
                    {Object.keys(identitySections).map(key => (
                        <div
                            key={key}
                            className={`HomeHeroCastleInteractiveBrick brick-${key} ${selected === key ? 'active' : 'inactive'}`}
                            onClick={() => setSelected(key)}
                        >
                            <img src={HomeHeroCastleBrick} alt={`Brick ${key}`} />
                            <span>{key}</span>
                        </div>
                    ))}
                </div>
                <div className={`HomeHeroDetailedView ${animateDetail ? 'ReusableFadeUp' : ''}`}>
                    <div className='HomeHeroDetailedViewContent'>
                        <div className='HomeHeroDetailedViewTitleContainer'>
                            <div className='HomeHeroDetailedViewGraphic'><img src={section.image} /></div>
                            <div className='HomeHeroDetailedViewContentGroup'>
                                <h2 className='HomeHeroDetailedViewContentTitle'>{section.title}</h2>
                                <div className='HomeHeroDetailedViewContentDescriptionCTAContainer'>
                                    <Link to={'/solutions'}>
                                        <button className='HomeHeroDetailedViewContentDescriptionCTA'>
                                            More Info
                                            <img src={CTAArrow} alt="CTA Arrow"></img>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='HomeHeroDetailedViewContentDescription'>
                            <h3>Problem:</h3>
                            <p>{section.problem}</p>
                            <h3>Impact:</h3>
                            <p>{section.impact}</p>
                            <h3>Solution:</h3>
                            <p>{section.solution}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHero