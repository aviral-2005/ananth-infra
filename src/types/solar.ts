export type SegmentMode = 'residential' | 'commercial';

export type RoofType = 
  | 'rcc_flat' 
  | 'metal_shed' 
  | 'tiled_sloped' 
  | 'terrace_pergola';

export interface SolarCalculation {
  systemSizeKwp: number;
  monthlyGenerationKwh: number;
  annualGenerationKwh: number;
  monthlySavingsInr: number;
  annualSavingsInr: number;
  lifetimeSavingsInr: number;
  grossCostInr: number;
  subsidyInr: number;
  netCostInr: number;
  paybackYears: number;
  co2OffsetTonsPerYear: number;
  treesEquivalent: number;
  roofAreaRequiredSqFt: number;
  gridOffsetPercentage: number;
}

export interface StateTariffInfo {
  id: string;
  name: string;
  discom: string;
  residentialTariffPerKwh: number;
  commercialTariffPerKwh: number;
  solarIrradianceIndex: number; // e.g. 1.05 in Gujarat/Rajasthan, 0.98 in parts of south/north
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  segment: 'commercial' | 'residential' | 'institutional';
  capacityKwp: number;
  annualGenerationKwh: number;
  annualSavingsInr: number;
  paybackAchievedYears: number;
  co2SavedTonsPerYear: number;
  moduleType: string;
  inverterBrand: string;
  commissionedYear: number;
  description: string;
  keyFeature: string;
  highlightStat: string;
}

export interface AuditBookingLead {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  roofType: RoofType;
  monthlyBill: number;
  segment: SegmentMode;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
}
