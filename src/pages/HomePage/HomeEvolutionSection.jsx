import React from 'react'
import { Link } from 'react-router-dom';
import HomeEvolutionSectionGraphicImage from '../../assets/HomeEvolutionSectionGraphicImage.png'
import CTAArrow from '../../assets/CTA_Arrow.png';
import './HomeEvolutionSection.css'
import HomeCTAPanel from './HomeCTAPanel';

const HomeEvolutionSection = () => {
    return (
        <div className='HomeEvolutionsSectionContainer'>
            <div className="HomeEvolutionSectionGraphic">
                <div className="HomeEvolutionSectionGraphicWrapper">
                    <div className="HomeEvolutionSectionGraphicAccent"></div>
                    <img
                        className="HomeEvolutionSectionGraphicImage"
                        src={HomeEvolutionSectionGraphicImage}
                        alt="Evolutions Graphic Image"
                    />
                </div>
            </div>
            <div className='HomeEvolutionsSectionIntro'>
                <h2 className='HomeEvolutionsSectionIntroTitle'>
                    <span className='HomeEvolutionsSectionIntroTitleAccent'>Learn</span> from the Past.
                    <span className='HomeEvolutionsSectionIntroTitleAccent'> Act</span> on the Present.
                    <span className='HomeEvolutionsSectionIntroTitleAccent'> Secure</span> the Future.
                </h2>

                <p className='HomeEvolutionsSectionIntroDescription'>Identity problems span far beyond login issues. We tackle the core pain points that block <span>security</span>, <span>compliance</span>, and <span>efficiency</span> at every point in your identity journey.</p>

                <div className='HomeEvolutionsSectionIntroCTAContainer'>
                    <Link to={'/contact'}>
                        <button className='HomeEvolutionsSectionIntroCTA'>Schedule A Consultation
                            {/* <img className='HomeEvolutionSectionIntroCTAArrow' src={CTAArrow}></img> */}
                        </button>
                    </Link>
                    <Link to={'/about'}>
                        <button className='HomeEvolutionsSectionIntroCTA'>Learn About Us
                            {/* <img className='HomeEvolutionSectionIntroCTAArrow' src={CTAArrow}></img> */}
                        </button>
                    </Link>
                    <Link to={'/explore'}>
                        <button className='HomeEvolutionsSectionIntroCTA'>Explore Resources
                            {/* <img className='HomeEvolutionSectionIntroCTAArrow' src={CTAArrow}></img> */}
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default HomeEvolutionSection