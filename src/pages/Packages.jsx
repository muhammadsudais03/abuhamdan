import { useState } from "react";

const categories = ["All", "Umrah", "Hajj", "Tours", "Tickets"];

const packages = [
  // ── UMRAH ──
  {
    id: 1,
    category: "Umrah",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&auto=format&fit=crop",
    title: "Economy Umrah Package",
    description: "A complete and affordable Umrah experience including flights, hotel, and visa.",
    duration: "10 Days",
    price: "PKR 180,000",
    includes: ["Return Flights", "4-Star Hotel", "Visa", "Transport"],
  },
  {
    id: 2,
    category: "Umrah",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80&auto=format&fit=crop",
    title: "Premium Umrah Package",
    description: "Enjoy a luxury Umrah journey with 5-star hotels steps away from Haram.",
    duration: "14 Days",
    price: "PKR 320,000",
    includes: ["Business Class Flights", "5-Star Hotel", "Visa", "VIP Transport", "Guide"],
  },
  {
    id: 3,
    category: "Umrah",
    tag: "Family Deal",
    image: "https://images.unsplash.com/photo-1537031934536-69d4c3e04a3a?w=800&q=80&auto=format&fit=crop",
    title: "Family Umrah Package",
    description: "Specially designed for families with kids — comfortable, affordable, and memorable.",
    duration: "12 Days",
    price: "PKR 250,000",
    includes: ["Return Flights", "Family Room", "Visa", "Meals", "Transport"],
  },

  // ── HAJJ ──
  {
    id: 4,
    category: "Hajj",
    tag: "Standard",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=80&auto=format&fit=crop",
    title: "Standard Hajj Package",
    description: "A complete Hajj package with all essential services covered for a spiritual journey.",
    duration: "25 Days",
    price: "PKR 850,000",
    includes: ["Return Flights", "Hotel in Makkah & Madinah", "Visa", "Meals", "Guide"],
  },
  {
    id: 5,
    category: "Hajj",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1565035708-41a1d5bd2ded?w=800&q=80&auto=format&fit=crop",
    title: "Premium Hajj Package",
    description: "Experience Hajj in complete comfort with luxury accommodation and dedicated support.",
    duration: "30 Days",
    price: "PKR 1,400,000",
    includes: ["Business Class", "5-Star Hotels", "Visa", "All Meals", "Personal Guide", "VIP Transport"],
  },

  // ── TOURS ──
  {
    id: 6,
    category: "Tours",
    tag: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop",
    title: "Europe Explorer",
    description: "Visit 5 stunning European countries in one unforgettable holiday package.",
    duration: "15 Days",
    price: "PKR 550,000",
    includes: ["Return Flights", "4-Star Hotels", "Visa", "Tours", "Breakfast"],
  },
  {
    id: 7,
    category: "Tours",
    tag: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80&auto=format&fit=crop",
    title: "Thailand & Bali Getaway",
    description: "Sun, beaches, temples, and street food — the ultimate Southeast Asia trip.",
    duration: "10 Days",
    price: "PKR 280,000",
    includes: ["Return Flights", "Hotel", "Visa", "City Tours"],
  },
  {
    id: 8,
    category: "Tours",
    tag: "Northern Pakistan",
    image: "https://images.unsplash.com/photo-1586176798893-930b4eb70b9c?w=800&q=80&auto=format&fit=crop",
    title: "Hunza & Skardu Adventure",
    description: "Discover the breathtaking beauty of Northern Pakistan — Hunza, Skardu & beyond.",
    duration: "8 Days",
    price: "PKR 95,000",
    includes: ["Transport", "Hotel", "Meals", "Local Guide"],
  },

  // ── TICKETS ──
  {
    id: 9,
    category: "Tickets",
    tag: "International",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop",
    title: "International Flight Tickets",
    description: "Best fares to destinations worldwide — economy, business, and first class available.",
    duration: "Flexible",
    price: "Starting PKR 60,000",
    includes: ["All Airlines", "Best Fares", "24/7 Support", "Group Discounts"],
  },
  {
    id: 10,
    category: "Tickets",
    tag: "Domestic",
    image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&q=80&auto=format&fit=crop",
    title: "Domestic Flight Tickets",
    description: "Fly across Pakistan affordably — Karachi, Lahore, Islamabad, Peshawar & more.",
    duration: "Flexible",
    price: "Starting PKR 8,000",
    includes: ["PIA & Private Airlines", "Best Fares", "Quick Booking"],
  },
];

export default function Packages() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? packages
    : packages.filter((p) => p.category === active);

  return (
    <div className="w-full bg-sky-950 text-white">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[300px] sm:h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1400&q=80&auto=format&fit=crop"
          alt="Packages"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sky-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4">
            Travel With Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Our Packages</h1>
          <p className="text-sky-300 mt-3 text-sm sm:text-base max-w-lg">
            From Umrah & Hajj to holidays and flight tickets — we've got the perfect package for you.
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
            {filtered.length} package{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-900/30 transition group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-sky-950/70 backdrop-blur-sm rounded-full px-3 py-1">
                  {pkg.tag}
                </span>
                {/* Duration */}
                <span className="absolute bottom-3 right-3 text-[11px] text-sky-300 bg-sky-950/70 backdrop-blur-sm border border-cyan-400/20 rounded-full px-3 py-1">
                  ⏱ {pkg.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400">{pkg.category}</span>
                <h3 className="text-white font-bold text-lg leading-snug">{pkg.title}</h3>
                <p className="text-sky-300 text-sm leading-relaxed">{pkg.description}</p>

                {/* Includes */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {pkg.includes.map((item) => (
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
                    <p className="text-[10px] text-sky-400 uppercase tracking-widest">Starting from</p>
                    <p className="text-cyan-300 font-bold text-base">{pkg.price}</p>
                  </div>
                  <button className="bg-cyan-400 text-sky-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-sky-600/10 border border-cyan-400/20 rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-sky-300 text-sm sm:text-base max-w-md">
            We create custom travel packages tailored just for you. Get in touch and let's plan your perfect trip together.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-cyan-400 text-sky-950 px-7 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Get Custom Package
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