import React from 'react'
import './ExploreInsightsSection.css'
import CTAArrow from '../../assets/CTA_Arrow.png';

const ExploreInsightsSection = () => {
    return (
        <div className='ExploreInsightsSectionContainer'>
            <div className='ExploreInsightsSectionIntro'>
                <h2 className='ExploreInsightsSectionIntroTitle'>What Sets RAAH Technologies Apart</h2>
                <p className='ExploreInsightsSectionIntroDescription'>
                    Access practical guidance, strategic frameworks, and technical deep-dives from the identity security frontlines.
                </p>
                {/* <button className='ExploreInsightsSectionCTA'>
                    Subscribe for Identity Updates
                    <img src={CTAArrow} alt="CTA Arrow" />
                </button> */}
            </div>
        </div>
    )
}

export default ExploreInsightsSection