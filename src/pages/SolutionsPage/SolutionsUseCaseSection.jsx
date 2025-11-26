import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './SolutionsUseCaseSection.css';
import {
    IoChevronForward, IoFingerPrint, IoShieldCheckmark, IoPersonCircle,
    IoLaptop, IoLockOpen, IoSwapHorizontal, IoDocumentText, IoServer,
    IoRefresh, IoSearchCircle, IoHammer, IoCube, IoIdCard, IoLibrary,
    IoPersonAdd, IoShareSocial, IoSettings, IoCodeSlash, IoResize,
    IoWarning, IoBarChart, IoGitNetwork, IoShieldHalf, IoGitPullRequest,
    IoBuild, IoEye, IoDocumentAttach, IoIdCardOutline, IoSpeedometer,
    IoTime, IoSearch, IoVideocam, IoSync, IoSchool, IoLockClosed, IoPeople
} from 'react-icons/io5';

const categories = [
    'Workforce (B2E) IAM and IGA',
    'Consumer (B2C, B2B/B2B2C) IAM',
    'Privileged Access Management',
];

const useCases = [
    {
        category: 'Workforce (B2E) IAM and IGA',
        items: [
            {
                id: 'usecase-doc-1',
                title: 'Single Sign-On (SSO) for Employees',
                description: 'Secure and simplify employee access across systems.',
                icon: <IoFingerPrint />
            },
            {
                id: 'usecase-doc-2',
                title: 'Multi-factor Authentication (MFA) for Enhanced Security',
                description: 'Enhance security by adding MFA options.',
                icon: <IoShieldCheckmark />
            },
            {
                id: 'usecase-doc-3',
                title: 'Role-Based Access Control (RBAC)',
                description: 'Manage access permissions using defined roles.',
                icon: <IoPersonCircle />
            },
            {
                id: 'usecase-doc-4',
                title: 'Device and Endpoint Identity Management',
                description: 'Secure and manage identities across devices and endpoints.',
                icon: <IoLaptop />
            },
            {
                id: 'usecase-doc-5',
                title: 'Passwordless Authentication for Workforce',
                description: 'Improve security and user experience with passwordless options.',
                icon: <IoLockOpen />
            },
            {
                id: 'usecase-doc-6',
                title: 'Zero Trust Security and Adaptive Access Controls',
                description: 'Implement zero trust principles for adaptive access.',
                icon: <IoLockClosed />
            },
            {
                id: 'usecase-doc-7',
                title: 'Employee Onboarding and Offboarding',
                description: 'Automate onboarding and offboarding to streamline identity management.',
                icon: <IoSwapHorizontal />
            },
            {
                id: 'usecase-doc-8',
                title: 'Access Certification and Attestation',
                description: 'Regularly verify and certify user access for compliance.',
                icon: <IoDocumentText />
            },
            {
                id: 'usecase-doc-9',
                title: 'Access Request and Workflow Automation',
                description: 'Automate access requests and approval workflows.',
                icon: <IoServer />
            },
            {
                id: 'usecase-doc-10',
                title: 'Identity Lifecycle Management',
                description: 'Manage the complete lifecycle of user identities, from onboarding to deactivation.',
                icon: <IoRefresh />
            },
            {
                id: 'usecase-doc-11',
                title: 'Role Mining and Optimization',
                description: 'Discover and optimize role definitions for better access management.',
                icon: <IoSearchCircle />
            },
            {
                id: 'usecase-doc-12',
                title: 'Separation of Duties (SoD) Management',
                description: 'Ensure compliance by managing separation of duties.',
                icon: <IoHammer />
            },
            {
                id: 'usecase-doc-13',
                title: 'Granular Access Controls',
                description: 'Enforce fine-grained access policies for better security.',
                icon: <IoCube />
            },
            {
                id: 'usecase-doc-14',
                title: 'User Entitlement Management',
                description: 'Manage user entitlements efficiently.',
                icon: <IoIdCard />
            },
            {
                id: 'usecase-doc-15',
                title: 'Audit Compliance',
                description: 'Ensure adherence to regulatory compliance standards.',
                icon: <IoLibrary />
            },
        ],
    },
    {
        category: 'Consumer (B2C, B2B/B2B2C) IAM',
        items: [
            {
                id: 'usecase-doc-16',
                title: 'User Registration and Self-Service Portals',
                description: 'Enable users to register and manage their own accounts.',
                icon: <IoPersonAdd />
            },
            {
                id: 'usecase-doc-17',
                title: 'Social and Federated Login for Customers',
                description: 'Allow users to log in with social media or other federated identities.',
                icon: <IoShareSocial />
            },
            {
                id: 'usecase-doc-18',
                title: 'Customer Profile and Consent Management',
                description: 'Manage customer data and consent preferences.',
                icon: <IoSettings />
            },
            {
                id: 'usecase-doc-19',
                title: 'API Security and Access Control',
                description: 'Secure APIs and manage access policies effectively.',
                icon: <IoCodeSlash />
            },
            {
                id: 'usecase-doc-20',
                title: 'Seamless Customer Experience across Channels',
                description: 'Provide consistent user experiences across devices and platforms.',
                icon: <IoResize />
            },
            {
                id: 'usecase-doc-21',
                title: 'Real-Time Identity Threat Detection for Customers',
                description: 'Detect and respond to identity threats in real time.',
                icon: <IoWarning />
            },
            {
                id: 'usecase-doc-22',
                title: 'Progressive Profiling',
                description: 'Gradually collect user information to improve user experience and personalization.',
                icon: <IoBarChart />
            },
            {
                id: 'usecase-doc-23',
                title: 'Customer Role and Entitlement Management',
                description: 'Assign and manage customer roles and entitlements effectively.',
                icon: <IoPeople />
            },
            {
                id: 'usecase-doc-24',
                title: 'Cross-Organization Collaboration',
                description: 'Enable secure collaboration between different organizations.',
                icon: <IoGitNetwork />
            },
            {
                id: 'usecase-doc-25',
                title: 'Account Recovery and Identity Assurance',
                description: 'Assist users in recovering their accounts securely while maintaining identity assurance.',
                icon: <IoShieldHalf />
            },
            {
                id: 'usecase-doc-26',
                title: 'Partner Federation',
                description: 'Federate identities across partner organizations.',
                icon: <IoGitPullRequest />
            },
            {
                id: 'usecase-doc-27',
                title: 'Delegated Administration',
                description: 'Delegate administrative tasks to specific users or roles for improved efficiency.',
                icon: <IoBuild />
            },
            {
                id: 'usecase-doc-28',
                title: 'Contextual and Risk-Based Access',
                description: 'Use context and risk factors to manage access dynamically.',
                icon: <IoEye />
            },
            {
                id: 'usecase-doc-29',
                title: 'Partner and Consumer Identity Audit Compliance',
                description: 'Ensure partner organizations meet compliance standards.',
                icon: <IoDocumentAttach />
            },
            {
                id: 'usecase-doc-30',
                title: 'Supplier and Vendor Identity Management',
                description: 'Manage identities of suppliers and vendors.',
                icon: <IoIdCardOutline />
            },
            {
                id: 'usecase-doc-31',
                title: 'Adaptive Authentication',
                description: 'Adapt authentication based on real-time context and risk.',
                icon: <IoSpeedometer />
            },
        ],
    },
    {
        category: 'Privileged Access Management',
        items: [
            {
                id: 'usecase-doc-32',
                title: 'Administrator and High-Risk User Monitoring',
                description: 'Monitor privileged accounts for suspicious activity.',
                icon: <IoEye />
            },
            {
                id: 'usecase-doc-33',
                title: 'Just-In-Time (JIT) Privileged Access',
                description: 'Grant temporary access to privileged resources as needed.',
                icon: <IoTime />
            },
            {
                id: 'usecase-doc-34',
                title: 'Privileged Account Discovery and Lifecycle Management',
                description: 'Manage the lifecycle of privileged accounts.',
                icon: <IoSearch />
            },
            {
                id: 'usecase-doc-35',
                title: 'Session Monitoring and Audit',
                description: 'Monitor admin activities and ensure audit compliance.',
                icon: <IoVideocam />
            },
            {
                id: 'usecase-doc-36',
                title: 'Privileged Task Automation',
                description: 'Automate tasks performed by privileged users to enhance efficiency and security.',
                icon: <IoSync />
            },
            {
                id: 'usecase-doc-37',
                title: 'Privileged Access Governance',
                description: 'Ensure proper governance of privileged accounts and access levels.',
                icon: <IoSchool />
            },
        ],
    },
];

const SolutionsUseCaseSection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const activeUseCase = useCases.find(useCase => useCase.category === activeCategory);

    return (
        <>
            <div className='NavbarScrollSpacer' id='usecases' />
            <div className='SolutionsUseCaseSectionContainer'>
                <div className='SolutionsUseCaseSectionIntro'>
                    <h2 className='SolutionsUseCaseSectionIntroTitle'>By Use Case</h2>
                    <p className='SolutionsUseCaseSectionIntroDescription'>
                        Select a category below to see more.
                    </p>
                    <div className='SolutionUseCaseSectionButtons'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`SolutionUseCaseSectionButton ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                                {/* <img src={CTAArrow} alt='CTA Arrow' /> */}
                            </button>
                        ))}
                    </div>
                </div>
                {activeUseCase && (
                    <div className='SolutionsUseCaseSectionGraphicsContainer'>
                        {activeUseCase.items.map((item, idx) => (
                            <Link to={`/usecases/${item.id}`} key={idx}>
                                <div className='SolutionsUseCaseSectionGraphicWrapper' key={idx}>
                                    <div className='SolutionsUseCaseSectionGraphicText'>
                                        <h4 className='SolutionsUseCaseSectionGraphicTitle'>
                                            {item.icon}
                                            {item.title}
                                        </h4>
                                        <p className='SolutionsUseCaseSectionGraphicDescription'>{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>

    );
};

export default SolutionsUseCaseSection;
