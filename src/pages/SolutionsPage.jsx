import React, { useEffect } from 'react'
import TopGap from '../components/TopGap'
import SolutionsChooserSection from './SolutionsPage/SolutionsChooserSection'
import PageDivider from '../components/PageDivider'
import SolutionsUseCaseSection from './SolutionsPage/SolutionsUseCaseSection'
import SolutionsPlatformSection from './SolutionsPage/SolutionsPlatformSection'
import SolutionsIntroSection from './SolutionsPage/SolutionsIntroSection'
import BottomGap from '../components/BottomGap'
import SolutionsIndustrySection from './SolutionsPage/SolutionsIndustrySection'
import { useLocation } from 'react-router-dom'
import PageDividerReduced from '../components/PageDividerReduced'
import ScheduleSection from '../components/ScheduleSection'

const SolutionsPage = () => {
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
            <SolutionsIntroSection />
            <SolutionsChooserSection />
            <PageDividerReduced />
            <SolutionsIndustrySection />
            <PageDividerReduced />
            <SolutionsUseCaseSection />
            <PageDividerReduced />
            <SolutionsPlatformSection />
            <PageDividerReduced />
            <ScheduleSection />
            {/* <BottomGap /> */}
        </div>
    )
}

export default SolutionsPage