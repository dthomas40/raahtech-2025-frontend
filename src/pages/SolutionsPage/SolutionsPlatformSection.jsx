import React from 'react'
import './SolutionsPlatformSection.css'
import { Link } from 'react-router-dom';

const SolutionsPlatformSection = () => {
    const iconModules = import.meta.glob('../../assets/PlatformSectionImages/*.png', {
        eager: true,
        import: 'default',
    });

    const icons = Object.entries(iconModules)
        .sort(([a], [b]) => {
            const getNum = (filename) => Number(filename.match(/PlatformSectionGraphic(\d+)\.png$/)?.[1]);
            return getNum(a) - getNum(b);
        })
        .map(([, mod]) => mod);

    return (
        <>
            <div className='NavbarScrollSpacer' id='platforms' />
            <div className='SolutionsPlatformSectionContainer'>
                <div className='SolutionsPlatformSectionIntro'>
                    <h2 className='SolutionsPlatformSectionIntroTitle'>By Platform</h2>
                    <p className='SolutionsPlatformSectionIntroDescription'>
                        RAAH delivers platform-specific identity solutions, addressing a wide range of challenges with tailored expertise.We future-proof your Identity Infrastructure.
                    </p>
                </div>
                <div className='SolutionsPlatformSectionGraphicsContainer'>
                    {icons.map((icon, index) => (
                        <Link key={icon} to={'/platforms/platform-doc-' + (index + 1)}>
                            <img src={icon}
                                className='PlatformSectionGraphic'
                                alt='PlatformSection Graphic'
                                key={icon}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SolutionsPlatformSection