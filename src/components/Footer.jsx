import { Link } from "react-router-dom";
import logo from "/logo.jpeg";

const whatsappNumber = "923149153292";

const whatsappMessage = encodeURIComponent(
  "Hello! I'd like to inquire about your travel services."
);

const WaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-5 z-50 w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-lg shadow-green-900/40 transition-all duration-300 hover:scale-110"
      >
        <WaIcon />
      </a>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll To Top"
        className="fixed bottom-6 right-5 z-50 w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-sky-950 flex items-center justify-center shadow-lg shadow-cyan-900/40 transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Footer */}
      <footer className="w-full bg-[#060C48] border-t border-cyan-400/10 text-white">

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">

            <Link to="/" className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/30 bg-white flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt="Abu Hamdan Aviation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <h2 className="text-base font-bold tracking-wide text-white">
                  ABU HAMDAN
                </h2>

                <p className="text-[10px] uppercase tracking-[4px] text-cyan-300">
                  Aviation
                </p>
              </div>

            </Link>

            <p className="text-sm leading-relaxed text-sky-300">
              Your trusted travel partner for flights, visas, Umrah,
              Hajj, and holiday packages — making every journey smooth
              and memorable.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">

              {[
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Instagram", href: "#", icon: "in" },
                { label: "LinkedIn", href: "#", icon: "li" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-sky-900/60 border border-cyan-400/20 flex items-center justify-center text-sky-300 hover:bg-cyan-400/20 hover:text-cyan-300 hover:border-cyan-400/40 transition text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}

              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-400/20 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-400/40 transition"
              >
                <WaIcon />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              {[
                { to: "/", label: "Home" },
                { to: "/flights", label: "Flights" },
                { to: "/visa", label: "Visa Services" },
                { to: "/packages", label: "Packages" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-sky-300 hover:text-cyan-400 transition flex items-center gap-2 group"
                >
                  <span className="text-cyan-400/50 group-hover:text-cyan-400 transition">
                    →
                  </span>

                  {link.label}
                </Link>
              ))}

            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Our Services
            </h3>

            <div className="flex flex-col gap-2">

              {[
                { label: "Flight Tickets", to: "/flights" },
                { label: "Umrah Packages", to: "/packages" },
                { label: "Hajj Packages", to: "/packages" },
                { label: "Tour Packages", to: "/packages" },
                { label: "Tourist Visa", to: "/visa" },
                { label: "Student Visa", to: "/visa" },
                { label: "Work Visa", to: "/visa" },
                { label: "Schengen Visa", to: "/visa" },
              ].map((service) => (
                <Link
                  key={service.label}
                  to={service.to}
                  className="text-sm text-sky-300 hover:text-cyan-400 transition flex items-center gap-2 group"
                >
                  <span className="text-cyan-400/50 group-hover:text-cyan-400 transition">
                    →
                  </span>

                  {service.label}
                </Link>
              ))}

            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4">

              {[
                {
                  icon: "📍",
                  lines: ["Office 12, Blue Area", "Islamabad, Pakistan"],
                },
                {
                  icon: "📞",
                  lines: ["+92 314 9153292", "+92 51 1234567"],
                },
                {
                  icon: "✉️",
                  lines: ["info@abuhamdanaviation.com"],
                },
                {
                  icon: "🕐",
                  lines: ["Mon–Sat: 9AM – 7PM", "Sun: 10AM – 4PM"],
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <span className="text-base mt-0.5 shrink-0">
                    {item.icon}
                  </span>

                  <div>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm leading-relaxed text-sky-300"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                </div>
              ))}

            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 border border-green-400/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition text-sm font-medium"
            >
              <WaIcon />
              WhatsApp Us
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/10" />

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-sky-400 text-center sm:text-left">
            © {new Date().getFullYear()} Abu Hamdan Aviation.
            All rights reserved.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">

            {[
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
            ].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-xs text-sky-400 hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            ))}

          </div>
        </div>

      </footer>
    </>
  );
}