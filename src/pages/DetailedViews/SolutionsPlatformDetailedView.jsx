import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SolutionsPlatformDetailedView.css';
import CyberArk from '../../assets/PlatformSectionImages/PlatformSectionGraphic1.png'; 
import Delinea from '../../assets/PlatformSectionImages/PlatformSectionGraphic2.png'; 
import Gigya from '../../assets/PlatformSectionImages/PlatformSectionGraphic3.png'; 
import Microsoft from '../../assets/PlatformSectionImages/PlatformSectionGraphic4.png'; 
import Okta from '../../assets/PlatformSectionImages/PlatformSectionGraphic5.png'; 
import Omada from '../../assets/PlatformSectionImages/PlatformSectionGraphic6.png'; 
import Ping from '../../assets/PlatformSectionImages/PlatformSectionGraphic7.png'; 
import RadiantLogic from '../../assets/PlatformSectionImages/PlatformSectionGraphic8.png'; 
import Saviynt from '../../assets/PlatformSectionImages/PlatformSectionGraphic9.png'; 
import ServiceNow from '../../assets/PlatformSectionImages/PlatformSectionGraphic10.png'; 
import WS02 from '../../assets/PlatformSectionImages/PlatformSectionGraphic11.png'; 

import {
    IoBulbOutline, IoStarOutline, IoHammerOutline, IoDocumentTextOutline,
    IoKeyOutline, IoShieldOutline, IoGitNetworkOutline, IoCodeSlashOutline,
    IoCloudOutline, IoPeopleOutline, IoRocketOutline, IoShieldCheckmarkOutline,
    IoGitMergeOutline, IoAnalyticsOutline, IoPersonCircleOutline
} from 'react-icons/io5';

const getIconForSubheader = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('use case')) {
        return <IoBulbOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('benefits')) {
        return <IoStarOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('raah\'s expertise')) {
        return <IoHammerOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('helpful resources')) {
        return <IoDocumentTextOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('privileged access')) {
        return <IoKeyOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('governance')) {
        return <IoGitNetworkOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('ping')) {
        return <IoShieldCheckmarkOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('forgerock')) {
        return <IoRocketOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('okta workforce')) {
        return <IoPeopleOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('okta customer')) {
        return <IoPersonCircleOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('delinea')) {
        return <IoKeyOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('cyberark')) {
        return <IoShieldOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('sailpoint')) {
        return <IoGitNetworkOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('omada')) {
        return <IoGitNetworkOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('radiant logic')) {
        return <IoGitMergeOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('saviynt')) {
        return <IoAnalyticsOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('wso2')) {
        return <IoCodeSlashOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('microsoft')) {
        return <IoCloudOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    if (lowerTitle.includes('identity')) {
        return <IoShieldOutline className='SolutionsPlatformDetailedViewSubheaderIcon' />;
    }
    return null;
};

const platformDocuments = [
    {
        id: 'cyberark',
        image: CyberArk,
        title: 'Securing Privileged Access with CyberArk Solutions',
        description:
            'CyberArk is the market leader in privileged access management (PAM), providing a comprehensive solution for securing privileged accounts, credentials, and secrets that represent a significant security risk. At RAAH Technologies, we help organizations leverage CyberArk to manage and protect their privileged access, fortify defenses, and reduce the attack surface.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('CyberArk: Unmatched Privileged Access Security')}
                    CyberArk: Unmatched Privileged Access Security
                </h3>
                <p>
                    CyberArk’s suite of PAM solutions is designed to secure privileged credentials and secrets across a range of environments—from on-premises to hybrid and cloud-based architectures. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Credential Vaulting:</span> Securely stores privileged credentials in a digital vault, ensuring that sensitive credentials are never stored in plain text.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Privileged Session Management:</span> Provides comprehensive monitoring and recording of all privileged sessions, allowing for detailed auditing and compliance reporting.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Endpoint Privilege Management:</span> Enforces least privilege on endpoints, preventing users from gaining administrative rights and reducing the risk of malware and insider threats.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Secrets Management:</span> Secures application secrets, such as API keys and passwords, from being exposed in code or configuration files.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Just-in-Time Access:</span> Grants privileged access for a limited time only when it is needed, minimizing the exposure of privileged accounts.
                    </li>
                </ul>
                <p>
                    At <span>RAAH Technologies</span>, we specialize in deploying CyberArk solutions that align with an organization's unique security requirements. Our expertise helps clients build a robust PAM program that reduces risk and enhances security.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Fortune 500\'s Privileged Account Security')}
                    Use Case: A Fortune 500's Privileged Account Security
                </h3>
                <p>
                    <span>Challenge:</span> A large financial services firm needed to secure and monitor a vast number of privileged accounts across their hybrid cloud environment to meet stringent regulatory compliance and reduce the risk of insider threats.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented CyberArk's Privileged Access Security solution, which included Credential Vaulting to secure passwords and a Privileged Session Management component to monitor and record all privileged sessions. The solution also helped enforce least privilege policies across endpoints.
                </p>
                <p>
                    <span>Result:</span> The firm achieved a <span>90% reduction</span> in privileged account-related security incidents, met all compliance requirements, and gained unprecedented visibility into privileged activities.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Proactive Security:</span> Automatically secures, rotates, and manages all privileged credentials and secrets to reduce the attack surface.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Continuous Monitoring:</span> Records and monitors all privileged sessions, providing a detailed audit trail for forensics and compliance.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Compliance:</span> Helps organizations meet a wide range of regulatory requirements with built-in reporting and auditing features.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Unified Platform:</span> A single platform to secure privileged access across on-premises, hybrid, and cloud environments, simplifying management.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our team at <span>RAAH Technologies</span> provides end-to-end services for CyberArk implementation, including:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Strategic consulting and design to build a robust PAM program.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Technical implementation, configuration, and integration with existing systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Training and knowledge transfer to internal teams for effective management.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Ongoing support and optimization to adapt to new security challenges.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://docs.cyberark.com/portal/latest/en/docs.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CyberArk Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.cyberark.com/resources/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CyberArk Resources
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/cyberark"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CyberArk GitHub Repository
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://community.cyberark.com/s/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CyberArk Community
                        </a>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'delinea',
        image: Delinea,
        title: 'Simplifying Privileged Access with Delinea (Formerly Thycotic)',
        description:
            'Delinea (formerly Thycotic) offers a seamless and scalable approach to Privileged Access Management (PAM) that enhances security without complexity. At RAAH Technologies, we help organizations leverage Delinea\'s capabilities to secure privileged credentials, automate secrets management, and enforce least privilege—all while simplifying the user experience.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Delinea: Seamless and Secure Privileged Access')}
                    Delinea: Seamless and Secure Privileged Access
                </h3>
                <p>
                    Delinea provides a wide range of privileged access security features, which are essential for organizations looking to secure their IT environments without overwhelming users or administrators. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Secret Server:</span> A secure, enterprise-class vault to store and manage privileged credentials, secrets, and access keys with encryption and auditing.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Privilege Manager:</span> Enforces least privilege policies on endpoints, ensuring that users operate with just enough privileges to perform their tasks, thereby minimizing risks.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Account Lifecycle Management:</span> Automates the discovery, onboarding, management, and de-provisioning of privileged accounts, reducing human error and improving efficiency.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Session Recording and Monitoring:</span> Records privileged sessions for auditing and compliance, providing visibility into what privileged users are doing within critical systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Just-in-Time Access:</span> Minimizes the standing privileges by granting privileged access only when needed and revoking it afterward, enhancing security without hindering productivity.
                    </li>
                </ul>
                <p>
                    Delinea's solutions are designed to help businesses mitigate risks associated with privileged accounts while enhancing productivity and maintaining compliance. At RAAH, we bring expertise in deploying Delinea to fit your organization's needs, ensuring a seamless user experience and effective security controls.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Simplifying Privileged Access for a Healthcare Provider')}
                    Use Case: Simplifying Privileged Access for a Healthcare Provider
                </h3>
                <p>
                    <span>Challenge:</span> A healthcare provider needed to secure administrative access to sensitive patient data while maintaining a high level of operational efficiency. They faced challenges in implementing least privilege without impacting productivity and needed a solution that would be simple to use for their IT and administrative teams.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Delinea's Privilege Manager to enforce least privilege policies across endpoints, ensuring users operated with only the permissions required for their role. Secret Server was also deployed to securely vault administrative credentials and automate password rotation. Additionally, Just-in-Time access was used to grant elevated privileges only when necessary, minimizing security risks.
                </p>
                <p>
                    <span>Result:</span> The healthcare provider experienced a <span>60% improvement</span> in security, reduced the number of standing privileges by <span>75%</span>, and streamlined their IT operations without compromising productivity.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Reduced Privileged Account Risk:</span> Automatically vaults, rotates, and monitors privileged credentials to reduce risk.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Seamless User Experience:</span> Provides security with minimal user friction, allowing employees to continue working without disruptions.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Compliance Assurance:</span> Delivers auditing, session recording, and policy enforcement to help organizations meet regulatory requirements.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Automated Privilege Management:</span> Streamlines the onboarding, management, and lifecycle of privileged accounts to reduce manual intervention.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    At <span>RAAH Technologies</span>, we understand that securing privileged access is a critical aspect of any security strategy. Our expertise in deploying Delinea enables organizations to:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Design and implement least privilege policies that ensure security without hindering productivity.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Seamlessly integrate Delinea's PAM solutions into existing IT environments, ensuring they align with organizational workflows.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Train IT teams on how to effectively manage and audit privileged accounts using Delinea, ensuring best practices are followed.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide ongoing support and optimization to adapt the PAM solution to evolving business and regulatory needs.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://docs.delinea.com/" target="_blank" rel="noopener noreferrer">
                            Delinea Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://www.delinea.com/resources" target="_blank" rel="noopener noreferrer">
                            Delinea Resources
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://github.com/DelineaXPM" target="_blank" rel="noopener noreferrer">
                            Delinea GitHub Repository
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://delinea.com/support" target="_blank" rel="noopener noreferrer">
                            Delinea Support
                        </a>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'gigya',
        image: Gigya,
        title: 'Enhancing Customer Experience with SAP Customer Data Cloud (Gigya)',
        description:
            'SAP Customer Data Cloud, formerly known as Gigya, is a robust Customer Identity and Access Management (CIAM) platform that helps organizations build and maintain secure, personalized, and seamless digital relationships with their customers. At RAAH Technologies, we help businesses leverage SAP CDC to enhance customer engagement, ensure data privacy, and drive growth.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('SAP Customer Data Cloud (Gigya)')}
                    SAP Customer Data Cloud (Gigya)
                </h3>
                <p>
                    SAP Customer Data Cloud is designed to help organizations manage customer
                    identities and consent across a wide range of digital properties. Key
                    features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Customer Identity and Access Management (CIAM):</span>
                        Provides a centralized platform to manage customer identities,
                        authentication, and access.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Social Login and Registration:</span> Enables customers to
                        register and log in using their social media accounts, reducing friction
                        and improving the user experience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Consent and Preference Management:</span> Helps organizations
                        manage customer data privacy and consent preferences to comply with
                        regulations like GDPR and CCPA.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Provides a consistent login
                        experience across all brand websites and mobile applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Federated Identity Management:</span> Enables seamless
                        integration with partners and third-party services.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> helps organizations implement and optimize
                    SAP Customer Data Cloud to enhance the customer journey, build trust, and
                    ensure compliance.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Media Company\'s Customer Experience')}
                    Use Case: A Media Company's Customer Experience
                </h3>
                <p>
                    <span>Challenge:</span> A global media company needed a way to manage
                    customer identities across multiple websites and applications while ensuring
                    compliance with data privacy regulations. They wanted to provide a
                    personalized and seamless user experience.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented SAP Customer Data
                    Cloud, providing a unified platform for customer registration, login, and
                    consent management. We enabled Social Login and Single Sign-On (SSO) to
                    streamline the customer journey and configured the consent management
                    features to ensure compliance with privacy regulations.
                </p>
                <p>
                    <span>Result:</span> The media company improved customer satisfaction by{' '}
                    <span>35%</span> and increased its registered user base by{' '}
                    <span>25%</span>, while also achieving full compliance with data privacy
                    regulations.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Customer Experience:</span> Provides a frictionless
                        login and registration experience with Social Login and SSO.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Data Privacy and Compliance:</span> Manages customer consent
                        and preferences to ensure compliance with global regulations.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Scalable and Secure:</span> A robust platform that can handle
                        millions of customer identities while ensuring security and reliability.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Unified Customer View:</span> Creates a single, comprehensive
                        view of each customer to enable personalized marketing and services.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our expertise in SAP Customer Data Cloud allows us to:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Design and implement a CIAM strategy that aligns with business goals.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Configure and customize the SAP CDC platform to create a seamless
                        customer experience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Integrate SAP CDC with a wide range of marketing and e-commerce platforms.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide ongoing support and optimization to ensure the platform meets
                        evolving customer and regulatory needs.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://help.sap.com/docs/customer-data-platform/integration-guide/sap-customer-data-cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SAP Customer Data Cloud
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://developers.gigya.com/display/GD/Developer+Guide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gigya Developer Guide
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://help.sap.com/learning-journeys/c745227ebf2546898491576de3a9b460"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SAP Customer Data Cloud Training
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://community.sap.com/topics/customer-data-cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SAP Customer Data Cloud Community
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'microsoft',
        image: Microsoft,
        title: 'Modernizing Enterprise Identity with Microsoft Solutions',
        description:
            'Microsoft offers a suite of cloud-based identity and access management solutions, including Azure Active Directory (Azure AD), to secure and manage identities for a modern enterprise. At RAAH Technologies, we help organizations leverage Microsoft’s capabilities to enable secure access for their workforce, enhance productivity, and fortify their security posture.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Microsoft: Securing the Enterprise with Azure AD')}
                    Microsoft: Securing the Enterprise with Azure AD
                </h3>
                <p>
                    Azure Active Directory (Azure AD), now known as Microsoft Entra ID, is a
                    comprehensive identity and access management service that provides a
                    centralized way to manage user identities, secure access to applications,
                    and enforce a zero-trust security model. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Provides a single identity for
                        employees to access a wide range of cloud and on-premises applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adds an extra layer
                        of security to protect user accounts from unauthorized access.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Conditional Access:</span> Enforces intelligent,
                        context-based policies to ensure that users can only access resources
                        when they meet certain criteria, such as from a trusted location or
                        device.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Governance:</span> Provides features for managing
                        user lifecycles, access reviews, and entitlement management to ensure
                        that employees have appropriate access levels.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Privileged Identity Management (PIM):</span> Secures and
                        manages privileged accounts by providing just-in-time and just-enough
                        access to critical resources.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> helps organizations successfully migrate
                    to and implement Microsoft identity solutions, ensuring a seamless
                    transition and a robust security posture. Our expertise helps clients
                    optimize their use of Azure AD to enhance productivity while meeting
                    compliance needs.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: An Enterprise\'s Cloud Identity Transition')}
                    Use Case: An Enterprise's Cloud Identity Transition
                </h3>
                <p>
                    <span>Challenge:</span> A large enterprise wanted to migrate their
                    on-premises identity infrastructure to the cloud to improve scalability,
                    security, and management. They needed a partner to help them transition to
                    Azure AD while minimizing disruption to business operations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies provided a comprehensive migration
                    strategy to seamlessly transition the enterprise to Azure AD. We
                    implemented Conditional Access policies, configured Multi-Factor
                    Authentication (MFA) for all users, and enabled Identity Governance and PIM
                    to ensure a robust security framework.
                </p>
                <p>
                    <span>Result:</span> The enterprise successfully migrated to a modern
                    cloud-based identity system, reducing operational overhead by <span>20%</span> and
                    strengthening their overall security posture.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Security:</span> Leverage advanced security features
                        like MFA and Conditional Access to protect against cyber threats.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Streamlined Management:</span> Centralized identity management
                        in the cloud reduces the complexity and overhead of managing
                        on-premises systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Improved Productivity:</span> Single Sign-On (SSO) provides
                        employees with easy access to all the applications they need.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Compliance and Governance:</span> Built-in governance and
                        auditing features help organizations meet regulatory requirements with
                        ease.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our expertise in Microsoft identity solutions enables us to:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Design and execute seamless migration strategies from on-premises to
                        cloud environments.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Configure and deploy advanced security features like Conditional Access
                        and PIM.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Integrate Azure AD with a wide range of third-party and custom
                        applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide ongoing support and optimization to ensure the identity solution
                        evolves with business needs.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://learn.microsoft.com/en-us/azure/active-directory/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Azure AD Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Azure AD Fundamentals
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.microsoft.com/en-us/security/business/identity-access-management"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Identity and Access Management
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/microsoftgraph"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Graph GitHub Repository
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'okta',
        image: Okta,
        title: 'Empowering Organizations with Okta Identity Solutions',
        description:
            'Okta provides a comprehensive suite of identity management solutions that help secure and streamline digital experiences for both workforce and customer-facing applications. At RAAH Technologies, we leverage Okta to deliver tailored solutions, ensuring that businesses maximize their return on identity investments.',
        content: (
            <div className='SolutionsPlatformDetailedViewContentWrapper'>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Okta Workforce Identity Cloud')}
                    Okta Workforce Identity Cloud
                </h3>
                <p>
                    Okta Workforce Identity Cloud is designed to ensure that employees,
                    contractors, and partners have secure and frictionless access to the tools
                    they need. It offers a variety of features such as:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Provides one-click access to all
                        applications, reducing password fatigue and enhancing productivity.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adds an extra layer
                        of security, making sure that the right people access the right
                        resources.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Lifecycle Management:</span> Automates user onboarding,
                        offboarding, and permission adjustments, ensuring efficient access
                        control and reducing manual errors.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Adaptive Access:</span> Implements intelligent access policies
                        that adapt to the context of access attempts, providing the right
                        balance of security and convenience.
                    </li>
                </ul>
                <p>
                    Our expertise with Okta Workforce Identity Cloud ensures that these
                    features are not only deployed correctly but are optimized for the unique
                    needs of your organization. We provide complete lifecycle management
                    solutions, from integration to ongoing support, aimed at boosting employee
                    productivity and minimizing security risks.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Okta Customer Identity Cloud (CIC)')}
                    Okta Customer Identity Cloud (CIC)
                </h3>
                <p>
                    Formerly known as Auth0, Okta Customer Identity Cloud (CIC) offers
                    customer-focused identity management capabilities. CIC is built to help
                    companies create secure, personalized customer experiences across digital
                    platforms. It includes features like:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Social and Enterprise Login:</span> Offers easy integration
                        with popular social networks and enterprise systems for streamlined
                        customer onboarding.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Improves customer
                        security by adding an additional layer of identity verification.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Customizable Login and Signup:</span> Provides a seamless,
                        branded customer experience tailored to your business needs.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Federation and SSO:</span> Ensures a consistent and
                        secure login experience across multiple applications, reducing user
                        friction.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Data Privacy and Consent Management:</span> Helps ensure that
                        customer data is managed in compliance with regulations such as GDPR,
                        enhancing trust.
                    </li>
                </ul>
                <p>
                    At <span>RAAH Technologies</span>, we help organizations take full
                    advantage of Okta CIC by tailoring its capabilities to meet specific
                    business objectives. We understand that every customer journey is unique,
                    and our team ensures that Okta CIC's features are configured to provide
                    seamless, secure, and delightful customer experiences.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Enhancing Security for a Financial Institution')}
                    Use Case: Enhancing Security for a Financial Institution
                </h3>
                <p>
                    <span>Challenge:</span> A major financial institution required a
                    robust, secure solution to manage both employee access and customer
                    identities, while maintaining compliance with regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Okta Workforce
                    Identity Cloud to manage internal employee access, utilizing features like
                    SSO, MFA, and lifecycle management to automate access provisioning.
                    Additionally, Okta CIC was deployed to enhance the customer experience
                    through Social Login, MFA, and personalized customer journeys. Integration
                    with the institution's existing tech stack ensured seamless user
                    experiences across all touchpoints.
                </p>
                <p>
                    <span>Result:</span> The institution experienced a{' '}
                    <span>40% reduction</span> in IT helpdesk calls related to password
                    resets, increased customer satisfaction due to simplified onboarding
                    processes, and met all compliance requirements with ease.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Security:</span> Comprehensive identity and access
                        management for both workforce and customer use cases, leveraging MFA and
                        adaptive access controls.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Streamlined User Experience:</span> Provides seamless login
                        experiences across platforms for both employees and customers, reducing
                        friction and enhancing satisfaction.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensures compliance with industry
                        standards and data protection regulations, helping organizations avoid
                        penalties.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Scalable Customer Experiences:</span> Flexible identity
                        management tools to create personalized, secure, and user-friendly
                        customer journeys.
                    </li>
                </ul>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    At <span>RAAH Technologies</span>, we go beyond simply implementing
                    Okta. We understand the nuances of identity challenges and how Okta's
                    features can solve them. Our approach is consultative—we help clients
                    identify gaps in their current identity management, choose the right Okta
                    components, and integrate them seamlessly into their environment. We
                    specialize in both the technical setup and in driving business value,
                    ensuring security, compliance, and a superior user experience.
                </p>
                <p>
                    Whether you are adopting Okta for the first time, optimizing your current
                    setup, or seeking advanced configurations for complex environments, we
                    bring the expertise to guide you through every step.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://auth0.com/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Auth0 Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://support.okta.com/help/s/community?language=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Okta Support Community
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://community.auth0.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Auth0 Community Forum
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/okta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Okta GitHub Repository
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/auth0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Auth0 GitHub Repository
                        </a>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'omada',
        image: Omada,
        title: 'Driving Digital Transformation with Omada Solutions',
        description:
            'Omada provides a unified and powerful platform for Identity Governance and Administration (IGA) that helps organizations automate access management, enforce policies, and ensure compliance. At RAAH Technologies, we help businesses leverage Omada to achieve full control and visibility over their user identities and access rights.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Omada: Driving Digital Transformation with Identity Governance')}
                    Omada: Driving Digital Transformation with Identity Governance
                </h3>
                <p>
                    Omada’s IGA platform is designed to help organizations manage access to
                    systems and data, ensuring that the right people have the right access at
                    the right time. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Automated Access Provisioning:</span> Automates the creation
                        and modification of user accounts and access rights across all
                        applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Access Reviews and Certifications:</span> Provides a
                        streamlined process for managers to regularly review and certify
                        employee access to applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Segregation of Duties (SoD):</span> Enforces policies to
                        prevent conflicts of interest and reduce the risk of fraud by ensuring
                        users do not have access to incompatible roles.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Analytics and Reporting:</span> Offers detailed
                        insights into user access, helping organizations identify and mitigate
                        risks.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Compliance Reporting:</span> Generates comprehensive reports
                        for a variety of regulatory frameworks, such as GDPR and SOX.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> provides expert services for implementing
                    Omada’s IGA solutions, helping organizations to streamline their identity
                    governance processes, enhance security, and achieve compliance.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Manufacturing Company\'s IGA Implementation')}
                    Use Case: A Manufacturing Company's IGA Implementation
                </h3>
                <p>
                    <span>Challenge:</span> A global manufacturing company needed to automate
                    its manual access review process and enforce compliance policies across a
                    complex network of applications and systems. The manual process was prone to
                    errors and made it difficult to demonstrate compliance.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Omada’s IGA platform,
                    automating the access review and certification process and enforcing
                    Segregation of Duties (SoD) policies. We integrated Omada with the company's
                    HR system to automate user provisioning and deprovisioning, ensuring access
                    rights were always up-to-date.
                </p>
                <p>
                    <span>Result:</span> The company reduced the time spent on manual access
                    reviews by <span>75%</span>, eliminated audit-related fines, and improved
                    their overall security posture.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Improved Compliance:</span> Automates access reviews and provides
                        detailed reports to meet regulatory requirements.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Reduced Risk:</span> Enforces Segregation of Duties and provides
                        visibility into user access to mitigate security risks.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Operational Efficiency:</span> Automates manual identity
                        management processes, freeing up IT staff to focus on strategic
                        initiatives.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Visibility:</span> Comprehensive analytics and reporting
                        provide a clear overview of user access across the organization.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    At <span>RAAH Technologies</span>, our expertise in Omada allows us to
                    help organizations:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Develop a strategic roadmap for IGA implementation that aligns with
                        business goals.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Implement and configure Omada’s platform to automate access
                        provisioning, reviews, and compliance.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Integrate Omada with a wide range of enterprise applications and systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide training and support to ensure the successful adoption and
                        ongoing management of the IGA solution.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.omada.net/en-us/solutions"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Omada Solutions
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://omadaidentity.com/resources/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Omada Resources
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://documentation.omadaidentity.com/docs/welcome-to-omada/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Omada Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://omadaidentity.com/services/support/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Omada Support
                        </a>
                    </li>
                </ul>
            </div>
        )
    },  
    {
        id: 'ping',
        image: Ping,
        title: 'Unlocking Identity Potential with Ping Identity & ForgeRock Solutions',
        description: 'Ping Identity and ForgeRock offer powerful identity and access management solutions for enterprises seeking secure, scalable, and seamless identity experiences. At RAAH Technologies, we bring the expertise required to implement and optimize these platforms to solve identity challenges for workforce, customer, and partner ecosystems.',
        content: (
            <div className='SolutionsPlatformDetailedViewContentWrapper'>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Ping Identity: Delivering Seamless Workforce and Customer Identity')}
                    Ping Identity: Delivering Seamless Workforce and Customer Identity
                </h3>
                <p>
                    Ping Identity provides a suite of tools that allow organizations to manage
                    and secure digital identities, supporting both workforce and customer use
                    cases. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Unified access to enterprise
                        applications for employees, partners, and customers with a frictionless
                        experience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Adaptive Multi-Factor Authentication (MFA):</span> Leverages
                        machine learning to determine when additional authentication factors are
                        required, enhancing security while preserving user convenience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Federation Services:</span> Seamlessly integrates with other
                        identity providers, allowing secure and smooth access across
                        organizational boundaries.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>API Security:</span> Protects APIs using OAuth, OpenID
                        Connect, and other security protocols, ensuring that data exchanges are
                        secure.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Governance:</span> Provides features for
                        provisioning, access management, and role enforcement, allowing
                        organizations to enforce secure access policies.
                    </li>
                </ul>
                <p>
                    Our deep experience with Ping Identity helps organizations create
                    efficient identity environments that cater to both workforce productivity
                    and a superior customer experience. We implement Ping solutions that are
                    scalable, flexible, and perfectly aligned to meet business needs.
                </p>


                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('ForgeRock: Empowering Digital Transformation with Identity')}
                    ForgeRock: Empowering Digital Transformation with Identity
                </h3>
                <p>
                    ForgeRock is a full-stack identity and access management platform designed
                    to support enterprises through complex digital transformations. With
                    ForgeRock, we enable companies to secure access for employees, customers,
                    and things across digital touchpoints. Features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Automates provisioning,
                        deprovisioning, and identity lifecycle events, ensuring users always
                        have the right access.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Advanced Identity Federation:</span> Connects with other
                        identity systems to enable single identity access across multiple
                        applications and organizations.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Customer Identity & Access Management (CIAM):</span> Provides
                        customizable registration, authentication, and self-service features to
                        create a secure, seamless customer experience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Intelligent Access Trees:</span> Configures complex
                        authentication workflows visually, allowing businesses to customize
                        access paths for customers and employees.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Internet of Things (IoT) Integration:</span> Manages
                        identities for devices, allowing companies to secure interactions with
                        IoT solutions.
                    </li>
                </ul>
                <p>
                    With <span>RAAH Technologies</span>, ForgeRock solutions are deployed
                    with precision, tailored to fit the needs of enterprises and public sector
                    organizations looking to manage complex identity challenges. We help our
                    clients make the most out of ForgeRock's identity orchestration and
                    advanced capabilities.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Transforming a Telecom Company\'s Identity Landscape')}
                    Use Case: Transforming a Telecom Company's Identity Landscape
                </h3>
                <p>
                    <span>Challenge:</span> A leading telecom company needed an identity
                    solution to unify workforce access and enhance customer engagement while
                    protecting customer data.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Ping Identity for
                    workforce identity, using SSO and Adaptive MFA to streamline employee
                    access while increasing security. ForgeRock was used for customer identity
                    management, with CIAM capabilities enabling personalized onboarding and
                    Intelligent Access Trees to reduce friction during authentication.
                    Integration with the company’s existing systems ensured seamless
                    operation.
                </p>
                <p>
                    <span>Result:</span> The telecom company reported a{' '}
                    <span>50% reduction</span> in onboarding time for customers, improved
                    customer satisfaction scores, and increased security across their
                    workforce.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Comprehensive Identity Security:</span> Secure both workforce
                        and customer identities using best-in-class tools that leverage SSO,
                        MFA, and API security protocols.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Seamless Customer Journeys:</span> CIAM solutions from
                        ForgeRock provide a frictionless experience for customers, enhancing
                        engagement and loyalty.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Scalability for Growth:</span> Both Ping Identity and
                        ForgeRock are built for enterprises with scalability in mind, enabling
                        organizations to grow without limitations on identity.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Adaptive and Intelligent Access:</span> Use AI-powered
                        decisions for dynamic authentication based on risk, device, and user
                        behavior.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    At <span>RAAH Technologies</span>, we bring a holistic approach to
                    deploying Ping Identity and ForgeRock solutions. Our expertise extends
                    from technical implementation to understanding business goals and ensuring
                    identity solutions align with those goals.
                </p>
                <p>We focus on delivering tailored solutions by:</p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Providing comprehensive assessments to understand organizational
                        identity needs and challenges.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Offering strategic guidance on identity architecture to ensure
                        scalability and business alignment.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Seamlessly integrating Ping and ForgeRock platforms with other systems,
                        maximizing interoperability and enhancing the overall ecosystem.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Supporting businesses beyond the initial implementation with training,
                        ongoing maintenance, and optimization to adapt to evolving requirements.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://docs.pingidentity.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ping Identity Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.pingidentity.com/en/resources.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ping Identity Resources
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://backstage.forgerock.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ForgeRock Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/PingIdentity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ping Identity GitHub Repository
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/ForgeRock"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ForgeRock GitHub Repository
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://support.pingidentity.com/s/community-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ping Community
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'radiant-logic',
        image: RadiantLogic,
        title: 'Unifying Identity Silos with Radiant Logic Solutions',
        description:
            'Radiant Logic provides an advanced identity integration and federation platform that creates a "virtual directory" to unify disparate identity sources into a single, cohesive view. At RAAH Technologies, we help organizations leverage Radiant Logic to simplify their identity infrastructure, improve security, and streamline access.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Radiant Logic: Unifying Identity Silos')}
                    Radiant Logic: Unifying Identity Silos
                </h3>
                <p>
                    Radiant Logic’s Identity Data Platform is designed to overcome the
                    challenges of managing multiple, fragmented identity systems. Key features
                    include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Unification:</span> Creates a logical, global view of
                        all user identities from disparate sources, such as Active Directory,
                        LDAP, and databases, without requiring data migration.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Advanced Identity Federation:</span> Provides a federated
                        identity layer that enables Single Sign-On (SSO) and simplifies access
                        management for applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Automated Data Synchronization:</span> Automatically
                        synchronizes identity data from all sources, ensuring that the global
                        identity view is always up-to-date.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Scalable Performance:</span> Built to handle large-scale,
                        complex identity environments, providing high performance and
                        reliability.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>API Gateway:</span> Exposes a unified identity API, allowing
                        developers to easily access and integrate with a consistent identity
                        data set.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> provides expert services for implementing
                    Radiant Logic, helping organizations to overcome identity fragmentation and
                    build a modern, flexible identity infrastructure.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Retailer\'s Identity Unification')}
                    Use Case: A Retailer's Identity Unification
                </h3>
                <p>
                    <span>Challenge:</span> A large retailer had multiple identity systems
                    for its employees, customers, and partners, making it difficult to manage
                    access and ensure a consistent user experience. They needed to unify these
                    silos without a costly and disruptive data migration.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Radiant Logic’s
                    Identity Data Platform to create a virtual, unified view of all user
                    identities. We configured the platform to provide a single identity for
                    employees to access various applications and enabled a consistent login
                    experience for customers across multiple brand websites.
                </p>
                <p>
                    <span>Result:</span> The retailer reduced their identity management
                    overhead by <span>40%</span>, improved security by eliminating redundant
                    accounts, and enhanced the user experience with a unified login.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Simplified Identity Management:</span> A single, unified view
                        of all identities simplifies administration and reduces operational
                        complexity.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Improved Security:</span> Eliminates redundant accounts and
                        provides consistent access policies across all systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced User Experience:</span> Provides a consistent and
                        frictionless login experience with a single identity across all
                        applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Flexible Integration:</span> A virtual identity layer allows
                        for easy integration with new applications and services without
                        disrupting existing systems.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our expertise in Radiant Logic helps organizations:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Assess and design a unified identity architecture.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Implement and configure the Radiant Logic platform to create a global
                        identity view.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Integrate a wide range of disparate identity sources and applications.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide ongoing support and optimization to ensure the platform meets
                        evolving business needs.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.radiantlogic.com/solutions"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Radiant Logic Solutions
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://docs.radiantlogic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Radiant Logic Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.radiantlogic.com/resources"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Radiant Logic Resources
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/RadiantLogic/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Radiant Logic GitHub Repository
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'saviynt',
        image: Saviynt,
        title: 'Saviynt: Enabling Intelligent Identity Governance and Administration',
        description:
            'Saviynt is a leading provider of Identity Governance and Administration (IGA) solutions, delivering comprehensive capabilities to manage user identities, ensure compliance, and enforce security across enterprise environments. At RAAH Technologies, we leverage our deep expertise with Saviynt to help organizations achieve their identity and compliance goals effectively.',
        content: (
            <div className='SolutionsPlatformDetailedViewContentWrapper'>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Key Capabilities of Saviynt')}
                    Key Capabilities of Saviynt
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Lifecycle Management:</span> Automate the creation, modification, and removal of user identities, ensuring users have appropriate access throughout their lifecycle.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Access Request and Certification:</span> Empower users to request access to resources and streamline certification campaigns to meet compliance requirements.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Privileged Access Management (PAM):</span> Control and monitor privileged access to critical systems, reducing the risk of insider threats and misuse.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Risk-Based Access Controls:</span> Define and enforce access policies based on risk levels, ensuring critical data and systems are adequately protected.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Compliance & Audit Reporting:</span> Generate detailed audit reports to demonstrate compliance with regulatory standards such as GDPR, SOX, and HIPAA.
                    </li>
                </ul>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: Automating Compliance in a Regulated Industry')}
                    Use Case: Automating Compliance in a Regulated Industry
                </h3>
                <p>
                    <span>Challenge:</span> A large healthcare provider needed to streamline identity management processes while ensuring compliance with HIPAA and other regulatory standards.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Saviynt's IGA platform to automate user provisioning, access certification, and privileged access management, ensuring compliance and reducing manual efforts.
                </p>
                <p>
                    <span>Result:</span> The provider saw a 60% reduction in the time spent on manual compliance-related tasks and significantly improved audit readiness.
                </p>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader("RAAH's Expertise")}
                    RAAH's Expertise
                </h3>
                <p>
                    At RAAH Technologies, we combine our expertise in identity and governance with Saviynt's robust capabilities to deliver tailored solutions for organizations across industries. Our services include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">Consulting on identity governance strategies using Saviynt's platform.</li>
                    <li className="SolutionsPlatformDetailedViewListItem">Implementation and configuration of Saviynt to automate identity and compliance processes.</li>
                    <li className="SolutionsPlatformDetailedViewListItem">Integration of Saviynt with other enterprise applications to create a cohesive security framework.</li>
                    <li className="SolutionsPlatformDetailedViewListItem">Ongoing support and optimization to adapt to evolving compliance needs and security threats.</li>
                </ul>

                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://saviynt.com/glossary-listing/" target="_blank" rel="noopener noreferrer">
                            Saviynt Glossary
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://forums.saviynt.com/" target="_blank" rel="noopener noreferrer">
                            Saviynt Community
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a href="https://docs.saviyntcloud.com/" target="_blank" rel="noopener noreferrer">
                            Saviynt Documentation
                        </a>
                    </li>
                </ul>
            </div>
        )
    },  
    {
        id: 'servicenow',
        image: ServiceNow,
        title: 'Streamlining IT Service Management with ServiceNow Solutions',
        description:
            'ServiceNow is a leading cloud-based platform that helps organizations manage digital workflows for enterprise operations. While not an identity platform, it is often integrated with identity solutions to streamline IT service management and enhance employee experiences. At RAAH Technologies, we help clients integrate their identity solutions with ServiceNow to automate IT workflows and improve efficiency.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('ServiceNow Solutions: Enhancing IT Workflows with Identity')}
                    ServiceNow Solutions: Enhancing IT Workflows with Identity
                </h3>
                <p>
                    ServiceNow’s platform, when integrated with identity solutions, allows
                    organizations to automate a variety of IT and business processes. Key
                    features of this integration include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Automated Onboarding and Offboarding:</span> Automatically
                        creates and deactivates user accounts in ServiceNow based on identity
                        lifecycle events, ensuring that access is always current.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Service Catalog Integration:</span> Allows employees to
                        request access to applications through the ServiceNow service catalog,
                        with automated approvals and provisioning through the identity platform.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Automated Password Management:</span> Integrates with the
                        identity platform to allow employees to reset their passwords through
                        ServiceNow, reducing IT helpdesk calls.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Centralized Reporting:</span> Provides a centralized view of
                        all user access and activities for auditing and compliance reporting.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> specializes in integrating identity
                    platforms with ServiceNow to help organizations automate workflows, improve
                    operational efficiency, and enhance the employee experience.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Financial Institution\'s IT Automation')}
                    Use Case: A Financial Institution's IT Automation
                </h3>
                <p>
                    <span>Challenge:</span> A major financial institution needed to automate
                    its manual IT onboarding process, which was slow and prone to errors. They
                    needed a solution that could integrate with their identity platform to
                    automatically provision new employees with access to the systems they needed.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies integrated the institution’s
                    identity platform with ServiceNow, automating the creation of user accounts
                    and the provisioning of access rights based on the employee's role. We also
                    integrated a self-service password reset feature to reduce the number of
                    helpdesk tickets.
                </p>
                <p>
                    <span>Result:</span> The institution reduced its employee onboarding time
                    by <span>60%</span>, reduced IT helpdesk calls by <span>40%</span>, and
                    improved its overall operational efficiency.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Improved Efficiency:</span> Automates manual IT and business
                        workflows, freeing up IT staff to focus on strategic initiatives.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced Employee Experience:</span> Provides a seamless and
                        frictionless experience for employees to request access and manage their
                        passwords.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Centralized Management:</span> A single platform for managing
                        IT and business workflows, improving visibility and control.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Reduced IT Costs:</span> Automation and self-service features
                        reduce the need for manual intervention from the IT helpdesk.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our expertise in ServiceNow integration with identity platforms allows us
                    to:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Design and implement seamless integrations between identity platforms
                        and ServiceNow.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Automate workflows for user onboarding, offboarding, and access
                        provisioning.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Configure self-service features to reduce the burden on the IT helpdesk.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Provide ongoing support and optimization to ensure the integration
                        delivers maximum value.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.servicenow.com/products/it-service-management.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ServiceNow IT Service Management
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://developer.servicenow.com/dev.do"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ServiceNow Developer Portal
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://www.servicenow.com/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ServiceNow Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://community.servicenow.com/community"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ServiceNow Community
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'wso2',
        image: WS02,
        title: 'Delivering API and Identity Management with WSO2 Solutions',
        description:
            'WSO2 offers an open-source, full-stack platform for API and identity management that enables organizations to build, deploy, and manage secure digital services. At RAAH Technologies, we help clients leverage WSO2\'s solutions to create a robust and scalable foundation for their digital initiatives.',
        content: (
            <div className="SolutionsPlatformDetailedViewContentWrapper">
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('WSO2: Delivering API and Identity Management')}
                    WSO2: Delivering API and Identity Management
                </h3>
                <p>
                    WSO2’s API and Identity solutions are designed to provide a comprehensive
                    and flexible platform for digital transformation. Key features include:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>API Management:</span> A full-lifecycle API management
                        platform for creating, publishing, and managing APIs.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Identity Server:</span> An open-source identity and access
                        management solution for authentication, authorization, and federation.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Enables users to access multiple
                        applications with a single login, enhancing user experience.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Adds an extra layer
                        of security to protect user accounts and sensitive data.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>API Security:</span> Secures APIs with OAuth 2.0, OpenID
                        Connect, and other protocols to prevent unauthorized access.
                    </li>
                </ul>
                <p>
                    <span>RAAH Technologies</span> helps organizations leverage the power of
                    WSO2’s open-source platform, providing expert guidance on implementation,
                    customization, and integration to ensure that clients achieve their digital
                    transformation goals.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Use Case: A Fintech Firm\'s Secure API Access')}
                    Use Case: A Fintech Firm's Secure API Access
                </h3>
                <p>
                    <span>Challenge:</span> A fast-growing fintech firm needed a robust
                    platform to manage and secure a large number of APIs for its partners and
                    customers. They also required a flexible identity solution to provide a
                    seamless, secure login experience.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented WSO2’s Identity
                    Server and API Manager. We configured API security policies using OAuth and
                    OpenID Connect and integrated the Identity Server to provide Single
                    Sign-On (SSO) and Multi-Factor Authentication (MFA) for users and partners.
                </p>
                <p>
                    <span>Result:</span> The fintech firm was able to securely scale its
                    API ecosystem, onboard partners more efficiently, and provide a seamless
                    and secure user experience, resulting in a <span>30% increase</span> in partner
                    adoption.
                </p>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Benefits at a Glance')}
                    Benefits at a Glance
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Flexible and Scalable:</span> An open-source platform that
                        can be customized and scaled to meet the unique needs of any
                        organization.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Comprehensive Security:</span> Secure APIs and user identities
                        with a full suite of security features, including OAuth and MFA.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Enhanced User Experience:</span> SSO and API management
                        capabilities create a seamless experience for users and developers.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <span>Cost-Effective:</span> The open-source nature of WSO2
                        solutions provides a flexible and cost-effective alternative to
                        proprietary platforms.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('RAAH\'s Expertise')}
                    RAAH's Expertise
                </h3>
                <p>
                    Our team provides expert services for WSO2, including:
                </p>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Consulting and strategic planning for WSO2 implementation.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Customization and development to tailor WSO2 solutions to business needs.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Integration with existing enterprise systems.
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        Ongoing support and maintenance.
                    </li>
                </ul>
                <h3 className="SolutionsPlatformDetailedViewSubheader">
                    {getIconForSubheader('Helpful Resources')}
                    Helpful Resources
                </h3>
                <ul className="SolutionsPlatformDetailedViewList">
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://wso2.com/identity-and-access-management/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WSO2 Identity and Access Management
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://apim.docs.wso2.com/en/latest/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WSO2 API Manager Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://is.docs.wso2.com/en/latest/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WSO2 Identity Server Documentation
                        </a>
                    </li>
                    <li className="SolutionsPlatformDetailedViewListItem">
                        <a
                            href="https://github.com/wso2/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WSO2 GitHub Repository
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
];

const SolutionsPlatformDetailedView = () => {
    const [selectedPlatformDocument, setSelectedPlatformDocument] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const matched = path.match(/^\/platforms\/([\w-]+)$/);
        if (matched) {
            setSelectedPlatformDocument(matched[1]);
        } else if (path === '/platforms') {
            setSelectedPlatformDocument(null);
        }
    }, [location.pathname]);

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/solutions#platforms');
    };

    return (
        <div className='SolutionsPlatformDetailedViewContainer'>
            <div className='SolutionsPlatformDetailedViewIntro'>
                <div className='SolutionsPlatformDetailedViewIntroTitleBar'>
                    <div className='SolutionsPlatformDetailedViewIntroTitleAccent'>
                        <img
                            className='SolutionsPlatformDetailedViewIntroLogo'
                            src={platformDocuments.find((document) => document.id === selectedPlatformDocument)?.image}
                            alt="Platform Logo"
                        />
                    </div>
                    <button className='SolutionsPlatformDetailedViewCloseButton' onClick={handleClose} aria-label="Return to Solutions">
                        <svg
                            className="SolutionsPlatformDetailedViewCloseArrow"
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
                <h2 className='SolutionsPlatformDetailedViewIntroTitle'>{platformDocuments.find((document) => document.id === selectedPlatformDocument)?.title}</h2>
                <p className='SolutionsPlatformDetailedViewIntroDescription'>
                    {platformDocuments.find((document) => document.id === selectedPlatformDocument)?.description}
                </p>
            </div>
            {platformDocuments.find((document) => document.id === selectedPlatformDocument)?.content}
        </div>
    );
}

export default SolutionsPlatformDetailedView;