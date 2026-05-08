// src/admin/AdminLayout.jsx
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.jpeg";

const navItems = [
  { to: "dashboard",  icon: "📊", label: "Dashboard" },
  { to: "bookings",   icon: "🎫", label: "Bookings" },
  { to: "flights",    icon: "✈️",  label: "Flights" },
  { to: "visas",      icon: "📋", label: "Visa Applications" },
  { to: "packages",   icon: "🧳", label: "Packages" },
  { to: "messages",   icon: "💬", label: "Messages" },
  { to: "team",       icon: "👥", label: "Team" },
  { to: "pages",      icon: "🗂️",  label: "Page Content" },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Auth guard
  useEffect(() => {
    if (localStorage.getItem("adminAuth") !== "true") {
      navigate("/admin");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  const active = location.pathname.split("/").pop();

  return (
    <div className="min-h-screen bg-sky-950 flex text-white">

      {/* ── SIDEBAR OVERLAY (mobile) ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-[#060C48] border-r border-cyan-400/10 z-30
        flex flex-col transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:z-auto
      `}>

        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-cyan-400/10">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400/30 bg-white shrink-0">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">ABU HAMDAN</p>
            <p className="text-cyan-300 text-[10px] tracking-widest uppercase">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={`/admin/${item.to}`}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${active === item.to
                  ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/25"
                  : "text-sky-300 hover:bg-sky-800/40 hover:text-white"
                }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-cyan-400/10 flex flex-col gap-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-sky-300 hover:bg-sky-800/40 hover:text-white transition"
          >
            <span>🌐</span> View Website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-400/10 transition w-full text-left"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">

        {/* Topbar */}
        <header className="bg-[#060C48]/80 backdrop-blur-sm border-b border-cyan-400/10 px-4 sm:px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-sky-800/50 transition"
            >
              <span className="block w-5 h-0.5 bg-white rounded" />
              <span className="block w-5 h-0.5 bg-white rounded" />
              <span className="block w-5 h-0.5 bg-white rounded" />
            </button>
            <h1 className="text-white font-semibold text-base sm:text-lg capitalize">
              {navItems.find(n => n.to === active)?.label || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <p className="text-white text-xs font-medium">Admin</p>
              <p className="text-sky-400 text-[10px]">admin@abuhamdan.com</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}