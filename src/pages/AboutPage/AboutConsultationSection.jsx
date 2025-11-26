import React from 'react'
import CTAArrow from '../../assets/CTA_Arrow.png';
import './AboutConsultationSection.css'

const AboutConsultationSection = () => {
    return (
        <div className='AboutConsultationSectionContainer'>
            <div className='AboutConsultationSectionIntro'>
                <h2 className='AboutConsultationSectionIntroTitle'>What Sets RAAH Technologies Apart</h2>
                <p className='AboutConsultationSectionIntroDescription'>
                    In a crowded identity services landscape, we stand out by how we operate — not just what we deliver.
                </p>
                <button className='AboutConsultationSectionCTA'>
                    Explore Our Identity Services
                    <img src={CTAArrow} alt="CTA Arrow" />
                </button>
            </div>
        </div>
    )
}

export default AboutConsultationSection