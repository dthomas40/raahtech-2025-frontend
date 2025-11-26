import React, { useState, useRef, useEffect } from 'react';
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

const categories = Object.keys(documents);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ExploreWhitePaperSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const docs = documents[activeCategory] || [];
  const needsScroll = docs.length > 3;

  // Email gating
  const [email, setEmail] = useState(() => localStorage.getItem('raah.email') || '');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [pendingDoc, setPendingDoc] = useState(null);
  const [emailError, setEmailError] = useState('');
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (isEmailModalOpen && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isEmailModalOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsEmailModalOpen(false);
        setEmailError('');
        setPendingDoc(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const requestDownload = (doc) => {
    if (EMAIL_REGEX.test(email.trim())) {
      handleDownload(doc);
      return;
    }
    // Ask for email first
    setPendingDoc(doc);
    setIsEmailModalOpen(true);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_REGEX.test(value)) {
      setEmailError('Please enter a valid email.');
      return;
    }

    // Save locally so we only ask once
    localStorage.setItem('raah.email', value);

    // try to subscribe in the background (non-blocking)
    try {
      await fetch('https://dev-website-backend--raahtechnologies-server-2025.us-central1.hosted.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
    } catch (err) {
      // Silently ignore; download should proceed regardless
      // console.warn('Subscribe failed', err);
    }

    setIsEmailModalOpen(false);
    setEmailError('');

    if (pendingDoc) {
      const toDownload = pendingDoc;
      setPendingDoc(null);
      handleDownload(toDownload);
    }
  };

  const handleDownload = async (doc) => {
    const filePath = `/${doc.folder}/${doc.filename}`;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = doc.filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download failed:', e);
    }
  };

  return (
    <>
      <div className='NavbarScrollSpacer' id='whitepapers' />
      <div className="WhitePaperContainer">
        <h2 className="WhitePaperContainerTitle">Explore Resources</h2>

        <div className="WhitePaperTabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`WhitePaperTabButton ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              type="button"
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={
            `WhitePaperListContainer ${needsScroll ? 'WhitePaperListContainer--scroll WhitePaperScrollArea' : ''}`
          }
          role="list"
        >
          {docs.map((doc) => (
            <div key={doc.id} className="WhitePaperItemWrapper" role="listitem">
              <button
                type="button"
                className="WhitePaperItemMain"
                onClick={() => requestDownload(doc)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && requestDownload(doc)}
              >
                <h4 className="WhitePaperItemTitle">{doc.title}</h4>
                <p className="WhitePaperItemDescription">{doc.description}</p>
              </button>

              <div className="WhitePaperItemAction">
                <button
                  type="button"
                  className="WhitePaperDownloadButton"
                  onClick={() => requestDownload(doc)}
                  aria-label={`Download ${doc.title}`}
                >
                  Download
                </button>
              </div>
            </div>
          ))}

          {docs.length === 0 && (
            <div className="WhitePaperEmpty">No documents available.</div>
          )}
        </div>
      </div>

      {/* Email Capture Modal */}
      {isEmailModalOpen && (
        <div className="EmailModalBackdrop" role="presentation" onClick={() => { setIsEmailModalOpen(false); setPendingDoc(null); }}>
          <div
            className="EmailModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-modal-title"
            aria-describedby="email-modal-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="email-modal-title" className="EmailModalTitle">Enter your email to download</h3>
            <p id="email-modal-desc" className="EmailModalDesc">
              We’ll send occasional updates about new resources. You can unsubscribe anytime.
            </p>

            <form onSubmit={submitEmail} className="EmailForm">
              <label htmlFor="whitepaper-email" className="EmailLabel">Email</label>
              <input
                id="whitepaper-email"
                ref={emailInputRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                className={`EmailInput ${emailError ? 'EmailInput--error' : ''}`}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                required
              />
              {emailError && <div className="EmailErrorText" role="alert">{emailError}</div>}

              <div className="EmailModalActions">
                <button type="button" className="EmailCancelButton" onClick={() => { setIsEmailModalOpen(false); setPendingDoc(null); }}>
                  Cancel
                </button>
                <button type="submit" className="EmailSubmitButton">
                  Continue & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreWhitePaperSection;