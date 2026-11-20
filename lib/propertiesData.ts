export interface GalleryImage {
  url: string;
  caption: string;
  category: 'exterior' | 'interior' | 'living' | 'bedroom' | 'kitchen' | 'amenity' | 'floorplan' | 'site';
}

export interface UnitDetail {
  title: string;
  count: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt?: string;
  sizeSqM?: string;
  description: string;
  features: string[];
}

export interface FinancialExpectations {
  startingPrice: string;
  priceRange: string;
  paymentStructure: string;
  milestones: {
    stage: string;
    percentage: string;
    description: string;
  }[];
  titleStatus: string;
  estimatedServiceCharge: string;
  handoverTimeline: string;
}

export interface ArchitecturalSpecificationSection {
  category: string;
  items: string[];
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  status: 'completed' | 'ongoing' | 'sold-out';
  statusLabel: string;
  heroImage: string;
  gallery: GalleryImage[];
  description: string;
  extendedOverview: string;
  landSize?: string;
  totalUnits: string;
  financials: FinancialExpectations;
  unitBreakdown: UnitDetail[];
  architecturalSpecifications: ArchitecturalSpecificationSection[];
  keyHighlights: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'lekki-phase-1-project',
    slug: 'lekki-phase-1-project',
    name: 'IVY Heights, Ikate, Lekki Phase 1, Lagos',
    tagline: 'Pre-Construction / Off-Plan • 24-Month Proposed Build',
    location: 'Ikate, Lekki Phase 1, Lagos',
    status: 'ongoing',
    statusLabel: 'Pre-Construction / Off-Plan • 24-Month Build Schedule',
    heroImage: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    gallery: [
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
        caption: 'IVY Heights Front Facade & Arrival Courtyard (Illustrative Design Preview)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(1).jpeg',
        caption: 'Street-Level Perspective — IVY Heights, Ikate, Lekki Phase 1 (Illustrative Preview)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(2).jpeg',
        caption: 'Angled Elevation — Terraced Balconies & Parking Concept (Illustrative Preview)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(3).jpeg',
        caption: 'Aerial Massing & Roofline — IVY Heights (Illustrative Design Preview)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(5).jpeg',
        caption: 'Facade Finishes, Planters & Glazed Balustrades (Illustrative Preview)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 floor plan.jpeg',
        caption: 'Illustrative Floor Plan Layout — 2-Bedroom & 3-Bedroom Apartments',
        category: 'floorplan',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 ground floor plan.jpeg',
        caption: 'Illustrative Ground Level Access & Parking Plan',
        category: 'floorplan',
      },
      {
        url: '/images/lekki-phase-1/site-1.webp',
        caption: 'Site Location Reference — Ikate, Lekki Phase 1 Parcel',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-2.webp',
        caption: 'Site Inspection Context — Ikate, Lekki Phase 1 Access Corridor',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-3.webp',
        caption: 'Site Parcel Aerial Context — Ikate, Lekki Phase 1, Lagos',
        category: 'site',
      },
    ],
    description:
      'Modern residential development in Ikate, Lekki Phase 1, Lagos, tailored for end-users and long-term real estate investors. Pre-construction / off-plan with a proposed 24-month build schedule.',
    extendedOverview:
      'Modern residential development in Ikate, Lekki Phase 1, Lagos, tailored for end-users and long-term real estate investors seeking central Lekki access, structured payment schedules, and modern 2- and 3-bedroom apartment layouts (2 to 3 bathrooms).\n\nTerms & Verification: Final pricing, allocation rules, signing requirements, contractual obligations, and title/approval status are subject to formal offer terms and due diligence. Exterior views, interior concepts, and floor plans are illustrative design previews; final finishes and layouts follow approved drawings.',
    landSize: 'Ikate, Lekki Phase 1, Lagos',
    totalUnits: '2 & 3-Bedroom Apartments (2–3 Baths)',
    financials: {
      startingPrice: 'Offer Sheet on Request',
      priceRange: '2 & 3-Bedroom Off-Plan Options',
      paymentStructure: '12-Month Plan • 18-Month Plan • 24-Month Zero-Initial-Deposit Plan',
      milestones: [
        {
          stage: '12-Month Plan',
          percentage: '12 Months',
          description: 'Shorter-term payment schedule with upfront deposit terms.',
        },
        {
          stage: '18-Month Plan',
          percentage: '18 Months',
          description: 'Mid-length installment structure spread across construction milestones.',
        },
        {
          stage: '24-Month Zero-Initial-Deposit Plan',
          percentage: '24 Months · Zero Initial Deposit',
          description:
            'Extended 24-month schedule removing the initial deposit requirement. Signing requirements, contractual obligations, and allocation rules remain subject to formal offer terms.',
        },
      ],
      titleStatus: 'Subject to formal offer terms and independent due diligence',
      estimatedServiceCharge: 'Issued with formal pricing sheet and offer documentation',
      handoverTimeline: 'Proposed 24-Month Build Schedule (Pre-Construction / Off-Plan)',
    },
    unitBreakdown: [
      {
        title: '2-Bedroom Apartments',
        count: 'Pre-Construction / Off-Plan',
        price: 'Pricing Sheet on Request',
        bedrooms: 2,
        bathrooms: 2,
        description:
          'Designed for compact urban living and rental demand; layout details available per floor plan.',
        features: [
          '2 bedrooms with 2 to 3 bathrooms depending on unit configuration',
          'Eligible for 12-Month, 18-Month, or 24-Month Zero-Initial-Deposit track',
          'Proposed 24-month build schedule (subject to formal offer terms)',
          'Layout details & floor plans shared on request via WhatsApp Desk (+234 803 286 5488)',
        ],
      },
      {
        title: '3-Bedroom Apartments',
        count: 'Pre-Construction / Off-Plan',
        price: 'Pricing Sheet on Request',
        bedrooms: 3,
        bathrooms: 3,
        description: 'Larger floorplates suited for families or executive rentals.',
        features: [
          '3 bedrooms with 2 to 3 bathrooms depending on unit configuration',
          'Eligible for 12-Month, 18-Month, or 24-Month Zero-Initial-Deposit track',
          'Proposed 24-month build schedule (subject to formal offer terms)',
          'Layout details & floor plans shared on request via WhatsApp Desk (+234 803 286 5488)',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Visuals & Floor Plans',
        items: [
          'Exterior views, interior concepts, and floor plans are presented as illustrative design previews',
          'Final finishes, dimensions, and layouts follow approved architectural drawings',
          'Apartment mix comprises 2-bedroom and 3-bedroom configurations (2 to 3 bathrooms)',
        ],
      },
      {
        category: 'Engineering & Build Standards',
        items: [
          'Developed under a 24-month projected delivery window (pre-construction / off-plan stage)',
          'Structured site supervision and residential quality control milestones',
          'Integrated utility planning and standard residential building systems',
        ],
      },
      {
        category: 'Payment Tracks & Offer Terms',
        items: [
          '12-Month Plan: Shorter-term payment schedule with upfront deposit terms',
          '18-Month Plan: Mid-length installment structure spread across construction milestones',
          '24-Month Zero-Initial-Deposit Plan: Extended 24-month schedule removing the initial deposit requirement',
          'Final pricing, allocation rules, signing requirements, and title/approval status are subject to formal offer terms and due diligence',
        ],
      },
      {
        category: 'Direct Inquiries & Inspections',
        items: [
          'Location: Ikate, Lekki Phase 1, Lagos',
          'Target Profile: Buyers seeking central Lekki access, structured payment schedules, and modern apartment layouts',
          'Request current pricing sheets, floor plan layouts, or site inspection scheduling via WhatsApp Desk: +234 803 286 5488',
        ],
      },
    ],
    keyHighlights: [
      'Location: Ikate, Lekki Phase 1, Lagos',
      'Stage & Timeline: Pre-construction / off-plan with a proposed 24-month build schedule',
      'Apartment Mix: 2-Bedroom (compact urban living & rental demand) and 3-Bedroom (families or executive rentals)',
      'Bathrooms: 2 to 3 bathrooms depending on unit configuration',
      'Payment Tracks: 12-month plan, 18-month plan, and 24-month zero-initial-deposit plan (subject to formal offer terms)',
      'Direct Inquiries: Request pricing sheets, floor plans, or site inspection via WhatsApp Desk: +234 803 286 5488',
    ],
  },
  {
    id: 'ivy-homes-abijo',
    slug: 'ivy-homes-abijo',
    name: 'Ivy Homes Abijo GRA',
    tagline: 'Luxury Finished Apartments • Prestigious Abijo GRA, Lekki',
    location: 'Abijo GRA, Lekki Axis, Lagos State, Nigeria',
    status: 'completed',
    statusLabel: 'Completed • Ready for Immediate Handover',
    heroImage: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 1.webp',
    gallery: [
      {
        url: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 1.webp',
        caption: 'Architectural Contemporary Exterior Facade — Ivy Homes Abijo GRA',
        category: 'exterior',
      },
      {
        url: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 2.webp',
        caption: 'Contemporary Living Salon with Floor-to-Ceiling Windows',
        category: 'living',
      },
      {
        url: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 3.webp',
        caption: 'Chef-Inspired Fitted Kitchen & Dining Salon with Custom Cabinetry',
        category: 'kitchen',
      },
      {
        url: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 4.webp',
        caption: 'Master Bedroom Suite Sanctuary with Built-In Wardrobes',
        category: 'bedroom',
      },
      {
        url: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 5.webp',
        caption: 'Exterior Driveway Perspective & Ground-Level Car Parking Court',
        category: 'exterior',
      },
    ],
    description:
      'Completed luxury-finished 1-, 2-, and 3-bedroom flats in Abijo GRA, Lekki with 24/7 solar-backed power, fitted kitchens, and dedicated parking.',
    extendedOverview:
      'Located in Abijo GRA—the only GRA in the Lekki axis—with paved roads under 3 minutes from Lekki-Epe Expressway, 30 minutes from Dangote Refinery, and 45 minutes from Victoria Island.\n\nCompleted by ChapelHill Multicompany Limited with fitted kitchens, 24/7 solar-backed power, 24/7 security, efficient drainage, and 12 dedicated parking spaces across an 861.88 sqm site.',
    landSize: '861.88 sqm Site • 318.66 sqm Building Footprint',
    totalUnits: '3 Floors • 1, 2 & 3 Bedroom Flats (12 Parking Spaces)',
    financials: {
      startingPrice: '₦50,000,000',
      priceRange: '₦50,000,000 – ₦75,000,000 ($34,774 – $52,161)',
      paymentStructure: 'Outright Purchase or Flexible Installmental Payment Plans Available',
      milestones: [
        {
          stage: 'Commitment & Initial Tranche',
          percentage: 'Initial Deposit',
          description: 'Reservation deposit and execution of Deed of Contract of Sale',
        },
        {
          stage: 'Structured Balance',
          percentage: 'Installments',
          description: 'Flexible installmental payment schedule tailored to buyer requirements',
        },
        {
          stage: 'Physical Key Handover',
          percentage: 'Balance',
          description: 'Final allocation, deed of assignment execution, and immediate physical move-in',
        },
      ],
      titleStatus: "Registered Unencumbered GRA Title with Approved Building Plans",
      estimatedServiceCharge: 'Includes 24/7 security, estate solar/power management, water, drainage & waste collection',
      handoverTimeline: 'Ready for Immediate Handover (Completed)',
    },
    unitBreakdown: [
      {
        title: '1 Bedroom Flat',
        count: 'Multiple Available',
        price: '₦50,000,000 ($34,774)',
        bedrooms: 1,
        bathrooms: 1,
        sizeSqM: '65 sqm',
        sizeSqFt: '700 sqft',
        description: 'Luxury finished 1-bedroom flat designed with your peace and comfort in mind, complete with fitted kitchen, dedicated parking space, and 24/7 power with solar system.',
        features: [
          'Price: ₦50M or $34,774.00',
          'Installmental payment available',
          'Luxury finished contemporary interior',
          'Fitted kitchen with custom cabinetry',
          'Dedicated parking space',
          '24/7 power with fully installed solar system',
        ],
      },
      {
        title: '2 Bedroom Flat',
        count: 'Multiple Available',
        price: '₦65,000,000 ($45,207)',
        bedrooms: 2,
        bathrooms: 2,
        sizeSqM: '110 sqm',
        sizeSqFt: '1,184 sqft',
        description: 'Spacious 2-bedroom luxury finished flat with ensuite bedrooms, generous living room, dining area, fitted kitchen, private balcony, and dedicated parking.',
        features: [
          'Price: ₦65M or $45,207.00',
          'Installmental payment available',
          'Luxury finished contemporary interior',
          'Fitted kitchen with custom cabinetry',
          'Dedicated parking space',
          '24/7 power with fully installed solar system',
        ],
      },
      {
        title: '3 Bedroom Flat',
        count: 'Multiple Available',
        price: '₦75,000,000 ($52,161)',
        bedrooms: 3,
        bathrooms: 3,
        sizeSqM: '165 sqm',
        sizeSqFt: '1,776 sqft',
        description: 'Expansive 3-bedroom family flat offering luxury finishes, master ensuite sanctuary, dining salon, fitted kitchen with pantry, and dedicated parking.',
        features: [
          'Price: ₦75M or $52,161.00',
          'Installmental payment available',
          'Luxury finished contemporary interior',
          'Fitted kitchen with custom cabinetry',
          'Dedicated parking space',
          '24/7 power with fully installed solar system',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Property Features & Infrastructure',
        items: [
          'Luxury finished apartments engineered with quality and efficiency by ChapelHill Multicompany Limited',
          'Fully interlocked paved internal roads and parking court',
          'Efficient covered drainage infrastructure across the compound',
          '12 dedicated on-site car parking spaces',
          'Paved access roads less than 3 minutes from the Lekki-Epe expressway',
        ],
      },
      {
        category: 'Power, Solar & Utilities',
        items: [
          '24/7 uninterruptible power supply backed by a fully installed solar system',
          'Treated continuous potable water supply',
          'Optional accessory packages available: microwave, double door fridge, washing machine, air conditioning systems, and cable network',
        ],
      },
      {
        category: 'Security & Access Protocols',
        items: [
          '24/7 manned security gatehouse and perimeter fencing',
          'Controlled resident and guest vehicular access',
          'Secure, peaceful gated community within prestigious Abijo GRA',
        ],
      },
      {
        category: 'Interior Finishes & Fixtures',
        items: [
          'Fitted contemporary kitchens with custom cabinetry and preparation countertops',
          'High-durability luxury floor tiles and modern sanitary ware',
          'Expansive windows providing natural daylight and cross-ventilation',
        ],
      },
    ],
    keyHighlights: [
      'Location: Abijo GRA (the only GRA in the Lekki axis, Lagos)',
      'Access: < 3 mins to Lekki-Epe Expy · 30 mins to Dangote Refinery · 45 mins to VI',
      'Pricing: 1-Bed ₦50M ($34,774) · 2-Bed ₦65M ($45,207) · 3-Bed ₦75M ($52,161)',
      'Power & Security: 24/7 solar-backed electricity and 24/7 manned security',
      'Compound: 12 dedicated parking spaces, interlocked roads, and covered drainage',
      'Delivery: Completed and ready for immediate handover with installmental options',
    ],
  },
  {
    id: 'ogudu-gra-project',
    slug: 'ogudu-gra-project',
    name: 'IVY Homes, Ogudu GRA',
    tagline: 'SOLD OUT · Construction Ongoing · 5-Bedroom Penthouse',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    status: 'sold-out',
    statusLabel: 'SOLD OUT • Ongoing Construction',
    heroImage: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    gallery: [
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
        caption: 'IVY Homes, Ogudu GRA — Approved Architectural Perspective (SOLD OUT)',
        category: 'exterior',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 2.webp',
        caption: 'IVY Homes, Ogudu GRA — Approved Terrace & Exterior Concept',
        category: 'amenity',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 3.webp',
        caption: 'IVY Homes, Ogudu GRA — Double-Height Salon Architectural Render',
        category: 'living',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (7).jpeg',
        caption: 'Approved 3D Render — Master Penthouse Suite Concept',
        category: 'bedroom',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (6).jpeg',
        caption: 'Approved 3D Render — Kitchen Island & Finishing Specification',
        category: 'kitchen',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (11).jpeg',
        caption: 'Approved 3D Render — Private Foyer & Architectural Panelling',
        category: 'interior',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (1).jpeg',
        caption: 'Approved 3D Render — Elevation & Building Envelope Study',
        category: 'exterior',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (3).jpeg',
        caption: 'Approved 3D Render — Interior Spatial Flow & Glazing Detail',
        category: 'interior',
      },
    ],
    description:
      'Private 5-bedroom penthouse residence under active construction in Ogudu GRA, Lagos. Fully SOLD OUT—enquire for upcoming ChapelHill developments.',
    extendedOverview:
      'Located in Ogudu GRA, Lagos, this multi-level 5-bedroom penthouse (440 sqm) plus ensuite service quarters (24 sqm) is currently under active construction.\n\nAll units are 100% SOLD OUT and closed to new allocation. Prospective buyers are invited to register for priority updates on upcoming developments.',
    landSize: 'Active Construction Site · Ogudu GRA',
    totalUnits: 'SOLD OUT • Ongoing Construction',
    financials: {
      startingPrice: 'SOLD OUT',
      priceRange: 'SOLD OUT • Construction Ongoing',
      paymentStructure: 'Fully Sold Out — Enquire for Future Developments',
      milestones: [
        {
          stage: 'Substructure & Structural Frame',
          percentage: 'Completed Stage',
          description: 'Foundation works, structural column framing, and primary reinforced concrete deck stages executed.',
        },
        {
          stage: 'Ongoing Construction & Envelope Works',
          percentage: 'In Progress',
          description: 'Active site construction progressing across building envelope, internal blockwork, and structural detailing.',
        },
        {
          stage: 'Upcoming MEP & Interior Finishing',
          percentage: 'Scheduled Phase',
          description: 'Upcoming mechanical, electrical, plumbing installations, glazing assemblies, and interior finishes prior to project delivery.',
        },
      ],
      titleStatus: 'Registered Title & Approved Building Plans',
      estimatedServiceCharge: 'Estate security & shared utility infrastructure planning',
      handoverTimeline: 'Construction Ongoing (SOLD OUT)',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse Suite',
        count: 'SOLD OUT',
        price: 'SOLD OUT',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqM: '440 sqm',
        sizeSqFt: '4,736 sqft',
        description: 'Multi-level 5-bedroom penthouse design currently under construction and fully sold out. Enquire for priority updates on upcoming ChapelHill developments.',
        features: [
          'Status: SOLD OUT (Construction Ongoing)',
          'Enquire to register interest for future developments',
          'Multi-level architectural layout with sky terrace design',
          'Master suite layout with dressing area and private office space',
        ],
      },
      {
        title: 'Ensuite Service Quarters',
        count: 'SOLD OUT',
        price: 'SOLD OUT',
        bedrooms: 1,
        bathrooms: 1,
        sizeSqM: '24 sqm',
        sizeSqFt: '258 sqft',
        description: 'Dedicated auxiliary staff quarters planned with independent access point and ensuite facilities. Fully allocated within this sold-out development.',
        features: [
          'Status: SOLD OUT (Construction Ongoing)',
          'Independent secondary service access design',
          'Ensuite facilities and utility connection',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Ongoing Construction & Structural Scope',
        items: [
          'Reinforced concrete superstructure currently under active execution',
          'Engineered roof slab and cantilevered terrace framing',
          'Site supervision and milestone quality checks led by ChapelHill engineers',
        ],
      },
      {
        category: 'Planned Fenestration & Envelope',
        items: [
          'Double-glazed tempered safety glass assemblies specified in approved plans',
          'Powder-coated architectural aluminum framing profiles',
          'Acoustic and thermal detailing between primary living spaces',
        ],
      },
      {
        category: 'Planned Utilities & Backup Systems',
        items: [
          'Pre-wiring for smart home automation and lighting controls',
          'Provision for solar inverter backup and estate power distribution',
          'Dedicated vertical transport and access-controlled lobby design',
        ],
      },
      {
        category: 'Upcoming Interior Finishes',
        items: [
          'Porcelain slab flooring specified for formal reception salons',
          'Contemporary fitted kitchen layout and custom joinery schedule',
          'Concealed inverter air-conditioning provisions across primary suites',
        ],
      },
    ],
    keyHighlights: [
      'Availability: 100% SOLD OUT (closed to new unit sales)',
      'Build Stage: Active site construction currently ongoing',
      'Configuration: 5-Bed Penthouse (440 sqm) + Ensuite Service Quarters (24 sqm)',
      'Location: Ogudu GRA, Mainland Prime, Lagos',
      'Future Releases: Enquire via +234 803 286 5488 for upcoming developments',
    ],
  },
  {
    id: 'royal-garden-5-bed-duplex-1',
    slug: 'royal-garden-5-bed-duplex-1',
    name: 'Royal Gardens 5-Bed Duplex & BQ (Phase 1)',
    tagline: 'Completed 5-Bedroom Detached Duplex with BQ • Royal Gardens Estate, Lekki-Ajah',
    location: 'Royal Gardens Estate, Lekki-Ajah, Lagos State, Nigeria',
    status: 'completed',
    statusLabel: 'Completed • Ready for Immediate Move-In',
    heroImage: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (1).jpeg',
    gallery: [
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (1).jpeg',
        caption: 'Architectural Exterior Facade & Gatehouse Entrance — Royal Gardens Estate',
        category: 'exterior',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (2).jpeg',
        caption: 'Gated Driveway & Interlocked Multicar Parking Courtyard',
        category: 'exterior',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (3).jpeg',
        caption: 'Cantilevered Terraces & Contemporary Perimeter Architecture',
        category: 'exterior',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (4).jpeg',
        caption: 'Sun-Drenched Double-Volume Living & Dining Salon',
        category: 'living',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (5).jpeg',
        caption: 'Custom Fitted Chef Kitchen with Premium Quartz Counters & Cabinetry',
        category: 'kitchen',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (6).jpeg',
        caption: 'Floating Staircase & Upper Level Private Family Lounge Foyer',
        category: 'interior',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (7).jpeg',
        caption: 'Master Bedroom Suite Sanctuary with Recessed Architectural Lighting',
        category: 'bedroom',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (8).jpeg',
        caption: 'Spa-Inspired Ensuite Master Bathroom with Deep Soaking Tub & Shower',
        category: 'amenity',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (9).jpeg',
        caption: 'Expansive Wardrobe Joinery & Ensuite Guest Bedroom',
        category: 'bedroom',
      },
      {
        url: '/images/Royal garden 5 bed duplex with Bq 1/Royal garden 5 bed  (10).jpeg',
        caption: 'Upper Terrace Balcony with Panoramic Views Across Royal Gardens',
        category: 'exterior',
      },
    ],
    description: 'An exquisitely delivered 5-bedroom fully detached luxury duplex with self-contained Boys’ Quarters (BQ) in the prestigious Royal Gardens Estate, Lekki-Ajah. Boasting turnkey contemporary finishes, double-volume living lounges, fitted chef’s kitchen, ensuite bedroom retreats, and secure multicar parking.',
    extendedOverview: 'Situated in the serene and prestigious Royal Gardens Estate in Lekki-Ajah, this 5-bedroom fully detached duplex represents refined contemporary architecture and enduring build quality. Delivered ready for move-in by ChapelHill Multicompany Limited, the residence seamlessly unites generous family proportions with clean modern aesthetics.\n\nRoyal Gardens Estate offers master-planned living: wide paved boulevards, underground drainage, 24/7 security patrol, lush parks, and estate utilities. The home welcomes you into an airy double-height living salon, an open dining area, a fully equipped modern kitchen, and an upper family lounge. Each bedroom features an ensuite bath and custom-built wardrobes, while the master suite includes a private sunset balcony, walk-in dressing area, and a spa-style bathroom with a freestanding tub.',
    landSize: '600 sqm Plot • Royal Gardens Estate',
    totalUnits: 'Completed 5-Bed Detached Duplex + BQ',
    financials: {
      startingPrice: '₦320,000,000',
      priceRange: '₦320,000,000 – ₦350,000,000',
      paymentStructure: 'Outright Purchase or Structured Installments',
      milestones: [
        {
          stage: 'Initial Commitment',
          percentage: 'Deposit',
          description: 'Reservation deposit and execution of Contract of Sale',
        },
        {
          stage: 'Structured Balance',
          percentage: 'Balance',
          description: 'Balance payment upon deed execution and physical keys handover',
        },
        {
          stage: 'Immediate Handover',
          percentage: 'Final',
          description: 'Deed of Assignment delivery and immediate physical move-in',
        },
      ],
      titleStatus: "Registered Deed of Assignment / Governor's Consent & Approved Building Plans",
      estimatedServiceCharge: 'Royal Gardens Estate Dues (24/7 security, estate lighting, sanitation & park management)',
      handoverTimeline: 'Ready for Immediate Move-In (Completed)',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Fully Detached Duplex',
        count: 'Completed Turnkey',
        price: '₦320,000,000',
        bedrooms: 5,
        bathrooms: 5.5,
        sizeSqM: '420 sqm',
        sizeSqFt: '4,520 sqft',
        description: 'Completed 5-bedroom luxury residence featuring double-height ceilings, 2 family living rooms, chef-grade fitted kitchen, master sanctuary, and private balconies.',
        features: [
          '5 ensuite bedrooms with custom fitted wardrobes',
          'Self-contained Boys’ Quarters (BQ) with private entrance',
          'Chef’s fitted kitchen with heat extractor & granite countertops',
          'Private master suite with walk-in closet & soaking tub',
          'Interlocked compound parking for up to 5 vehicles',
          '24/7 Royal Gardens Estate security & solar power integration',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Estate Infrastructure & Location',
        items: [
          'Located in prestigious Royal Gardens Estate, Lekki-Ajah — premier gated community',
          'Underground electrical cabling and storm drainage infrastructure',
          'Paved, interlocked tree-lined internal estate roads with streetlighting',
          'Strict 24/7 manned security checkpoints and mobile patrol units',
        ],
      },
      {
        category: 'Interior Finishes & Joinery',
        items: [
          'High-durability Spanish porcelain tile floors across all living areas',
          'Custom POP ceiling designs with integrated LED warm strip lighting',
          'Solid hardwood contemporary doors with brushed stainless steel hardware',
          'Generous master suite with private sunset viewing terrace',
        ],
      },
      {
        category: 'Kitchen & Domestic Amenities',
        items: [
          'Fully fitted kitchen cabinets with soft-close hardware and pantry',
          'Granite work surfaces with undermount stainless steel double sink',
          'High-capacity kitchen heat extractor and designated appliance bays',
          'Direct service access connecting kitchen to the Boys’ Quarters (BQ)',
        ],
      },
      {
        category: 'Water, Power & Safety',
        items: [
          'Dedicated industrial borehole with multi-stage water treatment filtration',
          'Pre-wired inverter and generator switchgear backup connections',
          'Perimeter electric security fence and automated gate motor provision',
        ],
      },
    ],
    keyHighlights: [
      'Prestigious Royal Gardens Address: Master-planned gated community in Lekki-Ajah with quality infrastructure',
      'Completed & Move-In Ready: Immediate key handover with no construction waiting period',
      '5 Ensuite Bedrooms + Staff BQ: Generous family layout offering privacy, space, and comfort',
      'Chef-Grade Fitted Kitchen: Quality cabinetry, durable stone counters, and separate pantry',
      'Spa-Like Master Retreat: Features freestanding soaking tub, glass walk-in shower, and private balcony',
      'Secure Multicar Parking: Interlocked courtyard accommodating 4 to 6 vehicles with ease',
    ],
  },
  {
    id: 'royal-garden-5-bed-duplex-2',
    slug: 'royal-garden-5-bed-duplex-2',
    name: 'Royal Gardens 5-Bed Duplex & BQ (Phase 2)',
    tagline: 'Completed 5-Bedroom Contemporary Duplex with BQ • Royal Gardens Estate, Lekki-Ajah',
    location: 'Royal Gardens Estate, Lekki-Ajah, Lagos State, Nigeria',
    status: 'completed',
    statusLabel: 'Completed • Ready for Immediate Move-In',
    heroImage: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (11).jpeg',
    gallery: [
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (11).jpeg',
        caption: 'Grand Contemporary Exterior Facade — Royal Gardens Estate',
        category: 'exterior',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (12).jpeg',
        caption: 'Gated Private Forecourt & Spacious Interlocked Parking Drive',
        category: 'exterior',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (13).jpeg',
        caption: 'Sunlit Ground Floor Living Salon with Modern POP Finishes',
        category: 'living',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (14).jpeg',
        caption: 'Formal Dining Salon & Open Architectural Foyer',
        category: 'living',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (15).jpeg',
        caption: 'Custom Contemporary Fitted Kitchen with Granite Worktops',
        category: 'kitchen',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (16).jpeg',
        caption: 'Upper Floor Private Family Lounge & Gallery Landing',
        category: 'interior',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (17).jpeg',
        caption: 'Palatial Master Bedroom Suite with Private Balcony Terrace',
        category: 'bedroom',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (18).jpeg',
        caption: 'Luxury Ensuite Bathroom with Tempered Glass Shower Enclosure',
        category: 'amenity',
      },
      {
        url: '/Royal Garden 5 bed with bq 2/Royal garden 5 bed (19).jpeg',
        caption: 'Ensuite Bedroom Suite with Built-In Floor-to-Ceiling Wardrobes',
        category: 'bedroom',
      },
    ],
    description: 'An impeccably crafted 5-bedroom fully detached contemporary duplex with self-contained BQ nestled within Royal Gardens Estate, Lekki-Ajah. Showcasing distinctive exterior architectural styling, expansive sunlit living spaces, chef’s custom kitchen, and private staff quarters.',
    extendedOverview: 'ChapelHill Multicompany Limited presents this completed 5-bedroom luxury detached duplex with Boys’ Quarters in Royal Gardens Estate, Lekki-Ajah. Celebrated for its tranquility, greenery, underground drainage, and estate security, Royal Gardens provides a refined environment for modern family living.\n\nThis completed home features a grand open-concept living salon, a designated dining zone, an upper private family lounge, and five generously proportioned ensuite bedrooms. Built with quality craftsmanship, durable tiling, and modern fixtures, this home offers comfort and lasting quality.',
    landSize: '600 sqm Plot • Royal Gardens Estate',
    totalUnits: 'Completed 5-Bed Detached Duplex + BQ',
    financials: {
      startingPrice: '₦330,000,000',
      priceRange: '₦330,000,000 – ₦360,000,000',
      paymentStructure: 'Outright Purchase or Tailored Payment Plans',
      milestones: [
        {
          stage: 'Commitment & Reservation',
          percentage: 'Deposit',
          description: 'Reservation deposit and execution of Contract of Sale',
        },
        {
          stage: 'Structured Balance',
          percentage: 'Balance',
          description: 'Balance settlement upon deed signing and physical keys handover',
        },
        {
          stage: 'Immediate Handover',
          percentage: 'Final',
          description: 'Title transfer delivery and immediate physical move-in',
        },
      ],
      titleStatus: "Registered Deed of Assignment / Governor's Consent & Approved Building Plans",
      estimatedServiceCharge: 'Royal Gardens Estate Dues (24/7 security, estate lighting, sanitation & park maintenance)',
      handoverTimeline: 'Ready for Immediate Move-In (Completed)',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Contemporary Detached Duplex',
        count: 'Completed Turnkey',
        price: '₦330,000,000',
        bedrooms: 5,
        bathrooms: 5.5,
        sizeSqM: '430 sqm',
        sizeSqFt: '4,628 sqft',
        description: 'Immaculately delivered 5-bedroom contemporary duplex featuring 2 spacious lounges, fitted kitchen, master sanctuary, and private balconies.',
        features: [
          '5 ensuite bedrooms with floor-to-ceiling fitted wardrobes',
          'Self-contained Boys’ Quarters (BQ) with ensuite bathroom',
          'Chef’s fitted kitchen with granite worktops and pantry storage',
          'Master suite with private balcony terrace and glass shower enclosure',
          'Interlocked multicar parking court accommodating 4 to 6 cars',
          '24/7 security and estate infrastructure in Royal Gardens',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Estate Infrastructure & Location',
        items: [
          'Prestigious Royal Gardens Estate, Lekki-Ajah — master-planned community',
          'Underground utilities and storm drainage system',
          'Paved, tree-lined boulevards with solar streetlights',
          '24/7 armed gatehouse security and access control',
        ],
      },
      {
        category: 'Interior Finishes & Joinery',
        items: [
          'Polished vitrified porcelain floor tiles throughout the residence',
          'Architectural POP ceilings with recessed lighting fixtures',
          'Custom-built solid interior doors with premium hardware',
          'Master bedroom suite featuring private balcony with scenic estate views',
        ],
      },
      {
        category: 'Kitchen & Domestic Amenities',
        items: [
          'Custom fitted cabinetry with soft-close mechanisms',
          'Durable granite work surfaces and heat extractor hood',
          'Dedicated pantry and utility laundry connections',
          'Independent exterior service door leading to the BQ',
        ],
      },
      {
        category: 'Water, Power & Safety',
        items: [
          'Treated potable water supply from estate infrastructure and private borehole',
          'Dedicated generator switchgear and solar inverter changeover provision',
          'Secure perimeter wall with automated gate system wiring',
        ],
      },
    ],
    keyHighlights: [
      'Master-Planned Enclave: Royal Gardens Estate, Lekki-Ajah — wide roads, serene ambiance, and green parks',
      'Completed Residence: Brand new, move-in ready with immediate deed handover',
      '5 Ensuite Bedroom Suites: Spacious, airy bedrooms with bespoke built-in wardrobes',
      'Dual Living Lounges: Ground floor main living salon plus upper private family lounge',
      'Chef-Grade Fitted Kitchen: Custom cabinets, granite countertops, and extractor hood',
      'Self-Contained Staff BQ: Ensuite boys’ quarters with independent side entrance',
    ],
  },
  {
    id: 'beachwood-lagos',
    slug: 'beachwood-lagos',
    name: 'Beachwood Lagos — 5-Bed Semi-Detached Duplex',
    tagline: 'Direct Client Development • 5-Bedroom Semi-Detached Duplex with Rooftop Terrace',
    location: 'Beachwood Estate, Ibeju-Lekki Axis, Lagos State, Nigeria',
    status: 'ongoing',
    statusLabel: 'Ongoing Construction • Direct Client Development',
    heroImage: '/images/Beachwood Lagos/Beachwood project lagos 3d/Beachwood 3d images (1).jpeg',
    gallery: [
      {
        url: '/images/Beachwood Lagos/Beachwood project lagos 3d/Beachwood 3d images (1).jpeg',
        caption: 'Architectural Contemporary Exterior Facade at Twilight — 5-Bed Semi-Detached Duplex with Rooftop Terrace',
        category: 'exterior',
      },
      {
        url: '/images/Beachwood Lagos/Beachwood project lagos 3d/Beachwood 3d images (2).jpeg',
        caption: 'Birds-Eye Aerial Perspective — Rooftop Garden Lounge, Ample Multicar Parking & Gated Driveway',
        category: 'exterior',
      },
      {
        url: '/images/Beachwood Lagos/Beachwood project lagos 3d/Beachwood 3d images (3).jpeg',
        caption: 'Daylight Perspective Highlighting Floating Balconies, Geometric Wood-Clad Portico & Modern Fenestration',
        category: 'exterior',
      },
      {
        url: '/images/Beachwood Lagos/Beachwood project lagos 3d/Beachwood 3d images (4).jpeg',
        caption: 'Dusk Ambient Lighting Render Showcasing Cantilevered Terraces, Glass Balustrades & Recessed Exterior Sconces',
        category: 'exterior',
      },
      {
        url: '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
        caption: 'Suspended Reinforced Concrete Slab Decking with High-Tensile Steel Rebar & Conduit Pipework Laid',
        category: 'site',
      },
      {
        url: '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (2).jpeg',
        caption: 'Dog-Leg Staircase Flight Formwork & Steel Rebar Structural Cages Prior to Concrete Cast',
        category: 'site',
      },
      {
        url: '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (3).jpeg',
        caption: 'Precision Staircase Riser Formwork & Electrical Conduit Layout Under Site Engineer Audit',
        category: 'site',
      },
      {
        url: '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (4).jpeg',
        caption: 'Panoramic Overview of Structural Suspended Floor Slab, Drop Beams & High-Spec Engineering Framework',
        category: 'site',
      },
    ],
    description: 'A bespoke Direct Client Development delivered by ChapelHill Multicompany Limited in Beachwood Estate, Ibeju-Lekki. This 5-bedroom semi-detached luxury duplex features contemporary architectural lines, a dedicated borehole water system, 24/7 power provision, ample multicar parking space, cantilevered terraces, and a scenic rooftop lounge.',
    extendedOverview: 'Beachwood Lagos represents a Direct Client Development custom-commissioned and currently under active civil construction by ChapelHill Multicompany Limited within the secure, serene Beachwood Estate along the Ibeju-Lekki corridor.\n\nFrom initial 3D architectural conceptualization to structural engineering and on-site concrete execution, ChapelHill Multicompany Limited manages every facet of the project lifecycle. The residence features 5 expansive ensuite bedrooms, a dual living room configuration with an upper private family lounge, a contemporary kitchen, and a private rooftop entertaining terrace.\n\nEngineered for self-sufficiency and comfort, utility amenities include an independent borehole water treatment facility, 24/7 power supported by solar-inverter changeover infrastructure, and generous interlocked parking accommodating 4 to 6 vehicles within a private gated compound.',
    landSize: 'Dedicated Private Plot • Beachwood Estate',
    totalUnits: '5-Bedroom Semi-Detached Duplex + BQ',
    financials: {
      startingPrice: 'Direct Client Development',
      priceRange: 'Direct Client Commission • Custom Build Contract',
      paymentStructure: 'Stage-by-Stage Milestone Valuations (Direct Client Contract)',
      milestones: [
        {
          stage: 'Substructure & Foundation',
          percentage: '25%',
          description: 'Earthworks, deep raft foundation, ground beams, and damp-proof membrane installation (Completed)',
        },
        {
          stage: 'Superstructure & Suspended Slabs',
          percentage: '30%',
          description: 'Reinforced concrete columns, suspended floor slabs, cantilevered terraces, and staircase casting (Currently In Progress)',
        },
        {
          stage: 'Roofing, Blockwork & Carcass',
          percentage: '20%',
          description: 'Perimeter blockwork, parapet concrete capping, concealed roofing system, and exterior wall rendering',
        },
        {
          stage: 'MEP, Borehole & Utilities',
          percentage: '15%',
          description: 'Industrial borehole drilling, 24/7 power wiring, solar changeover conduits, and plumbing first-fix',
        },
        {
          stage: 'Turnkey Finishes & Commissioning',
          percentage: '10%',
          description: 'Custom fitted kitchen, sanitary ware, floor tiling, POP ceilings, interlocked paving, and physical handover',
        },
      ],
      titleStatus: 'Governor’s Consent / Registered Deed of Assignment',
      estimatedServiceCharge: 'Beachwood Estate Facility Management Rates',
      handoverTimeline: 'Active Construction — Scheduled Milestone Delivery',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Semi-Detached Duplex + Rooftop Terrace',
        count: '1 Bespoke Residence',
        price: 'Direct Client Contract',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqM: '420 sqm Built Footprint',
        description: 'A palatial 3-storey semi-detached residence boasting 5 ensuite bedrooms, expansive double-volume living and dining halls, private upper family lounge, self-contained staff quarters, and a scenic rooftop party terrace.',
        features: [
          '5 Generous Ensuite Bedroom Suites with Provision for Built-In Closets',
          'Rooftop Terrace Garden Lounge with Panoramic Estate Views',
          'Dedicated Industrial Borehole Potable Water System',
          '24/7 Dual-Grid & Solar Inverter Power Infrastructure',
          'Ample Interlocked Parking Space Accommodating 4–6 Vehicles',
          'Ensuite Staff Quarters (Maid’s BQ) with Independent Access',
          'Contemporary Chef Kitchen with Walk-In Storage Pantry',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Structural Engineering & Concrete Works',
        items: [
          'High-tensile ribbed steel rebar reinforcement to standard building engineering codes',
          'Ready-mix vibrated reinforced concrete suspended slabs and heavy-duty drop beams',
          'Monolithic reinforced concrete staircase flight with precision formwork and rebar cages',
          'Multi-layered damp-proof coursing and waterproofing membrane across foundation and wet areas',
        ],
      },
      {
        category: 'Water, Plumbing & Drainage Utilities',
        items: [
          'Independent borehole drilled into deep potable water aquifer',
          'Automated submersible pump system with high-capacity overhead storage tanks',
          'Multi-stage filtration and water treatment system supplying clean pressurized water',
          'Engineered underground drainage layout with seamless connection to Beachwood central outfall',
        ],
      },
      {
        category: 'Electrical, Power & Solar Infrastructure',
        items: [
          '24/7 power provision backed by pre-installed solar-inverter conduits and heavy-duty changeover panels',
          'Concealed heavy-gauge copper wiring with dedicated circuits for high-load appliances and air conditioning',
          'Architectural warm LED recessed ceiling spotlights and exterior perimeter safety floodlights',
          'Smart home automation conduits for automated access control, CCTV, and intercom',
        ],
      },
      {
        category: 'External Grounds, Parking & Compound Security',
        items: [
          'Spacious interlocked multicar driveway accommodating 4 to 6 vehicles with ease',
          'High-security perimeter fencing with automated motorized gate wiring provision',
          'Cantilevered terraces and open-air rooftop entertaining terrace with toughened glass balustrades',
          'Dedicated pedestrian gatehouse and service entrance for independent staff movement',
        ],
      },
    ],
    keyHighlights: [
      'Direct Client Development: Bespoke turnkey civil construction managed end-to-end by ChapelHill Multicompany Limited',
      '5 Ensuite Bedrooms: Lavish private quarters including master sanctuary with private balcony',
      'Private Borehole Water System: Independent treated water supply for complete self-reliance',
      '24/7 Power Infrastructure: Integrated solar inverter changeover panels and dual-grid estate connectivity',
      'Ample Multicar Parking Space: Broad interlocked driveway comfortably parking 4 to 6 vehicles',
      'Rooftop Terrace & Cantilevers: Expansive outdoor entertaining deck overlooking Beachwood Estate',
      'Turnkey Engineering Quality: Supervised by experienced civil engineers and project managers',
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id || p.slug === id);
}

export function getAllProperties(): Property[] {
  return PROPERTIES;
}
