import React, { useState, useEffect, useCallback } from 'react';
import "./BreachTimeline.css";
import BreachButtonGraphic from '../../assets/BreachButtonGraphic.png';
import CTAArrow from '../../assets/CTA_Arrow.png';

const breaches = [
  {
    year: "2017",
    company: "Equifax",
    description:
      "Between May and July 2017, an unpatched Apache Struts flaw (CVE-2017-5638) on a public app enabled remote code execution. Attackers moved laterally, found plaintext credentials, pivoted across databases, and exfiltrated extensive PII. An expired TLS inspection certificate delayed detection, extending dwell time. Roughly 147.9M U.S. consumers were affected; the breach drove leadership changes, congressional scrutiny, and a record settlement, underscoring the importance of patch governance, secrets hygiene, and reliable monitoring.",
    raah: [
      { categoryTitle: "Patch & Vuln Governance", categoryDescription: "Closed-loop remediation of critical CVEs with ownership, SLAs, and verification." },
      { categoryTitle: "IAM/IGA Hygiene", categoryDescription: "Encrypt credentials, enforce least privilege, and conduct entitlement reviews." },
      { categoryTitle: "PAM + Secrets", categoryDescription: "Vaulted, rotated secrets with JIT access and session monitoring for database/admin access." },
      { categoryTitle: "TLS Inspection Reliability", categoryDescription: "Automated cert renewal to preserve outbound visibility and DLP controls." },
      { categoryTitle: "Zero-Trust Segmentation", categoryDescription: "Isolate public web tiers from sensitive data stores; restrict east-west movement." },
      { categoryTitle: "Anomaly Detection", categoryDescription: "UEBA for high-volume queries and off-hours data pulls." }
    ]
  },
  {
    year: "2019",
    company: "SolarWinds Orion Supply-Chain",
    description:
      "Nation-state operators compromised build infrastructure and inserted the SUNBURST backdoor into signed Orion updates distributed to 18k+ customers. After installation, the malware used stealthy C2 and token theft (SAML/OAuth) to move laterally and elevate privileges. The campaign persisted for months and impacted government and enterprise networks globally, emphasizing CI/CD hardening, artifact attestation, strict separation of build and prod, and identity monitoring for token abuse.",
    raah: [
      { categoryTitle: "CI/CD Security", categoryDescription: "MFA, credential vaulting, and rotation for build systems; hardened pipelines." },
      { categoryTitle: "Build Verification", categoryDescription: "SBOMs, artifact attestation, and anomaly checks pre-release." },
      { categoryTitle: "Token Governance", categoryDescription: "Short-lived tokens with monitoring for unusual reuse/cross-env use." },
      { categoryTitle: "Least Privilege & Segmentation", categoryDescription: "Isolate build from prod; restrict update deployment blast radius." },
      { categoryTitle: "Identity Monitoring", categoryDescription: "UEBA to detect suspicious credential/token activity." }
    ]
  },
  {
    year: "2019",
    company: "Canva",
    description:
      "In May 2019, a breach exposed ~139M accounts, including usernames, emails, and some bcrypt-hashed passwords; OAuth tokens for ~78M social-login accounts were also affected. The dataset resurfaced in 2024 collections, prompting renewed resets and monitoring. The case illustrated long-tail breach risk, third-party OAuth token hygiene challenges, and the value of continuous credential screening against emerging dumps.",
    raah: [
      { categoryTitle: "CIAM: MFA Everywhere", categoryDescription: "Offer/require MFA for password and social-login paths." },
      { categoryTitle: "Data Encryption & Isolation", categoryDescription: "Encrypt sensitive data at rest and segment access to user DBs." },
      { categoryTitle: "OAuth Token Hygiene", categoryDescription: "Short-lived tokens, regular rotation/revocation, limited scopes." },
      { categoryTitle: "Anomaly Detection", categoryDescription: "Monitor for bulk DB reads/exports and unusual access." },
      { categoryTitle: "Credential Hygiene", categoryDescription: "Block breached passwords and force resets when needed." }
    ]
  },
  {
    year: "2021",
    company: "Colonial Pipeline",
    description:
      "On May 7, 2021, ransomware actors accessed the IT network through a single legacy VPN account without MFA. Business systems were encrypted, operations were halted proactively, and a $4.4M ransom was paid (partially recovered later). The disruption affected fuel distribution across the U.S. East Coast and revealed gaps in remote access controls, network segmentation between IT/OT, and detection of credential misuse.",
    raah: [
      { categoryTitle: "MFA for Remote Access", categoryDescription: "Require MFA on all VPN and remote entry points; block legacy profiles." },
      { categoryTitle: "IGA: Account Hygiene", categoryDescription: "Identify and disable unused/stale accounts; continuous recertification." },
      { categoryTitle: "Network Segmentation", categoryDescription: "Isolate OT from IT; restrict lateral movement post-VPN." },
      { categoryTitle: "Threat Detection", categoryDescription: "Monitor login anomalies and bulk encryption/file movement." }
    ]
  }, {
    year: "2022",
    company: "Uber",
    description:
      "On Sep 15, 2022, an attacker social-engineered a third-party contractor and used MFA fatigue to obtain VPN access. Inside, they found hard-coded credentials in internal PowerShell scripts and reached the PAM vault (Thycotic), escalating to domain admin. The intruder accessed Slack, Google Workspace, AWS, Duo, and other systems, viewing internal dashboards and communications. Uber reported no sensitive customer data exposure, but internal tools were disrupted, law enforcement was engaged, and the incident underscored risks in vendor device security, vault hygiene, and secrets sprawl.",
    raah: [
      { categoryTitle: "Phishing-Resistant MFA", categoryDescription: "Enforce FIDO2/WebAuthn and push-fatigue throttling with anomaly triggers to stop Duo prompt bombing." },
      { categoryTitle: "Secrets Management", categoryDescription: "Eliminate hard-coded credentials; use dynamic secrets and vault policies with least scope." },
      { categoryTitle: "PAM Controls", categoryDescription: "Just-in-time elevation, session recording, vault segregation, and approval workflows for admin access." },
      { categoryTitle: "Zero Trust Segmentation", categoryDescription: "Constrain post-VPN traversal and Slack/SSO reach via identity-aware segmentation and policy enforcement." },
      { categoryTitle: "Behavioral Monitoring", categoryDescription: "Detect unusual push activity, new admin grants, and lateral movement across SSO targets." },
      { categoryTitle: "Security Awareness", categoryDescription: "Train workforce to report MFA fatigue and unexpected prompts immediately." }
    ]
  },
  {
    year: "2022",
    company: "LastPass Vault Breach",
    description:
      "From Dec 2022 to Feb 2023, attackers compromised a DevOps engineer’s home workstation, captured credentials, and reached corporate backups. They obtained decryption keys and exfiltrated encrypted customer vault data plus plaintext metadata (URLs, company names, emails, IPs). The incident emphasized endpoint hardening for privileged staff, vault segmentation, rapid key rotation, and rigorous monitoring of backup retrieval and decryption activities.",
    raah: [
      { categoryTitle: "Endpoint Security (EDR)", categoryDescription: "Lock down DevOps/support endpoints; prevent RCE/keylogging." },
      { categoryTitle: "Hardware-Backed MFA", categoryDescription: "Use FIDO2/smartcards to mitigate credential capture." },
      { categoryTitle: "Vault Segmentation", categoryDescription: "Separate engineer vs. customer vault scopes; limit backup access." },
      { categoryTitle: "Key Management & Rotation", categoryDescription: "Rotate master/decryption keys post-incident and on schedule." },
      { categoryTitle: "Access Monitoring", categoryDescription: "Alert on backup retrieval and mass decryption attempts." }
    ]
  },
  {
    year: "2022",
    company: "Okta – Third-Party Support Access",
    description:
      "In Jan 2022, a Sitel support engineer’s laptop was compromised, granting access to Okta internal support tools used for password resets and token generation. Roughly 2.5% of customers were potentially impacted; disclosure in March drew criticism over communication cadence. The case reinforced vendor endpoint requirements, granular JIT access for support personnel, and real-time oversight of high-risk support capabilities across tenant environments.",
    raah: [
      { categoryTitle: "JIT Privileged Access", categoryDescription: "Time-bound elevation with justification/approval for support roles." },
      { categoryTitle: "Session Recording & Oversight", categoryDescription: "Record support tool usage; real-time alerting for risky actions." },
      { categoryTitle: "Vendor Endpoint Controls", categoryDescription: "EDR, patch/health attestation, and app allow-listing for third-party devices." },
      { categoryTitle: "Zero-Trust for Vendors", categoryDescription: "Isolate customer tenants; grant access explicitly and minimally." },
      { categoryTitle: "Behavior-Based Detection", categoryDescription: "Flag access to many tenants or unusual password resets." },
      { categoryTitle: "Rapid Customer Comms", categoryDescription: "Mandatory 24–48h incident notifications and playbooks." }
    ]
  },
  {
    year: "2023",
    company: "Informatica MOVEit",
    description:
      "In May 2023, attackers exploited CVE-2023-34362 in MOVEit Transfer, using unauthenticated SQL injection to deploy a web shell and create persistence. They stood up new admin accounts, scheduled data exfiltration, and pulled files from the GCS support environment as part of a broader campaign. Core platforms and production systems were not impacted, but third-party file transfer exposure forced rapid containment, patching, and customer notifications, highlighting the systemic risk of shared file-transfer infrastructure and vendor-facing admin surfaces.",
    raah: [
      { categoryTitle: "Strong IAM & Step-Up", categoryDescription: "MFA enforcement for admin actions with RBAC/ABAC and step-up verification on sensitive operations." },
      { categoryTitle: "PAM Gatekeeping", categoryDescription: "Vault credentials, JIT access, session recording, and command gating for admin interfaces." },
      { categoryTitle: "IGA Governance", categoryDescription: "Lifecycle controls for who can access admin portals and when; regular access reviews." },
      { categoryTitle: "Identity-Based Detection", categoryDescription: "UEBA alerts for new privileged account creation and anomalous behavior." },
      { categoryTitle: "Zero-Trust Architecture", categoryDescription: "Segment admin services and expose them behind identity-aware proxies/policies." }
    ]
  },
  {
    year: "2023",
    company: "Reddit",
    description:
      "In Feb 2023, employees were phished and tricked into approving 2FA prompts, giving attackers access to internal business systems. They viewed dashboards, code repositories, Slack, and limited advertiser data, then later attempted extortion by threatening to leak ~80GB. No production authentication systems were compromised, but the incident exposed gaps in employee phishing resilience, token relay defenses, and internal privilege segmentation across developer tools.",
    raah: [
      { categoryTitle: "Phishing-Resistant MFA", categoryDescription: "Move from SMS/OTP to FIDO2; block token relay/phish kits." },
      { categoryTitle: "Security Training + Simulations", categoryDescription: "Continuous phishing drills and just-in-time education." },
      { categoryTitle: "Least Privilege & Segmentation", categoryDescription: "Minimize internal entitlements and segment access to code and dashboards." },
      { categoryTitle: "PAM for Internal Tools", categoryDescription: "JIT elevation with session monitoring for sensitive consoles." },
      { categoryTitle: "UEBA & DLP", categoryDescription: "Detect unusual repo/dashboard access and bulk exfiltration." }
    ]
  }, {
    year: "2023",
    company: "23andMe",
    description:
      "In Oct 2023, automated credential stuffing compromised ~14k user logins; data linkage via DNA Relatives/Family Tree features expanded exposure to ~7M profiles. Leaked datasets included names, birth years, ancestry and relationship inferences, prompting regulatory scrutiny and fines. The breach highlighted dependence on customer password hygiene, the amplification risk of cross-account features, and the need for adaptive controls and bot defenses in consumer identity flows.",
    raah: [
      { categoryTitle: "CIAM: MFA + Bot Mitigation", categoryDescription: "Enforce MFA; rate-limit and block automated login traffic." },
      { categoryTitle: "Breached Password Screening", categoryDescription: "Block reused/compromised credentials at login and on change." },
      { categoryTitle: "Feature Access Gating", categoryDescription: "Step-up auth for cross-account data features like DNA Relatives." },
      { categoryTitle: "Scrape Detection", categoryDescription: "Detect mass traversal/export across linked profiles." },
      { categoryTitle: "User Alerts", categoryDescription: "Notify on suspicious logins and new device sign-ins." }
    ]
  },
  {
    year: "2023",
    company: "Roku",
    description:
      "From Dec 2023 through Feb 2024, attackers reused leaked credentials to take over >15k accounts, add payment methods, and make unauthorized purchases. Compromised accounts were monetized quickly via small transactions and device linkages. The event showcased the importance of MFA on consumer accounts, stronger bot/velocity controls on login, and step-up verification for billing changes and purchases.",
    raah: [
      { categoryTitle: "MFA for Sensitive Actions", categoryDescription: "Require MFA for login and especially for billing or purchase actions." },
      { categoryTitle: "Rate Limiting & Bot Defense", categoryDescription: "Throttle login attempts; block automated sources and anomalies." },
      { categoryTitle: "Compromised-Password Checks", categoryDescription: "Disallow known breached credentials and force resets." },
      { categoryTitle: "Adaptive Auth", categoryDescription: "Step-up challenges based on risk and device posture." },
      { categoryTitle: "Transaction Alerts", categoryDescription: "Immediate notification of purchases and account changes." }
    ]
  },
  {
    year: "2024",
    company: "AT&T Snowflake",
    description:
      "Between Apr 14–25, 2024, actors leveraged credentials harvested by infostealers to log in to Snowflake tenants without MFA. Large query jobs and exports pulled call/text metadata for ~110M customers from past periods; no message content, SSNs, or DOBs were exposed. The campaign highlighted risks from unmanaged endpoints holding cloud tokens, legacy no-MFA database roles, and insufficient anomaly detection on bulk data access patterns in data warehouses.",
    raah: [
      { categoryTitle: "MFA Everywhere", categoryDescription: "Enforce strong MFA for all Snowflake users; block legacy/no-MFA logins." },
      { categoryTitle: "Credential Hygiene", categoryDescription: "Rotate/remove stale accounts; block known-breached passwords; vault secrets." },
      { categoryTitle: "Endpoint Hardening", categoryDescription: "EDR and secure configuration on systems handling cloud creds." },
      { categoryTitle: "Behavioral Detection", categoryDescription: "UEBA to flag high-volume exports and unusual query patterns." },
      { categoryTitle: "Zero-Trust Access", categoryDescription: "Identity-bound network policies and scoped roles for data warehouses." }
    ]
  },
  {
    year: "2024",
    company: "BBC Pension Scheme",
    description:
      "On May 21, 2024, files were copied from a cloud storage service affecting ~25,000 members (names, DOB, addresses, NI numbers). Core pension systems and the member portal remained secure, suggesting a data-handling or access control lapse in a storage tier. The incident emphasized the need for granular access policies, continuous entitlement reviews, and anomaly detection for unusual bulk file operations across cloud object stores.",
    raah: [
      { categoryTitle: "Cloud IAM Controls", categoryDescription: "MFA and identity-based access policies for storage systems." },
      { categoryTitle: "IGA Reviews", categoryDescription: "Regular entitlement reviews; revoke stale permissions." },
      { categoryTitle: "PAM-like File Gating", categoryDescription: "JIT access and session logging for sensitive file operations." },
      { categoryTitle: "Anomaly Monitoring", categoryDescription: "Real-time alerts for bulk copy/download behavior." },
      { categoryTitle: "Zero-Trust Segmentation", categoryDescription: "Encrypt and segment high-risk repositories behind policy checks." }
    ]
  },
  {
    year: "2024",
    company: "Dell Partner Portal API",
    description:
      "In May 2024, a threat actor registered fake partner accounts and abused a permissive API to automate ~5k requests/min. They enumerated service tags and pulled customer identity and order/warranty metadata for an estimated 49M records; passwords, emails, and payment data were not included. The episode exposed weaknesses in partner vetting, object-level authorization, rate limits, and behavioral controls for high-velocity API scraping.",
    raah: [
      { categoryTitle: "API AuthZ Hardening", categoryDescription: "Object-level authorization, scoped partner entitlements, and strict vetting." },
      { categoryTitle: "Rate Limiting & Bot Controls", categoryDescription: "Throttling, CAPTCHA, anomaly-based detection of scraping." },
      { categoryTitle: "Partner Onboarding", categoryDescription: "Identity verification, manual review, and MFA for partner accounts." },
      { categoryTitle: "Monitoring & UEBA", categoryDescription: "Detect high-volume API patterns and unusual query mixes." },
      { categoryTitle: "Least-Privilege API Design", categoryDescription: "Expose only minimal data subsets with strict query constraints." }
    ]
  },
  {
    year: "2024",
    company: "monday.com Feature Abuse",
    description:
      "In early May 2024, attackers abused the platform’s ‘Share Update’ feature to send phishing emails from notifications@monday.com that passed SPF/DKIM/DMARC, directing recipients to credential-harvesting forms. The feature was disabled while indicators were distributed and misuse was contained. Although no customer data access was confirmed, the incident showed how legitimate product features can be weaponized without granular controls, rate limits, and outbound monitoring.",
    raah: [
      { categoryTitle: "Feature Access Controls", categoryDescription: "Gate outbound-email features behind role/approval and MFA." },
      { categoryTitle: "Recipient/Rate Restrictions", categoryDescription: "Limit external recipients and volumes; block suspicious domains." },
      { categoryTitle: "Outbound Monitoring", categoryDescription: "Alert on spikes in platform-generated email activity." },
      { categoryTitle: "Context-Aware Auth", categoryDescription: "Step-up verification when sending to external targets." },
      { categoryTitle: "User Education", categoryDescription: "Teach users to spot internal-looking phishing and report quickly." }
    ]
  }
];


const getBreachCount = (width) => {
  if (width < 600) return 3;
  if (width < 1200) return 4;
  if (width < 1800) return 5;
  return 6;
};

const BreachTimeline = () => {
  const [activeBreach, setActiveBreach] = useState(breaches[0]);
  const [breachCountPerLine, setBreachCountPerLine] = useState(getBreachCount(window.innerWidth));
  const [animateDetail, setAnimateDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setBreachCountPerLine(getBreachCount(window.innerWidth));
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
    setTimeout(() => setAnimateDetail(false), 600);
  };

  const groupedBreaches = [];
  for (let i = 0; i < breaches.length; i += breachCountPerLine) {
    groupedBreaches.push(breaches.slice(i, i + breachCountPerLine));
  }

  const onEsc = useCallback((e) => {
    if (e.key === 'Escape') setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    }
    return () => window.removeEventListener('keydown', onEsc);
  }, [isModalOpen, onEsc]);

  return (
    <div className='BreachTimeline'>
      <div className='BreachContent'>
        <div className={`BreachYearTag  ${animateDetail ? ' ReusableSlideRight' : ''}`}>
          <div className='BreachYearContainer'>
            <span className='BreachYear'>{activeBreach.year.slice(0, 2)}</span>
            <span className='BreachYear'>{activeBreach.year.slice(-2)}</span>
          </div>
        </div>
        <div className={`BreachDetails ${animateDetail ? 'ReusableFadeUp' : ''}`}>
          <h2>{activeBreach.year}</h2>
          <h2>{activeBreach.company}</h2>
          <p>{activeBreach.description}</p>
          <button
            className='BreachDetailsCTA'
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          >
            See How RAAH Prevents This <img className="BreachDetailsCTAArrow" src={CTAArrow} alt="" />
          </button>
        </div>
      </div>

      {groupedBreaches.map((group, groupIndex) => (
        <div key={groupIndex}>
          <div className={`BreachLine Line${groupIndex + 1}`}>
            {group.map((breach, index) => (
              <div
                className={`Breach Breach${groupIndex * breachCountPerLine + index + 1} ${activeBreach === breach ? 'active' : ''}`}
                key={index}
                onClick={() => handleClick(breach)}
              >
                <div className='BreachButton' title={`${breach.year}-${breach.company}`}>
                  <img src={BreachButtonGraphic} alt={`${breach.company} ${breach.year}`} />
                </div>
                <span className='BreachTimelineYearTag'>{breach.year}</span>
              </div>
            ))}
            <div className='BreachLineConnector' />
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className='BreachModalOverlay' role='dialog' aria-modal='true' aria-label={`How RAAH prevents: ${activeBreach.company}`} onClick={() => setIsModalOpen(false)}>
          <div className='BreachModal' onClick={(e) => e.stopPropagation()}>
            <div className='BreachModalHeader'>
              <h3>How RAAH Could Have Helped — {activeBreach.company}</h3>
              <button className='BreachModalClose' onClick={() => setIsModalOpen(false)} aria-label='Close'>×</button>
            </div>
            <div className='BreachModalBody'>
              {activeBreach.raah && activeBreach.raah.length > 0 ? (
                <ul className='BreachModalList'>
                  {activeBreach.raah.map((item, i) => (
                    <li key={i} className='BreachModalItem'>
                      <h4 className='BreachModalItemTitle'>{item.categoryTitle}</h4>
                      <p className='BreachModalItemDesc'>{item.categoryDescription}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No preventative details provided.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreachTimeline;
