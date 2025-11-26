import React from 'react';
import './PageDividerReduced.css';
import PageDividerReducedGraphic from '../assets/PageDividerGraphic.png'

const PageDividerReduced = () => {
    return (
        <div className='PageDividerReducedContainer'>
            <div className="PageDividerReduced">
                <hr className="PageDividerReducedLeft" />
                <img className="PageDividerReducedCenter" src={PageDividerReducedGraphic} alt='divider' />
                <hr className="PageDividerReducedRight" />
            </div>
        </div>

    );
};

export default PageDividerReduced;
