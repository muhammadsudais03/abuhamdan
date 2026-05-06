const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "120+", label: "Destinations Covered" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "98%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Ahmed Abu Hamdan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
    bio: "With over 10 years in the aviation industry, Ahmed built Abu Hamdan Aviation from the ground up with one goal — making travel simple for everyone.",
  },
  {
    name: "Sara Malik",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    bio: "Sara keeps everything running smoothly behind the scenes, ensuring every booking, visa, and package is handled with care.",
  },
  {
    name: "Usman Tariq",
    role: "Lead Travel Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    bio: "Usman has helped thousands of families plan their dream trips, from Umrah packages to international holidays.",
  },
  {
    name: "Hina Raza",
    role: "Visa Services Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    bio: "Hina specializes in visa processing across 50+ countries, making the paperwork side of travel stress-free.",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-sky-950 text-white">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1400&q=80&auto=format&fit=crop"
          alt="About Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sky-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">About Us</h1>
          <p className="text-sky-300 mt-3 text-sm sm:text-base max-w-lg">
            We're not just a travel agency — we're your travel family.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16 flex flex-col md:flex-row gap-12 items-center">

        {/* Image */}
        <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/30 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop"
            alt="Our Story"
            className="w-full h-[300px] sm:h-[380px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 w-fit">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Born From a Passion <br className="hidden sm:block" /> for Travel
          </h2>
          <p className="text-sky-300 text-sm sm:text-base leading-relaxed">
            Abu Hamdan Aviation started in a small office in Islamabad with a big dream — to make travel accessible, affordable, and stress-free for every Pakistani family. What began as a one-man operation has grown into a trusted team of travel professionals serving thousands of happy customers every year.
          </p>
          <p className="text-sky-300 text-sm sm:text-base leading-relaxed">
            From booking your first international flight to handling complex multi-country visa applications, we've been there for our customers every step of the way. And we're just getting started.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-cyan-400 text-sky-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition text-sm">
              Book a Flight
            </button>
            <button className="border border-sky-400 text-sky-300 px-6 py-3 rounded-lg hover:bg-sky-400 hover:text-sky-950 transition text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-sky-900/30 border-y border-cyan-400/10 py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-sky-900/50 border border-cyan-400/10 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl">
              🎯
            </div>
            <span className="text-[11px] uppercase tracking-widest text-cyan-400">Our Mission</span>
            <h3 className="text-xl font-bold text-white">Making Travel Simple for Everyone</h3>
            <p className="text-sky-300 text-sm leading-relaxed">
              Our mission is to take the stress out of travel planning. Whether you're flying for business, heading on a family holiday, or going for Umrah — we handle every detail so you can focus on the journey, not the paperwork.
            </p>
          </div>

          <div className="bg-sky-900/50 border border-cyan-400/10 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl">
              🌍
            </div>
            <span className="text-[11px] uppercase tracking-widest text-cyan-400">Our Vision</span>
            <h3 className="text-xl font-bold text-white">Pakistan's Most Trusted Travel Partner</h3>
            <p className="text-sky-300 text-sm leading-relaxed">
              We envision a Pakistan where every family can travel the world with confidence and ease. We're building the most reliable, transparent, and customer-first travel agency in the country — one happy traveler at a time.
            </p>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4 inline-block">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Journey So Far</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-6 flex flex-col items-center text-center gap-2"
            >
              <span className="text-4xl sm:text-5xl font-bold text-cyan-400">{stat.value}</span>
              <span className="text-sky-300 text-xs sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-sky-900/30 border-t border-cyan-400/10 py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 rounded-full px-3 py-1 mb-4 inline-block">
              The People Behind It All
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet Our Team</h2>
            <p className="text-sky-300 mt-3 text-sm sm:text-base max-w-lg mx-auto">
              A friendly bunch of travel lovers dedicated to making your journey unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-sky-900/50 border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition group"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h4 className="text-white font-semibold text-base">{member.name}</h4>
                  <span className="text-cyan-400 text-xs uppercase tracking-widest">{member.role}</span>
                  <p className="text-sky-300 text-xs leading-relaxed mt-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-sky-600/10 border border-cyan-400/20 rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Fly With Us?</h2>
          <p className="text-sky-300 text-sm sm:text-base max-w-md">
            Let's plan your next adventure together. Get in touch with our team today.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-cyan-400 text-sky-950 px-7 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Book a Flight
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