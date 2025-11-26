import React from 'react'
import AboutMissionSectionGraphic from '../../assets/AboutMissionSectionGraphic.png'
import './AboutMissionSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faHammer, faBrain } from '@fortawesome/free-solid-svg-icons'

const AboutMissionSection = () => {
    const missions = [
        {
            title: 'Our Mission',
            description: 'To make identity manageable, measurable, and meaningful across the enterprise.',
            icon: faBullseye
        },
        {
            title: 'Our Origin Story',
            description: 'Founded by practitioners. Built by engineers. Focused on client outcomes from day one.',
            icon: faHammer
        },
        {
            title: 'How We Think About Identity',
            description: "We don't just deploy platforms. We build identity programs that endure.",
            icon: faBrain
        },
    ]

    return (
        <div className='AboutMissionSectionContainer'>
            <img
                src={AboutMissionSectionGraphic}
                className='AboutMissionSectionGraphic'
                alt='About Mission Section Graphic'
            />
            <div className='AboutMissionSectionTextWrapper'>
                {missions.map((mission, index) => (
                    <div className='AboutMissionSectionTextContainer' key={index}>
                        <p className='AboutMissionSectionTextTitle'>
                            <FontAwesomeIcon icon={mission.icon} className="AboutMissionSectionIcon" />{" "}
                            {mission.title}
                        </p>
                        <p className='AboutMissionSectionTextDescription'>{mission.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutMissionSection
