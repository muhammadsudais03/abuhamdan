import { useState } from "react";
import { useAdmin } from "./AdminContext";

export default function AdminMessages() {
  const { messages, markMessageRead, deleteMessage, markAllRead } =
    useAdmin();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [confirmDel, setConfirmDel] = useState(null);

  // Filter messages
  const filtered = messages.filter((m) => {
    const matchFilter =
      filter === "All"
        ? true
        : filter === "Unread"
        ? !m.read
        : m.read;

    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  const openMessage = (m) => {
    setSelected(m);
    if (!m.read) markMessageRead(m.id);
  };

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white text-2xl font-bold">Messages</h2>
          <p className="text-sky-400 text-sm">
            {messages.filter((m) => !m.read).length} unread of{" "}
            {messages.length} total
          </p>
        </div>

        <button
          onClick={markAllRead}
          className="border border-cyan-400/30 text-cyan-400 px-5 py-2.5 rounded-xl text-sm hover:bg-cyan-400/10 transition"
        >
          ✓ Mark All Read
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-sky-900/40 p-4 rounded-2xl text-center">
          <p className="text-white text-2xl font-bold">{messages.length}</p>
          <p className="text-sky-400 text-xs">Total</p>
        </div>

        <div className="bg-sky-900/40 p-4 rounded-2xl text-center">
          <p className="text-cyan-400 text-2xl font-bold">
            {messages.filter((m) => !m.read).length}
          </p>
          <p className="text-sky-400 text-xs">Unread</p>
        </div>

        <div className="bg-sky-900/40 p-4 rounded-2xl text-center">
          <p className="text-green-400 text-2xl font-bold">
            {messages.filter((m) => m.read).length}
          </p>
          <p className="text-sky-400 text-xs">Read</p>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-sky-900/40 border border-cyan-400/10 rounded-xl px-4 py-2 text-white"
        />

        <div className="flex gap-2">
          {["All", "Unread", "Read"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm ${
                filter === f
                  ? "bg-cyan-400 text-sky-950"
                  : "border border-cyan-400/20 text-sky-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* MESSAGE LIST */}
      <div className="bg-sky-900/40 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center text-sky-500 py-10">
            No messages found
          </div>
        ) : (
          filtered.map((m) => (
            <div
              key={m.id}
              onClick={() => openMessage(m)}
              className={`p-5 border-b border-cyan-400/10 cursor-pointer hover:bg-sky-800/20 ${
                !m.read ? "bg-cyan-400/5" : ""
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-white font-medium">{m.name}</p>
                  <p className="text-sky-400 text-xs">{m.subject}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmDel(m.id);
                  }}
                  className="text-red-400 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* VIEW MESSAGE MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 p-6 rounded-2xl w-full max-w-lg">

            <div className="flex justify-between mb-4">
              <h3 className="text-white text-lg font-bold">
                Message
              </h3>

              <button
                onClick={() => setSelected(null)}
                className="text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-white font-semibold">
              {selected.name}
            </p>

            <p className="text-sky-400 text-sm">
              {selected.email}
            </p>

            <p className="text-sky-400 text-sm mb-4">
              {selected.phone}
            </p>

            <p className="text-cyan-400 text-sm mb-2">
              {selected.subject}
            </p>

            <div className="bg-sky-950 p-4 rounded-xl text-sky-200 mb-5">
              {selected.message}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">

              <a
                href={`https://wa.me/${selected.phone
                  ?.replace(/\s/g, "")
                  .replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500/10 border border-green-400/30 text-green-400 py-2 rounded-lg"
              >
                💬 WhatsApp
              </a>

              <a
                href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                className="flex-1 text-center bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 py-2 rounded-lg"
              >
                ✉️ Reply Email
              </a>

              <button
                onClick={() => setSelected(null)}
                className="flex-1 bg-sky-800 text-sky-300 py-2 rounded-lg"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {confirmDel && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 p-6 rounded-2xl w-full max-w-sm text-center">

            <h3 className="text-white text-lg font-bold mb-2">
              Delete Message?
            </h3>

            <p className="text-sky-400 mb-5">
              This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDel(null)}
                className="flex-1 border border-cyan-400/20 py-2 rounded-lg text-sky-300"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteMessage(confirmDel);
                  setConfirmDel(null);
                  setSelected(null);
                }}
                className="flex-1 bg-red-500 py-2 rounded-lg text-white"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}