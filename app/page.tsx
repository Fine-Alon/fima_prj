"use client";

import React, { useState } from "react";
import {
  Scale,
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Clock,
  Briefcase,
  FileText,
  Lock,
  MapPin,
  Building2,
  UserCheck,
  Menu,
  X,
} from "lucide-react";

// --- ДАННЫЕ-ЗАГЛУШКИ (Меняются за 10 минут на реальные) ---

const STATS = [
  { value: "12+ лет", label: "Юридической практики и судебного опыта" },
  { value: "94%", label: "Дел завершены в пользу доверителей" },
  { value: "$15M+", label: "Сохранённых и взысканных активов клиентов" },
  { value: "100%", label: "Строгая адвокатская тайна и защита по NDA" },
];

const SERVICES = [
  {
    icon: Building2,
    tag: "Для бизнеса",
    title: "Сопровождение сделок и контрактов",
    description:
      "[Заглушка описания] Полный правовой аудит договоров, структурирование сделок и защита от финансовых и регуляторных рисков до подписания бумаг.",
    bullets: [
      "Разработка и вычитка сложных контрактов",
      "Проверка контрагентов (Due Diligence)",
      "Участие в жёстких переговорах на вашей стороне",
    ],
    price: "от [ХХХ] $ / ₪",
  },
  {
    icon: Scale,
    tag: "Судебная практика",
    title: "Представительство в судах и арбитраже",
    description:
      "[Заглушка описания] Выстраивание выигрышной доказательной базы, взыскание задолженностей и защита ваших интересов во всех судебных инстанциях.",
    bullets: [
      "Досудебное урегулирование и претензионная работа",
      "Ведение дела «под ключ» без вашего присутствия",
      "Контроль реального исполнения решения суда",
    ],
    price: "от [ХХХ] $ / ₪",
  },
  {
    icon: ShieldCheck,
    tag: "Недвижимость",
    title: "Сделки с недвижимостью и землёй",
    description:
      "[Заглушка описания] Юридическая чистота покупки, продажи или аренды жилых и коммерческих объектов. Защита от скрытых обременений и споров.",
    bullets: [
      "Аудит истории объекта и застройщика",
      "Сопровождение расчётов и регистрация права",
      "Разрешение земельных и строительных споров",
    ],
    price: "от [ХХХ] $ / ₪",
  },
  {
    icon: UserCheck,
    tag: "Частным лицам",
    title: "Семейное и наследственное право",
    description:
      "[Заглушка описания] Деликатное решение сложных семейных вопросов, раздел сложных активов и бизнеса, составление брачных договоров и наследственное планирование.",
    bullets: [
      "Раздел имущества и защита личных активов",
      "Оформление и оспаривание наследства",
      "Международные семейные споры",
    ],
    price: "от [ХХХ] $ / ₪",
  },
  {
    icon: Briefcase,
    tag: "Защита активов",
    title: "Банкротство и реструктуризация долгов",
    description:
      "[Заглушка описания] Законное списание задолженностей, защита личного имущества от взыскания и защита руководителей от субсидиарной ответственности.",
    bullets: [
      "Антикризисный план защиты имущества",
      "Переговоры с банками и кредиторами",
      "Полное сопровождение процедуры до списания",
    ],
    price: "от [ХХХ] $ / ₪",
  },
  {
    icon: FileText,
    tag: "Консалтинг",
    title: "Экспертная консультация и правовой разбор",
    description:
      "[Заглушка описания] Глубокий разбор вашей ситуации с изучением документов, оценкой реальных судебных перспектив и пошаговым планом действий.",
    bullets: [
      "Честный прогноз шансов без ложных обещаний",
      "Письменное правовое заключение (Legal Opinion)",
      "Пошаговый алгоритм действий за 60 минут",
    ],
    price: "Фикс: [ХХХ] $ / ₪",
  },
];

const CASES = [
  {
    id: 1,
    category: "Бизнес",
    title: "Взыскание дебиторской задолженности и неустойки со строительного подрядчика",
    amount: "Сохранено: $185,000",
    duration: "Срок: 3.5 месяца",
    problem:
      "[Заглушка проблемы] Контрагент сорвал сроки поставок и отказался возвращать аванс, ссылаясь на форс-мажорные обстоятельства и выводя активы.",
    solution:
      "[Заглушка решения] Оперативно наложили обеспечительный арест на счета ответчика, доказали несостоятельность ссылок на форс-мажор и вышли на мировое соглашение на наших условиях.",
    result:
      "Клиент получил 100% основного долга + компенсацию всех судебных издержек до вынесения финального решения.",
  },
  {
    id: 2,
    category: "Недвижимость",
    title: "Защита покупателя коммерческого помещения от оспаривания сделки",
    amount: "Объект: $420,000",
    duration: "Срок: 5 месяцев",
    problem:
      "[Заглушка проблемы] Через год после покупки объекта прежний собственник попытался признать сделку недействительной и вернуть недвижимость.",
    solution:
      "[Заглушка решения] Собрали полную доказательную базу добросовестности приобретателя, провели финансовую экспертизу расчётов и разбили аргументы истца в первой и апелляционной инстанциях.",
    result:
      "Право собственности клиента полностью сохранено, в иске оппонентам отказано в полном объёме.",
  },
  {
    id: 3,
    category: "Частная практика",
    title: "Раздел совместного бизнеса и зарубежных активов без потери управления",
    amount: "Активы: $650,000",
    duration: "Срок: 2 месяца",
    problem:
      "[Заглушка проблемы] Угроза блокировки операционной деятельности компании из-за острого имущественного спора между супругами.",
    solution:
      "[Заглушка решения] Провели серию закрытых медиативных переговоров, оценили доли и составили юридически неуязвимое соглашение о разделе активов с выплатой справедливой компенсации.",
    result:
      "Спор решён без многолетних судов и огласки. Бизнес остался под 100% контролем доверителя.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Первичный разбор ситуации",
    desc: "Вы оставляете заявку или пишете в мессенджер. За 15 минут мы определяем суть проблемы и список нужных документов.",
  },
  {
    num: "02",
    title: "Аудит документов и честный прогноз",
    desc: "Изучаю материалы дела, судебную практику и прямо говорю, какие шансы на успех и какие существуют риски.",
  },
  {
    num: "03",
    title: "Прозрачный договор и фиксация цены",
    desc: "Фиксируем стоимость услуг и этапы работы в официальном договоре. Никаких скрытых доплат в процессе.",
  },
  {
    num: "04",
    title: "Реализация стратегии до результата",
    desc: "Беру на себя все переговоры, составление исков и походы в инстанции. Вы получаете регулярные отчёты в удобном мессенджере.",
  },
];

const FAQS = [
  {
    q: "Даёте ли вы 100% гарантию выигрыша дела в суде?",
    a: "[Заглушка ответа] Честный юрист никогда не обещает 100% результат там, где решение принимает судья. Однако я гарантирую: если на этапе первичного анализа я вижу, что дело заведомо проигрышное или экономически невыгодное для вас, я скажу об этом прямо и не возьмусь за работу ради гонорара.",
  },
  {
    q: "Как формируется стоимость услуг и возможна ли поэтапная оплата?",
    a: "[Заглушка ответа] Стоимость фиксируется в договоре до начала работы и зависит от сложности задачи. Для судебных и длительных проектов предусмотрена комфортная поэтапная оплата (привязка к стадиям процесса) или работа по схеме Фикс + Гонорар успеха (Success Fee).",
  },
  {
    q: "Нужно ли мне лично ходить по судам и собирать справки?",
    a: "[Заглушка ответа] Нет. По доверенности я полностью представляю ваши интересы во всех инстанциях, на переговорах и в государственных органах. Вы экономите своё время и нервы, получая краткие сводки по каждому этапу.",
  },
  {
    q: "Работаете ли вы дистанционно с клиентами из других городов и стран?",
    a: "[Заглушка ответа] Да, более 60% вопросов сегодня решаются без необходимости личного визита в офис. Консультации проходят по видеосвязи (Zoom / Google Meet), обмен документами — в защищённом электронном виде, а представительство осуществляется по доверенности.",
  },
];

export default function LawyerLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "Консультация по бизнесу / договору",
    message: "",
  });

  const categories = ["Все", "Бизнес", "Недвижимость", "Частная практика"];
  const filteredCases =
    activeCategory === "Все"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь за 5 минут подключается отправка в Telegram-бот или на почту
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 scroll-smooth">
      {/* ================= НАВИГАЦИЯ (HEADER) ================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Логотип / Имя */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
              <Scale className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="block text-white font-semibold tracking-wide text-lg leading-none">
                ИМЯ ФАМИЛИЯ
              </span>
              <span className="block text-xs text-amber-400/90 uppercase tracking-widest mt-1">
                Юридическая практика
              </span>
            </div>
          </a>

          {/* Десктоп-меню */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Услуги и цены
            </a>
            <a href="#cases" className="hover:text-amber-400 transition-colors">
              Выигранные дела
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              О юристе
            </a>
            <a href="#process" className="hover:text-amber-400 transition-colors">
              Этапы работы
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              Вопросы (FAQ)
            </a>
          </nav>

          {/* Кнопки связи в шапке */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+0000000000"
              className="text-sm font-medium text-white hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+000 (00) 000-00-00</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              Обсудить задачу
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

        {/* Мобильное выпадающее меню */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Услуги и цены
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Выигранные дела
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              О юристе
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Частые вопросы
            </a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-amber-500 text-slate-950 font-semibold text-center"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= ПЕРВЫЙ ЭКРАН (HERO) ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Декоративное фоновое свечение */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Левая колонка: Оффер */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Частная юридическая практика • Личное ведение каждого дела</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
                Защита ваших интересов,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  активов и бизнеса
                </span>{" "}
                в сложных спорах
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                [Заглушка подзаголовка] Перевожу сложные юридические проблемы на язык
                конкретных решений и цифр. Честная оценка перспектив дела на первой
                встрече — без воды, шаблонных отписок и затягивания сроков.
              </p>

              {/* Ключевые преимущества в буллитах */}
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Фиксация цены в официальном договоре</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Представительство в судах без вашего участия</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Работа онлайн и офлайн в [Ваш Город / Страна]</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Первичный экспресс-разбор за 15 минут</span>
                </div>
              </div>

              {/* Кнопки призыва к действию (CTA) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
                >
                  <span>Получить разбор ситуации</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-base transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Написать в WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Правая колонка: Заглушка фотографии юриста + карточка статуса */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Рамка портрета */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 shadow-2xl flex flex-col justify-between p-6">
                  {/* Заглушка вместо реального фото */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/80 via-slate-900 to-slate-950">
                    <div className="w-24 h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                      <Scale className="w-10 h-10 text-amber-400" />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      [Место для портретного фото юриста]
                    </p>
                    <p className="text-slate-400 text-xs mt-2 max-w-xs">
                      Рекомендуется деловой портрет в высоком разрешении (вертикальный формат 4:5)
                    </p>
                  </div>

                  {/* Верхний бейдж */}
                  <div className="relative z-10 self-end px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Лицензия № [000000]</span>
                  </div>

                  {/* Нижняя плашка с цитатой */}
                  <div className="relative z-10 p-5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">Имя Фамилия</span>
                      <span className="text-xs text-amber-400 font-medium">
                        Старший партнёр / Адвокат
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      «Моя задача — не просто цитировать законы, а дать клиенту предсказуемый,
                      безопасный и финансово выгодный результат».
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Блок цифр доверия */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= УСЛУГИ И ЦЕНЫ (SERVICES) ================= */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Специализация и практика
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Ключевые направления юридической помощи
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              [Заглушка описания] Выберите направление, чтобы ознакомиться с форматом
              работы и ориентировочной стоимостью услуг.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-slate-50 hover:bg-slate-950 border border-slate-200 hover:border-slate-800 p-7 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-200/80 group-hover:bg-white/10 text-slate-700 group-hover:text-amber-400 transition-colors">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-200/80 group-hover:border-white/10 pt-4">
                      {service.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-300 flex items-start gap-2 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/80 group-hover:border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                        Стоимость
                      </span>
                      <span className="text-base font-bold text-slate-900 group-hover:text-amber-400 transition-colors">
                        {service.price}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-amber-600 group-hover:text-white flex items-center gap-1.5"
                    >
                      <span>Заказать</span>
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
                Доказанная результативность
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Примеры решённых задач клиентов
              </h2>
              <p className="text-slate-600 text-base">
                Все имена и названия компаний изменены для соблюдения адвокатской тайны.
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

          {/* Карточки кейсов */}
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
                        Ситуация:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        Что было сделано:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/70 -mx-7 -mb-7 p-6 rounded-b-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Итоговый результат:
                  </span>
                  <p className="text-sm font-medium text-slate-900">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= О ЮРИСТЕ И ПРИНЦИПАХ (ABOUT) ================= */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Левая колонка: Заглушка второго фото / дипломов */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 text-white p-8 border border-slate-800 space-y-6 relative overflow-hidden">
                <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">
                  Образование, статус и квалификация
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  [Заглушка биографии] Выпускник [Название Университета], член Коллегии
                  адвокатов / Ассоциации юристов с [20ХХ] года. Опыт работы как на стороне
                  крупного корпоративного сектора, так и в защите частных доверителей.
                </p>
                <div className="space-y-3 pt-2 border-t border-white/10 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Диплом магистра права [Университет, Год]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Лицензия на адвокатскую деятельность № [ХХХХХ]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Свободное владение языками: [Язык 1, Язык 2, Язык 3]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка: Почему выбирают */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Стандарты работы
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Почему доверители рекомендуют меня партнёрам и близким
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                [Заглушка текста] В юридическом бизнесе легко столкнуться с конвейерным
                подходом, когда договор подписывает известный партнёр, а дело передают
                неопытному стажёру. В моей практике вы работаете лично со мной от первой
                консультации до получения исполнительного листа.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900">Говорю на понятном языке</h4>
                  <p className="text-sm text-slate-600 mt-1.5">
                    Не перегружаю вас сложными номерами статей — сразу объясняю, какие у
                    вас варианты действий и сколько это стоит.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900">Фокус на экономической выгоде</h4>
                  <p className="text-sm text-slate-600 mt-1.5">
                    Суд ради суда не имеет смысла. Мы выбираем тот путь, который быстрее и
                    дешевле принесёт вам реальные деньги или сохранит имущество.
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
              Прозрачный алгоритм
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Как строится работа над вашей задачей
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
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
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
              Ответы на вопросы
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Что важно знать перед началом работы
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

      {/* ================= КОНТАКТЫ И ФОРМА ЗАЯВКИ (CONTACT) ================= */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Левая часть: Прямые контакты */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Связь с юристом
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Опишите вашу ситуацию — разберём её сегодня
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Оставьте контакты в форме или напишите напрямую в мессенджер. Все
                  переданные сведения строго конфиденциальны.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+0000000000"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Телефон для звонков</span>
                    <span className="text-lg font-semibold text-white">
                      +000 (00) 000-00-00
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://t.me/username"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-medium transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    <span>Telegram</span>
                  </a>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="block font-semibold text-white">
                      Адрес офиса для личных встреч:
                    </span>
                    <span className="text-slate-300">
                      [Заглушка адреса: г. Город, ул. Примерная, д. 10, Бизнес-центр «Название», офис 405]
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
                      Заявка успешно отправлена!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Спасибо за обращение. Я лично ознакомлюсь с вашим запросом и свяжусь с
                      вами в ближайшее время.
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
                    <h3 className="text-2xl font-bold text-slate-900">
                      Запись на первичную консультацию
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          Ваше имя *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Александр"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                          Телефон или мессенджер *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+000 (00) 000-00-00"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Категория вопроса
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({ ...formData, topic: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option>Консультация по бизнесу / договору</option>
                        <option>Судебный спор / Взыскание долга</option>
                        <option>Сопровождение сделки с недвижимостью</option>
                        <option>Семейное / Наследственное право</option>
                        <option>Другой вопрос</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Краткое описание ситуации (необязательно)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Опишите в двух словах суть вопроса..."
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
                      Получить консультацию юриста
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                      Гарантируется соблюдение адвокатской тайны.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ПОДВАЛ (FOOTER) ================= */}
      <footer className="py-10 bg-slate-950 border-t border-white/10 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
           © 2026 Юридическая практика «[Имя Фамилия]». Все права
            {/* © {new Date().getFullYear()} Юридическая практика «[Имя Фамилия]». Все права */}
            защищены.
          </div>
          <div className="text-slate-500">
            Информация на сайте не является публичной офертой.
          </div>
        </div>
      </footer>
    </div>
  );
}