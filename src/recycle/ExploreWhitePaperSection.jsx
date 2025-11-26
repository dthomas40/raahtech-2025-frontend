import React, { useState, useEffect, useRef } from 'react';
import './ExploreWhitePaperSection.css';

const documents = {
    "White Papers": [
        {
            id: 'whitepaper-doc-1',
            title: 'The Journey to Next Gen IAM 2024',
            description: 'Present, Future, and what it means for IAM Experts, IT Gurus, Marketers, and Hackers',
            folder: 'ExploreWhitepapers',
            filename: 'The Journey to Next Gen IAM 2024 - RAAH Tech.pdf'
        },
        {
            id: 'whitepaper-doc-2',
            title: 'Identity Provider Data Migration',
            description: 'A guide to seamlessly migrating your user authentication data',
            folder: 'ExploreWhitepapers',
            filename: 'Identity Provider Data Migration - Whitepaper by RAAH Technologies.pdf'
        },
    ],
    "Industry Specific": [
        {
            id: 'industry-doc-1',
            title: 'Healthcare Identity Solutions',
            description: 'RAAH provides modern identity solutions tailored to the healthcare industry, focusing on patient safety, clinical productivity, and regulatory compliance.',
            folder: 'ExploreIndustrySpecific',
            filename: 'Healthcare One Pager - RAAH Tech.pdf'
        },
        {
            id: 'industry-doc-2',
            title: 'Financial Services Identity Security',
            description: 'RAAH helps financial institutions secure identities across hybrid environments to improve compliance, protect data, and increase operational efficiency.',
            folder: 'ExploreIndustrySpecific',
            filename: 'Finance One Pager - RAAH Tech.pdf'
        },
        {
            id: 'industry-doc-3',
            title: 'Retail Identity Solutions',
            description: 'RAAH helps retailers secure their people, systems, and customer trust with deep industry expertise and hands-on delivery.',
            folder: 'ExploreIndustrySpecific',
            filename: 'Retail One Pager - RAAH Tech.pdf'
        }
    ],
    "Product Specific": [
        {
            id: 'product-doc-1',
            title: 'Seamless Okta CIS to CIC Migration',
            description: 'This document explains the benefits of migrating from Okta CIS to Okta Customer Identity Cloud (CIC) and why it\'s a seamless process.',
            folder: 'ExploreProductSpecific',
            filename: 'RAAH Technologies_Okta CIS to CIC Migration.pdf'
        },
        {
            id: 'product-doc-2',
            title: 'RAAH and Okta Partnership Overview',
            description: 'An overview of RAAH\'s core competencies and their recognition as Okta\'s America\'s System Integrator Partner of the Year for 2024.',
            folder: 'ExploreProductSpecific',
            filename: "RAAH's Baseball Card for Okta Customers.pdf"
        }
    ],
    "Use Case Specific": [
        {
            id: 'usecase-doc-1',
            title: 'Customer Identity and Access Management (CIAM) Assessments',
            description: 'This document provides an overview of RAAH\'s CIAM assessments, which help evaluate your identity management landscape and provide a clear roadmap for enhancement.',
            folder: 'ExploreUseCaseSpecific',
            filename: 'CIAM Assessments.pdf'
        }
    ],
    "RAAH Information": [
        {
            id: 'raah-doc-1',
            title: 'Advisory and Discovery Workshop',
            description: 'A free workshop that includes a high-level discovery, CIAM use case assessment, and a gap analysis to help clients assess their current identity environment.',
            folder: 'ExploreRAAHInformation',
            filename: 'RAAH Technologies - Advisory and Discovery Workshop.pdf'
        },
        {
            id: 'raah-doc-2',
            title: 'RAAH\'s Technologies Differentiators',
            description: 'This document highlights what sets RAAH apart, including making IAM smarter and faster with expert-matched teams.',
            folder: 'ExploreRAAHInformation',
            filename: 'RAAH Technologies Differentiators.pdf'
        },
        {
            id: 'raah-doc-3',
            title: 'Passwordless Authentication',
            description: 'An exploration of the groundwork, execution, and industry trends for implementing a passwordless authentication strategy.',
            folder: 'ExploreRAAHInformation',
            filename: 'RAAH Technologies_Passswordless Authentication.pdf'
        },
        {
            id: 'raah-doc-4',
            title: 'IAM Services Overview',
            description: 'An overview of RAAH Technologies\' comprehensive IAM services, including Advisory, Professional, Managed, and Staffing services.',
            folder: 'ExploreRAAHInformation',
            filename: 'Services 2024 - RAAH Tech.pdf'
        }
    ]
};

const duration = 10000;

const DocumentSection = ({ title, docs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [downloadStatus, setDownloadStatus] = useState({});
    const requestRef = useRef();
    const startTimeRef = useRef(null);

    useEffect(() => {
        cancelAnimationFrame(requestRef.current);

        const startTime = performance.now();
        startTimeRef.current = startTime;

        const animate = (time) => {
            const elapsed = time - startTime;
            const percentage = Math.min((elapsed / duration) * 100, 100);
            setProgress(percentage);

            if (percentage < 100) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                const nextIndex = selectedIndex + 3 >= docs.length ? 0 : selectedIndex + 3;
                setSelectedIndex(nextIndex);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [selectedIndex, docs.length]);


    const handleDownload = async (doc) => {
        const filePath = `/${doc.folder}/${doc.filename}`;
        setDownloadStatus(prev => ({ ...prev, [doc.id]: 'Downloading...' }));

        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('Network response was not ok');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = doc.filename;
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(url);
            setDownloadStatus(prev => ({ ...prev, [doc.id]: 'Download Successful' }));
        } catch (error) {
            console.error('Download failed:', error);
            setDownloadStatus(prev => ({ ...prev, [doc.id]: 'Download Failed' }));
        }
    };

    const displayedDocs =
        docs.length <= 3
            ? docs
            : docs.slice(selectedIndex, selectedIndex + 3).concat(
                docs.slice(0, Math.max(0, 3 - (docs.length - selectedIndex)))
            );


    return (
        <div className='WhitePaperContainer' id={title.replace(/\s+/g, '-').toLowerCase()}>
            <h2 className='WhitePaperContainerTitle gt600'>{title}</h2>
            <div className='WhitePaperBlockContainer'>
                {displayedDocs.map((doc) => (
                    <div key={doc.id} className='WhitePaperBlock'
                        onClick={() => downloadStatus[doc.id] !== 'Downloading...' && handleDownload(doc)}>
                        <h3>{doc.title}</h3>
                        <p>{doc.description}</p>
                        <div className='WhitePaperTagContainer'>
                            <div
                                className={`WhitePaperTag ${downloadStatus[doc.id] === 'Downloading...' ? 'disabled' : ''}`}

                            >
                                {downloadStatus[doc.id] || 'Download PDF'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="WhitePaperContainerTimer">
                <div className="WhitePaperContainerTimerLine" />
                <div
                    className="WhitePaperContainerTimerCircle"
                    style={{ left: `${progress}%` }}
                />
            </div>

            <h2 className='WhitePaperContainerTitle ltet600'>{title}</h2>
        </div>
    );
};

const ExploreWhitePaperSection = () => {
    return (
        <div id='whitepapers'>
            {Object.entries(documents).map(([category, docs]) => (
                <DocumentSection key={category} title={category} docs={docs} />
            ))}
        </div>
    );
};

export default ExploreWhitePaperSection;