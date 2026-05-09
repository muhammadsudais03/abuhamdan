import { useState } from "react";
import { useAdmin } from "./AdminContext";

const statusStyle = {
  Active:   "bg-green-400/10 text-green-400 border-green-400/20",
  Inactive: "bg-red-400/10 text-red-400 border-red-400/20",
};

const categoryOptions = ["All", "Umrah", "Hajj", "Tours", "Tickets"];

export default function AdminPackages() {
  const { packages, updatePackage, deletePackage, addPackage } = useAdmin();

  const [filter, setFilter]         = useState("All");
  const [search, setSearch]         = useState("");
  const [selected, setSelected]     = useState(null);
  const [showAdd, setShowAdd]       = useState(false);
  const [confirmDel, setConfirmDel] = useState(null);
  const [editMode, setEditMode]     = useState(false);

  const [form, setForm] = useState({
    title: "", category: "Umrah", price: "",
    duration: "", status: "Active",
  });

  // ── Filtered list ──
  const filtered = packages.filter((p) => {
    const matchCat    = filter === "All" || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.id.toLowerCase().includes(search.toLowerCase()) ||
                        p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // ── Add ──
  const handleAdd = () => {
    if (!form.title || !form.price || !form.duration) return;
    addPackage(form);
    setForm({ title: "", category: "Umrah", price: "", duration: "", status: "Active" });
    setShowAdd(false);
  };

  // ── Edit ──
  const handleEdit = () => {
    updatePackage(selected.id, form);
    setSelected(null);
    setEditMode(false);
  };

  const openEdit = (pkg) => {
    setSelected(pkg);
    setForm({
      title: pkg.title, category: pkg.category,
      price: pkg.price, duration: pkg.duration, status: pkg.status,
    });
    setEditMode(true);
  };

  const inputClass = "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition";
  const labelClass = "text-sky-400 text-xs uppercase tracking-widest mb-1 block";

  return (
    <div className="flex flex-col gap-6">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white font-bold text-2xl">Packages</h2>
          <p className="text-sky-400 text-sm mt-1">{packages.length} total packages</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-cyan-400 text-sky-950 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-cyan-300 transition w-fit"
        >
          + Add Package
        </button>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categoryOptions.filter(c => c !== "All").map((cat) => (
          <div key={cat} className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-4">
            <p className="text-sky-400 text-xs mb-1">{cat}</p>
            <p className="text-2xl font-bold text-white">
              {packages.filter(p => p.category === cat).length}
            </p>
            <p className="text-cyan-400 text-[10px] mt-1">
              {packages.filter(p => p.category === cat && p.status === "Active").length} active
            </p>
          </div>
        ))}
      </div>

      {/* ── FILTERS ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by title, category or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-sky-900/40 border border-cyan-400/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
        />
        <div className="flex gap-2 flex-wrap">
          {categoryOptions.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === c
                  ? "bg-cyan-400 text-sky-950"
                  : "border border-cyan-400/20 text-sky-300 hover:border-cyan-400/40"
              }`}
            >
              {c}
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
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Title</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden sm:table-cell">Category</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden md:table-cell">Duration</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden md:table-cell">Price</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium hidden lg:table-cell">Bookings</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Status</th>
                <th className="text-left text-sky-400 text-xs px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center text-sky-500 py-10 text-sm">
                    No packages found.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="border-b border-cyan-400/5 hover:bg-sky-800/20 transition">
                    <td className="px-5 py-3 text-cyan-400 text-xs font-mono">#{p.id}</td>
                    <td className="px-5 py-3">
                      <p className="text-white text-xs font-medium">{p.title}</p>
                    </td>
                    <td className="px-5 py-3 hidden sm:table-cell">
                      <span className="text-[10px] text-sky-400 border border-sky-400/20 rounded-full px-2 py-0.5">
                        {p.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sky-300 text-xs hidden md:table-cell">{p.duration}</td>
                    <td className="px-5 py-3 text-sky-300 text-xs hidden md:table-cell">{p.price}</td>
                    <td className="px-5 py-3 hidden lg:table-cell">
                      <div className="flex items-center gap-1">
                        <span className="text-cyan-400 font-bold text-xs">{p.bookings}</span>
                        <span className="text-sky-500 text-xs">bookings</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => updatePackage(p.id, { status: p.status === "Active" ? "Inactive" : "Active" })}
                        className={`text-[10px] px-2 py-1 rounded-full border transition hover:opacity-80 ${statusStyle[p.status]}`}
                      >
                        {p.status}
                      </button>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelected(p)}
                          className="text-[10px] text-cyan-400 border border-cyan-400/20 px-2 py-1 rounded-lg hover:bg-cyan-400/10 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => openEdit(p)}
                          className="text-[10px] text-yellow-400 border border-yellow-400/20 px-2 py-1 rounded-lg hover:bg-yellow-400/10 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setConfirmDel(p.id)}
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
      {selected && !editMode && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-cyan-400/20 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Package Details</h3>
              <button onClick={() => setSelected(null)} className="text-sky-400 hover:text-white transition text-xl">✕</button>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Package ID", value: `#${selected.id}` },
                { label: "Title",      value: selected.title },
                { label: "Category",   value: selected.category },
                { label: "Duration",   value: selected.duration },
                { label: "Price",      value: selected.price },
                { label: "Bookings",   value: selected.bookings },
                { label: "Status",     value: selected.status },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center border-b border-cyan-400/5 pb-2">
                  <span className="text-sky-400 text-xs">{row.label}</span>
                  <span className={`text-xs font-medium ${
                    row.label === "Status"
                      ? selected.status === "Active" ? "text-green-400" : "text-red-400"
                      : "text-white"
                  }`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => openEdit(selected)}
                className="flex-1 border border-yellow-400/30 text-yellow-400 py-2.5 rounded-lg text-sm hover:bg-yellow-400/10 transition"
              >
                Edit
              </button>
              <button
                onClick={() => setSelected(null)}
                className="flex-1 bg-cyan-400 text-sky-950 py-2.5 rounded-lg font-semibold text-sm hover:bg-cyan-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── EDIT MODAL ── */}
      {editMode && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-cyan-400/20 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Edit Package</h3>
              <button onClick={() => { setEditMode(false); setSelected(null); }} className="text-sky-400 hover:text-white transition text-xl">✕</button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Title</label>
                <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Category</label>
                  <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className={inputClass}>
                    {["Umrah", "Hajj", "Tours", "Tickets"].map(c => (
                      <option key={c} className="bg-sky-950">{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Status</label>
                  <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className={inputClass}>
                    <option className="bg-sky-950">Active</option>
                    <option className="bg-sky-950">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Price</label>
                  <input value={form.price} onChange={e => setForm({...form, price: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Duration</label>
                  <input value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className={inputClass} />
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => { setEditMode(false); setSelected(null); }}
                  className="flex-1 border border-cyan-400/20 text-sky-300 py-2.5 rounded-lg text-sm hover:bg-sky-800/40 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEdit}
                  className="flex-1 bg-cyan-400 text-sky-950 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRM ── */}
      {confirmDel && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-red-400/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center">
            <p className="text-4xl mb-3">🗑️</p>
            <h3 className="text-white font-bold text-lg mb-2">Delete Package?</h3>
            <p className="text-sky-400 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDel(null)}
                className="flex-1 border border-cyan-400/20 text-sky-300 py-2.5 rounded-lg text-sm hover:bg-sky-800/40 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => { deletePackage(confirmDel); setConfirmDel(null); }}
                className="flex-1 bg-red-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-red-400 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── ADD MODAL ── */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 border border-cyan-400/20 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Add New Package</h3>
              <button onClick={() => setShowAdd(false)} className="text-sky-400 hover:text-white transition text-xl">✕</button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Title</label>
                <input
                  placeholder="e.g. Economy Umrah Package"
                  value={form.title}
                  onChange={e => setForm({...form, title: e.target.value})}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Category</label>
                  <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className={inputClass}>
                    {["Umrah", "Hajj", "Tours", "Tickets"].map(c => (
                      <option key={c} className="bg-sky-950">{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Status</label>
                  <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className={inputClass}>
                    <option className="bg-sky-950">Active</option>
                    <option className="bg-sky-950">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Price</label>
                  <input
                    placeholder="PKR 180,000"
                    value={form.price}
                    onChange={e => setForm({...form, price: e.target.value})}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Duration</label>
                  <input
                    placeholder="10 Days"
                    value={form.duration}
                    onChange={e => setForm({...form, duration: e.target.value})}
                    className={inputClass}
                  />
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
                  Add Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}