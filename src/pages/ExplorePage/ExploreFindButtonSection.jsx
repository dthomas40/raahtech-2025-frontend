import React from 'react'
import './ExploreFindButtonSection.css'
import CTAArrow from '../../assets/CTA_Arrow.png';
import { Link } from 'react-router-dom';

const ExploreFindButtonSection = () => {
    const buttonNames = [
        'Explore Identity',
        'Keep Up With RAAH',
        'Schedule A Consultation',
        'Check Out Our Solutions',
        'Learn More About Our Services'
    ]

    const buttonPaths = [
        '/explore#whitepapers',
        '/explore#news',
        '/contact',
        '/solutions',
        '/services'
    ]

    return (
        <div className='ExploreFindButtonSectionContainer'>
            <div className='ExploreFindButtonSectionIntro'>
                <h2 className='ExploreFindButtonSectionIntroTitle'>Find the Identity Support You Need</h2>
                <p className='ExploreFindButtonSectionIntroDescription'>
                    Not sure where to start? Answer a few questions about your environment, pain points, and priorities — and we'll map you to the most relevant services and follow up with a tailored plan.
                </p>
            </div>
            <div className='ExploreFindButtonSectionWrapper'>
                {buttonNames.map((buttonName, index) => (
                    <Link key={index} to={buttonPaths[index]}>
                        <button className='ExploreFindButtonSectionCTA' key={index}>
                            {buttonName}
                            {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ExploreFindButtonSection