import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SolutionsIndustryDetailedView.css';
import {
    IoSchool, IoFlash, IoCash, IoGameController, IoBusiness,
    IoMedkit, IoDocumentText, IoConstruct, IoFilm, IoCart, IoLaptop,
    IoWarningOutline, IoHammerOutline, IoBulbOutline, IoStarOutline, IoRocketOutline
} from 'react-icons/io5';

const getIconForTitle = (pageTitle) => {
    switch (pageTitle) {
        case 'Education':
            return <IoSchool className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Energy and Utilities':
            return <IoFlash className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Financial Services':
            return <IoCash className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Gaming':
            return <IoGameController className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Government and Public Sector':
            return <IoBusiness className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Healthcare and Insurance':
            return <IoMedkit className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Legal and Professional Services':
            return <IoDocumentText className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Manufacturing & Supply Chain':
            return <IoConstruct className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Media and Entertainment':
            return <IoFilm className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Retail and E-Commerce':
            return <IoCart className='SolutionsIndustryDetailedViewTitleIcon' />;
        case 'Technology and Telecommunications':
            return <IoLaptop className='SolutionsIndustryDetailedViewTitleIcon' />;
        default:
            return null;
    }
};

const getIconForSubheader = (title) => {
    // Check if the title string contains a known keyword
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('challenges')) {
        return <IoWarningOutline className='SolutionsIndustryDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('solutions')) {
        return <IoHammerOutline className='SolutionsIndustryDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('use case')) {
        return <IoBulbOutline className='SolutionsIndustryDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('benefits')) {
        return <IoStarOutline className='SolutionsIndustryDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('looking ahead')) {
        return <IoRocketOutline className='SolutionsIndustryDetailedViewSubheaderIcon' />;
    }
    return null;
};

const industryDocuments = [
    {
        id: 'industry-doc-1',
        pageTitle: 'Education',
        title: 'Transforming Education with Secure Identity Solutions',
        description: 'Education is rapidly evolving in the digital age, and secure access to learning resources is essential to enhancing the learning experience for students, faculty, and administrators. At RAAH Technologies, we empower educational institutions with cutting-edge identity solutions that ensure secure, streamlined access for all stakeholders.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Identity Challenges in Education')}
                    Identity Challenges in Education
                </h3>
                <p>
                    Educational institutions face a wide range of identity challenges,
                    including managing remote access, protecting student and faculty data, and
                    providing secure access for third-party partners. Our comprehensive
                    identity solutions help solve these challenges with a focus on:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Managing secure access for faculty,
                        staff, and administrative employees, ensuring compliance with
                        educational standards and secure handling of sensitive information.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Enabling effective Identity Governance and
                        Administration, including the onboarding, offboarding, and entitlement
                        management of employees, students, and guest lecturers.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Providing seamless access to online
                        resources for students, ensuring a secure and smooth experience with
                        features like Single Sign-On (SSO) and Multi-Factor Authentication
                        (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B/B2B2C IAM:</span> Managing identities for third-party
                        partners, research collaborators, and other affiliated institutions to
                        foster seamless collaboration.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Securing privileged access to administrative
                        systems and sensitive research data to prevent unauthorized use.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Education')}
                    Tailored Solutions for Education
                </h3>
                <p>Our tailored identity solutions for education include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling students, faculty, and
                        staff to use a single set of credentials to access multiple Industrys,
                        from the Learning Management System (LMS) to library systems.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect sensitive student data and administrative
                        information.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring the right
                        individuals have access to the right resources, whether they are
                        students accessing course materials or faculty managing grades.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user accounts
                        throughout their lifecycle, from student onboarding to alumni access,
                        ensuring compliance with regulations like FERPA.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Restricting access
                        to critical administrative systems, protecting sensitive data, and
                        ensuring proper usage by authorized personnel only.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: University of Future')}
                    Use Case: University of Future
                </h3>
                <p>
                    <span>Challenge:</span> The University of Future wanted to provide
                    secure remote access to its Learning Management System (LMS), library
                    resources, and other online Industrys while ensuring compliance with
                    regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> Our identity solution provided an integrated
                    SSO experience across multiple Industrys, allowing students, staff, and
                    alumni easy access to essential resources. Additionally, Multi-Factor
                    Authentication (MFA) was implemented to add an extra layer of security for
                    high-value transactions and administrative access.
                </p>
                <p>
                    <span>Result:</span> The University of Future experienced a{' '}
                    <span>25% increase</span> in student satisfaction and a significant
                    improvement in operational efficiency due to the reduction in IT helpdesk
                    requests for password resets.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Student Experience:</span> Seamless access to all
                        learning resources through a unified identity system.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Streamlined Faculty Access:</span> Quick and secure access to
                        teaching Industrys, student records, and administrative tools.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Full compliance with educational
                        regulations like FERPA and GDPR, ensuring data privacy and security.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Reduced Administrative Overhead:</span> Automated identity
                        lifecycle management reduces manual processes for IT staff, enabling
                        them to focus on other priorities.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of education requires secure, scalable, and adaptable identity
                    solutions that enhance the digital learning experience. At{' '}
                    <span>RAAH Technologies</span>, we are committed to supporting
                    educational institutions with innovative IAM, IGA, CIAM, and PAM solutions
                    that meet the evolving needs of the digital campus.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-2',
        pageTitle: 'Energy and Utilities',
        title: 'Securing the Energy and Utilities Sector with Tailored Identity Solutions',
        description:
            'The energy and utilities sector is critical to national infrastructure and must be safeguarded against both physical and cyber threats. At RAAH Technologies, we offer customized identity and access management solutions that provide secure, compliant, and efficient operations for energy companies and utilities.',
        content: (
            <div className="SolutionsIndustryDetailedViewContentWrapper">
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in the Energy and Utilities Sector')}
                    Challenges in the Energy and Utilities Sector
                </h3>
                <p>
                    The energy sector faces unique challenges, including managing secure access to critical infrastructure, meeting compliance requirements, and protecting against potential cyber threats. Our tailored solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing workforce access to critical systems and infrastructure, ensuring employees and contractors have the appropriate level of access at all times.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing identity governance for both internal and external personnel, managing user lifecycles, and ensuring compliance with industry regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Implementing Privileged Access Management to secure access to control systems, grid infrastructure, and other high-value assets.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for third-party vendors and partners that need access to the energy network, ensuring secure collaboration while limiting risks.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Energy and Utilities')}
                    Tailored Solutions for Energy and Utilities
                </h3>
                <p>
                    RAAH Technologies provides customized identity solutions for the energy and utilities sector, including:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Implementing MFA to protect access to critical systems and infrastructure, adding an extra layer of security against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Enabling role-based access for field workers, administrative personnel, and contractors to ensure secure access to systems based on user roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Facilitating collaboration with third-party contractors and vendors by securely managing their identities and ensuring compliance with industry standards.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Secure Power Company')}
                    Use Case: Secure Power Company
                </h3>
                <p>
                    <span>Challenge:</span> Secure Power Company needed to ensure that their workforce and contractors had secure access to critical infrastructure while maintaining compliance with industry standards.
                </p>
                <p>
                    <span>Solution:</span> RAAH provided an integrated identity and access management solution, implementing Workforce IAM and MFA to secure access to control systems and sensitive grid infrastructure. Additionally, Role-Based Access Control (RBAC) was employed to ensure that field workers, contractors, and administrative staff had appropriate access based on their roles.
                </p>
                <p>
                    <span>Result:</span> Secure Power Company reported a <span>30% reduction</span> in unauthorized access attempts and a significant improvement in their compliance posture, which helped avoid costly fines.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Security:</span> Comprehensive IAM and PAM solutions that protect critical infrastructure from unauthorized access and cyber threats.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Simplified identity governance reduces manual processes for managing access and enhances productivity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to industry regulations, reducing the risk of penalties for non-compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Streamlined Collaboration:</span> Federated identity solutions enable secure collaboration with third-party vendors and contractors.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of the energy and utilities sector demands secure, resilient, and scalable identity solutions that can adapt to evolving threats and regulatory changes. At <span>RAAH Technologies</span>, we are committed to providing innovative IAM, IGA, PAM, and federated identity solutions to safeguard energy infrastructure and ensure reliable services for the community.
                </p>
            </div>
        ),
    },
    {
        id: 'industry-doc-3',
        pageTitle: 'Financial Services',
        title: 'Securing Financial Services with Cutting-Edge Identity Solutions',
        description:
            'In the highly regulated world of financial services, secure access to sensitive data and systems is crucial. At RAAH Technologies, we provide tailored identity solutions that ensure compliance, enhance security, and streamline access for financial institutions and their customers.',
        content: (
            <div className="SolutionsIndustryDetailedViewContentWrapper">
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Financial Services')}
                    Challenges in Financial Services
                </h3>
                <p>
                    The financial sector faces unique challenges including data breaches, stringent regulatory requirements, and the need for secure yet convenient customer experiences. Our identity solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to financial systems and sensitive data, ensuring compliance with industry standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing effective Identity Governance and Administration to manage user lifecycles, entitlements, and ensure audit readiness.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Offering seamless, secure customer access to banking platforms with features like Single Sign-On (SSO) and Multi-Factor Authentication (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for third-party partners and vendors, ensuring secure access while minimizing risks.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that have access to critical financial systems, mitigating risks of insider threats and unauthorized access.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Financial Services')}
                    Tailored Solutions for Financial Services
                </h3>
                <p>Our customized identity solutions for financial services include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security for both workforce and customer access, helping protect sensitive financial data from unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring employees and contractors have appropriate access to systems based on their roles, enhancing security and compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Customer Identity and Access Management (CIAM):</span> Providing secure and seamless access to online banking, investment platforms, and other services.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing privileged accounts to protect high-value assets and reduce the risk of breaches from insiders or compromised credentials.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enabling secure collaboration with partners, vendors, and affiliates by managing their identities efficiently.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Secure Banking Corporation')}
                    Use Case: Secure Banking Corporation
                </h3>
                <p>
                    <span>Challenge:</span> Secure Banking Corporation needed to secure employee and customer access to critical banking systems, comply with regulatory requirements, and mitigate insider threats.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated identity solution that included Workforce IAM, CIAM, and PAM. We implemented Multi-Factor Authentication (MFA) across workforce and customer channels, and used Role-Based Access Control (RBAC) to ensure that access to systems was strictly managed based on user roles.
                </p>
                <p>
                    <span>Result:</span> Secure Banking Corporation achieved a <span>40% reduction</span> in unauthorized access attempts, improved regulatory compliance, and enhanced customer satisfaction with a more secure, seamless login experience.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to financial industry regulations, reducing the risk of non-compliance and associated penalties.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Security:</span> Comprehensive identity solutions, including PAM and MFA, protect against cyber threats and unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Customer Experience:</span> Secure, seamless access to financial services through CIAM, enhancing customer trust and satisfaction.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Role-based access and automated lifecycle management reduce the burden on IT teams, enabling them to focus on higher-value tasks.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    As financial services continue to evolve, secure identity solutions are paramount to meet increasing customer expectations and regulatory demands. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, CIAM, and PAM solutions that help financial institutions stay ahead of the curve, ensuring both security and convenience.
                </p>
            </div>
        ),
    },
    {
        id: 'industry-doc-4',
        pageTitle: 'Gaming',
        title: 'Securing the Gaming Industry with Innovative Identity Solutions',
        description:
            'The gaming industry has grown into a vast online ecosystem that demands secure and seamless access for players, developers, and administrators. At RAAH Technologies, we deliver tailored identity solutions that protect players, enhance game experiences, and support the gaming community\'s dynamic needs.',
        content: (
            <div className="SolutionsIndustryDetailedViewContentWrapper">
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in the Gaming Industry')}
                    Challenges in the Gaming Industry
                </h3>
                <p>
                    The gaming industry faces unique challenges including fraud prevention, account security, and providing a seamless user experience across devices. Our identity solutions tackle these challenges head-on:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Player IAM:</span> Securing player accounts, preventing fraud, and ensuring safe access to gaming platforms.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities of developers, moderators, and community managers to ensure appropriate access control.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Providing players with seamless access to gaming platforms through Single Sign-On (SSO) and Multi-Factor Authentication (MFA) to enhance security and user experience.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for partners, content creators, and external collaborators, ensuring secure integration and collaboration.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that have access to sensitive game data, admin tools, and in-game assets.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for the Gaming Industry')}
                    Tailored Solutions for the Gaming Industry
                </h3>
                <p>Our customized identity solutions for gaming include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect player accounts from unauthorized access, enhancing trust in the platform.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling players to use a single set of credentials across multiple games and platforms, improving the gaming experience.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that developers, moderators, and administrators have appropriate access to game systems based on their roles.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative tools and in-game assets by controlling access to privileged accounts.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Supporting collaboration with partners and content creators by managing their identities and access securely.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Global Gaming Network')}
                    Use Case: Global Gaming Network
                </h3>
                <p>
                    <span>Challenge:</span> Global Gaming Network needed to secure player accounts, prevent fraud, and provide a seamless cross-platform gaming experience for players worldwide.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented CIAM solutions with Multi-Factor Authentication (MFA) to protect player accounts and Single Sign-On (SSO) to streamline access across multiple games. Role-Based Access Control (RBAC) was also implemented to manage developer and administrator access to critical game systems.
                </p>
                <p>
                    <span>Result:</span> Global Gaming Network saw a <span>50% reduction</span> in account takeover incidents and a significant improvement in player satisfaction due to the seamless login experience.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Player Security:</span> Protecting player accounts with MFA and CIAM, reducing the risk of fraud and unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved User Experience:</span> Seamless access across multiple games and platforms with Single Sign-On (SSO), enhancing player satisfaction.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlined access management for developers and administrators, reducing the burden on IT teams.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Scalable Collaboration:</span> Federated Identity Management enables secure partnerships with content creators and third-party developers.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of gaming requires secure, scalable, and user-friendly identity solutions that provide both security and a seamless player experience. At <span>RAAH Technologies</span>, we are dedicated to delivering advanced IAM, CIAM, PAM, and IGA solutions to help gaming companies meet evolving challenges and deliver exceptional experiences for their players.
                </p>
            </div>
        ),
    },
    {
        id: 'industry-doc-5',
        pageTitle: 'Government and Public Sector',
        title: 'Enhancing Security for Government and Public Sector with Identity Solutions',
        description: 'The government and public sector face unique challenges when it comes to secure access and identity management. At RAAH Technologies, we offer identity solutions tailored to meet the specific needs of government entities, ensuring security, compliance, and efficient service delivery to the public.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in the Government and Public Sector')}
                    Challenges in the Government and Public Sector
                </h3>
                <p>
                    Government agencies must secure sensitive citizen data, manage complex workflows, and comply with stringent regulations. Our identity solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to government systems and sensitive data, ensuring compliance with regulatory requirements.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user roles, entitlements, and ensure accountability through audit trails.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Citizen Identity Management (CIAM):</span> Offering seamless, secure access to public services, enabling citizens to engage safely with government platforms.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external contractors, partners, and inter-agency collaboration, ensuring secure integration.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that have access to critical government systems, mitigating risks of insider threats and unauthorized access.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Government and Public Sector')}
                    Tailored Solutions for Government and Public Sector
                </h3>
                <p>Our customized identity solutions for government include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to sensitive government systems, safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring government employees and contractors have appropriate access based on their roles, reducing the risk of data breaches.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Citizen Identity and Access Management (CIAM):</span> Providing secure and seamless access to citizen services, such as tax portals and online applications.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts to protect sensitive citizen data and critical infrastructure.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enabling secure collaboration with other government agencies, departments, and public-sector partners.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: City of Innovation')}
                    Use Case: City of Innovation
                </h3>
                <p>
                    <span>Challenge:</span> The City of Innovation wanted to modernize its digital services for citizens and employees, providing a secure, streamlined experience while ensuring regulatory compliance.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed a comprehensive solution that included Citizen Identity Management (CIAM) for secure public-facing services and Workforce IAM for internal employees. The solution incorporated Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC) to protect sensitive data and streamline access.
                </p>
                <p>
                    <span>Result:</span> The City of Innovation saw a <span>35% increase</span> in citizen engagement with online services and a significant improvement in operational efficiency due to reduced IT helpdesk requests and manual processes.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Citizen Services:</span> Secure and seamless access to government services, enhancing public trust and engagement.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Security:</span> Robust identity solutions protect sensitive citizen and government data from unauthorized access and cyber threats.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Adherence to government regulations and standards, reducing the risk of non-compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Automated identity management and streamlined workflows reduce administrative overhead for government IT teams.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The government and public sector are at a critical juncture in their digital transformation. Secure, scalable, and compliant identity solutions are essential for providing efficient and trustworthy services. At <span>RAAH Technologies</span>, we are dedicated to helping government agencies meet these challenges with advanced IAM, IGA, CIAM, and PAM solutions that secure the digital future of public services.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-6',
        pageTitle: 'Healthcare and Insurance',
        title: 'Protecting Healthcare and Insurance with Advanced Identity Solutions',
        description:
            'The healthcare and insurance sectors are highly regulated and handle some of the most sensitive personal data. RAAH Technologies provides comprehensive identity solutions that help providers and insurers ensure compliance, protect patient data, and streamline access for employees and partners.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Healthcare and Insurance')}
                    Challenges in Healthcare and Insurance
                </h3>
                <p>
                    Healthcare and insurance companies face unique challenges, including compliance with regulations like HIPAA and GDPR, protecting patient privacy, and managing access to electronic health records (EHRs). Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to patient records and administrative systems, ensuring compliance with privacy regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles, entitlements, and access reviews for healthcare professionals and staff.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Offering secure, seamless access to patient portals, where individuals can manage their health records, appointments, and insurance claims.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for partners, affiliates, and third-party vendors who require secure access to shared systems.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that have access to critical systems and sensitive patient data, mitigating risks of insider threats.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Healthcare and Insurance')}
                    Tailored Solutions for Healthcare and Insurance
                </h3>
                <p>Our customized identity solutions for healthcare and insurance include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to sensitive patient data, ensuring compliance with HIPAA and other regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that doctors, nurses, and administrative staff have appropriate access to patient information and systems based on their roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Facilitating secure collaboration with partners, laboratories, and insurance providers by managing their identities and access efficiently.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts to protect electronic health records (EHRs) and other critical systems from unauthorized access.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Secure Health Network')}
                    Use Case: Secure Health Network
                </h3>
                <p>
                    <span>Challenge:</span> Secure Health Network needed to ensure compliance with HIPAA regulations, protect patient data from breaches, and provide seamless access to electronic health records (EHRs) for medical professionals.
                </p>
                <p>
                    <span>Solution:</span> RAAH provided an integrated identity and access management solution that included Workforce IAM and PAM. We implemented Multi-Factor Authentication (MFA) to secure access to patient data and used Role-Based Access Control (RBAC) to ensure that doctors and nurses had appropriate access to systems.
                </p>
                <p>
                    <span>Result:</span> Secure Health Network achieved full compliance with HIPAA, saw a <span>20% reduction</span> in data breach incidents, and improved operational efficiency due to streamlined access for medical staff.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>HIPAA and Regulatory Compliance:</span> Ensuring adherence to strict regulations, protecting patient data, and avoiding costly penalties.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Patient Privacy:</span> Comprehensive identity solutions, including MFA and PAM, protect sensitive patient information from unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Streamlined Access:</span> Secure and seamless access to EHRs and other systems for healthcare professionals, enhancing productivity and patient care.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Automated identity management reduces administrative overhead for IT teams, allowing them to focus on other critical tasks.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of healthcare and insurance relies on secure, scalable, and compliant identity solutions that can protect sensitive patient data and enhance the digital experience for all stakeholders. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, CIAM, and PAM solutions that help healthcare and insurance companies meet evolving challenges and safeguard the future of patient care.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-7',
        pageTitle: 'Legal and Professional Services',
        title: 'Protecting Legal and Professional Services with Secure Identity Solutions',
        description:
            'Legal and professional services firms handle some of the most sensitive client information and intellectual property. RAAH Technologies provides advanced identity solutions to help these firms protect data, ensure regulatory compliance, and enable secure collaboration among employees and partners.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Legal and Professional Services')}
                    Challenges in Legal and Professional Services
                </h3>
                <p>
                    Legal and professional firms face unique challenges, including protecting client confidentiality, complying with industry regulations, and managing secure access to sensitive documents. Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to client files and confidential data, ensuring compliance and data privacy.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles, entitlements, and audit trails for regulatory compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external counsel, auditors, and third-party partners to enable secure collaboration.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts with access to critical systems and sensitive client information, mitigating insider threats.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Legal and Professional Services')}
                    Tailored Solutions for Legal and Professional Services
                </h3>
                <p>Our customized identity solutions for legal and professional services include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to client data and sensitive systems.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that lawyers, paralegals, and administrative staff have appropriate access to client files and systems based on their roles.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure file sharing and collaboration with external parties through federated identity management, ensuring data protection.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts with access to legal document management systems and other critical infrastructure.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Global Law Firm')}
                    Use Case: Global Law Firm
                </h3>
                <p>
                    <span>Challenge:</span> A global law firm needed to secure access to confidential client files, comply with legal regulations, and enable secure collaboration with external partners.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated identity solution that included Workforce IAM and B2B IAM. We implemented Multi-Factor Authentication (MFA) to protect access to sensitive client data and used Role-Based Access Control (RBAC) to ensure that only authorized personnel had access to specific case files.
                </p>
                <p>
                    <span>Result:</span> The law firm achieved a <span>25% reduction</span> in security incidents related to data access, improved compliance with legal standards, and enhanced its reputation for data protection.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Client Confidentiality:</span> Robust identity solutions protect sensitive client data and intellectual property from unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to legal regulations and industry standards, reducing the risk of penalties.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Federated identity management enables secure collaboration with external parties, maintaining data privacy.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlined access management and automated workflows reduce the burden on IT teams, enabling them to focus on higher-value tasks.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of legal and professional services requires secure, scalable, and compliant identity solutions that can protect sensitive client data and enable secure collaboration. At <span>RAAH Technologies</span>, we are dedicated to delivering advanced IAM, IGA, B2B IAM, and PAM solutions that help firms meet evolving challenges and safeguard their clients' interests.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-8',
        pageTitle: 'Manufacturing & Supply Chain',
        title: 'Enhancing Security in Manufacturing & Supply Chain with Identity Solutions',
        description:
            'The manufacturing and supply chain sectors are increasingly digital, requiring secure access to operational systems and intellectual property. RAAH Technologies delivers tailored identity solutions that protect against cyber threats, streamline operations, and ensure secure collaboration across the supply chain.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Manufacturing & Supply Chain')}
                    Challenges in Manufacturing & Supply Chain
                </h3>
                <p>
                    The manufacturing and supply chain sectors face unique challenges, including protecting intellectual property, securing operational technology (OT) systems, and managing access for a distributed workforce and partners. Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to operational and administrative systems, ensuring that only authorized personnel can access critical tools.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles and entitlements for a diverse workforce, including factory workers, engineers, and administrative staff.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for suppliers, distributors, and partners, enabling secure collaboration and data sharing across the supply chain.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts with access to OT systems, robotics, and other critical manufacturing infrastructure.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Manufacturing & Supply Chain')}
                    Tailored Solutions for Manufacturing & Supply Chain
                </h3>
                <p>Our customized identity solutions for manufacturing and supply chain include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to critical operational systems, preventing unauthorized access and cyber threats.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that a diverse workforce has appropriate access to systems based on their roles, enhancing security and operational efficiency.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enabling secure collaboration with suppliers and distributors, ensuring data privacy and integrity across the supply chain.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts with access to critical manufacturing infrastructure, mitigating the risk of insider threats and system disruptions.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Global Manufacturing Corporation')}
                    Use Case: Global Manufacturing Corporation
                </h3>
                <p>
                    <span>Challenge:</span> A global manufacturing corporation needed to protect its intellectual property, secure its operational technology (OT) systems, and streamline access for a distributed workforce and a large network of suppliers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive identity solution that included Workforce IAM, B2B IAM, and PAM. We implemented Multi-Factor Authentication (MFA) to protect access to critical systems and used Role-Based Access Control (RBAC) to ensure that the right personnel had access to the right tools.
                </p>
                <p>
                    <span>Result:</span> The corporation experienced a <span>20% reduction</span> in security incidents related to intellectual property theft and a significant improvement in operational efficiency due to streamlined access for its workforce and partners.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IP Protection:</span> Robust identity solutions protect intellectual property and proprietary data from unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Security:</span> Comprehensive IAM and PAM solutions secure critical OT systems and manufacturing infrastructure.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Streamlined Collaboration:</span> Federated identity management enables secure data sharing and collaboration across the supply chain.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Efficiency:</span> Automated identity management and streamlined workflows reduce the burden on IT teams, allowing them to focus on other priorities.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of manufacturing and supply chain demands secure, scalable, and resilient identity solutions that can protect against evolving threats and enable digital transformation. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, B2B IAM, and PAM solutions that help manufacturing companies safeguard their operations and intellectual property.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-9',
        pageTitle: 'Media and Entertainment',
        title: 'Securing Media and Entertainment with Identity Solutions',
        description:
            'The media and entertainment industry is driven by content and collaboration, requiring secure access for a global network of artists, producers, and distributors. RAAH Technologies provides tailored identity solutions that protect content, enable secure collaboration, and ensure seamless access for all stakeholders.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Media and Entertainment')}
                    Challenges in Media and Entertainment
                </h3>
                <p>
                    The media and entertainment sector faces unique challenges, including protecting valuable digital content, managing access for a diverse and often temporary workforce, and preventing unauthorized distribution. Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to content creation tools, production assets, and distribution platforms.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles, entitlements, and access reviews for employees, contractors, and freelancers.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for partners, distributors, and content collaborators, ensuring secure access to shared resources.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts with access to master copies of content, production servers, and other high-value assets.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Media and Entertainment')}
                    Tailored Solutions for Media and Entertainment
                </h3>
                <p>Our customized identity solutions for media and entertainment include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to valuable digital content and production systems.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that artists, producers, and distributors have appropriate access to content and tools based on their roles.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enabling secure collaboration with external partners and freelancers, ensuring data privacy and integrity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts with access to critical production and distribution infrastructure, mitigating insider threats.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Global Entertainment Studio')}
                    Use Case: Global Entertainment Studio
                </h3>
                <p>
                    <span>Challenge:</span> A global entertainment studio needed to protect its digital content from piracy, manage secure access for a global network of freelancers, and streamline collaboration with distributors.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated identity solution that included Workforce IAM, B2B IAM, and PAM. We implemented Multi-Factor Authentication (MFA) to protect access to content and used Role-Based Access Control (RBAC) to ensure that the right personnel had access to the right production assets.
                </p>
                <p>
                    <span>Result:</span> The studio achieved a <span>30% reduction</span> in security incidents related to content theft, improved its ability to collaborate securely with freelancers and partners, and enhanced its reputation for data protection.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Content Protection:</span> Robust identity solutions protect valuable digital content and production assets from unauthorized access and piracy.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Federated identity management enables secure collaboration with external partners and freelancers, ensuring data privacy.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlined access management and automated workflows reduce the burden on IT teams, allowing them to focus on creative tasks.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Compliance:</span> Ensuring adherence to industry standards and regulations, reducing the risk of non-compliance.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of media and entertainment requires secure, scalable, and flexible identity solutions that can protect content, enable collaboration, and adapt to the evolving needs of the industry. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, B2B IAM, and PAM solutions that help entertainment companies safeguard their creative work and deliver exceptional experiences for their audiences.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-10',
        pageTitle: 'Retail and E-Commerce',
        title: 'Enhancing Retail and E-Commerce with Secure Identity Solutions',
        description:
            'The retail and e-commerce sectors are dynamic and competitive, requiring secure, seamless experiences for customers and employees. RAAH Technologies provides tailored identity solutions that enhance security, personalize customer experiences, and streamline operations for retailers and online businesses.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Retail and E-Commerce')}
                    Challenges in Retail and E-Commerce
                </h3>
                <p>
                    Retail and e-commerce companies face unique challenges, including preventing fraud, protecting customer data, and providing a seamless omnichannel experience. Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to point-of-sale (POS) systems, inventory management, and customer data, ensuring data privacy and compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles and entitlements for employees and contractors across multiple locations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Offering secure, seamless customer access to online stores, loyalty programs, and personalized experiences through Single Sign-On (SSO) and Multi-Factor Authentication (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for suppliers, partners, and logistics providers, enabling secure collaboration and data sharing.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts with access to critical e-commerce platforms and sensitive customer data, mitigating the risk of data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Retail and E-Commerce')}
                    Tailored Solutions for Retail and E-Commerce
                </h3>
                <p>Our customized identity solutions for retail and e-commerce include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security for both workforce and customer access, protecting sensitive customer data and preventing fraud.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling customers to use a single set of credentials across multiple platforms, from online stores to loyalty programs, enhancing the user experience.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Customer Identity and Access Management (CIAM):</span> Providing a secure and personalized experience for customers, enhancing trust and loyalty.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts with access to e-commerce platforms and other critical systems, mitigating the risk of insider threats.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Online Retailer')}
                    Use Case: Online Retailer
                </h3>
                <p>
                    <span>Challenge:</span> A large online retailer needed to provide a secure and seamless experience for its customers, prevent fraud, and protect sensitive customer data across its digital platforms.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed a comprehensive solution that included Customer Identity and Access Management (CIAM) with Multi-Factor Authentication (MFA) and Single Sign-On (SSO). We also implemented Workforce IAM to secure employee access to point-of-sale systems and inventory management.
                </p>
                <p>
                    <span>Result:</span> The retailer saw a <span>25% reduction</span> in fraudulent transactions and a significant increase in customer satisfaction due to the seamless and secure online experience.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Customer Experience:</span> Secure and seamless access to online stores and loyalty programs, enhancing customer trust and satisfaction.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Fraud Prevention:</span> Robust identity solutions, including MFA and CIAM, protect against fraud and unauthorized access to customer accounts.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlined access management for employees and partners reduces administrative overhead and enhances productivity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Data Protection:</span> Comprehensive security measures protect sensitive customer data and intellectual property from data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of retail and e-commerce demands secure, scalable, and customer-centric identity solutions that can protect sensitive data and provide a seamless omnichannel experience. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, and CIAM solutions that help retailers meet evolving challenges and deliver exceptional experiences for their customers.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-11',
        pageTitle: 'Technology and Telecommunications',
        title: 'Securing Technology and Telecommunications with Identity Solutions',
        description:
            'The technology and telecommunications sectors are the backbone of the digital world, requiring robust security and seamless access for employees, partners, and customers. RAAH Technologies provides advanced identity solutions that secure data, ensure operational continuity, and support innovation.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Challenges in Technology and Telecommunications')}
                    Challenges in Technology and Telecommunications
                </h3>
                <p>
                    The technology and telecommunications sectors face unique challenges, including protecting intellectual property, managing a global workforce, and providing secure access for partners and customers. Our solutions address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to proprietary systems and sensitive data, ensuring compliance and data privacy.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration to manage user lifecycles, entitlements, and audit trails for a diverse, global workforce.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Offering secure, seamless access to services for customers, ensuring a positive user experience through features like Single Sign-On (SSO) and Multi-Factor Authentication (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for partners, vendors, and affiliates, enabling secure collaboration and data sharing.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts with access to critical infrastructure, networks, and sensitive customer data.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Tailored Solutions for Technology and Telecommunications')}
                    Tailored Solutions for Technology and Telecommunications
                </h3>
                <p>Our customized identity solutions for technology and telecommunications include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra layer of security to protect access to critical systems and sensitive data.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that employees, contractors, and partners have appropriate access to systems based on their roles.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enabling secure collaboration with partners and affiliates, ensuring data privacy and integrity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing administrative accounts with access to critical infrastructure, mitigating the risk of insider threats and data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Global Tech Corporation')}
                    Use Case: Global Tech Corporation
                </h3>
                <p>
                    <span>Challenge:</span> A global tech corporation needed to secure access to its intellectual property, manage a large and distributed workforce, and provide a secure experience for its customers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive identity solution that included Workforce IAM, B2B IAM, and CIAM. We implemented Multi-Factor Authentication (MFA) to protect access to sensitive data and used Role-Based Access Control (RBAC) to ensure that employees and partners had appropriate access.
                </p>
                <p>
                    <span>Result:</span> The corporation experienced a <span>40% reduction</span> in security incidents and a significant improvement in operational efficiency due to streamlined access for its workforce and customers.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IP Protection:</span> Robust identity solutions protect intellectual property and proprietary data from unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Security:</span> Comprehensive IAM and PAM solutions secure critical infrastructure and networks.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Streamlined Collaboration:</span> Federated identity management enables secure data sharing and collaboration with partners and affiliates.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Customer Trust:</span> Secure and seamless access to services through CIAM, enhancing customer trust and loyalty.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">
                    {getIconForSubheader('Looking Ahead')}
                    Looking Ahead
                </h3>
                <p>
                    The future of technology and telecommunications requires secure, scalable, and adaptable identity solutions that can protect against evolving threats and support innovation. At <span>RAAH Technologies</span>, we are committed to delivering advanced IAM, IGA, CIAM, and PAM solutions that help tech companies safeguard their operations and intellectual property.
                </p>
            </div>
        )
    },
];

const SolutionsIndustryDetailedView = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const selectedIndustryDocument = pathname.split('/').pop();

    const handleClose = () => {
        navigate('/solutions');
    };

    const document = industryDocuments.find((doc) => doc.id === selectedIndustryDocument);

    return (
        <div className='SolutionsIndustryDetailedViewContainer'>
            <div className='SolutionsIndustryDetailedViewIntro'>
                <div className='SolutionsIndustryDetailedViewIntroTitleBar'>
                    <div className='SolutionsIndividualIPageIntroTitleAccent'>
                        <div className='SolutionsIndustryDetailedViewIntroMainTitle'>
                            {document?.pageTitle}
                            {getIconForTitle(document?.pageTitle)}
                        </div>
                    </div>
                    <button className='SolutionsIndustryDetailedViewCloseButton' onClick={handleClose} aria-label="Return to Solutions">
                        <svg
                            className="SolutionsIndustryDetailedViewCloseArrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        <p>Return to Solutions</p>
                    </button>
                </div>
                <h2 className='SolutionsIndustryDetailedViewIntroTitle'>
                    {document?.title}
                </h2>
                <p className='SolutionsIndustryDetailedViewIntroDescription'>
                    {document?.description}
                </p>
            </div>
            {document?.content}
        </div>
    );
};

export default SolutionsIndustryDetailedView;
