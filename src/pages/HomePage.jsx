import React from 'react'
import HomeUseCaseSection from './HomePage/HomeUseCaseSection'
import HomeServicesSection from './HomePage/HomeServicesSection'
import PageDivider from '../components/PageDivider'
import HomeQuoteSlider from './HomePage/HomeQuoteSlider'
import HomeCTAPanel from './HomePage/HomeCTAPanel'
import TopGap from '../components/TopGap'
import HomeEvolutionSection from './HomePage/HomeEvolutionSection'
import HomeTitleContainer from './HomePage/HomeTitleContainer'
import HomeClientsSection from './HomePage/HomeClientsSection'
import HomeTestimonialsSection from './HomePage/HomeTestimonialsSection'
import HomeHero from './HomePage/HomeHero'
import BottomGap from '../components/BottomGap'
import HomeStats from './HomePage/HomeStats'
import PageDividerBottom from '../components/PageDividerBottom'
import PageDividerTop from '../components/PageDividerTop'
import PageDividerRemoved from '../components/PageDividerRemoved'
import PageDividerReduced from '../components/PageDividerReduced'
import ScheduleSection from '../components/ScheduleSection'
import HomeAwardsSection from './HomePage/HomeAwardsSection'

const HomePage = () => {
    return (
        <div>
            <TopGap />
            {/* <HomeTitleContainer /> */}

            <HomeEvolutionSection />
            {/* <PageDivider /> */}
            <HomeHero />
            {/* <HomeCTAPanel /> */}
            {/* <PageDivider /> */}
            <PageDividerReduced />
            <HomeUseCaseSection />
            <PageDividerReduced />
            <HomeServicesSection />
            <PageDividerReduced />
            <HomeQuoteSlider />
            <PageDividerReduced />
            <HomeStats />
            <PageDividerReduced />
            <HomeAwardsSection />
            <PageDividerReduced />
            <HomeClientsSection />
            <PageDividerReduced />
            <HomeTestimonialsSection />
            <PageDividerReduced />
            <ScheduleSection />
            {/* <BottomGap /> */}
        </div>
    )
}

export default HomePage