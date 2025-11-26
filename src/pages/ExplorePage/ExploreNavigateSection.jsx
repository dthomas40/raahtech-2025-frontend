import React from 'react'
import './ExploreNavigateSection.css'
import CTAArrow from '../../assets/CTA_Arrow.png';
import ExploreNavigateSectionGraphic1 from '../../assets/ExploreNavigateSectionGraphic1.png';
import ExploreNavigateSectionGraphic2 from '../../assets/ExploreNavigateSectionGraphic2.png';
import ExploreNavigateSectionGraphic3 from '../../assets/ExploreNavigateSectionGraphic3.png';
import ExploreNavigateSectionGraphic4 from '../../assets/ExploreNavigateSectionGraphic4.png';
import { Link } from 'react-router-dom';

const ExploreNavigateSection = () => {
    const tools = [
        {
            image: ExploreNavigateSectionGraphic1,
            title: 'Blogs & Whitepapers',
            description: 'Practical knowledge, strategic perspectives, and expert frameworks.',
            buttonName: 'Explore Insights',
            path: '/explore#whitepapers'
        },
        // {
        //     image: ExploreNavigateSectionGraphic2,
        //     title: 'Assessment Tool',
        //     description: 'Let us help you map your challenges to the right services.',
        //     buttonName: 'Start Assessment',
        //     path: '/contact'
        // },
        {
            image: ExploreNavigateSectionGraphic3,
            title: 'Trace the Breach',
            description: 'Let us help you map your challenges to the right services.',
            buttonName: 'Try the Tool',
            path: '/breach'
        },
        {
            image: ExploreNavigateSectionGraphic4,
            title: 'Press & Announcements',
            description: "See what's new at RAAH.",
            buttonName: 'Read Updates',
            path: '/explore#news'
        }
    ]

    return (
        <div className='ExploreNavigateSectionContainer'>
            <div className='ExploreNavigateSectionIntro'>
                <h2 className='ExploreNavigateSectionIntroTitle'>Navigate the Identity Landscape with Clarity </h2>
                <p className='ExploreNavigateSectionIntroDescription'>
                    Get grounded in identity risks, maturity, and strategies—on your terms.
                </p>
            </div>
            <div className='ExploreNavigateSectionToolsContainer'>
                {tools.map((tool, index) => (
                    <div className='ExploreNavigateSectionToolWrapper' key={index}>
                        <img
                            className='ExploreNavigateSectionToolImage'
                            src={tool.image}
                            alt={tool.title}
                        />
                        <p className='ExploreNavigateSectionToolTitle'>
                            {tool.title}
                        </p>
                        <p className='ExploreNavigateSectionToolDescription'>
                            {tool.description}
                        </p>
                        <Link to={tool.path}>
                            <button className='ExploreNavigateSectionCTA'>
                                {tool.buttonName}
                                {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreNavigateSection