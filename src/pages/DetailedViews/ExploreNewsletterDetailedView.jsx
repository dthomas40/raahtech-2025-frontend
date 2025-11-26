import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ExploreNewsletterDetailedView.css';
import PressReleaseImage1 from "../../assets/PressReleaseImages/PressRelease1.png";

const newsletters = [
    {
        id: 'newsletter-doc-1',
        title: 'RAAH Technologies Honored as AMER SI Partner of the Year by Okta at Partner Summit 2024',
        date: 'November 14, 2024',
        author: 'RAAH TECHNOLOGIES',
        sections: [
            {
                id: 'intro',
                heading: 'PRESS RELEASE',
                content: (
                    <>
                        <div className="ExploreNewsletterComponentImageContainer">
                            <img
                                src={PressReleaseImage1}
                                alt="Okta Award 2024 Press Release"
                                className="ExploreNewsletterComponentImage"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x200/cccccc/000000?text=Image+Not+Found"; }}
                            />
                        </div>
                        <p className="ExploreNewsletterComponentParagraph">
                            Atlanta, GA November 14, 2024: RAAH Technologies, a leading identity and access management solutions and services provider, is proud to announce that it has been awarded the AMER SI Partner of the Year at Partner Summit 2024. This prestigious award celebrates RAAH Technologies' exceptional performance, innovative solutions, and significant contribution to customer success over the past year.
                        </p>
                        <p className="ExploreNewsletterComponentParagraph">
                            As the AMER SI Partner of the Year, RAAH Technologies has demonstrated its commitment to excellence in the field, investing heavily in Okta skills to deliver successful customer projects across regions. With impressive year-over-year growth, RAAH Technologies has continued to support organizations in transforming their identity strategies and enhancing their security frameworks.
                        </p>

                    </>
                )
            },
            {
                id: 'quote-naren',
                heading: '',
                content: (
                    <blockquote className="ExploreNewsletterComponentBlockquote">
                        "Receiving the AMER SI Partner of the Year award from Okta is a testament to our dedication to providing leading-edge identity solutions that protect and empower our clients," said Naren Jangid, Founder and CEO of RAAH Technologies. "We are incredibly proud of our team and the work they've put into achieving this milestone. We extend our gratitude to Okta for recognizing our efforts, and we look forward to driving continued innovation and success together."
                    </blockquote>
                )
            },
            {
                id: 'quote-bill',
                heading: '',
                content: (
                    <blockquote className="ExploreNewsletterComponentBlockquote">
                        "At Okta, we're putting our partners at the heart of our growth and innovation strategy. We're building a powerful ecosystem of the world's foremost identity experts and application developers with a clear goal: to free everyone to use any technology," said Bill Hustad, senior vice president of Partners and Alliances at Okta. "RAAH Technologies consistently drives innovation, accelerates our growth, and cultivates enthusiastic customers. We extend our gratitude and celebrate their remarkable achievements."
                    </blockquote>
                )
            },
            {
                id: 'about-raah',
                heading: 'About RAAH Technologies',
                content: (
                    <p className="ExploreNewsletterComponentParagraph">
                        RAAH Technologies provides comprehensive and tailored Identity and Access Management (IAM) solutions to Fortune 1000 companies covering Workforce Identity Governance and Administration (IGA), End users and Privileged Access Management (PAM), Fine Grained Authorization (FGA) and all of Customer Identity (CIAM). Our services include advisory, implementation, and managed offerings designed to support organizations in addressing identity challenges. We deliver adaptable, end-to-end identity solutions, allowing clients to engage with our services as needed-whether through ad-hoc support, fully managed services, or integration within existing processes. Our approach is focused on enabling effective identity management aligned with each organization's specific requirements and objectives.
                    </p>
                )
            }
        ],
        contactEmail: 'solutions@raahtech.com',
        website: 'www.RAAHTech.com'
    },
    // {
    //     id: 'newsletter-doc-2',
    //     title: 'Another Great Newsletter',
    //     date: 'December 1, 2024',
    //     author: 'RAAH TECHNOLOGIES',
    //     sections: [
    //         { id: 'section-a', heading: 'Section A', content: <p>Content for section A.</p> },
    //     ],
    //     contactEmail: 'info@raahtech.com',
    //     website: 'www.RAAHTech.com'
    // },
];

const ExploreNewsletterDetailedView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedNewsletterId, setSelectedNewsletterId] = useState(newsletters[0].id);

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const idFromUrl = pathSegments[pathSegments.length - 1];

        const foundNewsletter = newsletters.find(nl => nl.id === idFromUrl);

        if (foundNewsletter) {
            setSelectedNewsletterId(idFromUrl);
        } else {
            navigate(`/newsletter/${newsletters[0].id}`, { replace: true });
            setSelectedNewsletterId(newsletters[0].id);
        }
    }, [location.pathname, navigate]);

    const currentNewsletter = newsletters.find(nl => nl.id === selectedNewsletterId);

    const handleNewsletterChange = (id) => {
        navigate(`/newsletter/${id}`);
        document.querySelector('.ExploreNewsletterComponentWrapperMainContent').scrollTo(0, 0);
    };

    const handleClose = () => {
        navigate('/explore#news');
    };

    if (!currentNewsletter) {
        return <div className="ExploreNewsletterComponentContainer">Loading newsletter...</div>;
    }

    return (
        <div className="ExploreNewsletterComponentContainer">
            <header className="ExploreNewsletterComponentIntroHeader">
                <div className="ExploreNewsletterComponentIntroHeaderContent">
                    <div className="ExploreNewsletterComponentTitleRow">
                        <h1 className="ExploreNewsletterComponentIntroTitle">{currentNewsletter.title}</h1>
                        <button className='ExploreNewsletterComponentIntroCloseButton' onClick={handleClose} aria-label="Return to Solutions">
                            <svg
                                className="ExploreNewsletterComponentIntroCloseArrow"
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
                            <p>Return to Explore</p>
                        </button>
                    </div>
                    <p className="ExploreNewsletterComponentDate">{currentNewsletter.date}</p>
                    <p className="ExploreNewsletterComponentAuthor">By: {currentNewsletter.author}</p>
                </div>
            </header>

            <div className="ExploreNewsletterComponentWrapper">
                <aside className="ExploreNewsletterComponentWrapperSidebar">
                    <h4 className="ExploreNewsletterComponentWrapperSidebarTitle">Newsletters</h4>
                    <nav>
                        <ul className="ExploreNewsletterComponentWrapperSidebarNavList">
                            {newsletters.map((nl) => (
                                <li key={nl.id}>
                                    <button
                                        onClick={() => handleNewsletterChange(nl.id)}
                                        className={`ExploreNewsletterComponentWrapperSidebarNavListItem ${selectedNewsletterId === nl.id ? 'active' : ''}`}
                                    >
                                        {nl.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="ExploreNewsletterComponentWrapperMainContent">
                    {currentNewsletter.sections.map((section, index) => (
                        <section id={section.id} className="ExploreNewsletterComponentWrapperMainContentSection" key={index}>
                            {section.heading && <h3 className="ExploreNewsletterComponentWrapperMainContentSectionHeading">{section.heading}</h3>}
                            {section.content}
                        </section>
                    ))}

                    <footer className="ExploreNewsletterComponentWrapperFooterSection">
                        <div className="ExploreNewsletterComponentWrapperFooterSectionContent">
                            <p className="ExploreNewsletterComponentWrapperFooterSectionText">By: {currentNewsletter.author}</p>
                            {currentNewsletter.contactEmail && (
                                <p className="ExploreNewsletterComponentWrapperFooterSectionText">Email: {currentNewsletter.contactEmail}</p>
                            )}
                            {currentNewsletter.website && (
                                <p className="ExploreNewsletterComponentWrapperFooterSectionText">Website: {currentNewsletter.website}</p>
                            )}
                            <p className="ExploreNewsletterComponentWrapperFooterSectionText">Follow us @RAAHTech</p>
                            <p className="ExploreNewsletterComponentWrapperFooterSectionCopyrightText">&copy; 2024 RAAH Technologies, All Rights Reserved.</p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default ExploreNewsletterDetailedView;