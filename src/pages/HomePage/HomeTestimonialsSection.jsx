import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAArrow from '../../assets/CTA_Arrow.png';
import HomeTestimonialsSectionTestimonial1Graphic from '../../assets/HomeTestimonialsSectionTestimonial1Graphic.png'
import HomeTestimonialsSectionTestimonial2Graphic from '../../assets/HomeTestimonialsSectionTestimonial2Graphic.png'
import HomeTestimonialsSectionTestimonial3Graphic from '../../assets/HomeTestimonialsSectionTestimonial3Graphic.png'
import './HomeTestimonialsSection.css'
import PageDividerTop from '../../components/PageDividerTop';
import PageDividerBottom from '../../components/PageDividerBottom';
import PageDividerReduced from '../../components/PageDividerReduced';
import PageDividerTestimonials from '../../components/PageDividerTestimonials';
import PageDividerRemoved from '../../components/PageDividerRemoved';

const HomeTestimonialsSection = () => {
    const testimonials = [
        {
            quote: "“RAAH brought their network and security expertise to one of our complex airport clients, showing professionalism and responsiveness throughout. We appreciate their work and look forward to future projects together.”",
            author: "Denise Hughes - Northeast Territory Director, SITA Inc. USA"
        },
        {
            quote: "“RAAH's Advisory Services helped us manage M&A complexities, data, target systems, and identity processes, strengthening our OIM/OAM and Okta solutions to improve our IAM program.”",
            author: "Gary Burpo - Director of Technology (IAM), Cox Auto"
        },
        {
            quote: "“We have engaged RAAH on multiple occasions. Their team of Developers, Testers, BAs, Architects, and SMEs allows RAAH to deliver Identity solutions and professional expertise that meet every aspect of your IAM portfolio.”",
            author: "Todd Oxford - Senior Security Director, Bed Bath & Beyond"
        }
    ];
    const images = [
        HomeTestimonialsSectionTestimonial1Graphic,
        HomeTestimonialsSectionTestimonial2Graphic,
        HomeTestimonialsSectionTestimonial3Graphic
    ];

    return (
        <div className='HomeTestimonialsSectionContainer'>
            <h2 className='HomeTestimonialsSectionIntroTitle'>What Our Clients Are Saying</h2>
            <div className="HomeTestimonialsSectionContainers">
                {testimonials.map((testimonial, index) => (
                    <div className='HomeTestimonialsSectionTestimonialContainer' key={index}>
                        <div className='HomeTestimonialsSectionTestimonialGraphicContainer'>

                            <img
                                src={images[index]}
                                className='HomeTestimonialsSectionTestimonialGraphic'
                                alt={`Testimonial Graphic ${index + 1}`}
                            />
                        </div>
                        <div className='HomeTestimonialsSectionTestimonialTextContainer'>
                            <p className='HomeTestimonialsSectionTestimonialParagraph'>
                                {testimonial.quote}
                            </p>
                            <p className='HomeTestimonialsSectionTestimonialAuthor'>
                                {testimonial.author}
                            </p>
                        </div>
                    </div>
                ))}
                {/* <PageDividerRemoved />
                <div className='HomeTestimonialsSectionCTAContainer'>
                    <p className='HomeTestimonialsSectionCTAText'>
                        Let’s move identity forward—securely, simply, and at scale.
                    </p>
                    <Link to={'/contact'}>
                        <button className='HomeTestimonialsSectionCTA'>
                            Schedule A Consultation
                            <img src={CTAArrow} alt="Arrow" />
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default HomeTestimonialsSection;