/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, CheckCircle2, ArrowRight } from 'lucide-react';

const LOGO_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac4d76cbbad531ac8e88973.png';
const VIDEO_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac3be757d735ea2a13bfe2a.mp4';

const LANDOWNER_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac53008195f9172edb188e0.png';
const DEVELOPER_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac530087d735ea2a16497b4.png';
const INVESTOR_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac53008195f9172edb188e6.png';
const PROFESSIONAL_PARTNERS_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac5349e195f9172edb22105.png';
const FEATURED_TRANSACTION_LAND_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac535a7195f9172edb24319.png';
const ABOUT_TRICONNECTION_BG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac53a20dca4eec50611bb12.png';
const DIRECTOR_IMG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac53b82c478ac55350bbf01.jpeg';
const CONTACT_US_BG_URL =
  'https://assets.cdn.filesafe.space/yIDvEqSzbb11NISxaV9x/media/6ac53fe117216aa3b2ae0d3d.png';

interface NavSectionInfo {
  id: string;
  label: string;
  scrollTargetRatio: number;
  kicker: string;
  title: string;
  summary: string;
  points: string[];
}

const NAV_ROW_1: NavSectionInfo[] = [
  {
    id: 'home',
    label: 'HOME',
    scrollTargetRatio: 0,
    kicker: 'Triconnection Consulting Group Sdn Bhd',
    title: 'End-to-End Landowner Advisory',
    summary:
      'We act exclusively on behalf of landowners to unlock maximum long-term value from strategic land assets across Malaysia.',
    points: [
      '100% independent landowner representation',
      'Direct access to Tier-1 & boutique property developers',
      'Full lifecycle oversight through final profit realisation',
    ],
  },
  {
    id: 'what-we-do',
    label: 'WHAT WE DO',
    scrollTargetRatio: 0.24,
    kicker: 'Core Advisory Mandate',
    title: 'Comprehensive Land Value Realisation',
    summary:
      'Beyond simple brokerage, we structure bankable joint ventures, outright disposals, and turnkey development partnerships tailored to landowner objectives.',
    points: [
      'Highest and best use feasibility & land valuation benchmarking',
      'Competitive developer beauty parades & partner selection',
      'Commercial term sheet & JV agreement structuring',
    ],
  },
  {
    id: 'our-approach',
    label: 'OUR APPROACH',
    scrollTargetRatio: 0.32,
    kicker: 'Five-Stage Advisory Framework',
    title: 'From Land Opportunity to Long-Term Asset Value',
    summary:
      'Our structured 5-phase methodology protects landowner interests at every commercial, legal, and execution milestone.',
    points: [
      '01. Land Assessment & Development Potential Positioning',
      '02. Targeted Developer Shortlisting & Partner Selection',
      '03. Joint Venture Structuring & Commercial Negotiation',
      '04. Development Oversight & Milestone Governance',
      '05. Long-Term Asset Realisation & Exit Execution',
    ],
  },
  {
    id: 'why-triconnection',
    label: 'WHY TRICONNECTION',
    scrollTargetRatio: 0.4,
    kicker: 'The Triconnection Advantage',
    title: 'Aligned With the Landowner at Every Step',
    summary:
      'Traditional agents stop at deal closure. We remain engaged through project governance to ensure promised returns are actually delivered.',
    points: [
      'Zero conflict of interest — dedicated landowner advocacy',
      'Deep institutional memory in complex land transactions',
      'Protection of landowner downside via tight protective covenants',
    ],
  },
];

const NAV_ROW_2: NavSectionInfo[] = [
  {
    id: 'who-we-serve',
    label: 'WHO WE SERVE',
    scrollTargetRatio: 0.48,
    kicker: 'Client Profiles',
    title: 'Stewards of Strategic Land Banks',
    summary:
      'We advise private families, corporate landholders, plantation groups, and institutional trustees seeking to monetise or co-develop land.',
    points: [
      'Multi-generational family landowners & estate trustees',
      'Corporations with non-core industrial or commercial land',
      'Agricultural & plantation owners transitioning to township/mixed-use',
    ],
  },
  {
    id: 'track-record',
    label: 'TRACK RECORD',
    scrollTargetRatio: 0.56,
    kicker: 'Proven Execution',
    title: 'Structured Transactions Across Key Growth Corridors',
    summary:
      'Our principals bring decades of combined advisory, corporate finance, and property development structuring experience.',
    points: [
      'Residential townships, commercial hubs & industrial parks',
      'Structured minimum guaranteed land value + profit-sharing JVs',
      'End-to-end commercial closure with listed and premier private developers',
    ],
  },
  {
    id: 'about-us',
    label: 'ABOUT US',
    scrollTargetRatio: 0.8,
    kicker: 'Our Firm',
    title: 'Triconnection Consulting Group Sdn Bhd',
    summary:
      'Founded to bridge the capability asymmetry between landowners and institutional property developers through rigorous commercial advisory.',
    points: [
      'Multidisciplinary team across real estate, finance & deal structuring',
      'Long-standing C-suite relationships with Malaysia’s leading developers',
      'Committed to confidentiality, integrity, and measurable asset uplift',
    ],
  },
  {
    id: 'contact',
    label: 'CONTACT',
    scrollTargetRatio: 0.98,
    kicker: 'Confidential Consultation',
    title: 'Discuss Your Land With Our Advisory Partners',
    summary:
      'Schedule a strictly confidential preliminary assessment of your land parcel’s development and joint venture potential.',
    points: [
      'Preliminary desktop feasibility & zoning review',
      'Indicative JV vs. outright sale comparison',
      'Direct partner-level engagement from day one',
    ],
  },
];

const ALL_NAV_ITEMS: NavSectionInfo[] = [...NAV_ROW_1, ...NAV_ROW_2];

function ShieldCheckIcon() {
  return (
    <svg
      width="29"
      height="32"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M18 2.5L4.5 8.2V18.8C4.5 27.6 10.25 35.45 18 38C25.75 35.45 31.5 27.6 31.5 18.8V8.2L18 2.5Z"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6.3L8 10.5V18.6C8 25.4 12.25 31.5 18 33.7C23.75 31.5 28 25.4 28 18.6V10.5L18 6.3Z"
        stroke="#C9A93A"
        strokeWidth="1.1"
        strokeOpacity="0.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 20.2L16.6 23.6L23.4 16.2"
        stroke="#C9A93A"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConnectedNodesIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Connector lines */}
      <line x1="20" y1="20" x2="12" y2="8" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="20" y1="20" x2="31" y2="12" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="20" y1="20" x2="8" y2="30" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="20" y1="20" x2="31" y2="31" stroke="#C9A93A" strokeWidth="2.2" />

      {/* Center hub */}
      <circle cx="20" cy="20" r="5.5" fill="#041B31" stroke="#C9A93A" strokeWidth="2.4" />
      <circle cx="20" cy="20" r="2.3" fill="#C9A93A" />

      {/* Outer nodes */}
      <circle cx="12" cy="8" r="3.6" fill="#041B31" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="31" cy="12" r="3.6" fill="#041B31" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="8" cy="30" r="4.2" fill="#041B31" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="31" cy="31" r="4.2" fill="#C9A93A" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Handle */}
      <path
        d="M14.5 9V6.2C14.5 4.7 15.7 3.5 17.2 3.5H22.8C24.3 3.5 25.5 4.7 25.5 6.2V9"
        stroke="#C9A93A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Upper flap */}
      <path
        d="M3.5 12.2C3.5 10.4 4.9 9 6.7 9H33.3C35.1 9 36.5 10.4 36.5 12.2V19.2C36.5 20.1 35.8 20.8 34.9 20.8H23.2V18.2H16.8V20.8H5.1C4.2 20.8 3.5 20.1 3.5 19.2V12.2Z"
        fill="#C9A93A"
      />
      {/* Center clasp */}
      <rect x="17.8" y="19.2" width="4.4" height="4.2" rx="0.8" fill="#C9A93A" />
      {/* Lower body */}
      <path
        d="M4.5 22.8H16.4V24.6H23.6V22.8H35.5V31.5C35.5 33.4 34 35 32 35H8C6 35 4.5 33.4 4.5 31.5V22.8Z"
        fill="#C9A93A"
      />
    </svg>
  );
}

function ChallengeHeadIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#041B31" stroke="#C9A93A" strokeWidth="1.8" />
      {/* Head profile facing left */}
      <path
        d="M20 35V32.5H17.2C16.1 32.5 15.4 31.6 15.6 30.5L16.2 27.2L14.2 25.2C13.9 24.9 14 24.3 14.4 24L16.2 22.2C16.3 16.8 20.3 13 25.5 13C30.6 13 34.2 16.7 34.2 21.8C34.2 25.1 32.5 27.9 30.2 29.7V35H20Z"
        stroke="#C9A93A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner brain / insight motif */}
      <circle cx="23.8" cy="19.5" r="2.1" stroke="#C9A93A" strokeWidth="1.4" />
      <circle cx="27.8" cy="19.5" r="2.1" stroke="#C9A93A" strokeWidth="1.4" />
      <path
        d="M25.8 21.5V26.5M23.8 24.5H27.8"
        stroke="#C9A93A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChallengeDocumentIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#041B31" stroke="#C9A93A" strokeWidth="1.8" />
      {/* Document body with folded corner */}
      <path
        d="M17.5 14C17.5 13.2 18.2 12.5 19 12.5H26.8L31.5 17.2V34C31.5 34.8 30.8 35.5 30 35.5H19C18.2 35.5 17.5 34.8 17.5 34V14Z"
        stroke="#C9A93A"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M26.5 12.5V17.5H31.5"
        stroke="#C9A93A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Document lines */}
      <line x1="20.5" y1="21" x2="25.5" y2="21" stroke="#C9A93A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20.5" y1="24.5" x2="28.5" y2="24.5" stroke="#C9A93A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20.5" y1="28" x2="28.5" y2="28" stroke="#C9A93A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20.5" y1="31.5" x2="26.5" y2="31.5" stroke="#C9A93A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChallengePuzzleIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#041B31" stroke="#C9A93A" strokeWidth="1.8" />
      {/* Outer puzzle square */}
      <rect
        x="14.5"
        y="14.5"
        width="19"
        height="19"
        rx="1.5"
        stroke="#C9A93A"
        strokeWidth="1.6"
      />
      {/* Horizontal puzzle divider with interlocking tabs */}
      <path
        d="M14.5 24H17.8C17.8 22.3 20.5 22.3 20.5 24H27.5C27.5 25.7 30.2 25.7 30.2 24H33.5"
        stroke="#C9A93A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical puzzle divider with interlocking tabs */}
      <path
        d="M24 14.5V17.8C25.7 17.8 25.7 20.5 24 20.5V27.5C22.3 27.5 22.3 30.2 24 30.2V33.5"
        stroke="#C9A93A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChallengeCheckIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#041B31" stroke="#C9A93A" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="11" stroke="#C9A93A" strokeWidth="1.7" />
      <path
        d="M19.5 24.2L22.6 27.3L28.8 20.8"
        stroke="#C9A93A"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TripleChevronDownIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 4.5L12 10.5L19 4.5"
        stroke="#C9A93A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9.5L12 15.5L19 9.5"
        stroke="#C9A93A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14.5L12 20.5L19 14.5"
        stroke="#C9A93A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepArrowIcon() {
  return (
    <svg
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="8"
        x2="23.5"
        y2="8"
        stroke="#C9A93A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M17.5 2.5L24 8L17.5 13.5"
        stroke="#C9A93A"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetBullseyeIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="30" cy="34" r="21" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="30" cy="34" r="14" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="30" cy="34" r="7" stroke="#C9A93A" strokeWidth="2.2" />
      {/* Arrow shaft hitting center */}
      <line
        x1="30"
        y1="34"
        x2="51"
        y2="13"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Arrowhead at center */}
      <path
        d="M30 27.5V34H36.5"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow feathers at top right */}
      <path
        d="M46 12L52 12L52 18M49 9L55 9L55 15"
        stroke="#C9A93A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandshakeOutlineIcon() {
  return (
    <svg
      width="66"
      height="62"
      viewBox="0 0 68 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Left cuff */}
      <path
        d="M6 28L15 15L23 20L14 34L6 28Z"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Right cuff */}
      <path
        d="M62 28L53 15L45 20L54 34L62 28Z"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Upper clasped hands & thumb */}
      <path
        d="M23 20C26 18.5 30 18 34 20.5L28 26.5C26.5 28 28.5 30.5 30.5 29L37.5 22C40.5 19.5 43 20 45 20"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right fingers wrapping down */}
      <path
        d="M36 23.5L47 33.5C48.5 35 46.5 38 44.5 36.5L36.5 29.5"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5 36.5C46 38 44 41 42 39.5L34.5 33"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.5 39.5C43 41 41 44 39 42.5L32.5 36.5"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left lower palm & curled fingers */}
      <path
        d="M14 34L22 40M21 37.5C22.5 36 25 38 23.5 40L21.5 42C20 43.5 22.5 45.5 24 44L26 42C27.5 40.5 30 42.5 28.5 44.5L27 46C28.5 47.5 31 45.5 32.5 44"
        stroke="#C9A93A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PadlockCheckIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Shackle */}
      <path
        d="M21 27V18C21 11.9 25.9 7 32 7C38.1 7 43 11.9 43 18V27"
        stroke="#C9A93A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Lock body */}
      <rect
        x="15"
        y="27"
        width="34"
        height="29"
        rx="5"
        stroke="#C9A93A"
        strokeWidth="2.5"
      />
      {/* Checkmark inside */}
      <path
        d="M25.5 41.5L30.2 46L39 37"
        stroke="#C9A93A"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HubNetworkOutlineIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Spokes */}
      <line x1="27.5" y1="26" x2="21.5" y2="15.5" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="36.5" y1="26" x2="42.5" y2="15.5" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="25" y1="32" x2="14" y2="32" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="39" y1="32" x2="50" y2="32" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="28.5" y1="38" x2="22" y2="49" stroke="#C9A93A" strokeWidth="2.2" />
      <line x1="36" y1="37.5" x2="42" y2="44.5" stroke="#C9A93A" strokeWidth="2.2" />

      {/* Center Hub */}
      <circle cx="32" cy="32" r="7" stroke="#C9A93A" strokeWidth="2.4" />

      {/* 6 Outer Nodes */}
      <circle cx="19.5" cy="12" r="4" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="44.5" cy="12" r="4" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="10" cy="32" r="4" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="54" cy="32" r="4.5" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="19.5" cy="52.5" r="4" stroke="#C9A93A" strokeWidth="2.2" />
      <circle cx="45" cy="47.5" r="4" stroke="#C9A93A" strokeWidth="2.2" />
    </svg>
  );
}

function GrowthChartIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Baseline */}
      <line
        x1="10"
        y1="54"
        x2="54"
        y2="54"
        stroke="#C9A93A"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      {/* 4 Bars */}
      <rect x="14" y="42" width="6" height="12" stroke="#C9A93A" strokeWidth="2.1" />
      <rect x="24" y="35" width="6" height="19" stroke="#C9A93A" strokeWidth="2.1" />
      <rect x="34" y="29" width="6" height="25" stroke="#C9A93A" strokeWidth="2.1" />
      <rect x="44" y="21" width="6" height="33" stroke="#C9A93A" strokeWidth="2.1" />
      {/* Upward Trend Arrow */}
      <path
        d="M14 31L26 19L33 25L49 9"
        stroke="#C9A93A"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 9H49V17"
        stroke="#C9A93A"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrackTrophyIcon() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trackGold1" x1="10" y1="8" x2="100" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6CC8F" />
          <stop offset="50%" stopColor="#CEA963" />
          <stop offset="100%" stopColor="#B88F48" />
        </linearGradient>
      </defs>
      {/* Outer Champagne-Gold Double Ring */}
      <circle cx="56" cy="56" r="49" stroke="url(#trackGold1)" strokeWidth="1.7" />
      <circle cx="56" cy="56" r="46.5" stroke="#E6CC8F" strokeWidth="0.7" strokeOpacity="0.45" />
      {/* Trophy Cup */}
      <path
        d="M38 29H74V46C74 56.8 66 64.5 56 64.5C46 64.5 38 56.8 38 46V29Z"
        stroke="url(#trackGold1)"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      {/* Left Handle */}
      <path
        d="M38 34.5H30.5C28.8 34.5 27.5 35.8 27.5 37.5V41C27.5 47 32.2 51.8 38 51.8"
        stroke="url(#trackGold1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Handle */}
      <path
        d="M74 34.5H81.5C83.2 34.5 84.5 35.8 84.5 37.5V41C84.5 47 79.8 51.8 74 51.8"
        stroke="url(#trackGold1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curved Stem */}
      <path
        d="M52.5 64.5C53.5 69 53.5 73 51 77.5M59.5 64.5C58.5 69 58.5 73 61 77.5"
        stroke="url(#trackGold1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Two-Tier Base */}
      <path
        d="M44 77.5H68L70.5 83H41.5L44 77.5Z"
        stroke="url(#trackGold1)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sparkle Glints matching image */}
      <path
        d="M76 31L77.4 35.2L81.6 36.6L77.4 38L76 42.2L74.6 38L70.4 36.6L74.6 35.2L76 31Z"
        fill="#FFF3C4"
      />
      <path
        d="M66.5 78L67.7 81.5L71.2 82.7L67.7 83.9L66.5 87.4L65.3 83.9L61.8 82.7L65.3 81.5L66.5 78Z"
        fill="#FFF3C4"
      />
    </svg>
  );
}

function TrackGrowthIcon() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trackGold2" x1="10" y1="8" x2="100" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6CC8F" />
          <stop offset="50%" stopColor="#CEA963" />
          <stop offset="100%" stopColor="#B88F48" />
        </linearGradient>
      </defs>
      {/* Outer Champagne-Gold Double Ring */}
      <circle cx="56" cy="56" r="49" stroke="url(#trackGold2)" strokeWidth="1.7" />
      <circle cx="56" cy="56" r="46.5" stroke="#E6CC8F" strokeWidth="0.7" strokeOpacity="0.45" />
      {/* 3 Vertical Bars */}
      <rect
        x="34"
        y="59"
        width="10"
        height="20"
        rx="1"
        stroke="url(#trackGold2)"
        strokeWidth="2.1"
      />
      <rect
        x="51"
        y="49"
        width="10"
        height="30"
        rx="1"
        stroke="url(#trackGold2)"
        strokeWidth="2.1"
      />
      <rect
        x="68"
        y="39"
        width="10"
        height="40"
        rx="1"
        stroke="url(#trackGold2)"
        strokeWidth="2.1"
      />
      {/* Outlined Rising Trend Arrow above Bars */}
      <path
        d="M45 45L55 35L60.5 38L72.5 23.5"
        stroke="url(#trackGold2)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64 23.5H73V32.5"
        stroke="url(#trackGold2)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sparkle Glint on first bar top-right corner */}
      <path
        d="M44 54L45.3 57.7L49 59L45.3 60.3L44 64L42.7 60.3L39 59L42.7 57.7L44 54Z"
        fill="#FFF3C4"
      />
    </svg>
  );
}

function TrackChainHandIcon() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trackGold3" x1="10" y1="8" x2="100" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6CC8F" />
          <stop offset="50%" stopColor="#CEA963" />
          <stop offset="100%" stopColor="#B88F48" />
        </linearGradient>
      </defs>
      {/* Outer Champagne-Gold Double Ring */}
      <circle cx="56" cy="56" r="49" stroke="url(#trackGold3)" strokeWidth="1.7" />
      <circle cx="56" cy="56" r="46.5" stroke="#E6CC8F" strokeWidth="0.7" strokeOpacity="0.45" />
      {/* Left Chain Link */}
      <rect
        x="15"
        y="36"
        width="23"
        height="14"
        rx="7"
        stroke="url(#trackGold3)"
        strokeWidth="2"
      />
      <rect
        x="19"
        y="39.5"
        width="15"
        height="7"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="1.6"
      />
      <line
        x1="30"
        y1="43"
        x2="42"
        y2="43"
        stroke="url(#trackGold3)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Right Chain Link */}
      <rect
        x="74"
        y="36"
        width="23"
        height="14"
        rx="7"
        stroke="url(#trackGold3)"
        strokeWidth="2"
      />
      <rect
        x="78"
        y="39.5"
        width="15"
        height="7"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="1.6"
      />
      <line
        x1="69"
        y1="43"
        x2="82"
        y2="43"
        stroke="url(#trackGold3)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Fist Fingers Holding Chain */}
      <rect
        x="42"
        y="32"
        width="7"
        height="15"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        fill="#02182e"
      />
      <rect
        x="49"
        y="31"
        width="7"
        height="16"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        fill="#02182e"
      />
      <rect
        x="56"
        y="32"
        width="7"
        height="15"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        fill="#02182e"
      />
      <rect
        x="63"
        y="34"
        width="7"
        height="14"
        rx="3.5"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        fill="#02182e"
      />
      {/* Thumb & Palm Outline */}
      <path
        d="M42 44V55C42 61.5 45.8 66 48.5 69V75H64.5V69C67 65.5 69.8 61 69.8 54V46"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.5 48H61.5C64.2 48 66 50.2 66 52.8C66 55.5 63.8 57 61 57H52.5L49 60.5"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Suit Cuff at Bottom */}
      <path
        d="M44 99V75H68V99"
        stroke="url(#trackGold3)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="49" cy="81" r="1.5" fill="#E6CC8F" />
      {/* Sparkle Glints on Ring matching image */}
      <path
        d="M73 10L74.8 15L79.8 16.8L74.8 18.6L73 23.6L71.2 18.6L66.2 16.8L71.2 15L73 10Z"
        fill="#FFF3C4"
      />
      <path
        d="M98 76L99.5 80.2L103.7 81.7L99.5 83.2L98 87.4L96.5 83.2L92.3 81.7L96.5 80.2L98 76Z"
        fill="#FFF3C4"
      />
    </svg>
  );
}

function ContactConfidentialIcon() {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[64px] h-[64px] sm:w-[74px] sm:h-[74px] lg:w-[82px] lg:h-[82px] shrink-0"
      aria-hidden="true"
    >
      {/* White Circle Outline */}
      <circle cx="44" cy="44" r="39" stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Document Outline */}
      <path
        d="M46 61H29C27.9 61 27 60.1 27 59V25C27 23.9 27.9 23 29 23H45L53 31V41"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 23V31H53"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Document Text Lines */}
      <line x1="32" y1="30" x2="40" y2="30" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="35" x2="47" y2="35" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="40" x2="47" y2="40" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="45" x2="43" y2="45" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="50" x2="43" y2="50" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      {/* Padlock overlapping bottom-right of document */}
      <path
        d="M49 49V45C49 41.7 51.7 39 55 39C58.3 39 61 41.7 61 45V49"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="46"
        y="49"
        width="18"
        height="15"
        rx="2.5"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle cx="55" cy="55" r="1.4" fill="#FFFFFF" />
      <line x1="55" y1="56.4" x2="55" y2="59.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ContactAdvisoryIcon() {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[64px] h-[64px] sm:w-[74px] sm:h-[74px] lg:w-[82px] lg:h-[82px] shrink-0"
      aria-hidden="true"
    >
      {/* White Circle Outline */}
      <circle cx="44" cy="44" r="39" stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Top Speech Bubble with 3 Dots */}
      <path
        d="M36 22H52C55.3 22 58 24.7 58 28V31C58 34.3 55.3 37 52 37H46L42 41V37H36C32.7 37 30 34.3 30 31V28C30 24.7 32.7 22 36 22Z"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="39" cy="29.5" r="1.3" fill="#FFFFFF" />
      <circle cx="44" cy="29.5" r="1.3" fill="#FFFFFF" />
      <circle cx="49" cy="29.5" r="1.3" fill="#FFFFFF" />
      {/* Left Person Head & Body */}
      <circle cx="27.5" cy="41" r="4" stroke="#FFFFFF" strokeWidth="1.6" />
      <path
        d="M21 63V53C21 49.7 23.7 47 27 47H29.5L34 54H39"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 53V61H34"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Person Head & Body */}
      <circle cx="60.5" cy="41" r="4" stroke="#FFFFFF" strokeWidth="1.6" />
      <path
        d="M67 63V53C67 49.7 64.3 47 61 47H58.5L54 54H49"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63 53V61H54"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Table Line */}
      <line x1="36" y1="57" x2="52" y2="57" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ContactOpportunitiesIcon() {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[64px] h-[64px] sm:w-[74px] sm:h-[74px] lg:w-[82px] lg:h-[82px] shrink-0"
      aria-hidden="true"
    >
      {/* White Circle Outline */}
      <circle cx="44" cy="44" r="39" stroke="#FFFFFF" strokeWidth="1.8" />
      {/* 3 Rising Bars */}
      <rect x="26" y="51" width="7.5" height="12" rx="1" stroke="#FFFFFF" strokeWidth="1.7" />
      <rect x="40" y="44" width="7.5" height="19" rx="1" stroke="#FFFFFF" strokeWidth="1.7" />
      <rect x="54" y="35" width="7.5" height="28" rx="1" stroke="#FFFFFF" strokeWidth="1.7" />
      {/* Curved Upward Trend Arrow */}
      <path
        d="M27 43C36 41 46 34 57 23"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M50 23H57.5V30.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavId, setActiveNavId] = useState<string>('home');
  const [selectedBrief, setSelectedBrief] = useState<NavSectionInfo | null>(null);
  const [isWhiteViewOpen, setIsWhiteViewOpen] = useState(false);
  const [isJourneyViewOpen, setIsJourneyViewOpen] = useState(false);
  const [isDiscussModalOpen, setIsDiscussModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    landSize: '',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Scroll-linked video scrubbing + smooth interpolation
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number | null = null;
    let targetProgress = 0;
    let currentProgress = 0;
    let hasUserScrolled = false;

    const updateScrollTarget = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const rawProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetProgress = rawProgress;
      setScrollProgress(rawProgress);

      if (window.scrollY > 4) {
        hasUserScrolled = true;
      }

      // Update active nav highlight based on scroll ratio
      let closestItem = ALL_NAV_ITEMS[0];
      let minDiff = Infinity;
      for (const item of ALL_NAV_ITEMS) {
        const diff = Math.abs(item.scrollTargetRatio - rawProgress);
        if (diff < minDiff) {
          minDiff = diff;
          closestItem = item;
        }
      }
      setActiveNavId(closestItem.id);
    };

    const renderLoop = () => {
      currentProgress += (targetProgress - currentProgress) * 0.14;

      if (
        hasUserScrolled &&
        video &&
        Number.isFinite(video.duration) &&
        video.duration > 0 &&
        video.readyState >= 2
      ) {
        // Pause autoplay once user takes over via scroll scrubbing
        if (!video.paused) {
          video.pause();
        }
        const desiredTime = Math.min(
          video.duration - 0.05,
          Math.max(0, currentProgress * video.duration)
        );
        if (!video.seeking && Math.abs(video.currentTime - desiredTime) > 0.03) {
          try {
            video.currentTime = desiredTime;
          } catch {
            // Ignore transient DOM seek exceptions
          }
        }
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('resize', updateScrollTarget, { passive: true });
    updateScrollTarget();
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('resize', updateScrollTarget);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleNavClick = (item: NavSectionInfo) => {
    setActiveNavId(item.id);
    setIsMobileMenuOpen(false);
    setIsWhiteViewOpen(false);
    setIsJourneyViewOpen(false);

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );

    if (item.id === 'contact') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.98, behavior: 'smooth' });
      return;
    }

    if (item.id === 'what-we-do') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.24, behavior: 'smooth' });
      return;
    }

    if (item.id === 'our-approach') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.32, behavior: 'smooth' });
      return;
    }

    if (item.id === 'why-triconnection') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.40, behavior: 'smooth' });
      return;
    }

    if (item.id === 'who-we-serve') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.48, behavior: 'smooth' });
      return;
    }

    if (item.id === 'track-record') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.56, behavior: 'smooth' });
      return;
    }

    if (item.id === 'about-us') {
      setSelectedBrief(null);
      window.scrollTo({ top: maxScroll * 0.80, behavior: 'smooth' });
      return;
    }

    const targetY = item.scrollTargetRatio * maxScroll;
    window.scrollTo({ top: targetY, behavior: 'smooth' });

    if (item.id !== 'home') {
      setSelectedBrief(item);
    } else {
      setSelectedBrief(null);
    }
  };

  const handleExploreApproach = () => {
    const approachItem =
      ALL_NAV_ITEMS.find((i) => i.id === 'our-approach') || NAV_ROW_1[2];
    handleNavClick(approachItem);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.location.trim()) {
      setFormError('Please provide your name, email address, and land location.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  // Subtle compositor scale driven by scroll progress
  const videoScale = 1 + scrollProgress * 0.06;

  // 13-Phase Scroll Crossfade within the Single Sticky Hero Section:
  // Phase 1 (0.00 -> 0.05): Hero Intro Text + 2 CTA Buttons + 3 Trust Pillars (Dark Video BG)
  // Phase 2 (0.065 -> 0.12): "THE LANDOWNER CHALLENGES" + "A Good Piece Of Land Is Only The Beginning." + 2 CTA Buttons + 3 Trust Pillars (Dark Video BG)
  // Phase 3 (0.135 -> 0.19): "THE LANDOWNER CHALLENGES" (maintained) + 4 Challenge Rows + Vertical Gold Line + "View More" + 3 Trust Pillars (Dark Video BG)
  // Phase 4 (0.21 -> 0.27): Smooth Fade Transition into White Background "WHAT WE DO" Section
  // Phase 5 (0.29 -> 0.35): Smooth Fade Transition into White Background "HOW WE CREATE VALUE / THE TRICONNECTION MODEL" Section
  // Phase 6 (0.37 -> 0.43): Smooth Fade Transition into Deep Navy "Why Triconnection / We Built Around Land Owners" Section
  // Phase 7 (0.45 -> 0.51): Smooth Fade Transition into White Background "WHO WE SERVE / DIFFERENT STAKEHOLDERS. ONE PLATFORM." Section
  // Phase 8 (0.53 -> 0.59): Smooth Fade Transition into Deep Navy "Track Record" Section
  // Phase 9 (0.61 -> 0.67): Smooth Fade Transition into White Background "FEATURED TRANSACTION" Section
  // Phase 10 (0.69 -> 0.75): Smooth Fade Transition into White Background "THE OUTCOME" Section
  // Phase 11 (0.77 -> 0.83): Smooth Fade Transition into Deep Navy "ABOUT TRICONNECTION" Section
  // Phase 12 (0.85 -> 0.91): Smooth Fade Transition into White Background "OUR PEOPLE" Section
  // Phase 13 (0.93 -> 1.00): Smooth Fade Transition into "CONTACT US" Section + Footer

  const phase1Opacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.038) / 0.028));
  const phase1TranslateY = (1 - phase1Opacity) * -12;

  // "THE LANDOWNER CHALLENGES" header fades in for Phase 2 and stays maintained through Phase 3, fades out for Phase 4
  const challengesHeaderFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.055) / 0.028));
  const challengesHeaderFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.19) / 0.028));
  const challengesHeaderOpacity = Math.min(challengesHeaderFadeIn, challengesHeaderFadeOut);
  const challengesHeaderTranslateY = (1 - challengesHeaderFadeIn) * 10;

  // Phase 2 gold headline ("A Good Piece Of Land Is Only The Beginning.") fades in for Phase 2, fades out for Phase 3
  const phase2FadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.055) / 0.028));
  const phase2FadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.115) / 0.028));
  const phase2HeadlineOpacity = Math.min(phase2FadeIn, phase2FadeOut);
  const phase2HeadlineTranslateY =
    scrollProgress < 0.09 ? (1 - phase2FadeIn) * 12 : (1 - phase2FadeOut) * -12;

  // The 2 CTA buttons stay visible through Phase 1 & Phase 2, then fade out as Phase 3 challenges list fades in
  const ctaButtonsOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.115) / 0.028));
  const ctaButtonsTranslateY = (1 - ctaButtonsOpacity) * -10;

  // Phase 3 challenges list + vertical gold bar + "View More" fades in from 0.13 to 0.16, fades out at 0.19 for Phase 4
  const phase3FadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.13) / 0.028));
  const phase3FadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.19) / 0.028));
  const phase3Opacity = Math.min(phase3FadeIn, phase3FadeOut);
  const phase3TranslateY =
    scrollProgress < 0.165 ? (1 - phase3FadeIn) * 12 : (1 - phase3FadeOut) * -10;

  // Bottom 3 Trust Pillars stay visible across Phases 1, 2, 3, and fade out when Phase 4+ or White View is active
  const scrollPillarsOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.19) / 0.028));
  const darkPillarsOpacity = isWhiteViewOpen ? 0 : scrollPillarsOpacity;

  // White Background Stage Opacity (stays white across Phase 4 and Phase 5, fades out for Phase 6)
  const whiteStageFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.20) / 0.028));
  const whiteStageFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.35) / 0.028));
  const whiteStageOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(whiteStageFadeIn, whiteStageFadeOut);

  // Phase 4: "WHAT WE DO" content inside White Stage (0.21 -> 0.27)
  const whatWeDoFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.205) / 0.028));
  const whatWeDoFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.27) / 0.028));
  const whatWeDoOpacity = isWhiteViewOpen ? 0 : Math.min(whatWeDoFadeIn, whatWeDoFadeOut);
  const whatWeDoTranslateY =
    scrollProgress < 0.24 ? (1 - whatWeDoFadeIn) * 16 : (1 - whatWeDoFadeOut) * -16;

  // Phase 5: "HOW WE CREATE VALUE / THE TRICONNECTION MODEL" content inside White Stage (0.29 -> 0.35)
  const howWeCreateFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.285) / 0.028));
  const howWeCreateFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.35) / 0.028));
  const howWeCreateValueOpacity = isWhiteViewOpen
    ? 0
    : Math.min(howWeCreateFadeIn, howWeCreateFadeOut);
  const howWeCreateValueTranslateY =
    scrollProgress < 0.32 ? (1 - howWeCreateFadeIn) * 16 : (1 - howWeCreateFadeOut) * -16;

  // Phase 6: "Why Triconnection / We Built Around Land Owners" Deep Navy Section (0.37 -> 0.43)
  const whyTriconnectionFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.365) / 0.028));
  const whyTriconnectionFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.43) / 0.028));
  const whyTriconnectionOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(whyTriconnectionFadeIn, whyTriconnectionFadeOut);
  const whyTriconnectionTranslateY =
    scrollProgress < 0.40
      ? (1 - whyTriconnectionFadeIn) * 16
      : (1 - whyTriconnectionFadeOut) * -16;

  // Phase 7: "WHO WE SERVE / DIFFERENT STAKEHOLDERS. ONE PLATFORM." White Section (0.45 -> 0.51)
  const whoWeServeFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.445) / 0.028));
  const whoWeServeFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.51) / 0.028));
  const whoWeServeOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(whoWeServeFadeIn, whoWeServeFadeOut);
  const whoWeServeTranslateY =
    scrollProgress < 0.48
      ? (1 - whoWeServeFadeIn) * 16
      : (1 - whoWeServeFadeOut) * -16;

  // Phase 8: "TRACK RECORD" Deep Navy Section (0.53 -> 0.59)
  const trackRecordFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.525) / 0.028));
  const trackRecordFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.59) / 0.028));
  const trackRecordOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(trackRecordFadeIn, trackRecordFadeOut);
  const trackRecordTranslateY =
    scrollProgress < 0.56
      ? (1 - trackRecordFadeIn) * 16
      : (1 - trackRecordFadeOut) * -16;

  // Phase 9: "FEATURED TRANSACTION" White Section (0.61 -> 0.67)
  const featuredTransactionFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.605) / 0.028));
  const featuredTransactionFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.67) / 0.028));
  const featuredTransactionOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(featuredTransactionFadeIn, featuredTransactionFadeOut);
  const featuredTransactionTranslateY =
    scrollProgress < 0.64
      ? (1 - featuredTransactionFadeIn) * 16
      : (1 - featuredTransactionFadeOut) * -16;

  // Phase 10: "THE OUTCOME" White Section (0.69 -> 0.75)
  const outcomeFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.685) / 0.028));
  const outcomeFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.75) / 0.028));
  const outcomeOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(outcomeFadeIn, outcomeFadeOut);
  const outcomeTranslateY =
    scrollProgress < 0.72
      ? (1 - outcomeFadeIn) * 16
      : (1 - outcomeFadeOut) * -16;

  // Phase 11: "ABOUT TRICONNECTION" Deep Navy Section (0.77 -> 0.83)
  const aboutTriconnectionFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.765) / 0.028));
  const aboutTriconnectionFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.83) / 0.028));
  const aboutTriconnectionOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(aboutTriconnectionFadeIn, aboutTriconnectionFadeOut);
  const aboutTriconnectionTranslateY =
    scrollProgress < 0.80
      ? (1 - aboutTriconnectionFadeIn) * 16
      : (1 - aboutTriconnectionFadeOut) * -16;

  // Phase 12: "OUR PEOPLE" White Section (0.85 -> 0.91)
  const ourPeopleFadeIn = Math.max(0, Math.min(1, (scrollProgress - 0.845) / 0.028));
  const ourPeopleFadeOut = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.915) / 0.028));
  const ourPeopleOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.min(ourPeopleFadeIn, ourPeopleFadeOut);
  const ourPeopleTranslateY =
    scrollProgress < 0.88
      ? (1 - ourPeopleFadeIn) * 16
      : (1 - ourPeopleFadeOut) * -16;

  // Phase 13: "CONTACT US" Section + Footer (0.93 -> 1.00)
  const contactUsOpacity =
    isWhiteViewOpen || isJourneyViewOpen
      ? 0
      : Math.max(0, Math.min(1, (scrollProgress - 0.925) / 0.035));
  const contactUsTranslateY = (1 - contactUsOpacity) * 16;

  // "View More" White Background Section (01-04 Challenges) is controlled strictly by clicking "View More"
  const phase4WhiteOpacity = isWhiteViewOpen ? 1 : 0;
  const phase4WhiteTranslateY = isWhiteViewOpen ? 0 : 18;

  const handleViewMoreChallenges = () => {
    setIsWhiteViewOpen(true);
  };

  return (
    <main className="relative w-full bg-[#03192e] text-white select-none sm:select-auto">
      {/* SINGLE SECTION ONLY: Scroll-driven cinematic Hero Section */}
      <section
        ref={sectionRef}
        id="hero-section"
        aria-label="Beyond Deal Closure: End-to-End Landowner Advisory"
        className="relative w-full h-[1340vh]"
      >
        {/* Sticky Viewport Frame */}
        <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden">
          {/* TOP NAVIGATION BAR (Matches design image) */}
          <header className="relative z-30 w-full bg-white text-[#0b1320] shadow-xs shrink-0">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-7 lg:px-12 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
              {/* Left: Brand Logo */}
              <a
                href="#hero-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(NAV_ROW_1[0]);
                }}
                className="flex items-center shrink-0 focus:outline-none"
                aria-label="Triconnection Consulting Group Sdn Bhd"
              >
                {!logoError ? (
                  <img
                    src={LOGO_URL}
                    alt="TRICONNECTION CONSULTING GROUP SDN BHD"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="h-11 sm:h-14 lg:h-[62px] xl:h-[66px] w-auto object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-[#0c1d36] font-extrabold text-xl sm:text-2xl tracking-[0.22em]">
                      TRICONNECTION
                    </span>
                    <span className="text-[#c9a93a] text-[9px] tracking-[0.25em] font-semibold mt-0.5">
                      — CONSULTING GROUP SDN BHD —
                    </span>
                  </div>
                )}
              </a>

              {/* Center: Two-Row Desktop Navigation Menu */}
              <nav
                aria-label="Primary Navigation"
                className="hidden lg:flex flex-col items-center justify-center gap-y-2 px-2"
              >
                {/* Row 1 */}
                <div className="flex items-center justify-center gap-x-5 xl:gap-x-7">
                  {NAV_ROW_1.map((item) => {
                    const isActive = activeNavId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item)}
                        className={`text-[13px] xl:text-[14.5px] font-bold uppercase tracking-[0.02em] transition-colors cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'text-[#0b1320] underline decoration-[#c9a93a] decoration-2 underline-offset-4'
                            : 'text-[#0b1320] hover:text-[#c9a93a]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-center gap-x-5 xl:gap-x-7">
                  {NAV_ROW_2.map((item) => {
                    const isActive = activeNavId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item)}
                        className={`text-[13px] xl:text-[14.5px] font-bold uppercase tracking-[0.02em] transition-colors cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'text-[#0b1320] underline decoration-[#c9a93a] decoration-2 underline-offset-4'
                            : 'text-[#0b1320] hover:text-[#c9a93a]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </nav>

              {/* Right: Header CTA Button & Mobile Menu Trigger */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsDiscussModalOpen(true)}
                  className="bg-[#c9a93a] hover:bg-[#b8972d] active:scale-[0.99] text-white font-bold uppercase text-left px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11.5px] sm:text-[13px] xl:text-[14px] leading-[1.32] tracking-[0.09em] transition-all duration-150 cursor-pointer shrink-0"
                >
                  DISCUSS YOUR
                  <br />
                  LAND
                </button>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle Menu"
                  className="lg:hidden p-2 text-[#0b1320] hover:text-[#c9a93a] transition-colors cursor-pointer"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-lg">
                <div className="grid grid-cols-2 gap-3">
                  {ALL_NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`text-left py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        activeNavId === item.id ? 'text-[#c9a93a]' : 'text-[#0b1320]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* HERO STAGE WITH SCROLLING VIDEO BACKGROUND */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center">
            {/* Background Video Layer */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{
                transform: `scale(${videoScale.toFixed(4)})`,
                transition: 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform',
              }}
            >
              <video
                ref={videoRef}
                src={VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                crossOrigin="anonymous"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Measured Navy Gradient Scrim on Left for Text Legibility */}
            <div className="absolute inset-0 hero-left-scrim pointer-events-none" />

            {/* Foreground Hero Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-6 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Advisory Content Column */}
              <div className="w-full max-w-[525px] translate-x-[10%] translate-y-0">
                {/* Crossfading Content Stage above the permanently maintained 3 Trust Pillars */}
                <div className="relative grid grid-cols-1 grid-rows-1 items-end">
                  {/* LAYER 1 & 2 (Phase 1 Intro + Phase 2 Headline + Shared CTA Buttons) */}
                  <div className="col-start-1 row-start-1 flex flex-col">
                    {/* Upper Text Sub-Stage (Phase 1 Intro vs Phase 2 Headline) */}
                    <div className="relative grid grid-cols-1 grid-rows-1 items-end">
                      {/* PHASE 1: Beyond Deal Closure (Initial Scroll State) */}
                      <div
                        style={{
                          opacity: phase1Opacity,
                          transform: `translateY(${phase1TranslateY.toFixed(1)}px)`,
                          pointerEvents: phase1Opacity > 0.4 ? 'auto' : 'none',
                        }}
                        aria-hidden={phase1Opacity < 0.1}
                        className="col-start-1 row-start-1 transition-opacity duration-150 will-change-transform"
                      >
                        {/* Primary Display Headline */}
                        <h1 className="text-white font-bold text-[24px] sm:text-[33.5px] lg:text-[39px] xl:text-[41.5px] leading-[1.06] tracking-[0.01em]">
                          Beyond Deal Closure:
                          <br />
                          End-to-End
                          <br />
                          Landowner Advisory.
                        </h1>

                        {/* Gold Divider Line */}
                        <div className="w-full max-w-[488px] h-[1.5px] bg-[#c9a93a] my-1.5" />

                        {/* Gold Subheadline */}
                        <h2 className="text-[#c9a93a] font-semibold text-[15.5px] sm:text-[19.5px] lg:text-[22px] leading-[1.18] tracking-[0.055em] mb-1 sm:mb-1.5">
                          From Land Opportunity to
                          <br />
                          Long-Term Asset Value
                        </h2>

                        {/* Body Copy */}
                        <p
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="text-white/90 font-normal text-[11.5px] sm:text-[13.5px] lg:text-[14.5px] leading-[1.34] tracking-[0.055em] max-w-[415px]"
                        >
                          We guide landowners from land opportunity
                          <br className="hidden sm:inline" /> to long-term asset value
                          <br />
                          from land assessment and development
                          <br className="hidden sm:inline" /> partner selection to JV structuring,
                          <br className="hidden sm:inline" /> commercial negotiation, development
                          <br className="hidden sm:inline" /> oversight and eventual asset realisation.
                        </p>
                      </div>

                      {/* PHASE 2 HEADLINE: A Good Piece Of Land Is Only The Beginning. */}
                      <div
                        style={{
                          opacity: phase2HeadlineOpacity,
                          transform: `translateY(${phase2HeadlineTranslateY.toFixed(1)}px)`,
                          pointerEvents: phase2HeadlineOpacity > 0.4 ? 'auto' : 'none',
                        }}
                        aria-hidden={phase2HeadlineOpacity < 0.1}
                        className="col-start-1 row-start-1 pb-1.5 sm:pb-3 pt-7 sm:pt-9 transition-opacity duration-150 will-change-transform"
                      >
                        <h2 className="text-[#c9a93a] font-bold text-[30.5px] sm:text-[41px] lg:text-[47.5px] xl:text-[50px] leading-[1.18] tracking-[0.015em] -translate-y-[30%]">
                          A Good Piece Of
                          <br />
                          Land Is Only The
                          <br />
                          Beginning.
                        </h2>
                      </div>
                    </div>

                    {/* Two Hero Action Buttons (Maintained across Phase 1 & Phase 2, fades out in Phase 3) */}
                    <div
                      style={{
                        opacity: ctaButtonsOpacity,
                        transform: `translateY(${ctaButtonsTranslateY.toFixed(1)}px)`,
                        pointerEvents: ctaButtonsOpacity > 0.4 ? 'auto' : 'none',
                      }}
                      aria-hidden={ctaButtonsOpacity < 0.1}
                      className="mt-3.5 sm:mt-4.5 flex flex-wrap items-center gap-3 sm:gap-5.5 transition-opacity duration-150 will-change-transform"
                    >
                      <button
                        type="button"
                        onClick={handleExploreApproach}
                        className="bg-[#c9a93a] hover:bg-[#d5b543] active:scale-[0.99] text-white font-bold uppercase text-left px-4 py-2.5 sm:py-3 min-w-[156px] sm:min-w-[170px] text-[11.5px] sm:text-[13.5px] leading-[1.35] tracking-[0.09em] transition-all duration-150 cursor-pointer"
                      >
                        EXPLORE OUR
                        <br />
                        APPROACH
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsDiscussModalOpen(true)}
                        className="bg-[#03192e]/85 hover:bg-[#c9a93a]/15 active:scale-[0.99] border-[1.5px] border-[#c9a93a] text-[#c9a93a] font-bold uppercase text-left px-5 sm:px-6 py-2.5 sm:py-3 min-w-[156px] sm:min-w-[170px] text-[11.5px] sm:text-[13.5px] leading-[1.35] tracking-[0.09em] transition-all duration-150 cursor-pointer"
                      >
                        DISCUSS
                        <br />
                        YOUR LAND
                      </button>
                    </div>
                  </div>

                  {/* SHARED HEADER FOR PHASE 2 & PHASE 3 + PHASE 3 CHALLENGES LIST */}
                  <div
                    style={{
                      opacity: challengesHeaderOpacity,
                      transform: `translateY(${challengesHeaderTranslateY.toFixed(1)}px)`,
                      pointerEvents: phase3Opacity > 0.4 ? 'auto' : 'none',
                    }}
                    aria-hidden={challengesHeaderOpacity < 0.1}
                    className="col-start-1 row-start-1 self-start w-full flex flex-col transition-opacity duration-150 will-change-transform"
                  >
                    {/* Maintained Eyebrow Title across Phase 2 and Phase 3 */}
                    <p className="text-white font-normal uppercase text-[12.5px] sm:text-[15.5px] lg:text-[17.5px] tracking-[0.26em] mb-3 sm:mb-4">
                      THE LANDOWNER CHALLENGES
                    </p>

                    {/* Phase 3: 4 Challenge Items + Vertical Gold Divider + View More */}
                    <div
                      style={{
                        opacity: phase3Opacity,
                        transform: `translateY(${phase3TranslateY.toFixed(1)}px)`,
                        pointerEvents: phase3Opacity > 0.4 ? 'auto' : 'none',
                      }}
                      aria-hidden={phase3Opacity < 0.1}
                      className="flex flex-col transition-opacity duration-150 will-change-transform"
                    >
                      {/* 4 Challenge Items with Vertical Gold Bar on the Right */}
                      <div className="flex items-stretch justify-between max-w-[360px] sm:max-w-[390px]">
                        <div className="flex flex-col gap-y-2.5 sm:gap-y-3 pr-4">
                          {/* Item 1 */}
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <ChallengeHeadIcon />
                            <span className="text-white font-bold text-[10.5px] sm:text-[12px] leading-[1.35] tracking-[0.12em]">
                              KNOWLEDGE GAP &amp;
                              <br />
                              UNTAPPED POTENTIAL
                            </span>
                          </div>

                          {/* Item 2 */}
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <ChallengeDocumentIcon />
                            <span className="text-white font-bold text-[10.5px] sm:text-[12px] leading-[1.35] tracking-[0.12em]">
                              VETTING &amp; STRATEGIC
                              <br />
                              ALIGNMENT
                            </span>
                          </div>

                          {/* Item 3 */}
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <ChallengePuzzleIcon />
                            <span className="text-white font-bold text-[10.5px] sm:text-[12px] leading-[1.35] tracking-[0.12em]">
                              DEAL COMPLEXITY
                              <br />
                              Balancing developer
                            </span>
                          </div>

                          {/* Item 4 */}
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <ChallengeCheckIcon />
                            <span className="text-white font-bold text-[10.5px] sm:text-[12px] leading-[1.35] tracking-[0.12em]">
                              THE EXECUTION &amp;
                              <br />
                              REALISATION GAP
                            </span>
                          </div>
                        </div>

                        {/* Right Vertical Gold Line */}
                        <div className="w-[1.5px] bg-[#c9a93a]/90 my-1 shrink-0" />
                      </div>

                      {/* View More Action Row */}
                      <div className="mt-3 sm:mt-4 pl-[60px] sm:pl-[62px]">
                        <button
                          type="button"
                          onClick={handleViewMoreChallenges}
                          className="inline-flex items-center gap-3 text-[#c9a93a] hover:text-[#dfbe4c] font-bold text-[15px] sm:text-[17.5px] tracking-[0.06em] transition-colors cursor-pointer"
                        >
                          <span>View More</span>
                          <TripleChevronDownIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom 3 Trust Pillars (Maintained across Phases 1, 2, 3) */}
                <div
                  style={{ opacity: darkPillarsOpacity }}
                  className="mt-4.5 sm:mt-5.5 flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-3 lg:gap-x-5 transition-opacity duration-150"
                >
                  {/* Pillar 1 */}
                  <div className="flex items-center gap-2.5">
                    <ShieldCheckIcon />
                    <span className="text-white font-semibold text-[10.5px] sm:text-[11px] leading-[1.35] tracking-[0.06em] whitespace-nowrap">
                      Independent
                      <br />
                      Advice.
                    </span>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-center gap-2.5">
                    <ConnectedNodesIcon />
                    <span className="text-white font-semibold text-[10.5px] sm:text-[11px] leading-[1.35] tracking-[0.06em] whitespace-nowrap">
                      Connected Developer
                      <br />
                      Relationships.
                    </span>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-center gap-2.5">
                    <BriefcaseIcon />
                    <span className="text-white font-semibold text-[10.5px] sm:text-[11px] leading-[1.35] tracking-[0.06em] whitespace-nowrap">
                      Transaction
                      <br />
                      Expertise.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-Section Panel (Shown when user clicks a Nav Item) */}
              {selectedBrief && (
                <div className="w-full lg:w-[600px] xl:w-[650px] bg-white text-[#0b1320] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-200 relative max-h-[82vh] overflow-y-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedBrief(null)}
                    aria-label="Close panel"
                    className="absolute top-4 right-4 text-[#0b1320]/50 hover:text-[#0b1320] p-1.5 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <div className="pr-6">
                      <p className="text-[#c9a93a] text-xs font-semibold uppercase tracking-[0.12em]">
                        {selectedBrief.kicker}
                      </p>
                      <h3 className="text-[#0b1320] font-bold text-lg sm:text-xl mt-1 leading-snug">
                        {selectedBrief.title}
                      </h3>
                    </div>

                    <div className="w-full h-[1px] bg-[#c9a93a]/40 my-3.5" />

                    <p className="text-[#1f2937] text-xs sm:text-sm leading-relaxed mb-4">
                      {selectedBrief.summary}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {selectedBrief.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-[#1f2937]"
                        >
                          <span className="text-[#c9a93a] font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedBrief(null);
                          setIsDiscussModalOpen(true);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#c9a93a] hover:text-[#0b1320] transition-colors cursor-pointer"
                      >
                        <span>Discuss Your Land</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PHASE 4 & PHASE 5 (SCROLL): SMOOTH FADE TRANSITION INTO WHITE BACKGROUND STAGE */}
            <div
              style={{
                opacity: whiteStageOpacity,
                pointerEvents: whiteStageOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={whiteStageOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#0b1320] flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div className="relative w-full max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 grid-rows-1 items-center">
                {/* PHASE 4: WHAT WE DO */}
                <div
                  style={{
                    opacity: whatWeDoOpacity,
                    transform: `translateY(${whatWeDoTranslateY.toFixed(1)}px)`,
                    pointerEvents: whatWeDoOpacity > 0.45 ? 'auto' : 'none',
                  }}
                  aria-hidden={whatWeDoOpacity < 0.1}
                  className="col-start-1 row-start-1 w-full transition-opacity duration-300 will-change-transform"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
                    {/* Left Column: WHAT WE DO + Bridging the Gap... */}
                    <div className="lg:col-span-6">
                      <h2 className="text-[#c9a93a] font-light uppercase text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] tracking-[0.22em] mb-4 sm:mb-5">
                        WHAT WE DO
                      </h2>
                      <h3 className="text-[#000000] font-medium text-[19px] sm:text-[23px] lg:text-[26px] leading-[1.35] tracking-[0.03em]">
                        Bridging the Gap Between Land
                        <br />
                        Strategy and Developer Execution.
                      </h3>
                    </div>

                    {/* Right Column: Description Paragraph */}
                    <div className="lg:col-span-6">
                      <p className="text-[#1f2937] font-light text-[13.5px] sm:text-[15.5px] lg:text-[16.5px] leading-[1.55] tracking-[0.08em] max-w-[540px]">
                        Triconnection acts as the landowner’s
                        <br className="hidden sm:inline" /> central strategic partner and single point of
                        <br className="hidden sm:inline" /> coordination - bringing together the right
                        <br className="hidden sm:inline" /> expertise and counterparties, creating
                        <br className="hidden sm:inline" /> clearer alignment and reducing deal friction
                        <br className="hidden sm:inline" /> to help move complex development
                        <br className="hidden sm:inline" /> transactions from strategy to completion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PHASE 5: HOW WE CREATE VALUE / THE TRICONNECTION MODEL */}
                <div
                  style={{
                    opacity: howWeCreateValueOpacity,
                    transform: `translateY(${howWeCreateValueTranslateY.toFixed(1)}px)`,
                    pointerEvents: howWeCreateValueOpacity > 0.45 ? 'auto' : 'none',
                  }}
                  aria-hidden={howWeCreateValueOpacity < 0.1}
                  className="col-start-1 row-start-1 w-full flex flex-col items-center text-center transition-opacity duration-300 will-change-transform"
                >
                  {/* Gold Eyebrow Title */}
                  <h2 className="text-[#c9a93a] font-normal uppercase text-[26px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[0.22em]">
                    HOW WE CREATE VALUE
                  </h2>

                  {/* Bold Black Subheading */}
                  <h3 className="text-[#000000] font-extrabold uppercase text-[15px] sm:text-[19px] lg:text-[22px] tracking-[0.14em] mt-2 sm:mt-3 mb-7 sm:mb-9">
                    THE TRICONNECTION MODEL
                  </h3>

                  {/* 7-Step Horizontal Process Row */}
                  <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-3">
                    {[
                      'UNDERSTAND',
                      'CONNECT',
                      'STRUCTURE',
                      'EXECUTE',
                      'DELIVER',
                      'OPTIMISE',
                      'REALISE',
                    ].map((step, index, arr) => (
                      <React.Fragment key={step}>
                        <span className="text-[#0f2236] font-semibold uppercase text-[12px] sm:text-[14px] lg:text-[15.5px] tracking-[0.14em] whitespace-nowrap">
                          {step}
                        </span>
                        {index < arr.length - 1 && <StepArrowIcon />}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Boxed View More Button */}
                  <div className="mt-8 sm:mt-10">
                    <button
                      type="button"
                      onClick={() => setIsJourneyViewOpen(true)}
                      className="border border-[#c9a93a] bg-white hover:bg-[#c9a93a]/10 active:scale-[0.99] px-7 sm:px-9 py-2.5 sm:py-3 inline-flex items-center justify-center gap-3.5 transition-all duration-150 cursor-pointer"
                    >
                      <span className="text-[#c9a93a] font-bold text-[15px] sm:text-[17px] tracking-[0.08em]">
                        View More
                      </span>
                      <TripleChevronDownIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 6 (SCROLL): SMOOTH FADE TRANSITION INTO DEEP NAVY "WHY TRICONNECTION" SECTION */}
            <div
              style={{
                opacity: whyTriconnectionOpacity,
                pointerEvents: whyTriconnectionOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={whyTriconnectionOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-[#02182e] text-white flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${whyTriconnectionTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 transition-transform duration-300 will-change-transform"
              >
                {/* Header Block */}
                <div className="mb-10 sm:mb-14">
                  <h2 className="text-[#c9a93a] font-light text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.15] tracking-[0.14em]">
                    Why Triconnection
                  </h2>
                  <h3 className="text-white font-extrabold text-[23px] sm:text-[34px] lg:text-[41px] leading-[1.2] tracking-[0.08em] mt-1.5 sm:mt-2">
                    We Built Around Land Owners
                  </h3>
                </div>

                {/* 5 Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 items-start">
                  {/* Column 1 */}
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center sm:justify-start pl-0 sm:pl-4 mb-5">
                      <TargetBullseyeIcon />
                    </div>
                    <p className="text-white font-semibold uppercase text-[11.5px] sm:text-[13px] lg:text-[13.5px] leading-[1.5] tracking-[0.12em]">
                      INDEPENDENT
                      <br />
                      ADVISORY
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center sm:justify-start pl-0 sm:pl-4 mb-5">
                      <HandshakeOutlineIcon />
                    </div>
                    <p className="text-white font-semibold uppercase text-[11.5px] sm:text-[13px] lg:text-[13.5px] leading-[1.5] tracking-[0.12em]">
                      SPECIALISED JV
                      <br />
                      FOCUS
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center sm:justify-start pl-0 sm:pl-6 mb-5">
                      <PadlockCheckIcon />
                    </div>
                    <p className="text-white font-semibold uppercase text-[11.5px] sm:text-[13px] lg:text-[13.5px] leading-[1.5] tracking-[0.12em]">
                      STRICT DISCRETION
                      <br />
                      &amp; CONFIDENTIALITY
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center sm:justify-start pl-0 sm:pl-6 mb-5">
                      <HubNetworkOutlineIcon />
                    </div>
                    <p className="text-white font-semibold uppercase text-[11.5px] sm:text-[13px] lg:text-[13.5px] leading-[1.5] tracking-[0.12em]">
                      CONNECTED
                      <br />
                      PARTNER ACCESS
                    </p>
                  </div>

                  {/* Column 5 */}
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center sm:justify-start pl-0 sm:pl-6 mb-5">
                      <GrowthChartIcon />
                    </div>
                    <p className="text-white font-semibold uppercase text-[11.5px] sm:text-[13px] lg:text-[13.5px] leading-[1.5] tracking-[0.12em]">
                      END-TO-END
                      <br />
                      STEWARDSHIP
                    </p>
                  </div>
                </div>

                {/* Centered Boxed View More Button */}
                <div className="mt-10 sm:mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      const whyItem =
                        ALL_NAV_ITEMS.find((i) => i.id === 'why-triconnection') || NAV_ROW_1[3];
                      setSelectedBrief(whyItem);
                    }}
                    className="border border-[#c9a93a] bg-transparent hover:bg-[#c9a93a]/15 active:scale-[0.99] px-7 sm:px-9 py-2.5 sm:py-3 inline-flex items-center justify-center gap-3.5 transition-all duration-150 cursor-pointer"
                  >
                    <span className="text-[#c9a93a] font-bold text-[15px] sm:text-[17px] tracking-[0.1em]">
                      View More
                    </span>
                    <TripleChevronDownIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* PHASE 7 (SCROLL): SMOOTH FADE TRANSITION INTO WHITE "WHO WE SERVE" SECTION */}
            <div
              style={{
                opacity: whoWeServeOpacity,
                pointerEvents: whoWeServeOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={whoWeServeOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#0b1320] flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${whoWeServeTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-14 py-5 sm:py-7 transition-transform duration-300 will-change-transform"
              >
                {/* Header Block */}
                <div className="mb-4 sm:mb-5">
                  <h2 className="text-[#c9a93a] font-normal uppercase text-[22px] sm:text-[30px] lg:text-[35px] leading-[1.12] tracking-[0.18em]">
                    WHO WE SERVE
                  </h2>
                  <h3 className="text-[#041b31] font-extrabold uppercase text-[18px] sm:text-[26px] lg:text-[32px] leading-[1.18] tracking-[0.06em] mt-1 mb-2">
                    DIFFERENT STAKEHOLDERS. ONE PLATFORM.
                  </h3>
                  <p className="text-[#0b1320] font-semibold text-[11px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.45] tracking-[0.11em] max-w-[1220px]">
                    We work across the development ecosystem — bringing together landowners,
                    developers, investors and trusted professional partners to create aligned
                    opportunities and stronger outcomes.
                  </p>
                </div>

                {/* 4 Stakeholder Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                  {/* Card 1: LANDOWNERS */}
                  <div className="bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 flex flex-col">
                    <div className="w-full h-[120px] sm:h-[132px] bg-[#041b31]/10 overflow-hidden mb-3 shrink-0">
                      <img
                        src={LANDOWNER_IMG_URL}
                        alt="Landowners"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h4 className="text-[#c9a93a] font-bold uppercase text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.3] tracking-[0.14em] mb-2.5">
                      LANDOWNERS
                    </h4>
                    <p className="text-[#111827] font-semibold text-[9.5px] sm:text-[10.5px] leading-[1.42] tracking-[0.08em]">
                      Discover what your land could become.
                      <br />
                      Strategic advice, development opportunities and structured Joint Ventures —
                      from land assessment to long-term asset realisation.
                    </p>
                  </div>

                  {/* Card 2: DEVELOPERS */}
                  <div className="bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 flex flex-col">
                    <div className="w-full h-[120px] sm:h-[132px] bg-[#041b31]/10 overflow-hidden mb-3 shrink-0">
                      <img
                        src={DEVELOPER_IMG_URL}
                        alt="Developers"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h4 className="text-[#c9a93a] font-bold uppercase text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.3] tracking-[0.14em] mb-2.5">
                      DEVELOPERS
                    </h4>
                    <p className="text-[#111827] font-semibold text-[9.5px] sm:text-[10.5px] leading-[1.42] tracking-[0.08em]">
                      Connect. Partner. Grow.
                      <br />
                      Bring your land or development requirements to Triconnection. We connect
                      suitable opportunities with landowners, co-development partners and capital
                      partners based on strategic and commercial fit.
                    </p>
                  </div>

                  {/* Card 3: INVESTORS & CAPITAL PARTNERS */}
                  <div className="bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 flex flex-col">
                    <div className="w-full h-[120px] sm:h-[132px] bg-[#041b31]/10 overflow-hidden mb-3 shrink-0">
                      <img
                        src={INVESTOR_IMG_URL}
                        alt="Investors and Capital Partners"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h4 className="text-[#c9a93a] font-bold uppercase text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.3] tracking-[0.14em] mb-2.5">
                      INVESTORS &amp;
                      <br />
                      CAPITAL
                      <br />
                      PARTNERS
                    </h4>
                    <p className="text-[#111827] font-semibold text-[9.5px] sm:text-[10.5px] leading-[1.42] tracking-[0.08em]">
                      Access structured opportunities.
                      <br />
                      Selected development and investment opportunities aligned with your investment
                      objectives and mandate.
                    </p>
                  </div>

                  {/* Card 4: PROFESSIONAL PARTNERS */}
                  <div className="bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 flex flex-col">
                    <div className="relative w-full h-[120px] sm:h-[132px] bg-[#041b31] overflow-hidden mb-3 shrink-0 flex items-center justify-center">
                      <img
                        src={PROFESSIONAL_PARTNERS_IMG_URL}
                        alt="Professional Partners"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0';
                        }}
                        className="w-full h-full object-cover object-center relative z-10"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-[#041b31] to-[#0b2b4c]">
                        <HandshakeOutlineIcon />
                      </div>
                    </div>
                    <h4 className="text-[#c9a93a] font-bold uppercase text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.3] tracking-[0.14em] mb-2.5">
                      PROFESSIONAL
                      <br />
                      PARTNERS
                    </h4>
                    <p className="text-[#111827] font-semibold text-[9.5px] sm:text-[10.5px] leading-[1.42] tracking-[0.08em]">
                      Create More Value for Your Clients.
                      <br />
                      Introduce landowners to Triconnection when they require strategic land
                      advisory, development partner selection or JV structuring— while you continue
                      to serve them in your existing professional capacity.
                    </p>
                  </div>
                </div>

                {/* Centered Bottom CTA Button */}
                <div className="mt-5 sm:mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsDiscussModalOpen(true)}
                    className="bg-[#bd8e4a] hover:bg-[#a97c3a] active:scale-[0.99] text-white font-normal uppercase px-7 sm:px-10 py-2.5 sm:py-3 text-[12px] sm:text-[14px] lg:text-[15px] tracking-[0.14em] transition-all duration-150 cursor-pointer"
                  >
                    -DISCUSS YOUR OPPORTUNITY-
                  </button>
                </div>
              </div>
            </div>

            {/* PHASE 8 (SCROLL): SMOOTH FADE TRANSITION INTO DEEP NAVY "TRACK RECORD" SECTION */}
            <div
              style={{
                opacity: trackRecordOpacity,
                pointerEvents: trackRecordOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={trackRecordOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-[#02182e] text-white flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${trackRecordTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-12 transition-transform duration-300 will-change-transform"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 xl:gap-x-10 items-start">
                  {/* Left Intro Column */}
                  <div className="lg:col-span-4 lg:pt-11">
                    <h2 className="text-[#c9a93a] font-bold text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.1] tracking-[0.13em]">
                      Track Record
                    </h2>

                    <h3 className="text-white font-bold uppercase text-[14.5px] sm:text-[17px] lg:text-[18.5px] xl:text-[19.5px] leading-[1.45] tracking-[0.14em] mt-4 sm:mt-5">
                      PROVEN EXPERIENCE.
                      <br />
                      REAL DEVELOPMENT VALUE.
                    </h3>

                    <p className="text-white font-semibold text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.58] tracking-[0.1em] mt-7 sm:mt-10 max-w-[440px]">
                      Demonstrated ability to originate,
                      <br />
                      connect and close high-value
                      <br />
                      transactions across land, development
                      <br />
                      and capital.
                    </p>
                  </div>

                  {/* Right 3 Metric Columns */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 items-start">
                    {/* Metric Column 1: RM600M+ */}
                    <div className="relative flex flex-col items-start">
                      {/* Right Vertical Divider Line aligned with Icon Row */}
                      <div
                        aria-hidden="true"
                        className="hidden md:block absolute right-0 top-[14px] w-[1px] h-[94px] bg-white/35"
                      />

                      <div className="pl-2 sm:pl-5 mb-5 sm:mb-6">
                        <TrackTrophyIcon />
                      </div>

                      <h4 className="text-[#c9a93a] font-bold uppercase text-[24px] sm:text-[28px] lg:text-[30px] xl:text-[32px] leading-[1.15] tracking-[0.14em]">
                        RM600M+
                      </h4>

                      <p className="text-[#c9a93a] font-semibold text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.54] tracking-[0.11em] mt-7 sm:mt-9">
                        JV DEVELOPMENT GDV
                        <br />
                        Landowner–developer
                        <br />
                        JV successfully
                        <br />
                        structured and
                        <br />
                        closed.
                      </p>
                    </div>

                    {/* Metric Column 2: RM5M+ */}
                    <div className="relative flex flex-col items-start md:pl-2">
                      {/* Right Vertical Divider Line aligned with Icon Row */}
                      <div
                        aria-hidden="true"
                        className="hidden md:block absolute right-0 top-[14px] w-[1px] h-[94px] bg-white/35"
                      />

                      <div className="pl-2 sm:pl-6 mb-5 sm:mb-6">
                        <TrackGrowthIcon />
                      </div>

                      <h4 className="text-[#c9a93a] font-bold uppercase text-[24px] sm:text-[28px] lg:text-[30px] xl:text-[32px] leading-[1.15] tracking-[0.14em]">
                        RM5M+
                      </h4>

                      <p className="text-[#c9a93a] font-semibold text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.54] tracking-[0.11em] mt-7 sm:mt-9">
                        Connected a
                        <br />
                        Chinese company
                        <br />
                        with a Malaysian
                        <br />
                        PE partner for
                        <br />
                        market entry and
                        <br />
                        investment.
                      </p>
                    </div>

                    {/* Metric Column 3: CURRENT PIPELINE */}
                    <div className="flex flex-col items-start md:pl-2">
                      <div className="pl-2 sm:pl-7 mb-5 sm:mb-6">
                        <TrackChainHandIcon />
                      </div>

                      <h4 className="text-[#c9a93a] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[16px] leading-[1.46] tracking-[0.14em]">
                        CURRENT PIPELINE
                        <br />
                        JV &amp; DEVELOPMENT
                        <br />
                        OPPORTUNITIES
                      </h4>

                      <p className="text-[#c9a93a] font-semibold text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.54] tracking-[0.11em] mt-4 sm:mt-5">
                        Selected opportunities
                        <br />
                        currently under
                        <br />
                        negotiation and
                        <br />
                        structuring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 9 (SCROLL): SMOOTH FADE TRANSITION INTO WHITE "FEATURED TRANSACTION" SECTION */}
            <div
              style={{
                opacity: featuredTransactionOpacity,
                pointerEvents: featuredTransactionOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={featuredTransactionOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#000000] flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${featuredTransactionTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-10 transition-transform duration-300 will-change-transform"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
                  {/* Left Column: FEATURED TRANSACTION + Headline + Aerial Sunset Land Image */}
                  <div className="lg:col-span-5 flex flex-col">
                    <h2 className="text-[#c9a93a] font-bold uppercase text-[23px] sm:text-[29px] lg:text-[33px] xl:text-[35px] leading-[1.22] tracking-[0.16em]">
                      FEATURED
                      <br />
                      TRANSACTION
                    </h2>

                    <h3 className="text-[#000000] font-extrabold uppercase text-[18px] sm:text-[22px] lg:text-[25px] xl:text-[27px] leading-[1.34] tracking-[0.11em] mt-3 sm:mt-4 mb-5 sm:mb-6">
                      FROM A 10+ YEAR SEARCH
                      <br />
                      TO A SUCCESSFUL JV
                    </h3>

                    <div className="w-full overflow-hidden bg-slate-100">
                      <img
                        src={FEATURED_TRANSACTION_LAND_IMG_URL}
                        alt="Featured Transaction Land Aerial View"
                        referrerPolicy="no-referrer"
                        className="w-full h-[200px] sm:h-[250px] lg:h-[270px] xl:h-[290px] object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Right Column: Narrative Paragraphs with Inline Gold Highlights */}
                  <div className="lg:col-span-7 lg:pt-[82px] xl:pt-[92px] flex flex-col justify-between">
                    <p className="text-[#000000] font-semibold text-[13.5px] sm:text-[16px] lg:text-[18px] xl:text-[19.5px] leading-[1.48] tracking-[0.11em]">
                      The <span className="text-[#c9a93a] font-bold">landowner</span> had been
                      seeking a suitable{' '}
                      <span className="text-[#c9a93a] font-bold">development partner</span> for more
                      than 10 years. Following{' '}
                      <span className="text-[#c9a93a] font-bold">Triconnection</span>’s appointment,
                      we engaged and evaluated multiple potential JV partners and considered several
                      term sheets, working through commercial considerations and issues between
                      stakeholders to identify a partner aligned with the landowner’s expectations.
                    </p>

                    <p className="text-[#000000] font-semibold text-[13.5px] sm:text-[16px] lg:text-[18px] xl:text-[19.5px] leading-[1.48] tracking-[0.11em] mt-6 sm:mt-8">
                      Within less than two years of our appointment, the landowner–developer JV was
                      successfully structured and closed, with{' '}
                      <span className="text-[#c9a93a] font-bold">RM600M+</span> in development GDV.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 10 (SCROLL): SMOOTH FADE TRANSITION INTO WHITE "THE OUTCOME" SECTION */}
            <div
              style={{
                opacity: outcomeOpacity,
                pointerEvents: outcomeOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={outcomeOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#041b31] flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${outcomeTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12 transition-transform duration-300 will-change-transform"
              >
                {/* Centered Heading */}
                <h2 className="text-[#041b31] font-extrabold uppercase text-center text-[26px] sm:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.12] tracking-[0.12em] mb-4 sm:mb-5 lg:mb-3">
                  THE OUTCOME
                </h2>

                {/* Top Row: 3 Gold-Bordered Boxes */}
                <div className="w-full max-w-[1260px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 lg:gap-6">
                  {/* Box 1: 10+ YEARS / Landowner's search */}
                  <div className="w-full sm:w-[320px] lg:w-[315px] xl:w-[330px] min-h-[82px] sm:min-h-[88px] border-[1.5px] border-[#c9a93a] bg-white px-4 py-3.5 flex flex-col items-center justify-center text-center lg:-mt-2">
                    <span className="text-[#041b31] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.14em]">
                      10+ YEARS
                    </span>
                    <span className="text-[#041b31] font-bold text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.12em] mt-1">
                      Landowner’s search
                    </span>
                  </div>

                  {/* Box 2: SEVERAL / Term sheets considered */}
                  <div className="w-full sm:w-[320px] lg:w-[315px] xl:w-[330px] min-h-[82px] sm:min-h-[88px] border-[1.5px] border-[#c9a93a] bg-white px-3 py-3.5 flex flex-col items-center justify-center text-center">
                    <span className="text-[#050a12] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.14em]">
                      SEVERAL
                    </span>
                    <span className="text-[#050a12] font-bold text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.11em] mt-1 whitespace-nowrap">
                      Term sheets considered
                    </span>
                  </div>

                  {/* Box 3: RM600M+ / JV development GDV */}
                  <div className="w-full sm:w-[320px] lg:w-[315px] xl:w-[330px] min-h-[82px] sm:min-h-[88px] border-[1.5px] border-[#c9a93a] bg-white px-4 py-3.5 flex flex-col items-center justify-center text-center lg:mt-1.5">
                    <span className="text-[#050a12] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.14em]">
                      RM600M+
                    </span>
                    <span className="text-[#050a12] font-bold text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.12em] mt-1">
                      JV development GDV
                    </span>
                  </div>
                </div>

                {/* Bottom Row: 2 Staggered Gold-Bordered Boxes */}
                <div className="w-full max-w-[810px] mx-auto mt-4 sm:mt-5 lg:mt-7 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 lg:gap-8">
                  {/* Box 4: MULTIPLE / JV partners evaluated */}
                  <div className="w-full sm:w-[320px] lg:w-[315px] xl:w-[330px] min-h-[82px] sm:min-h-[88px] border-[1.5px] border-[#c9a93a] bg-white px-4 py-3.5 flex flex-col items-center justify-center text-center">
                    <span className="text-[#050a12] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.14em]">
                      MULTIPLE
                    </span>
                    <span className="text-[#050a12] font-bold text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.12em] mt-1">
                      JV partners evaluated
                    </span>
                  </div>

                  {/* Box 5: < 2 YEARS / Appointment to closure */}
                  <div className="w-full sm:w-[320px] lg:w-[315px] xl:w-[330px] min-h-[82px] sm:min-h-[88px] border-[1.5px] border-[#c9a93a] bg-white px-3 py-3.5 flex flex-col items-center justify-center text-center">
                    <span className="text-[#050a12] font-bold uppercase text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.14em]">
                      &lt; 2 YEARS
                    </span>
                    <span className="text-[#050a12] font-bold text-[13px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.35] tracking-[0.12em] mt-1 whitespace-nowrap">
                      Appointment to closure
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 11 (SCROLL): SMOOTH FADE TRANSITION INTO DEEP NAVY "ABOUT TRICONNECTION" SECTION */}
            <div
              style={{
                opacity: aboutTriconnectionOpacity,
                pointerEvents: aboutTriconnectionOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={aboutTriconnectionOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-[#01152c] text-white flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              {/* Left-Anchored Background Image with Right-Side Deep Navy Blend */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <img
                  src={ABOUT_TRICONNECTION_BG_URL}
                  alt="About Triconnection Connected City Network"
                  referrerPolicy="no-referrer"
                  className="w-full lg:w-[60%] h-full object-cover object-left"
                />
                {/* Smooth Gradient Scrim blending the right side of the image into solid #01152c */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(1,21,44,0.35) 0%, rgba(1,21,44,0.12) 38%, rgba(1,21,44,0.78) 50%, #01152c 57%, #01152c 100%)',
                  }}
                />
                {/* Mobile legibility scrim */}
                <div className="absolute inset-0 bg-[#01152c]/75 lg:hidden" />
              </div>

              {/* Foreground Content Container */}
              <div
                style={{
                  transform: `translateY(${aboutTriconnectionTranslateY.toFixed(1)}px)`,
                }}
                className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-12 flex justify-end transition-transform duration-300 will-change-transform"
              >
                <div className="w-full lg:w-[50%] xl:w-[49%] flex flex-col">
                  {/* Gold 3-Line Uppercase Heading */}
                  <h2 className="text-[#c9a93a] font-semibold uppercase text-[19px] sm:text-[24px] lg:text-[27px] xl:text-[30px] leading-[1.32] tracking-[0.14em] mb-6 sm:mb-8">
                    ABOUT TRICONNECTION
                    <br />
                    A STRATEGIC PARTNER FOR
                    <br />
                    LANDOWNERS
                  </h2>

                  {/* Paragraph 1 */}
                  <p className="text-white font-semibold text-[11.5px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-[1.52] tracking-[0.11em]">
                    <span className="text-[#c9a93a] font-semibold">Triconnection</span> was
                    established to give landowners greater
                    <br className="hidden xl:inline" /> clarity, confidence and control when
                    navigating complex
                    <br className="hidden xl:inline" /> development opportunities.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="text-white font-semibold text-[11.5px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-[1.52] tracking-[0.11em] mt-5 sm:mt-6">
                    We believe landowners deserve more than introductions. They
                    <br className="hidden xl:inline" /> deserve a trusted advisor who brings an
                    independent,
                    <br className="hidden xl:inline" /> strategic and commercial perspective to
                    important
                    <br className="hidden xl:inline" /> development decisions — helping them assess
                    opportunities,
                    <br className="hidden xl:inline" /> navigate complexity and make informed
                    choices.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-white font-semibold text-[11.5px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-[1.52] tracking-[0.11em] mt-5 sm:mt-6">
                    Our role is to bring together strategic insight, transaction
                    <br className="hidden xl:inline" /> expertise and the right relationships —
                    helping landowners
                    <br className="hidden xl:inline" /> structure aligned partnerships and preserve
                    value throughout
                    <br className="hidden xl:inline" /> the development lifecycle.
                  </p>
                </div>
              </div>
            </div>

            {/* PHASE 12 (SCROLL): SMOOTH FADE TRANSITION INTO WHITE "OUR PEOPLE" SECTION */}
            <div
              style={{
                opacity: ourPeopleOpacity,
                pointerEvents: ourPeopleOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={ourPeopleOpacity < 0.1}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#000000] flex items-center justify-center transition-opacity duration-300 overflow-y-auto"
            >
              <div
                style={{
                  transform: `translateY(${ourPeopleTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-12 transition-transform duration-300 will-change-transform"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-4 xl:gap-6">
                  {/* Left Column: OUR PEOPLE + Gold Line + Subtitle + Description */}
                  <div className="w-full lg:w-[32%] xl:w-[31%] flex flex-col shrink-0">
                    <h2 className="text-[#c9a93a] font-bold uppercase text-[36px] sm:text-[46px] lg:text-[50px] xl:text-[54px] leading-[1.08] tracking-[0.16em]">
                      OUR
                      <br />
                      PEOPLE
                    </h2>

                    {/* Horizontal Gold Divider Line */}
                    <div className="w-full max-w-[335px] h-[1.5px] bg-[#c9a93a] mt-2.5 mb-3.5" />

                    {/* 2-Line Subheading */}
                    <p className="text-[#000000] font-semibold text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] tracking-[0.12em] mb-6 sm:mb-7">
                      Experienced professionals.
                      <br />
                      Connected expertise.
                    </p>

                    {/* 7-Line Multidisciplinary Description */}
                    <p className="text-[#000000] font-semibold text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.52] tracking-[0.12em]">
                      Triconnection brings together
                      <br />
                      multidisciplinary experience
                      <br />
                      across property development,
                      <br />
                      banking, finance, legal and
                      <br />
                      strategic advisory, supported by
                      <br />
                      a trusted network of specialist
                      <br />
                      professionals and advisers.
                    </p>
                  </div>

                  {/* Center & Right Columns: Circular Portrait + Hanz Chung Profile */}
                  <div className="w-full lg:w-[68%] xl:w-[69%] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-0">
                    {/* Center Circular Portrait with Gold Ring */}
                    <div className="w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full border-[2px] border-[#c9a93a] overflow-hidden bg-[#f3f5f7] shrink-0">
                      <img
                        src={DIRECTOR_IMG_URL}
                        alt="Hanz Chung - Director"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Right Profile Text Column hugging the right contour of the circle */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:-ml-3 xl:-ml-4 lg:pt-6">
                      {/* Hanz Chung in Bold Gold */}
                      <h3 className="text-[#c9a93a] font-bold text-[40px] sm:text-[52px] lg:text-[60px] xl:text-[66px] leading-[0.98] tracking-[0.04em]">
                        <span className="block">Hanz</span>
                        <span className="block lg:pl-4 mt-0.5">Chung</span>
                      </h3>

                      {/* Director Role Title */}
                      <p className="text-[#000000] font-bold text-[21px] sm:text-[26px] lg:text-[29px] xl:text-[31px] leading-[1.2] tracking-[0.12em] mt-1.5 mb-2.5 lg:pl-8">
                        Director
                      </p>

                      {/* 6-Line Curved-Indent Bio */}
                      <div className="text-[#000000] font-semibold text-[12.5px] sm:text-[14px] lg:text-[14.5px] xl:text-[15.5px] leading-[1.52] tracking-[0.12em]">
                        <span className="block lg:pl-9">Experience across banking,</span>
                        <span className="block lg:pl-8">finance, property development and</span>
                        <span className="block lg:pl-6">strategic advisory, with a focus on</span>
                        <span className="block lg:pl-4">Joint Venture structuring,</span>
                        <span className="block lg:pl-1.5">commercial negotiations and</span>
                        <span className="block lg:-ml-1">complex development transactions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 13 (SCROLL): SMOOTH FADE TRANSITION INTO "CONTACT US" SECTION + BOTTOM WHITE NAV BAR */}
            <div
              style={{
                opacity: contactUsOpacity,
                pointerEvents: contactUsOpacity > 0.45 ? 'auto' : 'none',
              }}
              aria-hidden={contactUsOpacity < 0.1}
              className="fixed inset-0 z-40 w-full h-screen bg-[#041527] text-white flex flex-col justify-between transition-opacity duration-300 overflow-y-auto"
            >
              {/* Main Upper Area with CONTACT US BACKGROUND Image */}
              <div className="relative flex-1 w-full flex items-center overflow-hidden py-5 sm:py-7">
                {/* Full-Bleed Background Image (Directly applied from CONTACT_US_BG_URL) */}
                <div className="absolute inset-0 pointer-events-none select-none">
                  <img
                    src={CONTACT_US_BG_URL}
                    alt="Contact Us Background"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Foreground Two-Column Content */}
                <div
                  style={{
                    transform: `translateY(${contactUsTranslateY.toFixed(1)}px)`,
                  }}
                  className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-14 transition-transform duration-300 will-change-transform"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center gap-8 lg:gap-8 xl:gap-12">
                    {/* Left Column: Gold Headline + Subheadline + Contact Details */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                      <h2 className="text-[#c9a93a] font-bold uppercase text-[22px] sm:text-[30px] lg:text-[34px] xl:text-[38px] leading-[1.2] tracking-[0.12em]">
                        YOUR LAND MAY BE WORTH
                        <br />
                        MORE THAN YOU THINK.
                      </h2>

                      <p className="text-white font-light text-[15.5px] sm:text-[20px] lg:text-[23.5px] xl:text-[26px] leading-[1.3] tracking-[0.02em] mt-1.5">
                        Let’s explore what your land could become.
                      </p>

                      {/* Contact Details Block */}
                      <div className="mt-7 sm:mt-10 lg:mt-12 pl-2 sm:pl-3.5 text-white font-light text-[11.5px] sm:text-[13px] lg:text-[14px] xl:text-[14.5px] leading-[1.82] tracking-[0.13em] space-y-0.5">
                        <p>General Line: +603-</p>
                        <p>Phone: +6012-8688313</p>
                        <p>WhatsApp: +6012-8688313</p>
                        <p>Email:</p>
                        <p>Website: www.triconnectiongroup.com</p>
                        <p>Location: VO-948, Common Ground KL Eco</p>
                        <p>City,Level 19, Boutique Office 1 (B01-C),</p>
                        <p>Menara 2, No.3 Jalan Bangsar,</p>
                        <p>59200 Kuala Lumpur</p>
                      </div>
                    </div>

                    {/* Right Column: 3 Horizontal Circular Icons + White Form Box + Let's Connect! CTA */}
                    <div className="lg:col-span-6 flex flex-col items-center w-full max-w-[540px] mx-auto lg:ml-auto lg:mr-0">
                      {/* Top Row: 3 Circular White-Outline Icons Horizontally */}
                      <div className="w-full grid grid-cols-3 gap-2 sm:gap-5 items-start justify-items-center">
                        {/* Icon 1: CONFIDENTIAL CONSULTATION */}
                        <div className="flex flex-col items-center text-center">
                          <ContactConfidentialIcon />
                          <span className="mt-2 text-white font-normal uppercase text-[9px] sm:text-[10.5px] lg:text-[11px] leading-[1.35] tracking-[0.14em]">
                            CONFIDENTIAL
                            <br />
                            CONSULTATION
                          </span>
                        </div>

                        {/* Icon 2: STRATEGIC ADVISORY */}
                        <div className="flex flex-col items-center text-center">
                          <ContactAdvisoryIcon />
                          <span className="mt-2 text-white font-normal uppercase text-[9px] sm:text-[10.5px] lg:text-[11px] leading-[1.35] tracking-[0.14em]">
                            STRATEGIC
                            <br />
                            ADVISORY
                          </span>
                        </div>

                        {/* Icon 3: DEVELOPMENT OPPORTUNITIES */}
                        <div className="flex flex-col items-center text-center">
                          <ContactOpportunitiesIcon />
                          <span className="mt-2 text-white font-normal uppercase text-[9px] sm:text-[10.5px] lg:text-[11px] leading-[1.35] tracking-[0.14em]">
                            DEVELOPMENT
                            <br />
                            OPPORTUNITIES
                          </span>
                        </div>
                      </div>

                      {/* Middle White Form Box to Collect Info + Bottom Let's Connect! Submit Button */}
                      <form
                        onSubmit={handleFormSubmit}
                        className="w-full flex flex-col items-center mt-4 sm:mt-5"
                      >
                        <div className="w-full bg-white text-[#0b1320] p-4 sm:p-5 shadow-xl min-h-[185px] sm:min-h-[195px] flex flex-col justify-center">
                          {formSubmitted ? (
                            <div className="text-center py-3 space-y-2">
                              <CheckCircle2 className="w-9 h-9 text-[#c9a93a] mx-auto" />
                              <h3 className="text-sm sm:text-base font-bold text-[#0b1320] uppercase tracking-[0.08em]">
                                Thank You — Inquiry Received
                              </h3>
                              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                                Our advisory team will review your details in strict confidence and
                                contact you shortly.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  setFormSubmitted(false);
                                  setFormData({
                                    name: '',
                                    phone: '',
                                    email: '',
                                    location: '',
                                    landSize: '',
                                    notes: '',
                                  });
                                }}
                                className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c9a93a] hover:text-[#0b1320] underline cursor-pointer pt-1"
                              >
                                Send Another Inquiry
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-2.5 sm:space-y-3">
                              {formError && (
                                <p className="text-[11px] text-red-700 bg-red-50 border border-red-200 px-2.5 py-1">
                                  {formError}
                                </p>
                              )}

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#0b1320]/80 mb-0.5">
                                    Full Name *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                      setFormData({ ...formData, name: e.target.value })
                                    }
                                    placeholder="Your Name / Entity"
                                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#c9a93a] px-2.5 py-1.5 text-xs text-[#0b1320] placeholder:text-slate-400 focus:outline-none"
                                  />
                                </div>

                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#0b1320]/80 mb-0.5">
                                    Phone / WhatsApp *
                                  </label>
                                  <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) =>
                                      setFormData({ ...formData, phone: e.target.value })
                                    }
                                    placeholder="+6012-345 6789"
                                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#c9a93a] px-2.5 py-1.5 text-xs text-[#0b1320] placeholder:text-slate-400 focus:outline-none"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#0b1320]/80 mb-0.5">
                                    Email Address *
                                  </label>
                                  <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                      setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="name@email.com"
                                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#c9a93a] px-2.5 py-1.5 text-xs text-[#0b1320] placeholder:text-slate-400 focus:outline-none"
                                  />
                                </div>

                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#0b1320]/80 mb-0.5">
                                    Land Location / State *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) =>
                                      setFormData({ ...formData, location: e.target.value })
                                    }
                                    placeholder="e.g. Kuala Lumpur / Selangor"
                                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#c9a93a] px-2.5 py-1.5 text-xs text-[#0b1320] placeholder:text-slate-400 focus:outline-none"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#0b1320]/80 mb-0.5">
                                  Land Size / Inquiry Details
                                </label>
                                <input
                                  type="text"
                                  value={formData.notes}
                                  onChange={(e) =>
                                    setFormData({ ...formData, notes: e.target.value })
                                  }
                                  placeholder="Land size (acres), JV interest, or message..."
                                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#c9a93a] px-2.5 py-1.5 text-xs text-[#0b1320] placeholder:text-slate-400 focus:outline-none"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Gold "Let's Connect!" Button & "-DISCUSS YOUR LAND-" Subtitle */}
                        <div className="w-full flex flex-col items-center mt-4 sm:mt-5">
                          <button
                            type="submit"
                            className="w-[80%] sm:w-[76%] bg-[#c9a93a] hover:bg-[#b8972d] active:scale-[0.99] text-white font-extrabold text-[19px] sm:text-[23px] lg:text-[26px] leading-[1.15] tracking-[0.06em] py-1.5 sm:py-2 px-6 shadow-md transition-all duration-150 cursor-pointer text-center"
                          >
                            Let’s Connect!
                          </button>

                          <button
                            type="button"
                            onClick={() => setIsDiscussModalOpen(true)}
                            className="mt-1.5 text-white hover:text-[#c9a93a] font-light uppercase text-[13.5px] sm:text-[16.5px] lg:text-[18.5px] leading-[1.2] tracking-[0.06em] transition-colors cursor-pointer"
                          >
                            -DISCUSS YOUR LAND-
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom White Footer Strip with Logo & Two-Row Navigation Menu */}
              <footer className="relative z-10 w-full bg-white text-[#000000] border-t border-slate-200 shrink-0">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-2.5 sm:py-3.5 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6">
                  {/* Left: Brand Logo */}
                  <a
                    href="#hero-section"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(NAV_ROW_1[0]);
                    }}
                    className="flex items-center shrink-0 lg:pl-8 xl:pl-14 focus:outline-none"
                    aria-label="Triconnection Consulting Group Sdn Bhd"
                  >
                    <img
                      src={LOGO_URL}
                      alt="TRICONNECTION CONSULTING GROUP SDN BHD"
                      referrerPolicy="no-referrer"
                      className="h-11 sm:h-13 lg:h-[58px] w-auto object-contain"
                    />
                  </a>

                  {/* Right: Two-Row Navigation Menu matching attached image */}
                  <nav
                    aria-label="Footer Navigation"
                    className="flex flex-col items-center justify-center gap-y-1.5 sm:gap-y-2 lg:pr-6 xl:pr-12"
                  >
                    {/* Row 1 */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 xl:gap-x-7 gap-y-1">
                      {NAV_ROW_1.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleNavClick(item)}
                          className="text-[11px] sm:text-[13px] lg:text-[14.5px] xl:text-[15.5px] font-bold uppercase tracking-[0.02em] text-[#000000] hover:text-[#c9a93a] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 xl:gap-x-7 gap-y-1">
                      {NAV_ROW_2.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleNavClick(item)}
                          className="text-[11px] sm:text-[13px] lg:text-[14.5px] xl:text-[15.5px] font-bold uppercase tracking-[0.02em] text-[#000000] hover:text-[#c9a93a] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
              </footer>
            </div>

            {/* SUB-PAGE OVERLAY FOR "HOW WE CREATE VALUE": THE LANDOWNER JOURNEY (01 - 07) */}
            <div
              style={{
                opacity: isJourneyViewOpen ? 1 : 0,
                pointerEvents: isJourneyViewOpen ? 'auto' : 'none',
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.97) 68%, rgba(255,255,255,0.86) 79%, rgba(255,255,255,0.18) 89%, rgba(255,255,255,0.0) 100%)',
              }}
              aria-hidden={!isJourneyViewOpen}
              className="absolute inset-0 z-25 w-full h-full text-[#041b31] flex items-center transition-opacity duration-500 overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsJourneyViewOpen(false)}
                aria-label="Close The Landowner Journey details"
                className="absolute top-4 right-5 sm:top-6 sm:right-8 z-30 bg-white/85 hover:bg-white text-[#041b31]/70 hover:text-[#041b31] rounded-full p-2 shadow-sm transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                style={{
                  transform: `translateY(${isJourneyViewOpen ? 0 : 18}px)`,
                }}
                className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-4 sm:py-6 transition-transform duration-500 will-change-transform"
              >
                <div className="w-full max-w-[920px]">
                  {/* Header Block */}
                  <h2 className="text-[#c9a93a] font-light text-[22px] sm:text-[30px] lg:text-[35px] leading-[1.12] tracking-[0.18em]">
                    How We Create Value ?
                  </h2>
                  <h3 className="text-[#041b31] font-extrabold uppercase text-[16px] sm:text-[21px] lg:text-[24px] leading-[1.2] tracking-[0.11em] mt-1 mb-3.5 sm:mb-5">
                    THE LANDOWNER JOURNEY
                  </h3>

                  {/* 7-Step Vertical Timeline */}
                  <div className="relative pl-1">
                    {/* Continuous Vertical Connecting Line Behind Numbered Circles */}
                    <div
                      aria-hidden="true"
                      className="absolute left-[21px] sm:left-[23px] top-0 bottom-4 w-[1.5px] bg-[#bd8e4a]/45"
                    />

                    <div className="space-y-2.5 sm:space-y-3">
                      {[
                        {
                          num: '01',
                          title: 'UNDERSTAND',
                          desc: 'Understand the landowner’s objectives, the land and its development potential.',
                        },
                        {
                          num: '02',
                          title: 'CONNECT',
                          desc: 'Identify and engage suitable development partners and, where required, capital partners.',
                        },
                        {
                          num: '03',
                          title: 'STRUCTURE',
                          desc: 'Shape the right commercial framework and align stakeholder interests.',
                        },
                        {
                          num: '04',
                          title: 'EXECUTE',
                          desc: 'Navigate commercial negotiations and transaction matters through JVA signing.',
                        },
                        {
                          num: '05',
                          title: 'DELIVER',
                          desc: 'Maintain commercial oversight across key development milestones and obligations.',
                        },
                        {
                          num: '06',
                          title: 'OPTIMISE',
                          desc: 'Support ongoing commercial decisions and opportunities to preserve and enhance value as the development progresses.',
                        },
                        {
                          num: '07',
                          title: 'REALISE',
                          desc: 'Help unlock the remaining value of the asset upon completion.',
                        },
                      ].map((step) => (
                        <div key={step.num} className="relative flex items-center gap-3.5 sm:gap-4">
                          {/* Warm Bronze/Gold Numbered Circle */}
                          <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#bd8e4a] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <span className="font-light text-[12.5px] sm:text-[14px] tracking-tight tabular-nums">
                              {step.num}
                            </span>
                          </div>

                          {/* Step Title & Description */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[#041b31] font-extrabold uppercase text-[10.5px] sm:text-[11.5px] lg:text-[12px] leading-[1.25] tracking-[0.12em]">
                              {step.title}
                            </h4>
                            <p className="text-[#10253a] font-semibold text-[10.5px] sm:text-[11.5px] lg:text-[12px] leading-[1.32] tracking-[0.06em] mt-0.5 max-w-[760px]">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SUB-SECTION OVERLAY: SMOOTH FADE TRANSITION INTO WHITE "THE LANDOWNER CHALLENGES" (Shown only when user clicks View More) */}
            <div
              style={{
                opacity: phase4WhiteOpacity,
                pointerEvents: isWhiteViewOpen ? 'auto' : 'none',
              }}
              aria-hidden={!isWhiteViewOpen}
              className="absolute inset-0 z-20 w-full h-full bg-white text-[#0b1320] flex items-center transition-opacity duration-500 overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsWhiteViewOpen(false)}
                aria-label="Close Landowner Challenges details"
                className="absolute top-5 right-6 sm:top-7 sm:right-10 text-[#0b1320]/50 hover:text-[#0b1320] p-2 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                style={{
                  transform: `translateY(${phase4WhiteTranslateY.toFixed(1)}px)`,
                }}
                className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-6 sm:py-10 transition-transform duration-500 will-change-transform"
              >
                <div className="w-full max-w-[760px] sm:translate-x-[6%] lg:translate-x-[10%]">
                  {/* Eyebrow Header */}
                  <p className="text-[#1a2b3c] font-normal uppercase text-[13.5px] sm:text-[16.5px] lg:text-[18.5px] tracking-[0.26em] mb-5 sm:mb-7">
                    THE LANDOWNER CHALLENGES
                  </p>

                  {/* 4 Numbered Challenge Items (01 - 04) */}
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    {/* Item 01 */}
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="shrink-0 mt-0.5">
                        <ChallengeHeadIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.3] tracking-[0.06em] uppercase">
                          <span className="text-[#d49b16] font-bold mr-2.5">01</span>
                          <span className="text-[#0b1320] font-medium">
                            KNOWLEDGE GAP &amp; UNTAPPED POTENTIAL
                          </span>
                        </h3>
                        <p
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="mt-1 sm:mt-1.5 pl-7 sm:pl-9 text-[#111827] text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.48] tracking-[0.02em] max-w-[630px]"
                        >
                          Evaluating highest-and-best-use options requires specialised insight.
                          Without it, landowners may miss opportunities to unlock greater value
                          through better development strategies and JV structures.
                        </p>
                      </div>
                    </div>

                    {/* Item 02 */}
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="shrink-0 mt-0.5">
                        <ChallengeDocumentIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.3] tracking-[0.06em] uppercase">
                          <span className="text-[#d49b16] font-bold mr-2.5">02</span>
                          <span className="text-[#0b1320] font-medium">
                            VETTING &amp; STRATEGIC ALIGNMENT
                          </span>
                        </h3>
                        <p
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="mt-1 sm:mt-1.5 pl-7 sm:pl-9 text-[#111827] text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.48] tracking-[0.02em] max-w-[630px]"
                        >
                          Multiple approaches and introductions can make it challenging to assess
                          the right fit, compare commercial terms, maintain confidentiality and
                          identify credible development partners.
                        </p>
                      </div>
                    </div>

                    {/* Item 03 */}
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="shrink-0 mt-0.5">
                        <ChallengePuzzleIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.3] tracking-[0.06em] uppercase">
                          <span className="text-[#d49b16] font-bold mr-2.5">03</span>
                          <span className="text-[#0b1320] font-medium">
                            DEAL COMPLEXITY
                          </span>
                        </h3>
                        <p
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="mt-1 sm:mt-1.5 pl-7 sm:pl-9 text-[#111827] text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.48] tracking-[0.02em] max-w-[630px]"
                        >
                          Balancing developer commercial requirements with landowner financial
                          expectations requires careful structuring and negotiation. Without clear
                          deal alignment, negotiation friction can stall or prevent potential Joint
                          Ventures from progressing.
                        </p>
                      </div>
                    </div>

                    {/* Item 04 */}
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="shrink-0 mt-0.5">
                        <ChallengeCheckIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.3] tracking-[0.06em] uppercase">
                          <span className="text-[#d49b16] font-bold mr-2.5">04</span>
                          <span className="text-[#0b1320] font-medium">
                            THE EXECUTION &amp; REALISATION GAP
                          </span>
                        </h3>
                        <p
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="mt-1 sm:mt-1.5 pl-7 sm:pl-9 text-[#111827] text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.48] tracking-[0.02em] max-w-[630px]"
                        >
                          Signing a contract is only the beginning. Over the development lifecycle,
                          limited visibility over developer obligations, milestones, payments,
                          handover and eventual asset realisation can leave landowners uncertain
                          about whether the value agreed will ultimately be realised.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Bottom Scroll-Scrub Progress Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20 pointer-events-none">
              <div
                className="h-full bg-[#c9a93a] transition-all duration-100"
                style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL LAND ADVISORY MODAL ("DISCUSS YOUR LAND") */}
      {isDiscussModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="discuss-land-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-lg bg-[#041b31] border border-[#c9a93a] p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[#c9a93a] text-xs font-semibold uppercase tracking-[0.12em]">
                  Confidential Landowner Consultation
                </p>
                <h2
                  id="discuss-land-title"
                  className="text-xl sm:text-2xl font-bold text-white mt-1"
                >
                  Discuss Your Land
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsDiscussModalOpen(false);
                  setFormSubmitted(false);
                  setFormError('');
                }}
                aria-label="Close modal"
                className="text-white/70 hover:text-white p-1 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-[1px] bg-[#c9a93a]/50 my-4" />

            {formSubmitted ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#c9a93a] mx-auto" />
                <h3 className="text-lg font-bold text-white">
                  Advisory Request Received
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our
                  managing advisory partners will review your land details in strict confidence and
                  contact you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsDiscussModalOpen(false);
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      location: '',
                      landSize: '',
                      notes: '',
                    });
                  }}
                  className="mt-2 bg-[#c9a93a] hover:bg-[#d6b642] text-white font-bold uppercase px-6 py-2.5 text-xs tracking-[0.1em] transition-colors cursor-pointer"
                >
                  Return to Advisory Overview
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Share preliminary details of your land asset for a confidential feasibility and
                  joint-venture structuring discussion with our senior partners.
                </p>

                {formError && (
                  <p className="text-xs text-amber-300 bg-amber-950/60 border border-amber-500/40 px-3 py-2">
                    {formError}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Full Name / Entity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dato' / Tan Sri / Owner Name"
                      className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="owner@domain.com"
                      className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Approximate Land Area
                    </label>
                    <input
                      type="text"
                      value={formData.landSize}
                      onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      placeholder="e.g. 25 Acres / Freehold"
                      className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    Land Location (State / Mukim / Corridor) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Klang Valley, Johor Bahru, Penang, Seremban"
                    className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    Advisory Objectives (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Joint Venture structuring, developer selection, or valuation advisory..."
                    className="w-full bg-[#021222] border border-white/25 focus:border-[#c9a93a] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsDiscussModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#c9a93a] hover:bg-[#d6b642] text-white font-bold uppercase px-6 py-2.5 text-xs tracking-[0.1em] transition-colors cursor-pointer"
                  >
                    Request Confidential Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
