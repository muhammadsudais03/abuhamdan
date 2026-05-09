// src/Admin/AdminDashboard.jsx
import { Link } from "react-router-dom";
import { useAdmin } from "./AdminContext";

const statusStyle = {
  Confirmed:  "bg-green-400/10 text-green-400 border-green-400/20",
  Pending:    "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Processing: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Rejected:   "bg-red-400/10 text-red-400 border-red-400/20",
  Approved:   "bg-green-400/10 text-green-400 border-green-400/20",
};

export default function AdminDashboard() {
  const { stats, bookings, messages } = useAdmin();

  const statCards = [
    { label: "Total Bookings",    value: stats.totalBookings,    sub: `${stats.confirmedBookings} confirmed`,  icon: "🎫", to: "bookings"  },
    { label: "Visa Applications", value: stats.totalVisas,       sub: `${stats.pendingVisas} pending`,         icon: "📋", to: "visas"     },
    { label: "Active Packages",   value: stats.activePackages,   sub: `${stats.totalPackages} total`,          icon: "🧳", to: "packages"  },
    { label: "Active Flights",    value: stats.activeFlights,    sub: `${stats.totalFlights} total`,           icon: "✈️",  to: "flights"   },
    { label: "Unread Messages",   value: stats.unreadMessages,   sub: `${stats.totalMessages} total`,          icon: "💬", to: "messages"  },
    { label: "Team Members",      value: stats.totalTeam,        sub: "All active",                            icon: "👥", to: "team"      },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* ── WELCOME ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-white font-bold text-2xl">Good morning, Admin 👋</h2>
          <p className="text-sky-400 text-sm mt-1">Here's what's happening with Abu Hamdan Aviation today.</p>
        </div>
        <div className="text-sky-400 text-sm bg-sky-900/40 border border-cyan-400/10 rounded-xl px-4 py-2">
          📅 {new Date().toDateString()}
        </div>
      </div>

      {/* ── STATS GRID ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map((s) => (
          <Link
            key={s.label}
            to={`/admin/${s.to}`}
            className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-4 flex flex-col gap-2 hover:border-cyan-400/30 transition group"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition">View →</span>
            </div>
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sky-400 text-xs leading-tight">{s.label}</p>
            <p className="text-cyan-400 text-[10px]">{s.sub}</p>
          </Link>
        ))}
      </div>

      {/* ── TWO COLUMNS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-400/10">
            <h3 className="text-white font-semibold text-sm">Recent Bookings</h3>
            <Link to="/admin/bookings" className="text-cyan-400 text-xs hover:text-cyan-300 transition">View All →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-400/10">
                  <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">ID</th>
                  <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Customer</th>
                  <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden sm:table-cell">Service</th>
                  <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Status</th>
                  <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden md:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 5).map((b) => (
                  <tr key={b.id} className="border-b border-cyan-400/5 hover:bg-sky-800/20 transition">
                    <td className="px-5 py-3 text-cyan-400 text-xs font-mono">#{b.id}</td>
                    <td className="px-5 py-3 text-white text-xs">{b.name}</td>
                    <td className="px-5 py-3 text-sky-300 text-xs hidden sm:table-cell">{b.service}</td>
                    <td className="px-5 py-3">
                      <span className={`text-[10px] px-2 py-1 rounded-full border ${statusStyle[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sky-400 text-xs hidden md:table-cell">{b.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-400/10">
            <h3 className="text-white font-semibold text-sm">Recent Messages</h3>
            <Link to="/admin/messages" className="text-cyan-400 text-xs hover:text-cyan-300 transition">View All →</Link>
          </div>
          <div className="flex flex-col divide-y divide-cyan-400/5">
            {messages.slice(0, 4).map((m) => (
              <div
                key={m.id}
                className={`px-5 py-4 flex flex-col gap-1 hover:bg-sky-800/20 transition cursor-pointer ${!m.read ? "bg-cyan-400/5" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-medium ${m.read ? "text-sky-300" : "text-white"}`}>{m.name}</p>
                  {!m.read && <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />}
                </div>
                <p className="text-sky-400 text-xs">{m.subject}</p>
                <p className="text-sky-600 text-[10px]">{m.date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── QUICK ACTIONS ── */}
      <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-5">
        <h3 className="text-white font-semibold text-sm mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Add Package",   to: "/admin/packages", icon: "🧳" },
            { label: "Add Flight",    to: "/admin/flights",  icon: "✈️" },
            { label: "Review Visas",  to: "/admin/visas",    icon: "📋" },
            { label: "Read Messages", to: "/admin/messages", icon: "💬" },
            { label: "Edit Team",     to: "/admin/team",     icon: "👥" },
            { label: "Edit Pages",    to: "/admin/pages",    icon: "🗂️" },
          ].map((a) => (
            <Link
              key={a.label}
              to={a.to}
              className="flex items-center gap-2 bg-sky-950/60 border border-cyan-400/15 text-sky-300 hover:text-cyan-400 hover:border-cyan-400/30 px-4 py-2.5 rounded-xl text-sm transition"
            >
              <span>{a.icon}</span> {a.label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}