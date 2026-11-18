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
    tagline: 'Key Development • Pre-Construction / Off-Plan Residential Apartments',
    location: 'Ikate, Lekki Phase 1, Lagos State, Nigeria',
    status: 'ongoing',
    statusLabel: 'Pre-Construction / Off-Plan • 24-Month Proposed Build',
    heroImage: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    gallery: [
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
        caption: 'IVY Heights Front Facade & Arrival Courtyard (Illustrative Architectural Render)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(1).jpeg',
        caption: 'Street-Level Architectural Perspective — IVY Heights, Ikate, Lekki Phase 1 (Illustrative Render)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(2).jpeg',
        caption: 'Angled Elevation — Terraced Balconies & Ground Parking (Illustrative Architectural Render)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(3).jpeg',
        caption: 'Aerial Perspective — Mid-Rise Massing & Roofline (Illustrative Architectural Render)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(5).jpeg',
        caption: 'Facade Materiality, Planters & Glazed Balustrades (Illustrative Architectural Render)',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 floor plan.jpeg',
        caption: 'Illustrative Typical Floor Plan Layout — 2-Bedroom & 3-Bedroom Apartments',
        category: 'floorplan',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 ground floor plan.jpeg',
        caption: 'Illustrative Ground Level Access & Parking Concept Plan',
        category: 'floorplan',
      },
      {
        url: '/images/lekki-phase-1/site-1.webp',
        caption: 'Site Location Reference — Ikate, Lekki Phase 1 Development Parcel',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-2.webp',
        caption: 'Site Inspection Context — Ikate, Lekki Phase 1 Surrounding Access Corridor',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-3.webp',
        caption: 'Site Parcel Aerial Context — Ikate, Lekki Phase 1, Lagos',
        category: 'site',
      },
    ],
    description: 'A flagship residential apartment development situated at Ikate, Lekki Phase 1, Lagos. Currently at the pre-construction / off-plan stage with a proposed 24-month construction period, offering approved two-bedroom and three-bedroom apartment options.',
    extendedOverview: 'Located at Ikate, Lekki Phase 1, Lagos, IVY Heights is ChapelHill Multicompany Limited’s key pre-construction / off-plan residential apartment development featuring well-proportioned two-bedroom and three-bedroom apartments.\n\nThe proposed construction period is 24 months, subject to formal offer execution, statutory clearances, and management confirmation. Three management-approved payment pathways are available: a 12-month deposit-based plan, an 18-month deposit-based plan, and a management-approved 24-month zero-initial-deposit plan. Zero initial deposit does not remove contractual obligations or payments due at signing, and all terms remain subject to signed offer documentation and management approval.\n\nDisclaimer: All architectural renderings and floor plans shown are illustrative concepts and do not portray completed units.',
    landSize: 'Ikate, Lekki Phase 1, Lagos',
    totalUnits: '2-Bedroom & 3-Bedroom Apartments • Pre-Construction / Off-Plan',
    financials: {
      startingPrice: 'Approved Schedule on Request',
      priceRange: '2-Bedroom & 3-Bedroom Off-Plan Options',
      paymentStructure: '12-Month Deposit Plan • 18-Month Deposit Plan • 24-Month Zero-Initial-Deposit Option',
      milestones: [
        {
          stage: '12-Month Deposit-Based Plan',
          percentage: '12 Months',
          description: 'Deposit-based off-plan payment structure spread across 12 months in accordance with the current management-approved pricing schedule.',
        },
        {
          stage: '18-Month Deposit-Based Plan',
          percentage: '18 Months',
          description: 'Extended deposit-based instalment schedule over 18 months per the current management-approved commercial offer sheet.',
        },
        {
          stage: '24-Month Zero-Initial-Deposit Plan',
          percentage: '24 Months (Zero Initial Deposit)',
          description: 'Management-approved 24-month zero-initial-deposit option. Note: Zero initial deposit does not mean no contractual obligations or no payment at signing; all terms remain subject to signed offer and management approval.',
        },
      ],
      titleStatus: 'Available title and statutory documentation shared for independent buyer verification prior to signing',
      estimatedServiceCharge: 'Facility management, security, power, water, and common-area upkeep schedule issued upon offer documentation',
      handoverTimeline: 'Proposed 24-Month Construction Period (Subject to Formal Offer Terms & Management Confirmation)',
    },
    unitBreakdown: [
      {
        title: '2-Bedroom Apartment',
        count: 'Pre-Construction / Off-Plan',
        price: 'Approved Pricing on Request',
        bedrooms: 2,
        bathrooms: 2,
        description: 'Approved two-bedroom residential apartment designed for functional contemporary living in Ikate, Lekki Phase 1. Available across the 12-month deposit-based, 18-month deposit-based, or management-approved 24-month zero-initial-deposit payment options.',
        features: [
          'Current pricing & instalment sheet provided directly upon enquiry',
          'Eligible for 12-month, 18-month, or 24-month zero-initial-deposit plan (subject to signed offer & management approval)',
          'Pre-construction / off-plan allocation with proposed 24-month build period',
          'All architectural renderings are illustrative concepts, not completed units',
        ],
      },
      {
        title: '3-Bedroom Apartment',
        count: 'Pre-Construction / Off-Plan',
        price: 'Approved Pricing on Request',
        bedrooms: 3,
        bathrooms: 3,
        description: 'Approved three-bedroom residential apartment offering generous family proportions at Ikate, Lekki Phase 1. Eligible for our structured 12-month, 18-month, and 24-month payment pathways upon formal management offer.',
        features: [
          'Current pricing & instalment sheet provided directly upon enquiry',
          'Eligible for 12-month, 18-month, or 24-month zero-initial-deposit plan (subject to signed offer & management approval)',
          'Pre-construction / off-plan allocation with proposed 24-month build period',
          'All architectural renderings are illustrative concepts, not completed units',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Development Status & Construction Programme',
        items: [
          'Current Stage: Pre-Construction / Off-Plan as confirmed by management',
          'Proposed Construction Period: 24 months (subject to signed offer terms, approvals, and project schedule)',
          'Residential Apartment Mix: Two-bedroom and three-bedroom apartment options at Ikate, Lekki Phase 1, Lagos',
          'All 3D renders and visuals are illustrative architectural representations rather than photographs of finished apartments',
        ],
      },
      {
        category: 'Planned Resident Amenities & Shared Spaces',
        items: [
          'Thoughtfully planned residential building layout with dedicated arrival and parking areas',
          'Residents’ lounge, fitness space, and landscaped courtyard concepts (illustrative)',
          'Vertical circulation via planned lift access and well-ventilated stairwells',
          'Backup power and treated water supply provisions integrated into building services planning',
        ],
      },
      {
        category: 'Commercial Terms & Payment Pathways',
        items: [
          '12-month deposit-based payment plan per current management-approved offer sheet',
          '18-month deposit-based payment plan per current management-approved offer sheet',
          '24-month zero-initial-deposit plan (subject to contractual obligations, signing payments where applicable, and management approval)',
          'Formal offer documentation issued directly by ChapelHill Multicompany Limited upon inquiry',
        ],
      },
      {
        category: 'Security, Title & Due Diligence',
        items: [
          'Perimeter security, gated entry, and controlled vehicular access planning',
          'Available land title and development documentation shared with prospective buyers for independent legal verification',
          'Scheduled site visits at Ikate, Lekki Phase 1 and briefing sessions with ChapelHill project directors',
        ],
      },
    ],
    keyHighlights: [
      'Key Development — IVY Heights, Ikate, Lekki Phase 1, Lagos',
      'Status: Pre-Construction / Off-Plan with a proposed 24-month construction period (subject to offer terms)',
      'Approved Unit Options: Two-bedroom and three-bedroom residential apartments',
      'Payment Plans: 12-month deposit-based, 18-month deposit-based, and management-approved 24-month zero-initial-deposit option (subject to signing obligations & approval)',
      'Illustrative Visuals: Renderings are architectural concepts and do not portray completed units',
      'Direct Advisory: Request the latest approved pricing sheet or book an Ikate site inspection via +234 803 286 5488',
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
    description: 'A prestigious residential development in Abijo GRA, Lekki. Featuring luxury finished 1, 2, and 3-bedroom flats with fitted kitchens, 24/7 power backed by a fully installed solar system, 24/7 security, fully interlocked roads, efficient drainage, and dedicated parking spaces.',
    extendedOverview: 'Ivy homes is located in the prestigious Abijo GRA area of Lekki. It is the only GRA in the Lekki axis of Lagos. It has paved access roads and is less than 3 minutes away from the popular Lekki-Epe expressway. Located in a fast developing corridor of Lagos State, IVY homes is a 30 minutes drive from Dangote refinery and 45 minutes away from Victoria Island.\n\nBuilt by ChapelHill Multicompany Limited, every apartment is designed with your peace and comfort in mind. Features include luxury finishes, fitted kitchens, 24/7 power supply with a fully installed solar system, 24/7 security, efficient drainage, and 12 dedicated parking spaces.',
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
      'Prestigious Abijo GRA Location: The only Government Reserved Area (GRA) in the Lekki axis of Lagos',
      'Prime Connectivity: Paved access roads less than 3 minutes to Lekki-Epe Expressway, 30 minutes to Dangote Refinery, 45 minutes to Victoria Island',
      'Competitive Pricing: 1-Bed from ₦50M ($34,774), 2-Bed from ₦65M ($45,207), 3-Bed from ₦75M ($52,161) with installmental payment available',
      'Guaranteed 24/7 Power: Every apartment backed by an integrated, fully installed solar energy system',
      'Turnkey Amenities: Luxury finished, fitted kitchens, 12 parking spaces, interlocked roads, efficient drainage, and 24/7 security',
      'Developed by ChapelHill Multicompany Limited: Property development and maintenance company committed to quality and efficiency',
    ],
  },
  {
    id: 'ogudu-gra-project',
    slug: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    tagline: '5-Bedroom Penthouse Residence',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    status: 'sold-out',
    statusLabel: 'Sold Out • Fully Allocated',
    heroImage: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    gallery: [
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
        caption: 'Sculptural Modernist Penthouse Architecture with Cantilevered Lounges',
        category: 'exterior',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 2.webp',
        caption: 'Wraparound Penthouse Sky Terrace with Panoramic Horizon Vistas',
        category: 'amenity',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 3.webp',
        caption: 'Double-Height Living Salon with Floor-to-Ceiling Acoustic Glazing',
        category: 'living',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (7).jpeg',
        caption: 'Palatial Master Penthouse Suite with Private Sun Deck Access',
        category: 'bedroom',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (6).jpeg',
        caption: 'Custom Italian Marble Kitchen Island and Concealed Pantry',
        category: 'kitchen',
      },
      {
        url: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (11).jpeg',
        caption: 'Private Elevator Landing Foyer with Custom Architectural Paneling',
        category: 'interior',
      },
    ],
    description: 'A private penthouse residence located in Ogudu GRA, Lagos. Designed for privacy, comfortable entertaining, and seamless indoor-outdoor living with skyline views. This development is now sold out.',
    extendedOverview: 'The Ogudu GRA Project is a private multi-level penthouse residence tailored for families and discerning homeowners. Positioned in the tranquil inner enclave of Ogudu GRA (within easy reach of Ikeja and Victoria Island via the Third Mainland Bridge), this residence combines contemporary architectural lines with floor-to-ceiling glazing, private elevator access, and generous entertaining terraces.\n\nThis development is now sold out. Inquiries are welcome for our waitlist and upcoming private residential developments.',
    landSize: 'Exclusive Top-Floor Air Rights & 4 Dedicated Staged Bays',
    totalUnits: 'Exclusive Single Penthouse Residence (Sold Out)',
    financials: {
      startingPrice: 'Sold Out',
      priceRange: 'Sold Out • Fully Allocated',
      paymentStructure: 'Project Sold Out — Waitlist Active',
      milestones: [
        {
          stage: 'Initial Commitment',
          percentage: '30%',
          description: 'Reservation, floorplan review, and formal contract documentation (Completed)',
        },
        {
          stage: 'Superstructure & Roofing',
          percentage: '25%',
          description: 'Completion of reinforced concrete frame, floor slabs, and penthouse roof decking (Completed)',
        },
        {
          stage: 'Interior MEP & Glazing',
          percentage: '25%',
          description: 'Installation of private elevator, floor-to-ceiling glass assemblies, and smart home wiring',
        },
        {
          stage: 'Final Finishes & Commissioning',
          percentage: '20%',
          description: 'Bespoke joinery, appliances, final snagging, and physical handover',
        },
      ],
      titleStatus: 'Registered Title & Approved Building Plans',
      estimatedServiceCharge: 'Estate security, elevator servicing, and shared utility maintenance',
      handoverTimeline: 'Sold Out — Handover & Allocation Complete',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse Suite',
        count: '1 Unit (Sold Out)',
        price: 'Sold Out',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqM: '440 sqm',
        sizeSqFt: '4,736 sqft',
        description: 'Spacious multi-level residence featuring a double-height great room, private sky lounge, formal dining room, wraparound sunset terrace, and private elevator arrival. Currently fully allocated.',
        features: [
          'Status: Sold Out (Waitlist Available)',
          'Direct keycard-controlled private elevator arrival into residence foyer',
          'Panoramic wraparound terrace with outdoor barbecue area and sunset views',
          'Generous Master Suite with dual walk-in dressing rooms and freestanding soaking tub',
          'Private executive home office overlooking double-height salon',
          'Custom show kitchen with integrated appliance suite',
        ],
      },
      {
        title: 'Ensuite Service Quarters (Maid’s Quarters)',
        count: '1 Suite (Sold Out)',
        price: 'Sold Out (Included with Penthouse)',
        bedrooms: 1,
        bathrooms: 1,
        sizeSqM: '24 sqm',
        sizeSqFt: '258 sqft',
        description: 'Dedicated auxiliary staff accommodation with independent access point and ensuite bathroom.',
        features: [
          'Status: Sold Out',
          'Independent secondary service entrance off rear stairwell',
          'Private bathroom and ventilation shaft',
          'Direct connection to service pantry and utility zones',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Elevator & Vertical Transport',
        items: [
          'Dedicated private passenger traction elevator',
          'Biometric and RFID keycard access restricting arrival strictly to the penthouse floor',
          'Automatic battery rescue device ensuring safe lowering during power switchover',
        ],
      },
      {
        category: 'Acoustic & Thermal Fenestration',
        items: [
          'Double-glazed tempered safety glass assemblies',
          'Heavy-duty thermally broken powder-coated architectural aluminum profiles',
          'Acoustic insulation between floor slabs for enhanced quietness',
        ],
      },
      {
        category: 'Smart Home Automation & Solar Backup',
        items: [
          'Central smart home automation pre-wired to all suites',
          'Automated motorized blind recesses and architectural lighting zones',
          'Solar inverter system with battery energy storage backup',
        ],
      },
      {
        category: 'Bespoke Millwork & Luxury Finishes',
        items: [
          'Imported marble-look porcelain slab flooring in reception salons and formal foyer',
          'Engineered wood flooring in master and guest bedroom suites',
          'Concealed ducted inverter air conditioning systems',
        ],
      },
    ],
    keyHighlights: [
      'Sold Out: Exclusive single penthouse residence in Ogudu GRA, Lagos',
      'Prime mainland GRA residential setting with central connectivity',
      'Accessible commute to Ikeja CBD and Victoria Island via Third Mainland Bridge',
      'Wide horizon views spanning mainland greenery and the lagoon',
      'Waitlist Open: Inquire for upcoming private residential developments',
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
