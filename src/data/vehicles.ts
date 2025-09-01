import { Vehicle } from '../types';

export const luxuryVehicles: Vehicle[] = [
  {
    id: 'lux-1',
    name: 'Mercedes-Benz EQS 580',
    brand: 'Mercedes-Benz',
    model: 'EQS',
    year: 2024,
    price: 125900,
    monthlyPrice: 1899,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
    ],
    type: 'luxury',
    category: 'ultra-luxury',
    range: 453,
    acceleration: '3.7s',
    topSpeed: 130,
    horsepower: 516,
    torque: 631,
    transmission: 'Single-Speed Automatic',
    drivetrain: 'All-Wheel Drive',
    seating: 5,
    features: [
      'MBUX Hyperscreen',
      'Air Suspension',
      'Massage Seats',
      'Augmented Reality Navigation',
      'Burmester 3D Sound',
      'Ambient Lighting 64 Colors'
    ],
    premiumFeatures: [
      'Executive Rear Seating Package',
      'Energizing Air Control Plus',
      'Digital Light Technology'
    ],
    description: 'The pinnacle of electric luxury, combining cutting-edge technology with unparalleled comfort.',
    availability: 'in-stock',
    deliveryTime: '2-3 weeks',
    warranty: '4 years/50,000 miles',
    colors: [
      { name: 'Obsidian Black', hex: '#000000', price: 0 },
      { name: 'High-Tech Silver', hex: '#C0C0C0', price: 750 },
      { name: 'Nautic Blue', hex: '#1E3A5F', price: 1250 }
    ],
    specifications: {
      battery: '107.8 kWh',
      motor: 'Dual Motor',
      charging: 'DC Fast Charging up to 200kW',
      wheels: '21" AMG Multi-Spoke',
      suspension: 'AIRMATIC with Adaptive Damping'
    },
    rating: 4.9,
    reviews: 328
  },
  {
    id: 'lux-2',
    name: 'Bentley Flying Spur Hybrid',
    brand: 'Bentley',
    model: 'Flying Spur',
    year: 2024,
    price: 285000,
    monthlyPrice: 4299,
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200',
    ],
    type: 'hybrid',
    category: 'exclusive',
    fuelEconomy: '40 MPGe',
    acceleration: '4.1s',
    topSpeed: 177,
    horsepower: 536,
    torque: 553,
    transmission: '8-Speed Dual-Clutch',
    drivetrain: 'All-Wheel Drive',
    seating: 4,
    features: [
      'Rotating Display',
      'Diamond Knurling',
      'Naim Audio System',
      'Night Vision',
      'Bentley Dynamic Ride',
      'Mulliner Driving Specification'
    ],
    premiumFeatures: [
      'Rear Seat Entertainment',
      'Mood Lighting Specification',
      'Bespoke Interior Veneer'
    ],
    description: 'Handcrafted British luxury meets sustainable performance in this hybrid masterpiece.',
    availability: 'limited',
    deliveryTime: '4-6 months',
    warranty: '3 years/unlimited miles',
    colors: [
      { name: 'Beluga', hex: '#2B2B2B', price: 0 },
      { name: 'Moonbeam', hex: '#E8E3D3', price: 2500 },
      { name: 'British Racing Green', hex: '#004225', price: 3500 }
    ],
    specifications: {
      engine: '2.9L V6 + Electric Motor',
      battery: '14.1 kWh',
      charging: 'Type 2 AC Charging',
      wheels: '22" Mulliner',
      brakes: 'Carbon Silicon Carbide'
    },
    rating: 4.95,
    reviews: 89
  },
  {
    id: 'lux-3',
    name: 'Porsche Taycan Turbo S',
    brand: 'Porsche',
    model: 'Taycan',
    year: 2024,
    price: 198950,
    monthlyPrice: 2999,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200',
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=1200',
    ],
    type: 'electric',
    category: 'premium',
    range: 256,
    acceleration: '2.6s',
    topSpeed: 161,
    horsepower: 750,
    torque: 774,
    transmission: '2-Speed Automatic',
    drivetrain: 'All-Wheel Drive',
    seating: 4,
    features: [
      'Curved Instrument Display',
      'Sport Chrono Package',
      'Adaptive Air Suspension',
      'Porsche InnoDrive',
      'Matrix LED Headlights',
      'Launch Control'
    ],
    premiumFeatures: [
      'Rear-Axle Steering',
      'Porsche Dynamic Chassis Control',
      'Performance Battery Plus'
    ],
    description: 'Pure electric performance with the soul of a sports car and luxury of a grand tourer.',
    availability: 'in-stock',
    deliveryTime: '3-4 weeks',
    warranty: '4 years/50,000 miles',
    colors: [
      { name: 'Frozen Blue Metallic', hex: '#4A6B8A', price: 0 },
      { name: 'Carmine Red', hex: '#B91C1C', price: 3150 },
      { name: 'Chalk', hex: '#E5E5E5', price: 2500 }
    ],
    specifications: {
      battery: '93.4 kWh (Performance Battery Plus)',
      motor: 'Dual Motor',
      charging: '800V architecture, 270kW DC',
      wheels: '21" Mission E Design',
      suspension: 'Adaptive Air Suspension with PASM'
    },
    rating: 4.8,
    reviews: 512
  },
  {
    id: 'lux-4',
    name: 'BMW i7 xDrive60',
    brand: 'BMW',
    model: 'i7',
    year: 2024,
    price: 119300,
    monthlyPrice: 1799,
    image: 'https://images.unsplash.com/photo-1555215858-9dc80e68c8e8?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555215858-9dc80e68c8e8?w=1200',
      'https://images.unsplash.com/photo-1617654112329-c1590c652d6d?w=1200',
    ],
    type: 'electric',
    category: 'ultra-luxury',
    range: 388,
    acceleration: '4.5s',
    topSpeed: 149,
    horsepower: 536,
    torque: 549,
    transmission: 'Single-Speed Automatic',
    drivetrain: 'All-Wheel Drive',
    seating: 5,
    features: [
      'Theatre Screen 31"',
      'Crystal Headlights',
      'Executive Lounge Seating',
      'Bowers & Wilkins Diamond',
      'Sky Lounge Panoramic Roof',
      'Interaction Bar'
    ],
    premiumFeatures: [
      'Rear-Seat Entertainment Professional',
      'Executive Package',
      'Automatic Doors'
    ],
    description: 'The first fully electric luxury sedan from BMW, redefining sustainable luxury.',
    availability: 'in-stock',
    deliveryTime: '2-3 weeks',
    warranty: '4 years/50,000 miles',
    colors: [
      { name: 'Mineral White', hex: '#F5F5F5', price: 0 },
      { name: 'Sapphire Black', hex: '#0A0A0A', price: 1950 },
      { name: 'Oxide Grey', hex: '#4B4B4B', price: 1950 }
    ],
    specifications: {
      battery: '101.7 kWh',
      motor: 'Dual Motor',
      charging: 'DC Fast Charging up to 195kW',
      wheels: '21" Aerodynamic',
      suspension: 'Air Suspension with Adaptive Mode'
    },
    rating: 4.7,
    reviews: 245
  },
  {
    id: 'lux-5',
    name: 'Audi RS e-tron GT',
    brand: 'Audi',
    model: 'RS e-tron GT',
    year: 2024,
    price: 148595,
    monthlyPrice: 2239,
    image: 'https://images.unsplash.com/photo-1606664515524-ed9f786329ac?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed9f786329ac?w=1200',
      'https://images.unsplash.com/photo-1614162558051-c39cee5a1776?w=1200',
    ],
    type: 'electric',
    category: 'premium',
    range: 249,
    acceleration: '3.1s',
    topSpeed: 155,
    horsepower: 637,
    torque: 612,
    transmission: '2-Speed Automatic',
    drivetrain: 'All-Wheel Drive',
    seating: 4,
    features: [
      'Virtual Cockpit Plus',
      'Matrix LED Laser Lights',
      'Adaptive Air Suspension',
      'Bang & Olufsen 3D Sound',
      'Carbon Fiber Roof',
      'e-tron Sport Sound'
    ],
    premiumFeatures: [
      'Carbon Fiber Exterior Package',
      'RS Design Package',
      'Dynamic Package Plus'
    ],
    description: 'Gran Turismo performance meets electric efficiency in this striking sports sedan.',
    availability: 'limited',
    deliveryTime: '3-5 weeks',
    warranty: '4 years/50,000 miles',
    colors: [
      { name: 'Tactical Green', hex: '#3B5F3F', price: 0 },
      { name: 'Daytona Grey', hex: '#646B70', price: 595 },
      { name: 'Mythos Black', hex: '#0D0D0D', price: 595 }
    ],
    specifications: {
      battery: '93.4 kWh',
      motor: 'Dual Motor with e-quattro',
      charging: '800V, 270kW DC Fast Charging',
      wheels: '21" 5-Spoke Trapezoid',
      suspension: 'Adaptive Air Suspension with DRC'
    },
    rating: 4.85,
    reviews: 178
  },
  {
    id: 'lux-6',
    name: 'Lucid Air Sapphire',
    brand: 'Lucid',
    model: 'Air Sapphire',
    year: 2024,
    price: 249000,
    monthlyPrice: 3749,
    image: 'https://images.unsplash.com/photo-1621135171540-18f1cc5300ab?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621135171540-18f1cc5300ab?w=1200',
      'https://images.unsplash.com/photo-1617469165758-174e0a09c407?w=1200',
    ],
    type: 'electric',
    category: 'exclusive',
    range: 427,
    acceleration: '1.89s',
    topSpeed: 205,
    horsepower: 1234,
    torque: 1430,
    transmission: 'Direct Drive',
    drivetrain: 'Tri-Motor AWD',
    seating: 5,
    features: [
      'Glass Canopy Roof',
      'DreamDrive Pro',
      'Surreal Sound Pro',
      'Lucid UX Interface',
      'Facial Recognition Entry',
      'Air Suspension'
    ],
    premiumFeatures: [
      'Sapphire Track Mode',
      'Carbon Ceramic Brakes',
      'Stealth Appearance Package'
    ],
    description: 'The pinnacle of electric performance, delivering hypercar speed with luxury sedan comfort.',
    availability: 'pre-order',
    deliveryTime: '6-8 months',
    warranty: '4 years/50,000 miles',
    colors: [
      { name: 'Sapphire Blue', hex: '#0F52BA', price: 0 },
      { name: 'Stellar White', hex: '#FAFAFA', price: 0 },
      { name: 'Cosmos Silver', hex: '#A7A9AC', price: 1500 }
    ],
    specifications: {
      battery: '118 kWh',
      motor: 'Tri-Motor',
      charging: 'Ultra-Wunderbox, 300kW+ DC',
      wheels: '21" Aero Sapphire',
      suspension: 'Adaptive Damping System'
    },
    rating: 4.92,
    reviews: 67
  },
  {
    id: 'lux-7',
    name: 'Genesis Electrified GV70',
    brand: 'Genesis',
    model: 'Electrified GV70',
    year: 2024,
    price: 73050,
    monthlyPrice: 1099,
    image: 'https://images.unsplash.com/photo-1619682257172-f886a3f96f29?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1619682257172-f886a3f96f29?w=1200',
      'https://images.unsplash.com/photo-1609521470610-2b1b82a4e342?w=1200',
    ],
    type: 'electric',
    category: 'premium',
    range: 330,
    acceleration: '4.2s',
    topSpeed: 124,
    horsepower: 429,
    torque: 516,
    transmission: 'Single-Speed Reduction Gear',
    drivetrain: 'e-AWD',
    seating: 5,
    features: [
      'Face Connect',
      'Fingerprint Authentication',
      'Bang & Olufsen Premium Audio',
      'Highway Driving Assist 2',
      'Remote Smart Parking Assist',
      'Wireless Charging'
    ],
    premiumFeatures: [
      'Nappa Leather Interior',
      'Boost Mode',
      'Vehicle-to-Load Capability'
    ],
    description: 'Sophisticated luxury meets innovative technology in this refined electric SUV.',
    availability: 'in-stock',
    deliveryTime: '1-2 weeks',
    warranty: '5 years/60,000 miles',
    colors: [
      { name: 'Matterhorn White', hex: '#F7F7F7', price: 0 },
      { name: 'Makalu Grey', hex: '#54585A', price: 400 },
      { name: 'Cavendish Red', hex: '#8B0000', price: 400 }
    ],
    specifications: {
      battery: '77.4 kWh',
      motor: 'Dual Motor',
      charging: '350kW DC Fast Charging',
      wheels: '21" Diamond Cut',
      suspension: 'Electronic Control Suspension'
    },
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'lux-8',
    name: 'Jaguar I-PACE HSE',
    brand: 'Jaguar',
    model: 'I-PACE',
    year: 2024,
    price: 89450,
    monthlyPrice: 1349,
    image: 'https://images.unsplash.com/photo-1609521536431-dcccefa0f962?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1609521536431-dcccefa0f962?w=1200',
      'https://images.unsplash.com/photo-1612825272474-b824046e4ec4?w=1200',
    ],
    type: 'electric',
    category: 'premium',
    range: 256,
    acceleration: '4.5s',
    topSpeed: 124,
    horsepower: 394,
    torque: 512,
    transmission: 'Single-Speed',
    drivetrain: 'All-Wheel Drive',
    seating: 5,
    features: [
      'Pivi Pro',
      'Meridian Sound System',
      'Adaptive Dynamics',
      'ClearSight Rear View Mirror',
      'All-Surface Progress Control',
      'Activity Key'
    ],
    premiumFeatures: [
      'Head-Up Display',
      'Configurable Dynamics',
      'Premium LED Headlights'
    ],
    description: 'British elegance meets electric performance in this award-winning luxury SUV.',
    availability: 'limited',
    deliveryTime: '4-6 weeks',
    warranty: '5 years/60,000 miles',
    colors: [
      { name: 'Eiger Grey', hex: '#505759', price: 0 },
      { name: 'Portofino Blue', hex: '#1E4C74', price: 710 },
      { name: 'Firenze Red', hex: '#9E1315', price: 710 }
    ],
    specifications: {
      battery: '90 kWh',
      motor: 'Dual Motor',
      charging: 'DC Fast Charging up to 100kW',
      wheels: '22" Style 5056',
      suspension: 'Air Suspension with Adaptive Dynamics'
    },
    rating: 4.5,
    reviews: 234
  }
];