import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SolutionsUseCaseDetailedView.css';
import {
    IoFingerPrint, IoShieldCheckmark, IoPersonCircle,
    IoLaptop, IoLockOpen, IoRibbon, IoBuild,
    IoNewspaper, IoSwapHorizontal, IoDocumentText, IoServer,
    IoRefresh, IoSearchCircle, IoHammer, IoCube, IoIdCard, IoLibrary,
    IoPersonAdd, IoShareSocial, IoSettings, IoCodeSlash, IoResize,
    IoWarning, IoBarChart, IoGitNetwork, IoShieldHalf, IoGitPullRequest,
    IoPeople, IoEye, IoDocumentAttach, IoIdCardOutline, IoSpeedometer,
    IoTime, IoSearch, IoVideocam, IoSync, IoSchool, IoLockClosed
} from 'react-icons/io5';


const useCaseDocuments = [
    {
        id: 'usecase-doc-1',
        title: 'Single Sign-On (SSO) for Employees',
        description: 'Single Sign-On (SSO) enables employees to use a single set of credentials to access multiple applications, improving user experience and reducing IT overhead.It minimizes the need for remembering multiple passwords, leading to fewer password- related issues and increasing productivity.',
        icon: <IoFingerPrint />,
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoRibbon />
                        Benefits of SSO for Employee Access
                    </h3>
                    <p>
                        Implementing SSO not only enhances the user experience but also
                        strengthens security. By centralizing authentication, organizations can
                        reduce the risk of compromised credentials, manage access policies more
                        efficiently, and ensure better adherence to security protocols.
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Streamlined Access:</span> Employees can access all necessary
                            tools and applications with a single login, improving efficiency.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Reduced IT Burden:</span> Fewer password resets mean less
                            strain on IT support teams, reducing operational costs.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Centralized Security:</span> Administrators can manage user
                            access centrally, making it easier to enforce security policies.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoBuild />
                        RAAH Technologies' Expertise in SSO
                    </h3>
                    <p>
                        At RAAH Technologies, we specialize in integrating Single
                        Sign-On (SSO) with existing identity infrastructure. We design custom SSO
                        solutions that meet the specific needs of your organization, including:
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Custom Integrations:</span> Our solutions integrate seamlessly
                            with third-party applications, legacy systems, and custom applications.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Secure Authentication:</span> By centralizing authentication,
                            we help your organization enforce stricter access policies.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Improved Compliance:</span> Ensure that access is granted
                            based on organizational roles and compliance standards.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoNewspaper />
                        Use Case: Manufacturing Company Enhances Employee Productivity
                    </h3>
                    <p>
                        Challenge: A manufacturing company needed to simplify
                        employee access to multiple internal systems, each with its own login
                        requirements.
                    </p>
                    <p>
                        Solution: RAAH Technologies implemented an SSO solution
                        that integrated all of the company's internal applications, allowing
                        employees to log in once to access all systems securely.
                    </p>
                    <p>
                        Result: The company reported a
                        40% reduction in IT helpdesk tickets related to login
                        issues and an improvement in employee productivity.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 'usecase-doc-2',
        title: 'Multi-factor Authentication (MFA) for Enhanced Security',
        description: 'Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide two or more verification factors to gain access to an application, account, or other resource. By combining multiple authentication methods, MFA significantly improves security, making it much harder for attackers to gain unauthorized access.',
        icon: <IoShieldCheckmark />,
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoRibbon />
                        Benefits of MFA
                    </h3>
                    <p>
                        Relying solely on passwords for authentication is no longer sufficient
                        given today’s evolving cyber threats. MFA offers an additional layer of
                        defense by requiring a combination of factors—such as something the user
                        knows, something they have, or something they are. This provides
                        substantial protection against unauthorized access, even if one factor
                        (e.g., a password) is compromised.
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Strengthens Security:</span> By combining multiple factors
                            like biometrics, SMS-based OTP, hardware tokens, or push notifications, MFA
                            significantly reduces the chances of unauthorized access.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Mitigates Account Compromise:</span> MFA prevents unauthorized
                            access even if login credentials are stolen, greatly reducing the risk
                            of data breaches and identity theft.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Compliance:</span> Many data privacy standards and regulations
                            (e.g., GDPR, HIPAA) mandate the use of MFA to protect sensitive
                            information, making it crucial for regulatory compliance.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoBuild />
                        How RAAH Technologies Supports MFA Implementation
                    </h3>
                    <p>
                        RAAH Technologies helps organizations design and deploy
                        Multi-Factor Authentication (MFA) solutions that align with business
                        needs. Our MFA solutions offer:
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Customizable MFA Methods:</span> We implement a variety of
                            authentication methods including biometrics, SMS-based OTP, hardware
                            tokens, push notifications, and email verification.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Seamless Integration:</span> Our solutions integrate with your
                            existing IAM and application infrastructure, offering an uninterrupted
                            user experience and reducing complexity during implementation.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Adaptive MFA:</span> Deploy adaptive MFA that leverages
                            context-based analysis to prompt for additional verification only when
                            risk is detected, balancing security with user convenience.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoNewspaper />
                        Use Case: Securing Healthcare Employee Portals
                    </h3>
                    <p>
                        <span>Challenge:</span> A healthcare organization needed a way to
                        protect access to their employee portal, which contained sensitive patient
                        data and financial information. They also needed to meet HIPAA compliance.
                    </p>
                    <p>
                        <span>Solution:</span> RAAH Technologies deployed an MFA solution
                        utilizing a combination of hardware tokens and push notifications to
                        verify employee identities, ensuring that only authorized personnel could
                        access sensitive systems.
                    </p>
                    <p>
                        <span>Result:</span> The organization significantly improved the
                        security of its systems, achieved HIPAA compliance, and experienced a
                        substantial reduction in unauthorized access attempts.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 'usecase-doc-3',
        title: 'Role-Based Access Control (RBAC)',
        description: 'Role-Based Access Control (RBAC) defines roles and associated permissions, enabling organizations to manage access more efficiently. With RBAC, users are granted access based on their job roles, helping enforce consistent security and compliance policies.',
        icon: <IoPersonCircle />,
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoRibbon />
                        Benefits of RBAC
                    </h3>
                    <p>
                        Implementing RBAC helps organizations improve security, reduce
                        administrative overhead, and enforce compliance.
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Reduced Complexity:</span> Managing permissions by roles
                            rather than individual users significantly reduces administrative
                            burden.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Improved Security:</span> RBAC ensures users only have access
                            to the data and systems required for their role, thereby minimizing the
                            risk of unauthorized access.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Compliance:</span> RBAC helps organizations meet regulatory
                            standards by defining clear and manageable access rights.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoBuild />
                        How RAAH Technologies Supports RBAC Implementation
                    </h3>
                    <p>
                        <span>RAAH Technologies:</span> assists businesses in defining and
                        implementing RBAC policies that align with operational needs. Our RBAC
                        solutions provide:
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Role Customization:</span> Customize roles according to unique
                            organizational needs to ensure that access is accurately tailored.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Seamless Integration:</span> Integrate RBAC policies with your
                            existing IAM infrastructure and enforce access controls without
                            disruptions.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Audit and Reporting:</span> Track and audit role assignments
                            and permission changes for compliance and security insights.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoNewspaper />
                        Use Case: Access Management for Financial Services
                    </h3>
                    <p>
                        <span>Challenge:</span> A financial services company needed to manage
                        access to sensitive data effectively while meeting regulatory
                        requirements.
                    </p>
                    <p>
                        <span>Solution:</span> RAAH Technologies deployed a Role-Based Access
                        Control solution that segmented employees by roles, granting appropriate
                        access based on role requirements.
                    </p>
                    <p>
                        <span>Result:</span> The company improved its security posture,
                        minimized the risk of unauthorized access, and achieved compliance with
                        industry regulations.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 'usecase-doc-4',
        title: 'Device and Endpoint Identity Management',
        description: 'Device and Endpoint Identity Management is crucial for securing identities across the numerous devices used in modern workplaces. It involves managing the identities of devices and ensuring that only authorized devices are allowed to access sensitive systems and data.',
        icon: <IoLaptop />,
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoRibbon />
                        Benefits of Device and Endpoint Identity Management
                    </h3>
                    <p>
                        Implementing Device and Endpoint Identity Management helps organizations
                        protect against unauthorized device access and maintain visibility over
                        the devices accessing their network.
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Enhanced Security:</span> Ensure that only trusted devices can
                            access critical systems and sensitive data, reducing the risk of
                            breaches.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Compliance:</span> Meet regulatory requirements by managing
                            and tracking device identities effectively, ensuring adherence to
                            security standards.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Centralized Management:</span> Streamline device identity
                            management by centralizing control, which reduces administrative
                            overhead and enhances operational efficiency.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoBuild />
                        How RAAH Technologies Supports Device Identity Management
                    </h3>
                    <p>
                        <span>RAAH Technologies:</span> offers solutions to manage device
                        identities and ensure secure access across your organization. Our
                        solutions provide:
                    </p>
                    <ul className="SolutionsUseCaseDetailedViewList">
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Trusted Device Authentication:</span> We help you implement
                            trusted device authentication, allowing only pre-registered and
                            authenticated devices to connect to your network.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Seamless Integration:</span> Our device management solutions
                            integrate with existing IAM systems, providing comprehensive visibility
                            and control without adding complexity.
                        </li>
                        <li className="SolutionsUseCaseDetailedViewListItem">
                            <span>Policy Enforcement:</span> Define and enforce policies to
                            control device access based on risk, compliance needs, and business
                            requirements.
                        </li>
                    </ul>

                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
                        <IoNewspaper />
                        Use Case: Securing Remote Work Devices
                    </h3>
                    <p>
                        <span>Challenge:</span> A global organization needed to secure remote
                        work devices accessing their network, while maintaining a seamless
                        experience for employees.
                    </p>
                    <p>
                        <span>Solution:</span> RAAH Technologies implemented a Device and
                        Endpoint Identity Management solution that authenticated devices before
                        granting access, ensuring that only company-approved devices could
                        connect.
                    </p>
                    <p>
                        <span>Result:</span> The organization significantly improved its security
                        posture, reduced unauthorized access attempts, and provided a secure remote
                        work environment for employees.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 'usecase-doc-5',
        title: 'Passwordless Authentication for Workforce',
        description: 'Passwordless Authentication is a modern security solution that eliminates the need for traditional passwords, offering a more secure and user-friendly authentication experience. By using biometrics, security tokens, or other secure methods, Passwordless Authentication reduces the risk of credential theft and phishing attacks.',
        icon: <IoLockOpen />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Passwordless Authentication
                </h3>
                <p>
                    Implementing Passwordless Authentication helps organizations enhance security
                    while improving the user experience by removing the need for complex passwords.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> By eliminating passwords, the risk of phishing, credential stuffing, and brute force attacks is significantly reduced.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Better User Experience:</span> Users no longer need to remember or manage complex passwords, resulting in a seamless login experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced IT Overhead:</span> Password-related support requests, such as password resets, are minimized, reducing the burden on IT support teams.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Passwordless Authentication
                </h3>
                <p>
                    <span>RAAH Technologies:</span> helps organizations implement Passwordless Authentication solutions that fit their specific needs. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Biometric Authentication:</span> We enable biometric methods such as fingerprint and facial recognition to provide secure, password-free access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Hardware Tokens and Mobile Devices:</span> Implement hardware security keys and mobile push notifications as secure alternatives to passwords.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Use context-aware, risk-based analysis to prompt for additional verification only when necessary, balancing security and convenience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Enhancing Security for Remote Employees
                </h3>
                <p>
                    <span>Challenge:</span> A tech company needed to enhance security for its remote employees while reducing the friction caused by frequent password resets and complex password policies.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Passwordless Authentication solution using biometric verification and hardware tokens, providing secure and seamless access to corporate resources.
                </p>
                <p>
                    <span>Result:</span> The company experienced a significant reduction in password-related IT support tickets, improved employee satisfaction, and enhanced overall security for remote access.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-6',
        title: 'Zero Trust Security and Adaptive Access Controls',
        description: "Zero Trust Security is a framework for enhancing security by assuming that no user or device can be trusted by default, regardless of whether they are inside or outside the organization's network. It requires strict verification for every user or device attempting to access resources.",
        icon: <IoLockClosed />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Zero Trust Security and Adaptive Access Controls
                </h3>
                <p>
                    By implementing a Zero Trust model, organizations can significantly
                    improve their security posture and protect against modern cyber threats.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Minimizes Attack Surface:</span> Eliminating implicit trust reduces the attack surface, making it harder for attackers to move laterally within the network.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Data Protection:</span> Zero Trust ensures that all access to sensitive data is verified, reducing the risk of data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The framework supports compliance with various regulations by enforcing strict access controls and continuous monitoring.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Zero Trust Security
                </h3>
                <p>
                    RAAH Technologies provides comprehensive solutions to help you implement a
                    Zero Trust framework tailored to your organization’s needs. Our offerings include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Continuous Verification:</span> We deploy solutions that continuously verify user and device identities, ensuring that access is granted only when conditions are met.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Policies:</span> Implement adaptive policies that adjust access rights based on real-time risk analysis, providing a flexible yet secure environment.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Micro-segmentation:</span> We help segment your network to isolate critical resources, limiting the damage an attacker can inflict if a breach occurs.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Securing a Financial Institution's Network
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution with a mix of on-premises and cloud-based applications needed to protect sensitive customer data from a growing number of cyber threats.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Zero Trust Security framework, which required every user and device to be authenticated and authorized before accessing any resource, regardless of their location.
                </p>
                <p>
                    <span>Result:</span> The institution significantly reduced its security risk, improved its compliance posture, and enhanced the overall protection of sensitive customer data.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-7',
        title: 'Employee Onboarding and Offboarding',
        description: 'Automate onboarding and offboarding to streamline identity management.',
        icon: <IoSwapHorizontal />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Employee Onboarding and Offboarding
                </h3>
                <p>
                    Automating the employee onboarding and offboarding process improves
                    efficiency, security, and compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Streamlined Access:</span> New employees gain access to the
                        necessary systems quickly and seamlessly, boosting productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Access to systems is automatically
                        revoked upon offboarding, preventing unauthorized access and potential
                        data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Compliance:</span> Automated processes ensure that
                        access rights are managed consistently, simplifying compliance audits.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Onboarding and Offboarding
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that automate and
                    streamline the entire identity lifecycle for your employees. Our solutions
                    offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning:</span> We automate the provisioning of
                        user accounts and access rights upon onboarding, reducing manual effort.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Deprovisioning:</span> We automate the deprovisioning of
                        user accounts upon offboarding, ensuring timely and secure access removal.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> Our solutions integrate seamlessly with your
                        HR systems and other applications, ensuring consistency and accuracy.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Large Enterprise Improves Onboarding Efficiency
                </h3>
                <p>
                    <span>Challenge:</span> A large enterprise with a high employee turnover
                    rate faced challenges in managing the manual onboarding and offboarding
                    process, leading to security vulnerabilities and delays.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an automated
                    onboarding and offboarding solution that integrated with the company’s HR
                    system, automatically creating and deactivating accounts.
                </p>
                <p>
                    <span>Result:</span> The enterprise reduced manual administrative tasks by
                    50%, improved security by ensuring timely access removal, and streamlined the
                    onboarding process for new employees.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-8',
        title: 'Access Certification and Attestation',
        description: 'Access Certification and Attestation is a process of regularly reviewing and validating user access rights to ensure they align with business requirements and security policies. It is a critical component of governance and compliance.',
        icon: <IoDocumentText />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Access Certification and Attestation
                </h3>
                <p>
                    Access Certification and Attestation ensures that access rights are current
                    and appropriate, reducing the risk of unauthorized access and ensuring
                    compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Risk:</span> By regularly reviewing access rights, organizations can
                        identify and remove unnecessary permissions, minimizing security risks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides auditable proof that
                        access controls are being enforced, helping to meet regulatory requirements.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Governance:</span> It reinforces a culture of security and accountability
                        by making managers responsible for certifying their team's access rights.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Access Certification
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions to automate and simplify the
                    access certification process, ensuring your organization remains secure and compliant.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Campaigns:</span> We automate the creation and distribution of
                        access review campaigns, prompting managers to review their team's access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reporting and Auditing:</span> Our solutions provide comprehensive
                        reports and audit trails, making it easy to demonstrate compliance to auditors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> Our solutions integrate with your existing IAM
                        systems, allowing for seamless management of access rights.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Retail Company Ensures Compliance
                </h3>
                <p>
                    <span>Challenge:</span> A large retail company needed to regularly review employee
                    access to customer data to comply with data protection regulations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an access certification
                    solution that automated the review process, requiring managers to attest to their
                    employees' access rights on a quarterly basis.
                </p>
                <p>
                    <span>Result:</span> The company improved its compliance posture, reduced security
                    risks, and simplified the audit process.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-9',
        title: 'Access Request and Workflow Automation',
        description: 'Access Request and Workflow Automation streamlines the process of requesting and granting access to applications and data. It replaces manual, error-prone processes with automated workflows, improving efficiency, security, and governance.',
        icon: <IoServer />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Access Request and Workflow Automation
                </h3>
                <p>
                    Automating access requests and workflows helps organizations reduce administrative
                    overhead, improve security, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Increased Efficiency:</span> The automated process speeds up the time it takes to grant access, improving employee productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Automated workflows ensure that all access requests are properly reviewed and approved, reducing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Auditing:</span> The system creates a clear audit trail of all access requests and approvals, simplifying compliance efforts.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Workflow Automation
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that automate and govern
                    access request workflows. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Custom Workflows:</span> We design custom workflows that align with
                        your organization's specific approval processes and policies.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Self-Service Portal:</span> Users can request access through a
                        self-service portal, empowering them to manage their own access needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> Our solutions integrate with your existing
                        systems, allowing for seamless provisioning and deprovisioning of access.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Services Company Automates Access Requests
                </h3>
                <p>
                    <span>Challenge:</span> A financial services company with thousands of employees
                    was struggling to manage a manual, paper-based access request process. This
                    led to delays, errors, and compliance risks.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an automated access
                    request and workflow solution that provided a self-service portal for employees
                    and streamlined the approval process.
                </p>
                <p>
                    <span>Result:</span> The company reduced the time it took to grant access by
                    70%, eliminated manual errors, and improved its compliance posture.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-10',
        title: 'Identity Lifecycle Management',
        description: 'Identity Lifecycle Management (ILM) manages the complete lifecycle of user identities, from initial creation to deactivation. ILM ensures that users have the right access at the right time, while also enforcing security and compliance policies.',
        icon: <IoRefresh />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Identity Lifecycle Management
                </h3>
                <p>
                    Implementing ILM helps organizations improve security, reduce administrative
                    overhead, and ensure compliance throughout the employee lifecycle.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Processes:</span> ILM automates the creation, modification, and
                        deactivation of user accounts, reducing manual effort and errors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> It ensures that access rights are always
                        current and appropriate, reducing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> ILM provides a clear audit trail of all
                        identity-related changes, simplifying compliance and reporting.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Identity Lifecycle Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive solutions to manage the
                    entire identity lifecycle, from hire to retire. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning:</span> We automate the provisioning of user accounts
                        and access rights based on predefined roles and policies.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Deprovisioning:</span> We ensure that access is automatically
                        revoked upon an employee's departure, preventing security vulnerabilities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration with HR Systems:</span> Our solutions integrate with HR
                        systems, ensuring that identity information is always accurate and up-to-date.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Global Technology Company Improves ILM
                </h3>
                <p>
                    <span>Challenge:</span> A global technology company with a high number of
                    contractors and temporary employees struggled to manage their identities
                    effectively, leading to security risks and compliance issues.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an ILM solution that
                    automated the creation and deactivation of all user accounts, including
                    contractors and temporary employees.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced administrative
                    overhead, and simplified the management of temporary and contractor identities.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-11',
        title: 'Role Mining and Optimization',
        description: 'Role Mining and Optimization is a process of analyzing user access rights to identify and define optimal roles. It helps organizations simplify access management, enforce security policies, and reduce administrative overhead.',
        icon: <IoSearchCircle />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Role Mining and Optimization
                </h3>
                <p>
                    Role Mining and Optimization helps organizations create a more efficient and
                    secure access control model.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Complexity:</span> By defining clear and accurate roles, the
                        process of managing permissions becomes much simpler.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> It helps identify and remove unnecessary or
                        over-privileged access rights, reducing security risks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> Role optimization ensures that access rights
                        align with compliance standards, simplifying auditing and reporting.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Role Mining
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you analyze
                    your existing access rights and define optimal roles. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Data Analysis:</span> We analyze user access data to identify common
                        access patterns and propose new roles.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role Definition:</span> We help you define clear and concise roles
                        that align with your organization's business needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Enforcement:</span> Our solutions help you implement and enforce
                        the new role-based access policies across your systems.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Enterprise Optimizes Access for Efficiency
                </h3>
                <p>
                    <span>Challenge:</span> An enterprise with tens of thousands of employees had a
                    complex and fragmented access control model, leading to administrative overhead
                    and security risks.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a role mining solution that
                    analyzed access patterns and proposed a new set of optimized roles, which were
                    then implemented across the organization.
                </p>
                <p>
                    <span>Result:</span> The enterprise reduced the number of individual access rights
                    by 60%, improved security by removing unnecessary permissions, and simplified
                    access management for IT.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-12',
        title: 'Separation of Duties (SoD) Management',
        description: 'Separation of Duties (SoD) Management is a control mechanism to prevent fraud and errors by ensuring that no single person has control over all steps of a critical business process. It is a key component of a robust security and compliance program.',
        icon: <IoHammer />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Separation of Duties (SoD)
                </h3>
                <p>
                    Implementing SoD helps organizations prevent fraud and ensure compliance
                    by enforcing strict controls over business processes.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Fraud Prevention:</span> By separating duties, organizations can
                        reduce the risk of fraud and insider threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> SoD helps organizations meet regulatory
                        requirements by demonstrating that controls are in place to prevent misuse of access rights.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Errors:</span> It helps reduce errors by ensuring that critical
                        tasks are reviewed and approved by multiple people.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports SoD Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions to help you define, monitor, and
                    enforce SoD policies across your organization. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Definition:</span> We help you define custom SoD policies
                        that align with your business processes and compliance requirements.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Monitoring:</span> Our solutions monitor access rights in
                        real-time to identify and alert on potential SoD violations.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Enforcement:</span> We help you enforce SoD policies by
                        automatically revoking access rights that violate your rules.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Healthcare Provider Prevents Fraud
                </h3>
                <p>
                    <span>Challenge:</span> A healthcare provider needed to prevent fraud and
                    ensure compliance with HIPAA by enforcing Separation of Duties policies.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an SoD management
                    solution that monitored access rights and alerted on potential conflicts,
                    preventing a single person from controlling both patient data and billing.
                </p>
                <p>
                    <span>Result:</span> The organization improved its security posture,
                    reduced the risk of fraud, and successfully met its compliance requirements.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-13',
        title: 'Granular Access Controls',
        description: 'Granular Access Controls provide fine-grained control over user access to applications and data. They allow organizations to define very specific permissions, ensuring that users have access only to what they need to perform their jobs.',
        icon: <IoCube />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Granular Access Controls
                </h3>
                <p>
                    Granular Access Controls help organizations improve security, reduce
                    administrative overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By enforcing fine-grained controls, organizations
                        can reduce the risk of unauthorized access and data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> Granular controls help organizations meet
                        regulatory requirements by demonstrating that access is restricted to what is
                        absolutely necessary.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of granular
                        permissions, organizations can reduce manual administrative tasks.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Granular Access Controls
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you define and
                    enforce granular access controls. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Definition:</span> We help you define granular access policies
                        that align with your organization's business needs and security requirements.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> Our solutions integrate with your existing
                        applications and systems, allowing for the enforcement of granular controls.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> We provide comprehensive reporting on
                        granular access rights, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Technology Company Secures its Data
                </h3>
                <p>
                    <span>Challenge:</span> A technology company with a large number of developers
                    needed to restrict access to source code repositories and production environments.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a granular access control
                    solution that allowed the company to define very specific permissions for each
                    developer, restricting access to only the necessary repositories and environments.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced the risk of
                    accidental or malicious data loss, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-14',
        title: 'User Entitlement Management',
        description: 'User Entitlement Management is a process of defining, managing, and governing user access to applications and data. It ensures that users have the right access at the right time, while also enforcing security and compliance policies.',
        icon: <IoIdCard />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of User Entitlement Management
                </h3>
                <p>
                    User Entitlement Management helps organizations improve security, reduce
                    administrative overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By ensuring that entitlements are always
                        current and appropriate, organizations can reduce the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> Entitlement management provides a clear audit
                        trail of all access rights, simplifying compliance and reporting.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of entitlements,
                        organizations can reduce manual administrative tasks.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports User Entitlement Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you define, manage,
                    and govern user entitlements. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning:</span> We automate the provisioning of entitlements
                        based on user roles and policies.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification:</span> Our solutions provide a platform for
                        managers to regularly review and certify user entitlements.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing applications and
                        systems, allowing for the enforcement of entitlement policies.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Services Company Manages Entitlements
                </h3>
                <p>
                    <span>Challenge:</span> A financial services company with thousands of employees
                    struggled to manage their entitlements effectively, leading to security risks and
                    compliance issues.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a user entitlement management
                    solution that automated the provisioning of entitlements based on employee roles,
                    and provided a platform for managers to certify access rights.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced administrative
                    overhead, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-15',
        title: 'Audit Compliance',
        description: 'Audit Compliance is the process of ensuring that an organization\'s identity and access management policies and controls align with regulatory requirements and industry standards. It involves providing evidence that access is being managed securely and appropriately.',
        icon: <IoLibrary />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Audit Compliance
                </h3>
                <p>
                    Audit Compliance helps organizations demonstrate that they have robust security
                    controls in place, reducing the risk of fines and reputational damage.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fines:</span> By meeting regulatory requirements, organizations
                        can avoid costly fines and penalties.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Reputation:</span> Demonstrating a strong commitment to security
                        and compliance can improve an organization's reputation with customers and partners.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> The process of preparing for an audit can
                        help organizations identify and address security weaknesses.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Audit Compliance
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you prepare for and
                    pass audits with confidence. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Reporting:</span> We automate the generation of audit
                        reports, providing a clear and comprehensive view of all access rights and changes.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification:</span> Our solutions provide a platform for
                        regularly reviewing and certifying user access rights, which is often a key
                        requirement of audits.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        collect all the necessary data for a comprehensive audit.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Manufacturing Company Meets SOX Requirements
                </h3>
                <p>
                    <span>Challenge:</span> A manufacturing company needed to meet SOX (Sarbanes-Oxley Act)
                    compliance requirements by demonstrating that they had strong controls over
                    access to their financial systems.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an audit compliance solution
                    that provided automated reporting and access certification, demonstrating to
                    auditors that access was being managed securely and appropriately.
                </p>
                <p>
                    <span>Result:</span> The company successfully passed its audit, avoided fines,
                    and improved its overall security posture.
                </p>
            </div>
        )
    },
    // Start of Consumer (B2C, B2B/B2B2C) IAM
    {
        id: 'usecase-doc-16',
        title: 'User Registration and Self-Service Portals',
        description: 'Enable users to register and manage their own accounts.',
        icon: <IoPersonAdd />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of User Registration and Self-Service Portals
                </h3>
                <p>
                    Self-service portals improve user experience, reduce administrative
                    overhead, and enhance security by putting users in control of their own data.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved User Experience:</span> Users can register, manage their
                        profile, and reset their password without needing to contact support.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Administrative Overhead:</span> By empowering users to manage
                        their own accounts, organizations can reduce the burden on IT and support teams.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Self-service portals can incorporate security
                        features like multi-factor authentication and real-time threat detection.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Self-Service Portals
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you build and manage
                    user registration and self-service portals. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Portals:</span> We design and build customizable portals
                        that align with your brand and business needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Seamless Integration:</span> Our portals integrate with your existing
                        applications and systems, providing a consistent user experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Security Features:</span> We build in security features like MFA and
                        risk-based authentication to protect user data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Online Retailer Improves Customer Experience
                </h3>
                <p>
                    <span>Challenge:</span> An online retailer with millions of customers faced
                    challenges in managing user accounts, leading to a high volume of support
                    requests.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a self-service portal
                    that allowed customers to register, manage their profile, and reset their
                    password without needing to contact support.
                </p>
                <p>
                    <span>Result:</span> The retailer reduced support tickets by 60%, improved customer
                    satisfaction, and enhanced the overall user experience.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-17',
        title: 'Social and Federated Login for Customers',
        description: 'Social and Federated Login allows customers to use their social media or other existing credentials to log in to your applications. This improves the user experience by simplifying the login process and reduces the need for users to create and remember new passwords.',
        icon: <IoShareSocial />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Social and Federated Login
                </h3>
                <p>
                    Social and Federated Login improves user experience, increases conversion
                    rates, and reduces administrative overhead.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Simplified Login:</span> Users can log in with a single click,
                        eliminating the need to create new accounts and remember passwords.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Increased Conversion:</span> The simplified login process can
                        increase user registration and conversion rates.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Support Costs:</span> By reducing the number of passwords
                        users need to remember, organizations can reduce password-related support
                        requests.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Social and Federated Login
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement
                    social and federated login for your customers. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Seamless Integration:</span> We integrate with popular social
                        providers like Google, Facebook, and Twitter to provide a seamless login experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Identity Providers:</span> We help you federate with
                        custom identity providers to meet your specific business needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Our solutions incorporate security features
                        like multi-factor authentication to protect user data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Media Company Increases User Engagement
                </h3>
                <p>
                    <span>Challenge:</span> A media company wanted to increase user registration
                    and engagement on its website, but the long registration process was a major
                    barrier.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a social login solution that
                    allowed users to register and log in with their social media accounts.
                </p>
                <p>
                    <span>Result:</span> The company saw a 30% increase in user registration,
                    improved customer satisfaction, and enhanced the overall user experience.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-18',
        title: 'Customer Profile and Consent Management',
        description: 'Customer Profile and Consent Management is a process of managing customer data and consent preferences. It ensures that organizations collect and use customer data in a compliant and transparent manner, building trust with their customers.',
        icon: <IoSettings />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Customer Profile and Consent Management
                </h3>
                <p>
                    Customer Profile and Consent Management helps organizations build trust
                    with their customers, ensure compliance, and personalize their services.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Trust:</span> By being transparent about data collection
                        and use, organizations can build trust with their customers.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process helps organizations meet
                        regulatory requirements like GDPR and CCPA by managing consent preferences.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Personalized Services:</span> By collecting and managing customer
                        data effectively, organizations can provide personalized services and offers.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Customer Profile Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you manage
                    customer profiles and consent preferences. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Profile Management:</span> We provide a centralized platform
                        to manage all customer data, ensuring consistency and accuracy.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Consent Management:</span> Our solutions help you collect, manage, and
                        enforce customer consent preferences, ensuring compliance.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing marketing and
                        CRM systems, providing a unified view of customer data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: E-commerce Company Builds Customer Trust
                </h3>
                <p>
                    <span>Challenge:</span> An e-commerce company needed to manage customer data
                    and consent preferences to comply with GDPR and build trust with its customers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a customer profile and
                    consent management solution that provided a self-service portal for customers
                    to manage their data and preferences.
                </p>
                <p>
                    <span>Result:</span> The company improved its compliance posture, built trust
                    with its customers, and provided a personalized shopping experience.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-19',
        title: 'API Security and Access Control',
        description: 'API Security and Access Control is a process of securing APIs and managing access to them. It ensures that only authorized applications and users can access your APIs, protecting sensitive data and systems.',
        icon: <IoCodeSlash />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of API Security and Access Control
                </h3>
                <p>
                    API Security and Access Control helps organizations protect their APIs
                    from unauthorized access, data breaches, and other cyber threats.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By enforcing strong access controls, organizations
                        can protect their APIs from unauthorized access and misuse.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process helps organizations meet regulatory
                        requirements by providing a clear audit trail of all API access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Risk:</span> By protecting APIs from misuse, organizations can
                        reduce the risk of data breaches and other cyber threats.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports API Security
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you secure and
                    manage access to your APIs. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Control:</span> We help you define and enforce granular
                        access controls for your APIs, ensuring that only authorized applications
                        and users can access them.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Threat Detection:</span> Our solutions monitor API traffic in
                        real-time to identify and alert on potential security threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing API management
                        and security systems, providing a unified view of your API security posture.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Technology Company Secures its APIs
                </h3>
                <p>
                    <span>Challenge:</span> A technology company with a large number of APIs
                    needed to secure them from unauthorized access and misuse.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an API security and
                    access control solution that enforced granular permissions for all API access,
                    and monitored traffic for potential threats.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced the risk of
                    data breaches, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-20',
        title: 'Seamless Customer Experience across Channels',
        description: 'Providing a seamless customer experience across channels is a key component of modern identity management. It ensures that customers can access your services from any device or platform, while maintaining a consistent and secure experience.',
        icon: <IoResize />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Seamless Customer Experience
                </h3>
                <p>
                    A seamless customer experience improves customer satisfaction, increases
                    engagement, and builds brand loyalty.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Satisfaction:</span> By providing a consistent and secure
                        experience across all channels, organizations can improve customer satisfaction.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Increased Engagement:</span> A seamless experience encourages customers
                        to engage with your brand more frequently and across multiple channels.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Brand Loyalty:</span> A positive customer experience can build strong
                        brand loyalty, leading to repeat business and positive word-of-mouth.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports a Seamless Experience
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you deliver a
                    seamless customer experience across all channels. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Identity Management:</span> We provide a centralized
                        platform to manage all customer identities, ensuring consistency across channels.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> We implement SSO to allow customers to log
                        in once to access all your services, regardless of the channel.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Our solutions provide adaptive authentication
                        that adjusts to the customer's device and location, providing a secure and seamless
                        experience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Provides Omnichannel Access
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution wanted to provide a seamless
                    experience for customers across its website, mobile app, and in-branch services.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a centralized identity management
                    solution that provided a single sign-on for all channels and used adaptive authentication
                    to secure access.
                </p>
                <p>
                    <span>Result:</span> The institution improved customer satisfaction, increased engagement,
                    and built stronger brand loyalty.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-21',
        title: 'Real-Time Identity Threat Detection for Customers',
        description: 'Real-Time Identity Threat Detection is a process of monitoring user behavior and identifying potential threats in real-time. It helps organizations protect their customers from account takeover attacks, fraud, and other cyber threats.',
        icon: <IoWarning />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Real-Time Identity Threat Detection
                </h3>
                <p>
                    Real-time threat detection helps organizations protect their customers,
                    reduce fraud, and improve their security posture.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By identifying threats in real-time,
                        organizations can prevent account takeovers and other cyberattacks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fraud:</span> The process helps organizations reduce fraud
                        by identifying and blocking suspicious activity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> Real-time monitoring provides a clear
                        audit trail of all user activity, simplifying compliance and reporting.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Real-Time Threat Detection
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you monitor user
                    behavior and identify potential threats in real-time. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Behavioral Analysis:</span> We analyze user behavior to identify
                        anomalies that may indicate a security threat.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Alerts:</span> Our solutions provide real-time alerts on
                        potential threats, allowing you to respond quickly.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing security systems,
                        providing a unified view of your security posture.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Protects Against Fraud
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution with millions of customers
                    needed to protect against account takeovers and fraudulent transactions.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a real-time identity threat
                    detection solution that monitored user behavior and alerted on suspicious activity.
                </p>
                <p>
                    <span>Result:</span> The institution reduced fraud by 50%, improved its security
                    posture, and built stronger trust with its customers.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-22',
        title: 'Progressive Profiling',
        description: 'Progressive Profiling is a method of gradually collecting user information over time, rather than asking for it all at once during registration. It improves the user experience, increases conversion rates, and helps organizations build a more complete view of their customers.',
        icon: <IoBarChart />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Progressive Profiling
                </h3>
                <p>
                    Progressive profiling helps organizations improve user experience, increase
                    conversion rates, and build a more complete view of their customers.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved User Experience:</span> By asking for minimal information upfront,
                        organizations can reduce friction and provide a better user experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Increased Conversion:</span> The simplified registration process can
                        increase user registration and conversion rates.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Personalized Services:</span> By collecting data over time, organizations
                        can build a more complete view of their customers and provide personalized
                        services and offers.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Progressive Profiling
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement
                    progressive profiling. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Dynamic Forms:</span> We provide dynamic forms that collect information
                        based on the user's behavior and journey.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Profile Management:</span> We provide a centralized platform
                        to manage all customer data, ensuring consistency and accuracy.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing marketing and
                        CRM systems, providing a unified view of customer data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Online Retailer Personalizes Customer Experience
                </h3>
                <p>
                    <span>Challenge:</span> An online retailer wanted to personalize the customer
                    experience but was struggling to collect all the necessary data during registration.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a progressive profiling
                    solution that collected minimal information during registration and then gradually
                    collected more data as the customer engaged with the website.
                </p>
                <p>
                    <span>Result:</span> The retailer increased user registration by 25%, provided a
                    more personalized shopping experience, and built a more complete view of its
                    customers.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-23',
        title: 'Customer Role and Entitlement Management',
        description: 'Customer Role and Entitlement Management is a process of defining, managing, and governing customer access to applications and data. It ensures that customers have the right access at the right time, while also enforcing security and compliance policies.',
        icon: <IoPeople />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Customer Role and Entitlement Management
                </h3>
                <p>
                    Customer Role and Entitlement Management helps organizations improve security,
                    reduce administrative overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By ensuring that entitlements are always
                        current and appropriate, organizations can reduce the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> Entitlement management provides a clear audit
                        trail of all access rights, simplifying compliance and reporting.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of entitlements,
                        organizations can reduce manual administrative tasks.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Customer Entitlement Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you define, manage,
                    and govern customer entitlements. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning:</span> We automate the provisioning of entitlements
                        based on customer roles and policies.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification:</span> Our solutions provide a platform for
                        regularly reviewing and certifying customer entitlements.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing applications and
                        systems, allowing for the enforcement of entitlement policies.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: E-commerce Company Manages Customer Tiers
                </h3>
                <p>
                    <span>Challenge:</span> An e-commerce company with a tiered membership model
                    was struggling to manage customer entitlements effectively, leading to errors
                    and compliance issues.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a customer entitlement management
                    solution that automated the provisioning of entitlements based on the customer's
                    membership tier, and provided a platform for managers to certify access rights.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced administrative
                    overhead, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-24',
        title: 'Cross-Organization Collaboration',
        description: 'Cross-Organization Collaboration is a process of enabling secure collaboration between different organizations. It ensures that partners, vendors, and suppliers can access the necessary systems and data, while maintaining security and compliance.',
        icon: <IoGitNetwork />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Cross-Organization Collaboration
                </h3>
                <p>
                    Cross-Organization Collaboration helps organizations improve efficiency,
                    reduce administrative overhead, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> By enabling secure collaboration, organizations
                        can streamline business processes and improve productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of external identities,
                        organizations can reduce manual administrative tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> The process helps organizations enforce strong
                        access controls, reducing the risk of unauthorized access and data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Cross-Organization Collaboration
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you enable secure
                    cross-organization collaboration. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Federated Identity Management:</span> We implement federated identity
                        management to allow partners to use their own credentials to access your systems.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for external users, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on external user access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Manufacturing Company Collaborates with Suppliers
                </h3>
                <p>
                    <span>Challenge:</span> A manufacturing company needed to provide secure access
                    to its suppliers and vendors to its supply chain management system.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a federated identity management
                    solution that allowed suppliers to use their own credentials to access the system,
                    while enforcing strict access controls.
                </p>
                <p>
                    <span>Result:</span> The company improved its supply chain efficiency, reduced
                    administrative overhead, and enhanced the security of its systems.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-25',
        title: 'Account Recovery and Identity Assurance',
        description: 'Account Recovery and Identity Assurance is a process of securely helping users recover their accounts while maintaining a high level of identity assurance. It prevents unauthorized account takeovers and fraud, building trust with your customers.',
        icon: <IoShieldHalf />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Account Recovery and Identity Assurance
                </h3>
                <p>
                    Secure account recovery helps organizations protect their customers, reduce
                    fraud, and build trust.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By implementing a secure account recovery
                        process, organizations can prevent unauthorized account takeovers.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fraud:</span> The process helps organizations reduce fraud by
                        ensuring that only the rightful owner can recover an account.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Trust:</span> A secure and transparent account recovery process
                        can build strong trust with customers.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Account Recovery
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement a
                    secure and user-friendly account recovery process. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Multi-Factor Verification:</span> We implement multi-factor verification
                        during the recovery process to ensure that only the rightful owner can recover
                        an account.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Self-Service Portals:</span> We provide self-service portals that allow
                        users to recover their accounts without needing to contact support.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        verify a user's identity and provide a seamless recovery experience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Social Media Company Secures Accounts
                </h3>
                <p>
                    <span>Challenge:</span> A social media company with millions of users faced
                    challenges in securing its account recovery process, leading to a high number
                    of account takeovers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a secure account recovery
                    solution that used multi-factor verification to ensure that only the rightful
                    owner could recover an account.
                </p>
                <p>
                    <span>Result:</span> The company reduced account takeovers by 80%, improved its
                    security posture, and built stronger trust with its customers.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-26',
        title: 'Partner Federation',
        description: 'Partner Federation is a process of federating identities across partner organizations. It allows partners to use their own credentials to access your systems, while maintaining security and compliance.',
        icon: <IoGitPullRequest />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Partner Federation
                </h3>
                <p>
                    Partner Federation helps organizations improve efficiency, reduce administrative
                    overhead, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> By enabling partners to use their own
                        credentials, organizations can streamline business processes and improve productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of partner identities,
                        organizations can reduce manual administrative tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> The process helps organizations enforce strong
                        access controls, reducing the risk of unauthorized access and data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Partner Federation
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you federate
                    identities with your partners. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Seamless Integration:</span> We integrate with your partners' identity
                        providers to provide a seamless login experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for partners, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on partner access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Technology Company Collaborates with Partners
                </h3>
                <p>
                    <span>Challenge:</span> A technology company needed to provide secure access to its
                    partners to its partner portal.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a partner federation solution
                    that allowed partners to use their own credentials to access the portal, while
                    enforcing strict access controls.
                </p>
                <p>
                    <span>Result:</span> The company improved its collaboration with partners, reduced
                    administrative overhead, and enhanced the security of its systems.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-27',
        title: 'Delegated Administration',
        description: 'Delegated Administration is a process of delegating administrative tasks to specific users or roles. It helps organizations improve efficiency, reduce administrative overhead, and enhance security by distributing administrative tasks.',
        icon: <IoBuild />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Delegated Administration
                </h3>
                <p>
                    Delegated Administration helps organizations improve efficiency, reduce
                    administrative overhead, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> By delegating administrative tasks,
                        organizations can improve efficiency and productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> The process helps organizations reduce the burden
                        on IT and support teams by distributing administrative tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By delegating administrative tasks, organizations
                        can reduce the risk of unauthorized access and data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Delegated Administration
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you delegate
                    administrative tasks. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Custom Roles:</span> We help you define custom roles for administrators
                        and delegate specific tasks to them.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for administrators, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on administrative tasks, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Delegates Administrative Tasks
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution with a large number of employees
                    was struggling to manage administrative tasks, leading to a high volume of
                    support requests.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a delegated administration
                    solution that allowed managers to manage their own team's access rights.
                </p>
                <p>
                    <span>Result:</span> The institution improved its efficiency, reduced administrative
                    overhead, and enhanced the security of its systems.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-28',
        title: 'Contextual and Risk-Based Access',
        description: 'Contextual and Risk-Based Access is a security mechanism that grants access to applications and data based on real-time context and risk factors. It ensures that access is granted only when conditions are met, protecting against unauthorized access and data breaches.',
        icon: <IoEye />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Contextual and Risk-Based Access
                </h3>
                <p>
                    Contextual and Risk-Based Access helps organizations improve security, reduce
                    fraud, and enhance the user experience.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By granting access based on real-time risk
                        analysis, organizations can prevent unauthorized access and data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Friction:</span> The process helps organizations reduce friction
                        for low-risk users by granting them seamless access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all access decisions, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Contextual and Risk-Based Access
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement
                    contextual and risk-based access. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Risk Analysis:</span> We analyze a variety of factors,
                        including user behavior, device, and location, to assess risk in real-time.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Our solutions provide adaptive authentication
                        that adjusts to the user's risk level, prompting for additional verification
                        when necessary.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        enforce access policies based on real-time context.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Prevents Fraud
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to prevent fraudulent
                    transactions by granting access based on real-time context and risk factors.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a contextual and risk-based
                    access solution that analyzed a variety of factors, including the user's location
                    and transaction history, to assess risk in real-time.
                </p>
                <p>
                    <span>Result:</span> The institution reduced fraudulent transactions by 60%, improved
                    its security posture, and enhanced the overall user experience.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-29',
        title: 'Partner and Consumer Identity Audit Compliance',
        description: 'Partner and Consumer Identity Audit Compliance is a process of ensuring that an organization\'s identity and access management policies and controls for partners and consumers align with regulatory requirements and industry standards. It involves providing evidence that access is being managed securely and appropriately.',
        icon: <IoDocumentAttach />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Partner and Consumer Identity Audit Compliance
                </h3>
                <p>
                    Audit compliance helps organizations demonstrate that they have robust security
                    controls in place, reducing the risk of fines and reputational damage.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fines:</span> By meeting regulatory requirements, organizations
                        can avoid costly fines and penalties.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Reputation:</span> Demonstrating a strong commitment to security
                        and compliance can improve an organization's reputation with customers and partners.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> The process of preparing for an audit can
                        help organizations identify and address security weaknesses.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Audit Compliance
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you prepare for and
                    pass audits with confidence. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Reporting:</span> We automate the generation of audit
                        reports, providing a clear and comprehensive view of all access rights and changes.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification:</span> Our solutions provide a platform for
                        regularly reviewing and certifying access rights, which is often a key
                        requirement of audits.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        collect all the necessary data for a comprehensive audit.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: E-commerce Company Meets PCI DSS Requirements
                </h3>
                <p>
                    <span>Challenge:</span> An e-commerce company needed to meet PCI DSS (Payment Card
                    Industry Data Security Standard) compliance requirements by demonstrating that they
                    had strong controls over customer data.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an audit compliance solution
                    that provided automated reporting and access certification, demonstrating to
                    auditors that access was being managed securely and appropriately.
                </p>
                <p>
                    <span>Result:</span> The company successfully passed its audit, avoided fines, and
                    improved its overall security posture.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-30',
        title: 'Supplier and Vendor Identity Management',
        description: 'Supplier and Vendor Identity Management is a process of managing the identities of suppliers and vendors. It ensures that suppliers and vendors can access the necessary systems and data, while maintaining security and compliance.',
        icon: <IoIdCardOutline />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Supplier and Vendor Identity Management
                </h3>
                <p>
                    Supplier and Vendor Identity Management helps organizations improve efficiency,
                    reduce administrative overhead, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> By managing supplier and vendor identities
                        effectively, organizations can streamline business processes and improve productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of supplier and
                        vendor identities, organizations can reduce manual administrative tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> The process helps organizations enforce strong
                        access controls, reducing the risk of unauthorized access and data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Supplier and Vendor Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you manage supplier
                    and vendor identities. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Management:</span> We provide a centralized platform to manage
                        all supplier and vendor identities, ensuring consistency and accuracy.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for suppliers and vendors, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on supplier and vendor access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Manufacturing Company Manages Suppliers
                </h3>
                <p>
                    <span>Challenge:</span> A manufacturing company with a large number of suppliers
                    needed to manage their identities effectively to ensure secure access to its
                    supply chain management system.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a supplier and vendor identity
                    management solution that provided a centralized platform to manage all identities,
                    and enforced strict access controls.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced administrative
                    overhead, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-31',
        title: 'Adaptive Authentication',
        description: 'Adaptive Authentication is a security mechanism that adjusts the authentication process based on real-time context and risk factors. It ensures that users are only prompted for additional verification when necessary, balancing security with user experience.',
        icon: <IoSpeedometer />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Adaptive Authentication
                </h3>
                <p>
                    Adaptive Authentication helps organizations improve security, reduce
                    friction, and enhance the user experience.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By adjusting the authentication process based on
                        real-time risk, organizations can prevent unauthorized access and data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Friction:</span> The process helps organizations reduce friction
                        for low-risk users by granting them seamless access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all access decisions, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Adaptive Authentication
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement
                    adaptive authentication. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Risk Analysis:</span> We analyze a variety of factors,
                        including user behavior, device, and location, to assess risk in real-time.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Multi-Factor Verification:</span> Our solutions provide adaptive multi-factor
                        verification that prompts for additional verification when necessary.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        enforce authentication policies based on real-time context.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Protects Against Fraud
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to protect against fraudulent
                    transactions by granting access based on real-time context and risk factors.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an adaptive authentication
                    solution that analyzed a variety of factors, including the user's location
                    and transaction history, to assess risk in real-time.
                </p>
                <p>
                    <span>Result:</span> The institution reduced fraudulent transactions by 60%, improved
                    its security posture, and enhanced the overall user experience.
                </p>
            </div>
        )
    },
    // Start of Privileged Access Management
    {
        id: 'usecase-doc-32',
        title: 'Administrator and High-Risk User Monitoring',
        description: 'Administrator and High-Risk User Monitoring is a process of monitoring privileged accounts for suspicious activity. It helps organizations protect their critical systems and data from unauthorized access, fraud, and other cyber threats.',
        icon: <IoEye />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Administrator and High-Risk User Monitoring
                </h3>
                <p>
                    Monitoring privileged accounts helps organizations improve security, reduce
                    fraud, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By monitoring privileged accounts, organizations
                        can prevent unauthorized access and data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fraud:</span> The process helps organizations reduce fraud by
                        identifying and blocking suspicious activity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all privileged access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports High-Risk User Monitoring
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you monitor privileged
                    accounts and identify potential threats in real-time. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Behavioral Analysis:</span> We analyze user behavior to identify
                        anomalies that may indicate a security threat.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Alerts:</span> Our solutions provide real-time alerts on
                        potential threats, allowing you to respond quickly.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        monitor all privileged access.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Protects Against Insider Threats
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to protect against insider
                    threats by monitoring privileged accounts for suspicious activity.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a privileged account monitoring
                    solution that analyzed user behavior and alerted on suspicious activity, preventing
                    an insider threat from escalating.
                </p>
                <p>
                    <span>Result:</span> The institution improved its security posture, reduced the risk of
                    fraud, and enhanced the overall protection of its critical systems.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-33',
        title: 'Just-In-Time (JIT) Privileged Access',
        description: 'Just-In-Time (JIT) Privileged Access is a security mechanism that grants temporary access to privileged resources on an as-needed basis. It helps organizations reduce the attack surface, improve security, and ensure compliance.',
        icon: <IoTime />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Just-In-Time (JIT) Privileged Access
                </h3>
                <p>
                    JIT Privileged Access helps organizations improve security, reduce administrative
                    overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Attack Surface:</span> By granting temporary access, organizations
                        can reduce the attack surface and prevent unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> JIT provides a clear audit trail of all
                        privileged access, simplifying compliance and auditing.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> The process helps organizations reduce the burden
                        on IT and support teams by automating the management of privileged access.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports JIT Privileged Access
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you implement
                    JIT Privileged Access. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning:</span> We automate the provisioning of privileged
                        access on an as-needed basis, reducing manual effort.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for privileged users, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on privileged access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Technology Company Secures its Systems
                </h3>
                <p>
                    <span>Challenge:</span> A technology company with a large number of developers
                    needed to grant them temporary access to production environments.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a JIT Privileged Access
                    solution that granted developers temporary access to the necessary systems,
                    and automatically revoked it after a specified time.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture, reduced the risk of
                    unauthorized access, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-34',
        title: 'Privileged Account Discovery and Lifecycle Management',
        description: 'Privileged Account Discovery and Lifecycle Management is a process of identifying and managing privileged accounts across your organization. It ensures that privileged accounts are managed securely and in compliance with regulatory requirements.',
        icon: <IoSearch />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Privileged Account Discovery and Lifecycle Management
                </h3>
                <p>
                    Privileged Account Discovery and Lifecycle Management helps organizations
                    improve security, reduce administrative overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By identifying and managing all privileged
                        accounts, organizations can reduce the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of privileged
                        accounts, organizations can reduce manual administrative tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all privileged accounts, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Privileged Account Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you discover and
                    manage privileged accounts. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Account Discovery:</span> We help you identify all privileged accounts
                        across your organization, including service accounts and other non-human identities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Lifecycle Management:</span> Our solutions automate the creation,
                        modification, and deactivation of privileged accounts, reducing manual effort.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> We provide comprehensive reporting on
                        privileged accounts, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Manages Privileged Accounts
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to identify and manage
                    all privileged accounts across its organization to comply with regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a privileged account discovery
                    and lifecycle management solution that identified all privileged accounts and
                    automated their management.
                </p>
                <p>
                    <span>Result:</span> The institution improved its security posture, reduced
                    administrative overhead, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-35',
        title: 'Session Monitoring and Audit',
        description: 'Session Monitoring and Audit is a process of monitoring and recording privileged sessions to ensure compliance and prevent unauthorized activity. It provides a clear audit trail of all privileged access, simplifying compliance and auditing.',
        icon: <IoVideocam />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Session Monitoring and Audit
                </h3>
                <p>
                    Session Monitoring and Audit helps organizations improve security, reduce
                    fraud, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By monitoring privileged sessions, organizations
                        can prevent unauthorized activity and data breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Fraud:</span> The process helps organizations reduce fraud by
                        identifying and blocking suspicious activity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all privileged access, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Session Monitoring
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you monitor and
                    record privileged sessions. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Monitoring:</span> We monitor privileged sessions in real-time
                        to identify and alert on potential security threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Session Recording:</span> Our solutions record privileged sessions,
                        providing a clear audit trail of all privileged access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        monitor all privileged access.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Audits Privileged Access
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to monitor and audit
                    all privileged access to its critical systems to comply with regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a session monitoring and
                    audit solution that monitored and recorded all privileged sessions, providing a
                    clear audit trail of all privileged access.
                </p>
                <p>
                    <span>Result:</span> The institution improved its security posture, reduced the risk of
                    fraud, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-36',
        title: 'Privileged Task Automation',
        description: 'Privileged Task Automation is a process of automating tasks performed by privileged users. It helps organizations improve efficiency, reduce administrative overhead, and enhance security by reducing the need for manual, privileged access.',
        icon: <IoSync />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Privileged Task Automation
                </h3>
                <p>
                    Privileged Task Automation helps organizations improve efficiency, reduce
                    administrative overhead, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> By automating privileged tasks, organizations
                        can improve efficiency and productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> The process helps organizations reduce the burden
                        on IT and support teams by automating routine tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By automating privileged tasks, organizations
                        can reduce the need for manual, privileged access, reducing security risks.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Privileged Task Automation
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you automate
                    privileged tasks. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Workflow Automation:</span> We automate the execution of privileged
                        tasks, ensuring they are performed consistently and securely.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Controls:</span> We help you define and enforce granular access
                        controls for automated tasks, ensuring they only have access to what they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Auditing and Reporting:</span> Our solutions provide comprehensive reporting
                        on automated tasks, simplifying compliance and auditing.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Technology Company Automates Privileged Tasks
                </h3>
                <p>
                    <span>Challenge:</span> A technology company with a large number of developers
                    needed to automate routine privileged tasks, such as provisioning new servers.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a privileged task automation
                    solution that automated the provisioning of new servers, while enforcing strict
                    access controls.
                </p>
                <p>
                    <span>Result:</span> The company improved its efficiency, reduced administrative
                    overhead, and enhanced the security of its systems.
                </p>
            </div>
        )
    },
    {
        id: 'usecase-doc-37',
        title: 'Privileged Access Governance',
        description: 'Privileged Access Governance is a process of defining, managing, and governing privileged access. It ensures that privileged access is managed securely and in compliance with regulatory requirements and industry standards.',
        icon: <IoSchool />,
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoRibbon />
                    Benefits of Privileged Access Governance
                </h3>
                <p>
                    Privileged Access Governance helps organizations improve security, reduce
                    administrative overhead, and ensure compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By defining clear policies and controls,
                        organizations can reduce the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Compliance:</span> The process provides a clear audit trail of
                        all privileged access, simplifying compliance and auditing.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Overhead:</span> By automating the management of privileged access,
                        organizations can reduce manual administrative tasks.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoBuild />
                    How RAAH Technologies Supports Privileged Access Governance
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides solutions that help you define, manage,
                    and govern privileged access. Our solutions offer:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Definition:</span> We help you define clear and concise policies
                        for privileged access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification:</span> Our solutions provide a platform for
                        regularly reviewing and certifying privileged access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration:</span> We integrate with your existing systems to
                        enforce privileged access policies.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    <IoNewspaper />
                    Use Case: Financial Institution Governs Privileged Access
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to define and govern all
                    privileged access to its critical systems to comply with regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a privileged access governance
                    solution that provided a platform for defining clear policies and regularly
                    reviewing and certifying privileged access.
                </p>
                <p>
                    <span>Result:</span> The institution improved its security posture, reduced
                    administrative overhead, and simplified its compliance efforts.
                </p>
            </div>
        )
    },
];

const SolutionsUseCaseDetailedView = () => {
    const [selectedUseCaseDocument, setSelectedUseCaseDocument] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        const path = location.pathname;
        const matched = path.match(/^\/usecases\/([\w-]+)$/);
        if (matched) {
            setSelectedUseCaseDocument(matched[1]);
        } else if (path === '/usecases') {
            setSelectedUseCaseDocument(null);
        }
    }, [location.pathname]);

    const handleClose = () => {
        navigate('/solutions#usecases');
    };

    const documentData = useCaseDocuments.find(
        (document) => document.id === selectedUseCaseDocument
    );

    return (
        <div className='SolutionsUseCaseDetailedViewContainer'>
            <div className='SolutionsUseCaseDetailedViewIntro'>
                <div className='SolutionsUseCaseDetailedViewIntroTitleBar'>
                    <div className='SolutionsIndividualIPageIntroTitleAccent'>
                        <h2 className='SolutionsUseCaseDetailedViewIntroTitle'>
                            {documentData?.title}
                            {documentData?.icon}
                        </h2>
                    </div>
                    <button className='SolutionsUseCaseDetailedViewCloseButton' onClick={handleClose} aria-label="Return to Solutions">
                        <svg
                            className="SolutionsUseCaseDetailedViewCloseArrow"
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
                <p className='SolutionsUseCaseDetailedViewIntroDescription'>
                    {documentData?.description}
                </p>
            </div>
            {documentData?.content}
        </div>
    );
};

export default SolutionsUseCaseDetailedView;