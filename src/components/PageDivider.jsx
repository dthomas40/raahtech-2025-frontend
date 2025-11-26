import React from 'react';
import './PageDivider.css';
import PageDividerGraphic from '../assets/PageDividerGraphic.png'

const PageDivider = () => {
    return (
        <div className='PageDividerContainer'>
            <div className="PageDivider">
                <hr className="PageDividerLeft" />
                <img className="PageDividerCenter" src={PageDividerGraphic} alt='divider' />
                <hr className="PageDividerRight" />
            </div>
        </div>

    );
};

export default PageDivider;
