import React, { useState } from 'react';
import AboutLeadershipSectionGraphic1 from '../../assets/AboutLeadershipSectionGraphic1.png';
import AboutLeadershipSectionGraphic2 from '../../assets/AboutLeadershipSectionGraphic2.png';
import AboutLeadershipSectionGraphic3 from '../../assets/AboutLeadershipSectionGraphic3.png';
import './AboutLeadershipSection.css';
import LinkedinIcon from '../../assets/AboutLeadershipLinkedInIcon.png';

const AboutLeadershipSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const leadershipInfo = [
        {
            image: AboutLeadershipSectionGraphic1,
            leader: 'Naren Jangid',
            position: 'Founder and CEO',
            linkedin: 'https://www.linkedin.com/in/narenjangid/',
            quote: 'I believe success is earned through grit, curiosity, and a culture that rewards merit over noise. At RAAH, we create space for people to grow, lead, and thrive. My focus is on grooming talent, building trust, and fostering an environment where great work - and great people - rise to the top.'
        },
        {
            image: AboutLeadershipSectionGraphic2,
            leader: 'Ovi Balaj',
            position: 'Chief Operating and Strategy Officer',
            linkedin: 'https://www.linkedin.com/in/ovi-balaj/',
            quote: 'To achieve greatness, I believe you must do three things: strive to be better today than you were yesterday, because luck favors the prepared; double-check everything, since small things often become big things; and when you see a good move, always look for a better one. At the center of these principles lies strategy and consistency. At RAAH, we don\'t just believe in this mindset - we live it. My goal is to draw that excellence out from the company and every person on the team.'
        },
        {
            image: AboutLeadershipSectionGraphic3,
            leader: 'Tarun Guhanand',
            position: 'Director of Implementation & Delivery',
            linkedin: 'https://www.linkedin.com/in/tarun-guhanand-atlanta-iam-consultant/',
            quote: 'Success is a by-product of doing things the right way. I lead with a people-first, platform-agnostic mindset, driving outcomes through strong relationships, sound process, and hands-on execution. With diverse experience across industries and identity platforms, I stay a permanent student and push others to do the same. I believe great solutions come from blending business sense with real-world technical delivery.'
        },
    ];

    const handleCardClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // toggle
    };

    return (
        <div className='AboutLeadershipSectionContainer'>
            <div className='AboutLeadershipSectionIntro'>
                <h2 className='AboutLeadershipSectionIntroTitle'>Meet The Leadership Behind RAAH</h2>
                <p className='AboutLeadershipSectionIntroDescription'>
                    We're engineers, strategists, and builders — brought together by a belief that identity security should enable growth, not restrict it.
                </p>
            </div>

            <div className='AboutLeadershipSectionLeadersWrapper'>
                {leadershipInfo.map((leader, index) => (
                    <div key={index}>
                        <div
                            className='AboutLeadershipSectionLeaderCard'
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={leader.image}
                                alt={leader.leader}
                                className='AboutLeadershipSectionLeaderImage'
                            />
                            <div className='AboutLeadershipSectionLeaderContent'>
                                <h3 className='AboutLeadershipSectionLeaderName'>
                                    {leader.leader}
                                    <a href={leader.linkedin} target='_blank' rel='noopener noreferrer' className='AboutLeadershipSectionLeaderLinkedinIcon'>
                                        <img src={LinkedinIcon} alt='LinkedIn' className='AboutLeadershipSectionLeaderLinkedinIcon' />
                                    </a>
                                </h3>
                                <p className='AboutLeadershipSectionLeaderPosition'>{leader.position}</p>
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className='AboutLeadershipSectionLeaderCardExtension'>
                                <p className='AboutLeadershipSectionLeaderQuote'>{leader.quote}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutLeadershipSection;