export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  monthlyPrice?: number;
  image: string;
  gallery?: string[];
  type: 'electric' | 'hybrid' | 'luxury' | 'sport' | 'suv';
  category: 'premium' | 'ultra-luxury' | 'exclusive';
  range?: number;
  fuelEconomy?: string;
  acceleration: string;
  topSpeed: number;
  horsepower: number;
  torque: number;
  transmission: string;
  drivetrain: string;
  seating: number;
  features: string[];
  premiumFeatures?: string[];
  description: string;
  availability: 'in-stock' | 'limited' | 'pre-order' | 'sold-out';
  deliveryTime?: string;
  warranty?: string;
  colors: VehicleColor[];
  interiorOptions?: InteriorOption[];
  packages?: Package[];
  specifications: Specifications;
  dimensions?: Dimensions;
  performance?: Performance;
  safety?: SafetyFeatures;
  technology?: TechnologyFeatures;
  rating?: number;
  reviews?: number;
}

export interface VehicleColor {
  name: string;
  hex: string;
  price?: number;
  image?: string;
}

export interface InteriorOption {
  name: string;
  material: string;
  color: string;
  price: number;
  image?: string;
}

export interface Package {
  name: string;
  price: number;
  features: string[];
  description: string;
}

export interface Specifications {
  engine?: string;
  battery?: string;
  motor?: string;
  charging?: string;
  wheels?: string;
  brakes?: string;
  suspension?: string;
}

export interface Dimensions {
  length: string;
  width: string;
  height: string;
  wheelbase: string;
  weight: string;
}

export interface Performance {
  zeroToSixty: string;
  quarterMile?: string;
  topTrackSpeed?: string;
  brakingDistance?: string;
}

export interface SafetyFeatures {
  airbags: number;
  abs: boolean;
  stabilityControl: boolean;
  tractionControl: boolean;
  blindSpotMonitoring?: boolean;
  laneKeepAssist?: boolean;
  adaptiveCruiseControl?: boolean;
  automaticEmergencyBraking?: boolean;
  rating?: string;
}

export interface TechnologyFeatures {
  infotainmentScreen: string;
  soundSystem: string;
  connectivity: string[];
  driverAssistance: string[];
  keylessEntry: boolean;
  remoteStart?: boolean;
  mobileApp?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  preferences?: UserPreferences;
  savedVehicles?: string[];
  testDrives?: TestDrive[];
  purchases?: Purchase[];
}

export interface UserPreferences {
  priceRange?: [number, number];
  vehicleTypes?: string[];
  brands?: string[];
  features?: string[];
}

export interface TestDrive {
  vehicleId: string;
  date: string;
  time: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Purchase {
  vehicleId: string;
  date: string;
  price: number;
  financing?: FinancingDetails;
  tradeIn?: TradeInDetails;
  status: 'pending' | 'processing' | 'completed' | 'delivered';
}

export interface FinancingDetails {
  type: 'cash' | 'loan' | 'lease';
  downPayment?: number;
  monthlyPayment?: number;
  term?: number;
  apr?: number;
}

export interface TradeInDetails {
  make: string;
  model: string;
  year: number;
  value: number;
}

export interface CartItem {
  vehicle: Vehicle;
  color: VehicleColor;
  interior?: InteriorOption;
  packages?: Package[];
  quantity: number;
}