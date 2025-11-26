import React from 'react'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import BottomGap from '../components/BottomGap'
import SolutionsIndustryDetailedView from './DetailedViews/SolutionsIndustryDetailedView'

const SolutionsIndustryDetailedViewPage = () => {
    return (
        <div>
            <TopGap />
            <SolutionsIndustryDetailedView />
            <BottomGap />
        </div>
    )
}

export default SolutionsIndustryDetailedViewPage