import React, { useEffect } from 'react'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import BottomGap from '../components/BottomGap'
import { useLocation } from 'react-router-dom'
import ExploreNewsletterDetailedView from './DetailedViews/ExploreNewsletterDetailedView'

const ExploreNewsLetterDetailedViewPage = () => {
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
            <ExploreNewsletterDetailedView />
            <BottomGap />
        </div>
    )
}

export default ExploreNewsLetterDetailedViewPage;