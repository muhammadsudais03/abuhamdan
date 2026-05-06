import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1604629142630-11d209431dd7?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    badge: "Abu Hamdan Aviation",
    title: "Fly With Comfort & Confidence",
    subtitle: "Book flights, visas, and travel packages with your trusted travel partner.",
    btn1: "Book Flight",
    btn2: "Explore Packages",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    badge: "Premium Experience",
    title: "Above the Clouds, Beyond Expectations",
    subtitle: "Enjoy world-class service on every route — from regional hops to long-haul journeys.",
    btn1: "View Routes",
    btn2: "Learn More",
  },
  {
    image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    badge: "Visa & Travel Services",
    title: "Your Journey Starts Right Here",
    subtitle: "From visa assistance to full travel packages — we handle every detail so you don't have to.",
    btn1: "Get Visa Help",
    btn2: "Browse Packages",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (n) => setCurrent((n + slides.length) % slides.length);
  const slide = slides[current];

  return (
    <section className="w-full  flex flex-col md:flex-row bg-sky-950">

      {/* ── SIDEBAR (hidden on mobile, 10% on desktop) ── */}
      <aside className="hidden  md:flex md:w-[10%] flex-col items-center justify-center gap-8 py-5 bg-sky-950 shrink-0 self-stretch">

        <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 rotate-180 [writing-mode:vertical-rl] whitespace-nowrap">
          {slide.badge}
        </span>

        <div className="flex flex-col gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 w-2 ${
                i === current ? "h-6 bg-cyan-400" : "h-2 bg-sky-400/40"
              }`}
            />
          ))}
        </div>

        <span className="text-[11px] text-sky-400/50 tracking-widest rotate-180 [writing-mode:vertical-rl]">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </aside>

      {/* ── SLIDER (full width mobile, 90% desktop) ── */}
      <div className="relative w-full md:w-[90%]">

        {/* Image — drives the height */}
        <div className="relative">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.image}
              alt={s.title}
              className={`w-full h-[480px] sm:h-[560px] md:h-[620px] object-cover object-center transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-sky-950/55 md:bg-gradient-to-r md:from-sky-950/85 md:via-sky-950/40 md:to-transparent" />

          {/* ── CONTENT ── */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-10 md:px-14 max-w-2xl">

            <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4 w-fit">
              {slide.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {slide.title}
            </h1>

            <p className="text-sky-200 text-sm sm:text-base md:text-lg leading-relaxed mb-7 max-w-sm md:max-w-md">
              {slide.subtitle}
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-cyan-400 text-sky-950 px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-300 transition">
                {slide.btn1}
              </button>
              <button className="border border-sky-400 text-sky-300 px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-sky-400 hover:text-sky-950 transition">
                {slide.btn2}
              </button>
            </div>
          </div>

          {/* ── MOBILE DOTS ── */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex md:hidden flex-col items-center gap-2">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-cyan-400" : "w-2 bg-sky-400/40"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-sky-400/50 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* ── ARROWS ── */}
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-950/50 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 transition flex items-center justify-center text-base sm:text-lg"
          >
            &#8592;
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-950/50 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 transition flex items-center justify-center text-base sm:text-lg"
          >
            &#8594;
          </button>

          {/* ── STAT CARDS ── */}
          <div className="absolute bottom-5 right-4 sm:right-6 md:right-8 z-20 hidden sm:flex gap-3">
            <div className="bg-sky-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3">
              <p className="text-[11px] sm:text-xs text-sky-400">Destinations</p>
              <p className="text-lg sm:text-xl font-bold text-cyan-300">120+</p>
            </div>
            <div className="bg-sky-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3">
              <p className="text-[11px] sm:text-xs text-sky-400">Happy Travelers</p>
              <p className="text-lg sm:text-xl font-bold text-cyan-300">50K+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}