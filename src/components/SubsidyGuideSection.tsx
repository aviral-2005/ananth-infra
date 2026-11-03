import React from 'react';
import { IndianRupee, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface SubsidyGuideSectionProps {
  onOpenAuditModal: () => void;
}

export const SubsidyGuideSection: React.FC<SubsidyGuideSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="subsidies" className="py-16 lg:py-24 bg-[#edfeef]/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-2">
            <span>Government Subsidies & Tax Incentives</span>
            <span aria-hidden="true">·</span>
            <span>MNRE National Portal Approved</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111e16] tracking-tight text-balance">
            PM Surya Ghar Muft Bijli Yojana & C&I Tax Benefits
          </h2>
          <p className="mt-3 text-base text-[#404941]">
            Take advantage of India's most aggressive solar financial incentives. Ananth Infra handles 100% of the portal paperwork and DISCOM liaison so you receive your direct bank transfer without delay.
          </p>
        </div>

        {/* 2-Column: Residential Subsidy Slab Table + C&I Depreciation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Residential PM Surya Ghar Slabs */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#c0c9be] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0] mb-6">
              <div>
                <span className="text-xs font-semibold text-[#006e29] uppercase tracking-wider">Residential Rooftops</span>
                <h3 className="text-xl font-bold text-[#111e16]">PM Surya Ghar: Central Subsidy Slabs</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#64748b]">Max DBT Credit</span>
                <div className="text-lg font-bold text-[#003b1b] font-mono">₹78,000</div>
              </div>
            </div>

            {/* Slabs Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0] text-[#64748b]">
                    <th className="py-2.5 font-semibold">System Capacity</th>
                    <th className="py-2.5 font-semibold">Subsidy Per kWp</th>
                    <th className="py-2.5 font-semibold text-right">Total Central DBT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0] font-mono tabular-nums">
                  <tr>
                    <td className="py-3 font-medium font-sans text-[#111e16]">1 kWp Rooftop System</td>
                    <td className="py-3 text-[#404941]">₹30,000 / kWp</td>
                    <td className="py-3 text-right font-bold text-[#006e29]">₹30,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium font-sans text-[#111e16]">2 kWp Rooftop System</td>
                    <td className="py-3 text-[#404941]">₹30,000 / kWp</td>
                    <td className="py-3 text-right font-bold text-[#006e29]">₹60,000</td>
                  </tr>
                  <tr className="bg-[#fefce8]/60">
                    <td className="py-3 font-medium font-sans text-[#111e16]">
                      3 kWp to 10 kWp+ System
                    </td>
                    <td className="py-3 text-[#735c00]">₹18,000 for 3rd kW</td>
                    <td className="py-3 text-right font-bold text-[#735c00]">
                      ₹78,000 (Maximum Cap)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#edfeef] border border-[#c0c9be]/50 text-xs text-[#404941] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#22a447] shrink-0 mt-0.5" />
              <div>
                <strong>Direct Bank Transfer (DBT):</strong> The subsidy is transferred directly by the Ministry of New & Renewable Energy (MNRE) into the consumer's Aadhaar-linked bank account within 30 days of bidirectional net-meter installation.
              </div>
            </div>
          </div>

          {/* Commercial & Industrial Tax Shield */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#c0c9be] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-[#e2e8f0] mb-6">
                <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">Enterprises & Factories</span>
                <h3 className="text-xl font-bold text-[#111e16]">Commercial Accelerated Depreciation</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#404941]">
                <div className="p-3.5 rounded-xl border border-[#e2e8f0] bg-[#f0fdf4]">
                  <div className="font-bold text-[#003b1b] text-base mb-1">
                    40% Year-1 Tax Shield
                  </div>
                  <p className="text-xs leading-relaxed">
                    Under Section 32 of the Indian Income Tax Act, commercial and industrial enterprises can claim 40% accelerated depreciation on solar capital equipment in the very first financial year.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#e2e8f0] bg-white">
                  <div className="font-bold text-[#111e16] mb-1">
                    Corporate Income Tax Reduction
                  </div>
                  <p className="text-xs leading-relaxed">
                    For a business paying standard corporate tax (25% + surcharge), the effective cash payback on capital expenditure drops from ~4.5 years down to <strong>3.0 to 3.2 years</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e2e8f0] mt-6">
              <button
                onClick={onOpenAuditModal}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#003b1b] hover:bg-[#14532d] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Request Corporate Tax & ROI Analysis</span>
                <ArrowRight className="w-4 h-4 text-[#facc15]" />
              </button>
            </div>
          </div>

        </div>

        {/* 4-Step Turnkey Process */}
        <div className="bg-white rounded-2xl border border-[#c0c9be] p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[#111e16] mb-6">
            Our 4-Step Turnkey Subsidy Execution
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#edfeef]/50 border border-[#c0c9be]/60">
              <div className="w-7 h-7 rounded-lg bg-[#003b1b] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                01
              </div>
              <h4 className="font-bold text-[#111e16] mb-1">Site Survey & Feasibility</h4>
              <p className="text-[#404941] text-xs">
                Shadow-free drone & 3D shadow analysis. We verify roof structural strength and sanctioned electrical load.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#edfeef]/50 border border-[#c0c9be]/60">
              <div className="w-7 h-7 rounded-lg bg-[#003b1b] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                02
              </div>
              <h4 className="font-bold text-[#111e16] mb-1">Portal Filing & Sanction</h4>
              <p className="text-[#404941] text-xs">
                We register your consumer number on the National Solar Portal and secure technical feasibility from your DISCOM.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#edfeef]/50 border border-[#c0c9be]/60">
              <div className="w-7 h-7 rounded-lg bg-[#003b1b] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                03
              </div>
              <h4 className="font-bold text-[#111e16] mb-1">German-Spec Installation</h4>
              <p className="text-[#404941] text-xs">
                Execution within 7-10 business days. Hot-dip galvanized structure, Tier-1 panels, and dual SPD protection.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#edfeef]/50 border border-[#c0c9be]/60">
              <div className="w-7 h-7 rounded-lg bg-[#003b1b] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                04
              </div>
              <h4 className="font-bold text-[#111e16] mb-1">Net Meter & DBT Credit</h4>
              <p className="text-[#404941] text-xs">
                DISCOM joint inspection, bidirectional net-meter installation, and direct DBT subsidy credited to your bank account.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
