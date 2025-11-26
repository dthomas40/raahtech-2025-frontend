import React from 'react'
import CTAArrow from '../../assets/CTA_Arrow.png';
import './AboutScheduleSection.css'
import { Link } from 'react-router-dom';

const AboutScheduleSection = () => {
    return (
        <div className='AboutScheduleSectionContainer'>
            <div className='AboutScheduleSectionIntro'>
                <p className='AboutScheduleSectionIntroDescription'>
                    Start Your Identity Journey With Us
                </p>
                <Link to={'/contact'}>
                    <button className='AboutScheduleSectionCTA'>
                        Schedule A Consultation
                        <img src={CTAArrow} alt="CTA Arrow" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AboutScheduleSection