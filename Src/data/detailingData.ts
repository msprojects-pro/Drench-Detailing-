import { ServiceItem, PackageItem, GalleryItem, Testimonial, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Drench Detailing',
  tagline: 'Mobile Detailing Service',
  phone: '07473 278146',
  phoneFormatted: '07473 278146',
  whatsappNumber: '447473278146',
  email: 'drenchdetailing@gmail.com',
  location: 'Knutsford / Cheshire & Northwest UK',
  areasCovered: [
    'Knutsford', 'Wilmslow', 'Alderley Edge', 'Hale', 'Altrincham', 
    'Bowdon', 'Macclesfield', 'Prestbury', 'Tarporley', 'Chester', 
    'Warrington', 'Stockport', 'South Manchester', 'Cheshire East', 'Cheshire West'
  ],
  heroImage: '/images/hero.jpg',
  vanImage: '/images/van.jpg',
  ceramicImage: '/images/ceramic.jpg',
  paintCorrectionImage: '/images/paint_correction.jpg',
  interiorImage: '/images/interior.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-detailing',
    title: 'Mobile Detailing & Valeting',
    shortDesc: 'Complete mobile detailing right at your doorstep with our fully self-contained van.',
    fullDesc: 'We bring the ultimate vehicle detailing setup straight to your driveway or workplace. Our van features onboard purified spot-free water filtration and ultra-quiet power generation so you do not even need to supply a hose or socket.',
    iconName: 'Truck',
    duration: '2 - 4 Hours',
    recommendedFor: 'Regular car care & pristine maintenance',
    startingPrice: '£80',
    features: [
      '100% Self-contained mobile unit (Water & Power)',
      'Multi-stage safe wash using warm snow foam',
      'Wheel arches, barrels & calipers deep cleaned',
      'Ultra-soft plush microfibre drying',
      'Tyre dressing & exterior trim restoration'
    ],
    image: BUSINESS_INFO.vanImage,
    isPopular: true
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction & Polish',
    shortDesc: 'Eliminate swirl marks, light scratches, holograms and oxidation for a flawless mirror shine.',
    fullDesc: 'Using dual-action machine polishers, digital paint depth gauges, and precision compounding pastes, we safely level micro-imperfections in your paint clear coat to reveal intense depth, clarity, and gloss.',
    iconName: 'Sparkles',
    duration: '1 - 2 Days',
    recommendedFor: 'Vehicles with swirl marks, dull paint or before ceramic protection',
    startingPrice: '£250',
    features: [
      'Single or Multi-stage machine polishing',
      'Removes 70% to 95%+ of surface swirls & defects',
      'Restores factory clarity and deep reflection',
      'Full paint decontamination (Tar & Iron fallout removal)',
      'Paint depth readings taken on all panels'
    ],
    image: BUSINESS_INFO.paintCorrectionImage,
    isPopular: true
  },
  {
    id: 'ceramic-coating',
    title: 'Paint Protection & Ceramic Coating',
    shortDesc: 'Long-lasting hydrophobic shield protecting paintwork from UV rays, bird droppings and salt.',
    fullDesc: 'We apply professional-grade ceramic and graphene coatings that molecularly bond with your vehicle clear coat. Delivers intense water beading, extreme chemical resistance, and makes future cleaning effortless.',
    iconName: 'ShieldCheck',
    duration: '1 - 2 Days',
    recommendedFor: 'New cars, supercar owners, and drivers wanting 2-5+ years of paint protection',
    startingPrice: '£350',
    features: [
      '2 to 5 Year Ceramic or Graphene Coating options',
      'Extreme hydrophobic water beading & self-cleaning effect',
      'Shields against UV fading, road salt, chemical etching & bird strike',
      'Includes single-stage gloss enhancement polish',
      'Wheels & exterior glass ceramic protection available'
    ],
    image: BUSINESS_INFO.ceramicImage,
    isPopular: true
  },
  {
    id: 'deep-interior',
    title: 'Interior Deep Clean & Valeting',
    shortDesc: 'Deep hygienic extraction, leather nourishment and thorough steam sanitisation.',
    fullDesc: 'Revitalise your cabin space with our meticulous interior detailing. We deep clean all carpets, floor mats, leather upholstery, dash buttons, and vents to eradicate dust, grime, stains and unpleasant odours.',
    iconName: 'Car',
    duration: '2 - 3.5 Hours',
    recommendedFor: 'Restoring tired cabin interiors, pre-sale preparation & family vehicles',
    startingPrice: '£90',
    features: [
      'Deep carpet & fabric upholstery hot water extraction',
      'Gentle leather scrubbing, conditioning & UV feed',
      'Steam sanitisation of vents, seat rails & controls',
      'Streak-free interior glass polishing',
      'Ozone deodorising & anti-bacterial cabin treatment'
    ],
    image: BUSINESS_INFO.interiorImage
  },
  {
    id: 'exterior-polish',
    title: 'Exterior Decontamination & Polish',
    shortDesc: 'Full clay bar treatment, iron fallout removal and high-gloss gloss seal protection.',
    fullDesc: 'Perfect for removing embedded road tar, brake dust particles, and tree sap from smooth clear coat surfaces before finishing with a high-durability synthetic gloss sealant.',
    iconName: 'Sun',
    duration: '2.5 - 3.5 Hours',
    recommendedFor: 'Vehicles needing smooth surface feel & brilliant seasonal shine',
    startingPrice: '£120',
    features: [
      'Iron fallout chemical dissolving',
      'Tar spot removal across lower sills & doors',
      'Clay bar smooth finish decontamination',
      'High gloss paint sealant application (6 months protection)',
      'Exhaust tip polishing & plastic trim coating'
    ],
    image: BUSINESS_INFO.heroImage
  },
  {
    id: 'full-transformation',
    title: 'Full Vehicle Transformation',
    shortDesc: 'The ultimate top-to-bottom detail combining multi-stage paint correction, ceramic protection & interior overhaul.',
    fullDesc: 'Our flagship package designed for discerning enthusiasts. No corner is left untouched, transforming your vehicle back to show-room condition or better inside and out.',
    iconName: 'Crown',
    duration: '2 Days',
    recommendedFor: 'Prestige, supercar, classic and enthusiast vehicles',
    startingPrice: '£550',
    features: [
      'Full interior deep extraction & leather ceramic feeder',
      'Multi-stage machine paint correction',
      '3-Year Ceramic Coating on paintwork',
      'Wheel arches & caliper detailed',
      'Engine bay detailed & dressed',
      'Full hydrophobic glass sealant'
    ],
    image: BUSINESS_INFO.heroImage
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'maintenance-valet',
    name: 'Essential Maintenance Detail',
    tagline: 'Safe multi-stage wash & interior freshen up for regular maintenance.',
    price: 'From £80',
    estTime: '2 - 2.5 Hours',
    idealFor: 'Weekly or monthly upkeep for prestige vehicles',
    features: [
      'pH-neutral snow foam pre-wash',
      '2-bucket method safe hand wash',
      'Wheel face & barrel deep cleaning',
      'Non-scratch plush microfibre blow/towel dry',
      'Interior vacuum (carpets, seats, boot)',
      'Dashboard & console wiped clean',
      'Glass cleaned inside & out',
      'Satin tyre dressing applied'
    ]
  },
  {
    id: 'deep-clean-valet',
    name: 'Deep Clean & Enhancement',
    tagline: 'Comprehensive interior & exterior overhaul removing stubborn grime and gloss booster.',
    price: 'From £160',
    estTime: '3.5 - 4.5 Hours',
    popular: true,
    idealFor: 'Seasonal deep clean, new car purchase or pre-sale preparation',
    features: [
      'Includes everything in Essential Maintenance Detail',
      'Iron fallout & tar spot chemical decontamination',
      'Fabric seats / carpets hot extraction wash',
      'Leather seats deep scrubbed & conditioned',
      'Steam cleaning of air vents & buttons',
      'Single layer liquid paint sealant applied (6 mo protection)',
      'Engine bay light detail & dressing',
      'Exhaust tips hand polished'
    ]
  },
  {
    id: 'paint-correction-package',
    name: 'Paint Correction & Gloss Revival',
    tagline: 'Single or twin stage machine polishing to eliminate swirls and oxidation.',
    price: 'From £290',
    estTime: '1 - 1.5 Days',
    idealFor: 'Restoring gloss to swirled, scratched or faded paintwork',
    features: [
      'Full exterior chemical & mechanical decontamination (Clay Bar)',
      'Paint depth gauge analysis across all metal/plastic panels',
      'Single-stage machine gloss enhancement or 2-stage correction',
      'Eliminates 75% - 90% swirl marks & wash scratches',
      'IPA wipe down to ensure true paint finish',
      '12-Month ceramic wax or sealant protection included',
      'Full exterior glass hydrophobic sealant'
    ]
  },
  {
    id: 'ceramic-protection-package',
    name: 'Ultimate Ceramic Shield',
    tagline: 'High-grade 3 to 5 Year Ceramic Coating for the ultimate hydrophobic protection.',
    price: 'From £420',
    estTime: '1.5 - 2 Days',
    idealFor: 'Maximum long-term protection, high-end cars & easy maintenance',
    features: [
      'Includes full paint decontamination & clay bar',
      'Stage 1 Paint Correction to perfect paintwork',
      'Application of 3-Year or 5-Year Professional Ceramic Coating',
      'Wheel face ceramic coating',
      'Glass ceramic coating (rain repellent)',
      'Complimentary maintenance care kit & advice guide',
      'Certificate of Ceramic Application'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Porsche 911 GT3 RS Ceramic Coating',
    category: 'ceramic',
    vehicle: 'Porsche 911 GT3 RS',
    location: 'Alderley Edge, Cheshire',
    image: BUSINESS_INFO.ceramicImage,
    description: '3-Year Graphene Ceramic Coating applied following a single stage gloss correction polish. Water beading angle > 115°.'
  },
  {
    id: 'gallery-2',
    title: 'Range Rover Sport Paint Correction',
    category: 'paint-correction',
    vehicle: 'Range Rover Sport SVR',
    location: 'Knutsford, Cheshire',
    image: BUSINESS_INFO.paintCorrectionImage,
    description: '2-Stage Machine Polish removing heavy swirl marks from black sapphire metallic paintwork to restore mirror depth.'
  },
  {
    id: 'gallery-3',
    title: 'BMW M3 Competition Mobile Deep Detail',
    category: 'full-detail',
    vehicle: 'BMW M3 Competition',
    location: 'Hale, Cheshire',
    image: BUSINESS_INFO.heroImage,
    description: 'Full interior deep extraction, leather matte feeder treatment and exterior decontamination detail.'
  },
  {
    id: 'gallery-4',
    title: 'Bentley Continental GT Cabin Detail',
    category: 'interior',
    vehicle: 'Bentley Continental GT',
    location: 'Wilmslow, Cheshire',
    image: BUSINESS_INFO.interiorImage,
    description: 'Delicate hand cleaning of cream quilted leather, wood veneer restoration and Swissvax feeding.'
  },
  {
    id: 'gallery-5',
    title: 'Mobile Unit Setup on Location',
    category: 'valeting',
    vehicle: 'Custom Mobile Unit',
    location: 'Bowdon, Greater Manchester',
    image: BUSINESS_INFO.vanImage,
    description: 'Our self-contained van delivering purified spot-free water and whisper power at a private estate.'
  },
  {
    id: 'gallery-6',
    title: 'Audi RS6 Avant Full Transformation',
    category: 'full-detail',
    vehicle: 'Audi RS6 Avant',
    location: 'Macclesfield, Cheshire',
    image: BUSINESS_INFO.ceramicImage,
    description: 'Full vehicle transformation including multi-stage correction, 5-year ceramic shield and wheel off coat.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'James Harrington',
    location: 'Alderley Edge',
    vehicle: 'Porsche Taycan Cross Turismo',
    rating: 5,
    comment: 'Drench Detailing did an incredible job on my Taycan. The ceramic coating makes the black paint look like liquid glass, and water just flies off when driving in Cheshire rain. Arrived bang on time with their own water & power van. Top tier service!',
    date: '12 July 2026',
    service: 'Ultimate Ceramic Shield'
  },
  {
    id: 'rev-2',
    name: 'Sarah Radcliffe',
    location: 'Knutsford',
    vehicle: 'Range Rover Velar',
    rating: 5,
    comment: 'Having kids and dogs meant my interior was looking tired. Drench transformed it completely — carpets extracted, leather scrubbed back to its original soft matte finish, and no chemical smell. Will definitely be setting up a monthly maintenance valet!',
    date: '28 June 2026',
    service: 'Interior Deep Clean'
  },
  {
    id: 'rev-3',
    name: 'Mark W. Stewart',
    location: 'Hale Barns',
    vehicle: 'Aston Martin Vantage',
    rating: 5,
    comment: 'I am extremely fussy about who touches my cars. The attention to detail shown during the paint correction process was outstanding. All swirl marks from previous hand washes are gone. 100% recommended for any luxury car owner in the Northwest.',
    date: '04 June 2026',
    service: 'Paint Correction & Polish'
  },
  {
    id: 'rev-4',
    name: 'David & Helen Vance',
    location: 'Wilmslow',
    vehicle: 'BMW M5 CS & Audi Q8',
    rating: 5,
    comment: 'Booked a double vehicle detail on our driveway in Wilmslow. The convenience of having Drench come to the house with their fully equipped van is unbeatable. Friendly, professional, and immaculate results!',
    date: '19 May 2026',
    service: 'Deep Clean & Enhancement'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'Do you need access to electricity or a garden tap at my property?',
    answer: 'No! Our mobile detailing van is 100% self-contained. We carry our own 500L onboard tank of spot-free reverse-osmosis purified water and an ultra-quiet power generator. We can detail your car at your home, office, or apartment driveway anywhere in Cheshire.'
  },
  {
    category: 'General',
    question: 'What areas in Cheshire and the Northwest do you cover?',
    answer: 'We cover Knutsford, Wilmslow, Alderley Edge, Hale, Altrincham, Bowdon, Macclesfield, Prestbury, Tarporley, Chester, Warrington, Stockport, and South Manchester. If you live in or around Cheshire / Greater Manchester, we come to you!'
  },
  {
    category: 'Services',
    question: 'What is the difference between a standard hand wash and professional detailing?',
    answer: 'A standard hand wash or roadside valet often uses harsh acid chemicals, dirty sponges, and abrasive bath towels that inflict swirl marks and scratches into clear coat. Drench Detailing uses pH-neutral snow foams, 2-bucket safe wash methods with grit guards, paint depth analysis, single-use microfibres, and high-end protective coatings.'
  },
  {
    category: 'Services',
    question: 'What is Paint Correction and how does it work?',
    answer: 'Paint correction is the mechanical leveling of micro-thin clear coat paintwork using dual-action polishers and specialized abrasive compounds. It permanently removes swirl marks, fine scratches, holograms, and wash hazing to restore deep factory gloss and clarity.'
  },
  {
    category: 'Ceramic Coating',
    question: 'How long does a Ceramic Coating last and why is it better than wax?',
    answer: 'Traditional wax melts under heat and washes away within weeks. A ceramic coating creates a semi-permanent chemical bond with your clear coat that lasts between 2 and 5+ years. It offers superior hydrophobic water repellency, UV protection, resistance against bird droppings & road salt, and keeps your car cleaner for much longer.'
  },
  {
    category: 'Booking',
    question: 'What happens if it rains on my scheduled detail day?',
    answer: 'We operate rain or shine! Our mobile van is equipped with heavy-duty pop-up detailing gazebos to shield your vehicle during exterior polishing and coating applications. If severe stormy weather occurs, we will rebook you for the next convenient date.'
  }
];
