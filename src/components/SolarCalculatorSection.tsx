import React, { useState, useId } from 'react';
import { 
  Zap, 
  IndianRupee, 
  Leaf, 
  Clock, 
  ArrowRight, 
  SlidersHorizontal,
  BadgePercent,
  CheckCircle2,
  Building2,
  Home
} from 'lucide-react';
import { SegmentMode, SolarCalculation } from '../types/solar';
import { INDIAN_STATES, calculateSolarMetrics, formatInr } from '../utils/solarCalculator';

interface SolarCalculatorSectionProps {
  segment: SegmentMode;
  onSegmentChange: (seg: SegmentMode) => void;
  onOpenAuditModalWithData: (calc: SolarCalculation, bill: number) => void;
}

export const SolarCalculatorSection: React.FC<SolarCalculatorSectionProps> = ({
  segment,
  onSegmentChange,
  onOpenAuditModalWithData,
}) => {
  const billInputId = useId();
  const areaInputId = useId();
  const stateSelectId = useId();

  // Inputs state
  const [monthlyBill, setMonthlyBill] = useState<number>(segment === 'residential' ? 6500 : 85000);
  const [roofArea, setRoofArea] = useState<number>(segment === 'residential' ? 800 : 8000);
  const [selectedStateId, setSelectedStateId] = useState<string>('ka');

  // When segment changes, adjust reasonable default ranges
  const handleSegmentSwitch = (newSeg: SegmentMode) => {
    onSegmentChange(newSeg);
    if (newSeg === 'residential') {
      setMonthlyBill(6500);
      setRoofArea(800);
    } else {
      setMonthlyBill(85000);
      setRoofArea(8000);
    }
  };

  // Compute live calculations
  const calc: SolarCalculation = calculateSolarMetrics(monthlyBill, roofArea, segment, selectedStateId);
  const selectedState = INDIAN_STATES.find(s => s.id === selectedStateId) || INDIAN_STATES[0];

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-[#e1f2e4]/40 border-y border-[#c0c9be]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-2">
            <span>Engineering Financial Model</span>
            <span aria-hidden="true">·</span>
            <span>MNRE & PM Surya Ghar Subsidy Updated</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111e16] tracking-tight text-balance">
            Interactive Solar ROI & Rooftop Area Estimator
          </h2>
          <p className="mt-3 text-base text-[#404941]">
            Simulate your rooftop solar generation yield, financial payback period, and central government subsidy using real state DISCOM tariff schedules.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#c0c9be] p-6 sm:p-8 shadow-sm">
            
            {/* Segment Selector inside calculator */}
            <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0]">
              <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">Property Category</span>
              <div className="inline-flex p-1 bg-[#edfeef] border border-[#c0c9be]/60 rounded-xl">
                <button
                  type="button"
                  onClick={() => handleSegmentSwitch('residential')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    segment === 'residential' ? 'bg-[#003b1b] text-white shadow-sm' : 'text-[#404941] hover:text-[#003b1b]'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Residential</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSegmentSwitch('commercial')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    segment === 'commercial' ? 'bg-[#003b1b] text-white shadow-sm' : 'text-[#404941] hover:text-[#003b1b]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial & Industrial</span>
                </button>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              
              {/* State & DISCOM Selector */}
              <div>
                <label htmlFor={stateSelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#404941] mb-2">
                  State & Electrical DISCOM
                </label>
                <select
                  id={stateSelectId}
                  value={selectedStateId}
                  onChange={(e) => setSelectedStateId(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-white border border-[#c0c9be] text-[#111e16] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all shadow-sm"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st.id} value={st.id}>
                      {st.name} — {st.discom} (Avg Tariff: ₹{segment === 'residential' ? st.residentialTariffPerKwh : st.commercialTariffPerKwh}/kWh)
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Electricity Bill Slider */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={billInputId} className="text-xs font-semibold uppercase tracking-wider text-[#404941]">
                    Average Monthly Electricity Bill
                  </label>
                  <div className="text-lg font-bold text-[#003b1b] font-mono tabular-nums">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </div>
                </div>

                <input
                  id={billInputId}
                  type="range"
                  min={segment === 'residential' ? 2000 : 15000}
                  max={segment === 'residential' ? 40000 : 400000}
                  step={segment === 'residential' ? 500 : 5000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-[#d6e7d8] rounded-lg appearance-none cursor-pointer accent-[#003b1b]"
                  aria-label="Monthly Electricity Bill"
                />

                <div className="flex justify-between text-[11px] text-[#64748b] mt-1.5 font-mono">
                  <span>₹{segment === 'residential' ? '2,000' : '15,000'}</span>
                  <span>Mid: ₹{segment === 'residential' ? '20,000' : '200,000'}</span>
                  <span>₹{segment === 'residential' ? '40,000+' : '4,00,000+'}</span>
                </div>
              </div>

              {/* Shadow-Free Rooftop Area Slider */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={areaInputId} className="text-xs font-semibold uppercase tracking-wider text-[#404941]">
                    Usable Rooftop Area (Shadow-Free)
                  </label>
                  <div className="text-lg font-bold text-[#003b1b] font-mono tabular-nums">
                    {roofArea.toLocaleString('en-IN')} <span className="text-xs text-[#64748b] font-sans">sq. ft.</span>
                  </div>
                </div>

                <input
                  id={areaInputId}
                  type="range"
                  min={segment === 'residential' ? 200 : 1000}
                  max={segment === 'residential' ? 3500 : 35000}
                  step={segment === 'residential' ? 50 : 500}
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#d6e7d8] rounded-lg appearance-none cursor-pointer accent-[#003b1b]"
                  aria-label="Usable Rooftop Area"
                />

                <div className="flex justify-between text-[11px] text-[#64748b] mt-1.5 font-mono">
                  <span>{segment === 'residential' ? '200 sq.ft' : '1,000 sq.ft'}</span>
                  <span>Needed: ~{calc.roofAreaRequiredSqFt} sq.ft</span>
                  <span>{segment === 'residential' ? '3,500 sq.ft' : '35,000 sq.ft'}</span>
                </div>
              </div>

              {/* Rooftop area feasibility prompt */}
              <div className="p-3.5 rounded-xl bg-[#edfeef] border border-[#c0c9be]/60 flex items-start gap-3 text-xs text-[#404941]">
                <CheckCircle2 className="w-4 h-4 text-[#22a447] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#111e16]">Roof Space Feasibility: </span>
                  {roofArea >= calc.roofAreaRequiredSqFt ? (
                    <span>
                      Sufficient area! A <strong className="text-[#003b1b]">{calc.systemSizeKwp} kWp</strong> system fits comfortably inside your {roofArea} sq.ft rooftop footprint (utilizing ~{calc.roofAreaRequiredSqFt} sq.ft).
                    </span>
                  ) : (
                    <span>
                      Rooftop constrained: System scaled to fit available {roofArea} sq.ft space (max ~{calc.systemSizeKwp} kWp).
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Calculated Metrics & Financial Outcomes */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#c0c9be] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            
            <div>
              {/* Header block */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                <div>
                  <span className="text-xs font-semibold text-[#006e29] uppercase tracking-wider">Recommended System</span>
                  <div className="text-3xl font-extrabold text-[#111e16] font-mono tabular-nums mt-0.5">
                    {calc.systemSizeKwp} <span className="text-base font-sans font-semibold text-[#64748b]">kWp Solar</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-[#64748b]">Est. Payback</span>
                  <div className="text-xl font-bold text-[#003b1b] font-mono tabular-nums">
                    {calc.paybackYears} <span className="text-xs font-sans font-medium text-[#64748b]">Years</span>
                  </div>
                </div>
              </div>

              {/* Grid Offset Linear Progress Component */}
              <div className="my-6 p-4 rounded-xl bg-[#edfeef] border border-[#c0c9be]/50">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-[#404941]">Monthly Grid Bill Offset</span>
                  <span className="text-[#006e29] font-mono tabular-nums font-bold">{calc.gridOffsetPercentage}% Offset</span>
                </div>
                
                {/* Solar Generation & Savings Bar */}
                <div className="w-full h-3 rounded-full bg-[#e2e8f0] overflow-hidden p-0.5">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#22a447] to-[#facc15] transition-all duration-300"
                    style={{ width: `${calc.gridOffsetPercentage}%` }}
                  />
                </div>

                <div className="flex justify-between text-[11px] text-[#64748b] mt-2">
                  <span>Current Bill: ₹{monthlyBill.toLocaleString('en-IN')}/mo</span>
                  <span className="text-[#003b1b] font-semibold">New Bill: ~₹{Math.max(150, Math.round(monthlyBill - calc.monthlySavingsInr)).toLocaleString('en-IN')}/mo</span>
                </div>
              </div>

              {/* Financial Metrics Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Monthly Savings */}
                <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-1">
                    <IndianRupee className="w-3.5 h-3.5 text-[#22a447]" />
                    <span>Monthly Savings</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111e16] font-mono tabular-nums">
                    ₹{calc.monthlySavingsInr.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-[#006e29] font-medium mt-0.5">
                    ~{formatInr(calc.annualSavingsInr)} / year
                  </div>
                </div>

                {/* Government Subsidy / Tax Shield */}
                <div className="p-4 rounded-xl bg-[#fefce8] border border-[#facc15]/60 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#854d0e] mb-1">
                    <BadgePercent className="w-3.5 h-3.5 text-[#735c00]" />
                    <span>{segment === 'residential' ? 'Govt DBT Subsidy' : 'Tax Shield / Depr.'}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#735c00] font-mono tabular-nums">
                    {formatInr(calc.subsidyInr)}
                  </div>
                  <div className="text-[11px] text-[#735c00] font-medium mt-0.5">
                    {segment === 'residential' ? 'PM Surya Ghar Direct Credit' : '40% Year-1 Tax Shield'}
                  </div>
                </div>

                {/* Net Outlay Cost */}
                <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-1">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#003b1b]" />
                    <span>Estimated Net Outlay</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111e16] font-mono tabular-nums">
                    {formatInr(calc.netCostInr)}
                  </div>
                  <div className="text-[11px] text-[#64748b] mt-0.5">
                    Turnkey EPC with net-metering
                  </div>
                </div>

                {/* 25-Year Cumulative Savings */}
                <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#006e29]" />
                    <span>25-Year Net Savings</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#006e29] font-mono tabular-nums">
                    {formatInr(calc.lifetimeSavingsInr)}
                  </div>
                  <div className="text-[11px] text-[#64748b] mt-0.5">
                    Net profit after recovery
                  </div>
                </div>

              </div>

              {/* Environmental Impact Indicator */}
              <div className="flex items-center justify-between text-xs text-[#404941] p-3 rounded-lg bg-[#edfeef] border border-[#c0c9be]/40 mb-6">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#22a447]" />
                  <span>CO₂ Avoided: <strong className="font-mono text-[#111e16]">{calc.co2OffsetTonsPerYear} Metric Tons/yr</strong></span>
                </div>
                <div className="text-right">
                  <span>Equivalent to <strong className="font-mono text-[#003b1b]">{calc.treesEquivalent} Teak Trees</strong> planted</span>
                </div>
              </div>

            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenAuditModalWithData(calc, monthlyBill)}
              className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#003b1b] hover:bg-[#14532d] active:scale-[0.99] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book Rooftop Audit for {calc.systemSizeKwp} kWp System</span>
              <ArrowRight className="w-4 h-4 text-[#facc15]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
