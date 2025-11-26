import React, { useState, useEffect } from 'react';
import './SolutionsChooserSection.css';
import CTAArrow from '../../assets/CTA_Arrow.png';
import SolutionsChooserSectionGraphic1 from '../../assets/SolutionsChooserSectionGraphic1.png';
import SolutionsChooserSectionGraphic2 from '../../assets/SolutionsChooserSectionGraphic2.png';
import SolutionsChooserSectionGraphic3 from '../../assets/SolutionsChooserSectionGraphic3.png';
import { Link } from 'react-router-dom';

function SolutionsChooserSection() {
    const cardData = [
        {
            image: SolutionsChooserSectionGraphic1,
            path: 'industries',
            title: 'Industries',
            description: 'Identity solutions for a plethora of Business Verticals',
        }, {
            image: SolutionsChooserSectionGraphic3,
            path: 'usecases',
            title: 'Use Cases',
            description: 'Expertise in CIAM, Workforce, and PAM identity challenges.',
        }, {
            image: SolutionsChooserSectionGraphic2,
            path: 'platforms',
            title: 'Platforms',
            description: 'Solutions built with Okta, Ping Identity, Saviynt, and more.',
        },
    ];

    return (
        <div className="SolutionsChooserSectionContainer">
            <div className='SolutionsChooserSectionGraphicsContainer'>
                {cardData.map((item, index) => (
                    <Link to={'/solutions#' + item.path} key={index}>
                        <div
                            key={index}
                            className='SolutionsChooserSectionGraphicWrapper'
                        >
                            <img
                                src={item.image}
                                className="SolutionsChooserSectionGraphic"
                                alt={item.title}
                            />
                            <h2 className="SolutionsChooserSectionGraphicTitle">{item.title}</h2>
                            <p className="SolutionsChooserSectionGraphicDescription">{item.description}</p>
                            <button className='SolutionsChooserSectionCTA'>
                                Learn More
                                {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SolutionsChooserSection;
