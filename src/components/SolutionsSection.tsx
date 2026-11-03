import React from 'react';
import { Home, Factory, BatteryCharging, Wrench, Shield, ArrowUpRight, Cpu } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenAuditModal: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-2">
              <span>Full-Stack Photovoltaic Architecture</span>
              <span aria-hidden="true">·</span>
              <span>German-Spec Installation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111e16] tracking-tight text-balance">
              Engineered Solar Solutions Built for Decades
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#404941] max-w-md">
            From luxury terrace pergolas to MW-scale factory roofs, our turnkey EPC covers high-yield design, structural fabrication, net-metering liaison, and SCADA monitoring.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Residential Solar Pergolas (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl bg-[#edfeef] border border-[#c0c9be] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#22a447] transition-all">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#003b1b] text-white flex items-center justify-center shadow-sm">
                  <Home className="w-6 h-6 text-[#facc15]" />
                </div>
                <div className="text-xs font-semibold text-[#006e29] uppercase tracking-wider">
                  01. Residential Architecture
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111e16] mb-3">
                Architectural Solar Pergolas & Luxury Rooftops
              </h3>
              
              <p className="text-sm sm:text-base text-[#404941] leading-relaxed mb-6">
                Preserve usable terrace lifestyle space while producing 100% of your villa's power needs. Our elevated custom hot-dip galvanized pergolas integrate high-transmittance bifacial solar glass that shields rain and UV while generating high kilowatt yields.
              </p>

              {/* Unboxed metadata tags */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#404941] pt-4 border-t border-[#c0c9be]/60 mb-6">
                <span className="font-medium text-[#003b1b]">BIPV Dual-Glass</span>
                <span aria-hidden="true">·</span>
                <span>No Terrace Space Loss</span>
                <span aria-hidden="true">·</span>
                <span>PM Surya Ghar ₹78,000 Subsidy</span>
                <span aria-hidden="true">·</span>
                <span>25-Yr Performance Guarantee</span>
              </div>
            </div>

            <div className="relative z-10 pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#003b1b]">Typical Capacity: 5 kWp – 25 kWp</span>
              <button 
                onClick={onOpenAuditModal}
                className="text-xs font-bold text-[#003b1b] hover:text-[#006e29] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Audit My Villa Terrace</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Commercial & Industrial EPC (col-span-5) */}
          <div className="md:col-span-5 rounded-2xl bg-white border border-[#c0c9be] p-8 flex flex-col justify-between group hover:border-[#003b1b] transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006e29] text-white flex items-center justify-center shadow-sm">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                  02. Industrial EPC
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111e16] mb-3">
                Factory Shed & MW-Scale Campus Solar
              </h3>
              
              <p className="text-sm text-[#404941] leading-relaxed mb-6">
                Puncturing-free standing seam metal roof mounts and elevated truss canopies. Slash corporate power expenses from ₹11/kWh down to ~₹2.4/kWh amortized cost.
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#404941] pt-4 border-t border-[#e2e8f0] mb-6">
                <span className="font-semibold text-[#006e29]">40% Accelerated Depreciation</span>
                <span aria-hidden="true">·</span>
                <span>Zero Roof Punctures</span>
                <span aria-hidden="true">·</span>
                <span>Zero-Export Sync</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#64748b]">Scale: 50 kWp – 5 MWp</span>
              <button 
                onClick={onOpenAuditModal}
                className="text-xs font-bold text-[#003b1b] hover:text-[#006e29] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Request Industrial EPC Survey</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 3: Battery Energy Storage & Hybrid Microgrids (col-span-5) */}
          <div className="md:col-span-5 rounded-2xl bg-white border border-[#c0c9be] p-8 flex flex-col justify-between group hover:border-[#003b1b] transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#14532d] text-white flex items-center justify-center shadow-sm">
                  <BatteryCharging className="w-6 h-6 text-[#82fc92]" />
                </div>
                <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                  03. BESS Storage
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111e16] mb-3">
                Hybrid Inverters & LiFePO4 Energy Storage
              </h3>
              
              <p className="text-sm text-[#404941] leading-relaxed mb-6">
                Blackout-immune smart microgrids. Ultra-safe Lithium Iron Phosphate batteries provide sub-10ms automatic switchover for sensitive equipment, servers, and luxury estates.
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#404941] pt-4 border-t border-[#e2e8f0] mb-6">
                <span>10,000+ Life Cycles</span>
                <span aria-hidden="true">·</span>
                <span>Zero Diesel Generator Smog</span>
                <span aria-hidden="true">·</span>
                <span>Instant UPS Transfer</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#64748b]">Storage: 10 kWh – 500 kWh</span>
              <button 
                onClick={onOpenAuditModal}
                className="text-xs font-bold text-[#003b1b] hover:text-[#006e29] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Hybrid Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 4: SCADA Telemetry & 25-Year Maintenance (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl bg-[#edfeef] border border-[#c0c9be] p-8 flex flex-col justify-between group hover:border-[#22a447] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#003b1b] text-white flex items-center justify-center shadow-sm">
                  <Cpu className="w-6 h-6 text-[#22a447]" />
                </div>
                <div className="text-xs font-semibold text-[#006e29] uppercase tracking-wider">
                  04. IoT & Asset Governance
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111e16] mb-3">
                Cloud SCADA Monitoring & 25-Year Asset Care
              </h3>
              
              <p className="text-sm sm:text-base text-[#404941] leading-relaxed mb-6">
                Continuous string-level telemetry detects micro-shading, soiling, and inverter harmonics in real time. Backed by scheduled robotic module cleaning, thermal drone inspections, and guaranteed 99.4% uptime SLA.
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#404941] pt-4 border-t border-[#c0c9be]/60 mb-6">
                <span className="font-semibold text-[#003b1b]">99.4% Uptime Guarantee</span>
                <span aria-hidden="true">·</span>
                <span>String Thermal Diagnostics</span>
                <span aria-hidden="true">·</span>
                <span>Automated DISCOM Credit Reconciliations</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#003b1b]">SLA: 4-Hour On-Site Tech Dispatch</span>
              <button 
                onClick={onOpenAuditModal}
                className="text-xs font-bold text-[#003b1b] hover:text-[#006e29] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>View Engineering Protocols</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
