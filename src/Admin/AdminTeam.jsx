import { useState } from "react";
import { useAdmin } from "./AdminContext";

export default function AdminTeam() {
  const {
  team = [],
  updateTeamMember,
  deleteTeamMember,
  addTeamMember,
} = useAdmin();

  const emptyForm = {
    name: "",
    role: "",
    email: "",
    phone: "",
    status: "Active",
    image: "",
  };

  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [confirmDel, setConfirmDel] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const inputClass =
    "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition";

  const labelClass =
    "text-sky-400 text-xs uppercase tracking-widest mb-1 block";

  const resetAll = () => {
    setSelected(null);
    setShowAdd(false);
    setEditMode(false);
    setConfirmDel(null);
    setForm(emptyForm);
  };

  const openEdit = (member) => {
    setSelected(member);
    setForm({
      name: member.name,
      role: member.role,
      email: member.email,
      phone: member.phone,
      status: member.status,
      image: member.image || "",
    });
    setEditMode(true);
  };

  const handleEdit = () => {
    if (!selected) return;
    updateTeamMember(selected.id, form);
    resetAll();
  };

  const handleAdd = () => {
    if (!form.name || !form.role || !form.email) return;
    addTeamMember(form);
    resetAll();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white text-2xl font-bold">Team</h2>
          <p className="text-sky-400 text-sm">
          {Array.isArray(team) ? team.length : 0} team members
          </p>
        </div>

        <button
          onClick={() => {
            setShowAdd(true);
            setForm(emptyForm);
          }}
          className="bg-cyan-400 text-sky-950 px-5 py-2.5 rounded-xl font-semibold hover:bg-cyan-300"
        >
          + Add Member
        </button>
      </div>

      {/* TEAM CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {!Array.isArray(team) || team.length === 0 ? (
          <div className="text-sky-400">No team members found.</div>
        ) : (
          team.map((member) => (
            <div
              key={member.id}
              className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl text-cyan-400/30 bg-sky-800">
                    👤
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="p-4 space-y-2">
                <p className="text-white font-semibold">{member.name}</p>
                <p className="text-cyan-400 text-xs">{member.role}</p>
                <p className="text-sky-400 text-xs">{member.email}</p>
                <p className="text-sky-400 text-xs">{member.phone}</p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      setSelected(member);
                      setEditMode(false);
                    }}
                    className="flex-1 text-cyan-400 border border-cyan-400/20 rounded-lg py-1"
                  >
                    View
                  </button>

                  <button
                    onClick={() => openEdit(member)}
                    className="flex-1 text-yellow-400 border border-yellow-400/20 rounded-lg py-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setConfirmDel(member.id)}
                    className="flex-1 text-red-400 border border-red-400/20 rounded-lg py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* VIEW MODAL */}
      {selected && !editMode && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 p-6 rounded-2xl w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h3 className="text-white font-bold">Team Member</h3>
              <button onClick={resetAll} className="text-white">
                ✕
              </button>
            </div>

            <div className="text-center space-y-3">
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              ) : (
                <div className="text-5xl">👤</div>
              )}

              <p className="text-white">{selected.name}</p>
              <p className="text-cyan-400">{selected.role}</p>
              <p className="text-sky-400">{selected.email}</p>
              <p className="text-sky-400">{selected.phone}</p>

              <button
                onClick={resetAll}
                className="w-full bg-cyan-400 text-sky-950 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      {(showAdd || editMode) && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 p-6 rounded-2xl w-full max-w-lg">
            <div className="flex justify-between mb-5">
              <h3 className="text-white font-bold">
                {editMode ? "Edit Member" : "Add Member"}
              </h3>
              <button onClick={resetAll} className="text-white">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Role</label>
                <input
                  className={inputClass}
                  value={form.role}
                  onChange={(e) =>
                    setForm({ ...form, role: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  className={inputClass}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Phone</label>
                <input
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Image URL</label>
                <input
                  className={inputClass}
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={resetAll}
                  className="flex-1 border border-cyan-400 text-cyan-400 py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={editMode ? handleEdit : handleAdd}
                  className="flex-1 bg-cyan-400 text-sky-950 py-2 rounded-lg"
                >
                  {editMode ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {confirmDel && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-sky-900 p-6 rounded-2xl text-center w-full max-w-sm">
            <h3 className="text-white mb-5">Delete team member?</h3>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDel(null)}
                className="flex-1 border border-cyan-400 text-cyan-400 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteTeamMember(confirmDel);
                  resetAll();
                }}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
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