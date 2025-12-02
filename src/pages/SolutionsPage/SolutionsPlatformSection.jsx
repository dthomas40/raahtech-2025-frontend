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
            const getNum = (filename) =>
                Number(filename.match(/PlatformSectionGraphic(\d+)\.png$/)?.[1]);
            return getNum(a) - getNum(b);
        })
        .map(([path, mod]) => {
            const fileName = path.split('/').pop().replace('.png', '');
            const name = fileName
                .replace('PlatformSectionGraphic', '')
                .trim();

            // Map image index → platform slug
            const slugs = {
                '1': 'cyberark',
                '2': 'delinea',
                '3': 'gigya',
                '4': 'microsoft',
                '5': 'okta',
                '6': 'omada',
                '7': 'ping',
                '8': 'radiant-logic',
                '9': 'saviynt',
                '10': 'servicenow',
                '11': 'wso2'
            };

            return {
                img: mod,
                slug: slugs[name]
            };
        });

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
                    {icons.map((icon) => (
                        <Link key={icon.slug} to={`/platforms/${icon.slug}`}>
                            <img
                                src={icon.img}
                                className='PlatformSectionGraphic'
                                alt={icon.slug}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SolutionsPlatformSection
