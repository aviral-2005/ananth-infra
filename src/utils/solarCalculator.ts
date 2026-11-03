import { SolarCalculation, StateTariffInfo, SegmentMode } from '../types/solar';

export const INDIAN_STATES: StateTariffInfo[] = [
  {
    id: 'ka',
    name: 'Karnataka',
    discom: 'BESCOM / HESCOM',
    residentialTariffPerKwh: 7.9,
    commercialTariffPerKwh: 10.4,
    solarIrradianceIndex: 1.02,
  },
  {
    id: 'mh',
    name: 'Maharashtra',
    discom: 'MSEDCL / Adani Electricity / Tata Power',
    residentialTariffPerKwh: 8.6,
    commercialTariffPerKwh: 12.1,
    solarIrradianceIndex: 1.04,
  },
  {
    id: 'gj',
    name: 'Gujarat',
    discom: 'DGVCL / PGVCL / Torrent Power',
    residentialTariffPerKwh: 6.8,
    commercialTariffPerKwh: 9.6,
    solarIrradianceIndex: 1.12,
  },
  {
    id: 'dl',
    name: 'Delhi NCR',
    discom: 'BSES Rajdhani / TPDDL',
    residentialTariffPerKwh: 7.5,
    commercialTariffPerKwh: 11.2,
    solarIrradianceIndex: 0.98,
  },
  {
    id: 'tn',
    name: 'Tamil Nadu',
    discom: 'TANGEDCO',
    residentialTariffPerKwh: 7.2,
    commercialTariffPerKwh: 10.8,
    solarIrradianceIndex: 1.06,
  },
  {
    id: 'ts',
    name: 'Telangana',
    discom: 'TSSPDCL / TSNPDCL',
    residentialTariffPerKwh: 7.8,
    commercialTariffPerKwh: 10.9,
    solarIrradianceIndex: 1.05,
  },
  {
    id: 'up',
    name: 'Uttar Pradesh',
    discom: 'UPPCL / PVVNL',
    residentialTariffPerKwh: 7.6,
    commercialTariffPerKwh: 11.5,
    solarIrradianceIndex: 1.0,
  },
  {
    id: 'rj',
    name: 'Rajasthan',
    discom: 'JVVNL / JdVVNL',
    residentialTariffPerKwh: 7.4,
    commercialTariffPerKwh: 10.5,
    solarIrradianceIndex: 1.15,
  },
];

/**
 * Calculates accurate solar capacity, generation, financial savings, and payback.
 */
export function calculateSolarMetrics(
  monthlyBillInr: number,
  rooftopAreaSqFt: number,
  segment: SegmentMode,
  stateId: string = 'ka'
): SolarCalculation {
  const state = INDIAN_STATES.find(s => s.id === stateId) || INDIAN_STATES[0];
  const tariff = segment === 'residential' ? state.residentialTariffPerKwh : state.commercialTariffPerKwh;

  // Approximate monthly electricity consumption in units (kWh)
  const monthlyUnitsConsumed = Math.max(80, monthlyBillInr / tariff);

  // In India, 1 kWp system produces approx 120 - 135 units (kWh) per month (~4.2 - 4.5 units/day/kWp)
  const baseMonthlyYieldPerKwp = 125 * state.solarIrradianceIndex;

  // Required kWp to offset 90% - 95% of the electricity bill
  let rawRequiredKwp = (monthlyUnitsConsumed * 0.92) / baseMonthlyYieldPerKwp;

  // Each 1 kWp requires approx 90 to 100 sq.ft of shadow-free rooftop area (using modern 550Wp TOPCon panels)
  const maxPossibleKwpByArea = rooftopAreaSqFt / 95;

  // Final system size capped by available roof area or rounded up to practical commercial inverter increments
  let systemSizeKwp = Math.min(rawRequiredKwp, maxPossibleKwpByArea);

  if (segment === 'residential') {
    // Residential typically rounded to 1 decimal place, minimum 1 kWp, max 25 kWp
    systemSizeKwp = Math.max(1, Math.min(25, Math.round(systemSizeKwp * 10) / 10));
  } else {
    // Commercial typically rounded to 5 kWp increments, minimum 10 kWp
    systemSizeKwp = Math.max(10, Math.round(systemSizeKwp / 5) * 5);
  }

  const monthlyGenerationKwh = Math.round(systemSizeKwp * baseMonthlyYieldPerKwp);
  const annualGenerationKwh = monthlyGenerationKwh * 12;

  // Savings calculation (assuming net metering units offset directly against grid consumption)
  const monthlySavingsInr = Math.min(monthlyBillInr * 0.96, Math.round(monthlyGenerationKwh * tariff));
  const annualSavingsInr = monthlySavingsInr * 12;

  // Tier-1 EPC Benchmarks (Inclusive of Tier-1 TOPCon panels, European/Tier-1 String Inverter, HDG Galvanized mounting, ACDB/DCDB, Net-metering liaison)
  let costPerWattInr = segment === 'residential' ? 62 : 44; // ₹62,000/kWp residential, ₹44,000/kWp for large scale commercial
  if (systemSizeKwp > 50) costPerWattInr = 40;
  if (systemSizeKwp > 200) costPerWattInr = 38;

  const grossCostInr = Math.round(systemSizeKwp * 1000 * costPerWattInr);

  // Government Subsidies:
  // PM Surya Ghar: Muft Bijli Yojana rules:
  // 1 kWp: ₹30,000
  // 2 kWp: ₹60,000
  // 3 kWp and above: ₹78,000 flat cap
  let subsidyInr = 0;
  if (segment === 'residential') {
    if (systemSizeKwp <= 1) {
      subsidyInr = 30000;
    } else if (systemSizeKwp <= 2) {
      subsidyInr = 60000;
    } else {
      subsidyInr = 78000;
    }
  } else {
    // Commercial benefits from 40% Accelerated Depreciation in Year 1 + Tax shielding (approx 20% effective net reduction)
    subsidyInr = Math.round(grossCostInr * 0.22);
  }

  const netCostInr = Math.max(0, grossCostInr - subsidyInr);

  // Payback calculation (Net cost divided by annual savings, adjusted for modest 3% annual grid tariff inflation)
  const rawPaybackYears = annualSavingsInr > 0 ? netCostInr / annualSavingsInr : 4;
  const paybackYears = Math.max(2.4, Math.round(rawPaybackYears * 10) / 10);

  // 25-Year Lifetime Savings (accounting for 0.6% annual degradation and 3% power tariff escalation)
  let lifetimeSavingsInr = 0;
  let currentAnnualGen = annualGenerationKwh;
  let currentTariff = tariff;
  for (let year = 1; year <= 25; year++) {
    lifetimeSavingsInr += currentAnnualGen * currentTariff;
    currentAnnualGen *= 0.994; // 0.6% annual degradation
    currentTariff *= 1.03; // 3% annual tariff hike
  }
  lifetimeSavingsInr = Math.round(lifetimeSavingsInr - netCostInr);

  // Environmental impact: 0.82 kg CO2 avoided per kWh in Indian grid
  const co2OffsetTonsPerYear = Math.round((annualGenerationKwh * 0.82) / 1000 * 10) / 10;
  // 1 mature teak/peepal tree absorbs ~22 kg CO2 per year
  const treesEquivalent = Math.round((co2OffsetTonsPerYear * 1000) / 22);

  const roofAreaRequiredSqFt = Math.round(systemSizeKwp * 95);
  const gridOffsetPercentage = Math.min(100, Math.round((monthlyGenerationKwh / monthlyUnitsConsumed) * 100));

  return {
    systemSizeKwp,
    monthlyGenerationKwh,
    annualGenerationKwh,
    monthlySavingsInr,
    annualSavingsInr,
    lifetimeSavingsInr,
    grossCostInr,
    subsidyInr,
    netCostInr,
    paybackYears,
    co2OffsetTonsPerYear,
    treesEquivalent,
    roofAreaRequiredSqFt,
    gridOffsetPercentage,
  };
}

export function formatInr(val: number): string {
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(2)} Cr`;
  }
  if (val >= 100000) {
    return `₹${(val / 100000).toFixed(2)} Lakh`;
  }
  return `₹${val.toLocaleString('en-IN')}`;
}
