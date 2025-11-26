import React, { useState } from 'react';
import './ContactFormSection.css';
import CTAArrow from '../../assets/CTA_Arrow.png';

const ContactFormSection = () => {
    const [inputs, setInputs] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://dev-website-backend--raahtechnologies-server-2025.us-central1.hosted.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            setIsSubmitted(true);
            console.log("Submitted data:", inputs);
        } catch (error) {
            console.error("Submission failed:", error);
            alert("There was a problem submitting the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='ContactFormSectionContainer'>
            <div className='ContactFormSectionIntro'>
                <h2 className='ContactFormSectionIntroTitle'>Let’s Talk Identity</h2>
                <p className='ContactFormSectionIntroDescription'>
                    In a crowded identity services landscape, we stand out by how we operate — not just what we deliver.
                </p>
            </div>

            {!isSubmitted ? (
                <form className='ContactFormSectionFormContainer' onSubmit={handleSubmit}>
                    <div className="ContactFormRow">
                        <label>
                            Full Name
                            <input
                                type="text"
                                name="fullName"
                                placeholder="e.g. John Smith"
                                value={inputs.fullName || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Company
                            <input
                                type="text"
                                name="company"
                                placeholder="e.g. Acme Corp"
                                value={inputs.company || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="ContactFormRow">
                        <label>
                            Work Email
                            <input
                                type="email"
                                name="email"
                                placeholder="e.g. johnsmith@workemail.com"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Job Title (Optional)
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="e.g. Product Manager"
                                value={inputs.jobTitle || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="ContactFormRow">
                        <label className="ContactFormFullWidth">
                            Focus Area
                            <select
                                name="focusArea"
                                value={inputs.focusArea || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>Select a reason</option>
                                <option value="iam">IAM</option>
                                <option value="ciam">CIAM</option>
                                <option value="pam">PAM</option>
                                <option value="iga">IGA</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="ContactFormRow">
                        <label className="ContactFormFullWidth">
                            Reason for Reaching Out
                            <select
                                name="reason"
                                value={inputs.reason || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>Select a reason</option>
                                <option value="Advisory & Assessment<">Advisory & Assessment</option>
                                <option value="Implementation & Integration">Implementation & Integration</option>
                                <option value="Managed Support Services">Managed Support Services</option>
                                <option value="Identity Staffing Services">Identity Staffing Services</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="ContactFormRow">
                        <label className="ContactFormFullWidth">
                            Message
                            <textarea
                                name="message"
                                placeholder="Enter details."
                                value={inputs.message || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="ContactFormRow">
                        <button className='ContactFormSectionCTA' type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : (
                                <>
                                    Submit
                                    {/* <img src={CTAArrow} alt="CTA Arrow" /> */}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="ContactFormSectionFormSubmitResult">
                    <p>Thanks for reaching out! We'll get back to you as soon as possible.</p>
                </div>
            )}
        </div>
    );
};

export default ContactFormSection;