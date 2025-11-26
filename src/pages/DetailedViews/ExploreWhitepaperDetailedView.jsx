import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RAAHLogoWithText from "../../assets/RAAHLogoWithText.png";
import './ExploreWhitepaperDetailedView.css';

const whitepapers = [
    {
        id: 'whitepaper-doc-1',
        title: 'THE JOURNEY TO NEXT GEN IAM',
        subtitle: 'Present, Future, and what it means for IAM Experts, IT Gurus, Marketers, and Hackers',
        author: 'TARUN GUHANAND',
        authorTitle: 'Director | Implementation & Delivery',
        email: 'tarun.guhanand@raahtech.com',
        phone: '+1 (412) 889-3324',
        content: (
            <>
                <p className="ExploreWhitepaperComponentParagraph">
                    If you're reading this right now, I can guess, with a strong degree of certainty, who you are on this trajectory of life and what brought you here. Don't believe us? Check out our guesses:
                </p>
                <div className="ExploreWhitepaperComponentFlexContainer">
                    <a href="#identity-pro" className="ExploreWhitepaperComponentCardLink">
                        <div className="ExploreWhitepaperComponentCard">
                            <h4 className="ExploreWhitepaperComponentCardTitle">THE IDENTITY PRO</h4>
                            <p className="ExploreWhitepaperComponentCardDescription">
                                "I'm a seasoned Identity and Access Management professional who has done work at multiple Fortune 500 type firms. Anytime I see something related to IAM, I read it, and either grow my body of knowledge, or scoff at how repetitive some of these articles are."
                            </p>
                        </div>
                    </a>
                    <a href="#jack-of-all-trades" className="ExploreWhitepaperComponentCardLink">
                        <div className="ExploreWhitepaperComponentCard">
                            <h4 className="ExploreWhitepaperComponentCardTitle">THE JACK OF ALL TRADES</h4>
                            <p className="ExploreWhitepaperComponentCardDescription">
                                "...usually I'm running networks and infrastructure, but it looks like identity is becoming the focus at my organization and I've been tasked with working toward revitalizing our IAM program and need a quick guide to get me started."
                            </p>
                        </div>
                    </a>
                    <a href="#hacker-averse" className="ExploreWhitepaperComponentCardLink">
                        <div className="ExploreWhitepaperComponentCard">
                            <h4 className="ExploreWhitepaperComponentCardTitle">THE HACKER AVERSE</h4>
                            <p className="ExploreWhitepaperComponentCardDescription">
                                "The news has been all about hacks and ransomware recently, and I've seen people posting about how Privileged Identity and Access Management can alleviate these concerns. As both a technologist and concerned citizen, can we really be safe from hackers as organizations or as individuals?"
                            </p>
                        </div>
                    </a>
                    <a href="#marketer" className="ExploreWhitepaperComponentCardLink">
                        <div className="ExploreWhitepaperComponentCard">
                            <h4 className="ExploreWhitepaperComponentCardTitle">THE MARKETER</h4>
                            <p className="ExploreWhitepaperComponentCardDescription">
                                "I'm working on the bones of a new digital program to roll out to our customers, and in doing so have been trying to figure out how best to utilize their customer Identity data to extend this new program to them. I need to see how Identity can be leveraged today for a truly omnichannel experience from first contact to loyal customer."
                            </p>
                        </div>
                    </a>
                </div>
                <p className="ExploreWhitepaperComponentParagraph">
                    No matter who you are, Identity and Access Management plays a role in your life. Unless you live under an actual rock (at which point you wouldn't be reading this), it plays a vital role in every aspect of your interactions online, at work, and otherwise. For the purposes of addressing Identity and what it means to a variety of audiences, let's start with the basics.
                </p>

                <section id="what-is-identity" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">WHAT IS AN IDENTITY?</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Put simply, an Identity is a testament to who/what you are either digitally or on paper. Common examples include Birth Certificates, SSNs, Driver's Licenses, Passports, etcetera.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Looking at a Driver's License as the most basic and widely used Identity, DDS validates who you are using your birth certificate, SSN, and other qualifying documents before they issue your license. This is an Identity that represents you as a person, and it is trusted by the general public, so you can use it to drive a car (legally), enter age-restricted establishments, sign up for services like banking, or even to rent an apartment.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        For something to be an acceptable and usable form of Identity, Trust in the issuing agency/body is imperative.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        At your workplace, the moment you are hired, an Identity is created for you in the form of a record in a backend HR system, and in a User Directory. Your use of and access to that record is put behind a username and password combo that allows you to use your identity to do your job in buildings, systems, and services as required.
                    </p>
                </section>

                <section id="what-is-iam" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">WHAT IS IDENTITY AND ACCESS MANAGEMENT?</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        There are many complex pieces to Identity and Access Management, and it comes in a variety of forms across multiple diverse environments, but it still holds true to a basic definition:
                    </p>
                    <blockquote className="ExploreWhitepaperComponentBlockquote">
                        IAM is the process of ensuring that the right people, at the right time, are accessing only what they absolutely must to be able to perform some kind of task/activity.
                    </blockquote>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Identity and Access Management makes it so people can access whatever they need, without the risk of allowing the wrong people access to vast troves of information that could hurt people and organizations.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Now that we covered the basics, to my readers (or my assumption of who my readers are), here are some specifics that address your "identity".
                    </p>
                </section>

                <section id="identity-pro" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">THE IDENTITY PRO: BLOCKCHAIN AND IAM; THE NEW FRONTIER</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        If you read everything addressed to our audiences above, and still feel like you've seen it all before, then I commend you for being a true Identity Pro.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Here at RAAH, we work on the cutting edge of what defines IAM in the modern world, and we see blockchain as the new frontier of Identity and its importance in society.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        It's evident that in a climate fueled by distrust in both the powers that be and in the systems that put them there, a clear need has arisen for a system that is 0 trust and immutable by design. It is not only necessary, but integral to progress. Decentralization is the next step in providing services that have bullet-proof data protections, both for the layman and corporate customer.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">TOKENIZATION OF IDENTITY</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Last year, about 49 million consumers fell victim to identity theft, costing a whopping \$56 Billion to everyday Americans according to the 2021 Identity Fraud Study by Javelin Strategy & Research.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A major issue that Blockchain Solutions address is the tokenization of PII and Private documentation like IDs, Licenses, Biometric Data, Vaccination Records, etc. The idea, and actual practice today, is to utilize a Blockchain Datastore to attest records against an issuing authority, and store them with Digital Identifiers (DIDs) that serve as private key identifiers of that data.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        For use of those documents, Blockchain Datastores would simply share a token that represents both the document and trust from an issuing authority. This circumvents actually sharing PII information, and limiting the places that your documentation is stored, without limiting its use across multiple platforms and services.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The security provided by Blockchain Solutions relies on node consensus to change records, meaning, that for any one record to be altered, node consensus on the record's change must be achieved across a majority of the nodes in the network.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This, in short, provides tracking, auditability, and bullet proof security.
                    </p>
                </section>

                <section id="jack-of-all-trades" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">THE JACK OF ALL TRADES: BUILDING AN IAM PROGRAM</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        If you're reading this because you've just been tasked with building an official IAM program at your organization, but aren't sure where to start, you're in great company.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A good portion of the folks who decided to work with us are tech savvy developers and managers who were elevated to a position in Identity as it pertains to application access and auditing, and have a hard time figuring out where to start.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        We can guide folks through this process with ease, but before we work with anyone we always advocate for doing your homework on the task at hand. As such, we've got a few tips for gauging your situation that really help in drafting your requirements for your new Identity Program below:
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">WORK WITH APPLICATION MANAGERS/LEADS TO UNDERSTAND FUTURE REQUIREMENTS</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        When we build an Identity Solution, we start with what we can see as obvious needs for a client, and engage in discussions that provide future needs/requirements.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Understanding what applications and services are fully in scope, and the time horizon for changes to those applications including replacement, upgrade, or enhancement are key in developing an Identity-Centric Organization.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Identity, specifically authentication, authorization, and governance of privileges are central to an organization's business drivers. Without a good understanding of what is to come, making decisions on products, vendor relationships, and most importantly Identity Processes leads to mistakes with budgetary implications that cause programs to fail.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">FAMILIARIZE YOURSELF WITH THE CURRENT IAM ARCHITECTURE AT YOUR ORGANIZATION</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Most organizations are automating Identity Management in some way or the other, and it is important to understand where you are to really see where you are going.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A good program manager identifies all systems and processes involved in user and machine identity management, including but not limited to:
                    </p>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>HR SYSTEMS AND SOURCES OF TRUTH</li>
                        <li>SERVICE BUSSES AND DATA TRANSFER UTILITIES</li>
                        <li>IDENTITY GOVERNANCE AND ADMINISTRATION TOOLS</li>
                        <li>DIRECTORY ENVIRONMENTS AND THE ENVIRONMENTS THEY SUPPORT</li>
                        <li>ERPS, AND OTHER LARGE USER DATA CONTAINERS</li>
                        <li>FEDERATION AND SSO PRODUCTS CURRENTLY IN USE</li>
                        <li>PRIVILEGED ACCOUNTS AND THEIR REACH (THE MOST IMPORTANT)</li>
                    </ul>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">BUILD/PROCURE A BASIC ROLE MATRIX</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This is a longer process than building a service catalog, and often is where smart people get extremely frustrated when first dipping into an IAM program.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The goal when you first start the process of building a role matrix is to align job function and IT access requirements at a very base level.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        For example, if you have 10000 users at an organization, with 10 different user types, you can begin to understand what roles are required for those 10 user types based on their job functions and common accesses held between them.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">BUILD YOUR APP/SERVICE INVENTORY</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Start with a service catalog, or any list you can find that will mostly cover the list of applications and services that are offered to you and your fellow employees at your organization.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This will allow for a clear-cut understanding of all the touchpoints your new Identity organization will have, and where your efforts will need to be concentrated in terms of integrations and security requirements.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Ideally this list covers application/service name, function, active users, and current authentication/authorization frameworks used (federation, local credential combo, etc). This will also allow you to score services based on perceived/actual risk and priority, and will allow you to target those accordingly in building out your Identity models.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        If all 10000 users irrespective of type have access to 3 applications, then you can safely say that a role that grants access to those 3 apps can be assigned to those 10000 users. Of course, granularity to what each of the 10 user types sees/does in those apps makes this a far more complicated process, but identifying the glaring commonalities and differences is a solid start toward this.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">SEEK SUPPORT FROM DEPARTMENT HEADS</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        As with anything in life, nothing ever gets done right in a silo. Identity Programs are central to an organization because they are involved in every part of it. Working with the right folks to spearhead a project like this is integral to its success.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Your application managers, department heads, and business associates that rely on identity for services and for growing the business are your best friends in an effort to build an identity program, as they are the main consumers of a successful IAM program, both internally and externally.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        We cannot stress this enough, but IAM programs fail when you don't have buy-in from your cohorts who will adhere to and enforce Identity policies and processes that you put in place. It is your job to make sure they understand the value of the program, and that they are as excited as you are for the changes that come with it.
                    </p>
                </section>

                <section id="hacker-averse" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">THE HACKER AVERSE: PRIVILEGED IDENTITY AND ACCESS MANAGEMENT</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The news is an excellent resource for why Privileged Identity and Access Management (PAM) should be central to any security organization, and not an afterthought to Network or Firewall Security.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Any service that leverages an Account to perform a function, which is most if not all well-built services in existence that require a permission to perform a task, should have strong PAM behind it. When we don't treat high-privilege accounts with the respect they deserve, they go from being a business enabler to a liability of astronomical proportions.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        In short, to prevent credential-based hacks, leaked customer information, or the loss/ransom of company data and systems, PAM is integral to your IT infrastructure. Some basic, yet frequently overlooked aspects of PAM are:
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">0-TRUST, LEAST PRIVILEGE PHILOSOPHY</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Before using any tool, PAM or otherwise, organizations MUST buy in to the 0-trust philosophy, and make a commitment to building security operations and processes around giving users as little privilege as possible to do their jobs.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Before looking at any PAM solution, an organization should align its core business units and departments with this philosophy, so that the understanding of the coming changes is clear, and the reasons for which are understood and endorsed by the organization as a whole.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        You can purchase the most expensive and well-structured tool on the market, but none of it matters when stakeholders are not educated on the need, benefits, and plan for implementing PAM in your organization.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">MODERN PASSWORD MANAGEMENT</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        While complex passwords certainly make it harder to crack into a privileged system, the strength of a password doesn't prevent insider threat.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Even though Roadrunner knew that Wile E. Coyote could never catch him, he didn't just stand still. As idiotic as that metaphor seems, your passwords should be the same way. When passwords are complex, but stand still, they become easy targets.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        An enterprise level password management solution within a PAM suite should generate random passwords, rotate them after each use/in between uses as well, and have a detailed audit trail on the password, as well as the account that it is linked to.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">INTEGRATION WITH DIRECTORIES AND PASSWORD STORES</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A PAM solution must be built with the modern enterprise in mind, and should have strong directory integrations with Active Directory and other common use User Directories that store hashed passwords.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Security should be an enabler, and not a manual process that bogs down valuable resources to reset/rotate passwords.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This means that ALL Privileged Accounts and their passwords in your directories must by synced, managed, and audited from your PAM suite, which by nature implies continuous security and auditing of Privileged accounts, with zero downtime for password management and vaulting.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">MANAGE EVERY TYPE OF ACCOUNT</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Privileged Access Management solutions should be selected based not only on the ability to rotate passwords and integrate with directories, but also based on their ability to integrate with diverse systems that require varying security controls.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The modern PAM solution should be able to manage Service Accounts, Application Accounts, Domain Admin Accounts, Application/Service specific Accounts, and much more.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Today, not every enterprise uses Active Directory as a central store of rights and privilege. This data is often dispersed and delegated outside the AD domain. It is imperative to manage those accounts from both the domain and service specific perspectives.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">SELF-AUDIT AND DISCOVERY CAPABILITY</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The ability to help yourself is important for building a PAM program that lasts. In selecting a PAM solution, make sure to look out for Self-Audit capability that tells you where your biggest security threats are.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Many PAM vendors, through no fault of their own, build strong products that do the job they were designed to, but don't account for the fact that sometimes clients need help figuring out where the accounts that pose the largest threat exist in their ecosystem.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Many PAM and Identity Governance and Administration (IGA) products today come with scanning solutions that allow you to parse directories and other stores of account data to identify those accounts that pose significant threat. The solution scores it based on either pre-established or industry templated criteria that allow Security Minds to make decisions on the administration of those accounts.
                    </p>
                </section>

                <section id="marketer" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">THE MARKETER: CUSTOMER IDENTITY AND ACCESS MANAGEMENT (CIAM)</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        I won't bore you with the value of a seamless UX and CX for customers who interact with you digitally, or the benefit of feeding Customer Identity data from your front-end applications to your backend marketing systems. You already know that, its who you are and what you do.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        I WILL however speak to Customer Identity Management and the importance of looking at it with a plan that prepares you for the next 5-10 years.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        If you are rolling out a variety of digital programs, and want to build single, unified user profiles that can access those services with one user Identity, it is imperative that your Identity Management Team is working with a tool that offers the following out of the box:
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">REGISTRATION AS A SERVICE (INCLUDING SOCIAL MEDIA SIGN INS)</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Robust CIAM Solutions should have the functionality to build customer registration screens that are unique to every application or service you offer to your customers.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This is the front door to your digital experiences, and it should be collecting as much or as little information as possible to curate that experience seamlessly for your customer.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        It is important to allow users to utilize their social provider profiles to use your service as well, allowing for passthrough authentication and trust with those providers to allow users to leverage social media accounts with your service. This provides richer profiles downstream, as well as ease of use for your customers.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">ONE CUSTOMER PROFILE, MULTIPLE APPLICATIONS</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A modern CIAM solution should allow for users to use one identity/login credential to access all your services or applications.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This means having a user directory that is built into the solution that can be utilized to authenticate and authorize users to access a multitude of services, and can be scaled to meet new development and customer engagement opportunities.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">PERFORMANCE, SCALABILITY, AND SECURITY</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        This may seem obvious, but handling high-load customer environments means being able to perform seamlessly with millions of users every second of every day.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        On top of that, a solid CIAM solution should be able to scale as your business grows, and be able to handle heightened user load when you run promos or other programs.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A smart CIAM solution also provides DDoS and endpoint security, as well as a strong security footing to the environments that the solution is hosted on, and to accessing the solution itself to administer your users.
                    </p>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">INTEGRATION AND FEATURE RICH</h4>
                    <p className="ExploreWhitepaperComponentParagraph">
                        A complete CIAM solution should have integrations to most, if not all, downstream Marketing and Automation platforms. Inherently, the solution should also adhere to open data standards to port user data into homegrown applications and services that help better serve customers.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        If your goals are also to build customer loyalty programs and to engage with customers through gamification or other means, you
                    </p>
                </section>

                <section id="conclusion" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">CONCLUSION</h3>
                    <div className="ExploreWhitepaperComponentImageContainer">
                        <img
                            src={RAAHLogoWithText}
                            alt="RAAH Technologies Logo Placeholder"
                            className="ExploreWhitepaperComponentImage"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/cccccc/000000?text=Image+Not+Found"; }}
                        />
                    </div>
                    <p className="ExploreWhitepaperComponentParagraph">
                        The Applications for Identity, specifically Blockchain Identity Solutions are endless. From creating bulletproof voting systems that are reliable and highly accessible, to improving supply chains and customer experiences utilizing smart contracts and digital identity tokenization, we are truly in a new era of Identity. These breakthroughs and innovations will redefine how we do business, how we pay for services, and how we look at the future and the world around us.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Hopefully, we were able to pique your interest in some way, and get you thinking about IAM differently, or at least provide an insightful and unique perspective. We would love to answer any questions you may have, and continue discussion around anything Identity, so please reach out! This field is always growing and we love furthering the dialogue around where the next frontier lies.
                    </p>
                </section>
            </>
        ),
        sections: [
            { id: 'introduction', title: 'INTRODUCTION' },
            { id: 'what-is-identity', title: 'WHAT IS AN IDENTITY?' },
            { id: 'what-is-iam', title: 'WHAT IS IDENTITY AND ACCESS MANAGEMENT?' },
            { id: 'identity-pro', title: 'THE IDENTITY PRO: BLOCKCHAIN AND IAM; THE NEW FRONTIER' },
            { id: 'jack-of-all-trades', title: 'THE JACK OF ALL TRADES: BUILDING AN IAM PROGRAM' },
            { id: 'hacker-averse', title: 'THE HACKER AVERSE: PRIVILEGED IDENTITY AND ACCESS MANAGEMENT' },
            { id: 'marketer', title: 'THE MARKETER: CUSTOMER IDENTITY AND ACCESS MANAGEMENT (CIAM)' },
            { id: 'conclusion', title: 'CONCLUSION' },
        ]
    },
    {
        id: 'whitepaper-doc-2',
        title: 'Identity Provider Data Migration',
        subtitle: 'A guide to seamlessly migrating your user authentication data',
        author: 'RAAH TECHNOLOGIES',
        authorTitle: 'Identity & Access Management Experts',
        content: (
            <>
                <section id="overview" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">OVERVIEW</h3>
                    <p className="ExploreWhitepaperComponentParagraph">
                        Opting for a cloud-based IaaS (Identity as a Service) for your B2C and/or B2B applications is fiscally responsible as it yields good returns on your investment. IaaS allows the possibility of onboarding your B2B/B2C applications with industry-standard authentication protocols like SAML 2.0, OAuth2.0, OIDC, JWT, etc. From a financial point of view, removing the need to manage your own IdP on-premise is cost-effective. Other perks include the ease of progressive profiling, and modernized standards that support passwordless login, biometrics, and MFA, all of which can be triggered via rules and hooks that enforce your authentication and authorization policies. A switch is undoubtedly a smart business move; however, the nature of such projects requires heavy lifting. This means they are complex, and the moving parts must be precisely executed for such a job to be done accurately. This is especially true for migrating user's authentication data to an IdP. This data should consist primarily of the user's username and passwords. The data migration can vary from a couple of thousand to millions of "insert proper word" depending on the size of your users. User's authentication data is sensitive in nature and any leak or loss of such data can lead to mayhem. When it comes to the process of migrating such data, you have the option to do it the lazy way, or via a bulk one-shot migration. There are also methods of data migration that keep the same user passwords, thus removing the need for resets or logouts, both things that can lead to loss of business. Upcoming parts of this paper will discuss any additional data or accompanying attributes you might want to migrate.
                    </p>
                    <p className="ExploreWhitepaperComponentParagraph">
                        All this being said, when it comes to data migrations, cutting corners is very risky. The good news is, RAAH Technologies is here for you. We are in the business of making sure your business needs are served, and we pride ourselves on paving the way forward for your business goals. With dozens of years of knowledge and insights, and an extensive team of experts, our company can provide a seamless data migration. This whitepaper is intended to provide you with a base-level understanding of the various moving parts of how data migration works and to offer enough information to make you feel confident in kickstarting data migration conversation at your business. And when the need arises, we are here to answer any questions you may have about this or any other services you may need.
                    </p>
                </section>

                <section id="why-migrate" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">WHY MIGRATE YOUR IDP DATA?</h3>
                    <p className="ExploreWhitepaperComponentParagraph">The following are a list of common reasons why businesses like yours move to IaaS:</p>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>You need a fully cloud based managed IaaS</li>
                        <li>Compliance</li>
                        <li>Utilize various advantages and ease of implementation of modern identity blocks</li>
                        <li>Separately manage user's authentication and authorization data with business data</li>
                        <li>You need a scalable solution, like IaaS, for your growing business and user base</li>
                        <li>Ease of license management for B2B and B2C domains</li>
                        <li>Seamless securing of your homegrown applications, third-party applications, APIs, services, micro-services, etc.</li>
                    </ul>
                </section>

                <section id="identify-idp-data" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">IDENTIFY YOUR IDP DATA</h3>
                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">Authentication Data</h4>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>The user's authentication data</li>
                        <li>Helps identify the user to the identity provider for authentication</li>
                        <li>Other common data: Username/email, password, MFA (Multi-Factor Authentication) data like a phone number</li>
                        <li>Any other data related to the user's identification</li>
                    </ul>
                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">Additional Data</h4>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>The rule of thumb is that IdP should not have any additional data other than the ones required by your application in addition to username and password for user identification</li>
                        <li>Examples of such attributes are: Customer ID (B2C), Vendor/Partner ID (B2B), First Name and Last Name</li>
                        <li>Adding too many attributes into the IdP can have negative effects, such as bogging down the authentication and authorization process in the long run</li>
                        <li>A proper design of data flow for authentication between the application(s) and IdP is crucial for database security. A smart design relies on machine-to-machine authentication by having any additional data that is not related to the user's identity, but is still needed for authentication be retrieved from an external database for the application usage keyed with user's ID</li>
                        <li>Perform an exercise with your necessary teams to generate and understand your user schema and user data blow between the IdP and your application(s)</li>
                        <li>RAAH Technologies can architect a system that is secured, efficient, and scalable. This pertains to both user authentication and authorization for your much needed application(s).</li>
                    </ul>
                </section>

                <section id="migration-strategies" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">MIGRATION STRATEGIES</h3>
                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">Migration the Lazy Way</h4>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>This refers to a migration strategy where you do not actually move your users to the new IdP, but instead you have your current user database or IdP connected to your IaaS IdP</li>
                        <li>This requires custom scripts for connections and for mapping the user identities from your existing DB to the schema of your new IaaS IdP</li>
                        <li>On the front end, your new IaaS is authenticating your applications, while on the back end, your current database is working where your new IdP does a lookup with the scripts you have written</li>
                        <li>When users start signing in for the first time with the new IaaS, this new IdP performs a user lookup in the connected old database or old IdP and authenticates the user</li>
                        <li>In addition to a first-time authentication, this process also migrates the user into its own schema and creates a copy of this user</li>
                        <li>This process can be thought of as a lazy migration due to how the users migrate via the sign in with the new IdP</li>
                        <li>Once the above is done for any user, that user has a record in the new IdP and therefore the IdP does not need to perform a lookup</li>
                        <li>The benefit of using such migration is that your user identities are seamlessly handled between the two IdPs, and that you do not have to worry about any data extraction, transformation, or loading into the new IdP</li>
                        <li>However, this approach takes a significant amount of time to perform because the entire migration is dependent on the end users, and handling user data in files can be vulnerable if not handled securely</li>
                        <li>Users often do not even realize there is a new IdP in place because the user schema stays the same</li>
                        <li>The biggest danger for such a data migration arises from a poorly planned, designed, and implemented execution</li>
                        <li>RAAH Technologies is perfectly equipped to handle such data migration processes for your company, with a successful track record of millions of user identity records migrated, and a team of very technically skilled individuals that can minimize project errors and risk</li>
                    </ul>

                    <h4 className="ExploreWhitepaperComponentSubSectionHeading">Bulk Migration (The Crazy One)</h4>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>Here at RAAH Technologies, we call the process of bulk migration the Crazy One because of the daunting nature of what it entails</li>
                        <li>Bulk migration refers to a migration of all user identities into the new IdP all at once before you even open the new IdP for your users to sign in with</li>
                        <li>This type of bulk migration has a full-fledged ETL process that follows in the lines of Extract data from an old IdP, Transform the data to the schema or files supported by the new IdP (CSV to JSON), and lastly Load the data into the new IdP</li>
                        <li>Due to the sensitive nature of such data, the extraction must be handled carefully, and the data must be stored securely in whatever way you deem fit: secure file server, secure staging database, etc.</li>
                        <li>This data also includes user's passwords which you should never have as plain text, but rather, should always be encrypted with encryption algorithms such as: bycrypt, sha256, sha512, md4, md5. etc.</li>
                        <li>When undergoing bulk data migrations for data sizes of 10k and up to 50k records, we recommend file-based transfers</li>
                        <li>When undergoing bulk data migrations for data sizes of more than 50k records, we recommend having a staging table and that you write scripts to put the data in that staging table from the old IdP while having separate scripts to push this data to the new IdP from this staging table</li>
                    </ul>
                </section>

                <section id="raahs-way" className="ExploreWhitepaperComponentWrapperMainContentSection">
                    <h3 className="ExploreWhitepaperComponentWrapperMainContentSectionHeading">RAAH'S WAY FOR MIGRATION</h3>
                    <ul className="ExploreWhitepaperComponentParagraphList">
                        <li>RAAH Technologies can offer help in strategizing and creating your design and planning for such a project</li>
                        <li>We do all the work and handle the entire process: number of users, migration strategies, user schema, product compatibility, and custom recommendations</li>
                        <li>Sadly, there is no one size fits all for user's data migration, and this is where we can come in and shine- helping you design a custom migration strategy that meets your specific needs</li>
                        <li>In addition to helping, you create a low-risk migration strategy, RAAH Technologies can also work with you to plan out the entire execution</li>
                        <li>This means that you will get a clear view on how your user data will be moved in your enterprise environment and what infrastructure is needed to handle user data</li>
                        <li>And this means you will also understand how data is handled while in transit and on rest, all while we do a full ETL for your company</li>
                        <li>Once your ETL is finalized, we will deploy it and help you with your migration of users from your on-prem and user database, to your new IaaS</li>
                        <li>Our process is state of the art, which means we deploy migration blocks Like encryption, automated batch processes, custom scripts for handing different parts of the migration, etc.</li>
                        <li>In other words, we can act like a one stop shop for all of your user identity migration needs</li>
                        <li>Moreover, since the user data is your and generally sensitive/privileged data, we follow a process that meets compliance requirements due to the safe nature of handing such data</li>
                        <li>Lastly, we are easy to work with and understand that sometimes we need to let you take charge, which means that our role shifts to advisors, guiding you to do what needs to be done, so that such sensitive data and its migration is handled in house</li>
                    </ul>
                </section>
            </>
        ),
        sections: [
            { id: 'overview', title: 'OVERVIEW' },
            { id: 'why-migrate', title: 'WHY MIGRATE YOUR IDP DATA?' },
            { id: 'identify-idp-data', title: 'IDENTIFY YOUR IDP DATA?' },
            { id: 'migration-strategies', title: 'MIGRATION STRATEGIES' },
            { id: 'raahs-way', title: 'RAAH\'S WAY FOR MIGRATION' },
        ]
    },
];

const ExploreWhitepaperDetailedView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedWhitepaperId, setSelectedWhitepaperId] = useState(whitepapers[0].id); // Default to the first whitepaper

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const idFromUrl = pathSegments[pathSegments.length - 1];

        const foundWhitepaper = whitepapers.find(wp => wp.id === idFromUrl);

        if (foundWhitepaper) {
            setSelectedWhitepaperId(idFromUrl);
        } else {
            navigate(`/whitepaper/${whitepapers[0].id}`, { replace: true });
            setSelectedWhitepaperId(whitepapers[0].id);
        }
    }, [location.pathname, navigate]);

    const currentWhitepaper = whitepapers.find(wp => wp.id === selectedWhitepaperId);

    const handleWhitepaperChange = (id) => {
        navigate(`/explore/whitepapers/${id}`);

        document.querySelector('.ExploreWhitepaperComponentWrapperMainContent').scrollTo(0, 0);
    };

    const handleClose = () => {
        navigate('/explore');
    };

    if (!currentWhitepaper) {
        return <div className="ExploreWhitepaperComponentContainer">Loading whitepaper...</div>; // Or a more elaborate loading/error state
    }

    return (
        <div className="ExploreWhitepaperComponentContainer">
            <header className="ExploreWhitepaperComponentIntroHeader">
                <div className="ExploreWhitepaperComponentIntroHeaderContent">
                    <div className="ExploreWhitepaperComponentTitleRow">
                        <h1 className="ExploreWhitepaperComponentIntroTitle">{currentWhitepaper.title}</h1>
                        <button className='ExploreWhitepaperComponentIntroCloseButton' onClick={handleClose} aria-label="Return to Solutions">
                            <svg
                                className="ExploreWhitepaperComponentIntroCloseArrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            <p>Return to Explore</p>
                        </button>
                    </div>
                    <h2 className="ExploreWhitepaperComponentIntroSubtitle">{currentWhitepaper.subtitle}</h2>
                    <p className="ExploreWhitepaperComponentIntroAuthor">By: {currentWhitepaper.author}</p>
                    <p className="ExploreWhitepaperComponentIntroAuthor">{currentWhitepaper.authorTitle}</p>
                </div>
            </header>

            <div className="ExploreWhitepaperComponentWrapper">
                <aside className="ExploreWhitepaperComponentWrapperSidebar">
                    <h4 className="ExploreWhitepaperComponentWrapperSidebarTitle">Whitepapers</h4>
                    <nav>
                        <ul className="ExploreWhitepaperComponentWrapperSidebarNavList">
                            {whitepapers.map((wp) => (
                                <li key={wp.id}>
                                    <button
                                        onClick={() => handleWhitepaperChange(wp.id)}
                                        className={`ExploreWhitepaperComponentWrapperSidebarNavListItem ${selectedWhitepaperId === wp.id ? 'active' : ''}`}
                                    >
                                        {wp.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {currentWhitepaper.sections && (
                        <>
                            <h4 className="ExploreWhitepaperComponentWrapperSidebarTitle ExploreWhitepaperComponentWrapperSidebarTitleSub">In this topic</h4>
                            <nav>
                                <ul className="ExploreWhitepaperComponentWrapperSidebarNavList">
                                    {currentWhitepaper.sections.map((section) => (
                                        <li key={section.id}>
                                            <a href={`#${section.id}`} className="ExploreWhitepaperComponentWrapperSidebarNavListItem">{section.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </>
                    )}
                </aside>

                <main className="ExploreWhitepaperComponentWrapperMainContent">
                    {currentWhitepaper.content}
                    <footer className="ExploreWhitepaperComponentWrapperFooterSection">
                        <div className="ExploreWhitepaperComponentWrapperFooterSectionContent">
                            <p className="ExploreWhitepaperComponentWrapperFooterSectionText">By: {currentWhitepaper.author}</p>
                            <p className="ExploreWhitepaperComponentWrapperFooterSectionText">{currentWhitepaper.authorTitle}</p>
                            {currentWhitepaper.email && (
                                <p className="ExploreWhitepaperComponentWrapperFooterSectionText">{currentWhitepaper.email}</p>
                            )}
                            {currentWhitepaper.phone && (
                                <p className="ExploreWhitepaperComponentWrapperFooterSectionText">{currentWhitepaper.phone}</p>
                            )}
                            <p className="ExploreWhitepaperComponentWrapperFooterSectionText">Follow us @RAAHTech</p>
                            <p className="ExploreWhitepaperComponentWrapperFooterSectionCopyrightText">&copy; 2024 RAAH Technologies, All Rights Reserved.</p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default ExploreWhitepaperDetailedView;
