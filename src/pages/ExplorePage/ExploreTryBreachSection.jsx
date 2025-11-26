import React from 'react'
import { Link } from 'react-router-dom';
import './ExploreTryBreachSection.css'
import CTAArrow from '../../assets/CTA_Arrow.png';

const ExploreTryBreachSection = () => {
    return (
        <div className='ExploreTryBreachSectionContainer'>
            <div className='ExploreTryBreachSectionIntro'>
                <h2 className='ExploreTryBreachSectionIntroTitle'>Explore the Cost of Getting Identity Wrong</h2>
                <p className='ExploreTryBreachSectionIntroDescription'>
                    Use our interactive breach visualizer to see how real companies suffered real breaches — and what identity security gaps made them possible.
                </p>
                <Link to={'/breach'}>
                    <button className='ExploreTryBreachSectionCTA'>
                        Try the Breach Visualizer
                        {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ExploreTryBreachSection