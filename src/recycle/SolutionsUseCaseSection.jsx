import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CTAArrow from '../../assets/CTA_Arrow.png';
import './SolutionsUseCaseSection.css'

const SolutionsUseCaseSection = () => {

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
                    id: 'use-case-doc-1',
                    title: 'Single Sign-On (SSO) for Employees',
                    // url: 'SingleSignOnSSOForEmployees',
                    description: 'Secure and simplify employee access across systems.',
                    // body: <SSOEmployeeContent />,
                },
                {
                    id: 'use-case-doc-2',
                    title: 'Multi-factor Authentication (MFA) for Enhanced Security',
                    // url: 'MultiFactorAuthenticationMFAForEnhancedSecurity',
                    description: 'Enhance security by adding MFA options.',
                    // body: <MFAEnhancedSecurityContent />,
                },
                {
                    id: 'use-case-doc-3',
                    title: 'Role-Based Access Control (RBAC)',
                    // url: 'RoleBasedAccessControlRBAC',
                    description: 'Manage access permissions using defined roles.',
                    // body: <RBACContent />,
                },
                {
                    id: 'use-case-doc-4',
                    title: 'Device and Endpoint Identity Management',
                    // url: 'DeviceAndEndpointIdentityManagement',
                    description: 'Secure and manage identities across devices and endpoints.',
                    // body: <DeviceEndpointContent />,
                },
                {
                    id: 'use-case-doc-5',
                    title: 'Passwordless Authentication for Workforce',
                    // url: 'PasswordlessAuthenticationForWorkforce',
                    description: 'Improve security and user experience with passwordless options.',
                    // body: <PasswordlessAuthenticationContent />,
                },
                {
                    id: 'use-case-doc-6',
                    title: 'Zero Trust Security and Adaptive Access Controls',
                    // url: 'ZeroTrustSecurityAndAdaptiveAccessControls',
                    description: 'Implement zero trust principles for adaptive access.',
                    // body: <ZeroTrustSecurityContent />,
                },
                {
                    id: 'use-case-doc-7',
                    title: 'Employee Onboarding and Offboarding',
                    // url: 'EmployeeOnboardingAndOffboarding',
                    description: 'Automate onboarding and offboarding to streamline identity management.',
                    // body: <EmployeeOnboardingContent />,
                },
                {
                    id: 'use-case-doc-8',
                    title: 'Access Certification and Attestation',
                    // url: 'AccessCertificationAndAttestation',
                    description: 'Regularly verify and certify user access for compliance.',
                    // body: <AccessCertificationContent />,
                },
                {
                    id: 'use-case-doc-9',
                    title: 'Access Request and Workflow Automation',
                    // url: 'AccessRequestAndWorkflowAutomation',
                    description: 'Automate access requests and approval workflows.',
                    // body: <AccessRequestContent />,
                },
                {
                    id: 'use-case-doc-10',
                    title: 'Identity Lifecycle Management',
                    // url: 'IdentityLifecycleManagement',
                    description: 'Manage the complete lifecycle of user identities, from onboarding to deactivation.',
                    // body: <IdentityLifecycleContent />,
                },
                {
                    id: 'use-case-doc-11',
                    title: 'Role Mining and Optimization',
                    // url: 'RoleMiningAndOptimization',
                    description: 'Discover and optimize role definitions for better access management.',
                    // body: <RoleMiningContent />,
                },
                {
                    id: 'use-case-doc-12',
                    title: 'Separation of Duties (SoD) Management',
                    // url: 'SeparationOfDutiesSoDManagement',
                    description: 'Ensure compliance by managing separation of duties.',
                    // body: <SoDContent />,
                },
                {
                    id: 'use-case-doc-13',
                    title: 'Granular Access Controls',
                    // url: 'GranularAccessControls',
                    description: 'Enforce fine-grained access policies for better security.',
                    // body: <GranularAccessControlsContent />,
                },
                {
                    id: 'use-case-doc-14',
                    title: 'User Entitlement Management',
                    // url: 'UserEntitlementManagement',
                    description: 'Manage user entitlements efficiently.',
                    // body: <UserEntitlementContent />,
                },
                {
                    id: 'use-case-doc-15',
                    title: 'Audit Compliance',
                    // url: 'AuditCompliance',
                    description: 'Ensure adherence to regulatory compliance standards.',
                    // body: <AuditComplianceWorkforceContent />,
                },
            ],
        },
        {
            category: 'Consumer (B2C, B2B/B2B2C) IAM',
            items: [
                {
                    id: 'use-case-doc-16',
                    title: 'User Registration and Self-Service Portals',
                    // url: 'UserRegistrationAndSelfServicePortals',
                    description: 'Enable users to register and manage their own accounts.',
                    // body: <UserRegistrationContent />,
                },
                {
                    id: 'use-case-doc-17',
                    title: 'Social and Federated Login for Customers',
                    // url: 'SocialAndFederatedLoginForCustomers',
                    description: 'Allow users to log in with social media or other federated identities.',
                    // body: <SocialLoginContent />,
                },
                {
                    id: 'use-case-doc-18',
                    title: 'Customer Profile and Consent Management',
                    // url: 'CustomerProfileAndConsentManagement',
                    description: 'Manage customer data and consent preferences.',
                    // body: <CustomerProfileContent />,
                },
                {
                    id: 'use-case-doc-19',
                    title: 'API Security and Access Control',
                    // url: 'APISecurityAndAccessControl',
                    description: 'Secure APIs and manage access policies effectively.',
                    // body: <APISecurityContent />,
                },
                {
                    id: 'use-case-doc-20',
                    title: 'Seamless Customer Experience across Channels',
                    // url: 'SeamlessCustomerExperienceAcrossChannels',
                    description: 'Provide consistent user experiences across devices and platforms.',
                    // body: <SeamlessCustomerExperienceContent />,
                },
                {
                    id: 'use-case-doc-21',
                    title: 'Real-Time Identity Threat Detection for Customers',
                    // url: 'RealTimeIdentityThreatDetectionForCustomers',
                    description: 'Detect and respond to identity threats in real time.',
                    // body: <IdentityThreatDetectionContent />,
                },
                {
                    id: 'use-case-doc-22',
                    title: 'Progressive Profiling',
                    // url: 'ProgressiveProfiling',
                    description: 'Gradually collect user information to improve user experience and personalization.',
                    // body: <ProgressiveProfilingContent />,
                },
                {
                    id: 'use-case-doc-23',
                    title: 'Customer Role and Entitlement Management',
                    // url: 'CustomerRoleAndEntitlementManagement',
                    description: 'Assign and manage customer roles and entitlements effectively.',
                    // body: <CustomerRoleManagementContent />,
                },
                {
                    id: 'use-case-doc-24',
                    title: 'Cross-Organization Collaboration',
                    // url: 'CrossOrganizationCollaboration',
                    description: 'Enable secure collaboration between different organizations.',
                    // body: <CrossOrgCollaborationContent />,
                },
                {
                    id: 'use-case-doc-25',
                    title: 'Account Recovery and Identity Assurance',
                    // url: 'AccountRecoveryAndIdentityAssurance',
                    description: 'Assist users in recovering their accounts securely while maintaining identity assurance.',
                    // body: <AccountRecoveryContent />,
                },
                {
                    id: 'use-case-doc-26',
                    title: 'Partner Federation',
                    // url: 'PartnerFederation',
                    description: 'Federate identities across partner organizations.',
                    // body: <PartnerFederationContent />,
                },
                {
                    id: 'use-case-doc-27',
                    title: 'Delegated Administration',
                    // url: 'DelegatedAdministration',
                    description: 'Delegate administrative tasks to specific users or roles for improved efficiency.',
                    // body: <DelegatedAdminContent />,
                },
                {
                    id: 'use-case-doc-28',
                    title: 'Contextual and Risk-Based Access',
                    // url: 'ContextualAndRiskBasedAccess',
                    description: 'Use context and risk factors to manage access dynamically.',
                    // body: <IdentityThreatDetectionContent />,
                },
                {
                    id: 'use-case-doc-29',
                    title: 'Partner and Consumer Identity Audit Compliance',
                    // url: 'PartnerAndConsumerIdentityAuditCompliance',
                    description: 'Ensure partner organizations meet compliance standards.',
                    // body: <AuditCompliancePartnerandConsumerContent />,
                },
                {
                    id: 'use-case-doc-30',
                    title: 'Supplier and Vendor Identity Management',
                    // url: 'SupplierAndVendorIdentityManagement',
                    description: 'Manage identities of suppliers and vendors.',
                    // body: <SupplierVendorIdentityContent />,
                },
                {
                    id: 'use-case-doc-31',
                    title: 'Adaptive Authentication',
                    // url: 'AdaptiveAuthentication',
                    description: 'Adapt authentication based on real-time context and risk.',
                    // body: <AdaptiveAuthContent />,
                },
            ],
        },
        {
            category: 'Privileged Access Management',
            // icon: <FaKey className="SolutionsUseCaseSectionGraphic" />,
            items: [
                {
                    id: 'use-case-doc-32',
                    title: 'Administrator and High-Risk User Monitoring',
                    // url: 'AdministratorAndHighRiskUserMonitoring',
                    description: 'Monitor privileged accounts for suspicious activity.',
                    // body: <AdminMonitoringContent />,
                },
                {
                    id: 'use-case-doc-33',
                    title: 'Just-In-Time (JIT) Privileged Access',
                    // url: 'JustInTimeJITPrivilegedAccess',
                    description: 'Grant temporary access to privileged resources as needed.',
                    // body: <JITPrivilegedAccessContent />,
                },
                {
                    id: 'use-case-doc-34',
                    title: 'Privileged Account Discovery and Lifecycle Management',
                    // url: 'PrivilegedAccountDiscoveryAndLifecycleManagement',
                    description: 'Manage the lifecycle of privileged accounts.',
                    // body: <AccountDiscoveryContent />,
                },
                {
                    id: 'use-case-doc-35',
                    title: 'Session Monitoring and Audit',
                    // url: 'SessionMonitoringAndAudit',
                    description: 'Monitor admin activities and ensure audit compliance.',
                    // body: <PrivilegedAccountMonitoringContent />,
                },
                {
                    id: 'use-case-doc-36',
                    title: 'Privileged Task Automation',
                    // url: 'PrivilegedTaskAutomation',
                    description: 'Automate tasks performed by privileged users to enhance efficiency and security.',
                    // body: <PrivilegedTaskAutomationContent />,
                },
                {
                    id: 'use-case-doc-37',
                    title: 'Privileged Access Governance',
                    // url: 'PrivilegedAccessGovernance',
                    description: 'Ensure proper governance of privileged accounts and access levels.',
                    // body: <PrivilegedAccessGovernanceContent />,
                },
            ],
        },
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const activeUseCase = useCases.find(useCase => useCase.category === activeCategory);

    return (
        <div className='SolutionsUseCaseSectionContainer' id='usecases'>
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
                            <img src={CTAArrow} alt='CTA Arrow' />
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
                                    <h4 className='SolutionsUseCaseSectionGraphicTitle'>{item.title}</h4>
                                    <p className='SolutionsUseCaseSectionGraphicDescription'>{item.description}</p>
                                </div>
                                {/* <img src={item.icon} alt={`${item.title} icon`} className='SolutionsUseCaseSectionGraphic' /> */}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SolutionsUseCaseSection;