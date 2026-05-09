import { useState } from "react";
import { useAdmin } from "./AdminContext";

const statusStyle = {
  Active: "bg-green-400/10 text-green-400 border-green-400/20",
  Inactive: "bg-red-400/10 text-red-400 border-red-400/20",
};

const typeOptions = ["All", "International", "Domestic"];

export default function AdminFlights() {
  const { flights, addFlight, deleteFlight, updateFlightStatus } = useAdmin();

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const [form, setForm] = useState({
    from: "",
    to: "",
    airline: "",
    price: "",
    type: "International",
    status: "Active",
  });

  // ── FILTER ──
  const filtered = flights.filter((f) => {
    const matchType = filter === "All" || f.type === filter;

    const matchSearch =
      f.from.toLowerCase().includes(search.toLowerCase()) ||
      f.to.toLowerCase().includes(search.toLowerCase()) ||
      f.airline.toLowerCase().includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  // ── ADD FLIGHT ──
  const handleAdd = () => {
    if (!form.from || !form.to || !form.airline) return;

    addFlight(form);

    setForm({
      from: "",
      to: "",
      airline: "",
      price: "",
      type: "International",
      status: "Active",
    });

    setShowAdd(false);
  };

  const inputClass =
    "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400";

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-white text-2xl font-bold">Flights</h2>
          <p className="text-sky-400 text-sm">{flights.length} total flights</p>
        </div>

        <button
          onClick={() => setShowAdd(true)}
          className="bg-cyan-400 text-sky-950 px-5 py-2 rounded-lg font-semibold"
        >
          + Add Flight
        </button>
      </div>

      {/* FILTER */}
      <div className="flex gap-3 flex-wrap">
        <input
          placeholder="Search flights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-sky-900/40 border border-cyan-400/10 px-4 py-2 rounded-lg text-white"
        />

        {typeOptions.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-lg text-sm ${
              filter === t
                ? "bg-cyan-400 text-sky-950"
                : "border border-cyan-400/20 text-sky-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-sky-400 border-b border-cyan-400/10">
              <th className="p-3 text-left">Route</th>
              <th className="p-3 text-left">Airline</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((f) => (
              <tr key={f.id} className="border-b border-sky-800/30">
                <td className="p-3 text-white">
                  {f.from} → {f.to}
                </td>

                <td className="p-3 text-sky-300">{f.airline}</td>

                <td className="p-3 text-sky-300">{f.price}</td>

                <td className="p-3 text-sky-400 text-xs">{f.type}</td>

                <td className="p-3">
                  <select
                    value={f.status}
                    onChange={(e) =>
                      updateFlightStatus(f.id, e.target.value)
                    }
                    className={`px-2 py-1 rounded text-xs border bg-transparent ${statusStyle[f.status]}`}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => deleteFlight(f.id)}
                    className="text-red-400 text-xs border border-red-400/20 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-sky-900 p-6 rounded-xl w-[400px] flex flex-col gap-3">

            <h3 className="text-white text-lg font-bold">Add Flight</h3>

            <input placeholder="From" value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className={inputClass}
            />

            <input placeholder="To" value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className={inputClass}
            />

            <input placeholder="Airline" value={form.airline}
              onChange={(e) => setForm({ ...form, airline: e.target.value })}
              className={inputClass}
            />

            <input placeholder="Price" value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className={inputClass}
            />

            <div className="flex gap-2">
              <button
                onClick={handleAdd}
                className="flex-1 bg-cyan-400 text-sky-950 py-2 rounded"
              >
                Add
              </button>

              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 border border-cyan-400/20 text-white py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}