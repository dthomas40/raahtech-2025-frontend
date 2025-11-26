import React from 'react';
import './LegalComponent.css'; // Import the shared CSS file

const TermsAndConditionsComponent = () => {
    const sections = [
        {
            id: 'introduction',
            heading: 'Terms and Conditions',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        Welcome to the official website of <span>RAAH Technologies</span> (“Company”, “we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern your access to and use of our website and services available at <a href="https://raahtech.com" className="LegalComponentParagraphA">https://raahtech.com</a> (“Website”).
                    </p>
                    <p className="LegalComponentParagraph">
                        By using our Website or engaging with our services, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our Website or services.
                    </p>
                </>
            )
        },
        {
            id: 'services',
            heading: '1. About RAAH Technologies',
            content: (
                <p className="LegalComponentParagraph">
                    RAAH Technologies is a professional consulting firm based in <span>Atlanta, Georgia</span>, specializing in Identity and Access Management (IAM), Governance (IGA), Customer Identity (CIAM), and Privileged Access Management (PAM). Services are delivered through enterprise contracts and not directly via the Website.
                </p>
            )
        },
        {
            id: 'use-of-website',
            heading: '2. Use of Website',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        You agree to use this Website lawfully and refrain from:
                    </p>
                    <ul className="LegalComponentList">
                        <li>Engaging in unauthorized access or system interference</li>
                        <li>Disrupting Website functionality</li>
                        <li>Scraping, reproducing, or redistributing content without permission</li>
                    </ul>
                    <p className="LegalComponentParagraph">
                        We reserve the right to suspend access to users who violate these Terms.
                    </p>
                </>
            )
        },
        {
            id: 'intellectual-property',
            heading: '3. Intellectual Property',
            content: (
                <p className="LegalComponentParagraph">
                    All content on this Website—including text, graphics, branding, and design—is the property of RAAH Technologies and is protected by U.S. and international intellectual property laws. Unauthorized use is strictly prohibited.
                </p>
            )
        },
        {
            id: 'third-party',
            heading: '4. Third-Party Links',
            content: (
                <p className="LegalComponentParagraph">
                    Our Website may contain links to third-party sites. We are not responsible for the content, policies, or reliability of any external sites you access through our Website.
                </p>
            )
        },
        {
            id: 'disclaimer',
            heading: '5. Disclaimers',
            content: (
                <>
                    <p className="LegalComponentParagraph">
                        This Website is provided “as is” without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of any content or service provided.
                    </p>
                    <p className="LegalComponentParagraph">
                        We are not liable for errors, interruptions, or data loss resulting from your use of the Website.
                    </p>
                </>
            )
        },
        {
            id: 'liability',
            heading: '6. Limitation of Liability',
            content: (
                <p className="LegalComponentParagraph">
                    To the fullest extent allowed by law, RAAH Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this Website.
                </p>
            )
        },
        {
            id: 'governing-law',
            heading: '7. Governing Law',
            content: (
                <p className="LegalComponentParagraph">
                    These Terms are governed by the laws of the State of <span>Georgia</span>, USA. Any legal disputes must be brought in the courts located in <span>Atlanta, Georgia</span>.
                </p>
            )
        },
        {
            id: 'modifications',
            heading: '8. Changes to Terms',
            content: (
                <p className="LegalComponentParagraph">
                    We may modify these Terms at any time. The updated Terms will be posted on this page with a revised effective date. Continued use of the Website indicates your acceptance of the new Terms.
                </p>
            )
        },
        {
            id: 'contact',
            heading: '9. Contact Us',
            content: (
                <p className="LegalComponentParagraph">
                    If you have questions regarding these Terms, please contact us at:
                    <br />
                    <span>RAAH Technologies, LLC</span><br />
                    Atlanta, Georgia, USA<br />
                    Email: <a href="mailto:info@raahtech.com" className="LegalComponentParagraphA">info@raahtech.com</a><br />
                    Website: <a href="https://raahtech.com" className="LegalComponentParagraphA">raahtech.com</a>
                </p>
            )
        }
    ];

    return (
        <div className="LegalComponentContainer">
            <header className="LegalComponentIntroHeader">
                <div className="LegalComponentIntroHeaderContent">
                    <div className="LegalComponentTitleRow">
                        <h1 className="LegalComponentIntroTitle">Terms and Conditions</h1>
                    </div>
                    <p className="LegalComponentDate">Effective Date: August 6, 2025</p>
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

export default TermsAndConditionsComponent;