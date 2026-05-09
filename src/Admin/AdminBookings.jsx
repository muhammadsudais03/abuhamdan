import { useState } from "react";
import { useAdmin } from "./AdminContext";

const statusStyle = {
  Confirmed:  "bg-green-400/10 text-green-400 border-green-400/20",
  Pending:    "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Processing: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Rejected:   "bg-red-400/10 text-red-400 border-red-400/20",
};

const statusOptions = ["Confirmed", "Pending", "Processing", "Rejected"];
const typeOptions   = ["All", "Package", "Visa", "Flight"];

export default function AdminBookings() {
  const { bookings, updateBookingStatus, deleteBooking, addBooking } = useAdmin();

  const [filter, setFilter]       = useState("All");
  const [search, setSearch]       = useState("");
  const [selected, setSelected]   = useState(null);   // view modal
  const [showAdd, setShowAdd]     = useState(false);  // add modal
  const [confirmDel, setConfirmDel] = useState(null); // delete confirm

  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "",
    type: "Package", status: "Pending", date: "", amount: "",
  });

  // ── Filtered list ──
  const filtered = bookings.filter((b) => {
    const matchType   = filter === "All" || b.type === filter;
    const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) ||
                        b.service.toLowerCase().includes(search.toLowerCase()) ||
                        b.id.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  // ── Add booking ──
  const handleAdd = () => {
    if (!form.name || !form.service || !form.date) return;
    addBooking(form);
    setForm({ name: "", email: "", phone: "", service: "", type: "Package", status: "Pending", date: "", amount: "" });
    setShowAdd(false);
  };

  const inputClass = "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition";
  const labelClass = "text-sky-400 text-xs uppercase tracking-widest mb-1 block";

  return (
    <div className="flex flex-col gap-6">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white font-bold text-2xl">Bookings</h2>
          <p className="text-sky-400 text-sm mt-1">{bookings.length} total bookings</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-cyan-400 text-sky-950 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-cyan-300 transition w-fit"
        >
          + Add Booking
        </button>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statusOptions.map((s) => (
          <div key={s} className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-4">
            <p className="text-sky-400 text-xs mb-1">{s}</p>
            <p className="text-2xl font-bold text-white">
              {bookings.filter(b => b.status === s).length}
            </p>
          </div>
        ))}
      </div>

      {/* ── FILTERS ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by name, service or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-sky-900/40 border border-cyan-400/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
        />
        <div className="flex gap-2 flex-wrap">
          {typeOptions.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === t
                  ? "bg-cyan-400 text-sky-950"
                  : "border border-cyan-400/20 text-sky-300 hover:border-cyan-400/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ── TABLE ── */}
      <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cyan-400/10">
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">ID</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Customer</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden sm:table-cell">Service</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden md:table-cell">Type</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Status</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden lg:table-cell">Amount</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden md:table-cell">Date</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center text-sky-500 py-10 text-sm">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                filtered.map((b) => (
                  <tr key={b.id} className="border-b border-cyan-400/5 hover:bg-sky-800/20 transition">
                    <td className="px-5 py-3 text-cyan-400 text-xs font-mono">#{b.id}</td>
                    <td className="px-5 py-3">
                      <p className="text-white text-xs font-medium">{b.name}</p>
                      <p className="text-sky-500 text-[10px]">{b.email}</p>
                    </td>
                    <td className="px-5 py-3 text-sky-300 text-xs hidden sm:table-cell">{b.service}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className="text-[10px] text-sky-400 border border-sky-400/20 rounded-full px-2 py-0.5">{b.type}</span>
                    </td>
                    <td className="px-5 py-3">
                      <select
                        value={b.status}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                        className={`text-[10px] px-2 py-1 rounded-full border bg-transparent cursor-pointer focus:outline-none ${statusStyle[b.status]}`}
                      >
                        {statusOptions.map(s => (
                          <option key={s} value={s} className="bg-sky-950 text-white">{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3 text-sky-300 text-xs hidden lg:table-cell">{b.amount}</td>
                    <td className="px-5 py-3 text-sky-400 text-xs hidden md:table-cell">{b.date}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelected(b)}
                          className="text-[10px] text-cyan-400 border border-cyan-400/20 px-2 py-1 rounded-lg hover:bg-cyan-400/10 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => setConfirmDel(b.id)}
                          className="text-[10px] text-red-400 border border-red-400/20 px-2 py-1 rounded-lg hover:bg-red-400/10 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── VIEW MODAL ── */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-cyan-400/20 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Booking Details</h3>
              <button onClick={() => setSelected(null)} className="text-sky-400 hover:text-white transition text-xl">✕</button>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Booking ID",  value: `#${selected.id}` },
                { label: "Customer",    value: selected.name },
                { label: "Email",       value: selected.email },
                { label: "Phone",       value: selected.phone },
                { label: "Service",     value: selected.service },
                { label: "Type",        value: selected.type },
                { label: "Amount",      value: selected.amount },
                { label: "Date",        value: selected.date },
                { label: "Status",      value: selected.status },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center border-b border-cyan-400/5 pb-2">
                  <span className="text-sky-400 text-xs">{row.label}</span>
                  <span className={`text-xs font-medium ${row.label === "Status" ? (statusStyle[row.value]?.split(" ")[1] || "text-white") : "text-white"}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <select
                value={selected.status}
                onChange={(e) => {
                  updateBookingStatus(selected.id, e.target.value);
                  setSelected({ ...selected, status: e.target.value });
                }}
                className="flex-1 bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                {statusOptions.map(s => (
                  <option key={s} value={s} className="bg-sky-950">{s}</option>
                ))}
              </select>
              <button
                onClick={() => setSelected(null)}
                className="bg-cyan-400 text-sky-950 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-cyan-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRM MODAL ── */}
      {confirmDel && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-red-400/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center">
            <p className="text-4xl mb-3">🗑️</p>
            <h3 className="text-white font-bold text-lg mb-2">Delete Booking?</h3>
            <p className="text-sky-400 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDel(null)}
                className="flex-1 border border-cyan-400/20 text-sky-300 py-2.5 rounded-lg text-sm hover:bg-sky-800/40 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => { deleteBooking(confirmDel); setConfirmDel(null); }}
                className="flex-1 bg-red-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-red-400 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── ADD BOOKING MODAL ── */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-cyan-400/20 rounded-2xl p-6 w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Add New Booking</h3>
              <button onClick={() => setShowAdd(false)} className="text-sky-400 hover:text-white transition text-xl">✕</button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input placeholder="+92 300 0000000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input placeholder="email@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Service</label>
                <input placeholder="e.g. Umrah Package / ISB → DXB" value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Type</label>
                  <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className={inputClass}>
                    <option className="bg-sky-950">Package</option>
                    <option className="bg-sky-950">Visa</option>
                    <option className="bg-sky-950">Flight</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Status</label>
                  <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className={inputClass}>
                    {statusOptions.map(s => <option key={s} className="bg-sky-950">{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Amount</label>
                  <input placeholder="PKR 50,000" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Date</label>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className={inputClass} />
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setShowAdd(false)}
                  className="flex-1 border border-cyan-400/20 text-sky-300 py-2.5 rounded-lg text-sm hover:bg-sky-800/40 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="flex-1 bg-cyan-400 text-sky-950 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition"
                >
                  Add Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}