import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types/solar';
import { ArrowUpRight, CheckCircle2, MapPin, X, Building, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { formatInr } from '../utils/solarCalculator';

interface CaseStudiesSectionProps {
  onOpenAuditModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAuditModal }) => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential' | 'institutional'>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = CASE_STUDIES.filter(study => {
    if (filter === 'all') return true;
    return study.segment === filter;
  });

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#edfeef] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-2">
              <span>Verified Commissioned Projects</span>
              <span aria-hidden="true">·</span>
              <span>Audited Generation Data</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111e16] tracking-tight text-balance">
              Proven Infrastructure in the Field
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="inline-flex p-1 bg-[#d6e7d8]/80 border border-[#c0c9be] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'all' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              All Projects ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'commercial' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              Commercial / Industrial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'residential' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              Residential Villas
            </button>
            <button
              onClick={() => setFilter('institutional')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'institutional' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941] hover:text-[#003b1b]'
              }`}
            >
              Healthcare & Institutional
            </button>
          </div>
        </div>

        {/* Project Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-[#c0c9be] overflow-hidden flex flex-col justify-between hover:border-[#22a447] transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              {/* Card Media Header: Architectural Schematic Representation */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#003b1b] via-[#14532d] to-[#0d3419] p-5 flex flex-col justify-between overflow-hidden">
                {/* Subtle Geometric Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`card-pattern-${study.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#82fc92" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#card-pattern-${study.id})`} />
                </svg>

                {/* Top Badge Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm text-white/90 uppercase">
                    {study.segment}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#facc15] bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    {study.capacityKwp} kWp Installed
                  </span>
                </div>

                {/* Bottom Highlight inside card banner */}
                <div className="relative z-10">
                  <div className="text-xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {study.highlightStat}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#82fc92]" />
                    <span>{study.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#111e16] mb-2 group-hover:text-[#003b1b] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#404941] line-clamp-3 mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Quantitative Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#e2e8f0] text-xs">
                    <div>
                      <span className="text-[#64748b] block text-[11px]">Annual Yield</span>
                      <strong className="font-mono text-[#111e16] tabular-nums">
                        {(study.annualGenerationKwh / 1000).toFixed(0)}k kWh/yr
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#64748b] block text-[11px]">Payback Period</span>
                      <strong className="font-mono text-[#006e29] tabular-nums">
                        {study.paybackAchievedYears} Years
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#64748b] block text-[11px]">CO₂ Avoided</span>
                      <strong className="font-mono text-[#111e16] tabular-nums">
                        {study.co2SavedTonsPerYear} Tons/yr
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#64748b] block text-[11px]">Commissioned</span>
                      <strong className="font-mono text-[#111e16]">
                        {study.commissionedYear}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalStudy(study)}
                    className="text-xs font-bold text-[#003b1b] hover:text-[#006e29] flex items-center gap-1"
                  >
                    <span>View Engineering Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenAuditModal}
                    className="px-3 py-1.5 text-xs font-semibold text-[#003b1b] bg-[#edfeef] hover:bg-[#d6e7d8] rounded-lg transition-colors"
                  >
                    Similar Roof
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Engineering Specs Detail Modal */}
      {activeModalStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl border border-[#c0c9be] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#64748b] hover:text-[#111e16] hover:bg-[#edfeef] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-6">
              <span className="text-xs font-semibold text-[#006e29] uppercase tracking-wider block mb-1">
                Project Engineering Telemetry
              </span>
              <h3 className="text-2xl font-bold text-[#111e16]">{activeModalStudy.title}</h3>
              <div className="flex items-center gap-2 text-xs text-[#64748b] mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#006e29]" />
                <span>{activeModalStudy.location}</span>
                <span aria-hidden="true">·</span>
                <span>Client: {activeModalStudy.client}</span>
              </div>
            </div>

            {/* Core Stats Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#edfeef] border border-[#c0c9be]/50 mb-6 text-center">
              <div>
                <span className="text-[11px] text-[#64748b] block">System Capacity</span>
                <span className="text-xl font-bold font-mono text-[#003b1b] tabular-nums">
                  {activeModalStudy.capacityKwp} kWp
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#64748b] block">Annual Bill Saved</span>
                <span className="text-xl font-bold font-mono text-[#006e29] tabular-nums">
                  {formatInr(activeModalStudy.annualSavingsInr)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#64748b] block">Capital Payback</span>
                <span className="text-xl font-bold font-mono text-[#735c00] tabular-nums">
                  {activeModalStudy.paybackAchievedYears} Yrs
                </span>
              </div>
            </div>

            {/* Deep Technical Spec Breakdown */}
            <div className="space-y-4 mb-6 text-sm">
              <div className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
                <div className="flex items-center gap-2 font-semibold text-[#111e16] mb-1">
                  <Zap className="w-4 h-4 text-[#facc15]" />
                  <span>Photovoltaic Modules Specified</span>
                </div>
                <p className="text-xs text-[#404941]">{activeModalStudy.moduleType}</p>
              </div>

              <div className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
                <div className="flex items-center gap-2 font-semibold text-[#111e16] mb-1">
                  <Wrench className="w-4 h-4 text-[#006e29]" />
                  <span>Inverter & Electrical Synchronization</span>
                </div>
                <p className="text-xs text-[#404941]">{activeModalStudy.inverterBrand}</p>
              </div>

              <div className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
                <div className="flex items-center gap-2 font-semibold text-[#111e16] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#003b1b]" />
                  <span>Engineering Innovation & Execution</span>
                </div>
                <p className="text-xs text-[#404941]">{activeModalStudy.keyFeature}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#e2e8f0]">
              <button
                onClick={() => {
                  setActiveModalStudy(null);
                  onOpenAuditModal();
                }}
                className="w-full sm:flex-1 py-3 px-4 font-bold text-sm text-white bg-[#003b1b] hover:bg-[#14532d] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book Similar Installation Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#facc15]" />
              </button>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="w-full sm:w-auto py-3 px-5 text-sm font-semibold text-[#404941] hover:text-[#111e16] rounded-xl hover:bg-[#edfeef] transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
