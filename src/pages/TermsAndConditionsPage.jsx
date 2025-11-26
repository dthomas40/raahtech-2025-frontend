import React from 'react'
import TopGap from '../components/TopGap'
import BottomGap from '../components/BottomGap'
import TermsAndConditionsComponent from './LegalComponents/TermsAndConditionsComponent'

const TermsAndConditionsPage = () => {
    return (
        <div>
            <TopGap />
            <TermsAndConditionsComponent />
            <BottomGap />
        </div>
    )
}

export default TermsAndConditionsPage