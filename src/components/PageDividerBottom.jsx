import React from 'react';
import './PageDividerBottom.css';
import PageDividerBottomGraphic from '../assets/PageDividerGraphic.png'

const PageDividerBottom = () => {
    return (
        <div className='PageDividerBottomContainer'>
            <div className="PageDividerBottom">
                <hr className="PageDividerBottomLeft" />
                <img className="PageDividerBottomCenter" src={PageDividerBottomGraphic} alt='divider' />
                <hr className="PageDividerBottomRight" />
            </div>
        </div>

    );
};

export default PageDividerBottom;
