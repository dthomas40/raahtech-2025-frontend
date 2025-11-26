import React, { useEffect, useRef, useState } from 'react'
import './HomeStats.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faTasks, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const HomeStats = () => {
    const stats = [
        {
            number: 625,
            suffix: ' million+',
            description: "Identities Managed",
            icon: faUsers
        },
        {
            number: 250,
            suffix: '+',
            description: "Successful IAM Projects",
            icon: faTasks
        },
        {
            number: 8,
            suffix: ' million+',
            description: "Annual Costs Saved",
            icon: faPiggyBank
        },
    ]

    const [counts, setCounts] = useState(stats.map(() => 0))
    const containerRef = useRef(null)
    const intervalRef = useRef(null)

    const startCountUp = () => {
        const duration = 2000
        const frameRate = 30
        const steps = duration / frameRate

        const increments = stats.map(stat => stat.number / steps)

        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setCounts(prevCounts => {
                const updatedCounts = prevCounts.map((count, i) => {
                    const nextCount = count + increments[i]
                    return nextCount >= stats[i].number ? stats[i].number : nextCount
                })

                const done = updatedCounts.every((count, i) => count >= stats[i].number)
                if (done) clearInterval(intervalRef.current)

                return updatedCounts
            })
        }, frameRate)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCounts(stats.map(() => 0))
                    startCountUp()
                } else {
                    clearInterval(intervalRef.current)
                    setCounts(stats.map(() => 0))
                }
            },
            { threshold: 0.3 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div className='HomeStatsContainer' ref={containerRef}>
            <div className='HomeStatsWrapper'>
                {stats.map((stat, index) => (
                    <div className='HomeStatsContent' key={index}>
                        <FontAwesomeIcon icon={stat.icon} className="AboutStatsIcon" />
                        <h3 className='HomeStatsTitle'>
                            {Math.floor(counts[index])}{stat.suffix}
                        </h3>
                        <p className='HomeStatsDescription'>{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeStats
