import React from 'react';
import './PageDividerRemoved.css';
import PageDividerRemovedGraphic from '../assets/PageDividerGraphic.png'

const PageDividerRemoved = () => {
    return (
        <div className='PageDividerRemovedContainer'>
            <div className="PageDividerRemoved">
                <hr className="PageDividerRemovedLeft" />
                <img className="PageDividerRemovedCenter" src={PageDividerRemovedGraphic} alt='divider' />
                <hr className="PageDividerRemovedRight" />
            </div>
        </div>

    );
};

export default PageDividerRemoved;
