'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Hammer,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Property, getAllProperties } from '@/lib/propertiesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface PropertyShowcaseLayoutProps {
  property: Property;
  routeContext: 'projects' | 'properties';
}

type JumpSectionId = 'overview' | 'units-plans' | 'renders' | 'specs';

interface KeyValuePair {
  label: string;
  value: string;
}

interface SpecStripItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface UnitCardConfig {
  title: string;
  subtitle: string;
  enquiryTopic: string;
  ctaLabel: string;
  pairs: KeyValuePair[];
}

interface PlanCardConfig {
  eyebrow: string;
  title: string;
  detail: string;
  actionLabel: string;
  enquiryTopic: string;
}

interface PropertyPageConfig {
  shortName: string;
  shortLocation: string;
  eyebrow: string;
  lead: string;
  primaryCtaLabel: string;
  primaryCtaTopic: string;
  whatsappGreeting: string;
  jumpSections: { id: JumpSectionId; label: string }[];
  specStrip: SpecStripItem[];
  overviewTitle: string;
  overviewPairs: KeyValuePair[];
  unitsEyebrow: string;
  unitsHeading: string;
  unitsHeaderActionLabel: string;
  unitsHeaderActionTopic: string;
  unitCards: UnitCardConfig[];
  unitGridColsClass: string;
  plans: PlanCardConfig[];
  rendersEyebrow: string;
  rendersHeading: string;
  galleryCategories: { id: string; label: string }[];
  specsEyebrow: string;
  specsHeading: string;
  specsLeftTitle: string;
  specsLeftPairs: KeyValuePair[];
  specsRightTitle: string;
  specsRightPairs: KeyValuePair[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButtonLabel: string;
  footnoteHeading: string;
  footnotes: { title: string; body: string }[];
}

function getShowcaseConfig(property: Property): PropertyPageConfig {
  if (property.id === 'ivy-homes-abijo') {
    return {
      shortName: 'Ivy Homes Abijo GRA',
      shortLocation: 'Abijo GRA, Lekki',
      eyebrow: 'Completed Residences · Abijo GRA, Lekki Axis, Lagos',
      lead: 'Completed luxury-finished 1-, 2-, and 3-bedroom apartments in Abijo GRA—the only GRA in the Lekki axis—with 24/7 solar-backed power and immediate key handover.',
      primaryCtaLabel: 'Book Walkthrough / Purchase',
      primaryCtaTopic: 'Ivy Homes Abijo GRA — Inspection & Purchase Inquiry',
      whatsappGreeting:
        'Hello ChapelHill Multicompany Limited, I would like to schedule a walkthrough or request installment terms for Ivy Homes Abijo GRA (1, 2, or 3-Bedroom Flats).',
      jumpSections: [
        { id: 'overview', label: 'Overview' },
        { id: 'units-plans', label: 'Units & Plans' },
        { id: 'renders', label: 'Gallery' },
        { id: 'specs', label: 'Specs' },
      ],
      specStrip: [
        { label: 'Residences', value: '1, 2 & 3 Bed Flats', icon: BedDouble },
        { label: 'Guide Pricing', value: '₦50M – ₦75M', icon: Building2 },
        { label: 'Location', value: 'Abijo GRA, Lekki', icon: MapPin },
        { label: 'Handover', value: 'Completed · Immediate', icon: ShieldCheck },
      ],
      overviewTitle: 'Ivy Homes Abijo GRA at a Glance',
      overviewPairs: [
        {
          label: 'Location',
          value: 'Abijo GRA, Lekki Axis, Lagos (paved roads, under 3 mins to Lekki-Epe Expy)',
        },
        {
          label: 'Key Connectivity',
          value: '30 mins to Dangote Refinery · 45 mins to Victoria Island',
        },
        {
          label: 'Site & Footprint',
          value: '861.88 sqm parcel · 318.66 sqm building · 3 floors · 12 parking spaces',
        },
        {
          label: 'Power & Security',
          value: '24/7 power backed by installed solar system · 24/7 manned security',
        },
        {
          label: 'Payment Options',
          value: 'Outright purchase or flexible installmental payment plans available',
        },
      ],
      unitsEyebrow: 'Unit Options & Payment Structure',
      unitsHeading: 'Completed Flats & Purchase Pathways',
      unitsHeaderActionLabel: 'Request Installment Terms',
      unitsHeaderActionTopic: 'Ivy Homes Abijo GRA — Outright & Installmental Terms',
      unitGridColsClass: 'grid-cols-1 md:grid-cols-3 gap-5',
      unitCards: [
        {
          title: '1-Bedroom Flat',
          subtitle: 'Luxury-finished residence with fitted kitchen, solar power, and parking.',
          enquiryTopic: 'Ivy Homes Abijo GRA — 1 Bedroom Flat (₦50M)',
          ctaLabel: 'Enquire on 1-Bed',
          pairs: [
            { label: 'Guide Price', value: '₦50,000,000 ($34,774)' },
            { label: 'Floor Area', value: '65 sqm (700 sqft)' },
            { label: 'Layout', value: '1 Bed · 1 Bath' },
            { label: 'Purchase Track', value: 'Outright or Installments' },
          ],
        },
        {
          title: '2-Bedroom Flat',
          subtitle: 'Dual-ensuite apartment with living/dining salon, balcony, and fitted kitchen.',
          enquiryTopic: 'Ivy Homes Abijo GRA — 2 Bedroom Flat (₦65M)',
          ctaLabel: 'Enquire on 2-Bed',
          pairs: [
            { label: 'Guide Price', value: '₦65,000,000 ($45,207)' },
            { label: 'Floor Area', value: '110 sqm (1,184 sqft)' },
            { label: 'Layout', value: '2 Ensuite Beds · 2 Baths' },
            { label: 'Purchase Track', value: 'Outright or Installments' },
          ],
        },
        {
          title: '3-Bedroom Flat',
          subtitle: 'Spacious family apartment with master ensuite, dining salon, and pantry kitchen.',
          enquiryTopic: 'Ivy Homes Abijo GRA — 3 Bedroom Flat (₦75M)',
          ctaLabel: 'Enquire on 3-Bed',
          pairs: [
            { label: 'Guide Price', value: '₦75,000,000 ($52,161)' },
            { label: 'Floor Area', value: '165 sqm (1,776 sqft)' },
            { label: 'Layout', value: '3 Ensuite Beds · 3 Baths' },
            { label: 'Purchase Track', value: 'Outright or Installments' },
          ],
        },
      ],
      plans: [
        {
          eyebrow: 'Step 01 · Initial Deposit',
          title: 'Commitment & Reservation',
          detail: 'Reservation deposit and execution of Contract of Sale for your chosen flat.',
          actionLabel: 'Reserve a Flat',
          enquiryTopic: 'Ivy Homes Abijo GRA — Reservation Inquiry',
        },
        {
          eyebrow: 'Step 02 · Installments',
          title: 'Structured Balance',
          detail: 'Flexible installmental payment schedule tailored to verified buyer terms.',
          actionLabel: 'Discuss Plan',
          enquiryTopic: 'Ivy Homes Abijo GRA — Installment Schedule',
        },
        {
          eyebrow: 'Step 03 · Move-In',
          title: 'Immediate Key Handover',
          detail: 'Balance settlement, Deed of Assignment execution, and immediate occupancy.',
          actionLabel: 'Book Walkthrough',
          enquiryTopic: 'Ivy Homes Abijo GRA — Physical Inspection',
        },
      ],
      rendersEyebrow: 'Completed Property Gallery',
      rendersHeading: 'Interior Finishes, Kitchens & Exterior Forecourt',
      galleryCategories: [
        { id: 'all', label: `All Photos (${property.gallery.length})` },
        { id: 'exterior', label: 'Exterior & Parking' },
        { id: 'living', label: 'Living Salon' },
        { id: 'kitchen', label: 'Fitted Kitchen' },
        { id: 'bedroom', label: 'Bedroom Suite' },
      ],
      specsEyebrow: 'Engineering, Utilities & Title',
      specsHeading: 'Infrastructure, Solar Power & Interior Specifications',
      specsLeftTitle: 'Infrastructure, Power & Security',
      specsLeftPairs: [
        {
          label: 'Roads & Drainage',
          value: 'Fully interlocked internal roads and parking court with covered estate drainage.',
        },
        {
          label: '24/7 Solar Power Supply',
          value: 'Continuous electricity backed by a fully installed solar energy system.',
        },
        {
          label: 'Water & Gate Security',
          value: 'Treated potable water supply, 24/7 gatehouse security, and controlled vehicle access.',
        },
        {
          label: 'Optional Accessory Packages',
          value: 'Add-on appliances available: double-door fridge, AC units, washer, microwave & cable.',
        },
      ],
      specsRightTitle: 'Finishes, Title & Walkthroughs',
      specsRightPairs: [
        {
          label: 'Interior Finishes',
          value: 'Fitted kitchens with custom cabinetry, durable luxury tiles, and expansive glazing.',
        },
        {
          label: 'Title Documentation',
          value: 'Registered unencumbered GRA title with approved residential building plans.',
        },
        {
          label: 'Parking & Highway Access',
          value: '12 dedicated car parking spaces under 3 minutes from Lekki-Epe Expressway.',
        },
        {
          label: 'Physical Site Walkthrough',
          value: 'Arrange immediate inspection or installment terms via WhatsApp (+234 803 286 5488).',
        },
      ],
      ctaEyebrow: 'Completed Turnkey Delivery · ChapelHill Multicompany Limited',
      ctaHeading: 'Schedule a Walkthrough or Request Payment Terms',
      ctaBody:
        'Units at Ivy Homes Abijo GRA are finished and ready for inspection. Connect with our advisory desk for private viewings or structured installment schedules.',
      ctaButtonLabel: 'Book Physical Inspection',
      footnoteHeading: 'Pricing, Title & Legal Footnote',
      footnotes: [
        {
          title: 'Pricing & FX Reference:',
          body: 'USD equivalents ($34,774–$52,161) are indicative reference values at publication; binding Naira prices and installment schedules are confirmed in signed offer documentation.',
        },
        {
          title: 'Title & Optional Packages:',
          body: 'Registered GRA title and approved building plans are made available for independent buyer due diligence prior to closing. Optional home appliance accessory packages are quoted separately.',
        },
      ],
    };
  }

  if (property.id === 'ogudu-gra-project') {
    return {
      shortName: 'IVY Homes, Ogudu GRA',
      shortLocation: 'Ogudu GRA, Lagos',
      eyebrow: 'SOLD OUT · Construction Ongoing · Ogudu GRA, Lagos',
      lead: 'Private 5-bedroom multi-level penthouse residence currently under active construction in Ogudu GRA, Lagos. All units are 100% SOLD OUT—enquire about upcoming developments.',
      primaryCtaLabel: 'Enquire About Future Developments',
      primaryCtaTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
      whatsappGreeting:
        'Hello ChapelHill Multicompany Limited, I saw IVY Homes, Ogudu GRA is SOLD OUT while construction is ongoing. Please keep me informed on upcoming and future developments.',
      jumpSections: [
        { id: 'overview', label: 'Overview' },
        { id: 'units-plans', label: 'Units & Status' },
        { id: 'renders', label: 'Renders' },
        { id: 'specs', label: 'Specs' },
      ],
      specStrip: [
        { label: 'Availability', value: 'SOLD OUT', icon: ShieldCheck },
        { label: 'Build Status', value: 'Construction Ongoing', icon: Hammer },
        { label: 'Residence Type', value: '5-Bed Penthouse + BQ', icon: BedDouble },
        { label: 'Location', value: 'Ogudu GRA, Lagos', icon: MapPin },
      ],
      overviewTitle: 'IVY Homes, Ogudu GRA at a Glance',
      overviewPairs: [
        {
          label: 'Availability Status',
          value: 'SOLD OUT — 100% allocated and closed to new unit purchases',
        },
        {
          label: 'Construction Status',
          value: 'Active construction ongoing across building envelope and structural stages',
        },
        {
          label: 'Location',
          value: 'Ogudu GRA, Mainland Prime, Lagos (direct Third Mainland connectivity)',
        },
        {
          label: 'Architectural Scope',
          value: 'Multi-level 5-Bed Penthouse (440 sqm) + Ensuite Service Quarters (24 sqm)',
        },
        {
          label: 'Future Releases',
          value: 'Register priority interest for upcoming ChapelHill residential developments',
        },
      ],
      unitsEyebrow: 'Allocation & Active Build Phases',
      unitsHeading: 'Sold-Out Units & Ongoing Construction Milestones',
      unitsHeaderActionLabel: 'Register for Future Projects',
      unitsHeaderActionTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
      unitGridColsClass: 'grid-cols-1 md:grid-cols-2 gap-6',
      unitCards: [
        {
          title: '5-Bedroom Master Penthouse Suite',
          subtitle:
            'Multi-level penthouse currently under construction and fully allocated.',
          enquiryTopic: 'Future Developments (Similar to Ogudu GRA 5-Bed Penthouse)',
          ctaLabel: 'Enquire for Future Projects',
          pairs: [
            { label: 'Availability', value: 'SOLD OUT (Construction Ongoing)' },
            { label: 'Floor Area', value: '440 sqm (4,736 sqft)' },
            { label: 'Configuration', value: '5 Beds · 6 Baths' },
            { label: 'Key Spaces', value: 'Sky Terrace, Study & Dressing Suite' },
          ],
        },
        {
          title: 'Ensuite Service Quarters (BQ)',
          subtitle:
            'Auxiliary staff accommodation with independent service entry, fully allocated.',
          enquiryTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
          ctaLabel: 'Enquire for Future Projects',
          pairs: [
            { label: 'Availability', value: 'SOLD OUT (Construction Ongoing)' },
            { label: 'Floor Area', value: '24 sqm (258 sqft)' },
            { label: 'Configuration', value: '1 Bed · 1 Bath (Ensuite)' },
            { label: 'Access', value: 'Independent Service Entrance' },
          ],
        },
      ],
      plans: [
        {
          eyebrow: 'Completed Stage',
          title: 'Substructure & Structural Frame',
          detail: 'Foundation works, structural column framing, and concrete decks executed.',
          actionLabel: 'Enquire Future Projects',
          enquiryTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
        },
        {
          eyebrow: 'In Progress',
          title: 'Ongoing Construction & Envelope',
          detail: 'Active site construction across building envelope, blockwork, and detailing.',
          actionLabel: 'Enquire Future Projects',
          enquiryTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
        },
        {
          eyebrow: 'Scheduled Phase',
          title: 'Upcoming MEP & Finishes',
          detail: 'Mechanical, electrical, plumbing, glazing, and interior finishes prior to delivery.',
          actionLabel: 'Enquire Future Projects',
          enquiryTopic: 'Future Developments (Enquiry from IVY Homes, Ogudu GRA)',
        },
      ],
      rendersEyebrow: 'Approved Perspectives & Specifications',
      rendersHeading: 'Architectural Renders & Project Visuals (SOLD OUT)',
      galleryCategories: [
        { id: 'all', label: `All Visuals (${property.gallery.length})` },
        { id: 'exterior', label: 'Exterior & Envelope' },
        { id: 'living', label: 'Salon Concepts' },
        { id: 'bedroom', label: 'Suite Renders' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'interior', label: 'Interiors' },
      ],
      specsEyebrow: 'Construction Scope & Planned Systems',
      specsHeading: 'Ongoing Civil Works & Planned Specifications',
      specsLeftTitle: 'Active Construction & Envelope',
      specsLeftPairs: [
        {
          label: 'Structural Superstructure',
          value: 'Reinforced concrete frame, roof slab, and cantilevered terraces under active build.',
        },
        {
          label: 'Engineering Supervision',
          value: 'Scheduled quality checks and on-site structural oversight by ChapelHill engineers.',
        },
        {
          label: 'Fenestration & Envelope',
          value: 'Double-glazed tempered safety glass with powder-coated aluminum profiles.',
        },
        {
          label: 'Acoustic & Thermal Detailing',
          value: 'Engineered separation and insulation specified between primary living spaces.',
        },
      ],
      specsRightTitle: 'Planned Systems & Future Releases',
      specsRightPairs: [
        {
          label: 'Power & Smart Pre-Wiring',
          value: 'Planned smart automation conduits, solar inverter backup, and estate power routing.',
        },
        {
          label: 'Specified Interior Finishes',
          value: 'Porcelain slab reception floors, fitted kitchen schedule, and concealed AC routing.',
        },
        {
          label: 'Title & Approvals',
          value: 'Registered residential title and approved building plans.',
        },
        {
          label: 'Upcoming Developments Desk',
          value: 'Register priority interest for upcoming builds via WhatsApp (+234 803 286 5488).',
        },
      ],
      ctaEyebrow: 'SOLD OUT · Construction Ongoing · ChapelHill Multicompany Limited',
      ctaHeading: 'Interested in Upcoming & Future Developments?',
      ctaBody:
        'IVY Homes, Ogudu GRA is currently under active construction and 100% SOLD OUT. Submit an enquiry to receive early updates on upcoming ChapelHill residential projects.',
      ctaButtonLabel: 'Enquire About Future Developments',
      footnoteHeading: 'Allocation, Construction & Visual Footnote',
      footnotes: [
        {
          title: 'SOLD OUT & Active Construction Notice:',
          body: 'IVY Homes, Ogudu GRA is currently under active construction and is 100% SOLD OUT. The development is not completed, ready for occupancy, or open for unit sales.',
        },
        {
          title: 'Visual Previews & Future Releases:',
          body: 'Project gallery visuals present approved architectural perspectives and design intent during ongoing construction. Prospective buyers may register with our advisory desk for upcoming developments.',
        },
      ],
    };
  }

  // Default: IVY Heights, Ikate, Lekki Phase 1, Lagos
  return {
    shortName: 'IVY Heights',
    shortLocation: 'Ikate, Lekki Phase 1',
    eyebrow: 'Pre-Construction / Off-Plan · Ikate, Lekki Phase 1, Lagos',
    lead: 'Modern residential development in Ikate, Lekki Phase 1, Lagos, tailored for end-users and long-term real estate investors seeking central Lekki access and structured payment schedules.',
    primaryCtaLabel: 'Request Schedule / Inspect',
    primaryCtaTopic: `${property.name} — Approved Schedule & Inspection Request`,
    whatsappGreeting:
      'Hello ChapelHill Multicompany Limited, please share current pricing sheets, floor plan layouts, and inspection availability for IVY Heights, Ikate, Lekki Phase 1, Lagos.',
    jumpSections: [
      { id: 'overview', label: 'Overview' },
      { id: 'units-plans', label: 'Units & Plans' },
      { id: 'renders', label: 'Renders' },
      { id: 'specs', label: 'Specs' },
    ],
    specStrip: [
      { label: 'Residences', value: '2 & 3 Bed', icon: BedDouble },
      { label: 'Bathrooms', value: '2 & 3 Bath', icon: Bath },
      { label: 'Location', value: 'Ikate Lekki Phase 1', icon: MapPin },
      { label: 'Delivery Window', value: '24-Mo Proposed Build', icon: Clock },
    ],
    overviewTitle: 'IVY Heights at a Glance',
    overviewPairs: [
      { label: 'Location', value: 'Ikate, Lekki Phase 1, Lagos' },
      {
        label: 'Stage & Timeline',
        value: 'Pre-construction / off-plan · Proposed 24-month build schedule',
      },
      {
        label: 'Target Profile',
        value: 'End-users & long-term investors seeking central Lekki access & structured payments',
      },
      {
        label: 'Apartment Mix',
        value: '2-Bedroom & 3-Bedroom Residences (2 to 3 bathrooms by layout)',
      },
      {
        label: 'Payment Tracks',
        value: '12-Month · 18-Month · 24-Month Zero-Initial-Deposit Plan',
      },
    ],
    unitsEyebrow: 'Unit Options & Payment Plans',
    unitsHeading: 'Apartment Mix & Payment Tracks',
    unitsHeaderActionLabel: 'Request Current Pricing Sheet',
    unitsHeaderActionTopic: 'IVY Heights — Current Pricing Sheet & Floor Plans',
    unitGridColsClass: 'grid-cols-1 md:grid-cols-2 gap-6',
    unitCards: [
      {
        title: '2-Bedroom Apartments',
        subtitle:
          'Designed for compact urban living and rental demand; layout details available per floor plan.',
        enquiryTopic: 'IVY Heights, Ikate, Lekki Phase 1 — 2-Bedroom Apartment',
        ctaLabel: 'Enquire on Unit',
        pairs: [
          { label: 'Bedrooms', value: '2 Bedrooms' },
          { label: 'Bathrooms', value: '2 to 3 Baths (by configuration)' },
          { label: 'Build Stage', value: 'Pre-construction / off-plan' },
          { label: 'Payment Eligibility', value: '12, 18 & 24-Month Plans' },
        ],
      },
      {
        title: '3-Bedroom Apartments',
        subtitle: 'Larger floorplates suited for families or executive rentals.',
        enquiryTopic: 'IVY Heights, Ikate, Lekki Phase 1 — 3-Bedroom Apartment',
        ctaLabel: 'Enquire on Unit',
        pairs: [
          { label: 'Bedrooms', value: '3 Bedrooms' },
          { label: 'Bathrooms', value: '2 to 3 Baths (by configuration)' },
          { label: 'Build Stage', value: 'Pre-construction / off-plan' },
          { label: 'Payment Eligibility', value: '12, 18 & 24-Month Plans' },
        ],
      },
    ],
    plans: [
      {
        eyebrow: '12 Months',
        title: '12-Month Plan',
        detail: 'Shorter-term payment schedule with upfront deposit terms.',
        actionLabel: 'Confirm Schedule',
        enquiryTopic: 'IVY Heights — 12-Month Plan',
      },
      {
        eyebrow: '18 Months',
        title: '18-Month Plan',
        detail: 'Mid-length installment structure spread across construction milestones.',
        actionLabel: 'Confirm Schedule',
        enquiryTopic: 'IVY Heights — 18-Month Plan',
      },
      {
        eyebrow: '24 Months · Zero Deposit',
        title: '24-Month Zero-Initial-Deposit Plan',
        detail: 'Extended 24-month schedule removing the initial deposit requirement.',
        actionLabel: 'Confirm Schedule',
        enquiryTopic: 'IVY Heights — 24-Month Zero-Initial-Deposit Plan',
      },
    ],
    rendersEyebrow: 'Architectural Renders & Floor Plans',
    rendersHeading: 'Illustrative Design Previews & Site Context',
    galleryCategories: [
      { id: 'all', label: `All Visuals (${property.gallery.length})` },
      { id: 'exterior', label: 'Architectural Renders' },
      { id: 'floorplan', label: 'Floor Plans' },
      { id: 'site', label: 'Site Context' },
    ],
    specsEyebrow: 'Architectural Renders & Specifications',
    specsHeading: 'Build Standards, Commercial Structure & Due Diligence',
    specsLeftTitle: 'Design & Engineering Standards',
    specsLeftPairs: [
      {
        label: 'Visuals & Floor Plans',
        value: 'Exterior views, interior concepts, and floor plans shown as illustrative design previews.',
      },
      {
        label: 'Approved Drawings',
        value: 'Final apartment finishes, dimensions, and layouts follow approved working drawings.',
      },
      {
        label: 'Engineering & Build Window',
        value: 'Developed under a 24-month projected delivery schedule with structured site supervision.',
      },
      {
        label: 'Building Systems & Utilities',
        value: 'Integrated utility planning, backup power provisions, and standard residential systems.',
      },
    ],
    specsRightTitle: 'Payment Terms & Direct Inquiries',
    specsRightPairs: [
      {
        label: '12-Month & 18-Month Tracks',
        value: 'Deposit-based and milestone installment schedules per current approved offer sheet.',
      },
      {
        label: '24-Month Zero-Deposit Track',
        value: 'Removes initial deposit; signing requirements and contractual obligations remain applicable.',
      },
      {
        label: 'Title & Offer Verification',
        value: 'Final pricing, allocation rules, and title/approval status subject to due diligence.',
      },
      {
        label: 'Pricing Sheets & Inspections',
        value: 'Available on request via WhatsApp Desk (+234 803 286 5488) or private consultation.',
      },
    ],
    ctaEyebrow: 'Direct Inquiries · ChapelHill Multicompany Limited',
    ctaHeading: 'Request Pricing Sheets, Floor Plans, or Site Inspection',
    ctaBody:
      'Connect directly with our team to review current management-approved unit pricing, payment terms, and Ikate site visit availability.',
    ctaButtonLabel: 'Book Inspection',
    footnoteHeading: 'Terms, Verification & Legal Footnote',
    footnotes: [
      {
        title: 'Offer & Payment Terms:',
        body: 'Final unit pricing, allocation rules, signing requirements, contractual obligations, and title or approval status are subject to formal offer documentation, management approval, and independent legal due diligence. Zero initial deposit under the 24-month option does not remove contractual obligations or payments due at signing.',
      },
      {
        title: 'Visual Previews & Schedule:',
        body: 'Exterior views, interior concepts, and floor plans are presented as illustrative design previews and do not portray completed units; final finishes and layouts follow approved working drawings. The 24-month construction period is a proposed delivery window subject to signed agreements and statutory schedules.',
      },
    ],
  };
}

export default function PropertyShowcaseLayout({
  property,
  routeContext,
}: PropertyShowcaseLayoutProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = useMemo(() => getShowcaseConfig(property), [property]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(config.primaryCtaTopic);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [activeJumpSection, setActiveJumpSection] = useState<JumpSectionId>('overview');
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const touchStartXRef = React.useRef<number | null>(null);

  const otherProperties = getAllProperties().filter((p) => p.id !== property.id);

  const galleryTabs = config.galleryCategories.filter(
    (tab) => tab.id === 'all' || property.gallery.some((img) => img.category === tab.id)
  );

  const filteredGallery =
    activeGalleryCategory === 'all'
      ? property.gallery
      : property.gallery.filter((img) => img.category === activeGalleryCategory);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const threshold = 160;
      let current: JumpSectionId = 'overview';

      for (const sec of config.jumpSections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = sec.id;
        }
      }

      setActiveJumpSection(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [config.jumpSections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % property.gallery.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + property.gallery.length) % property.gallery.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, property.gallery.length]);

  const openBooking = (topic?: string) => {
    setSelectedTopic(topic || config.primaryCtaTopic);
    setBookingModalOpen(true);
  };

  const scrollToSection = (id: JumpSectionId) => {
    setActiveJumpSection(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2400);
      } catch {
        // ignore clipboard error
      }
    }
  };

  const backHref = routeContext === 'projects' ? '/projects' : '/#featured-properties';
  const backLabel = routeContext === 'projects' ? 'All Projects' : 'Properties';
  const whatsappUrl = `https://wa.me/2348032865488?text=${encodeURIComponent(config.whatsappGreeting)}`;

  return (
    <div className="min-h-screen bg-[#FEFCFD] text-[#162521] font-sans flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      <Navbar
        activePage={routeContext}
        onContactClick={() => openBooking()}
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() =>
          routeContext === 'projects' ? (window.location.href = '/services') : setInfoModal('services')
        }
        onAboutClick={() => {
          window.location.href = '/about';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
      />

      {/* SLIM STICKY JUMP-BAR UNDER THE HEADER */}
      <div className="sticky top-0 z-30 bg-[#FEFCFD]/95 backdrop-blur-md border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-12 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2.5 text-xs shrink-0">
            <span className="font-heading font-bold text-[#162521]">{config.shortName}</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-500 font-medium">{config.shortLocation}</span>
          </div>

          <nav
            aria-label={`${config.shortName} sections`}
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none flex-1 md:flex-initial justify-start md:justify-center"
          >
            {config.jumpSections.map((sec) => {
              const isActive = activeJumpSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#461313] text-white'
                      : 'text-stone-600 hover:text-[#461313] hover:bg-stone-100'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border border-stone-200 hover:border-[#25D366]/50 text-[#128C7E] text-xs font-semibold whitespace-nowrap transition-colors"
            >
              WhatsApp Desk
            </a>
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-3.5 py-1.5 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
            >
              {property.status === 'sold-out' ? 'Future Releases' : 'Enquire'}
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-24 sm:pb-20">
        {/* Compact Breadcrumb */}
        <div className="flex items-center justify-between gap-3 py-2.5 mb-6 text-xs text-stone-500 border-b border-stone-200/70">
          <nav className="flex items-center gap-2 min-w-0" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#461313] transition-colors font-medium shrink-0">
              Home
            </Link>
            <span>/</span>
            <Link href={backHref} className="hover:text-[#461313] transition-colors font-medium shrink-0">
              {backLabel}
            </Link>
            <span>/</span>
            <span className="text-[#162521] font-semibold truncate">{property.name}</span>
          </nav>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#461313] transition-colors cursor-pointer shrink-0"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* HERO HEADER + COMPACT SINGLE-ROW SPEC STRIP */}
        <header className="mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                {config.eyebrow}
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162521] tracking-[-0.03em] leading-[1.12] mt-2 text-balance">
                {property.name}
              </h1>
              <p className="font-sans mt-3 text-sm sm:text-base text-stone-600 leading-[1.68] max-w-[62ch]">
                {config.lead}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBooking()}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[46px] whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>{config.primaryCtaLabel}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#25D366]/10 text-[#128C7E] border border-stone-200 hover:border-[#25D366]/40 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors min-h-[46px] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+234 803 286 5488</span>
              </a>
            </div>
          </div>

          {/* COMPACT SINGLE-ROW SPEC STRIP */}
          <div
            aria-label="Key project specifications"
            className="mt-7 grid grid-cols-2 md:grid-cols-4 border border-stone-200/90 rounded-2xl bg-white divide-y md:divide-y-0 md:divide-x divide-stone-200/80 overflow-hidden"
          >
            {config.specStrip.map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.label} className="px-4 py-3.5 sm:px-5 sm:py-4 flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#D64933] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-stone-500 block leading-tight">
                      {spec.label}
                    </span>
                    <span className="font-heading text-sm sm:text-[15px] font-bold text-[#162521] block mt-0.5 truncate">
                      {spec.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </header>

        {/* SECTION 1: OVERVIEW (SCANNABLE 2-LINE KEY-VALUE PAIRS + VISUAL ANCHOR) */}
        <section
          id="overview"
          className="scroll-mt-20 pb-14 sm:pb-16 border-b border-stone-200/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <div
                onClick={() => setLightboxIndex(0)}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 cursor-pointer group"
              >
                <Image
                  src={property.heroImage}
                  alt={property.gallery[0]?.caption || property.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm text-white flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-2.5 text-xs text-stone-500 font-medium">
                {property.gallery[0]?.caption} ·{' '}
                <button
                  type="button"
                  onClick={() => scrollToSection('renders')}
                  className="text-[#461313] hover:text-[#D64933] font-semibold underline underline-offset-2 cursor-pointer"
                >
                  View all {property.gallery.length} visuals
                </button>
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                Project Overview
              </p>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
                {config.overviewTitle}
              </h2>

              <dl className="mt-5 border-t border-stone-200/80 divide-y divide-stone-200/75">
                {config.overviewPairs.map((pair) => (
                  <div key={pair.label} className="py-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-stone-500">
                      {pair.label}
                    </dt>
                    <dd className="font-sans text-sm font-medium text-[#162521] mt-1 leading-snug">
                      {pair.value}
                    </dd>
                  </div>
                ))}
                <div className="py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-stone-500">
                    Direct Inquiries
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-semibold text-[#461313] hover:text-[#D64933] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>WhatsApp Desk: +234 803 286 5488</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* SECTION 2: UNITS & PLANS (SCANNABLE 2-LINE KEY-VALUE PAIRS + TRACKS/MILESTONES) */}
        <section
          id="units-plans"
          className="scroll-mt-20 py-14 sm:py-16 border-b border-stone-200/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                {config.unitsEyebrow}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
                {config.unitsHeading}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => openBooking(config.unitsHeaderActionTopic)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0 min-h-[42px]"
            >
              <span>{config.unitsHeaderActionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className={`grid ${config.unitGridColsClass} mb-8`}>
            {config.unitCards.map((unit) => (
              <div
                key={unit.title}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#162521]">
                    {unit.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                    {unit.subtitle}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 pt-5 border-t border-stone-100">
                    {unit.pairs.map((pair) => (
                      <div key={pair.label}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">
                          {pair.label}
                        </dt>
                        <dd className="font-sans text-xs sm:text-sm font-semibold text-[#162521] mt-0.5">
                          {pair.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => openBooking(unit.enquiryTopic)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#461313] hover:text-[#D64933] transition-colors cursor-pointer"
                  >
                    <span>{unit.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-stone-200/90 rounded-2xl bg-white divide-y md:divide-y-0 md:divide-x divide-stone-200/80 overflow-hidden">
            {config.plans.map((plan) => (
              <div key={plan.title} className="p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D64933]">
                    {plan.eyebrow}
                  </p>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#162521] mt-1.5">
                    {plan.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {plan.detail}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking(plan.enquiryTopic)}
                  className="mt-5 text-xs font-semibold text-[#461313] hover:text-[#D64933] inline-flex items-center gap-1.5 transition-colors cursor-pointer self-start"
                >
                  <span>{plan.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: RENDERS / PHOTO GALLERY */}
        <section
          id="renders"
          className="scroll-mt-20 py-14 sm:py-16 border-b border-stone-200/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                {config.rendersEyebrow}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
                {config.rendersHeading}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
              {galleryTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveGalleryCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeGalleryCategory === tab.id
                      ? 'bg-[#461313] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-[#162521]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGallery.map((img, idx) => {
              const masterIdx = property.gallery.findIndex((g) => g.url === img.url);
              return (
                <article
                  key={img.url}
                  onClick={() => setLightboxIndex(masterIdx >= 0 ? masterIdx : idx)}
                  className="group relative bg-stone-100 rounded-2xl overflow-hidden aspect-[4/3] border border-stone-200/80 cursor-pointer"
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: SPECS & FEATURES (SCANNABLE 2-LINE KEY-VALUE LEDGERS) */}
        <section id="specs" className="scroll-mt-20 py-14 sm:py-16">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
              {config.specsEyebrow}
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
              {config.specsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#461313] pb-3 border-b border-stone-200/80">
                {config.specsLeftTitle}
              </h3>
              <dl className="divide-y divide-stone-200/75 border-b border-stone-200/80">
                {config.specsLeftPairs.map((item) => (
                  <div key={item.label} className="py-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-stone-500">
                      {item.label}
                    </dt>
                    <dd className="font-sans text-sm text-[#162521] mt-1 leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#461313] pb-3 border-b border-stone-200/80">
                {config.specsRightTitle}
              </h3>
              <dl className="divide-y divide-stone-200/75 border-b border-stone-200/80">
                {config.specsRightPairs.map((item) => (
                  <div key={item.label} className="py-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-stone-500">
                      {item.label}
                    </dt>
                    <dd className="font-sans text-sm text-[#162521] mt-1 leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Direct Action Strip */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#162521] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E5C583]">
                {config.ctaEyebrow}
              </p>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mt-1.5">
                {config.ctaHeading}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-300 mt-1.5 max-w-2xl">
                {config.ctaBody}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBooking()}
                className="bg-[#E5C583] hover:bg-white text-[#461313] px-6 py-3 rounded-full font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[46px] whitespace-nowrap"
              >
                <span>{config.ctaButtonLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+2348032865488"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors min-h-[46px] whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>+234 803 286 5488</span>
              </a>
            </div>
          </div>

          {/* CLEAN LEGAL & COMMERCIAL DISCLAIMERS FOOTNOTE BLOCK */}
          <aside
            aria-label="Legal and commercial disclaimers"
            className="mt-8 rounded-xl bg-stone-100/80 border border-stone-200/80 px-5 py-4 text-xs text-stone-600 leading-relaxed space-y-2"
          >
            <p className="font-heading font-bold uppercase tracking-[0.12em] text-[#162521] text-[11px]">
              {config.footnoteHeading}
            </p>
            {config.footnotes.map((note) => (
              <p key={note.title}>
                <strong className="text-[#162521]">{note.title}</strong> {note.body}
              </p>
            ))}
          </aside>
        </section>

        {/* OTHER DEVELOPMENTS */}
        {otherProperties.length > 0 && (
          <section className="pt-10 border-t border-stone-200/80">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D64933]">
                  ChapelHill Portfolio
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#162521] mt-1">
                  Other Featured Developments
                </h2>
              </div>
              <Link
                href={backHref}
                className="text-xs font-semibold text-[#461313] hover:text-[#D64933] inline-flex items-center gap-1"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProperties.slice(0, 2).map((other) => (
                <Link
                  key={other.id}
                  href={
                    routeContext === 'projects'
                      ? `/projects/${other.slug}`
                      : `/properties/${other.id}`
                  }
                  className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col sm:flex-row hover:border-[#461313]/35 transition-colors"
                >
                  <div className="relative sm:w-48 aspect-[16/10] sm:aspect-auto bg-stone-100 shrink-0">
                    <Image
                      src={other.heroImage}
                      alt={other.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D64933]">
                        {other.status === 'sold-out' ? 'SOLD OUT · Ongoing' : other.statusLabel}
                      </p>
                      <h3 className="font-heading text-lg font-bold text-[#162521] mt-1 group-hover:text-[#461313] transition-colors">
                        {other.name}
                      </h3>
                      <p className="font-sans text-xs text-stone-600 mt-1.5 line-clamp-2">
                        {other.description}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-semibold text-[#461313] inline-flex items-center gap-1">
                      <span>Explore Development</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && property.gallery[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="flex items-center justify-between text-white max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0 pr-3">
                <p className="text-xs sm:text-sm font-semibold truncate">
                  {property.gallery[lightboxIndex].caption}
                </p>
                <p className="text-[11px] text-stone-400">
                  {lightboxIndex + 1} of {property.gallery.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo preview"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="relative flex-1 w-full max-w-5xl mx-auto my-3 flex items-center justify-center touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartXRef.current === null) return;
                const diff = touchStartXRef.current - e.changedTouches[0].clientX;
                if (diff > 45) {
                  setLightboxIndex((lightboxIndex + 1) % property.gallery.length);
                } else if (diff < -45) {
                  setLightboxIndex(
                    (lightboxIndex - 1 + property.gallery.length) % property.gallery.length
                  );
                }
                touchStartXRef.current = null;
              }}
            >
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={property.gallery[lightboxIndex].url}
                  alt={property.gallery[lightboxIndex].caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + property.gallery.length) % property.gallery.length
                  )
                }
                aria-label="Previous image"
                className="absolute left-1 sm:left-4 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % property.gallery.length)
                }
                aria-label="Next image"
                className="absolute right-1 sm:right-4 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() =>
          routeContext === 'projects' ? (window.location.href = '/services') : setInfoModal('services')
        }
        onAboutClick={() => {
          window.location.href = '/about';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
        onContactClick={() => openBooking()}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedTopic}
      />

      <InfoDrawer
        isOpen={infoModal !== null}
        type={infoModal}
        onClose={() => setInfoModal(null)}
        onBookVisit={() => openBooking()}
      />

      <WhatsAppFAB defaultMessage={config.whatsappGreeting} />
    </div>
  );
}
