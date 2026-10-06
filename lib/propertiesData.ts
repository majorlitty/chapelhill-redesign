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
  projectedRentalYield: string;
  projectedShortLetAnnualGross?: string;
  capitalAppreciationForecast: string;
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
    extendedOverview: 'Ivy homes is located in the prestigious Abijo GRA area of Lekki. It is the only GRA in the Lekki axis of Lagos. It has paved access roads and is less than 3 minutes away from the popular Lekki-Epe expressway. Located in one of the fastest growing areas of Lagos State, IVY homes is only a 30 minutes drive from Dangote refinery and 45 minutes away from Victoria Island.\n\nBuilt by Chapelhill Multicompany International, every apartment is designed with your peace and comfort in mind. Features include luxury finishes, fitted kitchens, 24/7 power supply with a fully installed solar system, 24/7 security, efficient drainage, and 12 dedicated parking spaces.',
    landSize: '861.88 sqm Site • 318.66 sqm Building Footprint',
    totalUnits: '3 Floors • 1, 2 & 3 Bedroom Flats (12 Parking Spaces)',
    financials: {
      startingPrice: '₦50,000,000',
      priceRange: '₦50,000,000 – ₦75,000,000 ($34,774 – $52,161)',
      projectedRentalYield: 'High Rental Yield & Fast Capital Growth in Lekki Axis',
      projectedShortLetAnnualGross: '₦50M (1-Bed) | ₦65M (2-Bed) | ₦75M (3-Bed)',
      capitalAppreciationForecast: 'Fastest Growing Area of Lagos — 30 Mins to Dangote Refinery, 45 Mins to VI',
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
      handoverTimeline: 'Ready for Immediate Handover (100% Completed)',
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
          'Luxury finished apartments engineered with superior quality and efficiency by Chapelhill',
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
      'Developed by Chapelhill: World-class property development and maintenance company committed to superior quality and efficiency',
    ],
  },
  {
    id: 'ogudu-gra-project',
    slug: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    tagline: 'Architectural Trophy Penthouse Residence',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    status: 'sold-out',
    statusLabel: 'Sold Out • 100% Allocated',
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
    description: 'An elite private penthouse residence crowned at the pinnacle of Ogudu GRA. Engineered for supreme privacy, lavish entertainment, and seamless indoor-outdoor living with panoramic skyline views of Lagos. This landmark development is now 100% sold out.',
    extendedOverview: 'The Ogudu GRA Project is an uncompromising architectural achievement—a private, multi-level crown penthouse tailored for high-net-worth families, diaspora collectors, and institutional leaders. Positioned in the tranquil, established inner enclave of Ogudu GRA (just 12 minutes from Ikeja and 20 minutes from Victoria Island via the Third Mainland Bridge), this trophy residence fuses cantilevered concrete geometries with floor-to-ceiling thermal glazing, private elevator access, and multi-tier entertaining terraces.\n\nThis development has successfully reached 100% sell-out status. Inquiries are welcome for our secondary market waitlist and upcoming private penthouse collections.',
    landSize: 'Exclusive Top-Floor Air Rights & 4 Dedicated Staged Bays',
    totalUnits: 'Exclusive Single Penthouse Residence (100% Sold Out)',
    financials: {
      startingPrice: 'Sold Out (Guide: ₦650M)',
      priceRange: 'Sold Out • Fully Allocated (Guide was ₦380M – ₦650M)',
      projectedRentalYield: '12.0% – 16.5% Net Annual Rental Yield',
      projectedShortLetAnnualGross: '₦28,000,000 – ₦36,000,000 (Prime VIP / Diplomatic Short-Stay Rate)',
      capitalAppreciationForecast: '28% Anticipated Capital Growth upon Structural Completion',
      paymentStructure: 'Project 100% Sold Out — Secondary Market Waitlist Active',
      milestones: [
        {
          stage: 'Initial Commitment',
          percentage: '30%',
          description: 'Reservation, bespoke floorplan personalization review, and formal contract documentation (Completed)',
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
          description: 'Bespoke Italian joinery, appliances, final snagging, and physical handover',
        },
      ],
      titleStatus: 'Certificate of Occupancy (C of O) & Approved Building Permit from LASPPPA',
      estimatedServiceCharge: '₦60,000 / month (Includes dedicated elevator service maintenance, security, standby generator power)',
      handoverTimeline: 'Sold Out — Final Commissioning & Handover in Progress',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse Suite',
        count: '1 Trophy Unit (Sold Out)',
        price: 'Sold Out',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqM: '440 sqm',
        sizeSqFt: '4,736 sqft',
        description: 'A monument to modern scale: double-height great room, private sky lounge, formal dining room, wraparound sunset terrace, and custom private elevator arrival. Currently 100% allocated.',
        features: [
          'Status: 100% Sold Out (Secondary Market Waitlist Available)',
          'Direct keycard-controlled private elevator arrival straight into residence foyer',
          'Panoramic wraparound terrace with outdoor barbecue kitchen and sunset views',
          'Enormous 90 sqm Master Suite with dual walk-in dressing rooms and freestanding soaking tub',
          'Private executive home office / library overlooking double-height salon',
          'Custom Poggenpohl-style show kitchen with integrated Miele appliance suite',
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
          'Status: 100% Sold Out',
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
          'Dedicated German-engineered Thyssenkrupp / Otis private traction elevator',
          'Biometric and RFID keycard access restricting arrival strictly to the penthouse floor',
          'Automatic battery rescue device ensuring safe lowering during any power switchover',
        ],
      },
      {
        category: 'Acoustic & Thermal Fenestration',
        items: [
          'Double-glazed argon-filled low-E tempered safety glass assemblies',
          'Heavy-duty thermally broken powder-coated architectural aluminum profiles',
          'Acoustic insulation between floor slabs exceeding 54dB sound attenuation',
        ],
      },
      {
        category: 'Smart Home Automation & Solar Backup',
        items: [
          'Control4 / Crestron central smart home ecosystem pre-wired to all suites',
          'Automated motorized blind recesses and scene-based architectural mood lighting',
          '15kVA pure sine wave solar inverter system with tier-1 lithium storage pack',
        ],
      },
      {
        category: 'Bespoke Millwork & Luxury Finishes',
        items: [
          'Imported Calacatta marble slab flooring in reception salons and formal foyer',
          'Solid white oak engineered parquet in master and guest bedroom suites',
          'Fully concealed ducted VRV inverter air conditioning systems by Daikin',
        ],
      },
    ],
    keyHighlights: [
      '100% Sold Out: Exclusive single penthouse trophy residence fully allocated to institutional-grade standards',
      'The premier high-density penthouse offering developed on mainland Lagos',
      'Unrivaled central connectivity: 12 minutes to Ikeja CBD, 20 minutes to Victoria Island',
      'Unobstructed 270-degree horizon views spanning from mainland greenery to the lagoon',
      'Secondary Market Waitlist: Inquire for potential resales or upcoming private collections',
    ],
  },
  {
    id: 'lekki-phase-1-project',
    slug: 'lekki-phase-1-project',
    name: 'Ivy Heights, Lekki Phase 1',
    tagline: 'Exclusive Off-Plan Investment • 5-Storey Luxury Residential Building',
    location: 'Lekki Phase 1, Lagos State, Nigeria',
    status: 'ongoing',
    statusLabel: 'Exclusive Off-Plan Investment • Currently Ongoing',
    heroImage: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    gallery: [
      {
        url: '/images/lekki-phase-1/site-1.webp',
        caption: 'Active Development Site — Structural Framework & Construction Progress',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-2.webp',
        caption: 'Ongoing Site Engineering — Foundation Core & Column Reinforcement',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/site-3.webp',
        caption: 'Superstructure Works — Poured Slab Integrity & Site Overview',
        category: 'site',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(1).jpeg',
        caption: 'Street Level Perspective (Worm’s-Eye) — 5-Storey Afrocentric Architecture',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(2).jpeg',
        caption: 'Wider Angled Corner View — Terraced Balconies and Covered Ground Parking',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(3).jpeg',
        caption: 'Aerial Plan View — Mid-Rise Architectural Symmetry & Roofline',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
        caption: 'Ivy Heights Front Facade & Arrival Courtyard — 5-Storey Luxury Residences',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(5).jpeg',
        caption: 'Material & Landscape Detail — Fluted Cladding, Planters & Glass Balustrades',
        category: 'exterior',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 floor plan.jpeg',
        caption: 'Architectural Typical Floor Plan Layout — 2-Bed & 3-Bed Flats + BQ',
        category: 'floorplan',
      },
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1 ground floor plan.jpeg',
        caption: 'Ground Level Access, Dedicated Parking & Concierge Master Plan',
        category: 'floorplan',
      },
    ],
    description: 'An exclusive off-plan development redefining luxury living in Lekki Phase One, Lagos. A sophisticated 5-storey residential building designed to meet the highest standards of modern architecture and comfort, offering expansive living spaces, premium finishes, and breathtaking views.',
    extendedOverview: 'Strategically located on Lekki Phase One, the project comprises a sophisticated 5-storey residential building designed to meet the highest standards of modern architecture and comfort. Each unit is meticulously crafted to offer expansive living spaces, premium finishes, and breathtaking views, providing an unparalleled residential experience.\n\nOur vision for this development is to create a community that embodies prestige and offers exceptional investment opportunities. By investing before completion, buyers can capitalize on off-plan pricing, ensuring significant capital appreciation as the project reaches its full potential. ',
    landSize: 'Prime Lekki Phase One Address (866 sqm Parcel)',
    totalUnits: '5-Storey Building • Refined Residential Mix',
    financials: {
      startingPrice: '₦200,000,000',
      priceRange: '₦200,000,000 – ₦250,000,000 (Penthouses on Request)',
      projectedRentalYield: 'High Value Upside — Invest Before Completion at Off-Plan Pricing',
      projectedShortLetAnnualGross: '₦200M (2-Bed) | ₦250M (3-Bed) Off-Plan Advantage',
      capitalAppreciationForecast: 'Positioned for Long-Term Value Growth in a High-Value Lagos Corridor',
      paymentStructure: '50% First Instalment, Remaining Balance Spread in Monthly Instalments Over 8 Months',
      milestones: [
        {
          stage: 'First Instalment (50% of total price)',
          percentage: '50%',
          description: 'Initial off-plan commitment — ₦100,000,000 (2-Bed) / ₦125,000,000 (3-Bed)',
        },
        {
          stage: 'Remaining Balance (Monthly Instalments over 8 months)',
          percentage: '50%',
          description: '₦12,500,000 per month (2-Bed) / ₦15,625,000 per month (3-Bed)',
        },
      ],
      titleStatus: "Prime Lekki Phase One Title with Registered Governor's Consent & Approved Building Plans",
      estimatedServiceCharge: 'Includes 24/7 concierge & security, backup power & water supply, residents lounge, gym & facility maintenance',
      handoverTimeline: 'Active Phased Construction • Off-Plan Investment Opportunity',
    },
    unitBreakdown: [
      {
        title: '2-Bedroom Flat + BQ',
        count: 'Available Units',
        price: '₦200,000,000 (Off-Plan)',
        bedrooms: 2,
        bathrooms: 2,
        sizeSqM: '200 sqm',
        sizeSqFt: '2,153 sqft',
        description: 'Thoughtfully designed 2-bedroom residence featuring a fully fitted Boys’ Quarters (BQ), spacious living room, dining area, private balcony, and fitted kitchen with pantry.',
        features: [
          "Fully fitted Boys' Quarters (BQ)",
          "Off-Plan Price: ₦200,000,000",
          "Payment Plan: ₦100M first instalment (50%) + ₦12.5M/month over 8 months",
          "Expansive 200 m² living layout with private balconies",
          "Fitted contemporary kitchen with pantry and utility connections",
          "Dedicated parking space and convenient lift access",
        ],
      },
      {
        title: '3-Bedroom Flat + BQ',
        count: 'Available Units',
        price: '₦250,000,000 (Off-Plan)',
        bedrooms: 3,
        bathrooms: 3.5,
        sizeSqM: '250 sqm',
        sizeSqFt: '2,691 sqft',
        description: 'Expansive 3-bedroom executive residence offering generous living spaces, dedicated home office/study room, fully fitted Boys’ Quarters (BQ), and master suite with walk-in closet.',
        features: [
          "Fully fitted Boys' Quarters (BQ)",
          "Off-Plan Price: ₦250,000,000",
          "Payment Plan: ₦125M first instalment (50%) + ₦15.625M/month over 8 months",
          "Generous 250 m² floor layout featuring home office/study room",
          "Master suite with walk-in closet, ensuite bath, and private balcony",
          "Dedicated parking spaces and convenient lift access",
        ],
      },
      {
        title: 'Penthouse Units',
        count: 'Exclusive Units',
        price: 'Available on Request',
        bedrooms: 3,
        bathrooms: 3.5,
        sizeSqM: '300+ sqm',
        sizeSqFt: '3,200+ sqft',
        description: 'Top-tier crown penthouses offering panoramic Lekki skyline views, vast private sky terraces, luxury smart home features, and supreme privacy.',
        features: [
          "Exclusive top-floor placement with panoramic Lekki Phase 1 vistas",
          "Expansive private rooftop entertaining terraces",
          "Off-plan pricing available on request for discerning private buyers",
          "High-end bespoke finishes and smart home automation",
          "Priority elevator access and dedicated covered parking",
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Building Programme & Architecture',
        items: [
          '5-storey luxury mid-rise residential building with world-class Afrocentric architecture',
          'Thoughtfully designed residential mix that maximizes comfort, functionality, and contemporary living',
          'Private balconies and comfortable living spaces with generous daylight and ventilation',
          'Developed and owned by Chapel Hill — contemporary African luxury rooted in Africa, designed for the world',
        ],
      },
      {
        category: 'Amenities & Facilities',
        items: [
          'Residents’ lounge for social gatherings and executive relaxation',
          'Fully equipped fitness gym with modern cardiovascular and strength training systems',
          'Dedicated children’s play area within a protected, secure environment',
          'Artfully landscaped courtyard with tropical botanical aesthetics',
          'Convenient low-rise elevator/lift access servicing all floors',
        ],
      },
      {
        category: 'Power, Water & Infrastructure',
        items: [
          'Guaranteed continuous backup power supply',
          'Comprehensive backup water supply system with dedicated filtration',
          'Ample dedicated parking bays for residents and visitors',
          'Integrated high-speed connectivity and smart home features',
        ],
      },
      {
        category: 'Security & Access Protocols',
        items: [
          'Secure gated entry with 24/7 security personnel and concierge',
          'Robust perimeter security systems and continuous surveillance',
          'Controlled resident and guest vehicular access protocols',
        ],
      },
    ],
    keyHighlights: [
      'Prime Location — Lekki Phase One: One of Lekki Phase One’s most desirable and fast-growing residential streets',
      'Strong Value Upside: 2-Bedroom at ₦200M; 3-Bedroom at ₦250M; positioned for long-term value growth in a premium corridor',
      'Limited Luxury Inventory: Scarce premium units in one of Lekki Phase One’s most sought-after addresses',
      'International-Standard Development: 5-storey Afrocentric luxury tower with world-class amenities',
      'Strong Resale and Rental Demand: Appeals to high-net-worth buyers and discerning tenants seeking exclusivity in Lekki Phase One',
      'Asset-Backed Investment: Tangible real estate in a high-value Lagos neighborhood with enduring demand',
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id || p.slug === id);
}

export function getAllProperties(): Property[] {
  return PROPERTIES;
}
