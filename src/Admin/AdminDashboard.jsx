// src/admin/AdminDashboard.jsx
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Bookings",     value: "128",  change: "+12 this week",  icon: "🎫", color: "cyan",  to: "bookings" },
  { label: "Visa Applications",  value: "54",   change: "+5 this week",   icon: "📋", color: "sky",   to: "visas" },
  { label: "Active Packages",    value: "10",   change: "All live",       icon: "🧳", color: "cyan",  to: "packages" },
  { label: "Flight Inquiries",   value: "76",   change: "+8 this week",   icon: "✈️",  color: "sky",   to: "flights" },
  { label: "New Messages",       value: "23",   change: "5 unread",       icon: "💬", color: "cyan",  to: "messages" },
  { label: "Team Members",       value: "4",    change: "All active",     icon: "👥", color: "sky",   to: "team" },
];

const recentBookings = [
  { id: "#BK001", name: "Fatima Noor",      service: "Umrah Package",      status: "Confirmed", date: "May 06, 2026" },
  { id: "#BK002", name: "Bilal Chaudhry",   service: "UK Tourist Visa",    status: "Pending",   date: "May 05, 2026" },
  { id: "#BK003", name: "Zara Ahmed",       service: "ISB → DXB Flight",   status: "Confirmed", date: "May 05, 2026" },
  { id: "#BK004", name: "Usman Tariq",      service: "Europe Explorer",    status: "Processing",date: "May 04, 2026" },
  { id: "#BK005", name: "Sara Khan",        service: "Canada Visit Visa",  status: "Rejected",  date: "May 03, 2026" },
];

const recentMessages = [
  { name: "Ahmed Ali",    subject: "Hajj Package Inquiry",     time: "2 hrs ago",  read: false },
  { name: "Hina Raza",   subject: "UK Student Visa Help",      time: "5 hrs ago",  read: false },
  { name: "Omar Sheikh", subject: "Group Flight Booking",      time: "Yesterday",  read: true  },
  { name: "Nadia Butt",  subject: "Europe Tour Package",       time: "Yesterday",  read: true  },
];

const statusStyle = {
  Confirmed:  "bg-green-400/10 text-green-400 border-green-400/20",
  Pending:    "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Processing: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Rejected:   "bg-red-400/10 text-red-400 border-red-400/20",
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">

      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-white font-bold text-2xl">Good morning, Admin 👋</h2>
          <p className="text-sky-400 text-sm mt-1">Here's what's happening with Abu Hamdan Aviation today.</p>
        </div>
        <div className="text-sky-400 text-sm bg-sky-900/40 border border-cyan-400/10 rounded-xl px-4 py-2">
          📅 {new Date().toDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s) => (
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
            <p className="text-cyan-400 text-[10px]">{s.change}</p>
          </Link>
        ))}
      </div>

      {/* Two columns */}
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
                {recentBookings.map((b) => (
                  <tr key={b.id} className="border-b border-cyan-400/5 hover:bg-sky-800/20 transition">
                    <td className="px-5 py-3 text-cyan-400 text-xs font-mono">{b.id}</td>
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
            {recentMessages.map((m, i) => (
              <div key={i} className={`px-5 py-4 flex flex-col gap-1 hover:bg-sky-800/20 transition cursor-pointer ${!m.read ? "bg-cyan-400/5" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-medium ${m.read ? "text-sky-300" : "text-white"}`}>{m.name}</p>
                  {!m.read && <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />}
                </div>
                <p className="text-sky-400 text-xs">{m.subject}</p>
                <p className="text-sky-600 text-[10px]">{m.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-5">
        <h3 className="text-white font-semibold text-sm mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Add Package",    to: "/admin/packages", icon: "🧳" },
            { label: "Add Flight",     to: "/admin/flights",  icon: "✈️" },
            { label: "Review Visas",   to: "/admin/visas",    icon: "📋" },
            { label: "Read Messages",  to: "/admin/messages", icon: "💬" },
            { label: "Edit Team",      to: "/admin/team",     icon: "👥" },
            { label: "Edit Pages",     to: "/admin/pages",    icon: "🗂️" },
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