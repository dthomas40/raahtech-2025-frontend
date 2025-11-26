import React, { useState, useEffect } from 'react';
import "./BreachTimeline.css";
import BreachButtonGraphic from '../../assets/BreachButtonGraphic.png'; // Adjust import path
import CTAArrow from '../../assets/CTA_Arrow.png';

const breaches = [
    {
        year: "2011",
        company: "Sony Network Entertainment",
        description: "In April 2011, Sony's PlayStation Network suffered one of the largest security breaches in gaming history. Hackers gained access to personal data from approximately 77 million user accounts, including names, email addresses, passwords, and possibly credit card information. The service was shut down for over three weeks, and the breach prompted investigations by governments and regulators worldwide."
    },
    {
        year: "2013",
        company: "Yahoo User Accounts",
        description: "In what became the largest data breach in history, Yahoo revealed that all 3 billion of its user accounts had been compromised in a 2013 cyberattack. Stolen information included usernames, email addresses, dates of birth, and hashed passwords. The breach, disclosed in stages between 2016 and 2017, significantly impacted Yahoo's valuation and raised global concerns about online security."
    },
    {
        year: "2015",
        company: "Anthem Health Insurance",
        description: "In early 2015, Anthem, the second-largest health insurer in the U.S., disclosed a data breach that exposed the personal information of nearly 80 million individuals. The stolen data included names, Social Security numbers, dates of birth, and employment details, but not medical or credit card information. The breach was traced to a sophisticated cyberespionage group suspected to be backed by a foreign state."
    },
    {
        year: "2015",
        company: "OPM Federal Records",
        description: "The U.S. Office of Personnel Management (OPM) announced in 2015 that hackers had breached its systems, compromising sensitive records of over 22 million current and former federal employees. The data included security clearance forms, fingerprints, and background check information. The breach was considered a national security risk and attributed to Chinese state-sponsored actors."
    },
    {
        year: "2015",
        company: "Ashley Madison Network",
        description: "In mid-2015, the controversial dating website Ashley Madison was hacked by a group called The Impact Team, which later released over 60 gigabytes of sensitive user data. The breach affected more than 30 million users and included names, emails, credit card transactions, and user preferences. The incident led to widespread public embarrassment, lawsuits, and resignations within the company."
    },
    {
        year: "2017",
        company: "Equifax Credit Bureau",
        description: "In 2017, Equifax, one of the major U.S. credit reporting agencies, suffered a cyberattack that exposed the personal data of 147 million Americans. The stolen information included names, Social Security numbers, birthdates, addresses, and in some cases, driver’s license numbers and credit card data. The breach sparked public outrage and led to congressional hearings, fines, and an eventual settlement of $700 million."
    },
    {
        year: "2018",
        company: "Marriott Hotel Group",
        description: "Marriott International disclosed in 2018 that attackers had accessed the Starwood guest reservation database, compromising data on approximately 500 million guests. The breach had occurred over a four-year period beginning in 2014. Exposed data included passport numbers, phone numbers, reservation details, and some encrypted payment card information."
    },
    {
        year: "2020",
        company: "CAM4 Streaming Platform",
        description: "In March 2020, security researchers discovered an unprotected database belonging to adult live streaming site CAM4, exposing over 10 billion records. The data included usernames, email addresses, IP addresses, chat transcripts, and sexual preferences. Though the company responded quickly to secure the server, the massive leak highlighted growing privacy risks in online adult platforms."
    },
    {
        year: "2022",
        company: "Optus Telecom",
        description: "In September 2022, Optus, one of Australia’s largest telecommunications providers, suffered a cyberattack that impacted the personal data of nearly 10 million customers. The stolen data included names, birth dates, driver’s license numbers, and passport details. The incident sparked national debate about cybersecurity laws and regulatory oversight in Australia."
    },
    {
        year: "2022",
        company: "Shanghai Police Database",
        description: "In July 2022, hackers gained access to a massive Chinese police database containing over 23 terabytes of data on approximately 1 billion citizens. The leak included names, national ID numbers, case records, and contact information. The breach, believed to be the largest ever in terms of individuals affected, raised serious concerns about data security in state-run systems."
    },
    {
        year: "2023",
        company: "23andMe Genetics",
        description: "In late 2023, genetic testing company 23andMe disclosed a breach resulting from credential stuffing attacks. The hackers accessed personal data from nearly 7 million users, including ancestry information and genetic heritage. The leak was particularly alarming because it exposed highly sensitive and immutable data, prompting regulatory scrutiny and lawsuits."
    },
    {
        year: "2025",
        company: "Allianz Life Insurance",
        description: "In July 2025, Allianz Life Insurance reported a data breach affecting around 1.4 million U.S. customers. The attackers gained access through a third-party customer relationship management (CRM) system. Exposed information included names, addresses, policy numbers, and contact details. The breach prompted immediate notification efforts and cooperation with federal authorities."
    }
];

const BreachTimeline = () => {
    const [activeBreach, setActiveBreach] = useState(breaches[0]);
    const [breachCountPerLine, setBreachCountPerLine] = useState(getBreachCount(window.innerWidth));
    const [animateDetail, setAnimateDetail] = useState(false);

    function getBreachCount(width) {
        if (width < 600) return 3;
        if (width < 1200) return 4;
        if (width < 1800) return 5;
        return 6;
    }

    useEffect(() => {
        const handleResize = () => {
            setBreachCountPerLine(getBreachCount(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setActiveBreach(breaches[0]);
        setAnimateDetail(true);
        const timeout = setTimeout(() => setAnimateDetail(false), 600);
        return () => clearTimeout(timeout);
    }, []);

    const handleClick = (breach) => {
        setActiveBreach(breach);
        setAnimateDetail(true);
        setTimeout(() => setAnimateDetail(false), 600); // match your CSS duration
    };

    const groupedBreaches = [];
    for (let i = 0; i < breaches.length; i += breachCountPerLine) {
        groupedBreaches.push(breaches.slice(i, i + breachCountPerLine));
    }

    return (
        <div className='BreachTimeline'>
            <div className='BreachContent'>
                <div className={`BreachYearTag  ${animateDetail ? ' ReusableSlideRight' : ''}`}>
                    <div className='BreachYearContainer'>
                        <span className='BreachYear'>{activeBreach.year.substring(0, 2)}</span>
                        <span className='BreachYear'>{activeBreach.year.substring(2, 4)}</span>
                    </div>
                </div>
                <div className={`BreachDetails ${animateDetail ? 'ReusableFadeUp' : ''}`}>
                    <h2>{activeBreach.year}</h2>
                    <h2>{activeBreach.company}</h2>
                    <p>{activeBreach.description}</p>
                    <button className='BreachDetailsCTA'>See How RAAH Prevents This <img className="BreachDetailsCTAArrow" src={CTAArrow} /></button>
                </div>
            </div>

            {groupedBreaches.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <div className={`BreachLine Line${groupIndex + 1}`} key={groupIndex}>
                        {group.map((breach, index) => (
                            <div
                                className={`Breach Breach${groupIndex * breachCountPerLine + index + 1} ${activeBreach === breach ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleClick(breach)}
                            >
                                <div className='BreachButton' title={`${breach.year}-${breach.company}`}>
                                    <img src={BreachButtonGraphic} alt={`${breach.company} ${breach.year}`} />
                                </div>
                            </div>

                        ))}
                        <div className='BreachLineConnector'>

                        </div>
                    </div>

                </div>

            ))}
        </div>
    );

};

export default BreachTimeline;