import React from 'react';
import './PageDividerTestimonials.css';
import PageDividerTestimonialsGraphic from '../assets/PageDividerGraphic.png'

const PageDividerTestimonials = () => {
    return (
        <div className='PageDividerTestimonialsContainer'>
            <div className="PageDividerTestimonials">
                <hr className="PageDividerTestimonialsLeft" />
                <img className="PageDividerTestimonialsCenter" src={PageDividerTestimonialsGraphic} alt='divider' />
                <hr className="PageDividerTestimonialsRight" />
            </div>
        </div>

    );
};

export default PageDividerTestimonials;
