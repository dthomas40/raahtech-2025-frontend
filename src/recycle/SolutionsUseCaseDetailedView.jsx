import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SolutionsUseCaseDetailedView.css';

const useCaseDocuments = [
    {
        id: 'use-case-doc-1',
        title: 'Single Sign-On (SSO) for Employees',
        description: 'Single Sign-On (SSO) enables employees to use a single set of credentials to access multiple applications, improving user experience and reducing IT overhead.It minimizes the need for remembering multiple passwords, leading to fewer password- related issues and increasing productivity.',
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
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
        id: 'use-case-doc-2',
        title: 'Multi-Factor Authentication (MFA) for Enhanced Security',
        description: 'Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide two or more verification factors to gain access to an application, account, or other resource. By combining multiple authentication methods, MFA significantly improves security, making it much harder for attackers to gain unauthorized access.',
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
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
                            like biometrics, security tokens, or one-time passwords, MFA
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
        id: 'use-case-doc-3',
        title: 'Role-Based Access Control (RBAC)',
        description: 'Role-Based Access Control (RBAC) defines roles and associated permissions, enabling organizations to manage access more efficiently. With RBAC, users are granted access based on their job roles, helping enforce consistent security and compliance policies.',
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
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
        id: 'use-case-doc-4',
        title: 'Device and Endpoint Identity Management',
        description: 'Device and Endpoint Identity Management is crucial for securing identities across the numerous devices used in modern workplaces. It involves managing the identities of devices and ensuring that only authorized devices are allowed to access sensitive systems and data.',
        content: (
            <>
                <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                    <h3 className="SolutionsUseCaseDetailedViewSubheader">
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
                        <span>Result:</span> The organization significantly improved its
                        security posture, reduced unauthorized access attempts, and provided a
                        secure remote work environment for employees.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 'use-case-doc-5',
        title: 'Passwordless Authentication for Workforce',
        description: 'Passwordless Authentication is a modern security solution that eliminates the need for traditional passwords, offering a more secure and user-friendly authentication experience. By using biometrics, security tokens, or other secure methods, Passwordless Authentication reduces the risk of credential theft and phishing attacks.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Passwordless Authentication
                </h3>
                <p>
                    Implementing Passwordless Authentication helps organizations enhance
                    security while improving the user experience by removing the need for
                    complex passwords.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> By eliminating passwords, the risk
                        of phishing, credential stuffing, and brute force attacks is
                        significantly reduced.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Better User Experience:</span> Users no longer need to
                        remember or manage complex passwords, resulting in a seamless login
                        experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced IT Overhead:</span> Password-related support requests,
                        such as password resets, are minimized, reducing the burden on IT
                        support teams.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Passwordless Authentication
                </h3>
                <p>
                    <span>RAAH Technologies:</span> helps organizations implement
                    Passwordless Authentication solutions that fit their specific needs. Our
                    solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Biometric Authentication:</span> We enable biometric methods
                        such as fingerprint and facial recognition to provide secure,
                        password-free access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Hardware Tokens and Mobile Devices:</span> Implement hardware
                        security keys and mobile push notifications as secure alternatives to
                        passwords.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Use context-aware, risk-based
                        analysis to prompt for additional verification only when necessary,
                        balancing security and convenience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Enhancing Security for Remote Employees
                </h3>
                <p>
                    <span>Challenge:</span> A tech company needed to enhance security for
                    its remote employees while reducing the friction caused by frequent
                    password resets and complex password policies.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Passwordless
                    Authentication solution using biometric verification and hardware tokens,
                    providing secure and seamless access to corporate resources.
                </p>
                <p>
                    <span>Result:</span> The company experienced a significant reduction
                    in password-related IT support tickets, improved employee satisfaction,
                    and enhanced overall security for remote access.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-6',
        title: 'Zero Trust Security and Adaptive Access Controls',
        description: "Zero Trust Security is a framework for enhancing security by assuming that no user or device can be trusted by default, regardless of whether they are inside or outside the organization's network. It requires strict verification for every user or device attempting to access resources.",
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Zero Trust Security
                </h3>
                <p>
                    Implementing Zero Trust Security helps organizations enhance their
                    security posture by continuously verifying every access request and
                    reducing the attack surface.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Assumes that every request is
                        potentially malicious, ensuring that only authorized users and devices
                        can access resources.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Minimized Attack Surface:</span> By segmenting the network and
                        applying least privilege principles, Zero Trust significantly reduces
                        the number of entry points for attackers.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Continuous Verification:</span> Every access request is
                        authenticated and authorized, ensuring ongoing protection against
                        compromised credentials or devices.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Zero Trust Implementation
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides Zero Trust Security solutions
                    that align with modern security needs. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Network Segmentation:</span> We help implement
                        micro-segmentation to isolate sensitive resources and minimize lateral
                        movement by attackers.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Enforce adaptive,
                        context-aware authentication to verify user identities based on risk and
                        behavior.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Least Privilege Access:</span> Implement least privilege
                        principles, ensuring users have only the access necessary for their
                        roles.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Protecting Critical Financial Data
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to protect
                    critical customer financial data while minimizing the risk of data
                    breaches and internal threats.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed a Zero Trust
                    Security framework, using network segmentation, adaptive authentication,
                    and continuous verification to secure all access points.
                </p>
                <p>
                    <span>Result:</span> The institution achieved enhanced data
                    protection, reduced the risk of insider threats, and ensured that only
                    authorized personnel had access to sensitive information.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-7',
        title: 'Employee Onboarding and Offboarding',
        description: 'Employee Onboarding and Offboarding are critical processes for managing employee access to corporate systems. Effective onboarding ensures that new employees are quickly granted the appropriate access they need to be productive, while efficient offboarding revokes access promptly when employees leave, reducing security risks.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Automated Onboarding and Offboarding
                </h3>
                <p>
                    Automating the onboarding and offboarding processes helps organizations
                    streamline operations, reduce manual errors, and enhance security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> Automating the onboarding process
                        ensures that new hires receive timely access to the tools and systems
                        they need, reducing delays and improving productivity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Automated offboarding promptly
                        revokes access to corporate resources, minimizing the risk of
                        unauthorized access after an employee departs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Consistency:</span> Automation ensures that access
                        provisioning and deprovisioning are consistently applied according to
                        company policies, reducing the risk of human error.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Onboarding and Offboarding
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive solutions to
                    streamline employee onboarding and offboarding processes. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Workflows:</span> We implement automated workflows
                        to provision and deprovision access across multiple systems, reducing
                        manual intervention.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration with HR Systems:</span> Our solutions integrate
                        seamlessly with HR systems to trigger onboarding and offboarding events
                        based on employee status, ensuring accurate and timely access
                        management.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Reviews:</span> Conduct periodic access reviews to
                        ensure that employees have the appropriate level of access based on
                        their current roles.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Secure Offboarding for Financial Services
                </h3>
                <p>
                    <span>Challenge:</span> A financial services company needed to ensure
                    that former employees no longer had access to sensitive systems and data
                    immediately after leaving the organization.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed an automated
                    offboarding solution that integrated with the company's HR system,
                    ensuring that access was revoked as soon as an employee's departure was
                    recorded.
                </p>
                <p>
                    <span>Result:</span> The company significantly reduced the risk of
                    unauthorized access, improved compliance with regulatory requirements, and
                    ensured a secure offboarding process.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-8',
        title: 'Access Certification and Attestation',
        description: 'Access Certification and Attestation are critical components of identity governance that involve periodically reviewing user access to ensure it is appropriate and aligns with organizational policies. This process helps organizations verify that users have the correct level of access based on their roles and responsibilities.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Access Certification and Attestation
                </h3>
                <p>
                    Implementing access certification and attestation processes helps
                    organizations maintain compliance, enhance security, and reduce the risk
                    of excessive access.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Access certification helps meet regulatory
                        requirements by ensuring that users have the appropriate access based on
                        their job functions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Regularly reviewing access rights
                        reduces the risk of excessive permissions, minimizing potential attack
                        vectors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability:</span> Attestation ensures that managers and
                        application owners are accountable for the access provided to their team
                        members.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Access Certification
                </h3>
                <p>
                    <span>RAAH Technologies:</span> offers comprehensive access
                    certification solutions to help organizations maintain control over user
                    access. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Campaigns:</span> We implement automated access
                        review campaigns to streamline the certification process, ensuring
                        timely completion and reducing manual effort.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Review Policies:</span> Define and customize
                        review policies to align with organizational requirements and compliance
                        standards.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Manager and Owner Attestation:</span> Provide tools for
                        managers and application owners to easily attest to user access,
                        ensuring accountability.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Ensuring Compliance in the Healthcare Sector
                </h3>
                <p>
                    <span>Challenge:</span> A healthcare organization needed to ensure
                    compliance with regulations such as HIPAA by periodically reviewing and
                    certifying user access to sensitive patient data.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed an automated access
                    certification solution that enabled managers to easily review and certify
                    access, ensuring that only authorized personnel had access to patient
                    information.
                </p>
                <p>
                    <span>Result:</span> The organization achieved improved compliance,
                    reduced the risk of unauthorized access, and maintained a secure
                    environment for patient data.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-9',
        title: 'Access Request and Workflow Automation',
        description: 'Access Request and Workflow Automation is a critical part of identity management, allowing users to request access to applications or systems in an organized way. Automated workflows streamline the process of granting, modifying, or revoking access based on business rules, ensuring efficiency and compliance.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Access Request and Workflow Automation
                </h3>
                <p>
                    Implementing automated workflows for access requests helps organizations
                    maintain control over user access while minimizing administrative
                    overhead.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> Automating the access request
                        process reduces manual tasks, allowing IT teams to focus on more
                        strategic activities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Automated workflows ensure that
                        access is granted only after appropriate approvals, reducing the risk of
                        unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Workflow automation provides an audit trail
                        of access requests and approvals, helping organizations meet regulatory
                        requirements.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Access Request Automation
                </h3>
                <p>
                    <span>RAAH Technologies:</span> helps organizations implement robust
                    access request and workflow automation solutions. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Workflows:</span> We design customizable
                        workflows that align with your organization's policies and business
                        rules, ensuring that all access requests are properly managed.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Approval Management:</span> Automated approval chains ensure
                        that the right stakeholders are involved in the decision-making process
                        for granting access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Self-Service Portal:</span> Provide employees with a
                        self-service portal to request access, reducing the dependency on IT
                        teams and improving productivity.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Streamlining Access Requests in Manufacturing
                </h3>
                <p>
                    <span>Challenge:</span> A manufacturing company needed to streamline
                    access requests for various applications to ensure that employees had
                    timely access to necessary resources.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies deployed an access request
                    and workflow automation solution, allowing employees to request access
                    through a self-service portal while ensuring that all approvals were
                    handled efficiently.
                </p>
                <p>
                    <span>Result:</span> The company experienced a reduction in the time
                    required to grant access, improved operational efficiency, and ensured
                    that all access changes were properly documented for compliance purposes.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-10',
        title: 'Identity Lifecycle Management',
        description: 'Identity Lifecycle Management (ILM) involves managing the entire lifecycle of user identities, from creation and modification to deactivation and deletion. ILM ensures that users have the correct access at every stage of their journey within an organization.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Identity Lifecycle Management
                </h3>
                <p>
                    Implementing Identity Lifecycle Management helps organizations streamline
                    user access, reduce security risks, and maintain compliance throughout the
                    user identity lifecycle.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Ensures that users have appropriate
                        access at every stage, reducing the risk of excessive permissions or
                        unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Operational Efficiency:</span> Automates user provisioning and
                        deprovisioning, reducing the workload on IT teams and minimizing manual
                        errors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Provides a complete audit trail of identity
                        changes, helping organizations meet regulatory requirements.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Identity Lifecycle Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> offers comprehensive ILM solutions to
                    manage user identities efficiently throughout their lifecycle. Our
                    solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Provisioning and Deprovisioning:</span> Automate
                        user onboarding and offboarding to ensure that access is granted and
                        revoked promptly based on user status.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role-Based Access:</span> Assign roles to users automatically
                        based on their job functions, ensuring appropriate access from day one.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Lifecycle Event Management:</span> Manage changes to user
                        identities during promotions, transfers, or other lifecycle events to
                        ensure that access remains up-to-date.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Managing Identity Lifecycle in Healthcare
                </h3>
                <p>
                    <span>Challenge:</span> A healthcare provider needed to manage user
                    identities efficiently to ensure that employees had appropriate access
                    while maintaining compliance with healthcare regulations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an automated
                    Identity Lifecycle Management solution that streamlined user provisioning,
                    ensured timely deprovisioning upon employee departure, and provided a
                    complete audit trail.
                </p>
                <p>
                    <span>Result:</span> The healthcare provider improved operational
                    efficiency, reduced the risk of unauthorized access, and ensured
                    compliance with industry regulations.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-11',
        title: 'Role Mining and Optimization',
        description: 'Role Mining and Optimization is the process of analyzing user access patterns to identify common roles and optimize access management. By understanding how users interact with systems, organizations can create well-defined roles that provide the appropriate level of access, reducing the risk of over-privileged accounts.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Role Mining and Optimization
                </h3>
                <p>
                    Implementing Role Mining and Optimization helps organizations improve
                    security, simplify access management, and reduce the complexity of role
                    assignments.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Identifies and removes excessive
                        permissions, ensuring users have only the access they need to perform
                        their jobs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Operational Efficiency:</span> Streamlines role assignments by
                        grouping similar permissions together, making it easier to manage user
                        access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Helps organizations maintain compliance by
                        ensuring that access is granted based on well-defined roles that align
                        with business policies.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Role Mining
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive Role Mining and
                    Optimization solutions to help organizations effectively manage user
                    access. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Data-Driven Analysis:</span> Use data-driven analysis to
                        identify common access patterns and define roles that align with
                        organizational needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role Optimization:</span> Refine existing roles to remove
                        unnecessary permissions, ensuring that users have only what they need to
                        perform their duties.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Visual Reports:</span> Provide visual reports and dashboards
                        to help administrators understand role assignments and optimize access
                        management.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Optimizing Access Roles in a Retail Company
                </h3>
                <p>
                    <span>Challenge:</span> A retail company needed to optimize access
                    roles to ensure that employees had the appropriate level of access while
                    reducing the risk of over-privileged accounts.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies performed a role mining
                    analysis to identify common access patterns among employees and created
                    optimized roles that aligned with job functions.
                </p>
                <p>
                    <span>Result:</span> The company improved its security posture by
                    reducing excessive permissions, simplified access management processes,
                    and ensured compliance with internal policies.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-12',
        title: 'Separation of Duties (SoD) Management',
        description: 'Separation of Duties (SoD) is a key internal control that helps prevent fraud and errors by ensuring that no single individual has control over all aspects of any critical business process. SoD is crucial for maintaining checks and balances within an organization.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Separation of Duties
                </h3>
                <p>
                    Implementing Separation of Duties helps organizations mitigate risks,
                    enhance internal controls, and maintain compliance with industry
                    regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk Mitigation:</span> Ensures that critical tasks are
                        divided among multiple individuals, reducing the likelihood of fraud or
                        unauthorized activities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Prevents any single user from having
                        excessive control over business processes, thereby reducing the risk of
                        internal threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Helps organizations comply with regulatory
                        standards that require effective internal controls and segregation of
                        duties.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Separation of Duties
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive Separation of
                    Duties solutions to help organizations manage and enforce SoD policies
                    effectively. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Definition:</span> Assist in defining SoD policies that
                        align with business requirements and regulatory standards.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated SoD Checks:</span> Implement automated checks to
                        detect and prevent conflicts of interest in user roles and permissions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Monitoring:</span> Monitor user activities in
                        real-time to ensure compliance with SoD policies and quickly address any
                        violations.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Ensuring Compliance in Financial Operations
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to ensure that
                    critical financial processes were not controlled by a single individual to
                    mitigate the risk of fraud and comply with regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Separation of
                    Duties solution that defined clear SoD policies, automated SoD checks, and
                    provided real-time monitoring of user activities to enforce compliance.
                </p>
                <p>
                    <span>Result:</span> The institution reduced the risk of fraud,
                    ensured compliance with industry regulations, and maintained a secure
                    environment for financial operations.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-13',
        title: 'Granular Access Controls',
        description: 'Granular Access Controls allow organizations to define fine-grained permissions for users, ensuring that they have access only to the specific resources required for their roles. By setting precise access rules, organizations can enforce the principle of least privilege, reducing the risk of unauthorized access.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Granular Access Controls
                </h3>
                <p>
                    Implementing Granular Access Controls helps organizations enhance
                    security, maintain compliance, and reduce the risk of data breaches by
                    tightly controlling user access.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> By defining precise permissions,
                        organizations can ensure that users have access only to what they need,
                        minimizing potential attack vectors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Granular controls help meet regulatory
                        requirements by ensuring that sensitive data is only accessible to
                        authorized users.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk Reduction:</span> Enforcing the principle of least
                        privilege reduces the risk of internal threats and accidental data
                        exposure.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Granular Access Controls
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive Granular Access
                    Control solutions that help organizations define and manage detailed
                    permissions. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Custom Access Policies:</span> Define custom access policies
                        based on user roles, departments, and specific business needs to ensure
                        proper access control.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Enforcement:</span> Enforce access policies in
                        real-time to prevent unauthorized access and respond quickly to changes
                        in user roles or permissions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Detailed Audit Trails:</span> Track and monitor all access
                        activities to provide a complete audit trail for compliance and security
                        purposes.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Securing Access to Sensitive Customer Data
                </h3>
                <p>
                    <span>Challenge:</span> A customer service organization needed to
                    ensure that only authorized personnel could access sensitive customer
                    data, while maintaining operational efficiency.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented Granular Access
                    Controls that defined specific permissions for different roles within the
                    organization, ensuring that only those with a legitimate need could access
                    sensitive data.
                </p>
                <p>
                    <span>Result:</span> The organization achieved enhanced data security,
                    minimized the risk of unauthorized access, and maintained compliance with
                    data protection regulations.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-14',
        title: 'User Entitlement Management',
        description: "User Entitlement Management involves defining, granting, and managing the access rights and permissions that users have within an organization's systems. Proper entitlement management ensures that users have the appropriate level of access based on their roles and responsibilities, helping to enforce the principle of least privilege.",
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of User Entitlement Management
                </h3>
                <p>
                    Implementing User Entitlement Management helps organizations improve
                    security, ensure compliance, and reduce the risk of unauthorized access.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Control:</span> Provides a structured approach to
                        granting and managing user permissions, ensuring users have only the
                        access they need.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Helps meet regulatory requirements by
                        ensuring that user access is managed in line with business policies and
                        compliance standards.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Risk:</span> Minimizes the risk of excessive
                        permissions and potential security breaches by enforcing the principle
                        of least privilege.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports User Entitlement Management
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive User Entitlement
                    Management solutions to help organizations effectively manage user access
                    rights. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Entitlement Assignment:</span> Automate the
                        assignment of entitlements based on user roles, reducing manual errors
                        and ensuring consistency.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Access Reviews:</span> Conduct real-time reviews of
                        user entitlements to ensure that access remains appropriate as roles and
                        responsibilities change.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Reporting:</span> Track and report on user
                        entitlements to provide visibility and support compliance efforts.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Managing Entitlements in a Financial Institution
                </h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to ensure that
                    user entitlements were properly managed to prevent excessive permissions
                    and maintain compliance with financial regulations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an automated User
                    Entitlement Management solution that assigned entitlements based on user
                    roles and conducted regular access reviews.
                </p>
                <p>
                    <span>Result:</span> The institution reduced the risk of unauthorized
                    access, ensured compliance with regulatory requirements, and improved
                    overall access management efficiency.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-15',
        title: 'Audit and Compliance for Workforce',
        description: 'Audit and Compliance are essential for ensuring that organizational policies and regulatory requirements are being followed across all workforce-related identity and access management activities. Regular audits help identify potential gaps in security and ensure that user access aligns with business needs and compliance standards.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Benefits of Audit and Compliance
                </h3>
                <p>
                    Implementing comprehensive audit and compliance processes helps
                    organizations reduce risks, ensure adherence to regulations, and maintain
                    visibility into workforce access activities.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensure that user access and
                        identity management practices align with regulatory standards such as
                        GDPR, HIPAA, and SOX.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Regular audits help identify and
                        address security gaps, ensuring that workforce access is appropriately
                        managed.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability and Transparency:</span> Maintain detailed
                        records of access and identity changes, providing visibility and
                        accountability for all actions.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    How RAAH Technologies Supports Audit and Compliance
                </h3>
                <p>
                    <span>RAAH Technologies:</span> provides comprehensive audit and
                    compliance solutions tailored to workforce identity management. Our
                    solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Audit Reports:</span> Generate automated reports to
                        track workforce access activities, providing insights into potential
                        compliance issues.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance Monitoring:</span> Monitor user access in real-time
                        to ensure that compliance requirements in accordance with SOX, HIPAA,
                        and more are met with regularity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Certification Campaigns:</span> Conduct periodic access
                        reviews and certifications to validate that workforce members have
                        appropriate access rights.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">
                    Use Case: Ensuring Compliance for a Healthcare Provider
                </h3>
                <p>
                    <span>Challenge:</span> A healthcare provider needed to ensure that
                    workforce access to sensitive patient data complied with HIPAA regulations
                    while maintaining operational efficiency.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an audit and
                    compliance solution that included automated audit reporting, real-time
                    monitoring, and periodic access certification campaigns.
                </p>
                <p>
                    <span>Result:</span> The healthcare provider achieved compliance with
                    HIPAA, improved visibility into workforce access, and maintained a secure
                    environment for patient data.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-16',
        title: 'User Registration and Self-Service Portals (B2C and B2B CIAM)',
        description: 'User Registration and Self-Service Portals are essential components of Customer Identity and Access Management (CIAM) for B2C and B2B use cases. They allow customers and business partners to easily register, manage their own profiles, and access services, creating a seamless user experience while maintaining robust security and compliance.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of User Registration and Self-Service Portals</h3>
                <p>
                    Implementing self-service capabilities for user registration helps
                    organizations improve customer experience, reduce operational costs, and
                    ensure compliance with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced User Experience:</span> Allowing users to register
                        and manage their own accounts provides a smooth, user-friendly
                        experience that meets modern customer expectations.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Operational Efficiency:</span> Self-service portals reduce the
                        burden on customer support by allowing users to reset passwords, update
                        profile information, and manage consent on their own.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that user data is collected and
                        managed in compliance with regulations like GDPR and CCPA, including
                        providing users with control over their data and consent preferences.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports User Registration and Self-Service</h3>
                <p>
                    <span>RAAH Technologies</span> provides comprehensive CIAM solutions
                    for user registration and self-service, helping organizations meet their
                    B2C and B2B requirements. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Registration Forms:</span> Design and implement
                        customizable registration forms that capture the necessary user
                        information while providing a seamless onboarding experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Self-Service Account Management:</span> Enable users to update
                        their profiles, manage their credentials, and adjust consent preferences
                        through a secure, easy-to-use self-service portal.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Secure Data Handling:</span> Ensure that user data is
                        encrypted and managed in compliance with regulations such as GDPR and
                        CCPA, providing transparency and control to users.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Streamlining Customer Registration for an E-Commerce Platform</h3>
                <p>
                    <span>Challenge:</span> An e-commerce company needed to streamline the
                    registration process for new customers while ensuring compliance with GDPR
                    and providing a secure, user-friendly experience.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a CIAM solution
                    that included customizable registration forms, a self-service portal for
                    account management, and secure data handling practices to ensure
                    compliance with data protection regulations.
                </p>
                <p>
                    <span>Result:</span> The e-commerce platform improved its customer
                    onboarding process, increased user satisfaction, and ensured compliance
                    with GDPR, leading to enhanced trust and a better overall user experience.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-17',
        title: 'Social and Federated Login for Customers (B2C and B2B CIAM)',
        description: 'Social and Federated Login are key features of Customer Identity and Access Management (CIAM) for B2C and B2B use cases. These login methods allow customers and partners to use existing social media or federated identities to access services, providing a seamless and convenient authentication experience while maintaining security and compliance.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Social and Federated Login</h3>
                <p>
                    Implementing Social and Federated Login helps organizations improve user
                    experience, reduce friction during onboarding, and enhance security by
                    leveraging trusted identity providers.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved User Experience:</span> Allowing users to sign in
                        with existing social or corporate identities reduces the need for
                        creating and remembering new credentials, providing a more seamless
                        onboarding experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Onboarding Friction:</span> Social and Federated Login
                        simplify the registration process, making it easier for users to start
                        using services without complex sign-up forms.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Leverage trusted identity providers
                        such as Google, Facebook, or corporate identity systems, which provide
                        additional layers of security and validation.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that user data is handled in
                        compliance with regulations like GDPR and CCPA, while providing users
                        with transparency and control over their consent.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Social Login</h3>
                <p>
                    <span>RAAH Technologies</span> provides comprehensive CIAM solutions
                    that support Social and Federated Login for both B2C and B2B use cases.
                    Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration with Leading Identity Providers:</span> Enable
                        login via popular social platforms like Google, Facebook, LinkedIn, and
                        federated identity providers such as SAML or OIDC to streamline
                        authentication.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Consent Management:</span> Allow users to manage
                        consent preferences and provide transparency into how their data is
                        used, ensuring compliance with GDPR and CCPA.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Secure Data Handling:</span> Ensure that user data is securely
                        managed and encrypted, while complying with relevant data protection
                        regulations.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Enabling Seamless Login for a B2B SaaS Platform</h3>
                <p>
                    <span>Challenge:</span> A B2B SaaS company needed to streamline the
                    authentication process for their clients by enabling federated login
                    options, reducing the friction for business users accessing their
                    services.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Social and
                    Federated Login solution that integrated with leading identity providers,
                    allowing users to authenticate using their existing corporate credentials
                    or social media accounts.
                </p>
                <p>
                    <span>Result:</span> The SaaS platform improved user onboarding speed,
                    reduced password fatigue, and enhanced user satisfaction, while
                    maintaining compliance with data protection regulations.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-18',
        title: 'Customer Profile and Consent Management (B2C and B2B CIAM)',
        description: 'Customer Profile and Consent Management are integral components of Customer Identity and Access Management (CIAM) for B2C and B2B use cases. They allow organizations to collect, manage, and secure customer data while providing transparency and giving users control over how their information is used.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Customer Profile and Consent Management</h3>
                <p>
                    Implementing customer profile and consent management helps organizations
                    build trust, maintain compliance with data protection regulations, and
                    improve customer engagement by providing personalized experiences.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Data Transparency:</span> Provide customers with visibility
                        into the data collected about them and how it is used, fostering trust
                        and transparency.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Personalization:</span> Utilize customer profile data
                        to create personalized experiences, improving customer satisfaction and
                        engagement.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that customer data is handled in
                        compliance with regulations like GDPR and CCPA, including managing
                        consent and providing customers with control over their data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Customer Profile and Consent Management</h3>
                <p>
                    <span>RAAH Technologies</span> offers comprehensive CIAM solutions
                    that support customer profile and consent management for both B2C and B2B
                    use cases. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Customer Data Management:</span> Collect and
                        manage customer data in a secure, centralized location, providing
                        transparency and compliance with data protection standards.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Consent Management:</span> Allow customers to
                        manage their consent preferences easily, ensuring that their data is
                        only used for approved purposes.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Secure Data Handling:</span> Ensure that all customer data is
                        encrypted and managed in compliance with relevant data protection
                        regulations, such as GDPR and CCPA.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Managing Consent for a Global Retail Platform</h3>
                <p>
                    <span>Challenge:</span> A global retail company needed to manage
                    customer profiles and consent across multiple regions while ensuring
                    compliance with GDPR and other data protection regulations.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a customer
                    profile and consent management solution that centralized customer data,
                    provided customizable consent management options, and ensured secure data
                    handling in compliance with relevant regulations.
                </p>
                <p>
                    <span>Result:</span> The retail platform improved data transparency,
                    enhanced customer trust, and ensured compliance with GDPR and CCPA,
                    resulting in better customer relationships and increased satisfaction.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-19',
        title: 'API Security and Access Control',
        description: 'API Security and Access Control are critical components of Customer Identity and Access Management (CIAM), especially for B2C and B2B scenarios. Securing APIs ensures that sensitive customer and partner data is protected while enabling seamless integration between systems and services.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of API Security and Access Control</h3>
                <p>
                    Implementing API security and access control helps organizations protect
                    sensitive data, ensure compliance with regulations, and maintain the
                    integrity of their digital services.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Data Protection:</span> Secure APIs help protect sensitive
                        customer and partner data from unauthorized access and breaches,
                        ensuring data integrity.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that API access and data sharing
                        comply with regulations like GDPR and CCPA, including proper
                        authentication and authorization mechanisms.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Integration:</span> Secure APIs enable seamless and
                        secure integration between different systems, ensuring that data is
                        shared safely across platforms.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports API Security and Access Control</h3>
                <p>
                    <span>RAAH Technologies</span> offers comprehensive CIAM solutions
                    that include API security and access control for both B2C and B2B use
                    cases. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>OAuth and OpenID Connect:</span> Implement industry-standard
                        protocols like OAuth 2.0 and OpenID Connect to secure API access and
                        ensure that only authorized users can access sensitive data.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>API Gateway Integration:</span> Integrate with API gateways to
                        enforce security policies, monitor API usage, and manage access control
                        effectively.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Control Policies:</span> Define and enforce access
                        control policies to ensure that APIs are only accessible by authorized
                        users and applications.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Securing API Access for a Financial Services Platform</h3>
                <p>
                    <span>Challenge:</span> A financial services company needed to secure
                    its APIs to protect sensitive customer data while enabling integration
                    with partner systems and ensuring compliance with GDPR.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an API security
                    solution that utilized OAuth 2.0 for secure authentication, integrated
                    with an API gateway for access control, and enforced detailed access
                    control policies.
                </p>
                <p>
                    <span>Result:</span> The financial platform improved its security
                    posture, ensured compliance with GDPR, and enabled secure integration with
                    partner systems, leading to better service delivery and customer trust.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-20',
        title: 'Seamless Customer Experience Across Channels (Omni-Channel CIAM for B2C and B2B)',
        description: 'Seamless Customer Experience across channels is a fundamental aspect of Customer Identity and Access Management (CIAM) for both B2C and B2B use cases. It enables customers and partners to have a consistent experience across multiple platforms and devices, including mobile apps, web applications, kiosks, and more. By providing a unified identity experience, organizations can enhance engagement, build trust, and improve customer satisfaction.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Seamless Customer Experience Across Channels</h3>
                <p>
                    Implementing an omni-channel experience for CIAM helps organizations
                    create cohesive and personalized customer journeys while maintaining
                    security and consistency across all channels.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Consistent User Experience:</span> Provide users with a
                        seamless and consistent experience across different channels, reducing
                        friction and improving engagement.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Personalization:</span> Leverage unified customer
                        profiles to deliver personalized experiences regardless of the channel,
                        improving customer satisfaction.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> Centralized identity management
                        ensures that security policies are applied consistently across all
                        channels, reducing the risk of data breaches.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Seamless Customer Experiences</h3>
                <p>
                    <span>RAAH Technologies</span> provides comprehensive CIAM solutions
                    that enable seamless customer experiences across multiple channels for
                    both B2C and B2B scenarios. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Unified Customer Profiles:</span> Create and manage a
                        centralized customer profile that provides a consistent experience
                        across all channels, ensuring that user preferences and data are
                        synchronized.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Single Sign-On (SSO):</span> Implement Single Sign-On across
                        multiple platforms, enabling users to authenticate once and access all
                        services seamlessly, regardless of the channel.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Deploy adaptive authentication
                        methods that provide additional security based on context and
                        channel-specific risks, maintaining a balance between security and user
                        convenience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Creating an Omni-Channel Experience for a Retail Brand</h3>
                <p>
                    <span>Challenge:</span> A retail brand needed to provide a seamless
                    and consistent experience for customers across their website, mobile app,
                    and in-store kiosks while maintaining secure access to customer data.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a CIAM solution
                    that included unified customer profiles, Single Sign-On across all
                    channels, and adaptive authentication to provide an enhanced user
                    experience while maintaining security.
                </p>
                <p>
                    <span>Result:</span> The retail brand delivered a consistent and
                    personalized customer experience across multiple channels, increased user
                    engagement, and ensured data security and compliance with regulations like
                    GDPR.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-21',
        title: 'Real-Time Identity Threat Detection (CIAM)',
        description: 'Real-Time Identity Threat Detection is a vital component of Customer Identity and Access Management (CIAM), especially for B2C and B2B use cases. It involves monitoring user activities and behaviors to detect and respond to suspicious activities in real time, helping to prevent identity fraud and ensure the security of customer data.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Real-Time Identity Threat Detection</h3>
                <p>
                    Implementing real-time threat detection helps organizations identify and
                    mitigate risks before they become serious security incidents, ensuring the
                    safety and integrity of customer identities.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Early Threat Detection:</span> Identify suspicious activities
                        and potential threats as they occur, allowing for immediate action to
                        mitigate risks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Fraud Prevention:</span> Prevent identity fraud by monitoring
                        unusual login patterns, device changes, and other risk factors that may
                        indicate unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure compliance with data protection
                        regulations such as GDPR and CCPA by implementing proactive measures to
                        protect customer data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Real-Time Identity Threat Detection</h3>
                <p>
                    <span>RAAH Technologies</span> offers comprehensive CIAM solutions
                    that include real-time identity threat detection for both B2C and B2B
                    scenarios. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Behavioral Analytics:</span> Utilize advanced behavioral
                        analytics to detect anomalies in user activities, such as unusual login
                        locations or rapid changes in device usage.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk-Based Authentication:</span> Implement risk-based
                        authentication that prompts for additional verification when suspicious
                        behavior is detected, balancing security and user experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Alerts and Responses:</span> Set up automated alerts
                        for suspicious activities and enable immediate response actions, such as
                        account locking or requiring multi-factor authentication (MFA).
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Preventing Fraud for an Online Banking Platform</h3>
                <p>
                    <span>Challenge:</span> An online banking platform needed to protect
                    customer accounts from identity fraud while ensuring a smooth user
                    experience for legitimate users.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a real-time
                    identity threat detection solution that leveraged behavioral analytics and
                    risk-based authentication to monitor user activities and respond to
                    suspicious behavior instantly.
                </p>
                <p>
                    <span>Result:</span> The banking platform significantly reduced
                    instances of fraud, improved customer trust, and ensured compliance with
                    data protection regulations, all while maintaining a user-friendly
                    experience.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-22',
        title: 'Progressive Profiling (CIAM)',
        description: 'Progressive Profiling is a strategy used in Customer Identity and Access Management (CIAM) to gradually collect user information over time, rather than requiring users to provide all details during initial registration. This approach helps improve the user experience by reducing friction and allows for more personalized interactions as users engage more with the organization.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Progressive Profiling</h3>
                <p>
                    Implementing Progressive Profiling helps organizations enhance user
                    experience, improve data accuracy, and build richer customer profiles over
                    time.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Friction:</span> Minimize the barriers to entry by
                        only asking for essential information during initial registration, with
                        further details collected gradually as users interact more.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Data Accuracy:</span> Collecting information over
                        time ensures that data is up-to-date and relevant, as users are more
                        likely to provide accurate details when engaged.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Personalized Experience:</span> Build a richer customer
                        profile to deliver personalized experiences based on the information
                        gathered progressively.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Progressive Profiling</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    Progressive Profiling for both B2C and B2B use cases. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Customizable Data Collection:</span> Implement customizable
                        forms that adapt to user behavior, ensuring that relevant information is
                        collected at the right time.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Integration with Customer Journeys:</span> Seamlessly
                        integrate Progressive Profiling into customer journeys to gather
                        information without disrupting the user experience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Data Security and Compliance:</span> Ensure that user data
                        collected through Progressive Profiling is managed securely and in
                        compliance with regulations like GDPR and CCPA.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Enhancing Customer Engagement for an E-Learning Platform</h3>
                <p>
                    <span>Challenge:</span> An e-learning platform wanted to gather more
                    information about its users to provide personalized course
                    recommendations, but didn't want to overwhelm users during registration.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Progressive
                    Profiling solution that collected essential information during initial
                    signup and gradually gathered additional details as users interacted with
                    the platform.
                </p>
                <p>
                    <span>Result:</span> The platform was able to provide personalized
                    course recommendations, improved user engagement, and collected accurate
                    data over time without creating a negative user experience.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-23',
        title: 'Customer Role and Entitlement Management (B2C, B2B, and B2B2C CIAM)',
        description: 'Customer Role and Entitlement Management is a crucial part of Customer Identity and Access Management (CIAM) for B2C, B2B, and B2B2C use cases. It involves assigning appropriate roles and entitlements to users, ensuring they have the right level of access based on their relationship with the organization. This approach helps maintain security, streamline user management, and enhance user experiences.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Customer Role and Entitlement Management</h3>
                <p>
                    Implementing effective role and entitlement management helps organizations
                    improve security, simplify access control, and ensure compliance with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Assigning roles and entitlements
                        based on user context ensures that users have only the access they need,
                        minimizing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Simplified User Management:</span> Role-based access control
                        (RBAC) makes it easier to manage user permissions and streamline the
                        onboarding and offboarding processes.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that access permissions are granted
                        in accordance with regulations like GDPR and CCPA, maintaining
                        transparency and control over customer data.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Customer Role and Entitlement Management</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    comprehensive role and entitlement management for B2C, B2B, and B2B2C use
                    cases. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Implement RBAC to
                        manage user access based on predefined roles, ensuring that users have
                        the appropriate level of access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Dynamic Entitlement Management:</span> Assign entitlements
                        dynamically based on user behavior and interactions, adapting to
                        changing user needs.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Secure Data Handling:</span> Ensure that user roles and
                        entitlements are managed securely and in compliance with data protection
                        regulations, such as GDPR and CCPA.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Managing Access for a B2B2C Service Platformr</h3>
                <p>
                    <span>Challenge:</span> A B2B2C service platform needed to manage
                    access for both partners and end customers, ensuring that each party had
                    the appropriate level of access to relevant resources without compromising
                    security.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a role and
                    entitlement management solution that assigned roles based on partner type
                    and customer interactions, dynamically adjusting entitlements as users
                    engaged with the platform.
                </p>
                <p>
                    <span>Result:</span> The platform was able to securely manage access
                    for both partners and end customers, improve operational efficiency, and
                    ensure compliance with data protection regulations, resulting in better
                    partner relationships, enhanced trust, and improved customer satisfaction.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-24',
        title: 'Cross-Organization Collaboration (B2B and B2B2C CIAM)',
        description: 'Cross-Organization Collaboration is an important feature of Customer Identity and Access Management (CIAM) for B2B and B2B2C contexts. It enables secure interactions and data sharing between different organizations, partners, and end customers, fostering a collaborative ecosystem while ensuring security, compliance, and effective access control.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Cross-Organization Collaboration</h3>
                <p>
                    Implementing Cross-Organization Collaboration helps organizations build
                    partnerships, improve operational efficiency, and provide seamless access
                    to shared resources while maintaining security.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Seamless Partner Integration:</span> Enable partners and
                        third-party organizations to access necessary resources easily and
                        securely, improving collaboration.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Maintain strict access controls and
                        audit trails to ensure that only authorized users have access to shared
                        resources, reducing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that data sharing between
                        organizations complies with regulations like GDPR and CCPA, protecting
                        sensitive information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Cross-Organization Collaboration</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that facilitate
                    Cross-Organization Collaboration for B2B and B2B2C use cases. Our
                    solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Federated Identity Management:</span> Implement federated
                        identity solutions to enable seamless authentication and access for
                        users from partner organizations, ensuring secure collaboration.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Granular Access Controls:</span> Define and enforce access
                        controls to ensure that partners and third-party users have only the
                        access they need to perform their roles.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Compliance Monitoring:</span> Track and monitor all
                        cross-organization interactions to ensure compliance with data
                        protection regulations and maintain security.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Enabling Collaboration for a B2B2C Supply Chain Network</h3>
                <p>
                    <span>Challenge:</span> A B2B2C supply chain network needed to enable
                    secure collaboration between suppliers, partners, and end customers, while
                    ensuring that sensitive information was only accessible to authorized
                    users.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a
                    Cross-Organization Collaboration solution that utilized federated identity
                    management, granular access controls, and compliance monitoring to
                    facilitate secure interactions between all stakeholders.
                </p>
                <p>
                    <span>Result:</span> The supply chain network achieved seamless
                    collaboration between partners and customers, improved operational
                    efficiency, and ensured compliance with data protection regulations,
                    resulting in enhanced trust and spaner partnerships.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-25',
        title: 'Account Recovery and Identity Assurance (B2C, B2B, and B2B2C CIAM)',
        description: 'Account Recovery is a critical feature of Customer Identity and Access Management (CIAM) for B2C, B2B, and B2B2C use cases. It ensures that customers, partners, and end users can securely regain access to their accounts when credentials are lost or compromised. Proper account recovery processes help maintain user trust and ensure the security of sensitive information.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Account Recovery and Identity Assurance</h3>
                <p>
                    Implementing secure account recovery processes helps organizations
                    maintain user trust, prevent unauthorized access, and comply with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved User Experience:</span> Provide a straightforward and
                        secure way for users to regain access to their accounts, minimizing
                        frustration and reducing support calls.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Ensure that account recovery
                        processes include multiple verification steps to prevent unauthorized
                        access and maintain the integrity of user accounts.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that account recovery processes
                        comply with regulations such as GDPR and CCPA, protecting user data and
                        maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Account Recovery</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    secure and user-friendly account recovery for B2C, B2B, and B2B2C use
                    cases. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Multi-Factor Verification:</span> Implement multi-factor
                        verification during account recovery to ensure that only authorized
                        users can regain access to their accounts.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Self-Service Recovery Portals:</span> Provide self-service
                        recovery portals that allow users to reset passwords and regain access
                        without needing to contact support.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Recovery Processes:</span> Utilize adaptive
                        authentication to adjust the recovery process based on the risk level,
                        providing additional verification steps when necessary.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Secure Account Recovery for a B2B2C Financial Services Platform</h3>
                <p>
                    <span>Challenge:</span> A B2B2C financial services platform needed a
                    secure and user-friendly account recovery process to help customers and
                    partners regain access to their accounts while preventing unauthorized
                    access.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an account
                    recovery solution that included multi-factor verification, self-service
                    recovery options, and adaptive recovery processes to ensure security and a
                    smooth user experience.
                </p>
                <p>
                    <span>Result:</span> The financial services platform improved user
                    satisfaction, reduced support calls related to account recovery, and
                    ensured compliance with data protection regulations, resulting in enhanced
                    user trust and security.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-26',
        title: 'Partner Federation (B2B and B2B2C CIAM)',
        description: 'Partner Federation is an essential feature of Customer Identity and Access Management (CIAM) for B2B and B2B2C use cases. It enables seamless and secure authentication and access for users across multiple organizations, ensuring that partners and third-party stakeholders can easily interact with shared resources while maintaining security and compliance.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Partner Federation</h3>
                <p>
                    Implementing Partner Federation helps organizations improve collaboration,
                    streamline access for partner users, and maintain span security and
                    compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Seamless Access:</span> Allow users from partner organizations
                        to access resources without the need for multiple credentials, enhancing
                        user experience and reducing friction.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Utilize secure federation protocols
                        like SAML and OpenID Connect to ensure that authentication is handled
                        securely, reducing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that data sharing and access comply
                        with regulations like GDPR and CCPA, protecting sensitive information
                        and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Partner Federation</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    Partner Federation for both B2B and B2B2C use cases. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Federated Identity Management:</span> Implement federated
                        identity solutions using industry-standard protocols like SAML and
                        OpenID Connect to enable secure authentication for partner users.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Granular Access Controls:</span> Define and enforce access
                        controls to ensure that partner users only have the access they need,
                        minimizing the risk of unauthorized actions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Scalable Integration:</span> Easily integrate with multiple
                        partner organizations to facilitate collaboration and streamline
                        onboarding for new partners.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Enabling Secure Partner Federation for a B2B2C Retail Network</h3>
                <p>
                    <span>Challenge:</span> A B2B2C retail network needed to enable secure
                    collaboration between suppliers, partners, and end customers, while
                    ensuring that access was only granted to authorized users.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Partner
                    Federation solution using SAML and OpenID Connect, allowing partner users
                    to authenticate seamlessly and securely. Granular access controls were
                    applied to ensure that users had appropriate access to resources.
                </p>
                <p>
                    <span>Result:</span> The retail network achieved seamless
                    collaboration between partners and customers, improved operational
                    efficiency, and ensured compliance with data protection regulations,
                    resulting in enhanced trust and spaner business relationships.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-27',
        title: 'Delegated Administration (B2B and B2B2C CIAM)',
        description: 'Delegated Administration is a critical feature of Customer Identity and Access Management (CIAM) for B2B and B2B2C use cases. It allows organizations to delegate administrative tasks to specific users or roles, ensuring that partners and third-party stakeholders can manage their own resources without compromising overall system security. This approach improves efficiency and provides flexibility while maintaining control.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Delegated Administration</h3>
                <p>
                    Implementing Delegated Administration helps organizations improve
                    collaboration, reduce administrative overhead, and maintain security and
                    compliance.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Efficiency:</span> Delegate administrative
                        responsibilities to partners or designated users, allowing them to
                        manage access, roles, and other resources, reducing the burden on
                        central IT teams.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Control:</span> Maintain overall control by defining
                        the scope of delegated tasks, ensuring that delegated administrators can
                        only manage specific resources.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that delegated administrative
                        actions comply with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Delegated Administration</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    Delegated Administration for both B2B and B2B2C use cases. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role-Based Delegation:</span> Define roles that can be
                        assigned delegated administrative rights, allowing partners or
                        designated users to manage their own resources while maintaining
                        security.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Granular Access Controls:</span> Implement granular access
                        controls to define the scope of delegated tasks, ensuring that delegated
                        administrators have the appropriate level of access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Monitoring:</span> Track and monitor all delegated
                        administrative activities to ensure compliance with data protection
                        regulations and maintain accountability.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Enabling Delegated Administration for a B2B2C Service Platform</h3>
                <p>
                    <span>Challenge:</span> A B2B2C service platform needed to delegate
                    administrative responsibilities to partners to allow them to manage their
                    own users and resources, while maintaining control and security.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Delegated
                    Administration solution that allowed partners to manage their own
                    resources through role-based delegation and granular access controls,
                    ensuring that delegated tasks were performed securely.
                </p>
                <p>
                    <span>Result:</span> The service platform improved operational
                    efficiency, reduced administrative overhead, and ensured compliance with
                    data protection regulations, resulting in better partner relationships and
                    enhanced trust.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-28',
        title: 'Contextual and Risk-Based Access (B2B and B2B2C CIAM)',
        description: 'Contextual and Risk-Based Access is a key feature of Customer Identity and Access Management (CIAM) for B2B and B2B2C use cases. It involves using contextual information, such as device, location, and user behavior, to assess the risk level of an access attempt and enforce appropriate security measures. This dynamic approach ensures that access is granted securely, balancing user experience with the need for robust security.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Contextual and Risk-Based Access</h3>
                <p>
                    Implementing Contextual and Risk-Based Access helps organizations enhance
                    security, improve user experience, and ensure compliance with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Use contextual information to assess
                        the risk of each access attempt and apply additional security measures,
                        such as multi-factor authentication (MFA), when necessary.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved User Experience:</span> Provide a frictionless
                        experience for low-risk access attempts by adapting security
                        requirements based on user context.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that access control policies comply
                        with regulations like GDPR and CCPA, protecting sensitive information
                        and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Contextual and Risk-Based Access</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    Contextual and Risk-Based Access for both B2B and B2B2C use cases. Our
                    solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Context-Aware Policies:</span> Define access policies that
                        consider factors such as user location, device type, and behavior to
                        assess the risk level and enforce appropriate security measures.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Adaptive Authentication:</span> Implement adaptive
                        authentication that dynamically adjusts security requirements based on
                        the assessed risk, ensuring a balance between security and user
                        convenience.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk Scoring:</span> Use risk scoring to evaluate each access
                        attempt and determine whether additional verification steps are needed,
                        enhancing security without compromising user experience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Implementing Contextual and Risk-Based Access for a B2B2C Financial Services Platform</h3>
                <p>
                    <span>Challenge:</span> A B2B2C financial services platform needed to
                    ensure secure access for partners and end customers while providing a
                    seamless user experience.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Contextual and
                    Risk-Based Access solution that used contextual information, such as
                    device type and user behavior, to assess the risk of each access attempt.
                    Adaptive authentication was applied for high-risk scenarios to enhance
                    security.
                </p>
                <p>
                    <span>Result:</span> The financial services platform improved
                    security, ensured compliance with data protection regulations, and
                    provided a seamless user experience for legitimate users, resulting in
                    increased trust and satisfaction.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-29',
        title: 'Audit and Compliance for Partners and Consumers',
        description: 'Audit and Compliance are crucial for ensuring that access granted to partners and consumers aligns with organizational policies and regulatory requirements. Regular audits help identify security gaps and ensure that access permissions for partners and consumers are appropriate and compliant. Ensuring compliance with regulations such as GDPR, CCPA, and other relevant data protection standards is essential to protect sensitive information and avoid penalties.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Audit and Compliance</h3>
                <p>
                    Implementing audit and compliance processes for partner and consumer
                    access helps organizations mitigate risks, meet regulatory requirements,
                    and ensure that external access is appropriately managed.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Regulatory Compliance:</span> Ensure that access provided to
                        partners and consumers adheres to regulatory standards such as GDPR,
                        CCPA, and other data protection regulations.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Security Assurance:</span> Regular audits help identify and
                        mitigate potential risks associated with external access, ensuring that
                        partners and consumers only have appropriate access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability and Visibility:</span> Maintain detailed audit
                        logs of partner and consumer access activities, providing visibility
                        into all interactions with organizational systems.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Partner and Consumer Compliance</h3>
                <p>
                    <span>RAAH Technologies</span> offers comprehensive audit and
                    compliance solutions tailored for partner and consumer identity
                    management. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Compliance Reports:</span> Generate automated
                        reports that track partner and consumer access activities, ensuring
                        transparency and identifying any compliance gaps in adherence to GDPR,
                        CCPA, and other relevant regulations.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Monitoring:</span> Monitor partner and consumer
                        access in real-time to ensure that compliance requirements are being met
                        at all times, addressing any potential violations promptly.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Reviews:</span> Conduct periodic access reviews for
                        partners and consumers to ensure that access permissions are valid and
                        aligned with business needs, while maintaining compliance with data
                        protection laws.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Ensuring Compliance for a Retail Partner Network</h3>
                <p>
                    <span>Challenge:</span> A retail organization needed to ensure that
                    access provided to their partner network complied with data protection
                    regulations such as GDPR while minimizing security risks.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an audit and
                    compliance solution that included automated compliance reporting,
                    real-time monitoring, and periodic access reviews for all partner
                    accounts.
                </p>
                <p>
                    <span>Result:</span> The retail organization achieved compliance with
                    data protection regulations, improved visibility into partner access, and
                    reduced the risk of unauthorized access to their systems.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-30',
        title: 'Supplier and Vendor Identity Management (B2B and B2B2C CIAM)',
        description: 'Supplier and Vendor Identity Management is a critical component of Customer Identity and Access Management (CIAM) for B2B and B2B2C use cases. It enables organizations to manage the identities and access of suppliers, vendors, and third-party partners, ensuring secure collaboration and compliance with data protection regulations.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Supplier and Vendor Identity Management</h3>
                <p>
                    Implementing Supplier and Vendor Identity Management helps organizations
                    enhance security, streamline onboarding, and maintain compliance with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Ensure that suppliers and vendors
                        have only the access they need, reducing the risk of unauthorized
                        actions and potential breaches.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Streamlined Onboarding:</span> Simplify the onboarding and
                        offboarding of suppliers and vendors by managing their identities
                        centrally and applying consistent access policies.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that all supplier and vendor
                        activities comply with data protection regulations such as GDPR and
                        CCPA, minimizing legal risks and ensuring transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Supplier and Vendor Identity Management</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    comprehensive Supplier and Vendor Identity Management for both B2B and
                    B2B2C use cases. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Centralized Identity Management:</span> Manage supplier and
                        vendor identities centrally to ensure consistent access control and
                        streamline administrative processes.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Role-Based Access Control (RBAC):</span> Apply RBAC to define
                        and manage access levels for suppliers and vendors, ensuring that they
                        only have access to relevant resources.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Monitoring:</span> Track and monitor all supplier
                        and vendor activities to ensure compliance with data protection
                        regulations and maintain accountability.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Managing Supplier Access for a B2B Manufacturing Network</h3>
                <p>
                    <span>Challenge:</span> A B2B manufacturing network needed to manage
                    the identities and access of multiple suppliers while ensuring compliance
                    with data protection regulations and maintaining security.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Supplier and
                    Vendor Identity Management solution that included centralized identity
                    management, role-based access control, and audit logging to ensure secure
                    collaboration and compliance.
                </p>
                <p>
                    <span>Result:</span> The manufacturing network improved security,
                    streamlined supplier onboarding and offboarding, and ensured compliance
                    with GDPR and other data protection regulations, resulting in enhanced
                    trust and spaner supplier relationships.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-31',
        title: 'Adaptive Authentication (CIAM Context)',
        description: 'Adaptive Authentication is a dynamic and context-aware approach to securing user access in Customer Identity and Access Management (CIAM). It analyzes various risk signals, such as user behavior, location, and device, to determine the appropriate level of authentication required. This method ensures that users have a frictionless experience while maintaining span security for sensitive resources.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Adaptive Authentication</h3>
                <p>
                    Implementing Adaptive Authentication helps organizations enhance security,
                    reduce friction for legitimate users, and ensure compliance with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Improved Security:</span> Analyze risk signals in real-time to
                        apply additional authentication measures when suspicious behavior is
                        detected, minimizing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced User Experience:</span> Provide a seamless experience
                        for users with low-risk access attempts by reducing unnecessary
                        authentication steps.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that authentication policies comply
                        with data protection regulations such as GDPR and CCPA, protecting
                        sensitive user data and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Adaptive Authentication</h3>
                <p>
                    <span>RAAH Technologies</span> offers CIAM solutions that include
                    Adaptive Authentication for both B2B and B2B2C use cases. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk-Based Analysis:</span> Utilize real-time risk analysis to
                        assess the context of each access attempt and dynamically adjust
                        authentication requirements based on the risk level.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Multi-Factor Authentication (MFA):</span> Integrate MFA as an
                        additional layer of security when high-risk behavior is detected,
                        ensuring that sensitive resources are protected.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Behavioral Biometrics:</span> Implement behavioral biometrics
                        to analyze user behavior, such as typing patterns or navigation habits,
                        adding an extra layer of security without impacting the user experience.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Implementing Adaptive Authentication for an Online Retail Platform</h3>
                <p>
                    <span>Challenge:</span> An online retail platform needed to secure
                    customer accounts while maintaining a seamless shopping experience,
                    especially during peak sales periods.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an Adaptive
                    Authentication solution that used risk-based analysis to assess each login
                    attempt. Low-risk users were granted access without additional
                    verification, while high-risk attempts prompted for MFA.
                </p>
                <p>
                    <span>Result:</span> The retail platform achieved improved security,
                    reduced fraud incidents, and provided a frictionless experience for
                    legitimate users, resulting in increased customer satisfaction and trust.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-32',
        title: 'Administrator and High-Risk User Monitoring',
        description: 'Administrator and High-Risk User Monitoring is a crucial component of Privileged Access Management (PAM). It involves continuously monitoring the activities of privileged users, such as system administrators and other high-risk individuals, to detect and respond to suspicious actions that could pose a security threat. This approach helps prevent unauthorized access, data breaches, and misuse of privileged accounts.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Administrator and High-Risk User Monitoring</h3>
                <p>
                    Implementing Administrator and High-Risk User Monitoring helps
                    organizations enhance security, maintain accountability, and ensure
                    compliance with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Continuously monitor privileged user
                        activities to detect and respond to suspicious behavior, minimizing the
                        risk of data breaches and insider threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability:</span> Maintain detailed logs of all
                        privileged user actions, ensuring that administrators and high-risk
                        users are held accountable for their activities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that privileged user activities
                        comply with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Administrator and High-Risk User Monitoring</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Administrator and High-Risk User Monitoring.
                    Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Activity Monitoring:</span> Continuously monitor
                        privileged user activities in real-time to detect and respond to
                        suspicious actions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Behavioral Analytics:</span> Use behavioral analytics to
                        establish a baseline of normal activities and identify deviations that
                        may indicate potential threats.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit Logging:</span> Maintain detailed audit logs of all
                        privileged user actions, providing a comprehensive record for compliance
                        and incident response.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Monitoring High-Risk Users in a Financial Services Company</h3>
                <p>
                    <span>Challenge:</span> A financial services company needed to monitor
                    the activities of privileged users to ensure that sensitive financial data
                    was not being accessed or misused.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented an Administrator
                    and High-Risk User Monitoring solution that used real-time activity
                    monitoring and behavioral analytics to detect suspicious behavior. Audit
                    logs were maintained for all privileged user actions to ensure
                    accountability.
                </p>
                <p>
                    <span>Result:</span> The financial services company improved security,
                    ensured compliance with data protection regulations, and reduced the risk
                    of insider threats, resulting in enhanced trust and confidence in their
                    security posture.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-33',
        title: 'Just-In-Time (JIT) Privileged Access',
        description: 'Just-In-Time (JIT) Privileged Access is a crucial component of Privileged Access Management (PAM). It involves granting privileged access to users only when they need it and only for the duration required to perform specific tasks. This approach minimizes the exposure of privileged credentials, reducing the risk of misuse and enhancing overall security.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Just-In-Time Privileged Access</h3>
                <p>
                    Implementing JIT Privileged Access helps organizations reduce the risk of
                    unauthorized access, enhance security, and ensure compliance with data
                    protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Minimized Attack Surface:</span> Limit the time during which
                        privileged credentials are active, reducing the window of opportunity
                        for attackers to exploit them.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Grant privileged access only when
                        needed, ensuring that sensitive systems are not exposed to unnecessary
                        risk.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that privileged access activities
                        comply with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Just-In-Time Privileged Access</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Just-In-Time Privileged Access. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>On-Demand Access:</span> Provide on-demand privileged access
                        that is granted only for the time required to complete specific tasks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Approval Workflows:</span> Implement approval workflows to
                        ensure that privileged access is granted only after appropriate
                        authorization, enhancing control and accountability.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Access Revocation:</span> Automatically revoke
                        privileged access once the task is completed or the allotted time
                        expires, ensuring that no unnecessary privileges remain active.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Implementing JIT Privileged Access for a Healthcare Organization</h3>
                <p>
                    <span>Challenge:</span> A healthcare organization needed to secure
                    access to sensitive patient data while ensuring that administrators could
                    perform necessary maintenance tasks without exposing systems to
                    unnecessary risk.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a JIT Privileged
                    Access solution that provided on-demand access to administrators for
                    specific tasks. Approval workflows were used to authorize access, and
                    privileges were automatically revoked once tasks were completed.
                </p>
                <p>
                    <span>Result:</span> The healthcare organization improved security,
                    minimized the risk of unauthorized access, and ensured compliance with
                    data protection regulations, resulting in enhanced trust and confidence in
                    their security practices.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-34',
        title: 'Privileged Account Discovery and Lifecycle Management',
        description: 'Privileged Account Discovery and Lifecycle Management is a fundamental component of Privileged Access Management (PAM). It involves identifying all privileged accounts across an organization, managing their lifecycle from creation to deactivation, and ensuring that they are appropriately governed throughout their existence. Effective lifecycle management helps reduce security risks, maintain accountability, and ensure compliance.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Privileged Account Discovery and Lifecycle Management</h3>
                <p>
                    Implementing Privileged Account Discovery and Lifecycle Management helps
                    organizations enhance security, ensure proper use of privileged accounts,
                    and maintain compliance with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Visibility:</span> Discover all privileged accounts
                        across the organization, providing a clear understanding of the
                        privileged access landscape.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Risk Reduction:</span> Manage the lifecycle of privileged
                        accounts to ensure that unused or unnecessary accounts are deactivated,
                        minimizing the risk of unauthorized access.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that privileged accounts are managed
                        in accordance with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Privileged Account Discovery and Lifecycle Management</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Privileged Account Discovery and Lifecycle
                    Management. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Account Discovery:</span> Automatically discover all
                        privileged accounts across systems, applications, and environments,
                        ensuring that no account is overlooked.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Lifecycle Management:</span> Manage the entire lifecycle of
                        privileged accounts, from creation and provisioning to deactivation and
                        removal, ensuring that privileges are granted and revoked as needed.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Reviews:</span> Conduct regular reviews of privileged
                        accounts to ensure that access remains appropriate and compliant with
                        organizational policies.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Managing Privileged Accounts for a Technology Company</h3>
                <p>
                    <span>Challenge:</span> A technology company needed to identify and
                    manage all privileged accounts across their IT infrastructure to ensure
                    that no unauthorized access was possible and that privileges were properly
                    managed.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Privileged
                    Account Discovery and Lifecycle Management solution that included
                    automated account discovery, lifecycle management, and regular access
                    reviews to maintain visibility and control.
                </p>
                <p>
                    <span>Result:</span> The technology company gained enhanced visibility
                    into their privileged accounts, reduced the risk of unauthorized access,
                    and ensured compliance with data protection regulations, resulting in
                    improved security and operational efficiency.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-35',
        title: 'Privileged Account Session Monitoring and Auditing',
        description: 'Privileged Account Session Monitoring and Auditing is a critical aspect of Privileged Access Management (PAM). It involves tracking and auditing the activities performed during privileged sessions to ensure that actions taken by privileged users are appropriate and compliant with security policies. This approach helps prevent misuse of privileged access, ensures accountability, and provides insights for improving security.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Privileged Account Session Monitoring and Auditing</h3>
                <p>
                    Implementing Privileged Account Session Monitoring and Auditing helps
                    organizations enhance security, ensure accountability, and maintain
                    compliance with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Monitor privileged user sessions in
                        real-time to detect and respond to suspicious activities, reducing the
                        risk of unauthorized actions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability:</span> Maintain detailed records of all
                        actions taken during privileged sessions, ensuring that users are held
                        accountable for their activities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that privileged session activities
                        comply with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Privileged Account Session Monitoring and Auditing</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Privileged Account Session Monitoring and
                    Auditing. Our solutions include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Session Recording:</span> Record all privileged user sessions
                        to capture detailed information about actions taken, providing a
                        comprehensive audit trail for compliance and security analysis.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Real-Time Monitoring:</span> Monitor privileged sessions in
                        real-time to detect and respond to any suspicious activities, minimizing
                        potential risks.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Reporting:</span> Generate detailed audit reports of
                        privileged sessions to ensure compliance with regulatory requirements
                        and provide insights for improving security practices.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Implementing Privileged Account Session Monitoring for a Financial Institution</h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to ensure that
                    all actions taken by privileged users were properly monitored and audited
                    to protect sensitive financial data and meet regulatory requirements.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Privileged
                    Account Session Monitoring and Auditing solution that recorded all
                    privileged sessions, provided real-time monitoring, and generated detailed
                    audit reports to ensure compliance and security.
                </p>
                <p>
                    <span>Result:</span> The financial institution improved security,
                    ensured compliance with data protection regulations, and maintained
                    accountability for all privileged activities, resulting in enhanced trust
                    and confidence in their security practices.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-36',
        title: 'Privileged Task Automation',
        description: 'Privileged Task Automation is an essential component of Privileged Access Management (PAM). It involves automating tasks that require privileged access, reducing the need for manual intervention and minimizing the risk of human error. By automating repetitive or sensitive tasks, organizations can enhance efficiency, improve security, and ensure compliance with policies and regulations.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Privileged Task Automation</h3>
                <p>
                    Implementing Privileged Task Automation helps organizations enhance
                    operational efficiency, reduce security risks, and maintain compliance
                    with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Increased Efficiency:</span> Automate repetitive tasks to
                        reduce the workload of IT administrators, allowing them to focus on more
                        strategic activities.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Reduced Human Error:</span> Minimize the risk of errors that
                        can occur during manual execution of privileged tasks, improving overall
                        security.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that all automated tasks are
                        executed in accordance with organizational policies and regulatory
                        requirements, maintaining transparency and accountability.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Privileged Task Automation</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Privileged Task Automation. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Automated Workflows:</span> Create automated workflows for
                        common privileged tasks, such as system configuration changes or access
                        provisioning, ensuring consistency and reducing the risk of errors.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Scripted Automation:</span> Use pre-approved scripts to
                        automate complex tasks that require privileged access, reducing the need
                        for manual intervention and improving security.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Reporting:</span> Maintain detailed records of all
                        automated tasks to ensure compliance with regulatory requirements and
                        provide insights for improving automation processes.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Automating Privileged Tasks for a Financial Institution</h3>
                <p>
                    <span>Challenge:</span> A financial institution needed to automate
                    privileged tasks to improve efficiency and reduce the risk of human error
                    when managing sensitive financial systems.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Privileged Task
                    Automation solution that included automated workflows and scripted
                    automation for common tasks, ensuring consistency and compliance with
                    regulatory requirements.
                </p>
                <p>
                    <span>Result:</span> The financial institution improved operational
                    efficiency, reduced the risk of human error, and ensured compliance with
                    data protection regulations, resulting in enhanced security and
                    streamlined operations.
                </p>
            </div>
        )
    },
    {
        id: 'use-case-doc-37',
        title: 'Privileged Access Governance',
        description: 'Privileged Access Governance is an essential aspect of Privileged Access Management (PAM). It involves establishing policies, procedures, and controls to manage and govern the use of privileged accounts, ensuring that privileged access is granted and used appropriately. Effective governance helps organizations minimize security risks, maintain accountability, and comply with data protection regulations.',
        content: (
            <div className='SolutionsUseCaseDetailedViewContentWrapper'>
                <h3 className="SolutionsUseCaseDetailedViewSubheader">Benefits of Privileged Access Governance</h3>
                <p>
                    Implementing Privileged Access Governance helps organizations enhance
                    security, ensure proper use of privileged accounts, and maintain
                    compliance with data protection regulations.
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Enhanced Security:</span> Establish policies and controls to
                        ensure that privileged access is granted only to authorized users and
                        used appropriately, reducing the risk of unauthorized actions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Accountability:</span> Maintain detailed records of privileged
                        access activities, ensuring that users are held accountable for their
                        actions.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Compliance:</span> Ensure that privileged access activities
                        comply with regulations like GDPR and CCPA, protecting sensitive
                        information and maintaining transparency.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">How RAAH Technologies Supports Privileged Access Governance</h3>
                <p>
                    <span>RAAH Technologies</span> offers Privileged Access Management
                    (PAM) solutions that include Privileged Access Governance. Our solutions
                    include:
                </p>
                <ul className="SolutionsUseCaseDetailedViewList">
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Policy Enforcement:</span> Define and enforce policies that
                        govern the use of privileged accounts, ensuring that access is granted
                        and used in accordance with organizational standards.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Access Reviews:</span> Conduct periodic reviews of privileged
                        access to ensure that only authorized users have access and that
                        privileges are appropriate for their roles.
                    </li>
                    <li className="SolutionsUseCaseDetailedViewListItem">
                        <span>Audit and Reporting:</span> Generate detailed reports of
                        privileged access activities to ensure compliance with regulatory
                        requirements and provide insights for improving governance practices.
                    </li>
                </ul>

                <h3 className="SolutionsUseCaseDetailedViewSubheader">Use Case: Implementing Privileged Access Governance for a Healthcare Organization</h3>
                <p>
                    <span>Challenge:</span> A healthcare organization needed to ensure
                    that privileged access to sensitive patient data was properly governed to
                    comply with data protection regulations and prevent unauthorized access.
                </p>
                <p>
                    <span>Solution:</span> RAAH Technologies implemented a Privileged
                    Access Governance solution that included policy enforcement, access
                    reviews, and audit reporting to ensure that privileged access was properly
                    managed and compliant with regulations.
                </p>
                <p>
                    <span>Result:</span> The healthcare organization improved security,
                    ensured compliance with data protection regulations, and maintained
                    accountability for all privileged access activities, resulting in enhanced
                    trust and confidence in their security practices.
                </p>
            </div>
        )
    }
];

const SolutionsUseCaseDetailedView = () => {
    const [selectedUseCaseDocument, setSelectedUseCaseDocument] = useState(null);

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

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/solutions#usecases');
    };

    return (
        <div className='SolutionsUseCaseDetailedViewContainer'>
            <div className='SolutionsUseCaseDetailedViewIntro'>
                <div className='SolutionsUseCaseDetailedViewIntroTitleBar'>
                    <div className='SolutionsIndividualIPageIntroTitleAccent'>
                        <h2 className='SolutionsUseCaseDetailedViewIntroTitle'>{useCaseDocuments.find((document) => document.id === selectedUseCaseDocument)?.title}</h2>
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
                    {useCaseDocuments.find((document) => document.id === selectedUseCaseDocument)?.description}
                </p>
            </div>
            {useCaseDocuments.find((document) => document.id === selectedUseCaseDocument)?.content}
        </div>
    );
};

export default SolutionsUseCaseDetailedView;