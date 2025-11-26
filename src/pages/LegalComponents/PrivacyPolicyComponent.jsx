import React from 'react';
import './LegalComponent.css'; // Import the shared CSS file

const PrivacyPolicyComponent = () => {
    const sections = [
        {
            id: 'introduction',
            heading: 'Privacy Policy',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        RAAH Technologies ("Company", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you provide to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://raahtech.com" className="LegalComponentParagraphA">https://raahtech.com</a> ("Website") or engage with our services.
                    </p>
                </>
            )
        },
        {
            id: 'who-we-are',
            heading: '1. Who We Are',
            content: (
                <p className="LegalComponentParagraph">
                    RAAH Technologies is a professional consulting firm headquartered in <span>Atlanta, Georgia</span>, specializing in Identity and Access Management (IAM), Identity Governance (IGA), Customer Identity (CIAM), and Privileged Access Management (PAM). Our services are intended for businesses and enterprise clients.
                </p>
            )
        },
        {
            id: 'information-we-collect',
            heading: '2. Information We Collect',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        We may collect the following types of information:
                    </p>
                    <h4 className="LegalComponentSubHeading">a. Information You Provide Directly</h4>
                    <ul className="LegalComponentList">
                        <li>Name, email address, company name, phone number</li>
                        <li>Any other information submitted through forms or communications with us</li>
                    </ul>
                    <h4 className="LegalComponentSubHeading">b. Automatically Collected Information</h4>
                    <ul className="LegalComponentList">
                        <li>IP address, browser type, operating system</li>
                        <li>Referring URLs and interactions with the Website</li>
                        <li>Cookies and similar technologies (see Section 6)</li>
                    </ul>
                </>
            )
        },
        {
            id: 'how-we-use-your-information',
            heading: '3. How We Use Your Information',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        We use the collected information for purposes such as:
                    </p>
                    <ul className="LegalComponentList">
                        <li>Responding to inquiries or requests</li>
                        <li>Providing and improving our consulting services</li>
                        <li>Sending relevant updates or marketing communications (if consented)</li>
                        <li>Analyzing website usage and performance</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </>
            )
        },
        {
            id: 'how-we-share-information',
            heading: '4. How We Share Information',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        We do not sell, rent, or trade your personal information. We may share information with:
                    </p>
                    <ul className="LegalComponentList">
                        <li>Service providers and subcontractors (e.g., cloud hosting, analytics)</li>
                        <li>Legal authorities when required by law or regulation</li>
                        <li>Prospective buyers in case of a company acquisition, merger, or asset sale</li>
                    </ul>
                </>
            )
        },
        {
            id: 'data-retention',
            heading: '5. Data Retention',
            content: (
                <p className="LegalComponentParagraph">
                    We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your information at any time (see Section 8).
                </p>
            )
        },
        {
            id: 'cookies-and-analytics',
            heading: '6. Cookies and Analytics',
            content: (
                <p className="LegalComponentParagraph">
                    We use cookies and similar technologies to enhance your browsing experience and collect website analytics. This may include third-party services like Google Analytics. You may manage cookie preferences in your browser settings.
                </p>
            )
        },
        {
            id: 'data-security',
            heading: '7. Data Security',
            content: (
                <p className="LegalComponentParagraph">
                    We implement reasonable technical and organizational measures to protect your data, including encryption, access controls, and secure infrastructure. However, no method of transmission over the internet is 100% secure.
                </p>
            )
        },
        {
            id: 'your-rights-and-choices',
            heading: '8. Your Rights and Choices',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        Depending on your jurisdiction, you may have the right to:
                    </p>
                    <ul className="LegalComponentList">
                        <li>Access, correct, or delete your personal data</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Request a copy of your data</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                    <p className="LegalComponentParagraph">
                        To exercise these rights, contact us at <a href="mailto:info@raahtech.com" className="LegalComponentParagraphA">info@raahtech.com</a>.
                    </p>
                </>
            )
        },
        {
            id: 'childrens-privacy',
            heading: '9. Children’s Privacy',
            content: (
                <p className="LegalComponentParagraph">
                    Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children.
                </p>
            )
        },
        {
            id: 'international-users',
            heading: '10. International Users',
            content: (
                <p className="LegalComponentParagraph">
                    Our Website is operated in the United States. If you are accessing the Website from outside the U.S., you consent to the transfer and processing of your information in the U.S. in accordance with this Privacy Policy.
                </p>
            )
        },
        {
            id: 'changes-to-this-privacy-policy',
            heading: '11. Changes to This Privacy Policy',
            content: (
                <p className="LegalComponentParagraph">
                    We may update this Privacy Policy at any time. The updated version will be posted on this page with the revised effective date. Continued use of our Website after changes constitutes acceptance.
                </p>
            )
        },
        {
            id: 'contact-us',
            heading: '12. Contact Us',
            content: (
                <p className="LegalComponentParagraph">
                    If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                    <br />
                    <span>RAAH Technologies, LLC</span><br />
                    Atlanta, Georgia, USA<br />
                    Email: <a href="mailto:info@raahtech.com" className="LegalComponentParagraphA">info@raahtech.com</a><br />
                    Website: <a href="https://raahtech.com" className="LegalComponentParagraphA">https://raahtech.com</a>
                </p>
            )
        }
    ];

    return (
        <div className="LegalComponentContainer">
            <header className="LegalComponentIntroHeader">
                <div className="LegalComponentIntroHeaderContent">
                    <div className="LegalComponentTitleRow">
                        <h1 className="LegalComponentIntroTitle">Privacy Policy</h1>
                    </div>
                    <p className="LegalComponentDate">Effective Date: August 6, 2025</p>
                    <p className="LegalComponentDate">Last Updated: August 6, 2025</p>
                    <p className="LegalComponentAuthor">By: RAAH TECHNOLOGIES</p>
                </div>
            </header>

            <main className="LegalComponentWrapperMainContent">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="LegalComponentWrapperMainContentSection">
                        {section.heading && (
                            <h3 className="LegalComponentWrapperMainContentSectionHeading">
                                {section.heading}
                            </h3>
                        )}
                        {section.content}
                    </section>
                ))}

                <footer className="LegalComponentWrapperFooterSection">
                    <div className="LegalComponentWrapperFooterSectionContent">
                        <p className="LegalComponentWrapperFooterSectionText">
                            © 2025 RAAH Technologies. All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default PrivacyPolicyComponent;
