import { useState } from "react";

const categories = ["All", "Tourist", "Student", "Work", "Business", "Schengen", "Visit"];

const visas = [
  // ── TOURIST ──
  {
    id: 1,
    category: "Tourist",
    country: "United Kingdom",
    flag: "🇬🇧",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop",
    description: "Explore the historic streets of London, Edinburgh & beyond with a UK Tourist Visa.",
    duration: "6 Months",
    processing: "15–20 Working Days",
    price: "PKR 35,000",
    includes: ["Application Assistance", "Document Checklist", "Interview Prep", "Status Tracking"],
  },
  {
    id: 2,
    category: "Tourist",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    tag: "Fast Processing",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop",
    description: "Visit Dubai, Abu Dhabi & more with a hassle-free UAE Tourist Visa.",
    duration: "30 / 60 / 90 Days",
    processing: "3–5 Working Days",
    price: "PKR 18,000",
    includes: ["Online Application", "Document Review", "Express Option", "Status Tracking"],
  },
  {
    id: 3,
    category: "Tourist",
    country: "Malaysia",
    flag: "🇲🇾",
    tag: "Easy Approval",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80&auto=format&fit=crop",
    description: "Discover the stunning culture and beaches of Malaysia with ease.",
    duration: "30 Days",
    processing: "5–7 Working Days",
    price: "PKR 12,000",
    includes: ["Application Assistance", "Document Checklist", "Status Tracking"],
  },
  {
    id: 4,
    category: "Tourist",
    country: "Turkey",
    flag: "🇹🇷",
    tag: "E-Visa",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80&auto=format&fit=crop",
    description: "Get your Turkey e-Visa quickly and explore Istanbul & Cappadocia.",
    duration: "30 Days",
    processing: "2–3 Working Days",
    price: "PKR 8,000",
    includes: ["E-Visa Application", "Document Review", "Quick Processing"],
  },

  // ── STUDENT ──
  {
    id: 5,
    category: "Student",
    country: "United Kingdom",
    flag: "🇬🇧",
    tag: "Most Sought",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80&auto=format&fit=crop",
    description: "Study at world-renowned UK universities with our complete student visa support.",
    duration: "Course Duration",
    processing: "3–4 Weeks",
    price: "PKR 45,000",
    includes: ["CAS Guidance", "Document Prep", "Interview Coaching", "Biometrics Help"],
  },
  {
    id: 6,
    category: "Student",
    country: "Canada",
    flag: "🇨🇦",
    tag: "High Demand",
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800&q=80&auto=format&fit=crop",
    description: "Pursue your education in Canada with expert visa guidance from our team.",
    duration: "Course Duration",
    processing: "8–12 Weeks",
    price: "PKR 55,000",
    includes: ["LOA Guidance", "SOP Writing", "Document Prep", "Full Support"],
  },
  {
    id: 7,
    category: "Student",
    country: "Australia",
    flag: "🇦🇺",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80&auto=format&fit=crop",
    description: "Study in Australia with a Student visa — we guide you through every step.",
    duration: "Course Duration",
    processing: "4–8 Weeks",
    price: "PKR 50,000",
    includes: ["CoE Guidance", "GTE Statement", "Document Review", "Full Support"],
  },

  // ── WORK ──
  {
    id: 8,
    category: "Work",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tag: "High Demand",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80&auto=format&fit=crop",
    description: "Secure your work visa for Saudi Arabia with our end-to-end processing service.",
    duration: "1–2 Years",
    processing: "2–4 Weeks",
    price: "PKR 25,000",
    includes: ["Iqama Guidance", "Medical Coordination", "Document Attestation", "Full Support"],
  },
  {
    id: 9,
    category: "Work",
    country: "United Kingdom",
    flag: "🇬🇧",
    tag: "Skilled Worker",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    description: "Apply for a UK Skilled Worker visa with expert support from our consultants.",
    duration: "Up to 5 Years",
    processing: "3–8 Weeks",
    price: "PKR 60,000",
    includes: ["Sponsorship Guidance", "CoS Support", "Document Prep", "Interview Prep"],
  },

  // ── BUSINESS ──
  {
    id: 10,
    category: "Business",
    country: "China",
    flag: "🇨🇳",
    tag: "Trade Hub",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80&auto=format&fit=crop",
    description: "Visit China for trade, meetings & business events with a smooth visa process.",
    duration: "30–90 Days",
    processing: "5–10 Working Days",
    price: "PKR 20,000",
    includes: ["Invitation Letter Help", "Document Review", "Application Filing"],
  },
  {
    id: 11,
    category: "Business",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80&auto=format&fit=crop",
    description: "Attend trade fairs, meetings & conferences in the UAE with a Business Visa.",
    duration: "30–90 Days",
    processing: "3–5 Working Days",
    price: "PKR 22,000",
    includes: ["Application Assistance", "Document Checklist", "Express Option"],
  },

  // ── SCHENGEN ──
  {
    id: 12,
    category: "Schengen",
    country: "Germany",
    flag: "🇩🇪",
    tag: "Europe Gateway",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80&auto=format&fit=crop",
    description: "Travel across 26 European countries with a Germany Schengen Visa.",
    duration: "90 Days / 180 Days",
    processing: "15–20 Working Days",
    price: "PKR 40,000",
    includes: ["Application Assistance", "Travel Insurance", "Itinerary Planning", "Interview Prep"],
  },
  {
    id: 13,
    category: "Schengen",
    country: "France",
    flag: "🇫🇷",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop",
    description: "Explore Paris and all of Europe with a France Schengen Visa.",
    duration: "90 Days / 180 Days",
    processing: "15–20 Working Days",
    price: "PKR 38,000",
    includes: ["Application Help", "Travel Insurance", "Document Review", "Status Tracking"],
  },

  // ── VISIT ──
  {
    id: 14,
    category: "Visit",
    country: "Canada",
    flag: "🇨🇦",
    tag: "Family Visit",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80&auto=format&fit=crop",
    description: "Visit your family or friends in Canada with a Temporary Resident Visa.",
    duration: "6 Months",
    processing: "8–12 Weeks",
    price: "PKR 48,000",
    includes: ["Invitation Letter Guide", "Document Prep", "Application Filing", "Full Support"],
  },
  {
    id: 15,
    category: "Visit",
    country: "United States",
    flag: "🇺🇸",
    tag: "B1/B2 Visa",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80&auto=format&fit=crop",
    description: "Visit the USA to meet family or attend events — we guide you through the B1/B2 process.",
    duration: "Up to 10 Years",
    processing: "4–12 Weeks",
    price: "PKR 65,000",
    includes: ["DS-160 Filing", "Interview Coaching", "Document Prep", "Mock Interview"],
  },
];

export default function Visas() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? visas
    : visas.filter((v) => v.category === active);

  return (
    <div className="w-full bg-sky-950 text-white">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[300px] sm:h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1400&q=80&auto=format&fit=crop"
          alt="Visa Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sky-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4">
            Hassle-Free Processing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Visa Services</h1>
          <p className="text-sky-300 mt-3 text-sm sm:text-base max-w-lg">
            Tourist, Student, Work, Business, Schengen & Visit visas — we handle it all for you.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-0 z-30 bg-sky-950/95 backdrop-blur-sm border-b border-cyan-400/10 py-4 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto flex gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                active === cat
                  ? "bg-cyan-400 text-sky-950"
                  : "border border-cyan-400/20 text-sky-300 hover:border-cyan-400/50 hover:text-cyan-300"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-sky-400/50 text-xs self-center hidden sm:block">
            {filtered.length} visa{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>
      </section>

      {/* ── VISA GRID ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((visa) => (
            <div
              key={visa.id}
              className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-900/30 transition group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={visa.image}
                  alt={visa.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent" />
                {/* Flag + Country */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl">{visa.flag}</span>
                  <span className="text-white font-semibold text-sm">{visa.country}</span>
                </div>
                {/* Tag */}
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-sky-950/70 backdrop-blur-sm rounded-full px-3 py-1">
                  {visa.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400">{visa.category} Visa</span>
                <p className="text-sky-300 text-sm leading-relaxed">{visa.description}</p>

                {/* Meta */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex items-center gap-2 text-xs text-sky-400">
                    <span>⏱</span>
                    <span>Processing: <span className="text-sky-200">{visa.processing}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-sky-400">
                    <span>📅</span>
                    <span>Validity: <span className="text-sky-200">{visa.duration}</span></span>
                  </div>
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {visa.includes.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] text-sky-300 bg-cyan-400/5 border border-cyan-400/15 rounded-full px-2.5 py-1"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-cyan-400/10">
                  <div>
                    <p className="text-[10px] text-sky-400 uppercase tracking-widest">Service Fee</p>
                    <p className="text-cyan-300 font-bold text-base">{visa.price}</p>
                  </div>
                  <button className="bg-cyan-400 text-sky-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-sky-900/30 border-y border-cyan-400/10 py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4 inline-block">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Abu Hamdan for Visas?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "High Success Rate", desc: "We have a proven track record of successful visa approvals across all categories." },
              { icon: "⚡", title: "Fast Processing", desc: "We move quickly so you don't miss your travel dates — express options available." },
              { icon: "📋", title: "Complete Guidance", desc: "From document checklist to interview prep — we handle every step with you." },
              { icon: "🤝", title: "Dedicated Support", desc: "A real person is assigned to your case — no bots, no confusion, just help." },
            ].map((item) => (
              <div key={item.title} className="bg-sky-900/50 border border-cyan-400/10 rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-base">{item.title}</h3>
                <p className="text-sky-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-sky-600/10 border border-cyan-400/20 rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Not Sure Which Visa You Need?</h2>
          <p className="text-sky-300 text-sm sm:text-base max-w-md">
            Our visa consultants are here to help. Tell us your destination and purpose — we'll handle the rest.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-cyan-400 text-sky-950 px-7 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Get Free Consultation
            </button>
            <button className="border border-sky-400 text-sky-300 px-7 py-3 rounded-lg hover:bg-sky-400 hover:text-sky-950 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}