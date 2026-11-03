import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Send, 
  Phone, 
  Mail, 
  Building2, 
  Home, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { RoofType, SegmentMode, SolarCalculation } from '../types/solar';
import { formatInr } from '../utils/solarCalculator';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSegment: SegmentMode;
  initialCalc?: SolarCalculation | null;
  initialBill?: number;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({
  isOpen,
  onClose,
  initialSegment,
  initialCalc,
  initialBill = 6500,
}) => {
  // Form fields
  const [segment, setSegment] = useState<SegmentMode>(initialSegment);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [roofType, setRoofType] = useState<RoofType>('rcc_flat');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (09:00 AM – 12:00 PM)');
  const [notes, setNotes] = useState('');

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const estimatedKwp = initialCalc?.systemSizeKwp || (segment === 'residential' ? 5 : 50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !city.trim() || !pincode.trim()) {
      setValidationError('Please complete your name, phone number, city, and pincode.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setValidationError('');
    const randomTicket = `AN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    if (!fullName.trim() || !phone.trim()) {
      setValidationError('Please enter your name and phone number to initiate WhatsApp dispatch.');
      return;
    }

    const message = `Hello Ananth Infra Engineering Team,%0A%0AI would like to schedule a Certified Rooftop Solar Audit:%0A- Name: ${encodeURIComponent(fullName)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Location: ${encodeURIComponent(city || 'India')} (Pincode: ${encodeURIComponent(pincode || 'N/A')})%0A- Segment: ${segment === 'residential' ? 'Residential Rooftop' : 'Commercial / Industrial'}%0A- Estimated Capacity: ${estimatedKwp} kWp%0A- Monthly Bill: ₹${initialBill.toLocaleString('en-IN')}%0A- Roof Type: ${roofType}%0A- Preferred Slot: ${encodeURIComponent(preferredSlot)}%0A%0APlease share the technical feasibility checklist and confirm the site survey engineer schedule.`;
    
    // Official WhatsApp dispatch link (using standard Indian customer support desk format)
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Also mark as submitted in the UI
    const randomTicket = `AN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setValidationError('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="bg-white rounded-2xl border border-[#c0c9be] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#64748b] hover:text-[#111e16] hover:bg-[#edfeef] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title & System Kicker */}
            <div className="pr-8 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#006e29] uppercase tracking-wider mb-1">
                <span>Certified On-Site Feasibility</span>
                <span aria-hidden="true">·</span>
                <span>Tier-1 Engineering Inspection</span>
              </div>
              <h2 id="audit-modal-title" className="text-xl sm:text-2xl font-bold text-[#111e16]">
                Schedule Rooftop Solar Audit
              </h2>
              <p className="text-xs sm:text-sm text-[#404941] mt-1">
                A certified structural engineer will visit your property, perform 3D shadow analysis, and verify net-metering feasibility.
              </p>
            </div>

            {/* Capacity & Estimation Summary Strip */}
            <div className="p-3.5 rounded-xl bg-[#edfeef] border border-[#c0c9be]/60 mb-6 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#64748b] block text-[11px]">Audit Target System</span>
                <span className="text-sm font-bold font-mono text-[#003b1b] tabular-nums">
                  {estimatedKwp} kWp {segment === 'residential' ? 'Residential' : 'C&I'}
                </span>
              </div>
              {initialCalc && (
                <div className="text-right">
                  <span className="text-[#64748b] block text-[11px]">Est. Monthly Saving</span>
                  <span className="text-sm font-bold font-mono text-[#006e29] tabular-nums">
                    ₹{initialCalc.monthlySavingsInr.toLocaleString('en-IN')}/mo
                  </span>
                </div>
              )}
            </div>

            {/* Error banner if validation fails */}
            {validationError && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                {validationError}
              </div>
            )}

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Segment Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#edfeef] rounded-xl border border-[#c0c9be]/50">
                <button
                  type="button"
                  onClick={() => setSegment('residential')}
                  className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    segment === 'residential' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941]'
                  }`}
                >
                  <Home className="w-3.5 h-3.5 text-[#22a447]" />
                  <span>Residential Rooftop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSegment('commercial')}
                  className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    segment === 'commercial' ? 'bg-white text-[#003b1b] shadow-xs' : 'text-[#404941]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-[#006e29]" />
                  <span>Commercial / Industrial</span>
                </button>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#404941] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#404941] mb-1">
                    WhatsApp Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-xs text-[#64748b] font-mono">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 pl-11 pr-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* City & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#404941] mb-1">
                    City / District <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru, Surat, Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#404941] mb-1">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="e.g. 560001"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] font-mono focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Roof Architecture Selection */}
              <div>
                <label className="block text-xs font-medium text-[#404941] mb-1">
                  Roof Structure Type
                </label>
                <select
                  value={roofType}
                  onChange={(e) => setRoofType(e.target.value as RoofType)}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                >
                  <option value="rcc_flat">Flat RCC Concrete Terrace (Standard ballasted / raised)</option>
                  <option value="metal_shed">Industrial Standing Seam / Trapezoidal Metal Roof</option>
                  <option value="tiled_sloped">Sloped Mangalore Tiled / Asphalt Shingle Roof</option>
                  <option value="terrace_pergola">Elevated Usable Terrace Lounge (Solar Pergola)</option>
                </select>
              </div>

              {/* Survey Slot Preference */}
              <div>
                <label className="block text-xs font-medium text-[#404941] mb-1">
                  Preferred Engineer Visit Slot
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#c0c9be] text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#22a447] focus:border-transparent transition-all"
                >
                  <option value="Morning (09:00 AM – 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM – 04:00 PM)">Afternoon (12:00 PM – 04:00 PM)</option>
                  <option value="Evening (04:00 PM – 07:00 PM)">Evening (04:00 PM – 07:00 PM)</option>
                  <option value="Weekend Priority Slot">Weekend Priority Slot</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                {/* Primary: Confirm In-App Booking */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 font-bold text-sm text-white bg-[#003b1b] hover:bg-[#14532d] active:scale-[0.99] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Confirm Certified Rooftop Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#facc15]" />
                </button>

                {/* Secondary: Instant WhatsApp Dispatch */}
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full py-3.5 px-4 font-bold text-sm text-white bg-[#22a447] hover:bg-[#1ea142] active:scale-[0.99] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Dispatch Request via WhatsApp (Instant Reply)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748b] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22a447]" />
                <span>Zero Obligation · No Cost Comprehensive Structural Report</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-4 text-center space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#edfeef] border-2 border-[#22a447] text-[#22a447] flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#006e29] uppercase tracking-wider block mb-1">
                Audit Booking Confirmed
              </span>
              <h3 className="text-2xl font-extrabold text-[#111e16]">
                Site Feasibility Survey Scheduled
              </h3>
              <p className="text-xs sm:text-sm text-[#404941] mt-2 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. An Ananth Infra senior photovoltaic structural engineer has been assigned to your survey request.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="p-4 rounded-xl bg-[#edfeef] border border-[#c0c9be] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#c0c9be]/60 pb-2">
                <span className="text-[#64748b]">Survey Reference Ticket:</span>
                <span className="font-mono font-bold text-[#003b1b]">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Target System:</span>
                <span className="font-mono font-semibold text-[#111e16]">{estimatedKwp} kWp ({segment})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Location:</span>
                <span className="font-semibold text-[#111e16]">{city} ({pincode})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Preferred Window:</span>
                <span className="font-semibold text-[#006e29]">{preferredSlot}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] text-xs text-[#404941] max-w-md mx-auto text-left flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#22a447] shrink-0 mt-0.5" />
              <span>
                Our technical lead will call you at <strong>+91 {phone}</strong> within 2 business hours to verify rooftop access and share the drone flight plan.
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="py-3 px-8 text-sm font-semibold text-white bg-[#003b1b] hover:bg-[#14532d] rounded-xl transition-all shadow-sm"
              >
                Return to Overview
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
