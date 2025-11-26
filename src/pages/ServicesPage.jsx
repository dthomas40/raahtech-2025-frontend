import React, { useEffect } from 'react'
import TopGap from '../components/TopGap'
import ServicesAdvisorySection from './ServicesPage/ServicesAdvisorySection'
import ServicesImplementationSection from './ServicesPage/ServicesImplementationSection'
import ServicesSupportSection from './ServicesPage/ServicesSupportSection'
import ServicesStaffingSection from './ServicesPage/ServicesStaffingSection'
import PageDivider from '../components/PageDivider'
import ServicesMainDividerSection from './ServicesPage/ServicesMainDividerSection'
import ServicesIntroSection from './ServicesPage/ServicesIntroSection'
import ServicesHeroSection from './ServicesPage/ServicesHeroSection'
import BottomGap from '../components/BottomGap'
import { useLocation } from 'react-router-dom'
import PageDividerReduced from '../components/PageDividerReduced'
import ScheduleSection from '../components/ScheduleSection'

const ServicesPage = () => {
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
            <ServicesIntroSection />
            <ServicesHeroSection />
            <ServicesMainDividerSection />
            <ServicesAdvisorySection />
            <PageDividerReduced />
            <ServicesImplementationSection />
            <PageDividerReduced />
            <ServicesSupportSection />
            <PageDividerReduced />
            <ServicesStaffingSection />
            <PageDividerReduced />
            <ScheduleSection />
            {/* <BottomGap /> */}
        </div>
    )
}

export default ServicesPage