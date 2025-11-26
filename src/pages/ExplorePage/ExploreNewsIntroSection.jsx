import React from 'react'
import './ExploreNewsIntroSection.css'
import CTAArrow from '../../assets/CTA_Arrow.png';

const ExploreNewsIntroSection = () => {
    return (
        <>
            <div className='NavbarScrollSpacer' id='news' />
            <div className='ExploreNewsIntroSectionContainer'>
                <div className='ExploreNewsIntroSectionIntro'>
                    <h2 className='ExploreNewsIntroSectionIntroTitle'>In The News</h2>
                    <p className='ExploreNewsIntroSectionIntroDescription'>
                        Catch up on announcements, events, partnerships, and recognitions.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ExploreNewsIntroSection