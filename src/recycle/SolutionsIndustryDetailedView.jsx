import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SolutionsIndustryDetailedView.css';


const industryDocuments = [
    {
        id: 'industry-doc-1',
        pageTitle: 'Education',
        title: 'Transforming Education with Secure Identity Solutions',
        description: 'Education is rapidly evolving in the digital age, and secure access to learning resources is essential to enhancing the learning experience for students, faculty, and administrators. At RAAH Technologies, we empower educational institutions with cutting-edge identity solutions that ensure secure, streamlined access for all stakeholders.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Identity Challenges in Education</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Education</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: University of Future</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
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
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in the Energy and Utilities Sector</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Energy and Utilities</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Secure Power Company</h3>
                <p>
                    <span>Challenge:</span> Secure Power Company needed to ensure that their workforce and contractors had secure access to critical infrastructure while maintaining compliance with industry standards.
                </p>
                <p>
                    <span>Solution:</span> RAAH provided an integrated identity and access management solution, implementing Workforce IAM and MFA to secure access to control systems and sensitive grid infrastructure. Additionally, Role-Based Access Control (RBAC) was employed to ensure that field workers, contractors, and administrative staff had appropriate access based on their roles.
                </p>
                <p>
                    <span>Result:</span> Secure Power Company reported a <span>30% reduction</span> in unauthorized access attempts and a significant improvement in their compliance posture, which helped avoid costly fines.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
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
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Financial Services</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Financial Services</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Secure Banking Corporation</h3>
                <p>
                    <span>Challenge:</span> Secure Banking Corporation needed to secure employee and customer access to critical banking systems, comply with regulatory requirements, and mitigate insider threats.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated identity solution that included Workforce IAM, CIAM, and PAM. We implemented Multi-Factor Authentication (MFA) across workforce and customer channels, and used Role-Based Access Control (RBAC) to ensure that access to systems was strictly managed based on user roles.
                </p>
                <p>
                    <span>Result:</span> Secure Banking Corporation achieved a <span>40% reduction</span> in unauthorized access attempts, improved regulatory compliance, and enhanced customer satisfaction with a more secure, seamless login experience.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
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
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in the Gaming Industry</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for the Gaming Industry</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Gaming Network</h3>
                <p>
                    <span>Challenge:</span> Global Gaming Network needed to secure player accounts, prevent fraud, and provide a seamless cross-platform gaming experience for players worldwide.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented CIAM solutions with Multi-Factor Authentication (MFA) to protect player accounts and Single Sign-On (SSO) to streamline access across multiple games. Role-Based Access Control (RBAC) was also implemented to manage developer and administrator access to critical game systems.
                </p>
                <p>
                    <span>Result:</span> Global Gaming Network saw a <span>50% reduction</span> in account takeover incidents and a significant improvement in player satisfaction due to the seamless login experience.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
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

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    The future of gaming requires secure, scalable, and user-friendly identity solutions that provide both security and a seamless player experience. At <span>RAAH Technologies</span>, we are dedicated to delivering advanced IAM, CIAM, PAM, and IGA solutions to help gaming companies meet evolving challenges and deliver exceptional experiences for their players.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-5',
        pageTitle: 'Government and Public Sector',
        title: 'Enhancing Security for Government and Public Sector with Identity Solutions',
        description: 'The government and public sector face unique challenges when it comes to secure access and identity management. At RAAH Technologies, we offer identity solutions tailored to meet the specific needs of government entities, ensuring security, compliance, and efficient service delivery to the public.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in the Government and Public Sector</h3>
                <p>
                    Government agencies must secure sensitive citizen data, manage complex
                    workflows, and comply with stringent regulations. Our identity solutions
                    address these key challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing employee access to government
                        systems and sensitive data, ensuring compliance with regulatory
                        requirements.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Providing Identity Governance and Administration
                        to manage user roles, entitlements, and ensure accountability through
                        audit trails.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Citizen Identity Management (CIAM):</span> Offering seamless,
                        secure access to public services, enabling citizens to engage safely
                        with government platforms.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external contractors,
                        partners, and inter-agency collaboration, ensuring secure integration.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that have access to
                        critical government systems, mitigating risks of insider threats and
                        unauthorized access.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Government and Public Sector</h3>
                <p>Our customized identity solutions for government include:</p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect access to sensitive government systems,
                        safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring government
                        employees and contractors have appropriate access based on their roles,
                        reducing the risk of data breaches.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Citizen Identity and Access Management (CIAM):</span> Enabling
                        secure access to government services for citizens, providing a seamless
                        experience for accessing public resources.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Protecting
                        administrative tools and critical systems by controlling access to
                        privileged accounts.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Federated Identity Management:</span> Facilitating secure
                        collaboration between government agencies and with external partners by
                        managing their identities efficiently.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: City Government of Metropolis</h3>
                <p>
                    <span>Challenge:</span> The City Government of Metropolis needed to
                    secure employee and contractor access to critical municipal systems while
                    providing citizens with a seamless way to access online government
                    services.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated
                    identity solution that included Workforce IAM, CIAM, and PAM. We
                    implemented Multi-Factor Authentication (MFA) across workforce channels,
                    and Role-Based Access Control (RBAC) was used to manage access to
                    municipal systems based on user roles.
                </p>
                <p>
                    <span>Result:</span> The City Government of Metropolis achieved a{' '}
                    <span>35% reduction</span> in unauthorized access attempts, improved
                    security posture, and enhanced citizen satisfaction with a more secure,
                    user-friendly online service portal.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Security:</span> Comprehensive IAM and PAM solutions
                        protect critical infrastructure and sensitive data from unauthorized
                        access and insider threats.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to government
                        regulations, reducing the risk of non-compliance and associated
                        penalties.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Citizen Experience:</span> Secure, seamless access to
                        government services through CIAM, enhancing citizen engagement and
                        trust.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlined identity management
                        for government employees and contractors, reducing the burden on IT
                        teams and improving service delivery.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As government services continue to digitize, secure identity solutions are
                    essential to meet regulatory requirements and enhance service delivery. At{' '}
                    <span>RAAH Technologies</span>, we are committed to delivering
                    advanced IAM, IGA, CIAM, and PAM solutions that help government entities
                    ensure security, compliance, and citizen trust.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-6',
        pageTitle: 'Healthcare and Insurance',
        title: 'Transforming Healthcare and Insurance with Secure Identity Solutions',
        description: 'The healthcare and insurance sectors handle sensitive personal and medical data, requiring robust identity and access management to safeguard patient information and ensure regulatory compliance. At RAAH Technologies, we provide advanced identity solutions designed to meet the unique needs of healthcare providers, insurers, and patients.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Healthcare and Insurance</h3>
                <p>
                    Healthcare and insurance organizations face numerous challenges, including
                    securing patient data, ensuring compliance with privacy regulations, and
                    managing identities across complex ecosystems. Our identity solutions
                    address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Patient IAM (CIAM):</span> Providing patients with secure
                        access to healthcare portals, ensuring privacy and ease of use.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing access for healthcare
                        professionals and administrative staff, ensuring compliance with
                        healthcare standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for healthcare workers,
                        ensuring the right people have appropriate access to systems and data.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged access to critical
                        healthcare systems, including medical devices and administrative tools.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for partners, insurers,
                        and other stakeholders, ensuring secure collaboration across the
                        healthcare ecosystem.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Healthcare and Insurance</h3>
                <p>
                    Our customized identity solutions for healthcare and insurance include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect patient and provider accounts, safeguarding
                        sensitive medical information.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling healthcare professionals
                        to use a single set of credentials to access multiple systems, improving
                        efficiency and reducing login fatigue.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that
                        healthcare workers have access to the systems and data they need, based
                        on their roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        throughout their employment lifecycle, ensuring compliance with
                        regulations like HIPAA.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical systems, including administrative tools and medical devices, to
                        protect against unauthorized use.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Secure Health Network</h3>
                <p>
                    <span>Challenge:</span> Secure Health Network needed to protect
                    patient data while ensuring healthcare professionals could easily access
                    critical systems and information.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a comprehensive
                    identity solution, including Single Sign-On (SSO) and Multi-Factor
                    Authentication (MFA) for healthcare professionals. Role-Based Access
                    Control (RBAC) was used to manage access based on job responsibilities,
                    and Privileged Access Management (PAM) protected administrative tools.
                </p>
                <p>
                    <span>Result:</span> Secure Health Network saw a{' '}
                    <span>40% reduction</span> in unauthorized access attempts and
                    improved compliance with healthcare data regulations, resulting in greater
                    trust from patients and healthcare providers.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Patient Security:</span> Protecting sensitive health
                        information with CIAM and MFA, ensuring privacy and security.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Provider Efficiency:</span> Streamlined access for
                        healthcare professionals with SSO and RBAC, reducing administrative
                        burden.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to healthcare
                        regulations such as HIPAA, reducing the risk of penalties and breaches.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure interactions with
                        partners, insurers, and other stakeholders through effective identity
                        management.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As the healthcare and insurance sectors continue to evolve, secure
                    identity solutions are crucial to protecting sensitive data and enhancing
                    patient care. At <span>RAAH Technologies</span>, we are dedicated to
                    providing advanced IAM, IGA, CIAM, and PAM solutions that meet the complex
                    needs of healthcare providers, insurers, and patients.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-7',
        pageTitle: 'Legal and Professional Services',
        title: 'Strengthening Legal and Professional Services with Secure Identity Solutions',
        description: 'Legal and professional services require secure access to sensitive client information and the ability to manage identities efficiently. At RAAH Technologies, we deliver tailored identity and access management solutions to protect confidential data, ensure compliance, and enable seamless collaboration.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Legal and Professional Services</h3>
                <p>
                    Legal and professional services face significant challenges, such as
                    safeguarding sensitive client data, managing user access across different
                    teams, and ensuring compliance with regulations. Our identity solutions
                    address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing access for legal professionals
                        and support staff, ensuring compliance with industry standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for employees, ensuring
                        appropriate access rights, and providing audit trails for compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Client IAM (CIAM):</span> Providing clients with secure access
                        to legal documents and case information, ensuring privacy and ease of
                        use.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that access
                        critical legal systems, mitigating the risk of insider threats and
                        unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external partners and
                        collaborators, ensuring secure integration across professional networks.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Legal and Professional Services</h3>
                <p>
                    Our customized identity solutions for legal and professional services
                    include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect client data and legal documents,
                        safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling legal professionals to
                        use a single set of credentials to access multiple systems, improving
                        efficiency and reducing login fatigue.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that legal
                        professionals have access to the systems and data they need, based on
                        their roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        throughout their employment lifecycle, ensuring compliance with
                        regulations such as GDPR.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical legal systems, including administrative tools and case
                        management systems, to protect against unauthorized use.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Law Firm</h3>
                <p>
                    <span>Challenge:</span> A global law firm needed to protect sensitive
                    client information while enabling legal professionals to access case files
                    and collaborate securely across multiple offices.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive
                    identity solution, including Single Sign-On (SSO) and Multi-Factor
                    Authentication (MFA) for secure access. Role-Based Access Control (RBAC)
                    was implemented to ensure appropriate access based on job
                    responsibilities, and Privileged Access Management (PAM) protected
                    administrative tools and case management systems.
                </p>
                <p>
                    <span>Result:</span> The global law firm experienced a{' '}
                    <span>30% reduction</span> in unauthorized access attempts and
                    improved compliance with data protection regulations, resulting in greater
                    trust from clients and more efficient operations.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Client Security:</span> Protecting sensitive client
                        information with CIAM and MFA, ensuring privacy and security.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Professional Efficiency:</span> Streamlined access
                        for legal professionals with SSO and RBAC, reducing administrative
                        burden.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to legal and
                        professional standards, reducing the risk of penalties and breaches.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure interactions with
                        partners and clients through effective identity management.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As the legal and professional services sectors continue to evolve, secure
                    identity solutions are crucial to protecting sensitive data and enhancing
                    client service. At <span>RAAH Technologies</span>, we are dedicated to
                    providing advanced IAM, IGA, CIAM, and PAM solutions that meet the complex
                    needs of legal professionals and their clients.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-8',
        pageTitle: 'Manufacturing & Supply Chain',
        title: 'Securing Manufacturing and Supply Chain with Robust Identity Solutions',
        description: 'The manufacturing and supply chain sectors are critical to the global economy, and ensuring secure and efficient operations is essential. At RAAH Technologies, we provide tailored identity and access management solutions that protect intellectual property, streamline operations, and enhance supply chain security.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Manufacturing and Supply Chain</h3>
                <p>
                    The manufacturing and supply chain industries face several challenges,
                    such as safeguarding intellectual property, managing secure access to
                    production systems, and ensuring the integrity of the supply chain. Our
                    identity solutions address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing access for employees and
                        contractors, ensuring compliance with industry standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for workers across different
                        facilities, ensuring appropriate access rights and providing audit
                        trails.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2B):</span> Providing partners and suppliers with
                        secure access to supply chain systems, ensuring collaboration and
                        efficiency.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that access
                        critical production and supply chain systems, mitigating risks of
                        insider threats and unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external partners and
                        suppliers, ensuring secure integration across the supply chain.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Manufacturing and Supply Chain</h3>
                <p>
                    Our customized identity solutions for the manufacturing and supply chain
                    sector include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect access to production systems and supply
                        chain data, safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling workers to use a single
                        set of credentials to access multiple systems, improving efficiency and
                        reducing login fatigue.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that workers
                        have access to the systems and data they need based on their roles and
                        responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        throughout their employment lifecycle, ensuring compliance with
                        regulations and industry standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical production systems, ensuring that only authorized personnel
                        have control over sensitive operations.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Manufacturing Company</h3>
                <p>
                    <span>Challenge:</span> A global manufacturing company needed to
                    protect its intellectual property while ensuring secure access to
                    production systems and enhancing collaboration with suppliers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive
                    identity solution, including Single Sign-On (SSO) and Multi-Factor
                    Authentication (MFA) for secure access. Role-Based Access Control (RBAC)
                    was implemented to ensure appropriate access based on job
                    responsibilities, and Privileged Access Management (PAM) protected
                    critical production systems.
                </p>
                <p>
                    <span>Result:</span> The manufacturing company experienced a{' '}
                    <span>25% reduction</span> in unauthorized access attempts, improved
                    supply chain collaboration, and enhanced the security of its intellectual
                    property.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Security:</span> Protecting intellectual property and
                        production systems with MFA and PAM, ensuring privacy and security.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Operational Efficiency:</span> Streamlined access for
                        workers with SSO and RBAC, reducing administrative burden and enhancing
                        productivity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Supply Chain Security:</span> Secure interactions with
                        partners and suppliers through effective identity management, ensuring
                        the integrity of the supply chain.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to industry
                        standards, reducing the risk of penalties and breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As the manufacturing and supply chain sectors continue to evolve, secure
                    identity solutions are crucial to protecting intellectual property,
                    enhancing operational efficiency, and ensuring supply chain integrity. At{' '}
                    <span>RAAH Technologies</span>, we are committed to providing advanced
                    IAM, IGA, CIAM, and PAM solutions that meet the complex needs of
                    manufacturers and their supply chain partners.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-9',
        pageTitle: 'Media and Entertainment',
        title: 'Empowering Media and Entertainment with Secure Identity Solutions',
        description: 'The media and entertainment sector is undergoing rapid digital transformation, with secure access to content and collaboration being key priorities. At RAAH Technologies, we provide customized identity and access management solutions that safeguard content, streamline operations, and ensure secure access for all stakeholders.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Media and Entertainment</h3>
                <p>
                    Media and entertainment companies face significant challenges, such as
                    protecting intellectual property, managing secure access to content, and
                    ensuring collaboration with partners and vendors. Our identity solutions
                    address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing access for content creators,
                        editors, and administrative personnel, ensuring compliance with industry
                        standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for internal and external
                        personnel, ensuring appropriate access rights, and providing audit
                        trails for compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Providing seamless access to streaming
                        platforms for subscribers, ensuring a secure and smooth user experience
                        with features like Single Sign-On (SSO) and Multi-Factor Authentication
                        (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that access
                        critical content and media systems, mitigating risks of insider threats
                        and unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for external partners,
                        production companies, and other collaborators, ensuring secure
                        integration across the media ecosystem.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Media and Entertainment</h3>
                <p>
                    Our customized identity solutions for the media and entertainment sector
                    include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect access to content management systems,
                        safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling content creators and
                        editors to use a single set of credentials to access multiple systems,
                        improving efficiency and reducing login fatigue.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that media
                        personnel have access to the systems and data they need, based on their
                        roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        throughout their employment lifecycle, ensuring compliance with industry
                        regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical content systems, including administrative tools and content
                        storage, to protect against unauthorized use.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Media Company</h3>
                <p>
                    <span>Challenge:</span> A global media company needed to protect its
                    intellectual property while enabling content creators and editors to
                    access content and collaborate securely across multiple locations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive
                    identity solution, including Single Sign-On (SSO) and Multi-Factor
                    Authentication (MFA) for secure access. Role-Based Access Control (RBAC)
                    was implemented to ensure appropriate access based on job
                    responsibilities, and Privileged Access Management (PAM) protected
                    administrative tools and content storage systems.
                </p>
                <p>
                    <span>Result:</span> The media company experienced a{' '}
                    <span>30% reduction</span> in unauthorized access attempts and
                    improved collaboration, resulting in faster content production and
                    increased viewer trust.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Content Security:</span> Protecting intellectual
                        property and media content with CIAM and MFA, ensuring privacy and
                        security.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Operational Efficiency:</span> Streamlined access for
                        media personnel with SSO and RBAC, reducing administrative burden and
                        enhancing productivity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure interactions with
                        partners, production companies, and vendors through effective identity
                        management.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to media and
                        entertainment industry standards, reducing the risk of penalties and
                        breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As the media and entertainment sector continues to evolve, secure identity
                    solutions are crucial to protecting intellectual property and enabling
                    efficient content production and distribution. At{' '}
                    <span>RAAH Technologies</span>, we are dedicated to providing advanced
                    IAM, IGA, CIAM, and PAM solutions that meet the complex needs of media
                    professionals and their audiences.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-10',
        pageTitle: 'Retail and E-Commerce',
        title: 'Enhancing Retail and E-Commerce with Secure Identity Solutions',
        description: 'Retail and e-commerce are evolving rapidly, with secure access and personalized customer experiences being top priorities. At RAAH Technologies, we provide tailored identity and access management solutions to enhance security, streamline operations, and deliver exceptional customer experiences.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Retail and E-Commerce</h3>
                <p>
                    Retail and e-commerce businesses face significant challenges, such as
                    securing customer data, managing access to sensitive systems, and
                    delivering personalized customer experiences. Our identity solutions
                    address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Customer IAM (CIAM):</span> Providing seamless access for
                        customers, ensuring a secure and smooth user experience with features
                        like Single Sign-On (SSO) and Multi-Factor Authentication (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Securing access for employees, store
                        associates, and administrative personnel, ensuring compliance with
                        industry standards.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for employees, ensuring
                        appropriate access rights, and providing audit trails for compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that access
                        critical retail systems, mitigating risks of insider threats and
                        unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for suppliers, vendors,
                        and other partners, ensuring secure integration across the retail
                        ecosystem.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Retail and E-Commerce</h3>
                <p>
                    Our customized identity solutions for the retail and e-commerce sector
                    include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect customer accounts and retail systems,
                        safeguarding against unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enabling employees and customers
                        to use a single set of credentials to access multiple systems, improving
                        efficiency and user experience.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that retail
                        employees have access to the systems and data they need, based on their
                        roles and responsibilities.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        throughout their lifecycle, ensuring compliance with industry
                        regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical retail systems, including administrative tools and inventory
                        management, to protect against unauthorized use.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Retailer</h3>
                <p>
                    <span>Challenge:</span> A global retailer needed to secure customer
                    data and provide seamless access across multiple platforms, while ensuring
                    compliance with data protection regulations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive
                    identity solution, including Customer IAM (CIAM) and Multi-Factor
                    Authentication (MFA) for secure access. Role-Based Access Control (RBAC)
                    was implemented to ensure appropriate access for employees, and Privileged
                    Access Management (PAM) protected critical retail systems.
                </p>
                <p>
                    <span>Result:</span> The retailer experienced a{' '}
                    <span>25% increase</span> in customer satisfaction and a significant
                    reduction in data breaches, leading to improved trust and increased sales.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Customer Experience:</span> Providing seamless access
                        to online and in-store services through a unified identity system.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Operational Efficiency:</span> Streamlined access for
                        retail employees with SSO and RBAC, reducing administrative burden and
                        enhancing productivity.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure interactions with
                        suppliers and partners through effective identity management.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to retail
                        industry standards, reducing the risk of penalties and breaches.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As retail and e-commerce continue to evolve, secure identity solutions are
                    essential for protecting customer data and enabling personalized
                    experiences. At <span>RAAH Technologies</span>, we are dedicated to
                    providing advanced IAM, IGA, CIAM, and PAM solutions that meet the dynamic
                    needs of the retail sector.
                </p>
            </div>
        )
    },
    {
        id: 'industry-doc-11',
        pageTitle: 'Technology and Telecommunications',
        title: 'Securing Technology and Communications with Innovative Identity Solutions',
        description: 'The technology and communications sectors are critical to modern society, requiring robust security and identity solutions to protect sensitive data and maintain seamless operations. At RAAH Technologies, we offer cutting-edge identity and access management solutions that meet the unique demands of these industries.',
        content: (
            <div className='SolutionsIndustryDetailedViewContentWrapper'>
                <h3 className="SolutionsIndustryDetailedViewSubheader">Challenges in Technology and Communications</h3>
                <p>
                    Technology and communications companies face numerous challenges, such as
                    securing sensitive customer information, managing access across diverse
                    systems, and ensuring compliance with stringent regulatory standards. Our
                    tailored solutions address these challenges:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Workforce IAM:</span> Ensuring secure access for employees and
                        contractors, providing the right level of access at all times.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>IGA:</span> Managing identities for internal and external
                        users, automating user lifecycle management, and providing audit trails
                        for compliance.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>CIAM (B2C):</span> Enabling seamless and secure access for
                        customers, ensuring smooth experiences with features like Single Sign-On
                        (SSO) and Multi-Factor Authentication (MFA).
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>PAM:</span> Protecting privileged accounts that access
                        critical systems, mitigating risks of unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>B2B IAM:</span> Managing identities for business partners,
                        ensuring secure integration and collaboration across the technology
                        ecosystem.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Tailored Solutions for Technology and Communications</h3>
                <p>
                    Our customized identity solutions for the technology and communications
                    sectors include:
                </p>
                <ul className="SolutionsIndustryDetailedViewList">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adding an extra
                        layer of security to protect critical systems and data from unauthorized
                        access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Simplifying access for employees,
                        customers, and partners, improving efficiency and reducing login
                        fatigue.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Ensuring that users
                        have appropriate access based on their roles, protecting sensitive
                        systems and data.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Managing user identities
                        from onboarding to offboarding, ensuring compliance with regulations.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Securing access to
                        critical infrastructure, including network systems and administrative
                        tools.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Use Case: Global Tech Firm</h3>
                <p>
                    <span>Challenge:</span> A global technology firm needed to secure its
                    vast network infrastructure and provide seamless access to employees,
                    contractors, and business partners across multiple locations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided an integrated
                    identity solution, including Workforce IAM and Multi-Factor Authentication
                    (MFA) for secure access. Role-Based Access Control (RBAC) was implemented
                    to ensure appropriate access for users, and Privileged Access Management
                    (PAM) protected critical network systems.
                </p>
                <p>
                    <span>Result:</span> The tech firm experienced a{' '}
                    <span>40% reduction</span> in unauthorized access attempts and
                    improved operational efficiency, resulting in enhanced security and
                    compliance.
                </p>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Benefits at a Glance</h3>
                <ul className="SolutionsIndustryDetailedViewList benefits-list">
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Enhanced Security:</span> Protecting critical systems and data
                        with CIAM, IAM, and PAM, reducing unauthorized access.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Improved Operational Efficiency:</span> Streamlined access
                        with SSO and RBAC, reducing administrative overhead and improving user
                        experience.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Secure Collaboration:</span> Enabling secure interactions with
                        partners and contractors through effective identity management.
                    </li>
                    <li className="SolutionsIndustryDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensuring adherence to industry
                        standards and reducing risks of non-compliance.
                    </li>
                </ul>

                <h3 className="SolutionsIndustryDetailedViewSubheader">Looking Ahead</h3>
                <p>
                    As technology and communications continue to advance, secure identity
                    solutions are crucial to protecting sensitive data and enabling
                    innovation. At <span>RAAH Technologies</span>, we are committed to
                    providing advanced IAM, IGA, CIAM, and PAM solutions that address the
                    evolving needs of the technology and communications sectors.
                </p>
            </div>
        )
    },
]
const SolutionsIndustryDetailedView = () => {


    const [selectedIndustryDocument, setSelectedIndustryDocument] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const matched = path.match(/^\/industries\/([\w-]+)$/);
        if (matched) {
            setSelectedIndustryDocument(matched[1]);
        } else if (path === '/industries') {
            setSelectedIndustryDocument(null);
        }
    }, [location.pathname]);

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/solutions#industries');
    };

    return (
        <div className='SolutionsIndustryDetailedViewContainer'>
            <div className='SolutionsIndustryDetailedViewIntro'>
                <div className='SolutionsIndustryDetailedViewIntroTitleBar'>
                    <div className='SolutionsIndividualIPageIntroTitleAccent'>
                        <h1 className='SolutionsIndustryDetailedViewIntroMainTitle'>{industryDocuments.find((document) => document.id === selectedIndustryDocument)?.pageTitle}</h1>
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
                <h2 className='SolutionsIndustryDetailedViewIntroTitle'>{industryDocuments.find((document) => document.id === selectedIndustryDocument)?.title}</h2>
                <p className='SolutionsIndustryDetailedViewIntroDescription'>
                    {industryDocuments.find((document) => document.id === selectedIndustryDocument)?.description}
                </p>
            </div>
            {industryDocuments.find((document) => document.id === selectedIndustryDocument)?.content}
        </div>
    );
}

export default SolutionsIndustryDetailedView