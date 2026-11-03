import React from 'react';
import { ArrowRight, Sun, Zap, ShieldCheck, Building2, Home } from 'lucide-react';
import { SegmentMode } from '../types/solar';

interface HeroSectionProps {
  segment: SegmentMode;
  onSegmentChange: (seg: SegmentMode) => void;
  onOpenAuditModal: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  segment,
  onSegmentChange,
  onOpenAuditModal,
  onScrollToCalculator,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Segment Switcher */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex p-1 bg-[#d6e7d8]/70 border border-[#c0c9be]/60 rounded-xl" role="tablist">
            <button
              role="tab"
              aria-selected={segment === 'residential'}
              onClick={() => onSegmentChange('residential')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                segment === 'residential'
                  ? 'bg-white text-[#003b1b] shadow-sm'
                  : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              <Home className="w-4 h-4 text-[#22a447]" />
              <span>Residential Luxury Rooftops</span>
            </button>
            <button
              role="tab"
              aria-selected={segment === 'commercial'}
              onClick={() => onSegmentChange('commercial')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                segment === 'commercial'
                  ? 'bg-white text-[#003b1b] shadow-sm'
                  : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#006e29]" />
              <span>Commercial & Industrial (C&I)</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Content & Architectural Visual Carrier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] mb-3 tracking-wider uppercase">
              <span>MNRE Registered EPC Partner</span>
              <span aria-hidden="true">·</span>
              <span>ISO 9001:2015 Certified</span>
              <span aria-hidden="true">·</span>
              <span>Tier-1 Bifacial TOPCon</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111e16] tracking-tight leading-[1.15] text-balance mb-6">
              {segment === 'residential' ? (
                <>
                  Engineered Rooftop Solar for <span className="text-[#003b1b]">Luxury Living</span> & Total Bill Elimination.
                </>
              ) : (
                <>
                  High-Yield Industrial Solar <span className="text-[#003b1b]">Infrastructure</span> for Enterprise OPEX Immunity.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#404941] leading-relaxed max-w-2xl mb-8">
              {segment === 'residential' ? (
                <>
                  Turn your private villa terrace into a perpetual clean energy asset. We combine German-spec structural mounting, Tier-1 bi-facial photovoltaic glass, and turnkey PM Surya Ghar government subsidy processing.
                </>
              ) : (
                <>
                  Deploy MW-scale factory shed and distributed campus solar arrays. Maximize accelerated depreciation, offset escalating grid tariffs, and secure guaranteed 25-year performance with SCADA string telemetry.
                </>
              )}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenAuditModal}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#003b1b] hover:bg-[#14532d] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <span>Book Certified Rooftop Audit</span>
                <ArrowRight className="w-4 h-4 text-[#facc15]" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#003b1b] bg-white border border-[#c0c9be] hover:border-[#22a447] hover:bg-[#f0fdf4] active:scale-[0.98] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-center"
              >
                <Zap className="w-4 h-4 text-[#22a447]" />
                <span>Calculate My Solar ROI</span>
              </button>
            </div>

            {/* Subtle trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#404941] pt-4 border-t border-[#c0c9be]/50">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#22a447]" />
                <span>25-Year Linear Power Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-[#735c00]" />
                <span>Zero DISCOM Net-Metering Hassle</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-semibold text-[#111e16]">₹78,000</span>
                <span>Max Direct DBT Subsidy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Visual Carrier */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full bg-white rounded-2xl border border-[#c0c9be] p-5 shadow-sm relative overflow-hidden">
              
              {/* Card Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#006e29]">
                    {segment === 'residential' ? 'Architectural Solar Pergola' : 'Mega-Watt Industrial Shed Array'}
                  </span>
                  <p className="text-sm font-bold text-[#111e16]">
                    {segment === 'residential' ? 'Residential 15 kWp Bifacial Spec' : 'Industrial 480 kWp Standing Seam'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#64748b]">Grid Offset</span>
                  <div className="text-base font-bold text-[#006e29] font-mono tabular-nums">96.8%</div>
                </div>
              </div>

              {/* Bespoke Architectural Vector Scene */}
              <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-[#14532d] via-[#1b4332] to-[#081c15] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Sun Glow */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#facc15]/25 blur-3xl pointer-events-none" />
                
                {/* Ambient Grid Lines representing engineered architectural schematics */}
                <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="solar-grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#82fc92" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#solar-grid-pattern)" />
                </svg>

                {/* Top Telemetry Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-white">
                    <span className="text-[10px] text-emerald-300 block uppercase font-mono">Real-Time Yield</span>
                    <span className="text-sm font-bold font-mono tabular-nums text-white flex items-center gap-1">
                      {segment === 'residential' ? '12.4 kW' : '394.2 kW'}
                      <span className="text-[10px] text-[#facc15]">PEAK</span>
                    </span>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-right">
                    <span className="text-[10px] text-white/70 block font-mono">Today's Generation</span>
                    <span className="text-sm font-bold font-mono tabular-nums text-[#82fc92]">
                      {segment === 'residential' ? '68.2 kWh' : '2,140 kWh'}
                    </span>
                  </div>
                </div>

                {/* Center Photovoltaic Array Illustration */}
                <div className="relative z-10 my-auto py-2">
                  <div className="grid grid-cols-4 gap-1.5 p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <div 
                        key={idx}
                        className="aspect-[3/4] rounded bg-gradient-to-br from-[#1e3a5f] to-[#0a1128] border border-[#60a5fa]/30 relative overflow-hidden group/cell flex flex-col justify-between p-1 shadow-sm"
                      >
                        <div className="w-full h-[1px] bg-[#93c5fd]/30" />
                        <div className="w-full h-[1px] bg-[#93c5fd]/30" />
                        <div className="w-full h-[1px] bg-[#93c5fd]/30" />
                        <div className="absolute inset-0 bg-[#38bdf8]/5 group-hover/cell:bg-[#38bdf8]/20 transition-colors" />
                        <span className="text-[8px] font-mono text-emerald-400 opacity-75">550W</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Spec Footer inside illustration */}
                <div className="relative z-10 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-2 rounded-lg flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#82fc92]" />
                    <span className="font-medium text-[11px]">DISCOM Net-Meter Connected</span>
                  </div>
                  <span className="font-mono text-[#facc15] font-semibold text-[11px]">415V 3-Phase Sync</span>
                </div>

              </div>

              {/* Quick specs under visual */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-[#e2e8f0] text-center">
                <div>
                  <div className="text-[11px] text-[#64748b]">Efficiency</div>
                  <div className="text-sm font-bold text-[#111e16] font-mono">22.8%</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b]">Wind Rating</div>
                  <div className="text-sm font-bold text-[#111e16] font-mono">150 km/h</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b]">Degradation</div>
                  <div className="text-sm font-bold text-[#111e16] font-mono">&lt;0.5%/yr</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Strip: 4-Column Proof Row */}
        <div className="mt-14 pt-8 border-t border-[#c0c9be]/60 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white/80 rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#003b1b] font-mono tabular-nums mb-1">
              28.4 MW+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#111e16]">Installed Infrastructure</div>
            <div className="text-xs text-[#64748b] mt-0.5">Across residential & C&I projects</div>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#006e29] font-mono tabular-nums mb-1">
              1,840+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#111e16]">Commissioned Systems</div>
            <div className="text-xs text-[#64748b] mt-0.5">Zero warranty defaults reported</div>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#735c00] font-mono tabular-nums mb-1">
              ₹42+ Cr
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#111e16]">Client Power Bill Savings</div>
            <div className="text-xs text-[#64748b] mt-0.5">Compound savings since 2018</div>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14532d] font-mono tabular-nums mb-1">
              25 Years
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#111e16]">Performance Guarantee</div>
            <div className="text-xs text-[#64748b] mt-0.5">Backed by Tier-1 manufacturer bonds</div>
          </div>
        </div>

      </div>
    </section>
  );
};
