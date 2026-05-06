import { useState } from "react";

const airlines = [
  { name: "PIA", logo: "🇵🇰", full: "Pakistan International Airlines" },
  { name: "Emirates", logo: "🇦🇪", full: "Emirates Airlines" },
  { name: "Qatar Airways", logo: "🇶🇦", full: "Qatar Airways" },
  { name: "Turkish Airlines", logo: "🇹🇷", full: "Turkish Airlines" },
  { name: "Etihad", logo: "🇦🇪", full: "Etihad Airways" },
  { name: "Air Arabia", logo: "🇦🇪", full: "Air Arabia" },
  { name: "Fly Dubai", logo: "🇦🇪", full: "Fly Dubai" },
  { name: "Saudi Airlines", logo: "🇸🇦", full: "Saudia Airlines" },
];

const routes = [
  {
    id: 1,
    from: "Islamabad",
    fromCode: "ISB",
    to: "Dubai",
    toCode: "DXB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop",
    duration: "3h 15m",
    price: "PKR 55,000",
    tag: "Most Popular",
    airline: "Emirates",
    type: "International",
  },
  {
    id: 2,
    from: "Islamabad",
    fromCode: "ISB",
    to: "London",
    toCode: "LHR",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop",
    duration: "8h 30m",
    price: "PKR 180,000",
    tag: "Top Selling",
    airline: "PIA",
    type: "International",
  },
  {
    id: 3,
    from: "Karachi",
    fromCode: "KHI",
    to: "Riyadh",
    toCode: "RUH",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80&auto=format&fit=crop",
    duration: "4h 10m",
    price: "PKR 72,000",
    tag: "High Demand",
    airline: "Saudi Airlines",
    type: "International",
  },
  {
    id: 4,
    from: "Lahore",
    fromCode: "LHE",
    to: "Istanbul",
    toCode: "IST",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80&auto=format&fit=crop",
    duration: "6h 45m",
    price: "PKR 95,000",
    tag: "Popular",
    airline: "Turkish Airlines",
    type: "International",
  },
  {
    id: 5,
    from: "Islamabad",
    fromCode: "ISB",
    to: "Doha",
    toCode: "DOH",
    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80&auto=format&fit=crop",
    duration: "3h 30m",
    price: "PKR 65,000",
    tag: "Best Value",
    airline: "Qatar Airways",
    type: "International",
  },
  {
    id: 6,
    from: "Islamabad",
    fromCode: "ISB",
    to: "Karachi",
    toCode: "KHI",
    image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&q=80&auto=format&fit=crop",
    duration: "1h 45m",
    price: "PKR 12,000",
    tag: "Domestic",
    airline: "PIA",
    type: "Domestic",
  },
  {
    id: 7,
    from: "Lahore",
    fromCode: "LHE",
    to: "Karachi",
    toCode: "KHI",
    image: "https://images.unsplash.com/photo-1604629142630-11d209431dd7?w=800&q=80&auto=format&fit=crop",
    duration: "1h 30m",
    price: "PKR 10,000",
    tag: "Domestic",
    airline: "PIA",
    type: "Domestic",
  },
  {
    id: 8,
    from: "Islamabad",
    fromCode: "ISB",
    to: "Toronto",
    toCode: "YYZ",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80&auto=format&fit=crop",
    duration: "14h 20m",
    price: "PKR 290,000",
    tag: "Long Haul",
    airline: "Qatar Airways",
    type: "International",
  },
  {
    id: 9,
    from: "Karachi",
    fromCode: "KHI",
    to: "Kuala Lumpur",
    toCode: "KUL",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80&auto=format&fit=crop",
    duration: "5h 50m",
    price: "PKR 78,000",
    tag: "Popular",
    airline: "Air Arabia",
    type: "International",
  },
];

const flightTypes = ["All", "International", "Domestic"];

export default function Flights() {
  const [tab, setTab] = useState("return");
  const [routeFilter, setRouteFilter] = useState("All");
  const [legs, setLegs] = useState([{ from: "", to: "", date: "" }]);

  const addLeg = () => {
    if (legs.length < 4) setLegs([...legs, { from: "", to: "", date: "" }]);
  };

  const removeLeg = (i) => {
    if (legs.length > 1) setLegs(legs.filter((_, idx) => idx !== i));
  };

  const updateLeg = (i, field, value) => {
    const updated = [...legs];
    updated[i][field] = value;
    setLegs(updated);
  };

  const filtered = routeFilter === "All"
    ? routes
    : routes.filter((r) => r.type === routeFilter);

  const inputClass = "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition";
  const labelClass = "text-sky-400 text-[10px] uppercase tracking-widest mb-1 block";

  return (
    <div className="w-full bg-sky-950 text-white">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[300px] sm:h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80&auto=format&fit=crop"
          alt="Flights"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sky-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4">
            Best Fares Guaranteed
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Book a Flight</h1>
          <p className="text-sky-300 mt-3 text-sm sm:text-base max-w-lg">
            Search hundreds of airlines and find the best fares for your next journey.
          </p>
        </div>
      </section>

      {/* ── SEARCH FORM ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 -mt-10 relative z-10">
        <div className="bg-sky-900/80 backdrop-blur-sm border border-cyan-400/15 rounded-2xl p-6 sm:p-8 shadow-xl shadow-sky-950/50">

          {/* Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {[
              { key: "oneway", label: "✈ One Way" },
              { key: "return", label: "⇄ Return" },
              { key: "multicity", label: "⊕ Multi-City" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                  tab === t.key
                    ? "bg-cyan-400 text-sky-950"
                    : "border border-cyan-400/20 text-sky-300 hover:border-cyan-400/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── ONE WAY ── */}
          {tab === "oneway" && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>From</label>
                  <input type="text" placeholder="City or Airport" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>To</label>
                  <input type="text" placeholder="City or Airport" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Departure Date</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Passengers</label>
                  <select className={inputClass}>
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4+ Passengers</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="sm:w-48">
                  <label className={labelClass}>Class</label>
                  <select className={inputClass}>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <button className="sm:ml-auto bg-cyan-400 text-sky-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition text-sm w-full sm:w-auto">
                  Search Flights
                </button>
              </div>
            </div>
          )}

          {/* ── RETURN ── */}
          {tab === "return" && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>From</label>
                  <input type="text" placeholder="City or Airport" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>To</label>
                  <input type="text" placeholder="City or Airport" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Departure Date</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Return Date</label>
                  <input type="date" className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="sm:w-40">
                  <label className={labelClass}>Passengers</label>
                  <select className={inputClass}>
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4+ Passengers</option>
                  </select>
                </div>
                <div className="sm:w-40">
                  <label className={labelClass}>Class</label>
                  <select className={inputClass}>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <button className="sm:ml-auto bg-cyan-400 text-sky-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition text-sm w-full sm:w-auto">
                  Search Flights
                </button>
              </div>
            </div>
          )}

          {/* ── MULTI-CITY ── */}
          {tab === "multicity" && (
            <div className="flex flex-col gap-5">
              {legs.map((leg, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-3 items-end">
                  <div className="flex-1">
                    <label className={labelClass}>From</label>
                    <input
                      type="text"
                      placeholder="City or Airport"
                      value={leg.from}
                      onChange={(e) => updateLeg(i, "from", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>To</label>
                    <input
                      type="text"
                      placeholder="City or Airport"
                      value={leg.to}
                      onChange={(e) => updateLeg(i, "to", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>Date</label>
                    <input
                      type="date"
                      value={leg.date}
                      onChange={(e) => updateLeg(i, "date", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  {legs.length > 1 && (
                    <button
                      onClick={() => removeLeg(i)}
                      className="h-11 w-11 shrink-0 rounded-lg border border-red-400/30 text-red-400 hover:bg-red-400/10 transition flex items-center justify-center text-lg"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-3 items-center">
                {legs.length < 4 && (
                  <button
                    onClick={addLeg}
                    className="border border-cyan-400/30 text-cyan-300 px-5 py-2.5 rounded-lg text-sm hover:bg-cyan-400/10 transition"
                  >
                    + Add Another Flight
                  </button>
                )}
                <div className="sm:w-40">
                  <label className={labelClass}>Passengers</label>
                  <select className={inputClass}>
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4+ Passengers</option>
                  </select>
                </div>
                <div className="sm:w-40">
                  <label className={labelClass}>Class</label>
                  <select className={inputClass}>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <button className="sm:ml-auto bg-cyan-400 text-sky-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition text-sm w-full sm:w-auto mt-2 sm:mt-0">
                  Search Flights
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-3 inline-block">
              Top Routes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Popular Flight Routes</h2>
          </div>
          {/* Route Filter */}
          <div className="flex gap-2">
            {flightTypes.map((type) => (
              <button
                key={type}
                onClick={() => setRouteFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  routeFilter === type
                    ? "bg-cyan-400 text-sky-950"
                    : "border border-cyan-400/20 text-sky-300 hover:border-cyan-400/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((route) => (
            <div
              key={route.id}
              className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-900/30 transition group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.to}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-sky-950/70 backdrop-blur-sm rounded-full px-3 py-1">
                  {route.tag}
                </span>
                <span className="absolute bottom-3 right-3 text-[11px] text-sky-300 bg-sky-950/70 backdrop-blur-sm border border-cyan-400/20 rounded-full px-3 py-1">
                  ⏱ {route.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">

                {/* Route */}
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <span>{route.fromCode}</span>
                  <span className="text-cyan-400 text-base">✈</span>
                  <span>{route.toCode}</span>
                </div>
                <p className="text-sky-400 text-xs -mt-2">
                  {route.from} → {route.to}
                </p>

                <div className="flex items-center gap-2 text-xs text-sky-400 mt-1">
                  <span>🛫</span>
                  <span>Operated by <span className="text-sky-200">{route.airline}</span></span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-cyan-400/10">
                  <div>
                    <p className="text-[10px] text-sky-400 uppercase tracking-widest">Starting from</p>
                    <p className="text-cyan-300 font-bold text-base">{route.price}</p>
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

      {/* ── AIRLINES WE WORK WITH ── */}
      <section className="bg-sky-900/30 border-y border-cyan-400/10 py-14 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4 inline-block">
              Our Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Airlines We Work With</h2>
            <p className="text-sky-300 mt-3 text-sm max-w-md mx-auto">
              We're partnered with the world's leading airlines to get you the best fares and service.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {airlines.map((airline) => (
              <div
                key={airline.name}
                className="bg-sky-900/50 border border-cyan-400/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-cyan-400/30 transition"
              >
                <span className="text-4xl">{airline.logo}</span>
                <p className="text-white font-semibold text-sm text-center">{airline.name}</p>
                <p className="text-sky-400 text-[10px] text-center leading-relaxed">{airline.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-sky-600/10 border border-cyan-400/20 rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Need Help Finding a Flight?</h2>
          <p className="text-sky-300 text-sm sm:text-base max-w-md">
            Our team is available to find you the best fares — just tell us where you want to go.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-cyan-400 text-sky-950 px-7 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Call Us Now
            </button>
            <button className="border border-sky-400 text-sky-300 px-7 py-3 rounded-lg hover:bg-sky-400 hover:text-sky-950 transition">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}