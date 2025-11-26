import React, { useState } from 'react'
import './ServicesHeroSection.css'
import ServicesHeroSectionContentGraphic1 from '../../assets/ServicesHeroSectionContentGraphic5.png'
import ServicesHeroSectionContentGraphic2 from '../../assets/ServicesHeroSectionContentGraphic3.png'
import ServicesHeroSectionContentGraphic3 from '../../assets/ServicesHeroSectionContentGraphic6.png'
import ServicesHeroSectionContentGraphic4 from '../../assets/ServicesHeroSectionContentGraphic7.png'
import CTAArrow from '../../assets/CTA_Arrow.png';
import { Link } from 'react-router-dom'

const ServicesHeroSection = () => {
    const services = [
        {
            title: 'Advisory Services',
            id: 'advisory',
            description: 'Strategic roadmapping, architecture reviews, compliance readiness, and vendor selection guidance.',
            // cta: 'Start with an Identity Assessment',
            path: 'contact'
        },
        {
            title: 'Professional Services',
            id: 'implementation',
            description: 'End-to-end integration, custom workflows, automation pipelines, and platform configuration.',
            // cta: 'Talk to Our Implementation Team',
            path: 'contact'
        },
        {
            title: 'Managed Support Services',
            id: 'support',
            description: 'Day-to-day operational support, ticket triage, incident response, and continuous identity optimization.',
            // cta: 'Get Identity Support',
            path: 'contact'
        },
        {
            title: 'Staffing Services',
            id: 'staffing',
            description: 'Access vetted identity professionals across strategy, engineering, operations, and governance roles.',
            // cta: 'Request Identity Talent',
            path: 'contact'
        }
    ];

    const images = [ServicesHeroSectionContentGraphic1, ServicesHeroSectionContentGraphic2, ServicesHeroSectionContentGraphic3, ServicesHeroSectionContentGraphic4];

    return (
        <div className='ServicesHeroSectionContainer'>
            {/* <div className='ServicesHeroSectionIntro'>
                <h2 className='ServicesHeroSectionIntroTitle'>How We Help You Manage Identity</h2>
            </div> */}
            <div className='ServicesHeroSectionContent'>
                <div className='ServicesHeroSectionContentItems'>
                    {services.map((service, index) => (
                        <div className='ServicesHeroSectionContentItem' key={index}>
                            <div className='ServicesHeroSectionContentImageWrapper'>
                                <Link to={'/services#' + service.id}>
                                    {/* <div className='ServicesHeroSectionContentHoverTitle'>
                                        {service.title}
                                    </div> */}
                                    <img
                                        src={images[index]}
                                        className='ServicesHeroSectionContentImage'
                                        alt={`Services Graphic ${index + 1}`}
                                    />
                                </Link>

                            </div>
                            <div className='ServicesHeroSectionContentDetailedView'>
                                <h3 className='ServicesHeroSectionContentDetailedViewTitle'>
                                    {service.title}
                                </h3>
                                <p className='ServicesHeroSectionContentDetailedViewDescription'>
                                    {service.description}
                                </p>
                                {/* <Link to={'/' + service.path}>
                                    <button className='ServicesHeroSectionContentDetailedViewCTA'>
                                        {service.cta}
                                        <img src={CTAArrow} alt="CTA Arrow" />
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={'/contact'}>
                    <button className='ServicesHeroSectionContentCTA'>
                        Talk To A Specialist
                        {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default ServicesHeroSection