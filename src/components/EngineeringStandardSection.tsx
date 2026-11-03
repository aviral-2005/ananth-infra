import React from 'react';
import { ShieldCheck, Wind, Award, Zap, FileCheck, CheckCircle2 } from 'lucide-react';

export const EngineeringStandardSection: React.FC = () => {
  const standards = [
    {
      icon: <Wind className="w-5 h-5 text-[#22a447]" />,
      title: '150 km/h Structural Wind-Load Rating',
      subtitle: 'Hot-Dip Galvanized (HDG) Steel',
      description: 'Custom structural frames hot-dip galvanized with minimum 80-micron zinc coating, certified to withstand severe coastal cyclones and heavy monsoon weather without corrosion for 30+ years.',
      metric: '80µm Zinc',
    },
    {
      icon: <Award className="w-5 h-5 text-[#facc15]" />,
      title: 'ALMM & MNRE Tier-1 Modules',
      subtitle: 'Pure Silicon TOPCon & N-Type',
      description: 'We only deploy Approved List of Models and Manufacturers (ALMM) certified modules from global Tier-1 manufacturers, guaranteeing positive power tolerance and low light performance.',
      metric: 'Tier-1 BOM',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#006e29]" />,
      title: 'AFCI Arc Fault & Dual SPD Protection',
      subtitle: 'European & Japanese Inverters',
      description: 'Integrated Arc Fault Circuit Interruption (AFCI) that snuffs electrical arcs within 0.25 seconds. Dual Type-II DC & AC Surge Protection Devices protect expensive electronics from lightning strikes.',
      metric: '<0.25s Trip',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#003b1b]" />,
      title: 'Turnkey DISCOM Net-Metering Liaison',
      subtitle: 'Zero Bureaucracy for Client',
      description: 'Our in-house regulatory team manages 100% of the DISCOM paperwork, technical feasibility sanction, CEIG / Electrical Inspectorate approvals, and bi-directional solar meter commissioning.',
      metric: '100% Turnkey',
    },
  ];

  return (
    <section id="engineering" className="py-16 lg:py-24 bg-white border-t border-[#c0c9be]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-2">
            <span>Rigorous EPC Benchmarks</span>
            <span aria-hidden="true">·</span>
            <span>Zero Shortcut Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111e16] tracking-tight text-balance">
            Engineered to Outlast 25 Monsoon Seasons
          </h2>
          <p className="mt-3 text-base text-[#404941]">
            A solar power system is a quarter-century infrastructural investment. We refuse cost-cutting shortcuts—every anchor, cable, inverter, and surge protection device meets the highest industrial standards.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#edfeef]/60 border border-[#c0c9be] flex flex-col justify-between hover:bg-[#edfeef] hover:border-[#22a447] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#c0c9be] flex items-center justify-center shadow-xs">
                    {std.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#003b1b] bg-white px-2 py-0.5 rounded border border-[#c0c9be]">
                    {std.metric}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-1">
                  {std.subtitle}
                </div>
                <h3 className="text-base font-bold text-[#111e16] mb-3">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#404941] leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#c0c9be]/50 flex items-center gap-2 text-xs font-semibold text-[#003b1b]">
                <CheckCircle2 className="w-4 h-4 text-[#22a447]" />
                <span>Standard in Every Contract</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Comparison Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#14532d] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-mono text-[#82fc92] uppercase tracking-wider block mb-1">
                The Ananth Difference
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Why Discerning Clients Choose Ananth Infra
              </h3>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/90">
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10">
                <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <span className="text-[#82fc92]">✓</span> Ananth Engineering
                </div>
                <p className="text-white/80">
                  Custom aerodynamic structural calculations; UV-resistant solar cables; lightning arresters with dedicated earth pits under 2 Ohms resistance.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10">
                <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <span className="text-red-400">✕</span> Cheap Market Assemblers
                </div>
                <p className="text-white/80">
                  Lightweight uncertified aluminum; substandard domestic wiring; ungrounded frames that fail during the second rainy season.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
