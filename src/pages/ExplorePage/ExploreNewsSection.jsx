import React, { useState, useEffect, useRef } from 'react';
import "./ExploreNewsSection.css";
import { Link } from 'react-router-dom';
import PressReleaseImage1 from "../../assets/PressReleaseImages/PressRelease1.png";

const news = [
    {
        id: 'newsletter-doc-1',
        title: 'AMER SI Partner of the Year',
        description: `RAAH Technologies, is proud to announce that it has been awarded the AMER SI Partner of the Year at Partner Summit 2024`,
        date: 'November 14, 2024',
        author: 'RAAH TECHNOLOGIES',
        img: PressReleaseImage1,
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

const ExploreNewsSection = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [progress, setProgress] = useState(0); // 0 to 100
    const requestRef = useRef();
    const startTimeRef = useRef(null); // ⬅️ new ref to track start time
    const duration = 10000;

    useEffect(() => {
        cancelAnimationFrame(requestRef.current); // ensure previous animation is cancelled
        startTimeRef.current = performance.now(); // ⬅️ store the start time

        const animate = (time) => {
            const elapsed = time - startTimeRef.current;
            const percentage = Math.min((elapsed / duration) * 100, 100);
            setProgress(percentage);

            if (percentage < 100) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                const nextIndex = selectedIndex + 3 >= news.length ? 0 : selectedIndex + 3;
                setSelectedIndex(nextIndex);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [selectedIndex]); // remove duration here; it doesn't need to be a dependency    

    return (
        <div className='NewsContainer'>
            <div className='NewsBlockContainer'>
                {/* {[0, 1, 2].map((offset) => {
                const paper = news[(selectedIndex + offset) % news.length]; */}
                {news.map((paper, index) => {
                    return (
                        <Link to={`/newsletter/${paper.id}`}>
                            <div className='NewsBlock' key={paper.id}>
                                <h3>{paper.title}</h3>
                                <div
                                    className="NewsBlockImage"
                                    style={{ backgroundImage: `url(${paper.img})` }}
                                ></div>
                                <p>{paper.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="NewsContainerTimer">
                <div className="NewsContainerTimerLine" />
                <div
                    className="NewsContainerTimerCircle"
                    style={{ left: `${progress}%` }}
                />
            </div>

        </div>
    )
}

export default ExploreNewsSection