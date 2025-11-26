import React from 'react'
import CTAArrow from '../../assets/CTA_Arrow.png';
import './AboutIdentityIntroSection.css'
import { Link } from 'react-router-dom';

const AboutIdentityIntroSection = () => {
    return (
        <div className='AboutIdentityIntroSectionContainer'>
            <div className='AboutIdentityIntroSectionIntro'>
                <h2 className='AboutIdentityIntroSectionIntroTitle'>What Sets RAAH Technologies Apart</h2>
                <p className='AboutIdentityIntroSectionIntroDescription'>
                    In a crowded identity services landscape, we stand out by how we operate — not just what we deliver.
                </p>
                <Link to={'/explore'}>
                    <button className='AboutIdentityIntroSectionCTA'>
                        Explore Our Identity Services
                        {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AboutIdentityIntroSection