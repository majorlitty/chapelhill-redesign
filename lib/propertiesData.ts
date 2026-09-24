export interface GalleryImage {
  url: string;
  caption: string;
  category: 'exterior' | 'interior' | 'living' | 'bedroom' | 'kitchen' | 'amenity';
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
  status: 'completed' | 'ongoing';
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
    tagline: 'Turnkey Luxury Residential Community',
    location: 'Abijo GRA, Lekki-Epe Corridor, Lagos',
    status: 'completed',
    statusLabel: 'Completed • Ready for Immediate Handover',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
        caption: 'Architectural Contemporary Exterior Facade',
        category: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Sunlit Open-Concept Living Salon with High Ceilings',
        category: 'living',
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Chef-Inspired Fitted Kitchen with Quartz Countertops',
        category: 'kitchen',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Master Suite Sanctuary with Floor-to-Ceiling Wardrobes',
        category: 'bedroom',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
        caption: 'Spa-Grade Ensuite Bath with Rainfall Shower Fixtures',
        category: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        caption: 'Interlocking Paved Internal Drives and Private Entry Court',
        category: 'amenity',
      },
    ],
    description: 'A distinguished residential enclave offering immediate handover and turnkey contemporary living. Built with precision engineering, modern fixtures, and dedicated utilities in the tranquil master-planned Abijo GRA neighborhood.',
    extendedOverview: 'Ivy Homes Abijo GRA represents a rare completed real estate opportunity along the rapidly appreciating Lekki-Epe expressway corridor. Created for homeowners demanding instant physical occupancy and investors seeking immediate rental cash-flows, this boutique enclave comprises 13 meticulously finished apartments across 1-bedroom, 2-bedroom, and 3-bedroom configurations. Every residence incorporates acoustic thermal glazing, custom fitted kitchen millwork, independent metering, and dedicated estate infrastructure.',
    landSize: '1,200 sqm Private Gated Plot',
    totalUnits: '13 Turnkey Units',
    financials: {
      startingPrice: '₦38,000,000',
      priceRange: '₦38,000,000 – ₦95,000,000',
      projectedRentalYield: '14.5% – 18.2% Net Annual Yield',
      projectedShortLetAnnualGross: '₦8.5M – ₦14M per unit / annum (Occupancy ~75%)',
      capitalAppreciationForecast: '22% Annual Projected Capital Gain (Lekki-Epe Corridor Growth)',
      paymentStructure: 'Immediate Outright Purchase or 50% Commitment with 6-Month Structured Balance; Mortgage Financing Accepted',
      milestones: [
        {
          stage: 'Commitment & Contract',
          percentage: '30% - 50%',
          description: 'Reservation deposit and execution of Deed of Contract of Sale',
        },
        {
          stage: 'Interim Tranche (Optional)',
          percentage: '25%',
          description: 'Settled within 90 days of contract execution',
        },
        {
          stage: 'Physical Key Handover',
          percentage: 'Balance',
          description: 'Final allocation, deed of assignment execution, and immediate physical move-in',
        },
      ],
      titleStatus: "Governor's Consent & Registered Layout Survey (Unencumbered)",
      estimatedServiceCharge: '₦35,000 / month (Includes 24/7 security, estate power management, water filtration, waste collection)',
      handoverTimeline: 'Immediate Handover (100% Civil & MEP Completed)',
    },
    unitBreakdown: [
      {
        title: '1-Bedroom Executive Apartment',
        count: '8 Units',
        price: 'From ₦38,000,000',
        bedrooms: 1,
        bathrooms: 1.5,
        sizeSqM: '62 sqm',
        sizeSqFt: '667 sqft',
        description: 'Optimized high-yield floorplans ideal for young executives, expatriate consultants, short-stay hospitality hosting, or entry portfolio placement.',
        features: [
          'Ensuite Master Bedroom with built-in mirrored wardrobes',
          'Guest Powder Room off main salon',
          'Open-concept living room with direct natural light',
          'Integrated breakfast bar & fitted induction hub niche',
          'Independent prepaid electrical sub-meter',
        ],
      },
      {
        title: '2-Bedroom Dual Ensuite Apartment',
        count: '2 Units',
        price: 'From ₦65,000,000',
        bedrooms: 2,
        bathrooms: 2.5,
        sizeSqM: '110 sqm',
        sizeSqFt: '1,184 sqft',
        description: 'Spacious dual-ensuite layouts engineered for modern couples and corporate rentals, boasting open-concept chef kitchens and private balconies.',
        features: [
          'Both bedrooms feature full private ensuite baths',
          'Expansive private terrace with neighborhood green views',
          'Generous chef kitchen fitted with quartz tops and double sinks',
          'Dedicated laundry and utility closet',
          'Allocated covered parking bay',
        ],
      },
      {
        title: '3-Bedroom Prime Family Residence',
        count: '3 Units',
        price: 'From ₦95,000,000',
        bedrooms: 3,
        bathrooms: 3.5,
        sizeSqM: '165 sqm',
        sizeSqFt: '1,776 sqft',
        description: 'Expansive family residences featuring generous dual living salons, walk-in closets, bespoke millwork, and opulent master retreats.',
        features: [
          'Master sanctuary with dual vanity sinks and rainfall shower',
          'Generous dining salon accommodating 8-person banquet seating',
          'Walk-in pantry and exterior service balcony',
          'Two designated vehicle parking spaces',
          'Smart video intercom connected to security gatehouse',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Structural Framework & Envelope',
        items: [
          'Reinforced concrete post-and-beam frame engineered to Eurocode 2 standards',
          'Vibrated 9-inch solid sandcrete masonry with moisture-barrier damping',
          'Weather-resistant textured acrylic exterior facade coatings with anti-fungal treatment',
          'High-durability insulated corrugated steel deck roofing with internal concealed rainwater drainage',
        ],
      },
      {
        category: 'Mechanical, Electrical & Plumbing (MEP)',
        items: [
          'Dedicated 300kVA transformer dedicated strictly to the residential enclave',
          'Centralized industrial borehole with 5-stage reverse osmosis water treatment plant',
          'Underground PVC electrical ducting and low-loss armored cabling throughout',
          'Independent Schneider miniature circuit breakers and surge protection per apartment',
        ],
      },
      {
        category: 'Security, Access & Surveillance',
        items: [
          '24/7 manned access-controlled entry gate with motorized cantilever boom barrier',
          'Perimeter electric fencing integrated with infrared intrusion sensors',
          'Full perimeter and common area HD CCTV camera network with 30-day continuous recording',
          'Video entry phone systems linking each unit directly to the estate security office',
        ],
      },
      {
        category: 'Interior Fixtures, Joinery & Finishes',
        items: [
          '600mm x 600mm vitrified porcelain floor tiles in living salons and hallways',
          'Full-height moisture-resistant ceramic wall tiling in all ensuite bathrooms',
          'Solid engineered security core entry doors with biometric smart handle locks',
          'Matte black architectural sanitary ware, dual-flush water closets, and tempered glass screens',
        ],
      },
    ],
    keyHighlights: [
      '100% Completed turnkey delivery with immediate physical keys in hand',
      'Prime proximity to Green Springs School, Novare Mall (Shoprite), and Corona School',
      'High historical rental yields powered by the Lekki Free Trade Zone expansion',
      'Unencumbered Governor’s Consent legal title for clean inheritance or collateralization',
    ],
  },
  {
    id: 'ogudu-gra-project',
    slug: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    tagline: 'Architectural Trophy Penthouse Residence',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    status: 'ongoing',
    statusLabel: 'Currently Ongoing • Off-Plan Opportunity',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Sculptural Modernist Penthouse Architecture with Cantilevered Lounges',
        category: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
        caption: 'Wraparound Penthouse Sky Terrace with Panoramic Horizon Vistas',
        category: 'living',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Double-Height Living Salon with Floor-to-Ceiling Acoustic Glazing',
        category: 'living',
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
        caption: 'Palatial Master Penthouse Suite with Private Sun Deck Access',
        category: 'bedroom',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        caption: 'Custom Italian Marble Kitchen Island and Concealed Pantry',
        category: 'kitchen',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Private Elevator Landing Foyer with Custom Architectural Paneling',
        category: 'interior',
      },
    ],
    description: 'An elite private penthouse residence crowned at the pinnacle of Ogudu GRA. Engineered for supreme privacy, lavish entertainment, and seamless indoor-outdoor living with panoramic skyline views of Lagos.',
    extendedOverview: 'The Ogudu GRA Project is an uncompromising architectural achievement—a private, multi-level crown penthouse tailored for high-net-worth families, diaspora collectors, and institutional leaders. Positioned in the tranquil, established inner enclave of Ogudu GRA (just 12 minutes from Ikeja and 20 minutes from Victoria Island via the Third Mainland Bridge), this trophy residence fuses cantilevered concrete geometries with floor-to-ceiling thermal glazing, private elevator access, and multi-tier entertaining terraces.',
    landSize: 'Exclusive Top-Floor Air Rights & 4 Dedicated Staged Bays',
    totalUnits: 'Exclusive Single Penthouse Residence',
    financials: {
      startingPrice: '₦380,000,000',
      priceRange: '₦380,000,000 – ₦450,000,000',
      projectedRentalYield: '12.0% – 16.5% Net Annual Rental Yield',
      projectedShortLetAnnualGross: '₦28,000,000 – ₦36,000,000 (Prime VIP / Diplomatic Short-Stay Rate)',
      capitalAppreciationForecast: '28% Anticipated Capital Growth upon Structural Completion',
      paymentStructure: '30% Milestone Commitment, 40% Across Superstructure Phases, 30% on Final Key Commissioning',
      milestones: [
        {
          stage: 'Initial Commitment',
          percentage: '30%',
          description: 'Reservation, bespoke floorplan personalization review, and formal contract documentation',
        },
        {
          stage: 'Superstructure & Roofing',
          percentage: '25%',
          description: 'Completion of reinforced concrete frame, floor slabs, and penthouse roof decking',
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
      handoverTimeline: 'Q4 Handover (Currently in Advanced Milestone Construction)',
    },
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse Suite',
        count: '1 Trophy Unit',
        price: 'Guide: ₦380,000,000 – ₦450,000,000',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqM: '440 sqm',
        sizeSqFt: '4,736 sqft',
        description: 'A monument to modern scale: double-height great room, private sky lounge, formal dining room, wraparound sunset terrace, and custom private elevator arrival.',
        features: [
          'Direct keycard-controlled private elevator arrival straight into residence foyer',
          'Panoramic wraparound terrace with outdoor barbecue kitchen and sunset views',
          'Enormous 90 sqm Master Suite with dual walk-in dressing rooms and freestanding soaking tub',
          'Private executive home office / library overlooking double-height salon',
          'Custom Poggenpohl-style show kitchen with integrated Miele appliance suite',
        ],
      },
      {
        title: 'Ensuite Service Quarters (Maid’s Quarters)',
        count: '1 Suite',
        price: 'Included with Penthouse',
        bedrooms: 1,
        bathrooms: 1,
        sizeSqM: '24 sqm',
        sizeSqFt: '258 sqft',
        description: 'Dedicated auxiliary staff accommodation with independent access point and ensuite bathroom.',
        features: [
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
      'The premier high-density penthouse offering currently available on mainland Lagos',
      'Unrivaled central connectivity: 12 minutes to Ikeja CBD, 20 minutes to Victoria Island',
      'Significant early-stage off-plan pricing advantage prior to completed handover',
      'Unobstructed 270-degree horizon views spanning from mainland greenery to the lagoon',
    ],
  },
  {
    id: 'lekki-phase-1-project',
    slug: 'lekki-phase-1-project',
    name: 'Lekki Phase 1 Project',
    tagline: '18-Unit Masterpiece Development',
    location: 'Prime Lekki Phase 1, Island Hub, Lagos',
    status: 'ongoing',
    statusLabel: 'Currently Ongoing • High Capital Appreciation',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        caption: 'Striking 18-Unit Modern Facade with Cascading Balconies',
        category: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
        caption: 'Resort-Style Swimming Pool, Sundeck and Residents Wellness Lounge',
        category: 'amenity',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Private Rooftop Sky Deck with Panoramic Lekki Skyline Vistas',
        category: 'living',
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
        caption: 'Architectural Reception Salon with Custom Fluted Feature Walls',
        category: 'living',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Designer Open Kitchen with Island Bar and Quartz Worktops',
        category: 'kitchen',
      },
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Primary Suite Sanctuary with Tailored Built-In Storage',
        category: 'bedroom',
      },
    ],
    description: 'An 18-unit institutional-grade luxury residential development commanding a prime 866sqm parcel in Lekki Phase 1. Designed to set a benchmark in architectural elegance, spatial efficiency, and high rental yield.',
    extendedOverview: 'Commanding an enviable 866 square-meter parcel on one of Lekki Phase 1’s most coveted residential streets, this 18-unit luxury development represents an institutional-grade investment in Lagos’ most liquid real estate market. The project balances 2-bedroom and 3-bedroom luxury flats with two exclusive crown penthouses, supported by a resort swimming pool, modern fitness pavilion, fiber optic connectivity, dual backup diesel generators, and 24/7 concierge management.',
    landSize: '866 sqm Prime Commercial/Residential Parcel',
    totalUnits: '18 Ultra-Luxury Units',
    financials: {
      startingPrice: '₦145,000,000',
      priceRange: '₦145,000,000 – ₦285,000,000',
      projectedRentalYield: '18.0% – 24.5% Annual Return (Optimized for Luxury Short-Lets & Corporate Leases)',
      projectedShortLetAnnualGross: '₦18,000,000 – ₦32,000,000 per unit / annum (Lekki Phase 1 Prime Rates)',
      capitalAppreciationForecast: '32% Projected Capital Uplift from Off-Plan to Final Commissioning',
      paymentStructure: '30% Initial Downpayment, 50% Spread Across 4 Milestone Stages, 20% at Handover',
      milestones: [
        {
          stage: 'Initial Commitment',
          percentage: '30%',
          description: 'Reservation payment and allocation agreement documentation',
        },
        {
          stage: 'Ground & First Floor Slabs',
          percentage: '20%',
          description: 'Substructure piling, foundation, and lower level structural casting',
        },
        {
          stage: 'Full Superstructure & Penthouse Level',
          percentage: '20%',
          description: 'Casting of upper floors, penthouse patios, and structural roof',
        },
        {
          stage: 'Internal MEP & Plastering',
          percentage: '15%',
          description: 'Piping, conduits, central pool plumbing, and wall rendering',
        },
        {
          stage: 'Commissioning & Handover',
          percentage: '15%',
          description: 'Final architectural joinery, sanitary fittings, snagging, and deed handover',
        },
      ],
      titleStatus: "Lagos State Governor's Consent with Registered Survey & Planning Approval",
      estimatedServiceCharge: '₦50,000 / month (Includes pool maintenance, gym, standby power synchronization, round-the-clock security)',
      handoverTimeline: '14 Months to Completion (Active Phased Construction)',
    },
    unitBreakdown: [
      {
        title: 'Spacious 2-Bedroom Luxury Apartment',
        count: '8 Units',
        price: 'From ₦145,000,000',
        bedrooms: 2,
        bathrooms: 2.5,
        sizeSqM: '118 sqm',
        sizeSqFt: '1,270 sqft',
        description: 'Thoughtfully zoned residential suites with oversized windows, private breakfast balconies, and high-spec ensuite bedrooms ideal for expatriate leasing.',
        features: [
          'All ensuite bedrooms with bespoke imported wardrobes',
          'Private balcony accessible from main living lounge',
          'Fitted kitchen with gas burner, extractor hood, and oven',
          'Guest cloakroom / powder room in arrival corridor',
          'Dedicated covered parking space',
        ],
      },
      {
        title: 'Elegant 3-Bedroom Executive Apartment',
        count: '8 Units',
        price: 'From ₦195,000,000',
        bedrooms: 3,
        bathrooms: 3.5,
        sizeSqM: '172 sqm',
        sizeSqFt: '1,851 sqft',
        description: 'Expansive family and executive residences with floor-to-ceiling glass, chef preparation kitchens, walk-in closets, and attached utility areas.',
        features: [
          'All 3 bedrooms featuring dedicated private ensuite baths',
          'Generous master suite with walk-in wardrobe and soaking tub',
          'Separate laundry room and external utility drying alcove',
          'Two reserved parking bays per unit',
          'Smart automated door locks and touch-panel lighting switches',
        ],
      },
      {
        title: 'Exclusive 2-Bedroom Crown Penthouse',
        count: '2 Units',
        price: 'From ₦285,000,000',
        bedrooms: 2,
        bathrooms: 3,
        sizeSqM: '215 sqm',
        sizeSqFt: '2,314 sqft',
        description: 'Top-tier crown residences featuring expansive sky decks, outdoor barbecue lounges, and panoramic island views.',
        features: [
          'Immense 65 sqm private rooftop entertaining terrace with perimeter glass balustrades',
          'Outdoor barbecue lounge with wet bar plumbing and panoramic island views',
          'High ceilings with architectural coffered cove illumination',
          'Two dedicated covered ground-floor parking bays',
          'VIP direct priority elevator call feature',
        ],
      },
    ],
    architecturalSpecifications: [
      {
        category: 'Civil Engineering & Foundation',
        items: [
          'Engineered bored cast-in-situ concrete piles extending to solid load-bearing strata',
          'High-yield Grade 460 steel reinforcement tested with ultrasonic integrity checks',
          'Waterproofed basement raft slab with crystalline integral waterproofing additive',
        ],
      },
      {
        category: 'Community Amenities & Lifestyle Facilities',
        items: [
          'Ground-floor swimming pool with infinity edge, submerged loungers, and outdoor shower',
          'Air-conditioned fitness center equipped with commercial-grade Technogym machines',
          'Furnished resident executive lounge and remote-work concierge co-working area',
          'Dedicated management and facility engineering office on-site 24/7',
        ],
      },
      {
        category: 'Power, Water & Infrastructure',
        items: [
          'Dual synchronized soundproof diesel generator system providing zero-downtime electricity',
          'Dedicated distribution transformer and automatic transfer switch (ATS)',
          'High-capacity pressurized borehole with multi-stage sand, carbon, and UV purification',
          'Dedicated underground fiber optic backbone to all 18 apartments',
        ],
      },
      {
        category: 'Security & Access Protocols',
        items: [
          'High-definition motorized IP surveillance cameras across all public and vehicular zones',
          'Automated vehicle license plate recognition (LPR) and biometric pedestrian turnstiles',
          'Central fire alarm system with heat/smoke detectors and emergency sprinkler feeds',
        ],
      },
    ],
    keyHighlights: [
      'Unrivaled location in Lekki Phase 1—minutes from Admiralty Way, Ikoyi Link Bridge, and Victoria Island',
      'Exceptional projected 18% - 24% annual yield on short-let hospitality or long-term corporate leasing',
      'Flexible phased construction milestones mitigating capital commitment',
      'Full resort-style communal amenities maximizing tenant demand and lease premiums',
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id || p.slug === id);
}

export function getAllProperties(): Property[] {
  return PROPERTIES;
}
