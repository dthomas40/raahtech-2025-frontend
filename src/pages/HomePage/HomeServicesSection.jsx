import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomeServicesSection.css'
import HomeServicesSectionContentGraphic1 from '../../assets/HomeServicesGraphic5.png'
import HomeServicesSectionContentGraphic2 from '../../assets/HomeServicesGraphic3.png'
import HomeServicesSectionContentGraphic3 from '../../assets/HomeServicesGraphic6.png'
import HomeServicesSectionContentGraphic4 from '../../assets/HomeServicesGraphic7.png'
import CTAArrow from '../../assets/CTA_Arrow.png';

const HomeServicesSection = () => {
    const services = [
        {
            title: 'Advisory Services',
            description: 'Understand your current posture, define your roadmap, and align strategy with execution.'
        },
        {
            title: 'Professional Services',
            description: 'We bring Identity to life through design, deployment, and system integration.'
        },
        {
            title: 'Managed Support Services',
            description: 'We offer structured L1, L2, and L3 support from ticket resolution to strategic escalation.'
        },
        {
            title: 'Staffing Services',
            description: 'Add certified identity talent to your team for short-term or long-term success.'
        }
    ];

    const images = [HomeServicesSectionContentGraphic1, HomeServicesSectionContentGraphic2, HomeServicesSectionContentGraphic3, HomeServicesSectionContentGraphic4];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [animateDetail, setAnimateDetail] = useState(false);

    useEffect(() => {
        setAnimateDetail(true);
        const timeout = setTimeout(() => setAnimateDetail(false), 600); // match animation duration
        return () => clearTimeout(timeout);
    }, [selectedIndex]);


    return (
        <div className='HomeServicesSectionContainer'>
            <div className='HomeServicesSectionIntro'>
                <h2 className='HomeServicesSectionIntroTitle'>How We Help You Conquer Identity</h2>
                <p className='HomeServicesSectionIntroDescription'>Whether you need expert guidance, hands-on execution, long-term support, or specialized staffing, we help you build and maintain secure, scalable identity operations.</p>
            </div>
            <div className='HomeServicesSectionContent'>
                <div className='HomeServicesSectionContentGraphics'>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`HomeServicesSectionContentImageWrapper ${selectedIndex === index ? 'selected' : ''}`}
                            onClick={() => setSelectedIndex(index)}
                            aria-label={services[index].title}   // keeps accessibility without the visible label
                        >
                            {/* Removed the hover label div */}
                            <img
                                src={imgSrc}
                                className={`HomeServicesSectionContentImage ${selectedIndex === index ? 'selected' : ''}`}
                                alt={`Service: ${services[index].title}`}
                            />
                        </div>
                    ))}
                </div>

                <div className={`HomeServicesSectionContentDetailedView ${animateDetail ? 'ReusableFadeUp' : ''}`}>
                    <h3 className='HomeServicesSectionContentDetailedViewTitle'>
                        {services[selectedIndex].title}
                    </h3>
                    <p className='HomeServicesSectionContentDetailedViewDescription'>
                        {services[selectedIndex].description}
                    </p>
                    <Link to={'/services'}>
                        <button className='HomeServicesSectionContentDetailedViewCTA'>Browse Our Services
                            {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeServicesSection