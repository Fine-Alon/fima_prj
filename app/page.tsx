"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  MessageCircle,
  Send,
  Mail,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Lock,
  MapPin,
  Globe,
  AlertTriangle,
  Landmark,
  SearchCheck,
  Menu,
  X,
} from "lucide-react";

// --- CONTACT LINKS (Replace with Efim's actual WhatsApp number and Email) ---
const WHATSAPP_URL =
  "https://wa.me/972552924282?text=Hello%20Efim,%20I%20would%20like%20to%20request%20a%20confidential%20consultation.";
const EMAIL_ADDRESS = "mailto:lazarhasid@gmail.com";
const TELEGRAM_URL = "https://t.me/tir9999999?text=Hello%20Efim,%20I%20would%20like%20to%20request%20a%20confidential%20consultation.";

const STATS = [
  {
    value: "17+ Years",
    label: "Executive experience in Wealth Compliance",
    sub: "Deep expertise in banking risk management",
  },
  {
    value: "Tier-1 Banks",
    label: "Successful onboarding & SoW clearance",
    sub: "Leading financial institutions worldwide",
  },
  {
    value: "4 Key Regions",
    label: "Israel • Europe • US • CIS",
    sub: "Cross-border regulatory navigation",
  },
  {
    value: "100%",
    label: "Absolute Discretion & Strict NDA",
    sub: "Uncompromising client privacy",
  },
];

const SERVICES = [
  {
    icon: SearchCheck,
    tag: "Pre-Banking Audit",
    title: "Source of Wealth Audit",
    description:
      "Forensic review of your financial history to identify potential red flags before the bank does.",
    bullets: [
      "Retrospective audit of historical capital accumulation",
      "Early detection of AML, KYC, and regulatory risk triggers",
      "Actionable remediation plan prior to bank submission",
    ],
  },
  {
    icon: FileText,
    tag: "Bank-Ready Narrative",
    title: "Compliance Dossier Preparation",
    description:
      "Structuring your documents into a flawless, defensible narrative that speaks the bank's language.",
    bullets: [
      "Comprehensive compilation of evidentiary SoW / SoF documentation",
      "Executive Compliance Memorandums tailored for bank risk committees",
      "Clear substantiation of business exits, dividends, and asset sales",
    ],
  },
  {
    icon: Globe,
    tag: "Global Structuring",
    title: "Cross-Border Advisory",
    description:
      "Strategic guidance on structuring international assets and preparing for Tier-1 bank onboarding.",
    bullets: [
      "Pre-onboarding preparation for HNWIs and Family Offices",
      "Compliance clearance for high-value cross-border capital transfers",
      "Multi-jurisdictional alignment across Israel, Europe, the US, and CIS",
    ],
  },
];

const CASES = [
  {
    id: 1,
    category: "Source of Wealth",
    title:
      "Multi-Jurisdictional Source of Wealth Substantiation Following a Business Exit",
    amount: "Capital: $6.5M",
    duration: "Timeline: 5 Weeks",
    problem:
      "An HNWI client faced a prolonged KYC hold when transferring liquidity across borders due to fragmented historical corporate and tax records spanning over a decade.",
    solution:
      "Conducted a forensic Source of Wealth Audit, reconstructed the corporate paper trail, and prepared a comprehensive Compliance Dossier aligned with Tier-1 banking standards.",
    result:
      "Full compliance clearance achieved with zero additional inquiries; account opened and funds credited in full.",
  },
  {
    id: 2,
    category: "Tier-1 Onboarding",
    title:
      "Family Office Onboarding Across European and Israeli Tier-1 Institutions",
    amount: "Assets: $18M+",
    duration: "Timeline: 7 Weeks",
    problem:
      "A Family Office with complex multi-jurisdictional holdings (real estate, private equity, and corporate structures) needed seamless onboarding at top-tier private banks.",
    solution:
      "Mapped the entire ownership and cash-flow architecture, eliminated potential compliance red flags in advance, and delivered a defensible executive narrative.",
    result:
      "Successfully onboarded with two Tier-1 private banks on the first submission without delays.",
  },
  {
    id: 3,
    category: "Cross-Border",
    title:
      "Unfreezing a High-Value Cross-Border Liquidity Transfer in Tel Aviv, Israel",
    amount: "Transaction: $2.4M",
    duration: "Timeline: 3 Weeks",
    problem:
      "A major cross-border transfer for a real estate acquisition was frozen by the receiving bank's compliance department due to an unclear intermediary account trail.",
    solution:
      "Restructured the evidentiary documentation package, drafted a formal Source of Funds & Wealth opinion, and addressed all regulatory risk triggers.",
    result:
      "Transfer cleared and accepted by the Israeli bank, allowing the client to close the acquisition on schedule.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Confidential Briefing",
    subtitle: "Initial Case Assessment",
    desc: "We review your objectives, capital geography, and target banking institutions under strict confidentiality.",
  },
  {
    num: "02",
    title: "Forensic SoW Audit",
    subtitle: "Red-Flag Identification",
    desc: "We examine your financial history through the lens of a Tier-1 bank risk officer to uncover documentation gaps early.",
  },
  {
    num: "03",
    title: "Dossier Architecture",
    subtitle: "Narrative & Structuring",
    desc: "We assemble a seamless, bank-ready Compliance Dossier and executive memorandum that substantiate every milestone of your wealth.",
  },
  {
    num: "04",
    title: "Bank Onboarding & Clearance",
    subtitle: "Strategic Execution",
    desc: "We guide you through the KYC/SoW review and cross-border transfer process until successful clearance.",
  },
];

const FAQS = [
  {
    q: "Why do Tier-1 banks delay transfers or reject completely legitimate wealth?",
    a: "Banks do not reject legitimate wealth—they reject fragmented paper trails. Even 100% lawful capital can trigger an account freeze or months of KYC delays if the historical documentation is disorganized or fails to meet the strict internal risk framework of the compliance committee.",
  },
  {
    q: "Why is Pre-Banking Compliance critical before approaching a bank?",
    a: "A compliance rejection or frozen transfer leaves a permanent mark in institutional risk databases. Conducting a forensic Source of Wealth Audit beforehand allows us to identify and resolve every potential red flag in advance, ensuring a smooth, first-time approval.",
  },
  {
    q: "Which regions and jurisdictions do you cover?",
    a: "Based in Tel Aviv, Israel, I advise clients globally with a core focus on bridging capital and regulatory requirements across Israel, Europe, the US, and the CIS region.",
  },
  {
    q: "How do you protect the privacy of my financial records?",
    a: "Absolute discretion is the cornerstone of my advisory practice. Every consultation, document review, and strategic briefing is conducted personally under strict confidentiality and Non-Disclosure Agreements (NDA).",
  },
];

export default function WealthComplianceLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "Source of Wealth Audit",
    message: "",
  });

  const categories = ["All", "Source of Wealth", "Tier-1 Onboarding", "Cross-Border"];
  const filteredCases =
    activeCategory === "All"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 scroll-smooth">
      {/* ================= HEADER / NAVIGATION ================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand / Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 shrink-0">
              <Landmark className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="block text-white font-bold tracking-wide text-base sm:text-lg leading-none">
                EFIM LIBERMAN
              </span>
              <span className="block text-[11px] sm:text-xs text-amber-400 font-medium tracking-wider mt-1">
                Private Wealth & Compliance Advisory
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <a href="#problem" className="hover:text-amber-400 transition-colors">
              Why Banks Freeze
            </a>
            <a href="#expertise" className="hover:text-amber-400 transition-colors">
              Our Expertise
            </a>
            <a href="#cases" className="hover:text-amber-400 transition-colors">
              Case Studies
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About Efim
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
          </nav>

         {/* Header CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Вставь этот блок (после строки 256): */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-semibold text-sm transition-all flex items-center gap-2"
              title="Contact on Telegram"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Telegram</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Why do banks freeze accounts?
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Our Expertise
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Case Studies
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              About Efim Liberman
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-amber-500 text-slate-950 font-semibold text-center"
              >
                Request a Confidential Consultation
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold text-center flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Message on Telegram</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= BLOCK 1. HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Offer & Value Proposition */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Private Wealth & Compliance Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12]">
                Pre-Banking Compliance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  for Global Wealth
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-normal">
                Helping HNWIs and Family Offices navigate Source of Wealth checks
                with Tier-1 banks worldwide.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid sm:grid-cols-2 gap-3.5 text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Source of Wealth Audit & Compliance Dossier</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Tier-1 Bank Onboarding (Israel, EU, US)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Based in Tel Aviv, Israel • Global Reach</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Built on Absolute Discretion & Strict NDA</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Request a Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 text-sky-400" />
                  <span>Telegram</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>Inquire via Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Efim's Portrait Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 shadow-2xl flex flex-col justify-between p-6">
                  {/* Photo Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/80 via-slate-900 to-slate-950">
                    <div className="w-24 h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-10 h-10 text-amber-400" />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      [Portrait of Efim Liberman in a Suit]
                    </p>
                    <p className="text-slate-400 text-xs mt-2 max-w-xs">
                      Executive portrait placeholder (4:5 vertical aspect ratio)
                    </p>
                  </div>

                  {/* Top Experience Badge */}
                  <div className="relative z-10 self-end px-3.5 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-amber-500/30 text-xs font-semibold text-amber-400 flex items-center gap-1.5 shadow-lg">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>17+ Years in Wealth Compliance</span>
                  </div>

                  {/* Bottom Profile Card */}
                  <div className="relative z-10 p-5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white text-base">
                        Efim Liberman
                      </span>
                      <span className="text-xs text-amber-400 font-medium">
                        Tel Aviv, Israel
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Private Wealth & Compliance Advisory • Bridging complex
                      international capital and Tier-1 banking standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOCK 2. THE PROBLEM (WHY DO BANKS FREEZE ACCOUNTS?) ================= */}
      <section
        id="problem"
        className="py-20 lg:py-24 bg-slate-900 text-white border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Core Challenge</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Why do banks freeze accounts?
              </h2>

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-white/10 shadow-xl">
                <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
                  “Banks don&apos;t reject wealth. They reject fragmented paper trails.
                  When international capital moves across borders, a missing document
                  or a poorly explained structure can trigger months of KYC delays or a
                  permanent account freeze.”
                </p>
              </div>
            </div>

            {/* Risk Triggers */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  01. Fragmented Paper Trails
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Disconnected historical records between past liquidity events, tax
                  filings, and current account balances raise immediate AML flags.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  02. Unexplained Multi-Jurisdictional Structures
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Complex international holding structures submitted without a clear,
                  bank-ready compliance memorandum stall onboarding committees.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  03. Reactive vs. Pre-Banking Strategy
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Attempting to assemble evidentiary documents after a transfer is
                  flagged, rather than conducting a proactive Source of Wealth audit in
                  advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOCK 3. OUR SERVICES (OUR EXPERTISE) ================= */}
      <section id="expertise" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Private Wealth & Compliance Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our Expertise
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive pre-banking compliance and strategic structuring tailored
              for Tier-1 financial institutions.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-slate-50 hover:bg-slate-950 border border-slate-200 hover:border-slate-800 p-8 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 group-hover:bg-white/10 text-slate-700 group-hover:text-amber-400 transition-colors">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-slate-200/80 group-hover:border-white/10 pt-5">
                      {service.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-300 flex items-start gap-2.5 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/80 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      Bespoke Engagement
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-amber-600 group-hover:text-amber-400 flex items-center gap-1.5"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES (CASES) ================= */}
      <section id="cases" className="py-20 lg:py-28 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Selected Compliance Mandates
              </h2>
              <p className="text-slate-600 text-base">
                All client details and specific institutions are anonymized in
                accordance with our strict confidentiality policy.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-slate-950 text-amber-400 shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium mb-4">
                    <span className="px-3 py-1 rounded-md bg-amber-500/15 text-amber-800 font-semibold">
                      {item.amount}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4 text-sm">
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        The Challenge:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        Compliance Strategy:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/70 -mx-7 -mb-7 p-6 rounded-b-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Outcome:
                  </span>
                  <p className="text-sm font-medium text-slate-900">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOCK 4. ABOUT (ABOUT EFIM LIBERMAN) ================= */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Second Photo Placeholder & Highlights */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 text-white p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-xl">
                {/* Second Photo Placeholder */}
                <div className="aspect-[16/11] rounded-xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                  <Award className="w-10 h-10 text-amber-400 mb-3" />
                  <p className="text-sm font-semibold text-white">
                    [Executive Lifestyle Portrait of Efim Liberman]
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Business casual / office environment portrait placeholder
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="font-medium">
                      17+ Years in Wealth Compliance & Risk Management
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Regions: Israel, Europe, the US, and the CIS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Headquartered in Tel Aviv, Israel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About Efim Liberman Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Executive Profile & Discretion
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                About Efim Liberman
              </h2>

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                  With over 17 years of executive experience in Wealth Compliance, I
                  have dedicated my career to bridging the gap between complex
                  international capital and strict regulatory frameworks. I specialize
                  in assisting clients across Israel, Europe, the US, and the CIS
                  region. My approach is built on absolute discretion and deep expertise
                  in banking risk management.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 pt-2">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-500" />
                    <span>Absolute Discretion</span>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Every engagement is handled personally and confidentially,
                    safeguarding sensitive family and corporate wealth data.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Insider Risk Perspective</span>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Deep understanding of how Tier-1 bank compliance committees evaluate
                    risk and what documentation satisfies their scrutiny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW & METHODOLOGY (PROCESS) ================= */}
      <section id="process" className="py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Advisory Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How We Structure Your Case
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-bold text-amber-400/90 font-mono">
                    {s.num}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-amber-400 font-medium mt-0.5">
                    {s.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS (FAQ) ================= */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Key Insights on Pre-Banking Compliance
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BLOCK 5. CONTACT & FOOTER (LET'S DISCUSS YOUR CASE) ================= */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct WhatsApp & Email Buttons */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Direct Advisory Contact
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Let&apos;s discuss your case
                </h2>
                <p className="text-slate-300 text-base leading-relaxed pt-2">
                  Reach out directly via WhatsApp, Telegram, or Email to schedule a
                  private consultation, or submit your inquiry through the confidential
                  form.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-white font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="block text-base">WhatsApp</span>
                      <span className="block text-xs text-emerald-300 font-normal">
                        Request a Confidential Consultation
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-white font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <Send className="w-6 h-6 text-sky-400" />
                    <div>
                      <span className="block text-base">Telegram</span>
                      <span className="block text-xs text-sky-300 font-normal">
                        Direct encrypted message via Telegram
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={EMAIL_ADDRESS}
                  className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-6 h-6 text-amber-400" />
                    <div>
                      <span className="block text-base">Email</span>
                      <span className="block text-xs text-slate-400 font-normal">
                        Send a direct confidential inquiry
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="block font-semibold text-white">Location:</span>
                    <span className="text-slate-300">
                      Tel Aviv, Israel • Advising clients across Israel, Europe, the US,
                      and the CIS region.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white text-slate-900 p-8 sm:p-10 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Confidential Inquiry Received
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out. Efim Liberman will personally review
                      your request and respond shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Request a Confidential Consultation
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Private Wealth & Pre-Banking Compliance Advisory
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          WhatsApp / Telegram / Email *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="+972 ... / @username / email"
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({ ...formData, contact: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Area of Expertise
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({ ...formData, topic: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option>Source of Wealth Audit</option>
                        <option>Compliance Dossier Preparation</option>
                        <option>Cross-Border Advisory</option>
                        <option>KYC Delay / Account Freeze Resolution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Brief Case Overview (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Jurisdictions involved, target Tier-1 bank, or general inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-amber-500/25"
                    >
                      Request a Confidential Consultation
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      100% Confidential • Built on absolute discretion and strict data
                      protection.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-slate-950 border-t border-white/10 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-300 font-medium">
            ©️ 2026 Efim Liberman. Private Wealth & Compliance Advisory. All rights
            reserved.
          </div>
          <div className="text-slate-500">Tel Aviv, Israel • Global Advisory</div>
        </div>
      </footer>
    </div>
  );
}