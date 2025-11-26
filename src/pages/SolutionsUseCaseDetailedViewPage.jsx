import React from 'react'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import BottomGap from '../components/BottomGap'
import SolutionsUseCaseDetailedView from './DetailedViews/SolutionsUseCaseDetailedView'

const SolutionsUseCaseDetailedViewPage = () => {
    return (
        <div>
            <TopGap />
            <SolutionsUseCaseDetailedView />
            <BottomGap />
        </div>
    )
}

export default SolutionsUseCaseDetailedViewPage