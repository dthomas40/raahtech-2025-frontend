import React, { useEffect } from 'react'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import BottomGap from '../components/BottomGap'
import ExploreWhitepaperDetailedView from './DetailedViews/ExploreWhitepaperDetailedView'
import { useLocation } from 'react-router-dom'

const ExploreWhitepaperDetailedViewPage = () => {
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
            <ExploreWhitepaperDetailedView />
            <BottomGap />
        </div>
    )
}

export default ExploreWhitepaperDetailedViewPage;