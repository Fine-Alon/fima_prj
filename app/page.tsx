"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  MessageCircle,
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

// --- КОНТАКТНЫЕ ССЫЛКИ (Замени на реальный номер и почту Ефима) ---
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%20Efim,%20I%20would%20like%20to%20request%20a%20confidential%20consultation.";
const EMAIL_ADDRESS = "mailto:contact@efimliberman.com";

const STATS = [
  {
    value: "17+ Years",
    label: "Executive experience in Wealth Compliance",
    sub: "Опыт руководящей работы в сфере комплаенса",
  },
  {
    value: "Tier-1 Banks",
    label: "Successful onboarding & SoW clearance",
    sub: "Банки первого уровня в Израиле, Европе и США",
  },
  {
    value: "4 Regions",
    label: "Israel • Europe • US • CIS",
    sub: "Международная трансграничная экспертиза",
  },
  {
    value: "100%",
    label: "Absolute Discretion & Strict NDA",
    sub: "Полная конфиденциальность данных и активов",
  },
];

const SERVICES = [
  {
    icon: SearchCheck,
    tag: "Pre-Banking Audit",
    titleEn: "Source of Wealth Audit",
    titleRu: "Аудит происхождения средств",
    descEn:
      "Forensic review of your financial history to identify potential red flags before the bank does.",
    descRu:
      "Криминалистическая проверка вашей финансовой истории для выявления потенциальных «красных флагов» до того, как это сделает банк.",
    bullets: [
      "Глубокий ретроспективный аудит цепочки формирования капитала",
      "Выявление триггеров риска для банковских подразделений AML / KYC",
      "План устранения пробелов в документах до подачи в банк",
    ],
  },
  {
    icon: FileText,
    tag: "Bank-Ready Narrative",
    titleEn: "Compliance Dossier Preparation",
    titleRu: "Подготовка комплаенс-досье для банков",
    descEn:
      "Structuring your documents into a flawless, defensible narrative that speaks the bank's language.",
    descRu:
      "Структурирование ваших документов в безупречный, защитимый нарратив, который говорит на языке банка.",
    bullets: [
      "Формирование полного пакета подтверждающих документов (SoW / SoF)",
      "Написание профессионального Compliance Memo для офицеров банка",
      "Прозрачное обоснование сложных активов, дивидендов и сделок",
    ],
  },
  {
    icon: Globe,
    tag: "Global Structuring",
    titleEn: "Cross-Border Advisory",
    titleRu: "Консультирование по международным сделкам и структурам",
    descEn:
      "Strategic guidance on structuring international assets and preparing for Tier-1 bank onboarding.",
    descRu:
      "Стратегическое руководство по структурированию международных активов и подготовке к онбордингу в банках первого уровня.",
    bullets: [
      "Подготовка HNWI и семейных офисов (Family Offices) к открытию счетов",
      "Сопровождение крупных трансграничных переводов капитала",
      "Структурирование международных активов (Israel, Europe, US, CIS)",
    ],
  },
];

const CASES = [
  {
    id: 1,
    category: "Source of Wealth",
    title:
      "Подтверждение многолетнего капитала после продажи бизнеса и инвестиций для Tier-1 банка",
    amount: "Капитал: $6.5M",
    duration: "Срок: 5 недель",
    problem:
      "Клиент столкнулся с многомесячной задержкой KYC при переводе личного капитала между юрисдикциями: исторические документы за 12 лет были разрознены и вызывали вопросы у комплаенс-контроля.",
    solution:
      "Провели полный Source of Wealth Audit, восстановили корпоративную и налоговую хронологию, подготовили защитимое Compliance Dossier на языке банковских стандартов риска.",
    result:
      "Проверка успешно пройдена без дополнительных запросов. Счёт открыт, средства зачислены в полном объёме.",
  },
  {
    id: 2,
    category: "Tier-1 Onboarding",
    title:
      "Онбординг семейного офиса (Family Office) со сложной международной структурой активов",
    amount: "Активы: $18M+",
    duration: "Срок: 7 недель",
    problem:
      "Необходимость пройти строгий пре-комплаенс в банках первого уровня Европы и Израиля при наличии активов в нескольких юрисдикциях (недвижимость, корпоративные доли, инвестиционные портфели).",
    solution:
      "Выстроили прозрачную карту владения и движения капитала, устранили потенциальные красные флаги и подготовили полное досье для банковских комитетов.",
    result:
      "Успешный онбординг в двух Tier-1 банках с первой подачи без заморозок и регуляторных задержек.",
  },
  {
    id: 3,
    category: "Cross-Border",
    title:
      "Разблокировка трансграничного перевода для покупки недвижимости в Tel Aviv, Israel",
    amount: "Транзакция: $2.4M",
    duration: "Срок: 3 недели",
    problem:
      "Банк приостановил крупный международный перевод из-за недостаточного объяснения экономической логики и структуры транзитных счетов.",
    solution:
      "Оперативно структурировали цепочку документов, подготовили официальное комплаенс-заключение (SoW / SoF Narrative) и выстроили прозрачную коммуникацию по требованиям регулятора.",
    result:
      "Перевод разблокирован и акцептован принимающим банком в Израиле, сделка закрыта в срок.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Confidential Briefing",
    subtitle: "Конфиденциальный брифинг",
    desc: "Обсуждаем вашу задачу, географию капитала и целевые банки. Определяем периметр проверки в условиях строгой конфиденциальности.",
  },
  {
    num: "02",
    title: "Forensic SoW Audit",
    subtitle: "Аудит и поиск «красных флагов»",
    desc: "Анализируем вашу финансовую историю глазами банковского риск-менеджера и выявляем слабые места в документах до подачи в банк.",
  },
  {
    num: "03",
    title: "Dossier Architecture",
    subtitle: "Сборка комплаенс-досье",
    desc: "Формируем безупречно структурированный пакет документов и Compliance Memo, отвечающий стандартам Tier-1 банков.",
  },
  {
    num: "04",
    title: "Bank Onboarding & Clearance",
    subtitle: "Прохождение комплаенса",
    desc: "Сопровождаем процесс прохождения KYC/SoW и трансграничного движения средств до успешного завершения процедуры.",
  },
];

const FAQS = [
  {
    q: "Почему банки первого уровня (Tier-1) задерживают переводы или отказывают даже при легальном капитале?",
    a: "Банки не отвергают само богатство — они отвергают фрагментированные бумажные следы. Даже 100% легальный капитал вызывает блокировку или многомесячный KYC, если история его происхождения подана разрозненно и не переведена на язык банковских стандартов управления рисками.",
  },
  {
    q: "Зачем проходить Pre-Banking Compliance до обращения в банк?",
    a: "Любой отказ или заморозка в крупном банке оставляет след во внутренних системах мониторинга. Предварительный аудит (Source of Wealth Audit) позволяет выявить и закрыть все потенциальные «красные флаги» заранее, чтобы зайти в банк с безупречным досье с первого раза.",
  },
  {
    q: "С какими регионами и юрисдикциями вы работаете?",
    a: "Я базируюсь в Tel Aviv, Israel и специализируюсь на работе с клиентами и капиталом в Израиле, Европе, США и регионе СНГ (Israel, Europe, the US, and the CIS region).",
  },
  {
    q: "Как обеспечивается конфиденциальность моих финансовых данных?",
    a: "Абсолютная конфиденциальность (Absolute Discretion) — фундамент моей практики. Все консультации и аудит документов проводятся с соблюдением строжайших стандартов защиты информации и подписанием NDA.",
  },
];

export default function WealthComplianceLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"bilingual" | "en">("bilingual");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "Source of Wealth Audit",
    message: "",
  });

  const categories = ["Все", "Source of Wealth", "Tier-1 Onboarding", "Cross-Border"];
  const filteredCases =
    activeCategory === "Все"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 scroll-smooth">
      {/* ================= НАВИГАЦИЯ (HEADER) ================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Логотип / Имя и специализация */}
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

          {/* Десктоп-меню */}
          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
            <a href="#problem" className="hover:text-amber-400 transition-colors">
              {lang === "en" ? "Why Banks Freeze" : "Проблема"}
            </a>
            <a href="#expertise" className="hover:text-amber-400 transition-colors">
              Our Expertise
            </a>
            <a href="#cases" className="hover:text-amber-400 transition-colors">
              {lang === "en" ? "Case Studies" : "Кейсы"}
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About Efim
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Переключатель языка + Кнопка в шапке */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "bilingual" ? "en" : "bilingual")}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
              title="Переключить режим отображения языка"
            >
              {lang === "bilingual" ? "EN / RU" : "EN Only"}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Мобильный бургер */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильное меню */}
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
              Our Expertise (Услуги)
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Кейсы и практика
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              About Efim Liberman
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
            </div>
          </div>
        )}
      </header>

      {/* ================= БЛОК 1. ГЛАВНЫЙ ЭКРАН (HERO SECTION) ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Фоновое свечение */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Левая колонка: Текст и оффер */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Private Wealth & Compliance Advisory</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12]">
                  Pre-Banking Compliance{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    for Global Wealth
                  </span>
                </h1>

                {lang === "bilingual" && (
                  <p className="text-amber-400/90 text-base sm:text-lg font-medium">
                    Предбанковский комплаенс и структурирование глобального капитала
                  </p>
                )}
              </div>

              <div className="space-y-3 max-w-2xl">
                <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-normal">
                  Helping HNWIs and Family Offices navigate Source of Wealth checks
                  with Tier-1 banks worldwide.
                </p>
                {lang === "bilingual" && (
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Помогаем HNWI и семейным офисам проходить проверки Source of Wealth
                    в банках первого уровня по всему миру.
                  </p>
                )}
              </div>

              {/* Ключевые преимущества */}
              <div className="grid sm:grid-cols-2 gap-3.5 text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Source of Wealth Audit & Compliance Dossier</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Онбординг в Tier-1 банках (Israel, EU, US)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Локация: Tel Aviv, Israel + работа по всему миру</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Absolute Discretion (Строгая конфиденциальность)</span>
                </div>
              </div>

              {/* Кнопки призыва к действию (CTA) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <span className="block leading-tight">
                      Request a Confidential Consultation
                    </span>
                    {lang === "bilingual" && (
                      <span className="block text-[11px] font-medium text-slate-900/80">
                        Запросить конфиденциальную консультацию (WhatsApp)
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>{lang === "en" ? "Contact via Form" : "Оставить заявку"}</span>
                </a>
              </div>
            </div>

            {/* Правая колонка: Фото Ефима в костюме (Заглушка) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 shadow-2xl flex flex-col justify-between p-6">
                  {/* Заглушка портрета */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/80 via-slate-900 to-slate-950">
                    <div className="w-24 h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-10 h-10 text-amber-400" />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      [Фото Ефима Либермана в костюме]
                    </p>
                    <p className="text-slate-400 text-xs mt-2 max-w-xs">
                      Деловой портрет для главного экрана (формат 4:5)
                    </p>
                  </div>

                  {/* Верхний бейдж (вместо лицензии адвоката) */}
                  <div className="relative z-10 self-end px-3.5 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-amber-500/30 text-xs font-semibold text-amber-400 flex items-center gap-1.5 shadow-lg">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>17+ Years in Wealth Compliance</span>
                  </div>

                  {/* Нижняя карточка на фото */}
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

          {/* Полоса ключевых показателей */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">
                  {stat.label}
                </div>
                {lang === "bilingual" && (
                  <div className="text-xs text-slate-400">{stat.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= БЛОК 2. ПРОБЛЕМА (WHY DO BANKS FREEZE ACCOUNTS?) ================= */}
      <section
        id="problem"
        className="py-20 lg:py-24 bg-slate-900 text-white border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Core Challenge • Главный риск для капитала</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Why do banks freeze accounts?
                </h2>
                {lang === "bilingual" && (
                  <p className="text-xl text-amber-400 font-medium">
                    Почему банки замораживают счета?
                  </p>
                )}
              </div>

              <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-white/10 shadow-xl">
                <p className="text-lg sm:text-xl text-white leading-relaxed font-medium">
                  “Banks don&apos;t reject wealth. They reject fragmented paper trails.
                  When international capital moves across borders, a missing document
                  or a poorly explained structure can trigger months of KYC delays or a
                  permanent account freeze.”
                </p>
                {lang === "bilingual" && (
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                    Банки не отвергают богатство. Они отвергают фрагментированные
                    бумажные следы. Когда международный капитал пересекает границы,
                    отсутствующий документ или плохо объяснённая структура могут вызвать
                    месячные задержки KYC или постоянную заморозку счёта.
                  </p>
                )}
              </div>
            </div>

            {/* Триггеры риска (Визуализация проблемы) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  01. Fragmented Paper Trails (Разрозненные документы)
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Отсутствие единой логической связи между историческими сделками,
                  налоговыми декларациями и текущим остатком на счёте.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  02. Unclear Corporate & Asset Structures
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Сложные международные структуры владения без понятного для
                  европейского, американского или израильского банка комплаенс-меморандума.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-amber-400 font-semibold text-sm">
                  03. Reactive vs. Pre-Banking Approach
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Попытка собирать документы уже после блокировки перевода вместо
                  упреждающего аудита (Pre-Banking SoW Audit) до отправки средств.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= БЛОК 3. НАШИ УСЛУГИ (OUR EXPERTISE) ================= */}
      <section id="expertise" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Private Wealth & Compliance Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our Expertise{" "}
              {lang === "bilingual" && (
                <span className="text-slate-400 font-normal text-2xl sm:text-3xl">
                  / Наша экспертиза
                </span>
              )}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Комплексная подготовка капитала, документов и международных структур к
              проверкам в банках первого уровня.
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
                      {service.titleEn}
                    </h3>
                    {lang === "bilingual" && (
                      <p className="text-sm font-semibold text-amber-600 group-hover:text-amber-400 mt-1">
                        {service.titleRu}
                      </p>
                    )}

                    <p className="mt-4 text-sm text-slate-700 group-hover:text-slate-200 leading-relaxed font-medium transition-colors">
                      {service.descEn}
                    </p>

                    {lang === "bilingual" && (
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                        {service.descRu}
                      </p>
                    )}

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
                      Individual Scope
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-amber-600 group-hover:text-amber-400 flex items-center gap-1.5"
                    >
                      <span>Discuss Case</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= КЕЙСЫ И ПРАКТИКА (CASES) ================= */}
      <section id="cases" className="py-20 lg:py-28 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Примеры решённых комплаенс-кейсов
              </h2>
              <p className="text-slate-600 text-base">
                Все детали и юрисдикции анонимизированы в соответствии с политикой
                строгой конфиденциальности (Strict Discretion).
              </p>
            </div>

            {/* Фильтр по категориям */}
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
                        Запрос / Проблема:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        Решение комплаенс-задачи:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/70 -mx-7 -mb-7 p-6 rounded-b-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Результат:
                  </span>
                  <p className="text-sm font-medium text-slate-900">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= БЛОК 4. ОБО МНЕ (ABOUT EFIM LIBERMAN) ================= */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Левая колонка: Второе фото в деловом стиле + регалии */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 text-white p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-xl">
                {/* Заглушка второго фото */}
                <div className="aspect-[16/11] rounded-xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                  <Award className="w-10 h-10 text-amber-400 mb-3" />
                  <p className="text-sm font-semibold text-white">
                    [Фото Ефима Либермана в деловом стиле]
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Менее формальный деловой портрет в интерьере офиса
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
                    <span>Based in Tel Aviv, Israel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка: Текст About Efim Liberman */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Executive Profile & Discretion
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                About Efim Liberman{" "}
                {lang === "bilingual" && (
                  <span className="text-slate-400 font-normal text-2xl sm:text-3xl block sm:inline">
                    / Об Ефиме Либермане
                  </span>
                )}
              </h2>

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
                  “With over 17 years of executive experience in Wealth Compliance, I
                  have dedicated my career to bridging the gap between complex
                  international capital and strict regulatory frameworks. I specialize
                  in assisting clients across Israel, Europe, the US, and the CIS
                  region. My approach is built on absolute discretion and deep expertise
                  in banking risk management.”
                </p>

                {lang === "bilingual" && (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-4 border-t border-slate-200">
                    Имея более 17 лет опыта руководящей работы в сфере Wealth
                    Compliance, я посвятил свою карьеру преодолению разрыва между
                    сложным международным капиталом и строгими регуляторными рамками. Я
                    специализируюсь на помощи клиентам в Израиле, Европе, США и регионе
                    СНГ. Мой подход основан на абсолютной конфиденциальности и глубокой
                    экспертизе в управлении банковскими рисками.
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5 pt-2">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-500" />
                    <span>Absolute Discretion</span>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5">
                    Каждое обращение рассматривается лично и конфиденциально. Мы
                    защищаем приватность семейного и корпоративного капитала.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Взгляд изнутри банка</span>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5">
                    Понимание того, как именно мыслят комплаенс-комитеты Tier-1 банков
                    и какие формулировки снимают их вопросы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ЭТАПЫ РАБОТЫ (PROCESS) ================= */}
      <section id="process" className="py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Workflow & Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Как строится работа над вашим кейсом
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
                  {lang === "bilingual" && (
                    <p className="text-xs text-amber-400 font-medium mt-0.5">
                      {s.subtitle}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ЧАСТЫЕ ВОПРОСЫ (FAQ) ================= */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              FAQ • Частые вопросы
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Ответы на ключевые вопросы о банковском комплаенсе
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

      {/* ================= БЛОК 5. КОНТАКТЫ (LET'S DISCUSS YOUR CASE) ================= */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Левая часть: Прямые кнопки WhatsApp / Email */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Direct Advisory Contact
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Let&apos;s discuss your case
                </h2>
                {lang === "bilingual" && (
                  <p className="text-xl text-amber-400 font-medium">
                    Давайте обсудим ваш случай
                  </p>
                )}
                <p className="text-slate-300 text-base leading-relaxed pt-2">
                  Свяжитесь напрямую через WhatsApp или Email для конфиденциального
                  разбора вашей ситуации, либо оставьте запрос через форму.
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
                      <span className="block text-base">WhatsApp Consultation</span>
                      <span className="block text-xs text-emerald-300 font-normal">
                        Request a Confidential Consultation
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={EMAIL_ADDRESS}
                  className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-6 h-6 text-amber-400" />
                    <div>
                      <span className="block text-base">Direct Email</span>
                      <span className="block text-xs text-slate-400 font-normal">
                        Send case overview via email
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
                      Tel Aviv, Israel • Serving clients across Israel, Europe, the US,
                      and the CIS region.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть: Форма обратной связи */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white text-slate-900 p-8 sm:p-10 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Request Received / Запрос получен
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Благодарю за обращение. Я лично ознакомлюсь с вашим запросом и
                      свяжусь с вами конфиденциально в ближайшее время.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
                    >
                      Отправить ещё один запрос
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Request a Confidential Consultation
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Запрос на конфиденциальную консультацию по комплаенсу и
                        структурированию капитала
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          Your Name / Ваше имя *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          WhatsApp / Phone / Email *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="+972 ... / email@domain.com"
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
                        Service / Направление запроса
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({ ...formData, topic: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option>
                          Source of Wealth Audit (Аудит происхождения средств)
                        </option>
                        <option>
                          Compliance Dossier Preparation (Подготовка комплаенс-досье)
                        </option>
                        <option>
                          Cross-Border Advisory (Международные сделки и структуры)
                        </option>
                        <option>
                          KYC Delay / Account Freeze Resolution
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Brief Case Overview / Краткое описание задачи (Optional)
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

      {/* ================= ПОДВАЛ (FOOTER) ================= */}
      <footer className="py-10 bg-slate