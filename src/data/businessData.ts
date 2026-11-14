import { PropertyItem } from "../utils/propertyLogic";

export const OFFICE_IMAGE_URL =
  "/src/assets/images/andheri_west_office_1794653915462.jpg";

export const BUSINESS = {
  name: "Al-Barkat Estate Agents",
  shortName: "AL-BARKAT",
  category: "Real estate agent",
  tagline: "4.7 ★ (102 Reviews) · Real Estate Agent · Andheri West, Mumbai",
  eyebrow: "REAL ESTATE AGENT · ANDHERI WEST, MUMBAI · 4RHJ+6W",
  plusCode: "4RHJ+6W Mumbai, Maharashtra",
  leadAgent: "Mr. Mohammed Saud",
  address: {
    line1: "Apna Bazar Rd, Dhake Colony",
    line2: "Sahakar Nagar, Azad Nagar",
    area: "Andheri West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400053",
    fullAddress:
      "Apna Bazar Rd, Dhake Colony, Sahakar Nagar, Azad Nagar, Andheri West, Mumbai, Maharashtra 400053",
    googleMapsUrl:
      "https://maps.google.com/?q=Al-Barkat+Estate+Agents+Apna+Bazar+Rd+Dhake+Colony+Sahakar+Nagar+Azad+Nagar+Andheri+West+Mumbai+Maharashtra+400053",
  },
  phone: "+918369132945",
  displayPhone: "083691 32945",
  whatsappNumber: "918369132945",
  hours: "Open · Closes 7:30 PM",
  shortHours: "Open · Closes 7:30 pm",
  rating: {
    score: 4.7,
    count: 102,
    source: "Google Reviews",
  },
  reviewTags: [
    { label: "All", count: null },
    { label: "for sale", count: 22 },
    { label: "budget-friendly", count: 9 },
    { label: "beautiful house", count: 8 },
    { label: "quick response", count: 8 },
    { label: "flat finding", count: 5 },
    { label: "+6", count: null },
  ],
  reviewSummaryQuotes: [
    "Great service great experience with al-barkat team as my real estate advisor.",
    "Super helpful with all the work that comes along with moving into a new space.",
    "Your attention to detail in setting up my room was truly appreciated",
  ],
  serviceAreas: [
    "Azad Nagar & Apna Bazar Rd",
    "Dhake Colony & Sahakar Nagar",
    "Four Bungalows & Seven Bungalows",
    "Lokhandwala & Versova",
    "Andheri West Metro Corridor",
  ],
};

export const PROPERTIES: PropertyItem[] = [
  {
    id: "azad-nagar-apna-bazar",
    title: "Azad Nagar & Apna Bazar Flats",
    subTitle: "Al-Barkat Curated Inventory · Azad Nagar, Andheri West",
    typology: "1, 2 & 3 BHK Flats · For Sale",
    location: "Azad Nagar, Andheri West",
    area: "540 – 1,280 sq ft",
    year: "For Sale · Ready to Move",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief:
      "Well-located residential apartments right along Apna Bazar Rd and Azad Nagar Metro corridor in Andheri West. Selected for flat finding clients looking for budget-friendly homes and properties for sale with smooth owner coordination.",
    direction:
      "Mentioned in 22 reviews for sale & 9 reviews for budget-friendly options. Courteous negotiation and full move-in assistance led by Mr. Mohammed Saud.",
    materials: [
      "Apna Bazar Rd, Andheri West",
      "For Sale (22 Reviews)",
      "Budget-Friendly (9 Reviews)",
      "Ready & Under-Construction",
    ],
    keyFeatures: [
      "Walking distance from Azad Nagar Metro Station and Apna Bazar Rd",
      "Budget-friendly 1 & 2 BHK flats as well as spacious 3 BHK family homes",
      "Direct landlord and seller conversations handled courteously on your behalf",
      "Support with moving into a new space and setting up your room",
    ],
    rooms: [
      {
        name: "Budget-Friendly 1 BHK",
        description:
          "Efficiently planned 540 sq ft residence near Apna Bazar Rd, ideal for working professionals and couples seeking budget-friendly flat finding.",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        details: [
          "540 sq ft Carpet Area",
          "Budget-Friendly Options",
          "Near Azad Nagar Metro",
        ],
      },
      {
        name: "2 BHK Family Apartment",
        description:
          "Bright 820 sq ft home featuring airy living space, cross-ventilation, and immediate availability for sale or rent in Azad Nagar.",
        imageUrl:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        details: [
          "820 sq ft Carpet Area",
          "For Sale & Lease Options",
          "Quiet Residential Lane",
        ],
      },
      {
        name: "3 BHK Corner Residence",
        description:
          "Generous 1,280 sq ft layout with wide windows, dedicated dining zone, and verified building society amenities.",
        imageUrl:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        details: [
          "1,280 sq ft Carpet Area",
          "Prime Andheri West Belt",
          "Covered Parking Included",
        ],
      },
      {
        name: "Move-In Ready Interiors",
        description:
          "Thoughtfully furnished and semi-furnished options where our team assists with every detail of setting up your new space.",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        details: [
          "Room Setup Assistance",
          "Verified Society Approvals",
          "Smooth Possession Handover",
        ],
      },
    ],
    testimonial: {
      quote:
        "I have had a very pleasant experience with them. My house hunt was smooth. Saud was very courteous and pleasant in his conversations. I find that a rare quality in the real estate world. Highly recommend them.",
      client: "Victor Pillai",
      society: "Local Guide · 16 reviews · 239 photos",
    },
  },
  {
    id: "sahakar-nagar-studios",
    title: "Sahakar Nagar Studio & 1 BHKs",
    subTitle: "Al-Barkat Estate Agents · Sahakar Nagar, Andheri West",
    typology: "Studio Apartments & 1 BHK",
    location: "Sahakar Nagar, Andheri West",
    area: "380 – 650 sq ft",
    year: "Immediate Move-In",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
    brief:
      "Carefully vetted studio apartments and compact 1 BHK residences in Sahakar Nagar, tailored to your exact requirements with responsive, attentive service from Mr. Mohammed Saud.",
    direction:
      "Quick response (mentioned in 8 reviews) and attentive requirement matching for studio apartments, young professionals, and media creatives in Andheri West.",
    materials: [
      "Sahakar Nagar, 400053",
      "Studio Apartments",
      "Quick Response (8 Reviews)",
      "Move-In Assistance",
    ],
    keyFeatures: [
      "Handpicked studio apartments in well-maintained Sahakar Nagar societies",
      "Attentive requirement screening so you only tour properties that fit",
      "Helpful guidance with moving-in logistics and room setup",
      "Close to DN Nagar, Link Road, and Andheri West commercial hubs",
    ],
    rooms: [
      {
        name: "Executive Studio Apartment",
        description:
          "Smartly laid out 380 sq ft studio apartment with natural light, modern kitchenette, and zero wasted corridors.",
        imageUrl:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        details: [
          "380 sq ft Carpet Area",
          "Ready Furnished / Unfurnished",
          "Sahakar Nagar Core",
        ],
      },
      {
        name: "Spacious 1 BHK Loft",
        description:
          "650 sq ft bright 1 BHK suite with separate bedroom privacy and well-ventilated living room.",
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        details: [
          "650 sq ft Carpet Area",
          "Quick Move-In Ready",
          "24/7 Security & Water",
        ],
      },
      {
        name: "Furnished Setup Lounge",
        description:
          "Move-in ready residences where the Al-Barkat team helps coordinate every detail from agreements to setting up your room.",
        imageUrl:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        details: [
          "Attention to Detail",
          "Transparent Terms",
          "Responsive Follow-Up",
        ],
      },
    ],
    testimonial: {
      quote:
        "I had an excellent experience working with my estate agent Mr Mohammed Saud while searching for a studio apartment. From the very beginning, they were professional, responsive, and genuinely attentive to my requirements.",
      client: "Shalini Bhaumik",
      society: "4 reviews · 5 months ago",
    },
  },
  {
    id: "dhake-colony-beautiful-houses",
    title: "Dhake Colony Beautiful Houses",
    subTitle: "Al-Barkat Curated Homes · Dhake Colony, Andheri West",
    typology: "2, 3 & 4 BHK Beautiful Houses",
    location: "Dhake Colony, Andheri West",
    area: "980 – 1,950 sq ft",
    year: "For Sale · Prime Residential",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief:
      "Beautiful houses and upscale family apartments tucked inside tree-lined Dhake Colony right off Apna Bazar Rd. Mentioned in 8 client reviews for beautiful house options and 22 reviews for properties for sale.",
    direction:
      "For sale & resale specialist listings in Dhake Colony with clear society paperwork, transparent negotiations, and courteous landlord & owner liaison.",
    materials: [
      "Dhake Colony, 400053",
      "Beautiful House (8 Reviews)",
      "For Sale (22 Reviews)",
      "Family Societies",
    ],
    keyFeatures: [
      "Peaceful, tree-shaded lanes in Dhake Colony steps away from Apna Bazar Rd",
      "Curated beautiful houses and spacious 3 & 4 BHK residences for sale",
      "Dedicated owner and landlord advocacy on your behalf",
      "Complete paperwork and society NOC coordination",
    ],
    rooms: [
      {
        name: "3 BHK Garden-Facing Home",
        description:
          "Well-proportioned 1,350 sq ft apartment overlooking mature greenery in Dhake Colony, crafted for multi-generational families.",
        imageUrl:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        details: [
          "1,350 sq ft Carpet Area",
          "Beautiful House Collection",
          "Peaceful Society Lane",
        ],
      },
      {
        name: "4 BHK Signature Residence",
        description:
          "Expansive 1,950 sq ft family house featuring dual living zones, wide balconies, and dedicated parking.",
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        details: [
          "1,950 sq ft Carpet Area",
          "For Sale · Freehold Title",
          "Prime Dhake Colony",
        ],
      },
      {
        name: "Boutique 2 BHK Suite",
        description:
          "980 sq ft bright residence with modern kitchen layout and effortless access to schools, markets, and metro.",
        imageUrl:
          "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
        details: [
          "980 sq ft Carpet Area",
          "Ready for Possession",
          "Vastu-Friendly Orientation",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service great experience with al-barkat team as my real estate advisor.",
      client: "Verified Google Review Summary",
      society: "Dhake Colony & Andheri West",
    },
  },
  {
    id: "four-bungalows-versova",
    title: "Four Bungalows & Versova Belt",
    subTitle: "Al-Barkat Estate Agents · Andheri West",
    typology: "2, 3 & 4 BHK Residences",
    location: "Four Bungalows & Versova, Mumbai",
    area: "900 – 1,800 sq ft",
    year: "For Sale & Lease",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
    brief:
      "Excellent residential properties across Four Bungalows, Seven Bungalows, and Versova with Mr. Mohammed Saud personally speaking on your behalf to landlords and property owners.",
    direction:
      "Combined sales and rental advisory across prime coastal and metro-connected Andheri West pockets with quick response and smooth coordination.",
    materials: [
      "Andheri West Prime",
      "Landlord Advocacy",
      "Flat Finding (5 Reviews)",
      "For Sale & Rent",
    ],
    keyFeatures: [
      "Curated inventory across Four Bungalows, Seven Bungalows & Versova",
      "Professional representation speaking directly with landlords on your behalf",
      "Quick-response viewing schedules open daily until 7:30 PM",
      "End-to-end support from flat finding to moving into your new space",
    ],
    rooms: [
      {
        name: "2 BHK Coastal Breeze Flat",
        description:
          "900 sq ft airy residence minutes from Versova Metro and coastal promenades, vetted for both lease and purchase.",
        imageUrl:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        details: [
          "900 sq ft Carpet Area",
          "Bright Natural Light",
          "Versova & Metro Access",
        ],
      },
      {
        name: "3 BHK Contemporary Residence",
        description:
          "1,380 sq ft modern apartment with spacious living salon, balcony deck, and full society amenities.",
        imageUrl:
          "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        details: [
          "1,380 sq ft Carpet Area",
          "For Sale · Verified Clear Title",
          "Family-Friendly Complex",
        ],
      },
      {
        name: "4 BHK Executive House",
        description:
          "1,800 sq ft signature home combining coastal tranquility with immediate access to Lokhandwala & Link Road.",
        imageUrl:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        details: [
          "1,800 sq ft Carpet Area",
          "Dual Parking Bays",
          "High-Demand Micro-Market",
        ],
      },
    ],
    testimonial: {
      quote:
        "Saud is a very professional agent. Not only did he show excellent properties, he also was kind enough to speak on our behalf to landlords. Always going to recommend him!",
      client: "Roshni Banerjee",
      society: "Local Guide · 9 reviews · 1 photo",
    },
  },
];

export const SERVICES = [
  {
    id: "flat-finding-house-hunt",
    number: "01",
    title: "Flat Finding & Smooth House Hunts",
    tagline: "My house hunt was smooth — courteous, pleasant guidance from day one.",
    summary:
      "Searching for the right apartment in Andheri West can feel overwhelming. Al-Barkat Estate Agents listens carefully to your exact space, commute, and lifestyle requirements so every viewing feels purposeful and stress-free.",
    deliverables: [
      "Tailored shortlisting for studio apartments, 1, 2 & 3 BHK flats",
      "Curated tours across Azad Nagar, Sahakar Nagar & Dhake Colony",
      "Honest walkthroughs highlighting natural light, layout & neighborhood",
      "Courteous, transparent communication at every step",
    ],
    specs: [
      { label: "Client Rating", value: "4.7 ★ across 102 Google Reviews" },
      { label: "Lead Advisor", value: "Mr. Mohammed Saud & Al-Barkat Team" },
      { label: "Core Focus", value: "Andheri West Residential Advisory" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "for-sale-and-budget",
    number: "02",
    title: "Properties For Sale & Budget Options",
    tagline: "Mentioned in 22 reviews for sale & 9 reviews for budget-friendly homes.",
    summary:
      "Whether you are purchasing your family home or seeking a budget-friendly flat in Andheri West, we match genuine properties for sale and lease to your financial comfort without hidden surprises.",
    deliverables: [
      "Verified residential flats and beautiful houses for sale",
      "Budget-friendly apartment options tailored to your price bracket",
      "Clear comparison of carpet area, society charges & locality value",
      "Direct seller coordination for fair, transparent pricing",
    ],
    specs: [
      { label: "For Sale", value: "Mentioned in 22 Verified Reviews" },
      { label: "Budget-Friendly", value: "Mentioned in 9 Verified Reviews" },
      { label: "Beautiful Houses", value: "Mentioned in 8 Verified Reviews" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "move-in-and-room-setup",
    number: "03",
    title: "Move-In Support & Room Setup Care",
    tagline: "Super helpful with all the work that comes along with moving into a new space.",
    summary:
      "Our responsibility does not end when you choose a property. Clients appreciate our hands-on help with everything that accompanies moving into a new space — including attention to detail in setting up your room.",
    deliverables: [
      "Super helpful coordination for all moving-in formalities",
      "Attention to detail in setting up your room and living space",
      "Society onboarding, utility checks, and handover coordination",
      "Prompt follow-up after you settle into your new home",
    ],
    specs: [
      { label: "Move-In Care", value: "End-to-End Transition Support" },
      { label: "Room Setup", value: "Personal Attention to Detail" },
      { label: "Visiting Hours", value: "Open · Closes 7:30 PM" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "landlord-advocacy",
    number: "04",
    title: "Landlord & Owner Coordination",
    tagline: "Kind enough to speak on our behalf to landlords with complete professionalism.",
    summary:
      "From rent terms and deposit clarity to society interviews and agreement paperwork, Mr. Mohammed Saud represents your interests courteously with landlords and property owners so negotiations stay respectful and smooth.",
    deliverables: [
      "Direct, courteous conversations with landlords on your behalf",
      "Clear rent, deposit, and sale agreement coordination",
      "Studio apartment & family flat tenant-landlord alignment",
      "Smooth registration and handover documentation",
    ],
    specs: [
      { label: "Advocacy", value: "Speaks on Your Behalf to Landlords" },
      { label: "Communication", value: "Courteous & Pleasant Conversations" },
      { label: "Phone Desk", value: "083691 32945" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "quick-response-andheri-west",
    number: "05",
    title: "Quick-Response Local Intelligence",
    tagline: "Quick response (8 reviews) across Apna Bazar Rd, Azad Nagar & Andheri West.",
    summary:
      "Based at Apna Bazar Rd, Dhake Colony, Sahakar Nagar, Azad Nagar, Andheri West, Mumbai 400053, our team responds quickly with verified listings and real neighborhood context across Western Suburbs.",
    deliverables: [
      "Fast turnaround on inquiries via 083691 32945 and WhatsApp",
      "On-ground familiarity with Azad Nagar, Dhake Colony & Sahakar Nagar",
      "Same-day scheduled viewings open until 7:30 PM",
      "Guidance on metro proximity, schools, markets & society culture",
    ],
    specs: [
      { label: "Response Speed", value: "Quick Response (8 Review Mentions)" },
      { label: "Office Plus Code", value: "4RHJ+6W Mumbai, Maharashtra" },
      { label: "Pin Code", value: "Andheri West, Mumbai 400053" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  },
];

export const MICRO_MARKETS = [
  {
    id: "azad-nagar",
    category: "ANDHERI WEST CORE",
    label: "Azad Nagar & Apna Bazar Rd",
    sublabel: "Apna Bazar Rd · Azad Nagar Metro · 400053",
    headline:
      "Our home base offering unmatched connectivity, daily conveniences, and verified flats.",
    description:
      "Anchored around Apna Bazar Rd and Azad Nagar Metro Station, this vibrant pocket combines quiet residential lanes with instant transit access, markets, schools, and budget-friendly apartments.",
    imageUrl:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "Direct access to Azad Nagar Metro Station",
      "Home to Al-Barkat Estate Agents Office (400053)",
      "Strong mix of 1, 2 & 3 BHK flats for sale & rent",
      "Budget-friendly & family-friendly cooperative societies",
    ],
    tactileFeel:
      "Lively neighborhood convenience with peaceful interior residential lanes",
    recommendedUse:
      "Studio apartments, budget-friendly flats & family homes for sale",
    studioGuarantee: "4.7 ★ Rated Local Specialist · 083691 32945",
  },
  {
    id: "dhake-colony",
    category: "ANDHERI WEST",
    label: "Dhake Colony",
    sublabel: "Dhake Colony · Off Apna Bazar Rd · Quiet Lanes",
    headline:
      "Tree-lined residential enclave prized for beautiful houses and calm family living.",
    description:
      "Dhake Colony sits right adjacent to Apna Bazar Rd and offers peaceful residential streets, established housing societies, and spacious family apartments within minutes of Link Road.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "Serene, walkable neighborhood streets",
      "Beautiful houses & spacious 2, 3 & 4 BHK flats",
      "Steps from Apna Bazar Rd & Sahakar Nagar",
      "High owner-occupier stability and strong resale value",
    ],
    tactileFeel:
      "Established community warmth with lush roadside greenery",
    recommendedUse: "Beautiful family houses & long-term residential purchases",
    studioGuarantee: "Curated For Sale & Lease Options · Al-Barkat Team",
  },
  {
    id: "sahakar-nagar",
    category: "ANDHERI WEST",
    label: "Sahakar Nagar",
    sublabel: "Sahakar Nagar · Azad Nagar · Central Andheri West",
    headline:
      "Sought-after residential hub ideal for studio apartments and convenient city living.",
    description:
      "Sahakar Nagar bridges residential comfort with effortless access to commercial offices, studios, and dining across Andheri West, making it a top pick for professionals and families alike.",
    imageUrl:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "Studio apartments & smart 1–2 BHK configurations",
      "Minutes from DN Nagar & Azad Nagar Metro hubs",
      "Well-kept cooperative societies & reliable utilities",
      "Smooth landlord & society onboarding support",
    ],
    tactileFeel:
      "Balanced urban accessibility with attentive neighborhood living",
    recommendedUse: "Studio apartments, 1 & 2 BHK flats with quick move-in",
    studioGuarantee: "Attentive Requirement Matching · Mr. Mohammed Saud",
  },
  {
    id: "four-bungalows",
    category: "ANDHERI WEST",
    label: "Four Bungalows & Seven Bungalows",
    sublabel: "Four Bungalows · Seven Bungalows · Link Road",
    headline:
      "Classic Andheri West residential pockets balancing upscale homes and coastal air.",
    description:
      "Renowned for vibrant cafes, media studios, and established apartment complexes, Four Bungalows and Seven Bungalows remain evergreen choices for homebuyers and tenants.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "2, 3 & 4 BHK residences in prime societies",
      "Proximity to Versova Beach & Kokilaben Hospital",
      "Active rental & resale liquidity year-round",
      "Direct landlord negotiations handled by Al-Barkat",
    ],
    tactileFeel:
      "Vibrant cultural energy with established residential comfort",
    recommendedUse: "Upgrading families, executives & media professionals",
    studioGuarantee: "Quick-Response Tours · Open until 7:30 PM",
  },
  {
    id: "lokhandwala",
    category: "ANDHERI WEST",
    label: "Lokhandwala Complex",
    sublabel: "Lokhandwala Back Road · Market · High-Rise Towers",
    headline:
      "Cosmopolitan high-rise living with renowned shopping, dining, and modern amenities.",
    description:
      "Lokhandwala offers contemporary multi-tower complexes, lifestyle conveniences, and strong capital appreciation for buyers looking for amenity-rich homes in Andheri West.",
    imageUrl:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "Modern high-rise towers & gated residential complexes",
      "Vibrant Lokhandwala Market & dining avenues",
      "Strong rental demand & resale liquidity",
      "1, 2, 3 & 4 BHK options across budgets",
    ],
    tactileFeel:
      "Cosmopolitan convenience with energetic neighborhood life",
    recommendedUse: "Modern apartments for sale and executive rentals",
    studioGuarantee: "Courteous Advisory · Al-Barkat Estate Agents",
  },
  {
    id: "versova",
    category: "COASTAL ANDHERI WEST",
    label: "Versova & Yari Road",
    sublabel: "Versova Metro · Yari Road · Coastal Promenade",
    headline:
      "Breezy coastal neighborhoods offering serene views and charming residential flats.",
    description:
      "Framed by Versova's coastline and terminal metro station, Yari Road and Versova offer serene sea-breeze living popular among creatives, families, and long-term homeowners.",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    finishes: [
      "Terminal Versova Metro connectivity",
      "Sea-facing & breezy residential apartments",
      "Cozy studio flats & spacious family residences",
      "Personalized flat finding & move-in assistance",
    ],
    tactileFeel:
      "Relaxed coastal charm connected directly to Mumbai Metro",
    recommendedUse: "Coastal apartments, studios & beautiful houses for sale",
    studioGuarantee: "102 Client Reviews · 4.7 ★ Average Rating",
  },
];

export interface ClientReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  society: string;
  location: string;
  scope: string;
  rating: number;
  highlight: string;
  timeAgo: string;
  ownerResponse?: string;
  ownerResponseTime?: string;
  tags?: string[];
}

export const REVIEWS: ClientReview[] = [
  {
    id: "review-victor",
    quote:
      "I have had a very pleasant experience with them. My house hunt was smooth. Saud was very courteous and pleasant in his conversations. I find that a rare quality in the real estate world. Highly recommend them.",
    author: "Victor Pillai",
    role: "Local Guide · 16 reviews · 239 photos",
    society: "Al-Barkat Estate Agents, Andheri West",
    location: "2 weeks ago · New",
    scope: "Smooth House Hunt · Courteous Guidance",
    rating: 5,
    highlight: "My house hunt was smooth. Saud was very courteous and pleasant.",
    timeAgo: "2 weeks ago · New",
    ownerResponse: "Thank you for your kind words 🙌😊 …",
    ownerResponseTime: "Response from the owner · 2 weeks ago",
    tags: ["beautiful house", "flat finding"],
  },
  {
    id: "review-shalini",
    quote:
      "I had an excellent experience working with my estate agent Mr Mohammed Saud while searching for a studio apartment. From the very beginning, they were professional, responsive, and genuinely attentive to my requirements.",
    author: "Shalini Bhaumik",
    role: "4 reviews",
    society: "Studio Apartment Search, Andheri West",
    location: "5 months ago",
    scope: "Studio Apartment · Quick Response",
    rating: 5,
    highlight: "Professional, responsive, and genuinely attentive to my requirements.",
    timeAgo: "5 months ago",
    ownerResponse: "Thank you for your kind word, 😌 …",
    ownerResponseTime: "Response from the owner · 5 months ago",
    tags: ["quick response", "budget-friendly"],
  },
  {
    id: "review-roshni",
    quote:
      "Saud is a very professional agent. Not only did he show excellent properties, he also was kind enough to speak on our behalf to landlords. Always going to recommend him!",
    author: "Roshni Banerjee",
    role: "Local Guide · 9 reviews · 1 photo",
    society: "Landlord Coordination, Andheri West",
    location: "a week ago · New",
    scope: "Excellent Properties · Landlord Advocacy",
    rating: 5,
    highlight: "Kind enough to speak on our behalf to landlords.",
    timeAgo: "a week ago · New",
    ownerResponse: "Looking forward to serve you soon in future 🌟 …",
    ownerResponseTime: "Response from the owner · a week ago",
    tags: ["for sale", "quick response"],
  },
  {
    id: "review-summary",
    quote:
      "Great service great experience with al-barkat team as my real estate advisor. Super helpful with all the work that comes along with moving into a new space. Your attention to detail in setting up my room was truly appreciated.",
    author: "Verified Google Review Summary",
    role: "4.7 ★ · 102 Google Reviews",
    society: "Apna Bazar Rd, Azad Nagar, Andheri West",
    location: "Mumbai 400053",
    scope: "Move-In Support · Room Setup · Real Estate Advisor",
    rating: 4.7,
    highlight: "Super helpful with moving into a new space & setting up my room.",
    timeAgo: "102 Verified Reviews",
    tags: ["for sale", "budget-friendly", "beautiful house", "flat finding"],
  },
];
