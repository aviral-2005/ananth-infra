import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface TopNavProps {
  onOpenAuditModal: () => void;
  activeSection: string;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenAuditModal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Projects', href: '#projects' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Subsidies', href: '#subsidies' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#edfeef]/90 backdrop-blur-md border-b border-[#c0c9be]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in Manrope display face) */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-[#003b1b] font-bold text-xl sm:text-2xl tracking-tight whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22a447] rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-[#003b1b] text-white flex items-center justify-center font-bold text-base transition-transform group-hover:scale-105 shadow-sm">
            <svg className="w-4 h-4 text-[#facc15]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.39 8.26L21 9.27L16.2 13.97L17.34 20.6L12 17.77L6.66 20.6L7.8 13.97L3 9.27L9.61 8.26L12 2Z" />
            </svg>
          </div>
          <span>Ananth Infra</span>
        </a>

        {/* Zone 2: 4-5 clean, single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#404941]" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative hover:text-[#003b1b] ${
                  isActive ? 'text-[#003b1b] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22a447] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAuditModal}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#003b1b] hover:bg-[#14532d] active:scale-[0.98] rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22a447]"
          >
            <span>Book Rooftop Audit</span>
            <ArrowUpRight className="w-4 h-4 text-[#facc15]" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#111e16] hover:bg-[#d6e7d8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22a447]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#c0c9be]/60 bg-[#edfeef] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#111e16] hover:bg-[#e1f2e4] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#003b1b] rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Book Rooftop Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#facc15]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
