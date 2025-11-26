import React, { useEffect } from 'react'
import ExploreNavigateSection from './ExplorePage/ExploreNavigateSection'
import ExploreFindButtonSection from './ExplorePage/ExploreFindButtonSection'
import ExploreInsightsSection from './ExplorePage/ExploreInsightsSection'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import ExploreIntroSection from './ExplorePage/ExploreIntroSection'
import BottomGap from '../components/BottomGap'
import ExploreWhitePaperSection from './ExplorePage/ExploreWhitePaperSection'
import ExploreNewsSection from './ExplorePage/ExploreNewsSection'
import ExploreNewsIntroSection from './ExplorePage/ExploreNewsIntroSection'
import ExploreBreachTimeline from './ExplorePage/ExploreBreachTimeline'
import ExploreTryBreachSection from './ExplorePage/ExploreTryBreachSection'
import { useLocation } from 'react-router-dom'
import PageDividerReduced from '../components/PageDividerReduced'
import ScheduleSection from '../components/ScheduleSection'

const ExplorePage = () => {
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
            <ExploreIntroSection />
            <ExploreTryBreachSection />
            <ExploreBreachTimeline />
            <PageDividerReduced />
            <ExploreNavigateSection />
            <PageDividerReduced />
            <ExploreFindButtonSection />
            <PageDividerReduced />
            <ExploreInsightsSection />
            <ExploreWhitePaperSection />
            <PageDividerReduced />
            <ExploreNewsIntroSection />
            <ExploreNewsSection />
            <PageDividerReduced />
            <ScheduleSection />
            {/* <BottomGap /> */}
        </div>
    )
}

export default ExplorePage