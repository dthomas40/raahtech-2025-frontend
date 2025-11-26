import React from 'react';
import './PageDividerTop.css';
import PageDividerTopGraphic from '../assets/PageDividerGraphic.png'

const PageDividerTop = () => {
    return (
        <div className='PageDividerTopContainer'>
            <div className="PageDividerTop">
                <hr className="PageDividerTopLeft" />
                <img className="PageDividerTopCenter" src={PageDividerTopGraphic} alt='divider' />
                <hr className="PageDividerTopRight" />
            </div>
        </div>

    );
};

export default PageDividerTop;
