import React, { useEffect, useState } from 'react'
import RAAHLogoWithText from "../assets/RAAHLogoWithText.png";
import RAAHLogoWithText_White from "../assets/RAAHLogoWithText_White.png";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [hasBorder, setHasBorder] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasBorder(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`Header ${hasBorder ? 'with-border' : ''}`}>

            <Link to={'/'}>
                <img className="RAAHLogo RAAHLogo--light" src={RAAHLogoWithText} alt="RAAH Logo with Text" />
                <img className="RAAHLogo RAAHLogo--dark" src={RAAHLogoWithText_White} alt="RAAH Logo with Text (white)" />
            </Link>
            <div className='PageCorner'>
                {/* <div className='PageCornerDot Dot1'>

                </div>
                <div className='PageCornerDot Dot2'>

                </div>
                <div className='PageCornerDot Dot3'>

                </div>
                <div className='PageCornerDot Dot4'>

                </div>
                <div className='PageCornerDot Dot5'>

                </div>
                <div className='PageCornerDot Dot6'>

                </div>
                <div className='PageCornerDot Dot7'>

                </div>
                <div className='PageCornerDot Dot8'>

                </div>
                <div className='PageCornerDot Dot9'>

                </div>
                <div className='PageCornerDot Dot10'>

                </div> */}
            </div>
        </div>
    )
}

export default Header