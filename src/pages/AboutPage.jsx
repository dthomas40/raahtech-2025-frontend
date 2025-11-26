import React from 'react'
import PageDivider from '../components/PageDivider'
import TopGap from '../components/TopGap'
import AboutMissionSection from './AboutPage/AboutMissionSection'
import AboutLeadershipSection from './AboutPage/AboutLeadershipSection'
import AboutIntroSection from './AboutPage/AboutIntroSection'
import AboutIdentityIntroSection from './AboutPage/AboutIdentityIntroSection'
import AboutIdentityServices from './AboutPage/AboutIdentityServices'
import AboutStats from './AboutPage/AboutStats'
import AboutConsultationSection from './AboutPage/AboutConsultationSection'
import AboutDeliverySection from './AboutPage/AboutDeliverySection'
import AboutStepsSection from './AboutPage/AboutStepsSection'
import AboutScheduleSection from './AboutPage/AboutScheduleSection'
import BottomGap from '../components/BottomGap'
import AboutAddressComponent from './AboutPage/AboutAddressComponent'
import AboutAddressIntroSection from './AboutPage/AboutAddressIntroSection'
import PageDividerReduced from '../components/PageDividerReduced'
import ScheduleSection from '../components/ScheduleSection'


const AboutPage = () => {
    return (
        <div>
            <TopGap />
            <AboutIntroSection />
            <AboutMissionSection />
            <PageDividerReduced />
            <AboutLeadershipSection />
            <PageDividerReduced />
            <AboutIdentityIntroSection />
            <AboutIdentityServices />
            <PageDividerReduced />
            <AboutDeliverySection />
            <AboutStepsSection />
            <PageDividerReduced />
            {/* <AboutStats /> */}
            <AboutAddressIntroSection />
            <AboutAddressComponent />
            <PageDividerReduced />
            <ScheduleSection />
            {/* <BottomGap /> */}
        </div>
    )
}

export default AboutPage