import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="bg-[#111e16] text-[#c0c9be] border-t border-[#25342a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#25342a]">
          
          {/* Brand Info (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
              <div className="w-7 h-7 rounded-lg bg-[#22a447] text-[#111e16] flex items-center justify-center font-bold text-sm">
                <svg className="w-3.5 h-3.5 text-[#111e16]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.39 8.26L21 9.27L16.2 13.97L17.34 20.6L12 17.77L6.66 20.6L7.8 13.97L3 9.27L9.61 8.26L12 2Z" />
                </svg>
              </div>
              <span>Ananth Infra</span>
            </div>

            <p className="text-xs sm:text-sm text-[#c0c9be]/80 max-w-sm leading-relaxed">
              Precision-engineered solar infrastructure and turnkey photovoltaic solutions. Empowering residences and commercial enterprises with permanent energy independence, MNRE-certified Tier-1 balance of system, and 25-year guaranteed performance.
            </p>

            <div className="pt-2 text-xs text-[#c0c9be]/60">
              <span>MNRE Channel Partner ID: MNRE/EPC/2022/KA-0419</span>
              <br />
              <span>ISO 9001:2015 & ISO 14001:2015 Certified EPC</span>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solar Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Residential Luxury Rooftops</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Architectural Solar Pergolas</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Commercial & Industrial EPC</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Factory Shed Solar Mounts</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Hybrid LiFePO4 BESS Storage</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">SCADA IoT Asset Telemetry</a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Financial & Subsidies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Solar ROI Estimator</a>
              </li>
              <li>
                <a href="#subsidies" className="hover:text-white transition-colors">PM Surya Ghar Muft Bijli Yojana</a>
              </li>
              <li>
                <a href="#subsidies" className="hover:text-white transition-colors">40% Accelerated Depreciation</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Industrial Case Studies</a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-white transition-colors">Structural Wind-Load Standards</a>
              </li>
            </ul>
          </div>

          {/* Direct Engineering Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineering Desk
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22a447] shrink-0 mt-0.5" />
                <span>100 Feet Road, Indiranagar, Bengaluru 560038</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22a447] shrink-0" />
                <span>+91 80 4920 1800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#22a447] shrink-0" />
                <span>projects@ananthinfra.com</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAuditModal}
                className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-[#22a447] hover:bg-[#1ea142] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Book Site Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c0c9be]/60 gap-4">
          <div>
            © {new Date().getFullYear()} Ananth Infra Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Engineering Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Turnkey EPC Service</span>
            <span aria-hidden="true">·</span>
            <span>Grid Interconnection Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
