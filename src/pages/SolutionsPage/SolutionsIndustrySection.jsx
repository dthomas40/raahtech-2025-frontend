import React from 'react';
import "./SolutionsIndustrySection.css";
import { Link } from 'react-router-dom';
import {
    IoSchool, IoFlash, IoCash, IoGameController, IoBusiness,
    IoMedkit, IoDocumentText, IoConstruct, IoFilm, IoCart, IoLaptop
} from 'react-icons/io5';

const industries = [
    {
        id: 'education',
        title: 'Education',
        description: 'We help educational institutions ensure secure, streamlined access for students, faculty, and staff.',
        icon: IoSchool
    },
    {
        id: 'energy-and-utilities',
        title: 'Energy and Utilities',
        description: 'We provide secure, compliant identity solutions for critical energy and utility infrastructure.',
        icon: IoFlash
    },
    {
        id: 'financial-services',
        title: 'Financial Services',
        description: 'We enable financial institutions to meet compliance, enhance security, and streamline access.',
        icon: IoCash
    },
    {
        id: 'gaming',
        title: 'Gaming',
        description: 'We secure access for players and developers while enhancing the overall gaming experience.',
        icon: IoGameController
    },
    {
        id: 'government-and-public-sector',
        title: 'Government and Public Sector',
        description: 'We support secure, efficient, and compliant access for government services and users.',
        icon: IoBusiness
    },
    {
        id: 'healthcare-and-insurance',
        title: 'Healthcare and Insurance',
        description: 'We safeguard sensitive health data and ensure compliance for providers and insurers.',
        icon: IoMedkit
    },
    {
        id: 'legal-and-professional-services',
        title: 'Legal and Professional Services',
        description: 'We protect client data and enable secure collaboration in legal and professional environments.',
        icon: IoDocumentText
    },
    {
        id: 'manufacturing-and-supply-chain',
        title: 'Manufacturing & Supply Chain',
        description: 'We help protect IP and streamline operations across manufacturing and supply chains.',
        icon: IoConstruct
    },
    {
        id: 'media-and-entertainment',
        title: 'Media and Entertainment',
        description: 'We secure content and support seamless access and collaboration for media teams.',
        icon: IoFilm
    },
    {
        id: 'retail-and-e-commerce',
        title: 'Retail and E-Commerce',
        description: 'We enhance security and personalize customer experiences in retail and online commerce.',
        icon: IoCart
    },
    {
        id: 'technology-and-telecommunications',
        title: 'Technology and Telecommunications',
        description: 'We deliver robust identity solutions to secure data and ensure operational continuity.',
        icon: IoLaptop
    },
];

const SolutionsIndustrySection = () => {
    return (
        <>
            <div className='NavbarScrollSpacer' id='industries' />
            <div className='SolutionsIndustryContainer'>
                <div className='SolutionsIndustrySectionIntro'>
                    <h2 className='SolutionsIndustrySectionIntroTitle'>By Industry</h2>
                    <p className='SolutionsIndustrySectionIntroDescription'>
                        We help businesses across healthcare, finance, retail, technology, and more secure identities, simplify access, and stay compliant.
                    </p>
                </div>
                <div className='SolutionsIndustryBlockContainer'>
                    {industries.map((paper, index) => (
                        <Link to={'/industries/' + paper.id} key={index}>
                            <div className='SolutionsIndustryBlock'>
                                <div className='SolutionsIndustryBlockIconTop'>
                                    <span className='SolutionsIndustryBlockIcon'>
                                        {/* Render the React Icon component directly */}
                                        <paper.icon />
                                    </span>
                                </div>
                                <div className='SolutionsIndustryBlockTextContent'>
                                    <h3 className='SolutionsIndustryBlockTitle'>{paper.title}</h3>
                                    <p className='SolutionsIndustryBlockDescription'>{paper.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SolutionsIndustrySection;