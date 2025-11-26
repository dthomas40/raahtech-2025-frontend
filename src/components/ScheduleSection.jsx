import React from 'react'
import CTAArrow from '../assets/CTA_Arrow.png';
import './ScheduleSection.css'
import { Link } from 'react-router-dom';

const ScheduleSection = () => {
    return (
        <div className='ScheduleSectionContainer'>
            <div className='ScheduleSectionIntro'>
                <p className='ScheduleSectionIntroDescription'>
                    Start Your Identity Journey With Us
                </p>
                <Link to={'/contact'}>
                    <button className='ScheduleSectionCTA'>
                        Schedule A Consultation
                        {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ScheduleSection