import React from 'react'
import AboutIdentityServicesSectionGraphic1 from '../../assets/AboutIdentityServicesSectionGraphic1.png';
import AboutIdentityServicesSectionGraphic2 from '../../assets/AboutIdentityServicesSectionGraphic2.png';
import AboutIdentityServicesSectionGraphic3 from '../../assets/AboutIdentityServicesSectionGraphic3.png';
import AboutIdentityServicesSectionGraphic4 from '../../assets/AboutIdentityServicesSectionGraphic4.png';
import AboutIdentityServicesSectionGraphic5 from '../../assets/AboutIdentityServicesSectionGraphic5.png';
import './AboutIdentityServices.css';

const AboutIdentityServices = () => {
    const services = [
        {
            image: AboutIdentityServicesSectionGraphic1,
            title: 'We Build, Not Just Advice',
            description: "We're hands-on. We implement, automate, and troubleshoot every step with you."
        },
        {
            image: AboutIdentityServicesSectionGraphic2,
            title: 'Identity-First, Not Platform-First',
            description: "Our solutions serve your architecture — not just our vendor partnerships."
        },
        {
            image: AboutIdentityServicesSectionGraphic3,
            title: 'Outcome-Driven, Not Hours-Driven',
            description: "We care more about your goals than our billable time."
        },
        {
            image: AboutIdentityServicesSectionGraphic4,
            title: 'Security & Compliance Baked In',
            description: "Risk, audit readiness, and zero trust are part of every deliverable."
        },
        {
            image: AboutIdentityServicesSectionGraphic5,
            title: 'Built for the Enterprise. Agile for the Mid-Market',
            description: "We scale programs, not overhead."
        },
    ]

    return (
        <div className='AboutIdentityServicesContainer'>
            <div className='AboutIdentityServicesWrapper'>
                {services.map((service, index) => (
                    <div className='AboutIdentityServicesCard' key={index}>
                        <img
                            src={service.image}
                            alt={service.title}
                            className='AboutIdentityServicesImage'
                        />
                        <div className='AboutIdentityServicesContent'>
                            <h3 className='AboutIdentityServicesTitle'>{service.title}</h3>
                            <p className='AboutIdentityServicesDescription'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutIdentityServices