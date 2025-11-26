import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomeUseCaseSection.css'
import HomeUseCaseGraphic1 from '../../assets/HomeUseCaseGraphic1.png'
import HomeUseCaseGraphic2 from '../../assets/HomeUseCaseGraphic2.png'
import HomeUseCaseGraphic3 from '../../assets/HomeUseCaseGraphic3.png'
import CTAArrow from '../../assets/CTA_Arrow.png';

const HomeUseCaseSection = () => {
    const useCases = [
        {
            title: 'By Platform',
            description: [
                'Okta: Workforce IAM + CIAM flows with extensible workflows',
                'Okta CIC (Auth0): Embedded login, MFA, bot detection for customer apps',
                'Saviynt: IGA automation with access requests, certifications, and SoD',
                'Microsoft (Azure AD + Entra): Conditional access, hybrid identity, and seamless M365 integration'
            ]
        },
        {
            title: 'By Identity Type',
            description: [
                'IGA: Role-based access control, access certifications, and joiner-mover-leaver automation',
                'IAM: Unified login, MFA/SSO rollout, lifecycle management',
                'CIAM: Self-service registration, social login, consent management',
                'PAM: Session management, vault integration, just-in-time provisioning'
            ]
        },
        {
            title: 'By Industry',
            description: [
                'Retail: Customer onboarding + POS identity, vendor access ',
                'Healthcare: Patient portal CIAM, clinician IAM, HIPAA-driven access ',
                'Finance: Zero trust IAM, PAM enforcement, audit & attestation readiness',
                'Manufacturing: Contractor lifecycle management, plant-level access segmentation'
            ]
        }
    ];

    const images = [HomeUseCaseGraphic1, HomeUseCaseGraphic2, HomeUseCaseGraphic3];
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [animateDetail, setAnimateDetail] = useState(false);


    useEffect(() => {
        setAnimateDetail(true);
        const timeout = setTimeout(() => setAnimateDetail(false), 600); // match the animation duration

        return () => clearTimeout(timeout);
    }, [selectedIndex]);

    return (
        <div className='HomeUseCaseSectionContainer'>
            <div className='HomeUseCaseSectionIntro'>
                <h2 className='HomeUseCaseSectionIntroTitle'>Solving Complex Use Cases</h2>
                <p className='HomeUseCaseSectionDescription'>Our identity solutions align with how your organization operates; whether you’re securing employees, partners, customers, or machines.</p>
                <Link to={'/solutions#usecases'}>
                    <button className='HomeUseCaseSectionIntroCTA'>Explore All Use Cases
                        {/* <img src={CTAArrow}></img> */}
                    </button>
                </Link>
            </div>
            <div className='HomeUseCaseSectionGraphics'>
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`HomeUseCaseGraphicWrapper ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img
                            src={imgSrc}
                            className={`HomeUseCaseGraphicImage ${selectedIndex === index ? 'selected' : ''}`}
                            alt={`Use Case Graphic ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <div className={`HomeUseCaseSectionDetailedView ${animateDetail ? 'ReusableFadeUp' : ''}`}>
                <h3 className='HomeUseCaseSectionDetailsTitle'>{useCases[selectedIndex].title}</h3>
                {/* <div className='HomeUseCaseSectionDetailsDescription'>
                    {useCases[selectedIndex].description.map((text, i) => {
                        const [label, ...rest] = text.split(': ');
                        return (
                            <p key={i}>
                                <span>{label}: </span>{rest.join(': ')}
                            </p>
                        )
                    })}
                </div> */}

                <div className='HomeUseCaseSectionDetailsTableWrapper'>
                    <table className='HomeUseCaseSectionDetailsTable'>
                        <tbody>
                            {useCases[selectedIndex].description.map((text, i) => {
                                const [label, ...rest] = text.split(': ');
                                return (
                                    <tr key={i}>
                                        <td className="label-cell"><strong>{label}</strong></td>
                                        <td className="value-cell">{rest.join(': ')}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* <Link to={'/solutions#usecases'}>
                    <button className='HomeUseCaseSectionDetailsCTA'>See More Use Cases</button>
                </Link> */}
            </div>
        </div>
    )
}

export default HomeUseCaseSection