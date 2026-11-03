# Ananth Infra – Premium Solar Energy Solutions

An enterprise-grade, ecologically grounded digital platform for Ananth Infra delivering turnkey residential rooftops and commercial/industrial (C&I) solar infrastructure solutions. Features a dynamic solar ROI and subsidy calculator, verified installation case studies, interactive rooftop audit booking, and direct engineering dispatch.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Summary of Confirmed Choices from Turn 1:**
> - **Primary Customer Focus**: Dual focus balancing Residential Luxury Rooftops & Villas with Commercial, Industrial & EPC Infrastructure.
> - **Solar Calculation Engine**: Multi-factor Solar ROI & Rooftop Area Estimator featuring live solar generation telemetry, PM Surya Ghar subsidy modeling, and 25-year financial payback breakdown.
> - **Primary Conversion Flow**: Interactive Rooftop Audit Booking Modal with real-time capacity estimation, custom site survey preferences, and one-click WhatsApp engineering dispatch.

---

## 1. Overview & Core Concept

- **What It Does**: Ananth Infra provides high-reliability solar energy systems for homeowners, villa communities, commercial campuses, manufacturing units, and industrial parks. Visitors can interactively calculate rooftop solar generation capacity, explore grid offset metrics, evaluate central/state subsidies (PM Surya Ghar Muft Bijli Yojana & C&I accelerated depreciation), inspect verified engineering case studies, and book a certified rooftop engineering audit.
- **Target Audience / Persona**: High-value residential property owners seeking power independence and bill elimination, as well as commercial facility directors and plant managers looking for ESG compliance, OPEX/CAPEX solar power reduction, and verified Tier-1 engineering execution.
- **Key Value**: Replaces opaque solar contracting with transparent financial modeling, instant capacity estimations, certified MNRE Tier-1 component guarantees, and direct digital booking for rapid engineering surveys.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Exploration & Brand Foundation (Top Bar & Hero)**:
   - Visitor arrives at a clean, high-conviction hero section featuring the authoritative headline *"Engineered Solar Infrastructure for Permanent Energy Independence"*.
   - Direct access to primary action: `"Book Rooftop Audit"` and secondary action: `"Calculate Solar ROI"`.
   - Architectural split layout pairing value proposition with an installation visual and key trust telemetry (e.g., 28.4 MW+ Installed, 99.4% Generation Uptime, 25-Year Linear Power Warranty).

2. **Interactive Solar ROI & Subsidy Estimator**:
   - Stepped interactive calculator: Switch between **Residential** and **Commercial & Industrial (C&I)** presets.
   - Input controls: Average monthly power bill slider (₹2,000 to ₹150,000+), available shadow-free rooftop area (sq. ft.), and tariff rate tier.
   - Real-time output display: Recommended System Size (kWp), Monthly & Lifetime Electricity Savings (₹), PM Surya Ghar Central Subsidy deduction (up to ₹78,000 for residential), CO₂ emission offset (metric tons/yr), and estimated payback duration (~3.2 to 4.5 years).
   - Dynamic Solar Generation & Savings progress bar visualizing 85–100% grid offset.

3. **Solutions & Engineering Capabilities (Asymmetric Bento Grid)**:
   - **Residential Rooftop Systems**: Monocrystalline PERC & TOPCon panels, hybrid inverters with lithium battery storage options, seamless net-metering DISCOM approvals.
   - **Commercial & Industrial EPC**: High-yield factory shed installations, elevated solar structures for usable roof space, solar carports, and zero-export smart grid relays.
   - **Utility & Turnkey Maintenance**: SCADA real-time IoT string monitoring, bi-weekly robotic module cleaning, and 25-year performance monitoring.

4. **Verified Case Studies & Impact Telemetry**:
   - Rich case study cards highlighting real deployment stats: e.g., 450 kWp Textile Mill Rooftop (Surat), 15 kWp Luxury Villa Solar Pergola (Bengaluru), and 1.2 MW Industrial Logistics Park (Pune).
   - Before-and-after power consumption comparisons and certified annual generation numbers.

5. **Certified Rooftop Audit Booking & WhatsApp Dispatch Modal**:
   - Clean 2-step booking flow:
     - Step 1: Rooftop type, pincode, contact information, and preferred survey time slot.
     - Step 2: Instant estimated quote summary + option to either confirm on-site visit or instantly receive full technical proposal via direct WhatsApp dispatch.

---

### Visual Identity & Theme

- **Aesthetic Movement**: Modern Clean Architecture with Indian ecological elegance—balancing deep botanical forest greens, crystalline sunlight accents, crisp geometric structure, and generous whitespace.
- **Color Palette Tokens**:
  - Primary Canvas: Pure White (`#FFFFFF`) with Solar Tint Canvas (`#F0FDF4`) for analytical modules.
  - Deep Forest Green (`#14532D`): High-authority headers, dominant brand anchors, primary button containers.
  - Kinetic Vibrant Green (`#22A447`): Live power generation metrics, positive financial delta tags, instant WhatsApp dispatch.
  - Solar Gold (`#FACC15`): Irradiance highlights, ROI milestone badges, payback callouts.
  - Slate Neutrals: Dark Slate (`#17251C`) for primary typography; Subdued Slate (`#64748B`) for metadata.
  - Hairline Borders: Architectural delineation (`#E2E8F0`).
- **Typography**:
  - Display & Headlines: **Manrope** (tight tracking, authoritative geometric display).
  - Body & Numbers: **Inter** with tabular numerals (`tabular-nums`) for bill amounts, kilowatt hours, and financial payback timelines.
- **Component Styling & Anti-Slop Discipline**:
  - Zero pill enclosures for static metadata (clean unboxed text with `·` separators).
  - Strict Top Bar Contract: 1-line Brand wordmark, 4 clean single-line navigation links (`Solutions`, `Calculator`, `Projects`, `Engineering`), and 1 primary CTA button (`Book Audit`).
  - No fake version numbers or decorative status dots; all interactive elements have working state handlers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Interactive Solar Model vs. Server API Roundtrips**:
  - *Chosen Approach*: Comprehensive client-side solar generation model parameterized with actual MNRE irradiance constants (4.5 to 5.2 kWh/m²/day), standard rooftop area consumption ratios (100 sq.ft per 1 kWp), and standard DISCOM tariff blocks.
  - *Why*: Delivers instantaneous zero-latency feedback as users slide bill and area controls, dramatically boosting conversion intent.
  - *Alternatives Considered*: Server API calls on each slider tick, which would introduce latency and unnecessary server load.

- **Decision 2: Direct WhatsApp Dispatch Integration**:
  - *Chosen Approach*: Real-time pre-filled WhatsApp link generation (`https://wa.me/...`) encoding calculated system size, monthly savings, and user survey request details.
  - *Why*: WhatsApp is the primary communication channel in the Indian solar EPC ecosystem; enables frictionless lead handoff to Ananth Infra's solar engineers.

- **Decision 3: Dual Residential and C&I Segment Navigation**:
  - *Chosen Approach*: Interactive segment switcher across both the hero highlight and the calculator module, adjusting default capacities, tariff rates (residential ₹7.5/unit vs. C&I ₹11.2/unit), and subsidy structures.
  - *Why*: Respects user's confirmed preference while keeping the experience tailored for both high-net-worth homeowners and facility managers.

---

## 4. Technical Architecture & Data Strategy

### System Architecture & Component Hierarchy

```
┌──────────────────────────────────────────────────────────────────┐
│                         App.tsx (Root)                           │
│  State: segmentMode ('residential' | 'commercial')               │
│         calculatorInputs (bill, area, roofType, state)           │
│         auditModalOpen (boolean), leadSubmitted (boolean)        │
└────────────────┬─────────────────────────────────────────────────┘
                 │
  ┌──────────────┼──────────────────────────────┐
  ▼              ▼                              ▼
┌──────────────┐ ┌────────────────────────────┐ ┌──────────────────┐
│ TopNav.tsx   │ │ HeroSection.tsx            │ │ SolarCalculator  │
│ - Brand Lock │ │ - Dual Segment Switcher    │ │ - Bill Slider    │
│ - Nav Links  │ │ - High-Impact Visual       │ │ - Area Input     │
│ - Primary CTA│ │ - Quick Telemetry Strip    │ │ - Subsidy Engine │
└──────────────┘ └────────────────────────────┘ └─────────┬────────┘
                                                          │
  ┌───────────────────────────────────────────────────────┘
  ▼
┌────────────────────────────┐ ┌───────────────────────────┐
│ SolutionsBento.tsx         │ │ CaseStudiesGrid.tsx       │
│ - Residential Rooftops     │ │ - Real Project Metrics    │
│ - Commercial & C&I Plants  │ │ - ROI & CO2 Offsets       │
│ - Maintenance & Tier-1 BOM │ │ - Technical Schematics    │
└──────────────┬─────────────┘ └──────────────┬────────────┘
               │                              │
               └──────────────┬───────────────┘
                              ▼
               ┌──────────────────────────────┐
               │ AuditBookingModal.tsx        │
               │ - Capacity Summary           │
               │ - Site Address & Slot Picker │
               │ - Instant WhatsApp Dispatch  │
               └──────────────────────────────┘
```

### Data Model & State Entities

```typescript
interface SolarCalculation {
  systemSizeKwp: number;
  monthlyGenerationKwh: number;
  monthlySavingsInr: number;
  annualSavingsInr: number;
  lifetimeSavingsInr: number;
  grossCostInr: number;
  subsidyInr: number;
  netCostInr: number;
  paybackYears: number;
  co2OffsetTonsPerYear: number;
  roofAreaRequiredSqFt: number;
  gridOffsetPercentage: number;
}

interface AuditBookingLead {
  fullName: string;
  phone: string;
  city: string;
  pincode: string;
  roofType: 'rcc_flat' | 'metal_shed' | 'tiled_sloped' | 'terrace_pergola';
  segment: 'residential' | 'commercial';
  estimatedSizeKwp: number;
  preferredDate: string;
}
```

### Interactive State Transitions

- **Segment Toggle**: Updates active parameters in both Hero and Solar Calculator (adjusting default bill, tariff rates, and subsidy tiers instantly).
- **Calculator Sliders**: Real-time reactive updates to `SolarCalculation` derived state with formatted currency and tabular lining numbers.
- **Audit Modal**: Triggers from top nav CTA, hero primary button, or calculator output banner, passing calculated kWp directly into the booking form.
- **Dispatch**: Generates formatted WhatsApp deep link with site survey metadata and triggers animated confirmation state with reference tracking.
