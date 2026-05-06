export default function ContactUs() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-16 px-6 sm:px-10 md:px-16 relative overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      {/* ── HEADER ── */}
      <div className="max-w-6xl mx-auto mb-12 relative z-10">
        <span className="text-[11px] uppercase tracking-widest text-cyan-300 border border-cyan-400/30 bg-white/5 backdrop-blur-md rounded-full px-3 py-1 mb-4 inline-block">
          Get In Touch
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Contact Us
        </h2>

        <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-md">
          Have a question or ready to book? Our team is here to help you every step of the way.
        </p>
      </div>

      {/* ── TWO COLUMNS ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 relative z-10">

        {/* LEFT — FORM */}
        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">

          <h3 className="text-white font-semibold text-lg mb-6">
            Send a Message
          </h3>

          <div className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-cyan-300 text-xs uppercase tracking-widest">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-cyan-300 text-xs uppercase tracking-widest">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-xs uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-xs uppercase tracking-widest">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+92 300 0000000"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-xs uppercase tracking-widest">
                Subject
              </label>
              <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-cyan-400">
                <option value="">Select a topic</option>
                <option value="flight">Flight Booking</option>
                <option value="visa">Visa Services</option>
                <option value="package">Travel Packages</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-xs uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition">
              Send Message
            </button>

          </div>
        </div>

        {/* RIGHT — INFO */}
        <div className="md:w-[38%] flex flex-col gap-6">

          {[
            {
              icon: "📞",
              label: "Phone",
              lines: ["+92 300 1234567", "+92 51 1234567"],
            },
            {
              icon: "✉️",
              label: "Email",
              lines: ["info@abuhamdanaviation.com", "support@abuhamdanaviation.com"],
            },
            {
              icon: "📍",
              label: "Address",
              lines: ["Office 12, Blue Area", "Islamabad, Pakistan"],
            },
            {
              icon: "🕐",
              label: "Working Hours",
              lines: ["Mon – Sat: 9AM – 7PM", "Sun: 10AM – 4PM"],
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-lg">
                {item.icon}
              </div>

              <div>
                <p className="text-cyan-300 text-xs uppercase tracking-widest mb-1">
                  {item.label}
                </p>

                {item.lines.map((line) => (
                  <p key={line} className="text-slate-200 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
            <p className="text-cyan-300 text-xs uppercase tracking-widest mb-3">
              Follow Us
            </p>

            <div className="flex gap-3 flex-wrap">
              {["Facebook", "Instagram", "WhatsApp", "LinkedIn"].map((s) => (
                <button
                  key={s}
                  className="text-xs text-slate-200 border border-white/10 rounded-lg px-3 py-1.5 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}