import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ── Close mobile menu on page change ──
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // ── Hide on scroll down, show on scroll up ──
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // setScrolled(current > 10);

      if (current <= 0) {
        setVisible(true);
        setLastScroll(0);
        return;
      }

      if (current > lastScroll && current > 80) {
        // scrolling DOWN — hide after 80px
        setVisible(false);
        setOpen(false);
        } else if (current < lastScroll) {
        // scrolling UP — show
        setVisible(true);
        }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/flights", label: "Flights" },
    { to: "/visa", label: "Visa" },
    { to: "/packages", label: "Packages" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-16" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 ease-in-out bg-[#060C48] shadow-lg border-b border-cyan-400/10
         ${visible ? "translate-y-0" : "-translate-y-full"}
`       }
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-cyan-400/30 shadow-lg bg-white flex items-center justify-center">
                <img
                  src={logo}
                  alt="Abu Hamdan Aviation Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <h1 className="text-lg font-bold text-white tracking-wide">
                  ABU HAMDAN
                </h1>
                <p className="text-xs text-cyan-300 tracking-[4px] uppercase">
                  Aviation
                </p>
              </div>
            </Link>

            {/* ── DESKTOP MENU ── */}
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${location.pathname === link.to
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "hover:text-cyan-400 hover:bg-cyan-400/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── BOOK NOW (desktop) ── */}
            <div className="hidden md:block">
              <Link
                to="/flights"
                className="bg-yellow-400 text-[#060C48] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition text-sm"
              >
                Book Now
              </Link>
            </div>

            {/* ── HAMBURGER (mobile) ── */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-sky-800/50 transition"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
          `}
        >
          <div className="px-4 pb-5 pt-1 bg-[#060C48] border-t border-cyan-400/10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${location.pathname === link.to
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-white hover:text-cyan-400 hover:bg-cyan-400/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/flights"
              className="mt-2 w-full bg-yellow-400 text-[#060C48] py-2.5 rounded-lg font-semibold text-center hover:bg-yellow-300 transition text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}