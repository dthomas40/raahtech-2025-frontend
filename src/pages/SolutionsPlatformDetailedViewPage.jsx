import React from 'react'
import TopGap from '../components/TopGap'
import PageDivider from '../components/PageDivider'
import BottomGap from '../components/BottomGap'
import SolutionsPlatformDetailedView from './DetailedViews/SolutionsPlatformDetailedView'

const SolutionsPlatformDetailedViewPage = () => {
    return (
        <div>
            <TopGap />
            <SolutionsPlatformDetailedView />
            <BottomGap />
        </div>
    )
}

export default SolutionsPlatformDetailedViewPage