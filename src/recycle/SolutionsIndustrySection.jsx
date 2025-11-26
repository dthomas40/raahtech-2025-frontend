import React from 'react';
import "./SolutionsIndustrySection.css";
import { Link } from 'react-router-dom';
// Import the React Icons you want to use
import { 
    IoSchool, IoFlash, IoCash, IoGameController, IoBusiness, 
    IoMedkit, IoDocumentText, IoConstruct, IoFilm, IoCart, IoLaptop 
} from 'react-icons/io5';

const industries = [
    {
        id: 'industry-doc-1',
        title: 'Education',
        description: 'We help educational institutions ensure secure, streamlined access for students, faculty, and staff.',
        icon: IoSchool
    },
    {
        id: 'industry-doc-2',
        title: 'Energy and Utilities',
        description: 'We provide secure, compliant identity solutions for critical energy and utility infrastructure.',
        icon: IoFlash
    },
    {
        id: 'industry-doc-3',
        title: 'Financial Services',
        description: 'We enable financial institutions to meet compliance, enhance security, and streamline access.',
        icon: IoCash
    },
    {
        id: 'industry-doc-4',
        title: 'Gaming',
        description: 'We secure access for players and developers while enhancing the overall gaming experience.',
        icon: IoGameController
    },
    {
        id: 'industry-doc-5',
        title: 'Government and Public Sector',
        description: 'We support secure, efficient, and compliant access for government services and users.',
        icon: IoBusiness
    },
    {
        id: 'industry-doc-6',
        title: 'Healthcare and Insurance',
        description: 'We safeguard sensitive health data and ensure compliance for providers and insurers.',
        icon: IoMedkit
    },
    {
        id: 'industry-doc-7',
        title: 'Legal and Professional Services',
        description: 'We protect client data and enable secure collaboration in legal and professional environments.',
        icon: IoDocumentText
    },
    {
        id: 'industry-doc-8',
        title: 'Manufacturing & Supply Chain',
        description: 'We help protect IP and streamline operations across manufacturing and supply chains.',
        icon: IoConstruct
    },
    {
        id: 'industry-doc-9',
        title: 'Media and Entertainment',
        description: 'We secure content and support seamless access and collaboration for media teams.',
        icon: IoFilm
    },
    {
        id: 'industry-doc-10',
        title: 'Retail and E-Commerce',
        description: 'We enhance security and personalize customer experiences in retail and online commerce.',
        icon: IoCart
    },
    {
        id: 'industry-doc-11',
        title: 'Technology and Telecommunications',
        description: 'We deliver robust identity solutions to secure data and ensure operational continuity.',
        icon: IoLaptop
    },
];

const SolutionsIndustrySection = () => {
    return (
        <div className='SolutionsIndustryContainer' id='industries'>
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
    );
};

export default SolutionsIndustrySection;