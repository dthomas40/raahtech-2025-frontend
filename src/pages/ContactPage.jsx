import React, { useEffect } from 'react'
import TopGap from '../components/TopGap'
import ContactFormSection from './ContactPage/ContactFormSection'
import PageDivider from '../components/PageDivider'
import ContactAccordionSection from './ContactPage/ContactAccordionSection'
import ContactIntroSection from './ContactPage/ContactIntroSection'
import BottomGap from '../components/BottomGap'
import { useLocation } from 'react-router-dom'
import PageDividerReduced from '../components/PageDividerReduced'

const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <TopGap />
            <ContactIntroSection />
            <ContactFormSection />
            <PageDividerReduced />
            <ContactAccordionSection />
            <BottomGap />
        </div>
    )
}

export default ContactPage