export const carsDatabase = [
  // Luxury Sedans
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 125000,
    category: "Luxury Sedan",
    mileage: 0,
    transmission: "9-Speed Automatic",
    fuel: "Hybrid",
    drivetrain: "AWD",
    engine: "3.0L Inline-6 Turbo + Electric",
    horsepower: 496,
    acceleration: "4.5s 0-60mph",
    topSpeed: "155 mph",
    mpg: { city: 28, highway: 35, combined: 31 },
    seats: 5,
    colors: [
      { name: "Obsidian Black", hex: "#000000" },
      { name: "Polar White", hex: "#FFFFFF" },
      { name: "Selenite Grey", hex: "#4B4B4D" },
      { name: "Nautic Blue", hex: "#1E3A5F" },
      { name: "Ruby Red", hex: "#9B111E" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200",
        "https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200",
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200"
      ]
    },
    features: {
      safety: ["Adaptive Cruise Control", "Lane Keep Assist", "Automatic Emergency Braking", "Blind Spot Detection", "Night Vision"],
      technology: ["MBUX Infotainment", "Head-Up Display", "360° Camera", "Wireless Charging", "Digital Key"],
      comfort: ["Massage Seats", "Ambient Lighting", "4-Zone Climate Control", "Air Suspension", "Soft-Close Doors"],
      entertainment: ["Burmester 3D Sound", "Rear Entertainment Screens", "Apple CarPlay", "Android Auto", "5G Connectivity"]
    },
    description: "The pinnacle of luxury and technology, offering unmatched comfort and performance.",
    rating: 4.9,
    reviews: 234,
    available: true,
    dealership: "Beverly Hills Mercedes",
    location: "Los Angeles, CA",
    vin: "WDDUG8GB0NA123456",
    warranty: "4 years / 50,000 miles",
    financing: {
      apr: 3.9,
      monthlyPayment: 2150,
      downPayment: 25000,
      term: 60
    }
  },
  {
    id: 2,
    make: "BMW",
    model: "M5",
    year: 2024,
    price: 110000,
    category: "Performance Sedan",
    mileage: 150,
    transmission: "8-Speed Automatic",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "4.4L V8 Twin-Turbo",
    horsepower: 617,
    acceleration: "3.2s 0-60mph",
    topSpeed: "190 mph",
    mpg: { city: 18, highway: 25, combined: 21 },
    seats: 5,
    colors: [
      { name: "Marina Bay Blue", hex: "#005A8B" },
      { name: "Frozen Black", hex: "#1C1C1C" },
      { name: "Alpine White", hex: "#FCFCFC" },
      { name: "Dravit Grey", hex: "#656669" },
      { name: "Aventurine Red", hex: "#660000" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200",
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
      ]
    },
    features: {
      safety: ["M Carbon Ceramic Brakes", "Active Protection", "Collision Warning", "Parking Assistant", "Surround View"],
      technology: ["iDrive 8.5", "Gesture Control", "BMW Digital Key", "Head-Up Display", "Live Cockpit Professional"],
      comfort: ["M Sport Seats", "M Carbon Fiber Trim", "Harman Kardon Sound", "4-Zone Climate", "Adaptive Suspension"],
      entertainment: ["Apple CarPlay", "Android Auto", "WiFi Hotspot", "Wireless Charging", "Sport Displays"]
    },
    description: "The ultimate driving machine with track-ready performance and daily comfort.",
    rating: 4.8,
    reviews: 189,
    available: true,
    dealership: "Manhattan BMW",
    location: "New York, NY",
    vin: "WBSJF0C50NB234567",
    warranty: "4 years / 50,000 miles",
    financing: {
      apr: 4.5,
      monthlyPayment: 1950,
      downPayment: 22000,
      term: 60
    }
  },
  // Sports Cars
  {
    id: 3,
    make: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 230000,
    category: "Sports Car",
    mileage: 500,
    transmission: "8-Speed PDK",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "3.8L Flat-6 Twin-Turbo",
    horsepower: 640,
    acceleration: "2.6s 0-60mph",
    topSpeed: "205 mph",
    mpg: { city: 19, highway: 24, combined: 21 },
    seats: 4,
    colors: [
      { name: "Guards Red", hex: "#CC0000" },
      { name: "GT Silver", hex: "#B5B5BD" },
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Miami Blue", hex: "#00B0F0" },
      { name: "Chalk", hex: "#E4E4E1" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200",
        "https://images.unsplash.com/photo-1611651338502-2fed00b0e20e?w=1200",
        "https://images.unsplash.com/photo-1619682442028-052406bb772e?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1611821064430-63f59b32f537?w=1200"
      ]
    },
    features: {
      safety: ["Porsche Stability Management", "Ceramic Brakes", "Night Vision", "Lane Change Assist", "Front Collision Warning"],
      technology: ["PCM 6.0", "Sport Chrono Package", "PASM Sport Suspension", "Rear-Axle Steering", "Launch Control"],
      comfort: ["18-Way Sport Seats Plus", "BOSE Surround Sound", "Dual-Zone Climate", "Sport Exhaust", "LED Matrix Headlights"],
      entertainment: ["Apple CarPlay", "Porsche Connect", "Voice Control", "Wireless Updates", "Track Precision App"]
    },
    description: "Iconic sports car delivering breathtaking performance with everyday usability.",
    rating: 4.9,
    reviews: 156,
    available: true,
    dealership: "Porsche Miami",
    location: "Miami, FL",
    vin: "WP0CD2A99NS345678",
    warranty: "4 years / 50,000 miles",
    financing: {
      apr: 3.5,
      monthlyPayment: 3950,
      downPayment: 46000,
      term: 60
    }
  },
  // Electric Vehicles
  {
    id: 4,
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 108000,
    category: "Electric Sedan",
    mileage: 0,
    transmission: "Single-Speed",
    fuel: "Electric",
    drivetrain: "AWD",
    engine: "Tri-Motor Electric",
    horsepower: 1020,
    acceleration: "1.99s 0-60mph",
    topSpeed: "200 mph",
    mpg: { city: 120, highway: 120, combined: 120 },
    seats: 5,
    colors: [
      { name: "Pearl White", hex: "#FAFAFA" },
      { name: "Solid Black", hex: "#000000" },
      { name: "Midnight Silver", hex: "#2B2D42" },
      { name: "Deep Blue", hex: "#003566" },
      { name: "Red Multi-Coat", hex: "#B91C1C" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=1200",
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200",
        "https://images.unsplash.com/photo-1623944889288-cd147dbb517c?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1619776221135-96534ed47c93?w=1200"
      ]
    },
    features: {
      safety: ["Autopilot", "Full Self-Driving Capability", "Emergency Braking", "Collision Warning", "Blind Spot Camera"],
      technology: ["17-inch Touchscreen", "Over-the-Air Updates", "Gaming Computer", "Netflix/YouTube", "Sentry Mode"],
      comfort: ["Glass Roof", "Premium Interior", "Ventilated Seats", "HEPA Filter", "Tri-Zone Climate"],
      entertainment: ["Premium Audio", "Spotify", "Arcade Games", "Theater Mode", "Karaoke"]
    },
    description: "The quickest accelerating car in production with cutting-edge technology.",
    rating: 4.7,
    reviews: 412,
    available: true,
    dealership: "Tesla Showroom",
    location: "Palo Alto, CA",
    vin: "5YJSA1E50NF456789",
    warranty: "4 years / 50,000 miles",
    range: "405 miles",
    chargingTime: "15 min to 200 miles",
    financing: {
      apr: 5.9,
      monthlyPayment: 1850,
      downPayment: 21600,
      term: 60
    }
  },
  {
    id: 5,
    make: "Lucid",
    model: "Air Grand Touring",
    year: 2024,
    price: 138000,
    category: "Electric Sedan",
    mileage: 100,
    transmission: "Single-Speed",
    fuel: "Electric",
    drivetrain: "AWD",
    engine: "Dual Motor Electric",
    horsepower: 819,
    acceleration: "3.0s 0-60mph",
    topSpeed: "168 mph",
    mpg: { city: 131, highway: 131, combined: 131 },
    seats: 5,
    colors: [
      { name: "Eureka Gold", hex: "#D4A574" },
      { name: "Quantum Grey", hex: "#4A4E69" },
      { name: "Stellar White", hex: "#F2F2F2" },
      { name: "Infinite Black", hex: "#0D0D0D" },
      { name: "Cosmos Silver", hex: "#C9CAD9" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200",
        "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1630794180113-1e7a3dd8d6f2?w=1200"
      ]
    },
    features: {
      safety: ["DreamDrive Pro", "32 Sensors", "Automatic Emergency Braking", "Cross Traffic Protection", "Highway Assist"],
      technology: ["Glass Cockpit", "34-inch Curved Display", "Facial Recognition", "Natural Voice Control", "DreamDrive"],
      comfort: ["Executive Rear Seats", "Massage Function", "21-Speaker Audio", "4-Zone Climate", "Soft Close Doors"],
      entertainment: ["Dolby Atmos", "Amazon Alexa", "Apple CarPlay", "Android Auto", "Theater Mode"]
    },
    description: "Luxury electric sedan with the longest range and spacious interior.",
    rating: 4.8,
    reviews: 67,
    available: true,
    dealership: "Lucid Studio",
    location: "Beverly Hills, CA",
    vin: "50LAG2D90PA567890",
    warranty: "4 years / 50,000 miles",
    range: "516 miles",
    chargingTime: "20 min to 300 miles",
    financing: {
      apr: 4.9,
      monthlyPayment: 2380,
      downPayment: 27600,
      term: 60
    }
  },
  // SUVs
  {
    id: 6,
    make: "Range Rover",
    model: "Sport SVR",
    year: 2024,
    price: 145000,
    category: "Luxury SUV",
    mileage: 1000,
    transmission: "8-Speed Automatic",
    fuel: "Gasoline",
    drivetrain: "4WD",
    engine: "5.0L V8 Supercharged",
    horsepower: 575,
    acceleration: "4.3s 0-60mph",
    topSpeed: "176 mph",
    mpg: { city: 15, highway: 21, combined: 17 },
    seats: 5,
    colors: [
      { name: "Santorini Black", hex: "#1B1B1B" },
      { name: "Carpathian Grey", hex: "#545454" },
      { name: "Firenze Red", hex: "#8B0000" },
      { name: "Yulong White", hex: "#FAFAF8" },
      { name: "Portofino Blue", hex: "#005C75" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1558601223-cfb65bde6154?w=1200",
      ]
    },
    features: {
      safety: ["Terrain Response 2", "Wade Sensing", "Emergency Braking", "Adaptive Cruise", "360° Parking Aid"],
      technology: ["Pivi Pro", "Head-Up Display", "Pixel LED Headlights", "Activity Key", "Remote Control"],
      comfort: ["22-Way Seats", "Meridian Signature Sound", "4-Zone Climate", "Panoramic Roof", "Cooled Seats"],
      entertainment: ["Dual Touchscreens", "WiFi Hotspot", "Apple CarPlay", "Android Auto", "Rear Entertainment"]
    },
    description: "Ultimate luxury SUV combining British elegance with sports car performance.",
    rating: 4.7,
    reviews: 143,
    available: true,
    dealership: "Land Rover Manhattan",
    location: "New York, NY",
    vin: "SALGS2SE3NA789012",
    warranty: "4 years / 50,000 miles",
    financing: {
      apr: 5.5,
      monthlyPayment: 2490,
      downPayment: 29000,
      term: 60
    }
  },
  {
    id: 7,
    make: "Audi",
    model: "RS Q8",
    year: 2024,
    price: 125000,
    category: "Performance SUV",
    mileage: 750,
    transmission: "8-Speed Tiptronic",
    fuel: "Mild Hybrid",
    drivetrain: "Quattro AWD",
    engine: "4.0L V8 Twin-Turbo",
    horsepower: 591,
    acceleration: "3.7s 0-60mph",
    topSpeed: "190 mph",
    mpg: { city: 15, highway: 21, combined: 17 },
    seats: 5,
    colors: [
      { name: "Nardo Grey", hex: "#686C70" },
      { name: "Galaxy Blue", hex: "#1F3A93" },
      { name: "Mythos Black", hex: "#0C0C0C" },
      { name: "Glacier White", hex: "#F0F0F0" },
      { name: "Matador Red", hex: "#B71C1C" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=1200",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200"
      ]
    },
    features: {
      safety: ["Matrix LED Lights", "Night Vision", "Pre Sense", "Side Assist", "Exit Warning"],
      technology: ["Virtual Cockpit Plus", "MMI Touch Response", "Bang & Olufsen 3D", "Head-Up Display", "All-Wheel Steering"],
      comfort: ["RS Sport Seats", "Valcona Leather", "4-Zone Climate", "Air Suspension", "Massage Function"],
      entertainment: ["Audi Connect", "Amazon Alexa", "Apple CarPlay", "Android Auto", "WiFi Hotspot"]
    },
    description: "High-performance SUV with cutting-edge technology and Audi luxury.",
    rating: 4.8,
    reviews: 98,
    available: true,
    dealership: "Audi Sport Center",
    location: "Chicago, IL",
    vin: "WA1VXAF70PD890123",
    warranty: "4 years / 50,000 miles",
    financing: {
      apr: 4.9,
      monthlyPayment: 2150,
      downPayment: 25000,
      term: 60
    }
  },
  // Supercars
  {
    id: 8,
    make: "Lamborghini",
    model: "Huracán EVO",
    year: 2024,
    price: 320000,
    category: "Supercar",
    mileage: 100,
    transmission: "7-Speed Dual-Clutch",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "5.2L V10",
    horsepower: 631,
    acceleration: "2.9s 0-60mph",
    topSpeed: "202 mph",
    mpg: { city: 13, highway: 18, combined: 15 },
    seats: 2,
    colors: [
      { name: "Arancio Borealis", hex: "#FF6600" },
      { name: "Verde Mantis", hex: "#74B72E" },
      { name: "Blu Aegeus", hex: "#006FBA" },
      { name: "Nero Aldebaran", hex: "#000000" },
      { name: "Bianco Monocerus", hex: "#F5F5F0" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200",
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200",
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200"
      ]
    },
    features: {
      safety: ["Carbon Ceramic Brakes", "ESC", "ABS", "Airbags", "LDWS"],
      technology: ["LDVI", "Magneto-rheological Suspension", "Dynamic Steering", "ANIMA Selector", "Telemetry"],
      comfort: ["Sports Seats", "Alcantara Interior", "Dual-Zone Climate", "LED Lighting", "Lifting System"],
      entertainment: ["8.4-inch Touchscreen", "Apple CarPlay", "Amazon Alexa", "Sensonum Audio", "Connected Services"]
    },
    description: "Italian supercar excellence with breathtaking design and performance.",
    rating: 4.9,
    reviews: 67,
    available: true,
    dealership: "Lamborghini Beverly Hills",
    location: "Beverly Hills, CA",
    vin: "ZHWEF4ZF8NLA67890",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 6.5,
      monthlyPayment: 5500,
      downPayment: 64000,
      term: 60
    }
  },
  {
    id: 9,
    make: "Ferrari",
    model: "F8 Tributo",
    year: 2023,
    price: 380000,
    category: "Supercar",
    mileage: 250,
    transmission: "7-Speed Dual-Clutch",
    fuel: "Gasoline",
    drivetrain: "RWD",
    engine: "3.9L V8 Twin-Turbo",
    horsepower: 710,
    acceleration: "2.9s 0-60mph",
    topSpeed: "211 mph",
    mpg: { city: 15, highway: 19, combined: 16 },
    seats: 2,
    colors: [
      { name: "Rosso Corsa", hex: "#D40000" },
      { name: "Giallo Modena", hex: "#FFD700" },
      { name: "Blu Tour de France", hex: "#0033A0" },
      { name: "Nero", hex: "#000000" },
      { name: "Bianco Avus", hex: "#F8F8FF" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200",
        "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200"
      ]
    },
    features: {
      safety: ["Side Slip Control", "F1-Trac", "E-Diff3", "Racing ABS", "Carbon Brakes"],
      technology: ["Ferrari Dynamic Enhancer", "7-inch Passenger Display", "Manettino", "LED Steering Wheel", "Telemetry"],
      comfort: ["Racing Seats", "Carbon Fiber Trim", "Dual-Zone Climate", "Premium Leather", "JBL Audio"],
      entertainment: ["Touchscreen Display", "Apple CarPlay", "Navigation", "Bluetooth", "USB Connectivity"]
    },
    description: "A tribute to Ferrari's most powerful V8, combining heritage with innovation.",
    rating: 5.0,
    reviews: 45,
    available: false,
    dealership: "Ferrari Silicon Valley",
    location: "Redwood City, CA",
    vin: "ZFF92HHT0N0890123",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 6.9,
      monthlyPayment: 6530,
      downPayment: 76000,
      term: 60
    }
  },
  {
    id: 10,
    make: "McLaren",
    model: "720S Spider",
    year: 2024,
    price: 420000,
    category: "Supercar",
    mileage: 150,
    transmission: "7-Speed SSG",
    fuel: "Gasoline",
    drivetrain: "RWD",
    engine: "4.0L V8 Twin-Turbo",
    horsepower: 710,
    acceleration: "2.8s 0-60mph",
    topSpeed: "212 mph",
    mpg: { city: 15, highway: 22, combined: 18 },
    seats: 2,
    colors: [
      { name: "McLaren Orange", hex: "#FF8700" },
      { name: "Onyx Black", hex: "#0F0F0F" },
      { name: "Pearl White", hex: "#F8F8F8" },
      { name: "Volcano Red", hex: "#CC0000" },
      { name: "Aurora Blue", hex: "#0080FF" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1592234418192-c89d942e2967?w=1200",
        "https://images.unsplash.com/photo-1516298103702-43b22eb200e8?w=1200",
        "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=1200"
      ],
      interior: [
      ]
    },
    features: {
      safety: ["Proactive Chassis Control", "Variable Drift Control", "Carbon Ceramic Brakes", "Airbrake", "ESC"],
      technology: ["IRIS System", "McLaren Track Telemetry", "Folding Display", "Active Suspension", "Launch Control"],
      comfort: ["Sports Seats", "Alcantara Trim", "Dual-Zone Climate", "Bowers & Wilkins Audio", "Soft Close Doors"],
      entertainment: ["Vertical Touchscreen", "Navigation", "Bluetooth", "USB Ports", "McLaren Track App"]
    },
    description: "Open-air supercar excellence with Formula 1 inspired technology.",
    rating: 4.9,
    reviews: 34,
    available: true,
    dealership: "McLaren Boston",
    location: "Boston, MA",
    vin: "SBM14DCA6NW012345",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 7.2,
      monthlyPayment: 7220,
      downPayment: 84000,
      term: 60
    }
  },
  // Grand Tourers
  {
    id: 11,
    make: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: 250000,
    category: "Grand Tourer",
    mileage: 500,
    transmission: "8-Speed Dual-Clutch",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "6.0L W12 Twin-Turbo",
    horsepower: 650,
    acceleration: "3.6s 0-60mph",
    topSpeed: "208 mph",
    mpg: { city: 12, highway: 20, combined: 15 },
    seats: 4,
    colors: [
      { name: "British Racing Green", hex: "#004225" },
      { name: "Onyx", hex: "#353839" },
      { name: "Glacier White", hex: "#F0F0E7" },
      { name: "Sequin Blue", hex: "#2C5282" },
      { name: "Patina", hex: "#4A5D4E" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1563720223809-b9a3d1694e2a?w=1200",
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616788494672-ec7ca25fdde9?w=1200"
      ]
    },
    features: {
      safety: ["Night Vision", "City Safeguard", "Pedestrian Warning", "Traffic Sign Recognition", "Park Assist"],
      technology: ["Rotating Display", "Bentley Dynamic Ride", "All-Wheel Steering", "48V Electric System", "Matrix Grille"],
      comfort: ["20-Way Seats", "Diamond Quilting", "Naim Audio", "Panoramic Roof", "Mood Lighting"],
      entertainment: ["12.3-inch Touchscreen", "Apple CarPlay", "Android Auto", "Digital TV", "Rear Seat Entertainment"]
    },
    description: "The definitive grand tourer, blending performance with handcrafted luxury.",
    rating: 4.9,
    reviews: 78,
    available: true,
    dealership: "Bentley Greenwich",
    location: "Greenwich, CT",
    vin: "SCBCA4ZG0NC901234",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 5.9,
      monthlyPayment: 4300,
      downPayment: 50000,
      term: 60
    }
  },
  {
    id: 12,
    make: "Aston Martin",
    model: "DB11",
    year: 2024,
    price: 220000,
    category: "Grand Tourer",
    mileage: 800,
    transmission: "8-Speed Automatic",
    fuel: "Gasoline",
    drivetrain: "RWD",
    engine: "5.2L V12 Twin-Turbo",
    horsepower: 630,
    acceleration: "3.9s 0-60mph",
    topSpeed: "208 mph",
    mpg: { city: 14, highway: 22, combined: 18 },
    seats: 4,
    colors: [
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Magnetic Silver", hex: "#676767" },
      { name: "Ultramarine Black", hex: "#1F2937" },
      { name: "Frosted Glass Blue", hex: "#7DA3BE" },
      { name: "Cinnabar Orange", hex: "#E34234" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1608340821332-3a73fadd890c?w=1200",
        "https://images.unsplash.com/photo-1610353268208-9e6f56ca78ba?w=1200",
      ],
      interior: [
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=1200"
      ]
    },
    features: {
      safety: ["Dynamic Stability Control", "Emergency Brake Assist", "Tyre Pressure Monitoring", "Electronic Brakeforce Distribution", "Parking Sensors"],
      technology: ["8-inch Infotainment", "360° Camera", "Keyless Entry", "Adaptive Damping", "Torque Vectoring"],
      comfort: ["Sports Plus Seats", "Alcantara Headlining", "Bang & Olufsen Audio", "Tri-Zone Climate", "Heated Seats"],
      entertainment: ["Mercedes-Benz Infotainment", "Apple CarPlay", "DAB Radio", "Bluetooth", "USB Connectivity"]
    },
    description: "British elegance meets contemporary design in this stunning grand tourer.",
    rating: 4.8,
    reviews: 56,
    available: true,
    dealership: "Aston Martin Americas",
    location: "Irvine, CA",
    vin: "SCFRMFAV5MGL12345",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 6.2,
      monthlyPayment: 3780,
      downPayment: 44000,
      term: 60
    }
  },
  // More vehicles (continuing with various categories)...
  {
    id: 13,
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 450000,
    category: "Ultra-Luxury",
    mileage: 200,
    transmission: "8-Speed Automatic",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "6.75L V12 Twin-Turbo",
    horsepower: 563,
    acceleration: "4.8s 0-60mph",
    topSpeed: "155 mph",
    mpg: { city: 12, highway: 19, combined: 14 },
    seats: 5,
    colors: [
      { name: "English White", hex: "#F7F3F0" },
      { name: "Black Diamond", hex: "#000000" },
      { name: "Darkest Tungsten", hex: "#3B3B3B" },
      { name: "Salamanca Blue", hex: "#1E3A5F" },
      { name: "Magma Red", hex: "#661414" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200",
        "https://images.unsplash.com/photo-1609207825181-2bd83f896e3f?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=1200"
      ]
    },
    features: {
      safety: ["Night Vision", "Alertness Assistant", "4-Camera System", "Cross-Traffic Warning", "Active Cruise Control"],
      technology: ["Spirit of Ecstasy Retractable", "Starlight Headliner", "Bespoke Audio", "Rear Theatre Configuration", "Illuminated Fascia"],
      comfort: ["Lounge Seating", "Champagne Cooler", "Lambswool Floor Mats", "Power Closing Doors", "Air Suspension"],
      entertainment: ["Rear Entertainment", "18-Speaker Audio", "Theatre Configuration", "Picnic Tables", "Coolbox"]
    },
    description: "The pinnacle of luxury motoring, offering unmatched refinement and presence.",
    rating: 5.0,
    reviews: 23,
    available: true,
    dealership: "Rolls-Royce Motor Cars",
    location: "Beverly Hills, CA",
    vin: "SCA665C50MEX12345",
    warranty: "4 years / unlimited miles",
    financing: {
      apr: 7.9,
      monthlyPayment: 7750,
      downPayment: 90000,
      term: 60
    }
  },
  {
    id: 14,
    make: "Maserati",
    model: "MC20",
    year: 2024,
    price: 285000,
    category: "Supercar",
    mileage: 50,
    transmission: "8-Speed Dual-Clutch",
    fuel: "Gasoline",
    drivetrain: "RWD",
    engine: "3.0L V6 Twin-Turbo",
    horsepower: 621,
    acceleration: "2.9s 0-60mph",
    topSpeed: "202 mph",
    mpg: { city: 15, highway: 25, combined: 18 },
    seats: 2,
    colors: [
      { name: "Bianco Audace", hex: "#F8F8F8" },
      { name: "Blu Infinito", hex: "#000080" },
      { name: "Rosso Vincente", hex: "#CC0000" },
      { name: "Nero Enigma", hex: "#000000" },
      { name: "Giallo Genio", hex: "#FFD700" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200",
        "https://images.unsplash.com/photo-1614162691292-a743b89ae1ee?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616788494672-ec7ca25fdde9?w=1200"
      ]
    },
    features: {
      safety: ["6 Airbags", "Stability Control", "Hill Hold Control", "Rear Parking Sensors", "Tyre Pressure Monitoring"],
      technology: ["10.25-inch Display", "Maserati Touch Control", "Wireless Charging", "Maserati Connect", "Drive Mode Selector"],
      comfort: ["Carbon Fiber Seats", "Alcantara Interior", "Dual-Zone Climate", "Lifting System", "Butterfly Doors"],
      entertainment: ["Premium Audio", "Apple CarPlay", "Android Auto", "Bluetooth", "Voice Control"]
    },
    description: "Italian supercar marking Maserati's return to racing excellence.",
    rating: 4.7,
    reviews: 28,
    available: true,
    dealership: "Maserati of San Francisco",
    location: "San Francisco, CA",
    vin: "ZAM58RTA8N0367890",
    warranty: "3 years / unlimited miles",
    financing: {
      apr: 6.8,
      monthlyPayment: 4900,
      downPayment: 57000,
      term: 60
    }
  },
  {
    id: 15,
    make: "Genesis",
    model: "G90",
    year: 2024,
    price: 95000,
    category: "Luxury Sedan",
    mileage: 0,
    transmission: "8-Speed Automatic",
    fuel: "Gasoline",
    drivetrain: "AWD",
    engine: "3.5L V6 Twin-Turbo",
    horsepower: 409,
    acceleration: "5.1s 0-60mph",
    topSpeed: "155 mph",
    mpg: { city: 18, highway: 26, combined: 21 },
    seats: 5,
    colors: [
      { name: "Vik Black", hex: "#000000" },
      { name: "Uyuni White", hex: "#FFFFFF" },
      { name: "Makalu Gray", hex: "#52595D" },
      { name: "Tasman Blue", hex: "#2C5282" },
      { name: "Cavendish Red", hex: "#800020" }
    ],
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1669273009036-b7543ec95047?w=1200",
        "https://images.unsplash.com/photo-1703912549221-7b9457fe23a7?w=1200"
      ],
      interior: [
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=1200"
      ]
    },
    features: {
      safety: ["Highway Driving Assist 2", "Remote Smart Parking", "Blind-Spot View Monitor", "Forward Collision-Avoidance", "Safe Exit Assist"],
      technology: ["Dual 12.3-inch Displays", "Fingerprint Authentication", "OTA Updates", "Genesis Digital Key", "AR Navigation"],
      comfort: ["Ergo Motion Seats", "Bang & Olufsen Audio", "Mood Curator", "Active Noise Control", "Smart Climate"],
      entertainment: ["27-inch OLED Rear Display", "Wireless Device Charging", "Apple CarPlay", "Android Auto", "Genesis Connected Services"]
    },
    description: "Korean luxury redefined with cutting-edge technology and refined comfort.",
    rating: 4.6,
    reviews: 145,
    available: true,
    dealership: "Genesis Motor America",
    location: "Fountain Valley, CA",
    vin: "KMTG94LA0RU123456",
    warranty: "5 years / 60,000 miles",
    financing: {
      apr: 3.9,
      monthlyPayment: 1630,
      downPayment: 19000,
      term: 60
    }
  }
];

export const dealerships = [
  {
    id: 1,
    name: "Beverly Hills Mercedes",
    location: "Los Angeles, CA",
    address: "9250 Beverly Blvd, Beverly Hills, CA 90210",
    rating: 4.8,
    reviews: 567,
    phone: "(310) 555-0100",
    email: "sales@beverlyhillsmercedes.com",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 6:00 PM"
    },
    services: ["Sales", "Service", "Parts", "Finance", "Certified Pre-Owned"],
    brands: ["Mercedes-Benz", "Mercedes-AMG", "Mercedes-Maybach"],
    specialOffers: true,
    virtualTour: true
  },
  {
    id: 2,
    name: "Manhattan BMW",
    location: "New York, NY",
    address: "555 West 57th Street, New York, NY 10019",
    rating: 4.7,
    reviews: 432,
    phone: "(212) 555-0200",
    email: "info@manhattanbmw.com",
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "11:00 AM - 5:00 PM"
    },
    services: ["Sales", "Service", "Parts", "Finance", "Certified Pre-Owned", "M Performance"],
    brands: ["BMW", "BMW M", "BMW i"],
    specialOffers: true,
    virtualTour: true
  },
  {
    id: 3,
    name: "Porsche Miami",
    location: "Miami, FL",
    address: "8650 Bird Road, Miami, FL 33155",
    rating: 4.9,
    reviews: 289,
    phone: "(305) 555-0300",
    email: "contact@porschemiami.com",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "12:00 PM - 5:00 PM"
    },
    services: ["Sales", "Service", "Parts", "Finance", "Track Experience", "Porsche Exclusive"],
    brands: ["Porsche"],
    specialOffers: true,
    virtualTour: true
  }
];

export const carCategories = [
  "All",
  "Luxury Sedan",
  "Performance Sedan",
  "Sports Car",
  "Electric Sedan",
  "Electric Sports",
  "Supercar",
  "Luxury SUV",
  "Performance SUV",
  "Grand Tourer",
  "Ultra-Luxury"
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100k", min: 0, max: 100000 },
  { label: "$100k - $200k", min: 100000, max: 200000 },
  { label: "$200k - $300k", min: 200000, max: 300000 },
  { label: "$300k - $400k", min: 300000, max: 400000 },
  { label: "$400k+", min: 400000, max: Infinity }
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "year-new", label: "Year: Newest First" },
  { value: "mileage-low", label: "Mileage: Low to High" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "rating-high", label: "Rating: Highest First" }
];

export const financingOptions = [
  { term: 24, label: "24 months" },
  { term: 36, label: "36 months" },
  { term: 48, label: "48 months" },
  { term: 60, label: "60 months" },
  { term: 72, label: "72 months" },
  { term: 84, label: "84 months" }
];

export const searchFilters = {
  makes: [...new Set(carsDatabase.map(car => car.make))].sort(),
  fuelTypes: ["All", "Gasoline", "Hybrid", "Mild Hybrid", "Electric"],
  transmissions: ["All", "Automatic", "Manual", "Dual-Clutch", "Single-Speed", "CVT"],
  drivetrains: ["All", "FWD", "RWD", "AWD", "4WD", "Quattro AWD"],
  seats: ["All", "2", "4", "5", "7", "8"],
  features: [
    "Autopilot",
    "Massage Seats",
    "Panoramic Roof",
    "Night Vision",
    "Head-Up Display",
    "Apple CarPlay",
    "Android Auto",
    "Wireless Charging",
    "360° Camera",
    "Adaptive Cruise Control"
  ]
};